/* MIDWEEK week pack — loaded by index.html before the app engine (see README "Weekly update").
   Week of November 2–8, 2026 · Jeremiah 49–50. Source: Life and Ministry Meeting Workbook,
   November–December 2026 (wol.jw.org), and Walk Courageously With God (wcg) chapter 15.
   Image paths are relative to index.html. */

/* Song titles and lead sheets used by this week's parts (pages from songs/, the "Sing Out Joyfully" book). */
const SONG_TITLES = {
  1: "Song 1 — Jehovah’s Attributes",
  33: "Song 33 — Throw Your Burden on Jehovah",
  44: "Song 44 — A Prayer of the Lowly One"
};
const SONG_SHEETS = {
  1: "songs/001-1.png",
  33: ["songs/033-1.png", "songs/033-2.png"],
  44: "songs/044-1.png"
};
const SONG_LYRICS = {};


/* ============================================================
   WEEK PACK — edit this block when the meeting changes.
   Required: id, heading, range, start [Y,M,D,h,m,s] (month 0-11),
   secretWord, secretChoices, secretHint, secretFoundBlurb,
   meetingParts[], PART_CHECKS[] (one per part), PART_GAMES[] (one per part).
   Songs: set part.song to a number that exists in SONG_SHEETS.
   ============================================================ */
const WEEK = {
  id: "2026-11-02",
  heading: "Jeremiah 49–50",
  range: "November 2–8, 2026",
  start: [2026, 10, 3, 19, 0, 0],
  secretKind: "word",
  secretWord: "Mercy",
  secretChoices: ["Mercy","Snare","Gleaning","Armor"],
  secretHint: "Listen in Treasures. Jehovah showed this to the Israelites who were sorry, and we help others benefit from it too.",
  secretFoundBlurb: "Jehovah forgave the Israelites who were sorry. That is mercy! We help people learn about Jehovah’s mercy when we preach the good news.",
  prizeText: "Congratulations — you had a perfect meeting! Mommy and Daddy will take you to get one thing from Sheetz!"
};

const meetingParts = [
  {section:"Opening",title:"Song 1 and Opening Comments",minutes:1,kind:"normal",song:1,
    listen:"Stand ready for song 1, then listen to the opening comments.",
    buddy:"This meeting is Jeremiah 49 and 50. Listen for Babylon and for Jehovah’s mercy.",
    html:`<div class="material-block"><strong>Song 1 and Prayer</strong> — Jehovah’s Attributes</div>
<div class="material-block">Opening Comments <em>(1 min.)</em></div>`},
  {section:"Treasures From God’s Word",title:"Help Others Benefit From Jehovah’s Mercy",minutes:10,kind:"answer",
    listen:"Listen for two things: what Jehovah did to proud Babylon, and what he did for the Israelites who were sorry.",
    buddy:"Babylon was proud and did very bad things, so Jehovah judged her. But he completely forgave the Israelites who were sorry.",
    html:`<div class="material-block"><ul>
<li>Jehovah rightly condemned Babylon for her great sins and arrogant attitude <strong>(Jer 50:14, 29, 31)</strong></li>
<li>Jehovah completely forgave repentant Israelites <strong>(Jer 50:20)</strong></li>
<li>Christians strive to imitate Jehovah’s mercy by declaring the good news and helping people flee from false religion <strong>(Jer 50:2, 8)</strong></li>
</ul></div>
<div class="source-pic"><img src="weeks/2026-11-02/midweek/mwb-mercy.jpg" alt="A sister studies the Bible with an elderly woman who has idols in her home"><p>A sister studies the Bible with an elderly woman. They read from the woman’s own Bible.</p></div>`},
  {section:"Treasures From God’s Word",title:"Spiritual Gems",minutes:10,kind:"questions",
    listen:"Listen for the word “snare.” A snare is a trap. How did Jehovah catch Babylon?",
    buddy:"A snare is a trap. Babylon felt safe behind its walls and river, but it was caught by surprise, just like an animal in a trap.",
    questions:["Jer 50:24—In what way did Jehovah catch Babylon in a “snare”?","What spiritual gems from this week’s Bible reading would you like to share?"],
    html:`<div class="material-block review-question"><p><strong>Jer 50:24</strong> — In what way did Jehovah catch Babylon in a “snare”?</p></div>
<div class="material-block"><p class="review-question">What spiritual gems from this week’s Bible reading would you like to share?</p></div>`},
  {section:"Treasures From God’s Word",title:"Bible Reading",minutes:4,kind:"answer",
    listen:"Follow Jeremiah 50:24-40. What will happen to Babylon’s waters?",
    buddy:"This reading is Jeremiah 50:24-40. Babylon’s waters would dry up, and nobody would live there anymore.",
    html:`<div class="material-block"><strong>Jeremiah 50:24-40</strong> <em>(th study 11)</em></div>
<div class="material-block">Jehovah set a snare for Babylon, and she was caught without knowing it. Babylon was proud against Jehovah. Her waters would dry up, and in the end nobody would live there anymore, just like Sodom and Gomorrah.</div>`},
  {section:"Apply Yourself to the Field Ministry",title:"Starting a Conversation",minutes:3,kind:"answer",
    listen:"Which Bible truth do they share at the door?",
    buddy:"House to house. They share a Bible truth, maybe one from appendix A of the Love People brochure.",
    html:`<div class="material-block"><strong>HOUSE TO HOUSE.</strong> Share a Bible truth, such as one from appendix A of the <em>Love People</em> brochure. <em>(lmd lesson 1 point 5)</em></div>`},
  {section:"Apply Yourself to the Field Ministry",title:"Following Up",minutes:4,kind:"answer",
    listen:"The person wants to talk about something different. What does the publisher do?",
    buddy:"House to house. The person is interested in a different subject. A good teacher listens and talks about what the person cares about.",
    html:`<div class="material-block"><strong>HOUSE TO HOUSE.</strong> The person expresses interest in a subject different from the one you returned to discuss. <em>(lmd lesson 9 point 3)</em></div>`},
  {section:"Apply Yourself to the Field Ministry",title:"Making Disciples",minutes:5,kind:"answer",
    listen:"Watch a Bible study from the Enjoy Life Forever! book. What does the student learn?",
    buddy:"This is a Bible study. They use lesson 20 of the Enjoy Life Forever! book.",
    html:`<div class="material-block"><strong>Making Disciples</strong> <em>(5 min.)</em> lff lesson 20 point 4 <em>(lmd lesson 11 point 4)</em></div>`},
  {section:"Living as Christians",title:"Song 44 — A Prayer of the Lowly One",minutes:0,kind:"song",song:44,
    listen:"Follow the words. This song is a prayer asking Jehovah for help.",
    buddy:"We can ask Jehovah for help anytime.",
    html:`<div class="material-block"><strong>Song 44</strong> — A Prayer of the Lowly One</div>`},
  {section:"Living as Christians",title:"Never Forget What Jehovah Remembers",minutes:15,kind:"questions",
    listen:"Watch the video. Think of one lesson you learned.",
    buddy:"Watch the video carefully. Afterward the brother asks, “What lessons did you learn?” You can tell Mommy one.",
    questions:["What lessons did you learn?"],
    html:`<div class="material-block"><strong>Discussion.</strong> Play the VIDEO <em>Never Forget What Jehovah Remembers</em>. Then ask the audience:</div>
<div class="review-list"><div class="review-question"><strong>What lessons did you learn?</strong></div></div>`},
  {section:"Congregation Bible Study",title:"They Faced Tragedy Together — Naomi and Ruth",minutes:30,kind:"cbs",
    listen:"Listen for what Ruth said to Naomi on the road to Bethlehem.",
    buddy:"Ruth said: “Where you go I will go . . . Your people will be my people, and your God my God.”",
    html:`<div class="cbs-reference"><strong>Walk Courageously With God, chapter 15</strong><br>Read: Ruth 1:1–4:22</div>
<div class="source-pic"><img src="weeks/2026-11-02/midweek/wcg-bethlehem.jpg" alt="Ruth and Naomi arriving in Bethlehem"><p>Two grieving women had to endure their losses and find refuge among Jehovah’s people.</p></div>
<div class="story-text">
<p>Naomi lived in Moab with her family. Sadly, her husband died, and later both of her sons died too.</p>
<p>Naomi decided to go home to Bethlehem. She told her daughters-in-law, Ruth and Orpah, to go back to their mothers. Orpah left, but Ruth stayed.</p>
<p>Ruth said: “Where you go I will go . . . Your people will be my people, and your God my God.” She chose Jehovah as her God.</p>
<p>In Bethlehem, Ruth worked hard gleaning grain to take care of Naomi. A kind man named Boaz noticed her and helped her.</p>
<p>Boaz married Ruth, and they had a son named Obed. King David came from that family, and so did the Messiah! Jehovah rewarded the courage of Naomi and Ruth.</p>
</div>
<div class="review-question"><strong>For discussion:</strong> In what ways did Naomi and Ruth show courage?</div>`},
  {section:"Congregation Bible Study",title:"Dig Deeper",minutes:0,kind:"cbs",
    listen:"Pick one Dig Deeper question and try to answer it.",
    buddy:"Look at the pictures: Ruth gleaning grain, and a man handing over his sandal.",
    html:`<div class="review-list">
<div class="review-question"><strong>How was the Israelite provision of gleaning unique in the ancient Near East?</strong></div>
<div class="source-pic"><img src="weeks/2026-11-02/midweek/wcg-gleaning.jpg" alt="Ruth gleaning barley behind the harvesters in Boaz’ field"><p>Ruth gleaning barley in Boaz’ field.</p></div>
<div class="review-question"><strong>Why can we conclude that Ruth did not approach Boaz with impure motives?</strong></div>
<div class="review-question"><strong>What is significant about Boaz addressing Ruth as “daughter”? (Ruth 2:8)</strong></div>
<div class="review-question"><strong>In contrast to the man called So-and-so, how did Boaz show unselfishness when he agreed to marry Ruth?</strong></div>
<div class="source-pic"><img src="weeks/2026-11-02/midweek/wcg-sandal.jpg" alt="The man called So-and-so handing over his sandal"><p>The man called So-and-so hands over his sandal.</p></div>
</div>`},
  {section:"Congregation Bible Study",title:"Reflect on the Lessons",minutes:0,kind:"cbs",
    listen:"How did Ruth help Naomi? How can you help someone who is sad?",
    buddy:"Ruth worked hard and stayed with Naomi when Naomi was very sad.",
    html:`<div class="review-list">
<div class="review-question"><strong>How might Ruth’s example of diligence and gratitude help us when we suffer financial hardship?</strong></div>
<div class="review-question"><strong>When Naomi was brokenhearted, Ruth helped her to cope. What do we learn from Naomi about humbly accepting help from others? What do we learn from Ruth about encouraging others?</strong></div>
<div class="review-question"><strong>In what other ways might you imitate the courage of Naomi and Ruth?</strong></div>
</div>`},
  {section:"Congregation Bible Study",title:"Meditate on the Bigger Picture",minutes:0,kind:"cbs",
    listen:"What does the story of Naomi and Ruth teach you about Jehovah?",
    buddy:"Jehovah took care of Naomi and Ruth. King David and Jesus came from Ruth’s family!",
    html:`<div class="review-list">
<div class="review-question"><strong>What does this account teach me about Jehovah?</strong></div>
<div class="review-question"><strong>How does this account tie in with Jehovah’s purposes?</strong></div>
<div class="review-question"><strong>What would I like to ask Naomi and Ruth in the resurrection?</strong></div>
</div>`},
  {section:"Closing",title:"Concluding Comments",minutes:3,kind:"normal",song:33,
    listen:"Listen for the concluding comments, then sing song 33.",
    buddy:"You did it. Song 33 — Throw Your Burden on Jehovah.",
    html:`<div class="material-block"><strong>Concluding Comments</strong> <em>(3 min.)</em></div>
<div class="material-block"><strong>Song 33 and Prayer</strong> — Throw Your Burden on Jehovah</div>`}
];

/* WEEK PACK — listening checks, one per meetingParts index */
const PART_CHECKS = [
  {q:"What is the opening song tonight?", opts:["Song 1 — Jehovah’s Attributes","Song 44","Song 150"], a:0, hint:"Look at the song button."},
  {q:"What did Jehovah do for the Israelites who were sorry?", opts:["He completely forgave them","He sent them away","He forgot about them"], a:0, hint:"Jeremiah 50:20."},
  {q:"A “snare” is a…", opts:["Trap","Drum","Boat"], a:0, hint:"Spiritual Gems, Jeremiah 50:24."},
  {q:"In the Bible reading, what would happen to Babylon’s waters?", opts:["They would dry up","They would turn to milk","They would freeze"], a:0, hint:"Jeremiah 50:38."},
  {q:"The first ministry part tonight is…", opts:["House to house","A wedding talk","A song"], a:0, hint:"Starting a Conversation."},
  {q:"In Following Up, the person is interested in…", opts:["A different subject","Nothing at all","Only the weather"], a:0, hint:"Listen to the setting."},
  {q:"Making Disciples uses which book?", opts:["Enjoy Life Forever!","A cookbook","A comic book"], a:0, hint:"lff lesson 20."},
  {q:"Song 44 is…", opts:["A prayer asking Jehovah for help","A song about fishing","A birthday song"], a:0, hint:"A Prayer of the Lowly One."},
  {q:"After the video, what is the question?", opts:["What lessons did you learn?","What is your favorite color?","Who sang best?"], a:0, hint:"Never Forget What Jehovah Remembers."},
  {q:"What did Ruth tell Naomi?", opts:["“Your God will be my God.”","“I am going home.”","“Let’s go to Egypt.”"], a:0, hint:"Ruth 1:16."},
  {q:"Gleaning means picking up…", opts:["Leftover grain in a field","Seashells","Lost toys"], a:0, hint:"Look at the picture of Ruth."},
  {q:"When Naomi was very sad, Ruth…", opts:["Stayed and helped her","Left her alone","Laughed at her"], a:0, hint:"Ruth helped her cope."},
  {q:"Who came from Ruth’s family?", opts:["King David and the Messiah","Pharaoh","Goliath"], a:0, hint:"Ruth’s son was Obed."},
  {q:"The closing song is…", opts:["Song 33 — Throw Your Burden on Jehovah","Song 1","Song 200"], a:0, hint:"Stay for the last song."}
];

/* No portraits this week; the "who" game shows names. Wise/unwise art is the shared media pair. */
const WHO_PORTRAITS = {};
const WISE_PORTRAITS = {
  wise:"media/img-019.jpg",
  unwise:"media/img-020.jpg"
};
/* WEEK PACK — little games, one per meetingParts index, different from the check */
const PART_GAMES = [
  null,
  {kind:"wise", title:"Proud like Babylon, or merciful like Jehovah?",
    prompts:[
      {q:"My friend says sorry, and I forgive her.", a:"wise"},
      {q:"I think I am better than everyone else.", a:"unwise"},
      {q:"I tell my neighbor good news from the Bible.", a:"wise"},
      {q:"I make fun of someone who made a mistake.", a:"unwise"},
      {q:"I am kind to someone who doesn’t know Jehovah yet.", a:"wise"},
      {q:"I keep reminding my brother of what he did wrong.", a:"unwise"}
    ]
  },
  {kind:"quiz", title:"Caught in a snare", done:"Jehovah keeps his word.",
    qs:[
      {q:"What is a snare?", opts:[{t:"A trap",a:true},{t:"A kind of bread",a:false}]},
      {q:"Did Babylon expect to be caught?", opts:[{t:"No — Babylon felt safe and was taken by surprise.",a:true},{t:"Yes — Babylon was ready.",a:false}]},
      {q:"Who made Babylon’s fall happen?", opts:[{t:"Jehovah",a:true},{t:"Nobody — it was luck",a:false}]}
    ]
  },
  {kind:"order", title:"What happened to Babylon?",
    feed:"Jeremiah 50:24-40",
    done:"Babylon fell, just as Jehovah said.",
    steps:[
      "Babylon acts proud against Jehovah.",
      "Jehovah sets a snare, and Babylon is caught.",
      "Babylon’s waters dry up.",
      "In the end, nobody lives in Babylon anymore."
    ]
  },
  {kind:"trace", title:"Trace while you listen", stars:0,
    designs:[{name:"Coil",color:"#6f4b96",ghost:"#ddd0ee",d:"M 18.0 18.0 L 262.0 18.0 Q 282.0 18.0 282.0 38.0 L 282.0 380.0 Q 282.0 400.0 262.0 400.0 L 90.0 400.0 Q 70.0 400.0 70.0 380.0 L 70.0 90.0 Q 70.0 70.0 90.0 70.0 L 210.0 70.0 Q 230.0 70.0 230.0 90.0 L 230.0 328.0 Q 230.0 348.0 210.0 348.0 L 142.0 348.0 Q 122.0 348.0 122.0 328.0 L 122.0 142.0 Q 122.0 122.0 142.0 122.0 L 158.0 122.0 Q 178.0 122.0 178.0 142.0 L 178.0 296.0"},{name:"Snake",color:"#2a8aa0",ghost:"#c5e6ec",d:"M 18.0 18.0 L 18.0 378.0 Q 18.0 400.0 40.0 400.0 L 48.0 400.0 Q 70.0 400.0 70.0 378.0 L 70.0 40.0 Q 70.0 18.0 92.0 18.0 L 100.0 18.0 Q 122.0 18.0 122.0 40.0 L 122.0 378.0 Q 122.0 400.0 144.0 400.0 L 152.0 400.0 Q 174.0 400.0 174.0 378.0 L 174.0 40.0 Q 174.0 18.0 196.0 18.0 L 204.0 18.0 Q 226.0 18.0 226.0 40.0 L 226.0 378.0 Q 226.0 400.0 248.0 400.0 L 256.0 400.0 Q 278.0 400.0 278.0 378.0 L 278.0 18.0"},{name:"Waves",color:"#c45b8c",ghost:"#f3c4d8",d:"M 18.0 18.0 L 260.0 18.0 Q 282.0 18.0 282.0 40.0 L 282.0 50.0 Q 282.0 72.0 260.0 72.0 L 40.0 72.0 Q 18.0 72.0 18.0 94.0 L 18.0 104.0 Q 18.0 126.0 40.0 126.0 L 260.0 126.0 Q 282.0 126.0 282.0 148.0 L 282.0 158.0 Q 282.0 180.0 260.0 180.0 L 40.0 180.0 Q 18.0 180.0 18.0 202.0 L 18.0 212.0 Q 18.0 234.0 40.0 234.0 L 260.0 234.0 Q 282.0 234.0 282.0 256.0 L 282.0 266.0 Q 282.0 288.0 260.0 288.0 L 40.0 288.0 Q 18.0 288.0 18.0 310.0 L 18.0 320.0 Q 18.0 342.0 40.0 342.0 L 260.0 342.0 Q 282.0 342.0 282.0 364.0 L 282.0 374.0 Q 282.0 396.0 260.0 396.0 L 18.0 396.0"},{name:"Spiral",color:"#d45b7a",ghost:"#f4c9d4",d:"M 150.0 22.0 L 161.8 23.5 L 173.3 26.4 L 184.5 30.8 L 195.4 36.7 L 205.7 43.8 L 215.5 52.3 L 224.6 61.9 L 233.1 72.7 L 240.8 84.5 L 247.6 97.2 L 253.6 110.8 L 258.7 125.0 L 262.8 139.8 L 266.0 155.0 L 268.2 170.6 L 269.5 186.3 L 269.7 202.1 L 269.0 217.9 L 267.4 233.4 L 264.8 248.7 L 261.3 263.5 L 256.9 277.7 L 251.8 291.3 L 245.9 304.1 L 239.2 316.1 L 232.0 327.1 L 224.2 337.1 L 215.8 345.9 L 207.1 353.6 L 198.0 360.1 L 188.6 365.3 L 179.0 369.2 L 169.4 371.8 L 159.7 373.1 L 150.0 373.0 L 140.5 371.6 L 131.1 369.0 L 122.1 365.1 L 113.4 359.9 L 105.1 353.6 L 97.3 346.2 L 90.0 337.8 L 83.4 328.4 L 77.3 318.2 L 71.9 307.2 L 67.3 295.5 L 63.3 283.2 L 60.1 270.4 L 57.7 257.3 L 56.1 243.9 L 55.3 230.3 L 55.2 216.8 L 56.0 203.3 L 57.4 189.9 L 59.6 176.9 L 62.5 164.3 L 66.1 152.1 L 70.2 140.5 L 75.0 129.6 L 80.3 119.5 L 86.1 110.2 L 92.3 101.8 L 98.9 94.3 L 105.7 87.9 L 112.9 82.4 L 120.2 78.1 L 127.6 74.9 L 135.1 72.8 L 142.6 71.8 L 150.0 72.0 L 157.3 73.3 L 164.4 75.6 L 171.2 79.0 L 177.8 83.5 L 184.0 88.9 L 189.9 95.2 L 195.3 102.4 L 200.2 110.4 L 204.6 119.1 L 208.5 128.4 L 211.9 138.3 L 214.7 148.7 L 216.9 159.4 L 218.5 170.4 L 219.5 181.7 L 219.9 193.0 L 219.8 204.4 L 219.1 215.6 L 217.8 226.7 L 216.0 237.5 L 213.7 248.0 L 211.0 258.1 L 207.7 267.6 L 204.1 276.6 L 200.1 284.9 L 195.8 292.5 L 191.3 299.4 L 186.4 305.5 L 181.4 310.7 L 176.3 315.0 L 171.0 318.5 L 165.7 321.0 L 160.4 322.6 L 155.2 323.3 L 150.0 323.0 L 145.0 321.8 L 140.1 319.8 L 135.4 316.9 L 131.0 313.1 L 126.8 308.6 L 123.0 303.3 L 119.4 297.4 L 116.3 290.8 L 113.4 283.6 L 111.0 276.0 L 109.0 267.9 L 107.4 259.5 L 106.1 250.8 L 105.3 241.8 L 104.9 232.8 L 104.8 223.6 L 105.2 214.5 L 105.9 205.5 L 107.0 196.7 L 108.4 188.0 L 110.1 179.7 L 112.0 171.8 L 114.3 164.2 L 116.7 157.2 L 119.4 150.7 L 122.2 144.7 L 125.2 139.4 L 128.3 134.8 L 131.4 130.8 L 134.6 127.5 L 137.8 124.9 L 140.9 123.1 L 144.0 122.0 L 147.1 121.6 L 150.0 122.0"}]
  },
  {kind:"trace", title:"Trace while you listen", stars:0,
    designs:[{name:"Puzzle",color:"#d39b12",ghost:"#f3e2ae",d:"M 34.5 93.5 L 53.5 93.5 Q 67.5 93.5 67.5 107.5 L 67.5 112.5 Q 67.5 126.5 53.5 126.5 L 48.5 126.5 Q 34.5 126.5 34.5 140.5 L 34.5 145.5 Q 34.5 159.5 34.5 173.5 L 34.5 178.5 Q 34.5 192.5 48.5 192.5 L 53.5 192.5 Q 67.5 192.5 67.5 178.5 L 67.5 173.5 Q 67.5 159.5 81.5 159.5 L 86.5 159.5 Q 100.5 159.5 100.5 173.5 L 100.5 178.5 Q 100.5 192.5 114.5 192.5 L 119.5 192.5 Q 133.5 192.5 133.5 178.5 L 133.5 173.5 Q 133.5 159.5 133.5 145.5 L 133.5 140.5 Q 133.5 126.5 119.5 126.5 L 114.5 126.5 Q 100.5 126.5 100.5 112.5 L 100.5 107.5 Q 100.5 93.5 114.5 93.5 L 119.5 93.5 Q 133.5 93.5 147.5 93.5 L 152.5 93.5 Q 166.5 93.5 166.5 107.5 L 166.5 112.5 Q 166.5 126.5 180.5 126.5 L 185.5 126.5 Q 199.5 126.5 199.5 112.5 L 199.5 107.5 Q 199.5 93.5 213.5 93.5 L 218.5 93.5 Q 232.5 93.5 246.5 93.5 L 251.5 93.5 Q 265.5 93.5 265.5 107.5 L 265.5 112.5 Q 265.5 126.5 251.5 126.5 L 246.5 126.5 Q 232.5 126.5 232.5 140.5 L 232.5 145.5 Q 232.5 159.5 246.5 159.5 L 251.5 159.5 Q 265.5 159.5 265.5 173.5 L 265.5 178.5 Q 265.5 192.5 251.5 192.5 L 246.5 192.5 Q 232.5 192.5 218.5 192.5 L 213.5 192.5 Q 199.5 192.5 199.5 178.5 L 199.5 173.5 Q 199.5 159.5 185.5 159.5 L 180.5 159.5 Q 166.5 159.5 166.5 173.5 L 166.5 178.5 Q 166.5 192.5 166.5 206.5 L 166.5 211.5 Q 166.5 225.5 166.5 239.5 L 166.5 244.5 Q 166.5 258.5 180.5 258.5 L 185.5 258.5 Q 199.5 258.5 199.5 244.5 L 199.5 239.5 Q 199.5 225.5 213.5 225.5 L 218.5 225.5 Q 232.5 225.5 246.5 225.5 L 251.5 225.5 Q 265.5 225.5 265.5 239.5 L 265.5 244.5 Q 265.5 258.5 251.5 258.5 L 246.5 258.5 Q 232.5 258.5 232.5 272.5 L 232.5 277.5 Q 232.5 291.5 246.5 291.5 L 251.5 291.5 Q 265.5 291.5 265.5 305.5 L 265.5 310.5 Q 265.5 324.5 251.5 324.5 L 246.5 324.5 Q 232.5 324.5 218.5 324.5 L 213.5 324.5 Q 199.5 324.5 199.5 310.5 L 199.5 305.5 Q 199.5 291.5 185.5 291.5 L 180.5 291.5 Q 166.5 291.5 166.5 305.5 L 166.5 310.5 Q 166.5 324.5 152.5 324.5 L 147.5 324.5 Q 133.5 324.5 119.5 324.5 L 114.5 324.5 Q 100.5 324.5 100.5 310.5 L 100.5 305.5 Q 100.5 291.5 114.5 291.5 L 119.5 291.5 Q 133.5 291.5 133.5 277.5 L 133.5 272.5 Q 133.5 258.5 133.5 244.5 L 133.5 239.5 Q 133.5 225.5 119.5 225.5 L 114.5 225.5 Q 100.5 225.5 100.5 239.5 L 100.5 244.5 Q 100.5 258.5 86.5 258.5 L 81.5 258.5 Q 67.5 258.5 67.5 244.5 L 67.5 239.5 Q 67.5 225.5 53.5 225.5 L 48.5 225.5 Q 34.5 225.5 34.5 239.5 L 34.5 244.5 Q 34.5 258.5 34.5 272.5 L 34.5 277.5 Q 34.5 291.5 48.5 291.5 L 53.5 291.5 Q 67.5 291.5 67.5 305.5 L 67.5 310.5 Q 67.5 324.5 53.5 324.5 L 34.5 324.5"},{name:"Coil",color:"#6f4b96",ghost:"#ddd0ee",d:"M 18.0 18.0 L 262.0 18.0 Q 282.0 18.0 282.0 38.0 L 282.0 380.0 Q 282.0 400.0 262.0 400.0 L 94.0 400.0 Q 74.0 400.0 74.0 380.0 L 74.0 94.0 Q 74.0 74.0 94.0 74.0 L 206.0 74.0 Q 226.0 74.0 226.0 94.0 L 226.0 324.0 Q 226.0 344.0 206.0 344.0 L 150.0 344.0 Q 130.0 344.0 130.0 324.0 L 130.0 130.0"},{name:"Snake",color:"#2a8aa0",ghost:"#c5e6ec",d:"M 26.0 18.0 L 26.0 378.0 Q 26.0 400.0 48.0 400.0 L 60.0 400.0 Q 82.0 400.0 82.0 378.0 L 82.0 40.0 Q 82.0 18.0 104.0 18.0 L 116.0 18.0 Q 138.0 18.0 138.0 40.0 L 138.0 378.0 Q 138.0 400.0 160.0 400.0 L 172.0 400.0 Q 194.0 400.0 194.0 378.0 L 194.0 40.0 Q 194.0 18.0 216.0 18.0 L 228.0 18.0 Q 250.0 18.0 250.0 40.0 L 250.0 400.0"},{name:"Spiral",color:"#2c7a55",ghost:"#c4ead4",d:"M 150.0 26.0 L 161.4 27.5 L 172.6 30.4 L 183.5 34.8 L 193.9 40.5 L 203.9 47.6 L 213.4 55.9 L 222.2 65.3 L 230.3 75.9 L 237.7 87.5 L 244.3 99.9 L 250.0 113.1 L 254.9 127.0 L 258.8 141.5 L 261.8 156.4 L 263.9 171.5 L 265.1 186.9 L 265.3 202.3 L 264.5 217.7 L 262.9 232.8 L 260.3 247.6 L 256.9 262.0 L 252.7 275.9 L 247.7 289.1 L 241.9 301.5 L 235.6 313.1 L 228.6 323.8 L 221.0 333.5 L 213.0 342.0 L 204.6 349.5 L 195.9 355.7 L 186.9 360.7 L 177.7 364.5 L 168.5 366.9 L 159.2 368.1 L 150.0 368.0 L 140.9 366.6 L 132.1 364.0 L 123.5 360.2 L 115.2 355.1 L 107.4 349.0 L 100.0 341.8 L 93.1 333.6 L 86.8 324.5 L 81.1 314.6 L 76.1 303.9 L 71.7 292.5 L 68.0 280.6 L 65.1 268.3 L 62.9 255.6 L 61.4 242.7 L 60.7 229.6 L 60.7 216.5 L 61.5 203.5 L 62.9 190.7 L 65.0 178.1 L 67.8 166.0 L 71.2 154.3 L 75.2 143.2 L 79.8 132.8 L 84.8 123.1 L 90.2 114.2 L 96.1 106.1 L 102.3 99.0 L 108.7 92.9 L 115.4 87.7 L 122.3 83.6 L 129.2 80.6 L 136.2 78.7 L 143.1 77.8 L 150.0 78.0 L 156.7 79.3 L 163.3 81.6 L 169.6 84.9 L 175.7 89.2 L 181.4 94.4 L 186.7 100.5 L 191.6 107.4 L 196.1 115.1 L 200.1 123.4 L 203.6 132.3 L 206.6 141.8 L 209.1 151.7 L 211.0 161.9 L 212.4 172.4 L 213.2 183.1 L 213.5 193.9 L 213.3 204.6 L 212.6 215.3 L 211.3 225.8 L 209.6 236.1 L 207.4 246.0 L 204.9 255.5 L 201.9 264.5 L 198.5 272.9 L 194.9 280.7 L 191.0 287.9 L 186.8 294.3 L 182.4 300.0 L 177.9 304.8 L 173.3 308.8 L 168.6 312.0 L 163.9 314.3 L 159.2 315.8 L 154.5 316.3 L 150.0 316.0 L 145.6 314.8 L 141.3 312.8 L 137.3 310.0 L 133.5 306.5 L 129.9 302.2 L 126.6 297.2 L 123.7 291.5 L 121.0 285.4 L 118.7 278.6 L 116.7 271.5 L 115.1 263.9 L 113.8 256.0 L 112.9 247.9 L 112.3 239.5 L 112.1 231.1 L 112.2 222.6 L 112.7 214.2 L 113.4 205.8 L 114.4 197.7 L 115.7 189.7 L 117.3 182.1 L 119.1 174.8 L 121.0 167.9 L 123.2 161.4 L 125.4 155.5 L 127.8 150.1 L 130.3 145.3 L 132.8 141.1 L 135.4 137.5 L 138.0 134.6 L 140.5 132.3 L 143.0 130.7 L 145.4 129.8 L 147.8 129.6 L 150.0 130.0"}]
  },
  {kind:"quiz", title:"Good teacher", done:"Listening is part of good teaching!",
    qs:[
      {q:"The person wants to talk about something different. What could you do?", opts:[{t:"Listen and talk about what they care about",a:true},{t:"Ignore them and keep reading",a:false}]},
      {q:"What helps a Bible study go well?", opts:[{t:"Being kind and asking questions",a:true},{t:"Talking very fast",a:false}]}
    ]
  },
  null,
  {kind:"quiz", title:"What did you learn?", done:"Thanks for watching closely!",
    qs:[
      {q:"While the video plays, what can you do?", opts:[{t:"Watch and think of one lesson",a:true},{t:"Play with my shoes",a:false}]},
      {q:"After the video, what will the brother ask?", opts:[{t:"What lessons did you learn?",a:true},{t:"Who wants a snack?",a:false}]}
    ]
  },
  {kind:"order", title:"Ruth stayed with Naomi",
    done:"Jehovah rewarded Naomi and Ruth.",
    feed:"Walk Courageously With God · chapter 15",
    steps:[
      "Naomi’s family moves to Moab",
      "Naomi’s husband and sons die",
      "Ruth says, “Your God will be my God”",
      "Ruth gleans grain in Boaz’ field",
      "Boaz marries Ruth",
      "Baby Obed is born — King David’s grandfather"
    ]
  },
  {kind:"search", title:"Word hunt while you listen",
    feed:"Slide across letters. Words from tonight’s meeting.",
    done:"You found them all. Jehovah rewarded Ruth’s courage!",
    words:["BABYLON", "MERCY", "SNARE", "FORGAVE", "FLEE", "JEREMIAH", "RUTH", "NAOMI", "BOAZ", "OBED", "GRAIN", "LOYAL", "MOAB", "BETHLEHEM", "SANDAL", "COURAGE", "DAVID", "KIND"],
    grid:[["V", "I", "E", "G", "A", "R", "U", "O", "C", "D", "W", "T"], ["E", "B", "A", "O", "M", "D", "N", "I", "K", "S", "Y", "K"], ["I", "E", "E", "G", "D", "I", "O", "A", "P", "A", "C", "B"], ["N", "T", "V", "R", "H", "V", "L", "H", "U", "N", "R", "O"], ["A", "H", "A", "A", "A", "A", "Y", "K", "G", "D", "E", "B"], ["O", "L", "G", "I", "I", "D", "B", "Y", "R", "A", "M", "E"], ["M", "E", "R", "N", "M", "B", "A", "L", "R", "L", "H", "D"], ["I", "H", "O", "B", "E", "E", "B", "O", "J", "U", "C", "C"], ["G", "E", "F", "O", "R", "R", "F", "Y", "J", "I", "T", "G"], ["C", "M", "L", "A", "E", "A", "J", "A", "C", "M", "B", "H"], ["V", "H", "C", "Z", "J", "N", "H", "L", "G", "U", "W", "E"], ["H", "E", "W", "P", "W", "S", "C", "T", "E", "E", "L", "F"]]
  },
  {kind:"quiz", title:"Help like Ruth", done:"Like Ruth, you can help and encourage others!",
    qs:[
      {q:"Mommy is tired and sad. What would Ruth do?", opts:[{t:"Help her and say something kind",a:true},{t:"Make more mess",a:false}]},
      {q:"Someone offers to help you. What did Naomi learn?", opts:[{t:"Humbly accept help",a:true},{t:"Say, “I don’t need anybody”",a:false}]},
      {q:"Ruth worked hard in the field. How can you be like her?", opts:[{t:"Do my chores without complaining",a:true},{t:"Hide when it’s time to help",a:false}]},
      {q:"Boaz was kind to Ruth. What did Ruth do?", opts:[{t:"She thanked him",a:true},{t:"She ignored him",a:false}]}
    ]
  },
  {kind:"quiz", title:"What does this teach about Jehovah?", done:"Jehovah takes care of his friends.",
    qs:[
      {q:"What does this account teach you about Jehovah?", opts:[{t:"He cares for people who are sad and alone",a:true},{t:"He does not notice sad people",a:false}]},
      {q:"Who came from Ruth’s family later?", opts:[{t:"King David — and Jesus!",a:true},{t:"Nobody important",a:false}]},
      {q:"What would you like to ask Ruth in the resurrection?", opts:[{t:"Were you scared leaving Moab?",a:true},{t:"Nothing — I know everything already",a:false}]}
    ]
  },
  null
];

/* WEEK PACK — buddy answers for this week’s material */
const BUDDY_FACTS = [
  {keys:["babylon","proud","arrogant"], ans:"Babylon was proud and did very bad things. Jehovah said she would be punished."},
  {keys:["mercy","forgive","forgave","sorry"], ans:"Jehovah completely forgave the Israelites who were sorry. That is mercy. We help people learn about his mercy when we preach."},
  {keys:["snare","trap"], ans:"A snare is a trap. Babylon felt safe, but it was caught by surprise, just as Jehovah said."},
  {keys:["water","dry","sodom"], ans:"Jehovah said Babylon’s waters would dry up and nobody would live there anymore, like Sodom and Gomorrah."},
  {keys:["flee","false religion"], ans:"Jeremiah 50:8 says to flee from Babylon. Today we help people get out of false religion and learn the truth."},
  {keys:["video","remember","forget"], ans:"The video is called Never Forget What Jehovah Remembers. Watch closely and pick one lesson to tell Mommy."},
  {keys:["ruth","naomi"], ans:"Ruth stayed with Naomi. She said: “Your people will be my people, and your God my God.”"},
  {keys:["boaz","glean","grain"], ans:"Ruth gleaned grain in Boaz’ field. Boaz was kind to her, and later he married her."},
  {keys:["obed","david","baby"], ans:"Ruth and Boaz had a baby named Obed. King David came from his family, and so did Jesus!"},
  {keys:["sandal","so-and-so"], ans:"The man called So-and-so did not want to marry Ruth. He handed over his sandal. Boaz was unselfish and married her."},
  {keys:["song 1","jehovah’s attributes"], ans:"Song 1 is Jehovah’s Attributes."},
  {keys:["song 44","44"], ans:"Song 44 is A Prayer of the Lowly One."},
  {keys:["song 33","33"], ans:"Song 33 is the closing song — Throw Your Burden on Jehovah."},
  {keys:["bored","tired","long"], ans:"Meetings can feel long. Try this: answer the Check, then play the little game. I’m staying with you."},
  {keys:["who are you","your name","buddy"], ans:"I’m Brutus. I know this week’s meeting."},
  {keys:["hello","hi","hey"], ans:"Hi. Look at the purple Check card if you want a hint."}
];
