/* ASK BRUTUS — offline Q&A from the week's own bank (no AI, no network beyond the app's own files).
   Each week folder can have ask-brutus.json (weeks/<Monday>/midweek/ or weeks/<Monday>/sunday/).
   Brutus only answers from that file. No good match = bank.noMatch ("Let's ask Mom or Dad").
   Used by index.html (Midweek "Ask Buddy" sheet) and sunday/index.html (Brutus chat).
   Schema: {week, mode, title, source, noMatch, suggested:[qa ids], qa:[{id, q, keys:[...], a, src}]} */
(function(root){
  const STOP = new Set(("a an the is are was were be been am i me my you your he him his she her it its we us our they them their " +
    "what whats who whos why how when where which do does did can could would should will shall to of in on at for with from by " +
    "and or but so if about tell please brutus buddy that this there here have has had get got any some just really very").split(" "));
  function norm(s){
    return String(s||"").toLowerCase().replace(/[’‘`]/g,"'").replace(/'s\b/g,"").replace(/'/g,"")
      .replace(/(\d),(\d)/g,"$1$2").replace(/[^a-z0-9]+/g," ").trim();
  }
  function stem(w){ return w.length>4 ? w.replace(/(ing|ed|es|s)$/,"") : w; }
  function words(s){ return norm(s).split(" ").filter(w => w && !STOP.has(w)).map(stem); }
  function near(a,b){              // one typo allowed on longer words (kids spell creatively)
    if(a===b) return true;
    if(a.length<5 || b.length<5 || Math.abs(a.length-b.length)>1) return false;
    let i=0,j=0,e=0;
    while(i<a.length && j<b.length){
      if(a[i]===b[j]){i++;j++;continue}
      if(++e>1) return false;
      if(a.length>b.length) i++; else if(b.length>a.length) j++; else {i++;j++}
    }
    return e + (a.length-i) + (b.length-j) <= 1;
  }
  function score(entry, q){
    const nq = " "+norm(q)+" ", qw = words(q);
    if(!qw.length) return 0;
    let s = 0;
    for(const k of entry.keys||[]){
      const nk = norm(k); if(!nk) continue;
      if(nq.includes(" "+nk+" ")) s += 2 + nk.split(" ").length;     // whole key phrase found
      else if(nk.indexOf(" ")<0 && qw.some(w => near(w, stem(nk)))) s += 2;   // typo'd single-word key
    }
    const ew = new Set(words(entry.q).concat(...(entry.keys||[]).map(words)));
    let hit = 0;
    for(const w of qw) if([...ew].some(e => near(w,e))) hit++;
    s += hit * 1.5 + (hit/qw.length);
    return s;
  }
  function answer(bank, q){
    if(!bank || !bank.qa || !norm(q)) return null;
    let best=null, bestS=0;
    for(const e of bank.qa){ const s = score(e,q); if(s>bestS){ bestS=s; best=e; } }
    return bestS >= 3 ? best : null;
  }
  function suggestions(bank, asked, n){
    if(!bank || !bank.qa) return [];
    const byId = {}; bank.qa.forEach(e => byId[e.id]=e);
    const order = (bank.suggested||[]).map(id => byId[id]).filter(Boolean).concat(bank.qa);
    const out = [], seen = new Set();
    for(const e of order){ if(seen.has(e.id) || (asked && asked.has(e.id))) continue; seen.add(e.id); out.push(e); if(out.length>=(n||5)) break; }
    return out;
  }
  const cache = {};
  function load(folder){          // folder relative to the page, e.g. "weeks/2026-11-23/sunday"
    if(!folder) return Promise.resolve(null);
    if(!cache[folder]) cache[folder] = fetch(folder.replace(/\/$/,"") + "/ask-brutus.json")
      .then(r => r.ok ? r.json() : null).then(b => (b && Array.isArray(b.qa) && b.qa.length) ? b : null).catch(() => null);
    return cache[folder];
  }
  root.AskBrutus = {load, answer, suggestions, norm, score,
    NO_MATCH: "Great question! Let’s ask Mom or Dad after the meeting!"};
})(typeof self !== "undefined" ? self : this);
