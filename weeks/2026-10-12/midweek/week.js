/* MIDWEEK week pack — loaded by index.html before the app engine (see README "Weekly update").
   Week of October 12–18, 2026 · Jeremiah 42–44. Source: Life and Ministry Meeting Workbook,
   September–October 2026 (wol.jw.org), and Walk Courageously With God (wcg) chapter 12.
   Image paths are relative to index.html. */

/* Song titles and lead sheets used by this week's parts (pages from songs/, the "Sing Out Joyfully" book). */
const SONG_TITLES = {
  47: "Song 47 — Pray to Jehovah Each Day",
  103: "Song 103 — Shepherds—Gifts in Men",
  129: "Song 129 — We Will Keep Enduring",
  161: "Song 161 — To Do Your Will Is My Delight"
};
const SONG_SHEETS = {
  47: "songs/047-1.png",
  103: "songs/103-1.png",
  129: "songs/129-1.png",
  161: "media/img-015.jpg"   /* new song (152+): no lead-sheet PDF on jw.org; sheet kept from last week */
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
  id: "2026-10-12",
  heading: "Jeremiah 42–44",
  range: "October 12–18, 2026",
  start: [2026, 9, 13, 19, 0, 0],
  secretKind: "name",
  secretWord: "Johanan",
  secretChoices: ["Johanan","Baruch","Caleb","Nebuchadnezzar"],
  secretHint: "Listen in Treasures for the man who asked Jeremiah to pray for them, and then did not listen to Jehovah’s answer.",
  secretFoundBlurb: "Johanan asked Jeremiah to pray for guidance. Jehovah said, “Stay in Judah.” But Johanan took the people to Egypt anyway.",
  prizeText: "Congratulations — you had a perfect meeting! Mommy and Daddy will take you to get one thing from Sheetz!"
};

const meetingParts = [
  {section:"Opening",title:"Song 103 and Opening Comments",minutes:1,kind:"normal",song:103,
    listen:"Stand ready for song 103, then listen to the opening comments.",
    buddy:"This meeting is Jeremiah 42 to 44. Listen for people who asked Jehovah for help but did not listen.",
    html:`<div class="material-block"><strong>Song 103 and Prayer</strong> — Shepherds—Gifts in Men</div>
<div class="material-block">Opening Comments <em>(1 min.)</em></div>`},
  {section:"Treasures From God’s Word",title:"They Asked, but They Did Not Listen",minutes:10,kind:"answer",
    listen:"Listen for Johanan. He asked Jeremiah to pray. What did Jehovah say?",
    buddy:"They asked Jehovah what to do. He said, “Stay in Judah. Do not go to Egypt.” They went anyway.",
    html:`<div class="material-block"><ul>
<li>Before fleeing to Egypt, Johanan and the people asked Jeremiah to pray for guidance on their behalf <strong>(Jer 42:1-3)</strong></li>
<li>Jehovah’s answer was clear: Stay in Judah, and do not go to Egypt <strong>(Jer 42:9, 10, 19)</strong></li>
<li>The people rejected Jehovah’s direction <strong>(Jer 43:4-7)</strong></li>
</ul></div>
<div class="ask-yourself"><strong>ASK YOURSELF:</strong> ‘When I receive Bible-based counsel, do I apply it—even if it’s not what I want to hear?’</div>
<div class="source-pic"><img src="weeks/2026-10-12/midweek/mwb-advice.jpg" alt="A mature sister shares Bible-based advice with a younger sister"><p>A mature sister shares Bible-based advice on dating with a younger sister.</p></div>`},
  {section:"Treasures From God’s Word",title:"Spiritual Gems",minutes:10,kind:"questions",
    listen:"Listen for the “Queen of Heaven.” Why were the people really suffering?",
    buddy:"The people blamed their trouble on stopping sacrifices to a false god. Jeremiah said the trouble came because they did not obey Jehovah.",
    questions:["Jer 44:18—Why could the Israelites not justifiably blame their suffering on the fact that they had stopped “making sacrifices to the Queen of Heaven”?","What spiritual gems from this week’s Bible reading would you like to share?"],
    html:`<div class="material-block review-question"><p><strong>Jer 44:18</strong> — Why could the Israelites not justifiably blame their suffering on the fact that they had stopped “making sacrifices to the Queen of Heaven”?</p></div>
<div class="material-block"><p class="review-question">What spiritual gems from this week’s Bible reading would you like to share?</p></div>`},
  {section:"Treasures From God’s Word",title:"Bible Reading",minutes:4,kind:"answer",
    listen:"Follow Jeremiah 43:1-13. Where did the people go?",
    buddy:"This reading is Jeremiah 43:1-13. They went to Egypt, and Jeremiah hid big stones there.",
    html:`<div class="material-block"><strong>Jeremiah 43:1-13</strong> <em>(th study 11)</em></div>
<div class="material-block">The men said Jeremiah was lying. They disobeyed Jehovah and took everyone to Egypt, even Jeremiah and Baruch. In Tahpanhes, Jehovah told Jeremiah to hide large stones at the entrance of Pharaoh’s house. Nebuchadnezzar would put his throne right above them.</div>`},
  {section:"Apply Yourself to the Field Ministry",title:"Starting a Conversation",minutes:3,kind:"answer",
    listen:"Watch how they start a friendly talk in everyday life.",
    buddy:"Informal witnessing. Be friendly and start a conversation.",
    html:`<div class="material-block"><strong>INFORMAL WITNESSING.</strong> <em>(lmd lesson 1 point 5)</em></div>`},
  {section:"Apply Yourself to the Field Ministry",title:"Following Up",minutes:4,kind:"answer",
    listen:"Which Bible truth do they share from the Love People brochure?",
    buddy:"House to house. They share a truth from appendix A of the Love People brochure.",
    html:`<div class="material-block"><strong>HOUSE TO HOUSE.</strong> Share a truth from appendix A of the <em>Love People</em> brochure. <em>(lmd lesson 7 point 4)</em></div>`},
  {section:"Apply Yourself to the Field Ministry",title:"What Would You Say?",minutes:6,kind:"questions",
    listen:"Look at the picture. A man is reading on the bus. How could you start talking with him?",
    buddy:"A man is reading the Bible or another religious book. What would you say?",
    questions:["How could you start a conversation with him?","What questions could you ask to determine what Bible truths he might be interested in?","What Bible truth might you share with him?"],
    html:`<div class="source-pic"><img src="weeks/2026-10-12/midweek/mwb-wwys.jpg" alt="A man sitting on a bus, reading the Bible"></div><div class="material-block"><strong>INFORMAL WITNESSING · Discussion</strong> <em>(lmd lesson 2 point 3)</em><br>A man is reading the Bible or another religious book.</div>
<div class="review-list">
<div class="review-question"><strong>How could you start a conversation with him?</strong></div>
<div class="review-question"><strong>What questions could you ask to determine what Bible truths he might be interested in?</strong></div>
<div class="review-question"><strong>What Bible truth might you share with him?</strong></div>
</div>`},
  {section:"Living as Christians",title:"Song 47 — Pray to Jehovah Each Day",minutes:0,kind:"song",song:47,
    listen:"Follow the words. This song is about praying to Jehovah every day.",
    buddy:"We can talk to Jehovah every day.",
    html:`<div class="material-block"><strong>Song 47</strong> — Pray to Jehovah Each Day</div>`},
  {section:"Living as Christians",title:"Local Needs",minutes:15,kind:"normal",
    listen:"This part is about our own congregation. Listen for one thing the brother asks us to do.",
    buddy:"Local Needs is just for our congregation. Listen and you can tell Mommy one thing you heard.",
    html:`<div class="material-block"><strong>Local Needs</strong> <em>(15 min.)</em></div>
<div class="material-block">The elders choose this part for our own congregation. Listen for one thing we can do.</div>`},
  {section:"Congregation Bible Study",title:"He Fought Loyally for His God — Caleb",minutes:30,kind:"cbs",
    listen:"Listen for what Caleb and Joshua said when the other spies gave a bad report.",
    buddy:"Ten spies were afraid. Caleb said, “Jehovah is with us. Do not fear them.”",
    html:`<div class="cbs-reference"><strong>Walk Courageously With God, chapter 12</strong><br>Read: Numbers 13:1–14:12, 20-38; Joshua 14:6-15</div>
<div class="source-pic"><img src="weeks/2026-10-12/midweek/wcg-caleb.jpg" alt="Caleb speaks to the Israelites"><p>Caleb stood up for Jehovah against a crowd of hostile and faithless Israelites.</p></div>
<div class="story-text">
<p>Caleb was born a slave in Egypt. He saw Jehovah free His people with the Ten Plagues and the parting of the Red Sea.</p>
<p>Caleb, Joshua, and ten other men spied out the Promised Land for 40 days. They brought back a cluster of grapes so big that two men had to carry it.</p>
<p>Ten spies gave a bad report. They said the people were too strong. Caleb and Joshua said: “Jehovah is with us. Do not fear them.” The people even talked of stoning them!</p>
<p>Jehovah said Caleb “had a different spirit and kept following after me wholeheartedly.” When he was 85, Caleb took Hebron, just as Jehovah promised.</p>
</div>
<div class="review-question"><strong>For discussion:</strong> In what ways did Caleb show courage?</div>`},
  {section:"Congregation Bible Study",title:"Dig Deeper",minutes:0,kind:"cbs",
    listen:"Pick one Dig Deeper question and try to answer it.",
    buddy:"Look at the pictures: clay beehives and a map. They help us see the land was real and close.",
    html:`<div class="review-list">
<div class="review-question"><strong>Why can we say that Numbers 13:23 does not exaggerate the produce of the Promised Land?</strong></div>
<div class="review-question"><strong>Was the Promised Land really abundant with “milk and honey,” as Caleb and Joshua described it?</strong></div>
<div class="source-pic"><img src="weeks/2026-10-12/midweek/wcg-beehives.jpg" alt="Clay beehives found in Israel"><p>Clay beehives in Israel from long ago.</p></div>
<div class="review-question"><strong>When Moses sent out the 12 spies from Kadesh, how close were the Israelites to the Promised Land?</strong></div>
<div class="source-pic"><img src="weeks/2026-10-12/midweek/wcg-map.jpg" alt="Map from Egypt to Kadesh and Hebron"></div>
<div class="review-question"><strong>How did Jehovah reward Caleb’s faith and courage?</strong></div>
</div>`},
  {section:"Congregation Bible Study",title:"Reflect on the Lessons",minutes:0,kind:"cbs",
    listen:"How can you be like Caleb when a crowd is doing the wrong thing?",
    buddy:"Caleb did not follow the crowd. He followed Jehovah.",
    html:`<div class="review-list">
<div class="review-question"><strong>Although Caleb showed faith, he had to wander in the wilderness with the rest of the Israelites. Even so, he humbly continued to trust in Jehovah. In what situations might we imitate Caleb’s example?</strong></div>
<div class="review-question"><strong>How does the example of Caleb help us resist pressure to “follow after the crowd”? (Ex. 23:2)</strong></div>
<div class="review-question"><strong>In what other ways might you imitate Caleb’s courage?</strong></div>
</div>`},
  {section:"Congregation Bible Study",title:"Meditate on the Bigger Picture",minutes:0,kind:"cbs",
    listen:"What does Caleb’s story teach you about Jehovah?",
    buddy:"Jehovah noticed Caleb’s faith and kept his promise to him.",
    html:`<div class="review-list">
<div class="review-question"><strong>What does this account teach me about Jehovah?</strong></div>
<div class="review-question"><strong>How does this account tie in with Jehovah’s purposes?</strong></div>
<div class="review-question"><strong>What would I like to ask Caleb in the resurrection?</strong></div>
</div>`},
  {section:"Closing",title:"Concluding Comments",minutes:3,kind:"normal",song:129,
    listen:"Listen for the concluding comments, then sing song 129.",
    buddy:"You did it. Song 129 — We Will Keep Enduring.",
    html:`<div class="material-block"><strong>Concluding Comments</strong> <em>(3 min.)</em></div>
<div class="material-block"><strong>Song 129 and Prayer</strong> — We Will Keep Enduring</div>`}
];

/* WEEK PACK — listening checks, one per meetingParts index */
const PART_CHECKS = [
  {q:"What is the opening song tonight?", opts:["Song 103 — Shepherds—Gifts in Men","Song 1","Song 150"], a:0, hint:"Look at the song button."},
  {q:"What did Jehovah tell the people to do?", opts:["Stay in Judah — do not go to Egypt","Hurry to Egypt","Build a big boat"], a:0, hint:"Jeremiah 42:10, 19."},
  {q:"The people said they had to make sacrifices to…", opts:["The “Queen of Heaven”","Jehovah only","The king of Babylon"], a:0, hint:"Spiritual Gems, Jeremiah 44:18."},
  {q:"Where did the people go in Jeremiah 43?", opts:["Egypt","Babylon","Hebron"], a:0, hint:"Bible reading."},
  {q:"The first ministry part tonight is…", opts:["Informal witnessing","A wedding talk","A song"], a:0, hint:"Starting a Conversation."},
  {q:"In the follow-up they share a truth from…", opts:["The Love People brochure","A cookbook","A comic book"], a:0, hint:"Appendix A."},
  {q:"In the picture, the man on the bus is…", opts:["Reading a book","Sleeping","Driving the bus"], a:0, hint:"Look at the picture."},
  {q:"Song 47 is about…", opts:["Praying to Jehovah each day","Building a house","Going fishing"], a:0, hint:"Follow the title."},
  {q:"Local Needs is a part for…", opts:["Our own congregation","A different country","Only the children"], a:0, hint:"The elders choose it."},
  {q:"What did Caleb and Joshua say about the land?", opts:["“Jehovah is with us. Do not fear them.”","“We look like grasshoppers.”","“Let’s go back to Egypt.”"], a:0, hint:"Chapter 12."},
  {q:"The clay beehives help show the land had…", opts:["Honey","Snow","Gold mines"], a:0, hint:"“Milk and honey.”"},
  {q:"When the crowd was afraid, Caleb…", opts:["Kept following Jehovah","Followed the crowd","Ran away"], a:0, hint:"He had a different spirit."},
  {q:"This account teaches us most of all about…", opts:["Jehovah","Grapes","Spies"], a:0, hint:"Who kept his promise to Caleb?"},
  {q:"The closing song is…", opts:["Song 129 — We Will Keep Enduring","Song 1","Song 200"], a:0, hint:"Stay for the last song."}
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
  {kind:"who", title:"Who said it?",
    people:[
      {id:"people", name:"Johanan and the people"},
      {id:"jeremiah", name:"Jeremiah"},
      {id:"jehovah", name:"Jehovah (through Jeremiah)"}
    ],
    prompts:[
      {q:"Pray for us to Jehovah. Tell us the way we should walk.", a:"people"},
      {q:"I have heard you. I will not hold back a word from you.", a:"jeremiah"},
      {q:"Whether good or bad, we will obey the voice of Jehovah.", a:"people"},
      {q:"If you remain in this land, I will build you up.", a:"jehovah"},
      {q:"Do not be afraid of the king of Babylon, for I am with you.", a:"jehovah"},
      {q:"Do not go to Egypt.", a:"jeremiah"},
      {q:"What you are saying is a lie!", a:"people"}
    ]
  },
  {kind:"wise", title:"Listen or not listen?",
    prompts:[
      {q:"I ask Jehovah for help, and then I do what he says.", a:"wise"},
      {q:"I ask for advice, but only do it if I like the answer.", a:"unwise"},
      {q:"Mommy gives me Bible advice I didn’t want — I still do it.", a:"wise"},
      {q:"Things got hard, so I blame Jehovah’s way.", a:"unwise"},
      {q:"I stay where Jehovah wants me, even if I feel scared.", a:"wise"},
      {q:"I say, “I will obey,” then go my own way.", a:"unwise"}
    ]
  },
  {kind:"order", title:"What happened first?",
    feed:"Jeremiah 43",
    done:"They did not obey the voice of Jehovah.",
    steps:[
      "Jeremiah tells the people Jehovah’s words.",
      "The men say, “What you are saying is a lie!”",
      "Everyone is taken to Egypt, even Jeremiah and Baruch.",
      "In Tahpanhes, Jeremiah hides large stones.",
      "Jehovah says Nebuchadnezzar will set his throne above them."
    ]
  },
  {kind:"trace", title:"Trace while you listen", stars:0,
    designs:[{name:"Coil",color:"#6f4b96",ghost:"#ddd0ee",d:"M 18.0 18.0 L 262.0 18.0 Q 282.0 18.0 282.0 38.0 L 282.0 380.0 Q 282.0 400.0 262.0 400.0 L 90.0 400.0 Q 70.0 400.0 70.0 380.0 L 70.0 90.0 Q 70.0 70.0 90.0 70.0 L 210.0 70.0 Q 230.0 70.0 230.0 90.0 L 230.0 328.0 Q 230.0 348.0 210.0 348.0 L 142.0 348.0 Q 122.0 348.0 122.0 328.0 L 122.0 142.0 Q 122.0 122.0 142.0 122.0 L 158.0 122.0 Q 178.0 122.0 178.0 142.0 L 178.0 296.0"},{name:"Snake",color:"#2a8aa0",ghost:"#c5e6ec",d:"M 18.0 18.0 L 18.0 378.0 Q 18.0 400.0 40.0 400.0 L 48.0 400.0 Q 70.0 400.0 70.0 378.0 L 70.0 40.0 Q 70.0 18.0 92.0 18.0 L 100.0 18.0 Q 122.0 18.0 122.0 40.0 L 122.0 378.0 Q 122.0 400.0 144.0 400.0 L 152.0 400.0 Q 174.0 400.0 174.0 378.0 L 174.0 40.0 Q 174.0 18.0 196.0 18.0 L 204.0 18.0 Q 226.0 18.0 226.0 40.0 L 226.0 378.0 Q 226.0 400.0 248.0 400.0 L 256.0 400.0 Q 278.0 400.0 278.0 378.0 L 278.0 18.0"},{name:"Waves",color:"#c45b8c",ghost:"#f3c4d8",d:"M 18.0 18.0 L 260.0 18.0 Q 282.0 18.0 282.0 40.0 L 282.0 50.0 Q 282.0 72.0 260.0 72.0 L 40.0 72.0 Q 18.0 72.0 18.0 94.0 L 18.0 104.0 Q 18.0 126.0 40.0 126.0 L 260.0 126.0 Q 282.0 126.0 282.0 148.0 L 282.0 158.0 Q 282.0 180.0 260.0 180.0 L 40.0 180.0 Q 18.0 180.0 18.0 202.0 L 18.0 212.0 Q 18.0 234.0 40.0 234.0 L 260.0 234.0 Q 282.0 234.0 282.0 256.0 L 282.0 266.0 Q 282.0 288.0 260.0 288.0 L 40.0 288.0 Q 18.0 288.0 18.0 310.0 L 18.0 320.0 Q 18.0 342.0 40.0 342.0 L 260.0 342.0 Q 282.0 342.0 282.0 364.0 L 282.0 374.0 Q 282.0 396.0 260.0 396.0 L 18.0 396.0"},{name:"Spiral",color:"#d45b7a",ghost:"#f4c9d4",d:"M 150.0 22.0 L 161.8 23.5 L 173.3 26.4 L 184.5 30.8 L 195.4 36.7 L 205.7 43.8 L 215.5 52.3 L 224.6 61.9 L 233.1 72.7 L 240.8 84.5 L 247.6 97.2 L 253.6 110.8 L 258.7 125.0 L 262.8 139.8 L 266.0 155.0 L 268.2 170.6 L 269.5 186.3 L 269.7 202.1 L 269.0 217.9 L 267.4 233.4 L 264.8 248.7 L 261.3 263.5 L 256.9 277.7 L 251.8 291.3 L 245.9 304.1 L 239.2 316.1 L 232.0 327.1 L 224.2 337.1 L 215.8 345.9 L 207.1 353.6 L 198.0 360.1 L 188.6 365.3 L 179.0 369.2 L 169.4 371.8 L 159.7 373.1 L 150.0 373.0 L 140.5 371.6 L 131.1 369.0 L 122.1 365.1 L 113.4 359.9 L 105.1 353.6 L 97.3 346.2 L 90.0 337.8 L 83.4 328.4 L 77.3 318.2 L 71.9 307.2 L 67.3 295.5 L 63.3 283.2 L 60.1 270.4 L 57.7 257.3 L 56.1 243.9 L 55.3 230.3 L 55.2 216.8 L 56.0 203.3 L 57.4 189.9 L 59.6 176.9 L 62.5 164.3 L 66.1 152.1 L 70.2 140.5 L 75.0 129.6 L 80.3 119.5 L 86.1 110.2 L 92.3 101.8 L 98.9 94.3 L 105.7 87.9 L 112.9 82.4 L 120.2 78.1 L 127.6 74.9 L 135.1 72.8 L 142.6 71.8 L 150.0 72.0 L 157.3 73.3 L 164.4 75.6 L 171.2 79.0 L 177.8 83.5 L 184.0 88.9 L 189.9 95.2 L 195.3 102.4 L 200.2 110.4 L 204.6 119.1 L 208.5 128.4 L 211.9 138.3 L 214.7 148.7 L 216.9 159.4 L 218.5 170.4 L 219.5 181.7 L 219.9 193.0 L 219.8 204.4 L 219.1 215.6 L 217.8 226.7 L 216.0 237.5 L 213.7 248.0 L 211.0 258.1 L 207.7 267.6 L 204.1 276.6 L 200.1 284.9 L 195.8 292.5 L 191.3 299.4 L 186.4 305.5 L 181.4 310.7 L 176.3 315.0 L 171.0 318.5 L 165.7 321.0 L 160.4 322.6 L 155.2 323.3 L 150.0 323.0 L 145.0 321.8 L 140.1 319.8 L 135.4 316.9 L 131.0 313.1 L 126.8 308.6 L 123.0 303.3 L 119.4 297.4 L 116.3 290.8 L 113.4 283.6 L 111.0 276.0 L 109.0 267.9 L 107.4 259.5 L 106.1 250.8 L 105.3 241.8 L 104.9 232.8 L 104.8 223.6 L 105.2 214.5 L 105.9 205.5 L 107.0 196.7 L 108.4 188.0 L 110.1 179.7 L 112.0 171.8 L 114.3 164.2 L 116.7 157.2 L 119.4 150.7 L 122.2 144.7 L 125.2 139.4 L 128.3 134.8 L 131.4 130.8 L 134.6 127.5 L 137.8 124.9 L 140.9 123.1 L 144.0 122.0 L 147.1 121.6 L 150.0 122.0"}]
  },
  {kind:"trace", title:"Trace while you listen", stars:0,
    designs:[{name:"Puzzle",color:"#d39b12",ghost:"#f3e2ae",d:"M 34.5 93.5 L 53.5 93.5 Q 67.5 93.5 67.5 107.5 L 67.5 112.5 Q 67.5 126.5 53.5 126.5 L 48.5 126.5 Q 34.5 126.5 34.5 140.5 L 34.5 145.5 Q 34.5 159.5 34.5 173.5 L 34.5 178.5 Q 34.5 192.5 48.5 192.5 L 53.5 192.5 Q 67.5 192.5 67.5 178.5 L 67.5 173.5 Q 67.5 159.5 81.5 159.5 L 86.5 159.5 Q 100.5 159.5 100.5 173.5 L 100.5 178.5 Q 100.5 192.5 114.5 192.5 L 119.5 192.5 Q 133.5 192.5 133.5 178.5 L 133.5 173.5 Q 133.5 159.5 133.5 145.5 L 133.5 140.5 Q 133.5 126.5 119.5 126.5 L 114.5 126.5 Q 100.5 126.5 100.5 112.5 L 100.5 107.5 Q 100.5 93.5 114.5 93.5 L 119.5 93.5 Q 133.5 93.5 147.5 93.5 L 152.5 93.5 Q 166.5 93.5 166.5 107.5 L 166.5 112.5 Q 166.5 126.5 180.5 126.5 L 185.5 126.5 Q 199.5 126.5 199.5 112.5 L 199.5 107.5 Q 199.5 93.5 213.5 93.5 L 218.5 93.5 Q 232.5 93.5 246.5 93.5 L 251.5 93.5 Q 265.5 93.5 265.5 107.5 L 265.5 112.5 Q 265.5 126.5 251.5 126.5 L 246.5 126.5 Q 232.5 126.5 232.5 140.5 L 232.5 145.5 Q 232.5 159.5 246.5 159.5 L 251.5 159.5 Q 265.5 159.5 265.5 173.5 L 265.5 178.5 Q 265.5 192.5 251.5 192.5 L 246.5 192.5 Q 232.5 192.5 218.5 192.5 L 213.5 192.5 Q 199.5 192.5 199.5 178.5 L 199.5 173.5 Q 199.5 159.5 185.5 159.5 L 180.5 159.5 Q 166.5 159.5 166.5 173.5 L 166.5 178.5 Q 166.5 192.5 166.5 206.5 L 166.5 211.5 Q 166.5 225.5 166.5 239.5 L 166.5 244.5 Q 166.5 258.5 180.5 258.5 L 185.5 258.5 Q 199.5 258.5 199.5 244.5 L 199.5 239.5 Q 199.5 225.5 213.5 225.5 L 218.5 225.5 Q 232.5 225.5 246.5 225.5 L 251.5 225.5 Q 265.5 225.5 265.5 239.5 L 265.5 244.5 Q 265.5 258.5 251.5 258.5 L 246.5 258.5 Q 232.5 258.5 232.5 272.5 L 232.5 277.5 Q 232.5 291.5 246.5 291.5 L 251.5 291.5 Q 265.5 291.5 265.5 305.5 L 265.5 310.5 Q 265.5 324.5 251.5 324.5 L 246.5 324.5 Q 232.5 324.5 218.5 324.5 L 213.5 324.5 Q 199.5 324.5 199.5 310.5 L 199.5 305.5 Q 199.5 291.5 185.5 291.5 L 180.5 291.5 Q 166.5 291.5 166.5 305.5 L 166.5 310.5 Q 166.5 324.5 152.5 324.5 L 147.5 324.5 Q 133.5 324.5 119.5 324.5 L 114.5 324.5 Q 100.5 324.5 100.5 310.5 L 100.5 305.5 Q 100.5 291.5 114.5 291.5 L 119.5 291.5 Q 133.5 291.5 133.5 277.5 L 133.5 272.5 Q 133.5 258.5 133.5 244.5 L 133.5 239.5 Q 133.5 225.5 119.5 225.5 L 114.5 225.5 Q 100.5 225.5 100.5 239.5 L 100.5 244.5 Q 100.5 258.5 86.5 258.5 L 81.5 258.5 Q 67.5 258.5 67.5 244.5 L 67.5 239.5 Q 67.5 225.5 53.5 225.5 L 48.5 225.5 Q 34.5 225.5 34.5 239.5 L 34.5 244.5 Q 34.5 258.5 34.5 272.5 L 34.5 277.5 Q 34.5 291.5 48.5 291.5 L 53.5 291.5 Q 67.5 291.5 67.5 305.5 L 67.5 310.5 Q 67.5 324.5 53.5 324.5 L 34.5 324.5"},{name:"Coil",color:"#6f4b96",ghost:"#ddd0ee",d:"M 18.0 18.0 L 262.0 18.0 Q 282.0 18.0 282.0 38.0 L 282.0 380.0 Q 282.0 400.0 262.0 400.0 L 94.0 400.0 Q 74.0 400.0 74.0 380.0 L 74.0 94.0 Q 74.0 74.0 94.0 74.0 L 206.0 74.0 Q 226.0 74.0 226.0 94.0 L 226.0 324.0 Q 226.0 344.0 206.0 344.0 L 150.0 344.0 Q 130.0 344.0 130.0 324.0 L 130.0 130.0"},{name:"Snake",color:"#2a8aa0",ghost:"#c5e6ec",d:"M 26.0 18.0 L 26.0 378.0 Q 26.0 400.0 48.0 400.0 L 60.0 400.0 Q 82.0 400.0 82.0 378.0 L 82.0 40.0 Q 82.0 18.0 104.0 18.0 L 116.0 18.0 Q 138.0 18.0 138.0 40.0 L 138.0 378.0 Q 138.0 400.0 160.0 400.0 L 172.0 400.0 Q 194.0 400.0 194.0 378.0 L 194.0 40.0 Q 194.0 18.0 216.0 18.0 L 228.0 18.0 Q 250.0 18.0 250.0 40.0 L 250.0 400.0"},{name:"Spiral",color:"#2c7a55",ghost:"#c4ead4",d:"M 150.0 26.0 L 161.4 27.5 L 172.6 30.4 L 183.5 34.8 L 193.9 40.5 L 203.9 47.6 L 213.4 55.9 L 222.2 65.3 L 230.3 75.9 L 237.7 87.5 L 244.3 99.9 L 250.0 113.1 L 254.9 127.0 L 258.8 141.5 L 261.8 156.4 L 263.9 171.5 L 265.1 186.9 L 265.3 202.3 L 264.5 217.7 L 262.9 232.8 L 260.3 247.6 L 256.9 262.0 L 252.7 275.9 L 247.7 289.1 L 241.9 301.5 L 235.6 313.1 L 228.6 323.8 L 221.0 333.5 L 213.0 342.0 L 204.6 349.5 L 195.9 355.7 L 186.9 360.7 L 177.7 364.5 L 168.5 366.9 L 159.2 368.1 L 150.0 368.0 L 140.9 366.6 L 132.1 364.0 L 123.5 360.2 L 115.2 355.1 L 107.4 349.0 L 100.0 341.8 L 93.1 333.6 L 86.8 324.5 L 81.1 314.6 L 76.1 303.9 L 71.7 292.5 L 68.0 280.6 L 65.1 268.3 L 62.9 255.6 L 61.4 242.7 L 60.7 229.6 L 60.7 216.5 L 61.5 203.5 L 62.9 190.7 L 65.0 178.1 L 67.8 166.0 L 71.2 154.3 L 75.2 143.2 L 79.8 132.8 L 84.8 123.1 L 90.2 114.2 L 96.1 106.1 L 102.3 99.0 L 108.7 92.9 L 115.4 87.7 L 122.3 83.6 L 129.2 80.6 L 136.2 78.7 L 143.1 77.8 L 150.0 78.0 L 156.7 79.3 L 163.3 81.6 L 169.6 84.9 L 175.7 89.2 L 181.4 94.4 L 186.7 100.5 L 191.6 107.4 L 196.1 115.1 L 200.1 123.4 L 203.6 132.3 L 206.6 141.8 L 209.1 151.7 L 211.0 161.9 L 212.4 172.4 L 213.2 183.1 L 213.5 193.9 L 213.3 204.6 L 212.6 215.3 L 211.3 225.8 L 209.6 236.1 L 207.4 246.0 L 204.9 255.5 L 201.9 264.5 L 198.5 272.9 L 194.9 280.7 L 191.0 287.9 L 186.8 294.3 L 182.4 300.0 L 177.9 304.8 L 173.3 308.8 L 168.6 312.0 L 163.9 314.3 L 159.2 315.8 L 154.5 316.3 L 150.0 316.0 L 145.6 314.8 L 141.3 312.8 L 137.3 310.0 L 133.5 306.5 L 129.9 302.2 L 126.6 297.2 L 123.7 291.5 L 121.0 285.4 L 118.7 278.6 L 116.7 271.5 L 115.1 263.9 L 113.8 256.0 L 112.9 247.9 L 112.3 239.5 L 112.1 231.1 L 112.2 222.6 L 112.7 214.2 L 113.4 205.8 L 114.4 197.7 L 115.7 189.7 L 117.3 182.1 L 119.1 174.8 L 121.0 167.9 L 123.2 161.4 L 125.4 155.5 L 127.8 150.1 L 130.3 145.3 L 132.8 141.1 L 135.4 137.5 L 138.0 134.6 L 140.5 132.3 L 143.0 130.7 L 145.4 129.8 L 147.8 129.6 L 150.0 130.0"}]
  },
  {kind:"scene", title:"What would you say?",
    img:"weeks/2026-10-12/midweek/mwb-wwys.jpg",
    spots:[
      {id:"book", label:"the book", hint:"He is reading.", x:30,y:34,w:14,h:26,
        q:"You noticed he is reading a book. What could you say?",
        options:[
          {t:"That looks interesting. What are you reading about?", a:true},
          {t:"Reading on a bus is boring.", a:false}
        ]},
      {id:"man", label:"the man", hint:"He looks like he is thinking.", x:52,y:4,w:17,h:32,
        q:"You noticed he is thinking hard. What could you ask?",
        options:[
          {t:"Do you like reading about God?", a:true},
          {t:"Why are you so quiet?", a:false}
        ]},
      {id:"bag", label:"the bag", hint:"His bag is on the seat.", x:43,y:72,w:24,h:28,
        q:"You noticed his bag. What could you say?",
        options:[
          {t:"Are you on your way to work? I hope you have a nice day.", a:true},
          {t:"Your bag is taking up a seat.", a:false}
        ]},
      {id:"window", label:"the city", hint:"Look out the window.", x:70,y:2,w:28,h:46,
        q:"You noticed the city outside. What could you say?",
        options:[
          {t:"It’s a beautiful day. Do you think the world will ever be peaceful?", a:true},
          {t:"This city is too loud.", a:false}
        ]}
    ]
  },
  null,
  {kind:"search", title:"Word hunt while you listen",
    feed:"Slide across letters. Words from tonight’s meeting.",
    done:"You found them all. Jehovah is with us!",
    words:["CALEB", "JOSHUA", "SPIES", "GRAPES", "HONEY", "MILK", "HEBRON", "COURAGE", "FAITH", "LOYAL", "JEHOVAH", "JOHANAN", "EGYPT", "LISTEN", "PRAY", "OBEY", "JUDAH", "CROWD"],
    grid:[["M", "K", "W", "N", "A", "N", "A", "H", "O", "J", "T", "P"], ["S", "H", "D", "Y", "A", "R", "P", "V", "N", "C", "M", "M"], ["E", "A", "D", "W", "O", "R", "C", "O", "G", "O", "S", "A"], ["P", "D", "I", "V", "U", "N", "R", "R", "G", "U", "C", "O"], ["A", "U", "U", "R", "E", "B", "H", "N", "A", "R", "A", "Y"], ["R", "J", "J", "T", "E", "T", "Y", "U", "Y", "A", "L", "F"], ["G", "O", "S", "H", "I", "U", "H", "K", "E", "G", "E", "S"], ["W", "I", "R", "A", "G", "S", "L", "L", "N", "E", "B", "P"], ["L", "R", "F", "A", "O", "W", "M", "I", "O", "G", "T", "I"], ["N", "M", "K", "J", "U", "B", "T", "M", "H", "Y", "Y", "E"], ["C", "H", "A", "V", "O", "H", "E", "J", "P", "P", "A", "S"], ["H", "V", "V", "J", "V", "A", "N", "Y", "V", "T", "E", "L"]]
  },
  {kind:"order", title:"Caleb followed Jehovah",
    done:"Caleb followed Jehovah wholeheartedly.",
    feed:"Walk Courageously With God · chapter 12",
    steps:[
      "Caleb sees Jehovah free His people from Egypt",
      "Twelve men spy out the land for 40 days",
      "Two men carry one big cluster of grapes",
      "Ten spies give a bad report",
      "Caleb and Joshua say, “Do not fear them”",
      "At 85, Caleb takes Hebron"
    ]
  },
  {kind:"quiz", title:"Look closer", done:"Jehovah keeps his promises.",
    qs:[
      {q:"How big was the cluster of grapes the spies brought back?",
       opts:[{t:"So big that two men carried it on a bar.",a:true},{t:"Small enough to fit in a pocket.",a:false}]},
      {q:"What do the clay beehives found in Israel help show?",
       opts:[{t:"People there really kept bees and had honey.",a:true},{t:"Nobody ever lived in that land.",a:false}]},
      {q:"On the map, how far was Kadesh from the Promised Land?",
       opts:[{t:"Close — just a short trip away.",a:true},{t:"Farther than the trip from Egypt.",a:false}]},
      {q:"How did Jehovah reward Caleb?",
       opts:[{t:"He lived to enter the land and got Hebron.",a:true},{t:"He had to go back to Egypt.",a:false}]}
    ]
  },
  {kind:"quiz", title:"Follow the crowd or follow Jehovah?", done:"Like Caleb, you can follow Jehovah!",
    qs:[
      {q:"Everyone at school says a scary movie is cool. What would Caleb do?",
       opts:[{t:"Choose what Jehovah likes, even if others laugh.",a:true},{t:"Watch it so I fit in.",a:false}]},
      {q:"Friends are complaining and saying mean things. What would Caleb do?",
       opts:[{t:"Say something good, like Caleb and Joshua did.",a:true},{t:"Join in so they like me.",a:false}]},
      {q:"Something feels too hard to do for Jehovah. What would Caleb do?",
       opts:[{t:"Remember, “Jehovah is with us.”",a:true},{t:"Give up before trying.",a:false}]},
      {q:"You have to wait a long time for something good. What would Caleb do?",
       opts:[{t:"Keep trusting Jehovah while I wait.",a:true},{t:"Stop trusting because it takes too long.",a:false}]}
    ]
  },
  {kind:"quiz", title:"What does this teach about Jehovah?", done:"Jehovah sees our faith.",
    qs:[
      {q:"What does this account teach you about Jehovah?",
       opts:[{t:"He notices faith and courage.",a:true},{t:"He does not notice what we do.",a:false}]},
      {q:"What did Jehovah do with his promise to Caleb?",
       opts:[{t:"He kept it — Caleb got Hebron at 85.",a:true},{t:"He forgot it.",a:false}]},
      {q:"What would you like to ask Caleb in the resurrection?",
       opts:[{t:"How did you stay brave when the crowd was against you?",a:true},{t:"Nothing — I already know everything.",a:false}]}
    ]
  },
  null
];

/* WEEK PACK — buddy answers for this week’s material */
const BUDDY_FACTS = [
  {keys:["johanan","asked","pray"], ans:"Johanan and the people asked Jeremiah to pray for them. They promised to obey. But when Jehovah answered, they did not listen."},
  {keys:["egypt","judah","stay"], ans:"Jehovah said, “Stay in Judah. Do not go to Egypt.” The people went to Egypt anyway."},
  {keys:["queen","heaven","sacrifice"], ans:"The people said their trouble came because they stopped sacrificing to the “Queen of Heaven.” Jeremiah said the trouble came because they did not obey Jehovah."},
  {keys:["stones","tahpanhes","pharaoh"], ans:"In Tahpanhes, Jeremiah hid large stones at Pharaoh’s house. Nebuchadnezzar would set his throne right above them."},
  {keys:["advice","counsel","listen"], ans:"Ask yourself: When I get Bible advice, do I do it — even if it’s not what I wanted to hear?"},
  {keys:["bus","reading","book"], ans:"In What Would You Say?, a man is reading on a bus. You could ask what he is reading about."},
  {keys:["caleb","spies","spy","grapes"], ans:"Caleb was one of 12 spies. Ten were afraid. Caleb and Joshua said, “Jehovah is with us. Do not fear them.”"},
  {keys:["hebron","85","reward"], ans:"When Caleb was 85, he took Hebron, just as Jehovah promised. Jehovah rewarded his faith."},
  {keys:["honey","milk","beehive"], ans:"Caleb and Joshua said the land was flowing with milk and honey. Clay beehives found in Israel show people really kept bees there."},
  {keys:["song 103","103"], ans:"Song 103 is Shepherds—Gifts in Men."},
  {keys:["song 47","47"], ans:"Song 47 is Pray to Jehovah Each Day."},
  {keys:["song 129","129"], ans:"Song 129 is the closing song — We Will Keep Enduring."},
  {keys:["bored","tired","long"], ans:"Meetings can feel long. Try this: answer the Check, then play the little game. I’m staying with you."},
  {keys:["who are you","your name","buddy"], ans:"I’m Brutus. I know this week’s meeting."},
  {keys:["hello","hi","hey"], ans:"Hi. Look at the purple Check card if you want a hint."}
];
