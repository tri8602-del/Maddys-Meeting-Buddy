/* Maddy's Meeting Buddy — offline copy (Midweek + Sunday).
   Network first (fresh content when online), cached copy when offline or slow.
   The file list is worked out from index.html, sunday/index.html and the week
   folders named in weeks/current.js, so a weekly update needs no edits here:
   changing weeks/current.js makes the browser install a fresh copy. */
const SW_VERSION = 'mmb-sw-2026-10-13';
importScripts('weeks/current.js');
const CACHE = SW_VERSION + '|' + self.MMB_WEEK.midweek + '|' + self.MMB_WEEK.sunday;
const CORE = ['./', 'index.html', 'weeks/current.js', 'sunday/index.html', 'sunday/engine.js',
  'sunday/brutus.png', 'songs/songs.js'];
const SLOW_MS = 3000;

async function text(url){
  try{ const r = await fetch(url, {cache:'no-cache'}); return r.ok ? await r.text() : ''; }catch(e){ return ''; }
}
function grab(src, re, fn, out){ let m; re.lastIndex = 0; while((m = re.exec(src))) out.add(fn(m)); }
async function fileList(){
  const out = new Set(CORE);
  const MEDIA = /(?:^|["'(\s])((?:media|weeks)\/[\w.\-\/]+\.(?:jpe?g|png|webp|gif|svg|mp3|m4a|mp4|pdf))/g;
  grab(await text('index.html'), MEDIA, m => m[1], out);
  grab(await text('sunday/index.html'), /\.\.\/(media\/[\w.\-]+)/g, m => m[1], out);
  grab(await text('songs/songs.js'), /"(\d{3}-\d+\.png)"/g, m => 'songs/' + m[1], out);   // whole songbook, once
  const mw = self.MMB_WEEK.midweek, sd = self.MMB_WEEK.sunday;
  out.add(mw + '/week.js');
  grab(await text(mw + '/week.js'), MEDIA, m => m[1], out);
  out.add(sd + '/data.js');
  const data = await text(sd + '/data.js');
  grab(data, /\bwt:\s*'([^']+)'/g, m => sd + '/' + m[1], out);
  grab(data, /\bimg:\s*'([^']+)'/g, m => sd + '/' + m[1], out);
  const games = new Set(); grab(data, /\bgame:\s*'([\w\-]+)'/g, m => m[1], games);
  for(const g of games){
    const url = sd + '/games/' + g + '.html'; out.add(url);
    grab(await text(url), /["'(]\.\.\/([\w\-]+\/[\w.\-]+\.(?:jpe?g|png|webp|gif|svg))/g, m => sd + '/' + m[1], out);
  }
  return [...out];
}

self.addEventListener('install', e => {
  e.waitUntil((async () => {
    const c = await caches.open(CACHE);
    const files = await fileList();
    await Promise.all(files.map(f => c.add(new Request(f, {cache:'reload'})).catch(err => console.warn('precache miss', f))));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', e => {
  // Only our own caches. The old Sunday app (smb-sunday-*) shares this origin's cache storage.
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k.startsWith('mmb-sw-') && k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

function fromCache(req){ return caches.open(CACHE).then(c => c.match(req, {ignoreSearch:true})); }
self.addEventListener('fetch', e => {
  const req = e.request;
  if(req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  if(!new URL(req.url).pathname.startsWith(new URL(self.registration.scope).pathname)) return;
  e.respondWith(new Promise(resolve => {
    let done = false;
    const finish = r => { if(!done && r){ done = true; resolve(r); } };
    // no-cache: revalidate with the server (cheap 304) so an upload shows up right away online.
    const net = fetch(req, {cache:'no-cache'}).then(res => {
      if(res && res.status === 200 && res.type === 'basic'){
        const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {});
      }
      return res;
    });
    const timer = setTimeout(() => fromCache(req).then(finish), SLOW_MS);
    net.then(res => { clearTimeout(timer); finish(res); })
       .catch(() => fromCache(req).then(c => { clearTimeout(timer); finish(c || (req.mode === 'navigate' ? fromCache(new Request('index.html')) : Response.error())); }));
  }));
});
