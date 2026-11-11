/* MIDWEEK week pack — loaded by index.html before the app engine (see README "Weekly update").
   Week of November 9–15, 2026 · Jeremiah 51–52. Source: Life and Ministry Meeting Workbook,
   November–December 2026 (wol.jw.org / jw.org), and Walk Courageously With God (wcg) chapter 16.
   Image paths are relative to index.html. */

/* Song titles and lead sheets used by this week's parts (pages from songs/, the "Sing Out Joyfully" book). */
const SONG_TITLES = {
  10: "Song 10 — Praise Jehovah Our God!",
  98: "Song 98 — The Scriptures—Inspired of God",
  150: "Song 150 — Seek God for Your Deliverance"
};
const SONG_SHEETS = {
  10: "songs/010-1.png",
  98: "songs/098-1.png",
  150: ["songs/150-1.png", "songs/150-2.png"]
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
  id: "2026-11-09",
  heading: "Jeremiah 51–52",
  range: "November 9–15, 2026",
  start: [2026, 10, 10, 19, 0, 0],
  secretKind: "word",
  secretWord: "Promise",
  secretChoices: ["Promise","Chariot","Donate","Kingdom"],
  secretHint: "Listen in Treasures. Zedekiah broke one he made in Jehovah’s name. We keep ours.",
  secretFoundBlurb: "Zedekiah broke a promise he made in Jehovah’s name. We can be different — we keep our promises!",
  prizeText: "Congratulations — you had a perfect meeting! Mommy and Daddy will take you to get one thing from Sheetz!"
};

const meetingParts = [
  {section:"Opening",title:"Song 98 and Opening Comments",minutes:1,kind:"normal",song:98,
    listen:"Stand ready for song 98, then listen to the opening comments.",
    buddy:"This meeting is Jeremiah 51 and 52. Listen for King Zedekiah, and for keeping our promises.",
    html:`<div class="material-block"><strong>Song 98 and Prayer</strong> — The Scriptures—Inspired of God</div>
<div class="material-block">Opening Comments <em>(1 min.)</em></div>`},
  {section:"Treasures From God’s Word",title:"Learn From the Warning Example of Zedekiah",minutes:10,kind:"answer",
    listen:"Listen for two things: what Zedekiah did wrong, and what happened because of it.",
    buddy:"Zedekiah did not stand up for what is right, and he broke a promise he made in Jehovah’s name. He lost his kingdom and was taken away.",
    html:`<div class="material-block"><ul>
<li>Zedekiah did not stand up for what is right <strong>(Jer 52:1, 2; jr 29)</strong></li>
<li>Zedekiah broke an oath that he swore in God’s name <strong>(Jer 52:3; w17.10 23 ¶9-10)</strong></li>
<li>Zedekiah did not escape the consequences of his actions <strong>(Jer 52:8-11)</strong></li>
</ul></div>
<div class="material-block"><p><strong>FOR MEDITATION:</strong> How can I avoid being like Zedekiah? <strong>(w17.10 23 ¶11-12)</strong></p></div>
<div class="source-pic"><img src="weeks/2026-11-09/midweek/mwb-zedekiah.jpg" alt="Zedekiah after he lost his kingdom"><p>Zedekiah did not stand up for what is right, and he lost his kingdom.</p></div>`},
  {section:"Treasures From God’s Word",title:"Spiritual Gems",minutes:10,kind:"questions",
    listen:"Listen for Jehovah’s warning to leave Babylon. How is that like the warning we give today?",
    buddy:"Jehovah told his people to leave Babylon because it was going to fall. Today we warn people to leave false religion and come to Jehovah.",
    questions:["Jer 51:6, 7, 36—How does this warning parallel a warning being given today?","What spiritual gems from this week’s Bible reading would you like to share?"],
    html:`<div class="material-block review-question"><p><strong>Jer 51:6, 7, 36</strong> — How does this warning parallel a warning being given today?</p></div>
<div class="material-block"><p class="review-question">What spiritual gems from this week’s Bible reading would you like to share?</p></div>`},
  {section:"Treasures From God’s Word",title:"Bible Reading",minutes:4,kind:"answer",
    listen:"Follow Jeremiah 52:6-20. What happened to Jerusalem and the temple?",
    buddy:"This reading is Jeremiah 52:6-20. Jerusalem ran out of food, the city was broken into, and the temple was torn down.",
    html:`<div class="material-block"><strong>Jeremiah 52:6-20</strong> <em>(th study 5)</em></div>
<div class="material-block">Jerusalem ran out of food, and the city was broken into. King Zedekiah was captured. The beautiful temple was torn down, its treasures were taken, and many people were taken away from their home.</div>`},
  {section:"Apply Yourself to the Field Ministry",title:"Starting a Conversation",minutes:3,kind:"answer",
    listen:"How do they offer a Bible study at the door?",
    buddy:"House to house. They use the direct approach — they kindly offer a Bible study right away.",
    html:`<div class="material-block"><strong>HOUSE TO HOUSE.</strong> Use the direct approach to offer a Bible study. <em>(lmd lesson 3 point 3)</em></div>`},
  {section:"Apply Yourself to the Field Ministry",title:"Starting a Conversation",minutes:4,kind:"answer",
    listen:"The person does not agree that Jesus is God’s Son. What does the publisher do?",
    buddy:"House to house. The person disagrees that Jesus is God’s Son. A good teacher stays kind and uses the Bible to explain.",
    html:`<div class="material-block"><strong>HOUSE TO HOUSE.</strong> A householder objects to our belief that Jesus is God’s Son. <em>(lmd lesson 3 point 4)</em></div>`},
  {section:"Apply Yourself to the Field Ministry",title:"Talk",minutes:5,kind:"answer",
    listen:"What is God’s Kingdom? Where is it?",
    buddy:"God’s Kingdom is a real government in heaven, with Jesus as King.",
    html:`<div class="material-block"><strong>Talk</strong> <em>(5 min.)</em> lmd appendix A point 21 — Theme: God’s Kingdom Is a Real Government in Heaven. <em>(th study 7)</em></div>`},
  {section:"Living as Christians",title:"Song 10 — Praise Jehovah Our God!",minutes:0,kind:"song",song:10,
    listen:"Follow the words. This song praises Jehovah our God.",
    buddy:"We love to praise Jehovah!",
    html:`<div class="material-block"><strong>Song 10</strong> — Praise Jehovah Our God!</div>`},
  {section:"Living as Christians",title:"Our Donations Glorify God’s Beautiful Name",minutes:15,kind:"questions",
    listen:"Watch the video Giving Glorifies Jehovah. How do our gifts bring praise to Jehovah?",
    buddy:"When we give to help Jehovah’s work, we are saying thank you and making his name look beautiful. Watch the video, then you can tell Mommy one thing you learned.",
    questions:["How do our donations bring praise to Jehovah?","How have you benefited from the organizational updates on jw.org and the letters of appreciation that you receive?","What specific organizational initiatives are you especially thankful for?"],
    html:`<div class="material-block"><strong>Discussion by an elder.</strong> The Israelites who would not be directly involved in the construction of the temple were invited to glorify Jehovah’s name by their generous contributions. <strong>(1Ch 29:8-10)</strong> Today, we cannot be directly involved in every theocratic project. However, through our donations, we can fully support these initiatives. Organizational updates on jw.org allow us to see how our gifts contribute to the glory due Jehovah’s name. <strong>(Ps 96:8)</strong> These updates also move us to praise Jehovah for all that he is accomplishing on earth and for allowing us to have a share. <strong>(1Ch 29:14-16; Isa 12:5)</strong></div>
<div class="material-block">Play the VIDEO <em>Giving Glorifies Jehovah</em>. Then ask the audience:</div>
<div class="review-list">
<div class="review-question"><strong>How do our donations bring praise to Jehovah?</strong></div>
<div class="review-question"><strong>How have you benefited from the organizational updates on jw.org and the letters of appreciation that you receive?</strong></div>
<div class="review-question"><strong>What specific organizational initiatives are you especially thankful for?</strong></div>
</div>
<div class="source-pic"><img src="weeks/2026-11-09/midweek/mwb-updates.jpg" alt="A sister reads organizational updates on jw.org"><p>Organizational updates on jw.org let us see how our gifts help Jehovah’s work.</p></div>`},
  {section:"Congregation Bible Study",title:"“I Will Certainly Go With You” — Barak and Deborah",minutes:30,kind:"cbs",
    listen:"Listen for what Deborah said when Barak asked her to go with him.",
    buddy:"Deborah said: “I will certainly go with you.” She was brave, and Barak was humble enough to want Jehovah’s help.",
    html:`<div class="cbs-reference"><strong>Walk Courageously With God, chapter 16</strong><br>Read: Judges 4:1-16, 23, 24; 5:1-23</div>
<div class="source-pic"><img src="weeks/2026-11-09/midweek/wcg-tabor.jpg" alt="Deborah and Barak on Mount Tabor looking out over the plain"><p>A judge and a prophetess had to face a vicious general and his forces of armed chariots.</p></div>
<div class="story-text">
<p>It was a hard time in Israel. A cruel general named Sisera had 900 chariots, and people were very afraid. Roads were empty, and many villages were quiet.</p>
<p>Deborah was a brave prophetess. Jehovah told her to send for Barak. Barak was to gather 10,000 men on Mount Tabor, and Jehovah would give them the victory.</p>
<p>Barak said he would go if Deborah went with him. He wanted Jehovah’s guidance. Deborah bravely agreed, saying: “I will certainly go with you.”</p>
<p>From the mountain they could see Sisera’s army coming. Jehovah told Barak to rise up and attack — right out onto the open plain! That looked impossible, but Barak listened.</p>
<p>Jehovah sent a heavy rain. The chariots got stuck in the mud, and Jehovah won the battle for his people. Sisera ran away. Jehovah had a plan for what would happen next.</p>
</div>
<div class="review-question"><strong>For discussion:</strong> In what ways did Barak and Deborah show courage?</div>`},
  {section:"Congregation Bible Study",title:"Dig Deeper",minutes:0,kind:"cbs",
    listen:"Pick one Dig Deeper question and try to answer it.",
    buddy:"Look at the picture of Deborah sitting under the palm tree. She helped people, like a mother in Israel.",
    html:`<div class="review-list">
<div class="review-question"><strong>What was life like in Israel under Sisera’s domination?</strong></div>
<div class="review-question"><strong>Why is Deborah not usually counted among the 12 judges who served in Israel before Samuel became a prophet?</strong></div>
<div class="review-question"><strong>In what sense was Deborah “a mother in Israel”? (Judg. 4:4, 5; 5:7)</strong></div>
<div class="source-pic"><img src="weeks/2026-11-09/midweek/wcg-deborah.jpg" alt="Deborah sits under a palm tree and helps people who come to her"><p>Deborah served as a mother in Israel, judging cases and helping the people.</p></div>
<div class="review-question"><strong>What did Deborah and Barak mean when they sang that “the stars fought” against Sisera? (Judg. 5:20)</strong></div>
</div>`},
  {section:"Congregation Bible Study",title:"Reflect on the Lessons",minutes:0,kind:"cbs",
    listen:"Barak was happy to have Deborah’s help. When do you need courage like theirs?",
    buddy:"Barak humbly accepted Deborah’s help. Deborah needed courage to go with him. We can be brave and accept help too.",
    html:`<div class="review-list">
<div class="review-question"><strong>When might a brother imitate the way Barak humbly accepted the help of a faithful woman?</strong></div>
<div class="review-question"><strong>Why did Deborah need courage to accompany Barak? When do we need similar courage?</strong></div>
<div class="review-question"><strong>In what other ways might you imitate the courage of Barak and Deborah?</strong></div>
</div>`},
  {section:"Congregation Bible Study",title:"Meditate on the Bigger Picture",minutes:0,kind:"cbs",
    listen:"What does the story of Barak and Deborah teach you about Jehovah?",
    buddy:"Jehovah helps his people when they trust him and obey, even if the job looks too big.",
    html:`<div class="review-list">
<div class="review-question"><strong>What does this account teach me about Jehovah?</strong></div>
<div class="review-question"><strong>How does the account tie in with Jehovah’s purposes?</strong></div>
<div class="review-question"><strong>What would I like to ask Barak and Deborah in the resurrection?</strong></div>
</div>`},
  {section:"Closing",title:"Concluding Comments",minutes:3,kind:"normal",song:150,
    listen:"Listen for the concluding comments, then sing song 150.",
    buddy:"You did it. Song 150 — Seek God for Your Deliverance.",
    html:`<div class="material-block"><strong>Concluding Comments</strong> <em>(3 min.)</em></div>
<div class="material-block"><strong>Song 150 and Prayer</strong> — Seek God for Your Deliverance</div>`}
];

/* WEEK PACK — listening checks, one per meetingParts index */
const PART_CHECKS = [
  {q:"What is the opening song tonight?", opts:["Song 98 — The Scriptures—Inspired of God","Song 10","Song 1"], a:0, hint:"Look at the song button."},
  {q:"What did Zedekiah break?", opts:["A promise he made in Jehovah’s name","A window","A jar of oil"], a:0, hint:"Treasures, Jeremiah 52:3."},
  {q:"Jehovah warned his people to leave…", opts:["Babylon","The playground","The moon"], a:0, hint:"Spiritual Gems, Jeremiah 51:6."},
  {q:"In the Bible reading, what happened to the temple?", opts:["It was torn down","It grew taller","It turned into gold"], a:0, hint:"Jeremiah 52:13-17."},
  {q:"The first ministry part tonight is…", opts:["Offering a Bible study at the door","A wedding talk","A picnic"], a:0, hint:"Starting a Conversation — house to house."},
  {q:"A person disagrees that Jesus is God’s Son. What should we do?", opts:["Stay kind and use the Bible","Get angry","Walk away without a word"], a:0, hint:"Listen to the setting."},
  {q:"God’s Kingdom is…", opts:["A real government in heaven","A make-believe story","A clubhouse"], a:0, hint:"Tonight’s talk theme."},
  {q:"Song 10 is…", opts:["Praise Jehovah Our God!","A song about fishing","A birthday song"], a:0, hint:"Look at the song button."},
  {q:"Our donations…", opts:["Bring praise to Jehovah’s name","Buy us a trophy","Make us famous"], a:0, hint:"Giving Glorifies Jehovah."},
  {q:"What did Deborah say to Barak?", opts:["“I will certainly go with you.”","“Go by yourself.”","“I am too busy.”"], a:0, hint:"Walk Courageously With God, chapter 16."},
  {q:"Deborah sat under a palm tree and helped people. She was like…", opts:["A mother in Israel","A soldier in a chariot","A baker"], a:0, hint:"Look at the picture of Deborah."},
  {q:"Barak wanted Deborah to come because…", opts:["He wanted Jehovah’s help","He was lost","He forgot his lunch"], a:0, hint:"Barak humbly accepted help."},
  {q:"Who won the battle for Barak and Deborah?", opts:["Jehovah","Sisera","Pharaoh"], a:0, hint:"Jehovah sent the rain."},
  {q:"The closing song is…", opts:["Song 150 — Seek God for Your Deliverance","Song 98","Song 10"], a:0, hint:"Stay for the last song."}
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
  {kind:"wise", title:"Keep your promise, or break it like Zedekiah?",
    prompts:[
      {q:"I tell Mommy I will clean up, and I do it.", a:"wise"},
      {q:"I say I will help, then I hide.", a:"unwise"},
      {q:"I stand up for a friend who is being picked on.", a:"wise"},
      {q:"I go along with something I know is wrong.", a:"unwise"},
      {q:"I tell the truth even when it is hard.", a:"wise"},
      {q:"I make a promise in Jehovah’s name and then break it.", a:"unwise"}
    ]
  },
  {kind:"quiz", title:"Leave Babylon", done:"Today we still give Jehovah’s warning.",
    qs:[
      {q:"Jehovah told his people to leave Babylon because…", opts:[{t:"It was going to fall",a:true},{t:"It was too cold",a:false}]},
      {q:"How is that like today?", opts:[{t:"We warn people to leave false religion and come to Jehovah",a:true},{t:"We tell people to move to a new street",a:false}]},
      {q:"Who gives the warning today?", opts:[{t:"Jehovah’s people",a:true},{t:"The weather report",a:false}]}
    ]
  },
  {kind:"order", title:"What happened in Jerusalem?",
    feed:"Jeremiah 52:6-20",
    done:"Jeremiah’s words came true, just as Jehovah said.",
    steps:[
      "Jerusalem runs out of food.",
      "The city is broken into, and the king is captured.",
      "The temple is torn down, and its treasures are taken.",
      "Many people are taken away from their home."
    ]
  },
  {kind:"trace", title:"Trace while you listen", stars:0,
    designs:[{name:"Coil",color:"#6f4b96",ghost:"#ddd0ee",d:"M 18.0 18.0 L 262.0 18.0 Q 282.0 18.0 282.0 38.0 L 282.0 380.0 Q 282.0 400.0 262.0 400.0 L 90.0 400.0 Q 70.0 400.0 70.0 380.0 L 70.0 90.0 Q 70.0 70.0 90.0 70.0 L 210.0 70.0 Q 230.0 70.0 230.0 90.0 L 230.0 328.0 Q 230.0 348.0 210.0 348.0 L 142.0 348.0 Q 122.0 348.0 122.0 328.0 L 122.0 142.0 Q 122.0 122.0 142.0 122.0 L 158.0 122.0 Q 178.0 122.0 178.0 142.0 L 178.0 296.0"},{name:"Snake",color:"#2a8aa0",ghost:"#c5e6ec",d:"M 18.0 18.0 L 18.0 378.0 Q 18.0 400.0 40.0 400.0 L 48.0 400.0 Q 70.0 400.0 70.0 378.0 L 70.0 40.0 Q 70.0 18.0 92.0 18.0 L 100.0 18.0 Q 122.0 18.0 122.0 40.0 L 122.0 378.0 Q 122.0 400.0 144.0 400.0 L 152.0 400.0 Q 174.0 400.0 174.0 378.0 L 174.0 40.0 Q 174.0 18.0 196.0 18.0 L 204.0 18.0 Q 226.0 18.0 226.0 40.0 L 226.0 378.0 Q 226.0 400.0 248.0 400.0 L 256.0 400.0 Q 278.0 400.0 278.0 378.0 L 278.0 18.0"},{name:"Waves",color:"#c45b8c",ghost:"#f3c4d8",d:"M 18.0 18.0 L 260.0 18.0 Q 282.0 18.0 282.0 40.0 L 282.0 50.0 Q 282.0 72.0 260.0 72.0 L 40.0 72.0 Q 18.0 72.0 18.0 94.0 L 18.0 104.0 Q 18.0 126.0 40.0 126.0 L 260.0 126.0 Q 282.0 126.0 282.0 148.0 L 282.0 158.0 Q 282.0 180.0 260.0 180.0 L 40.0 180.0 Q 18.0 180.0 18.0 202.0 L 18.0 212.0 Q 18.0 234.0 40.0 234.0 L 260.0 234.0 Q 282.0 234.0 282.0 256.0 L 282.0 266.0 Q 282.0 288.0 260.0 288.0 L 40.0 288.0 Q 18.0 288.0 18.0 310.0 L 18.0 320.0 Q 18.0 342.0 40.0 342.0 L 260.0 342.0 Q 282.0 342.0 282.0 364.0 L 282.0 374.0 Q 282.0 396.0 260.0 396.0 L 18.0 396.0"},{name:"Spiral",color:"#d45b7a",ghost:"#f4c9d4",d:"M 150.0 22.0 L 161.8 23.5 L 173.3 26.4 L 184.5 30.8 L 195.4 36.7 L 205.7 43.8 L 215.5 52.3 L 224.6 61.9 L 233.1 72.7 L 240.8 84.5 L 247.6 97.2 L 253.6 110.8 L 258.7 125.0 L 262.8 139.8 L 266.0 155.0 L 268.2 170.6 L 269.5 186.3 L 269.7 202.1 L 269.0 217.9 L 267.4 233.4 L 264.8 248.7 L 261.3 263.5 L 256.9 277.7 L 251.8 291.3 L 245.9 304.1 L 239.2 316.1 L 232.0 327.1 L 224.2 337.1 L 215.8 345.9 L 207.1 353.6 L 198.0 360.1 L 188.6 365.3 L 179.0 369.2 L 169.4 371.8 L 159.7 373.1 L 150.0 373.0 L 140.5 371.6 L 131.1 369.0 L 122.1 365.1 L 113.4 359.9 L 105.1 353.6 L 97.3 346.2 L 90.0 337.8 L 83.4 328.4 L 77.3 318.2 L 71.9 307.2 L 67.3 295.5 L 63.3 283.2 L 60.1 270.4 L 57.7 257.3 L 56.1 243.9 L 55.3 230.3 L 55.2 216.8 L 56.0 203.3 L 57.4 189.9 L 59.6 176.9 L 62.5 164.3 L 66.1 152.1 L 70.2 140.5 L 75.0 129.6 L 80.3 119.5 L 86.1 110.2 L 92.3 101.8 L 98.9 94.3 L 105.7 87.9 L 112.9 82.4 L 120.2 78.1 L 127.6 74.9 L 135.1 72.8 L 142.6 71.8 L 150.0 72.0 L 157.3 73.3 L 164.4 75.6 L 171.2 79.0 L 177.8 83.5 L 184.0 88.9 L 189.9 95.2 L 195.3 102.4 L 200.2 110.4 L 204.6 119.1 L 208.5 128.4 L 211.9 138.3 L 214.7 148.7 L 216.9 159.4 L 218.5 170.4 L 219.5 181.7 L 219.9 193.0 L 219.8 204.4 L 219.1 215.6 L 217.8 226.7 L 216.0 237.5 L 213.7 248.0 L 211.0 258.1 L 207.7 267.6 L 204.1 276.6 L 200.1 284.9 L 195.8 292.5 L 191.3 299.4 L 186.4 305.5 L 181.4 310.7 L 176.3 315.0 L 171.0 318.5 L 165.7 321.0 L 160.4 322.6 L 155.2 323.3 L 150.0 323.0 L 145.0 321.8 L 140.1 319.8 L 135.4 316.9 L 131.0 313.1 L 126.8 308.6 L 123.0 303.3 L 119.4 297.4 L 116.3 290.8 L 113.4 283.6 L 111.0 276.0 L 109.0 267.9 L 107.4 259.5 L 106.1 250.8 L 105.3 241.8 L 104.9 232.8 L 104.8 223.6 L 105.2 214.5 L 105.9 205.5 L 107.0 196.7 L 108.4 188.0 L 110.1 179.7 L 112.0 171.8 L 114.3 164.2 L 116.7 157.2 L 119.4 150.7 L 122.2 144.7 L 125.2 139.4 L 128.3 134.8 L 131.4 130.8 L 134.6 127.5 L 137.8 124.9 L 140.9 123.1 L 144.0 122.0 L 147.1 121.6 L 150.0 122.0"}]
  },
  {kind:"trace", title:"Trace while you listen", stars:0,
    designs:[{name:"Puzzle",color:"#d39b12",ghost:"#f3e2ae",d:"M 34.5 93.5 L 53.5 93.5 Q 67.5 93.5 67.5 107.5 L 67.5 112.5 Q 67.5 126.5 53.5 126.5 L 48.5 126.5 Q 34.5 126.5 34.5 140.5 L 34.5 145.5 Q 34.5 159.5 34.5 173.5 L 34.5 178.5 Q 34.5 192.5 48.5 192.5 L 53.5 192.5 Q 67.5 192.5 67.5 178.5 L 67.5 173.5 Q 67.5 159.5 81.5 159.5 L 86.5 159.5 Q 100.5 159.5 100.5 173.5 L 100.5 178.5 Q 100.5 192.5 114.5 192.5 L 119.5 192.5 Q 133.5 192.5 133.5 178.5 L 133.5 173.5 Q 133.5 159.5 133.5 145.5 L 133.5 140.5 Q 133.5 126.5 119.5 126.5 L 114.5 126.5 Q 100.5 126.5 100.5 112.5 L 100.5 107.5 Q 100.5 93.5 114.5 93.5 L 119.5 93.5 Q 133.5 93.5 147.5 93.5 L 152.5 93.5 Q 166.5 93.5 166.5 107.5 L 166.5 112.5 Q 166.5 126.5 180.5 126.5 L 185.5 126.5 Q 199.5 126.5 199.5 112.5 L 199.5 107.5 Q 199.5 93.5 213.5 93.5 L 218.5 93.5 Q 232.5 93.5 246.5 93.5 L 251.5 93.5 Q 265.5 93.5 265.5 107.5 L 265.5 112.5 Q 265.5 126.5 251.5 126.5 L 246.5 126.5 Q 232.5 126.5 232.5 140.5 L 232.5 145.5 Q 232.5 159.5 246.5 159.5 L 251.5 159.5 Q 265.5 159.5 265.5 173.5 L 265.5 178.5 Q 265.5 192.5 251.5 192.5 L 246.5 192.5 Q 232.5 192.5 218.5 192.5 L 213.5 192.5 Q 199.5 192.5 199.5 178.5 L 199.5 173.5 Q 199.5 159.5 185.5 159.5 L 180.5 159.5 Q 166.5 159.5 166.5 173.5 L 166.5 178.5 Q 166.5 192.5 166.5 206.5 L 166.5 211.5 Q 166.5 225.5 166.5 239.5 L 166.5 244.5 Q 166.5 258.5 180.5 258.5 L 185.5 258.5 Q 199.5 258.5 199.5 244.5 L 199.5 239.5 Q 199.5 225.5 213.5 225.5 L 218.5 225.5 Q 232.5 225.5 246.5 225.5 L 251.5 225.5 Q 265.5 225.5 265.5 239.5 L 265.5 244.5 Q 265.5 258.5 251.5 258.5 L 246.5 258.5 Q 232.5 258.5 232.5 272.5 L 232.5 277.5 Q 232.5 291.5 246.5 291.5 L 251.5 291.5 Q 265.5 291.5 265.5 305.5 L 265.5 310.5 Q 265.5 324.5 251.5 324.5 L 246.5 324.5 Q 232.5 324.5 218.5 324.5 L 213.5 324.5 Q 199.5 324.5 199.5 310.5 L 199.5 305.5 Q 199.5 291.5 185.5 291.5 L 180.5 291.5 Q 166.5 291.5 166.5 305.5 L 166.5 310.5 Q 166.5 324.5 152.5 324.5 L 147.5 324.5 Q 133.5 324.5 119.5 324.5 L 114.5 324.5 Q 100.5 324.5 100.5 310.5 L 100.5 305.5 Q 100.5 291.5 114.5 291.5 L 119.5 291.5 Q 133.5 291.5 133.5 277.5 L 133.5 272.5 Q 133.5 258.5 133.5 244.5 L 133.5 239.5 Q 133.5 225.5 119.5 225.5 L 114.5 225.5 Q 100.5 225.5 100.5 239.5 L 100.5 244.5 Q 100.5 258.5 86.5 258.5 L 81.5 258.5 Q 67.5 258.5 67.5 244.5 L 67.5 239.5 Q 67.5 225.5 53.5 225.5 L 48.5 225.5 Q 34.5 225.5 34.5 239.5 L 34.5 244.5 Q 34.5 258.5 34.5 272.5 L 34.5 277.5 Q 34.5 291.5 48.5 291.5 L 53.5 291.5 Q 67.5 291.5 67.5 305.5 L 67.5 310.5 Q 67.5 324.5 53.5 324.5 L 34.5 324.5"},{name:"Coil",color:"#6f4b96",ghost:"#ddd0ee",d:"M 18.0 18.0 L 262.0 18.0 Q 282.0 18.0 282.0 38.0 L 282.0 380.0 Q 282.0 400.0 262.0 400.0 L 94.0 400.0 Q 74.0 400.0 74.0 380.0 L 74.0 94.0 Q 74.0 74.0 94.0 74.0 L 206.0 74.0 Q 226.0 74.0 226.0 94.0 L 226.0 324.0 Q 226.0 344.0 206.0 344.0 L 150.0 344.0 Q 130.0 344.0 130.0 324.0 L 130.0 130.0"},{name:"Snake",color:"#2a8aa0",ghost:"#c5e6ec",d:"M 26.0 18.0 L 26.0 378.0 Q 26.0 400.0 48.0 400.0 L 60.0 400.0 Q 82.0 400.0 82.0 378.0 L 82.0 40.0 Q 82.0 18.0 104.0 18.0 L 116.0 18.0 Q 138.0 18.0 138.0 40.0 L 138.0 378.0 Q 138.0 400.0 160.0 400.0 L 172.0 400.0 Q 194.0 400.0 194.0 378.0 L 194.0 40.0 Q 194.0 18.0 216.0 18.0 L 228.0 18.0 Q 250.0 18.0 250.0 40.0 L 250.0 400.0"},{name:"Spiral",color:"#2c7a55",ghost:"#c4ead4",d:"M 150.0 26.0 L 161.4 27.5 L 172.6 30.4 L 183.5 34.8 L 193.9 40.5 L 203.9 47.6 L 213.4 55.9 L 222.2 65.3 L 230.3 75.9 L 237.7 87.5 L 244.3 99.9 L 250.0 113.1 L 254.9 127.0 L 258.8 141.5 L 261.8 156.4 L 263.9 171.5 L 265.1 186.9 L 265.3 202.3 L 264.5 217.7 L 262.9 232.8 L 260.3 247.6 L 256.9 262.0 L 252.7 275.9 L 247.7 289.1 L 241.9 301.5 L 235.6 313.1 L 228.6 323.8 L 221.0 333.5 L 213.0 342.0 L 204.6 349.5 L 195.9 355.7 L 186.9 360.7 L 177.7 364.5 L 168.5 366.9 L 159.2 368.1 L 150.0 368.0 L 140.9 366.6 L 132.1 364.0 L 123.5 360.2 L 115.2 355.1 L 107.4 349.0 L 100.0 341.8 L 93.1 333.6 L 86.8 324.5 L 81.1 314.6 L 76.1 303.9 L 71.7 292.5 L 68.0 280.6 L 65.1 268.3 L 62.9 255.6 L 61.4 242.7 L 60.7 229.6 L 60.7 216.5 L 61.5 203.5 L 62.9 190.7 L 65.0 178.1 L 67.8 166.0 L 71.2 154.3 L 75.2 143.2 L 79.8 132.8 L 84.8 123.1 L 90.2 114.2 L 96.1 106.1 L 102.3 99.0 L 108.7 92.9 L 115.4 87.7 L 122.3 83.6 L 129.2 80.6 L 136.2 78.7 L 143.1 77.8 L 150.0 78.0 L 156.7 79.3 L 163.3 81.6 L 169.6 84.9 L 175.7 89.2 L 181.4 94.4 L 186.7 100.5 L 191.6 107.4 L 196.1 115.1 L 200.1 123.4 L 203.6 132.3 L 206.6 141.8 L 209.1 151.7 L 211.0 161.9 L 212.4 172.4 L 213.2 183.1 L 213.5 193.9 L 213.3 204.6 L 212.6 215.3 L 211.3 225.8 L 209.6 236.1 L 207.4 246.0 L 204.9 255.5 L 201.9 264.5 L 198.5 272.9 L 194.9 280.7 L 191.0 287.9 L 186.8 294.3 L 182.4 300.0 L 177.9 304.8 L 173.3 308.8 L 168.6 312.0 L 163.9 314.3 L 159.2 315.8 L 154.5 316.3 L 150.0 316.0 L 145.6 314.8 L 141.3 312.8 L 137.3 310.0 L 133.5 306.5 L 129.9 302.2 L 126.6 297.2 L 123.7 291.5 L 121.0 285.4 L 118.7 278.6 L 116.7 271.5 L 115.1 263.9 L 113.8 256.0 L 112.9 247.9 L 112.3 239.5 L 112.1 231.1 L 112.2 222.6 L 112.7 214.2 L 113.4 205.8 L 114.4 197.7 L 115.7 189.7 L 117.3 182.1 L 119.1 174.8 L 121.0 167.9 L 123.2 161.4 L 125.4 155.5 L 127.8 150.1 L 130.3 145.3 L 132.8 141.1 L 135.4 137.5 L 138.0 134.6 L 140.5 132.3 L 143.0 130.7 L 145.4 129.8 L 147.8 129.6 L 150.0 130.0"}]
  },
  {kind:"quiz", title:"A real government", done:"Jesus is the King of God’s Kingdom!",
    qs:[
      {q:"God’s Kingdom is…", opts:[{t:"A real government in heaven",a:true},{t:"Just a nice idea",a:false}]},
      {q:"Who is the King of God’s Kingdom?", opts:[{t:"Jesus",a:true},{t:"Pharaoh",a:false}]},
      {q:"Where is God’s Kingdom?", opts:[{t:"In heaven",a:true},{t:"On the moon",a:false}]}
    ]
  },
  null,
  {kind:"quiz", title:"Giving that praises Jehovah", done:"Even a little gift can bring praise to Jehovah!",
    qs:[
      {q:"Why did Israelites give for the temple?", opts:[{t:"To glorify Jehovah’s name",a:true},{t:"To buy a bigger house",a:false}]},
      {q:"How can we help Jehovah’s work today?", opts:[{t:"By giving what we can, from our heart",a:true},{t:"By keeping every coin forever",a:false}]},
      {q:"What can we see on jw.org?", opts:[{t:"Updates that show how our gifts are used",a:true},{t:"A list of our toys",a:false}]},
      {q:"While the video plays, what can you do?", opts:[{t:"Watch and think of one lesson",a:true},{t:"Play with my shoes",a:false}]}
    ]
  },
  {kind:"order", title:"Deborah went with Barak",
    done:"Jehovah won the battle for them.",
    feed:"Walk Courageously With God · chapter 16",
    steps:[
      "Sisera makes life very hard for Israel",
      "Deborah sends for Barak with Jehovah’s instructions",
      "Deborah says, “I will certainly go with you”",
      "They go down Mount Tabor, just as Jehovah said",
      "Jehovah sends a heavy rain, and the chariots get stuck",
      "Jehovah wins the battle for his people"
    ]
  },
  {kind:"search", title:"Word hunt while you listen",
    feed:"Slide across letters. Words from tonight’s meeting.",
    done:"You found them all. Jehovah helps people who are brave and obedient!",
    words:["ZEDEKIAH", "PROMISE", "COURAGE", "DEBORAH", "BARAK", "JEREMIAH", "KINGDOM", "DONATE", "BABYLON", "HONEST", "JEHOVAH", "CHARIOT", "TABOR", "SISERA", "TEMPLE", "FAITH", "FLEE", "RAIN"],
    grid:[
      ["C", "H", "A", "I", "M", "E", "R", "E", "J", "J", "A", "Z"],
      ["K", "H", "H", "A", "V", "O", "H", "E", "J", "F", "R", "L"],
      ["N", "A", "A", "M", "H", "A", "I", "K", "E", "D", "E", "Z"],
      ["G", "S", "R", "R", "T", "D", "H", "N", "W", "Y", "S", "H"],
      ["E", "C", "B", "A", "I", "M", "E", "T", "G", "F", "I", "O"],
      ["E", "S", "C", "A", "B", "O", "O", "B", "I", "W", "S", "N"],
      ["L", "T", "I", "O", "B", "I", "T", "D", "O", "A", "F", "E"],
      ["P", "S", "A", "M", "U", "Y", "O", "E", "G", "R", "F", "S"],
      ["M", "J", "K", "N", "O", "R", "L", "L", "U", "N", "A", "T"],
      ["E", "T", "A", "B", "O", "R", "A", "O", "P", "Y", "I", "H"],
      ["T", "F", "L", "E", "E", "D", "P", "G", "N", "F", "O", "K"],
      ["E", "R", "G", "K", "N", "I", "A", "R", "E", "W", "C", "B"]
    ]
  },
  {kind:"quiz", title:"Brave like Deborah and Barak", done:"You can be courageous and humble too!",
    qs:[
      {q:"Barak wanted Deborah to come. What can we learn?", opts:[{t:"It is wise to accept help from someone Jehovah is using",a:true},{t:"Never let anyone help you",a:false}]},
      {q:"Deborah needed courage to go with Barak. When might you need courage?", opts:[{t:"When I tell a classmate about Jehovah, even if I feel shy",a:true},{t:"Only when I am playing a game",a:false}]},
      {q:"The job on the plain looked too hard. What did Barak do?", opts:[{t:"He obeyed Jehovah anyway",a:true},{t:"He stayed on the mountain and hid",a:false}]},
      {q:"How can you be brave this week?", opts:[{t:"Do the right thing, even if it is hard",a:true},{t:"Give up as soon as I feel nervous",a:false}]}
    ]
  },
  {kind:"quiz", title:"What does this teach about Jehovah?", done:"Jehovah helps people who trust and obey him.",
    qs:[
      {q:"What does this account teach you about Jehovah?", opts:[{t:"He helps his people when they trust him and obey",a:true},{t:"He only helps people with chariots",a:false}]},
      {q:"Who made the rain fall and the chariots get stuck?", opts:[{t:"Jehovah",a:true},{t:"Sisera",a:false}]},
      {q:"What would you like to ask Deborah in the resurrection?", opts:[{t:"Were you scared on Mount Tabor?",a:true},{t:"Nothing — I know everything already",a:false}]}
    ]
  },
  null
];

/* WEEK PACK — buddy answers for this week’s material */
const BUDDY_FACTS = [
  {keys:["zedekiah","oath","promise"], ans:"Zedekiah did not stand up for what is right, and he broke a promise he made in Jehovah’s name. He lost his kingdom. We can keep our promises."},
  {keys:["babylon","flee","warning"], ans:"Jehovah told his people to leave Babylon because it was going to fall. Today we warn people to leave false religion and come to Jehovah."},
  {keys:["temple","jerusalem","reading"], ans:"In Jeremiah 52, Jerusalem ran out of food, the city was broken into, and the temple was torn down."},
  {keys:["bible study","direct"], ans:"The first ministry part is house to house. They kindly offer a Bible study right away — that is the direct approach."},
  {keys:["jesus","son","object"], ans:"If someone disagrees that Jesus is God’s Son, we stay kind and use the Bible to explain."},
  {keys:["kingdom","government","heaven"], ans:"God’s Kingdom is a real government in heaven, and Jesus is its King."},
  {keys:["donation","donate","giving","gift"], ans:"When we give to help Jehovah’s work, we bring praise to his beautiful name. Updates on jw.org show how the gifts are used."},
  {keys:["deborah","barak"], ans:"Deborah said to Barak: “I will certainly go with you.” Barak wanted Jehovah’s help, and Deborah was brave."},
  {keys:["sisera","chariot","rain","tabor"], ans:"Sisera had 900 chariots, but Jehovah sent a heavy rain. The chariots got stuck, and Jehovah won the battle."},
  {keys:["mother","palm"], ans:"Deborah sat under a palm tree and helped the people. The Bible calls her a mother in Israel."},
  {keys:["stars","fought"], ans:"When they sang that “the stars fought,” they meant Jehovah used the storm and the rain to win the battle."},
  {keys:["song 98","98","scriptures"], ans:"Song 98 is The Scriptures—Inspired of God."},
  {keys:["song 10","10","praise"], ans:"Song 10 is Praise Jehovah Our God!"},
  {keys:["song 150","150"], ans:"Song 150 is the closing song — Seek God for Your Deliverance."},
  {keys:["bored","tired","long"], ans:"Meetings can feel long. Try this: answer the Check, then play the little game. I’m staying with you."},
  {keys:["who are you","your name","buddy"], ans:"I’m Brutus. I know this week’s meeting."},
  {keys:["hello","hi","hey"], ans:"Hi. Look at the purple Check card if you want a hint."}
];
