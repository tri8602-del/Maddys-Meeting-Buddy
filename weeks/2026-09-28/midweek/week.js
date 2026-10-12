/* MIDWEEK week pack — loaded by index.html before the app engine (see README "Weekly update").
   Moved here verbatim from index.html. Image paths are relative to index.html (e.g. media/… or
   weeks/<week>/midweek/…). */

/* Song titles, lead sheets and lyrics used by this week's parts. */
const SONG_TITLES = {
  28: "Song 28 — Gaining Jehovah’s Friendship",
  56: "Song 56 — Make the Truth Your Own",
  74: "Song 74 — Join in the Kingdom Song!",
  90: "Song 90 — Encourage One Another",
  102: "Song 102 — Assist Those Who Are Weak",
  121: "Song 121 — We Need Self-Control",
  134: "Song 134 — Children Are a Trust From God",
  142: "Song 142 — Holding Fast to Our Hope",
  161: "Song 161 — To Do Your Will Is My Delight"
};
const SONG_SHEETS = {
  56: [
    "media/img-005.jpg",
    "media/img-006.jpg"
  ],
  90: [
    "media/img-007.jpg",
    "media/img-008.jpg"
  ],
  102: 'media/img-009.jpg',
  28: 'media/img-010.png',
  74: 'media/img-011.jpg',
  121: 'media/img-012.png',
  134: 'media/img-013.jpg',
  142: 'media/img-014.jpg',
  161: 'media/img-015.jpg'
};
const SONG_LYRICS = {
  90: `<p><em>Hebrews 10:24, 25</em></p><p><strong>1.</strong> As we encourage one another / To serve Jehovah faithfully, / We find the bonds of love are strengthened; / Fine works bring peace and unity.</p><p>The love we find among God’s people / Gives each the courage to endure. / Our congregation is a refuge, / A place where we can feel secure.</p><p><strong>2.</strong> A word when spoken at the right time / Is, oh, how comforting to hear! / We hear these words of consolation / From friends so faithful and so dear.</p><p>How good it is to work together / With those whose hopes and goals we share! / We seek to strengthen one another / And help each one his burden bear.</p><p><strong>3.</strong> As we with eyes of faith are seeing / The nearness of Jehovah’s day, / We need our gathering together / To keep us walking in the way.</p><p>United with Jehovah’s people, / We hope to serve eternally. / So we encourage one another / To hold to our integrity.</p>`,
  56: `<p><em>Closing song</em></p><p><strong>Song 56 — Make the Truth Your Own</strong></p><p>Sing along from the songbook if you have it open.</p>`
};


/* ============================================================
   WEEK PACK — edit this block when the meeting changes.
   Leave the app engine below "END WEEK PACK" alone.
   Required: id, heading, range, start [Y,M,D,h,m,s] (month 0-11),
   secretWord, secretChoices, secretHint, secretFoundBlurb,
   meetingParts[], PART_CHECKS[] (one per part), PART_GAMES[] (one per part).
   Songs: set part.song to a number that exists in SONG_SHEETS.
   ============================================================ */
const WEEK = {
  id: "2026-09-28",
  heading: "Jeremiah 38–39",
  range: "September 28–October 4, 2026",
  start: [2026, 8, 29, 19, 0, 0],
  secretKind: "name",
  secretWord: "Ebed-melech",
  secretChoices: ["Ebed-melech","Zedekiah","Pharaoh","Nebuchadnezzar"],
  secretHint: "Listen in Treasures for the man who spoke up for Jeremiah when he was in the cistern.",
  secretFoundBlurb: "Ebed-melech spoke up for Jeremiah and helped pull him out. Jehovah noticed that kindness.",
  prizeText: "Congratulations — you had a perfect meeting! Mommy and Daddy will take you to get one thing from Sheetz!"
};

const meetingParts = [
  {section:"Opening",title:"Song 102 and Opening Comments",minutes:1,kind:"normal",song:102,
    listen:"Stand ready for song 102, then listen to the opening comments.",
    buddy:"This meeting is Jeremiah 38 and 39. Listen for someone who spoke up for Jeremiah.",
    html:`<div class="material-block"><strong>Song 102 and Prayer</strong> — Assist Those Who Are Weak</div>
<div class="material-block">Opening Comments <em>(1 min.)</em></div>`},
  {section:"Treasures From God’s Word",title:"Continue Supporting One Another",minutes:10,kind:"answer",
    listen:"Listen for Ebed-melech — he spoke up for Jeremiah.",
    buddy:"We can speak up, comfort, and encourage, just like Ebed-melech and Jeremiah.",
    html:`<div class="material-block"><ul>
<li>Speak up for others as Ebed-melech did <strong>(Jer 38:7-9)</strong></li>
<li>Comfort others as Jeremiah did <strong>(Jer 39:15-18)</strong></li>
<li>Encourage others to obey Jehovah as Jeremiah did <strong>(Jer 38:20)</strong></li>
</ul></div>
<div class="ask-yourself"><strong>ASK YOURSELF:</strong> Whom in my congregation might I need to speak up for?</div>
<div class="source-pic"><img src="media/mwb-comfort.jpg" alt="A sister comforts a friend"><p>A sister comforts a friend who recently lost her mother.</p></div>`},
  {section:"Treasures From God’s Word",title:"Spiritual Gems",minutes:10,kind:"questions",
    listen:"Listen for King Zedekiah — what bad choice did he make?",
    buddy:"Family heads can learn from Zedekiah’s bad choice.",
    questions:["Jer 39:6, 7—What bad choice did King Zedekiah make, and what can family heads learn from his example?","What spiritual gems from this week’s Bible reading would you like to share?"],
    html:`<div class="material-block review-question"><p><strong>Jer 39:6, 7</strong> — What bad choice did King Zedekiah make, and what can family heads learn from his example?</p></div>
<div class="material-block"><p class="review-question">What spiritual gems from this week’s Bible reading would you like to share?</p></div>`},
  {section:"Treasures From God’s Word",title:"Bible Reading",minutes:4,kind:"answer",
    listen:"Follow Jeremiah 38:1-13. What happened to Jeremiah in the cistern?",
    buddy:"This reading is Jeremiah 38:1-13. Ebed-melech helps.",
    html:`<div class="material-block"><strong>Jeremiah 38:1-13</strong> <em>(th study 12)</em></div>
<div class="material-block">Officials put Jeremiah into a cistern. Ebed-melech spoke to the king and helped pull Jeremiah out.</div>`},
  {section:"Apply Yourself to the Field Ministry",title:"Starting a Conversation",minutes:3,kind:"answer",
    listen:"How do they kindly offer a Bible study to someone worried about extreme weather?",
    buddy:"Informal witnessing. Be kind. Offer a study.",
    html:`<div class="material-block"><strong>INFORMAL WITNESSING.</strong> Offer a Bible study to a person who is concerned about extreme weather. <em>(lmd lesson 9 point 3)</em></div>`},
  {section:"Apply Yourself to the Field Ministry",title:"Following Up",minutes:4,kind:"answer",
    listen:"How do they offer a Bible study to a parent?",
    buddy:"Informal witnessing with a parent. Warm and simple.",
    html:`<div class="material-block"><strong>INFORMAL WITNESSING.</strong> Offer a Bible study to a parent. <em>(lmd lesson 9 point 5)</em></div>`},
  {section:"Apply Yourself to the Field Ministry",title:"What Would You Say?",minutes:6,kind:"questions",
    listen:"Look at the picture. What question could you ask to start a conversation?",
    buddy:"A sister and a little boy at the door. What would you say?",
    questions:["Based on what you observe, what question could you ask to start a conversation?","Which Bible truth might you share?"],
    html:`<div class="source-pic"><img src="media/mwb-wwys.jpg" alt="Sister and boy at the door"></div><div class="material-block"><strong>HOUSE TO HOUSE · Discussion</strong> <em>(lmd lesson 1 point 4)</em></div>
<div class="review-list">
<div class="review-question"><strong>Based on what you observe, what question could you ask to start a conversation?</strong></div>
<div class="review-question"><strong>Which Bible truth might you share?</strong></div>
</div>`},
  {section:"Living as Christians",title:"Song 90 — Encourage One Another",minutes:0,kind:"song",song:90,
    listen:"Follow the words. This song is about encouraging one another.",
    buddy:"We can cheer each other on.",
    html:`<div class="material-block"><strong>Song 90</strong> — Encourage One Another</div>`},
  {section:"Living as Christians",title:"“Who Touched Me?”",minutes:15,kind:"questions",
    listen:"Watch the video. How can we let others help us, and how can we touch someone else’s life?",
    buddy:"Jesus noticed the woman who touched him. We can notice people too.",
    questions:["How can we allow others to have a positive impact on us?","How can we touch the lives of others?"],
    html:`<div class="material-block"><strong>VIDEO.</strong> Then talk about these questions:</div>
<div class="review-list">
<div class="review-question"><strong>How can we allow others to have a positive impact on us?</strong></div>
<div class="review-question"><strong>How can we touch the lives of others?</strong></div>
</div>`},
  {section:"Congregation Bible Study",title:"He Made His Choice — Moses",minutes:30,kind:"cbs",
    listen:"Listen for the choice Moses made when he grew up.",
    buddy:"Moses could have stayed rich in Egypt. He chose Jehovah’s people instead.",
    html:`<div class="cbs-reference"><strong>Walk Courageously With God, chapter 10</strong><br>Read: Exodus 2:11-22; Acts 7:22-29; Hebrews 11:24-26</div>
<div class="source-pic"><img src="media/wcg-moses.jpg" alt="Moses"></div>
<div class="story-text">
<p>Moses grew up in Pharaoh’s house. He was taught all the wisdom of Egypt. He could have chosen wealth and an easy life.</p>
<p>When he was 40, Moses made his choice. He refused to be called the son of Pharaoh’s daughter. He chose to be mistreated with Jehovah’s people.</p>
<p>He saw an Egyptian beating a Hebrew slave and killed the Egyptian. The next day two Hebrews were fighting. One asked if Moses planned to kill him too. Moses knew his secret was out, and Pharaoh wanted to kill him.</p>
<p>Moses fled to Midian. He still needed to grow in meekness. Jehovah was not finished with him.</p>
</div>
<div class="review-question"><strong>For discussion:</strong> In what ways did Moses show courage?</div>`},
  {section:"Congregation Bible Study",title:"Dig Deeper",minutes:0,kind:"cbs",
    listen:"Pick one review question and try to answer it.",
    buddy:"Look a little closer at Moses’ choice.",
    html:`<div class="review-list">
<div class="review-question"><strong>Why did Moses refuse to be called the son of Pharaoh’s daughter?</strong></div>
<div class="review-question"><strong>What happened when Moses tried to help in his own way?</strong></div>
<div class="review-question"><strong>Why did Moses flee to Midian?</strong></div>
</div>`},
  {section:"Congregation Bible Study",title:"Reflect on the Lessons",minutes:0,kind:"cbs",
    listen:"How can you copy Moses when a choice feels hard?",
    buddy:"The right choice is not always the easy one.",
    html:`<div class="review-list">
<div class="review-question"><strong>When might you have to choose Jehovah’s way instead of an easy way?</strong></div>
<div class="review-question"><strong>How can you speak up for someone who needs help?</strong></div>
</div>`},
  {section:"Congregation Bible Study",title:"Meditate on the Bigger Picture",minutes:0,kind:"cbs",
    listen:"What does this account teach you about Jehovah?",
    buddy:"Jehovah saw Moses’ heart. He also saw what Moses still needed to learn.",
    html:`<div class="review-list">
<div class="review-question"><strong>What does this account teach me about Jehovah?</strong></div>
<div class="review-question"><strong>How did Jehovah keep using Moses even after a hard start?</strong></div>
</div>`},
  {section:"Closing",title:"Concluding Comments",minutes:3,kind:"normal",song:56,
    listen:"Listen for the concluding comments, then sing song 56.",
    buddy:"You did it. Song 56 and a grateful heart.",
    html:`<div class="material-block"><strong>Concluding Comments</strong> <em>(3 min.)</em></div>
<div class="material-block"><strong>Song 56 and Prayer</strong> — Make the Truth Your Own</div>`}
];

/* WEEK PACK — listening checks, one per meetingParts index */
const PART_CHECKS = [
  {q:"What is the opening song tonight?", opts:["Song 102 — Assist Those Who Are Weak","Song 1","Song 150"], a:0, hint:"Look at the song button."},
  {q:"Who spoke up for Jeremiah?", opts:["Ebed-melech","Zedekiah","Goliath"], a:0, hint:"Listen in Treasures."},
  {q:"Which king made a bad choice in Jeremiah 39?", opts:["Zedekiah","David","Solomon"], a:0, hint:"Spiritual Gems."},
  {q:"Where did officials put Jeremiah?", opts:["In a cistern","On a throne","On a boat"], a:0, hint:"Bible reading, Jeremiah 38."},
  {q:"Tonight’s first ministry demo is about someone worried about…", opts:["Extreme weather","A lost shoe","A soccer game"], a:0, hint:"Informal witnessing."},
  {q:"The follow-up is a Bible study offer to…", opts:["A parent","A king","A lion"], a:0, hint:"Informal witnessing."},
  {q:"In What Would You Say?, first we think of…", opts:["A kind question","A joke","A long speech"], a:0, hint:"Look at the picture."},
  {q:"Song 90 is about…", opts:["Encouraging one another","Building a house","Going fishing"], a:0, hint:"Follow the title."},
  {q:"The video title is…", opts:["Who Touched Me?","Who Cooked Dinner?","Who Found the Sheep?"], a:0, hint:"Living as Christians."},
  {q:"When Moses grew up, what did he choose?", opts:["Jehovah’s people, not Egypt’s riches","To stay a prince forever","To hide in a tree"], a:0, hint:"Chapter 10."},
  {q:"After the secret got out, Moses…", opts:["Fled to Midian","Became Pharaoh","Went back to the palace"], a:0, hint:"Dig a little deeper."},
  {q:"Moses still needed to grow in…", opts:["Meekness","Height","Swimming"], a:0, hint:"Jehovah was not finished with him."},
  {q:"This account teaches us most of all about…", opts:["Jehovah","Pyramids","Chariots"], a:0, hint:"Who saw Moses’ heart?"},
  {q:"The closing song is…", opts:["Song 56 — Make the Truth Your Own","Song 1","Song 200"], a:0, hint:"Stay for the last song."}
];

const WHO_PORTRAITS = {
  ebed:"media/img-016.jpg",
  jeremiah:"media/img-017.jpg",
  zedekiah:"media/img-018.jpg"
};
/* WEEK PACK — little games, one per meetingParts index, different from the check */
const WISE_PORTRAITS = {
  wise:"media/img-019.jpg",
  unwise:"media/img-020.jpg"
};
const PART_GAMES = [
  null,
  {kind:"who", title:"Who is talking?",
    people:[
      {id:"ebed", name:"Ebed-melech"},
      {id:"jeremiah", name:"Jeremiah"},
      {id:"zedekiah", name:"Zedekiah"}
    ],
    prompts:[
      {q:"I spoke up when officials wanted Jeremiah left in the cistern.", a:"ebed"},
      {q:"I was thrown into a cistern and sank in the mud.", a:"jeremiah"},
      {q:"I comforted a friend and said Jehovah would keep him safe.", a:"jeremiah"},
      {q:"I encouraged people to obey Jehovah even when it was scary.", a:"jeremiah"},
      {q:"I was the king who made a bad choice that family heads can learn from.", a:"zedekiah"},
      {q:"I was king of Judah when Jerusalem fell.", a:"zedekiah"},
      {q:"I helped pull Jeremiah out of the cistern with ropes and old rags.", a:"ebed"},
      {q:"I was Jehovah’s prophet telling an unpopular truth.", a:"jeremiah"},
      {q:"I was the king who would not listen to Jehovah.", a:"zedekiah"},
      {q:"Jehovah noticed my kindness and protected me.", a:"ebed"}
    ]
  },
  {kind:"wise", title:"Wise or unwise?",
    prompts:[
      {q:"I listen to Jehovah even when I’m scared.", a:"wise"},
      {q:"I am king, so I do not have to listen.", a:"unwise"},
      {q:"I ask Jehovah’s prophet what I should do — and I do it.", a:"wise"},
      {q:"I hide from the warning and hope it goes away.", a:"unwise"},
      {q:"I lead my family by putting Jehovah first.", a:"wise"},
      {q:"I pick the easy side so people will like me.", a:"unwise"}
    ]
  },
  {kind:"order", title:"What happened first?",
    steps:[
      "Officials put Jeremiah in the cistern.",
      "Jeremiah sinks in the mud.",
      "Ebed-melech speaks to the king.",
      "They get old rags and ropes.",
      "They pull Jeremiah out."
    ]
  },
  {kind:"trace", title:"Trace while you listen", stars:0,
    designs:[{name:"Coil",color:"#6f4b96",ghost:"#ddd0ee",d:"M 18.0 18.0 L 262.0 18.0 Q 282.0 18.0 282.0 38.0 L 282.0 380.0 Q 282.0 400.0 262.0 400.0 L 90.0 400.0 Q 70.0 400.0 70.0 380.0 L 70.0 90.0 Q 70.0 70.0 90.0 70.0 L 210.0 70.0 Q 230.0 70.0 230.0 90.0 L 230.0 328.0 Q 230.0 348.0 210.0 348.0 L 142.0 348.0 Q 122.0 348.0 122.0 328.0 L 122.0 142.0 Q 122.0 122.0 142.0 122.0 L 158.0 122.0 Q 178.0 122.0 178.0 142.0 L 178.0 296.0"},{name:"Snake",color:"#2a8aa0",ghost:"#c5e6ec",d:"M 18.0 18.0 L 18.0 378.0 Q 18.0 400.0 40.0 400.0 L 48.0 400.0 Q 70.0 400.0 70.0 378.0 L 70.0 40.0 Q 70.0 18.0 92.0 18.0 L 100.0 18.0 Q 122.0 18.0 122.0 40.0 L 122.0 378.0 Q 122.0 400.0 144.0 400.0 L 152.0 400.0 Q 174.0 400.0 174.0 378.0 L 174.0 40.0 Q 174.0 18.0 196.0 18.0 L 204.0 18.0 Q 226.0 18.0 226.0 40.0 L 226.0 378.0 Q 226.0 400.0 248.0 400.0 L 256.0 400.0 Q 278.0 400.0 278.0 378.0 L 278.0 18.0"},{name:"Waves",color:"#c45b8c",ghost:"#f3c4d8",d:"M 18.0 18.0 L 260.0 18.0 Q 282.0 18.0 282.0 40.0 L 282.0 50.0 Q 282.0 72.0 260.0 72.0 L 40.0 72.0 Q 18.0 72.0 18.0 94.0 L 18.0 104.0 Q 18.0 126.0 40.0 126.0 L 260.0 126.0 Q 282.0 126.0 282.0 148.0 L 282.0 158.0 Q 282.0 180.0 260.0 180.0 L 40.0 180.0 Q 18.0 180.0 18.0 202.0 L 18.0 212.0 Q 18.0 234.0 40.0 234.0 L 260.0 234.0 Q 282.0 234.0 282.0 256.0 L 282.0 266.0 Q 282.0 288.0 260.0 288.0 L 40.0 288.0 Q 18.0 288.0 18.0 310.0 L 18.0 320.0 Q 18.0 342.0 40.0 342.0 L 260.0 342.0 Q 282.0 342.0 282.0 364.0 L 282.0 374.0 Q 282.0 396.0 260.0 396.0 L 18.0 396.0"},{name:"Spiral",color:"#d45b7a",ghost:"#f4c9d4",d:"M 150.0 22.0 L 161.8 23.5 L 173.3 26.4 L 184.5 30.8 L 195.4 36.7 L 205.7 43.8 L 215.5 52.3 L 224.6 61.9 L 233.1 72.7 L 240.8 84.5 L 247.6 97.2 L 253.6 110.8 L 258.7 125.0 L 262.8 139.8 L 266.0 155.0 L 268.2 170.6 L 269.5 186.3 L 269.7 202.1 L 269.0 217.9 L 267.4 233.4 L 264.8 248.7 L 261.3 263.5 L 256.9 277.7 L 251.8 291.3 L 245.9 304.1 L 239.2 316.1 L 232.0 327.1 L 224.2 337.1 L 215.8 345.9 L 207.1 353.6 L 198.0 360.1 L 188.6 365.3 L 179.0 369.2 L 169.4 371.8 L 159.7 373.1 L 150.0 373.0 L 140.5 371.6 L 131.1 369.0 L 122.1 365.1 L 113.4 359.9 L 105.1 353.6 L 97.3 346.2 L 90.0 337.8 L 83.4 328.4 L 77.3 318.2 L 71.9 307.2 L 67.3 295.5 L 63.3 283.2 L 60.1 270.4 L 57.7 257.3 L 56.1 243.9 L 55.3 230.3 L 55.2 216.8 L 56.0 203.3 L 57.4 189.9 L 59.6 176.9 L 62.5 164.3 L 66.1 152.1 L 70.2 140.5 L 75.0 129.6 L 80.3 119.5 L 86.1 110.2 L 92.3 101.8 L 98.9 94.3 L 105.7 87.9 L 112.9 82.4 L 120.2 78.1 L 127.6 74.9 L 135.1 72.8 L 142.6 71.8 L 150.0 72.0 L 157.3 73.3 L 164.4 75.6 L 171.2 79.0 L 177.8 83.5 L 184.0 88.9 L 189.9 95.2 L 195.3 102.4 L 200.2 110.4 L 204.6 119.1 L 208.5 128.4 L 211.9 138.3 L 214.7 148.7 L 216.9 159.4 L 218.5 170.4 L 219.5 181.7 L 219.9 193.0 L 219.8 204.4 L 219.1 215.6 L 217.8 226.7 L 216.0 237.5 L 213.7 248.0 L 211.0 258.1 L 207.7 267.6 L 204.1 276.6 L 200.1 284.9 L 195.8 292.5 L 191.3 299.4 L 186.4 305.5 L 181.4 310.7 L 176.3 315.0 L 171.0 318.5 L 165.7 321.0 L 160.4 322.6 L 155.2 323.3 L 150.0 323.0 L 145.0 321.8 L 140.1 319.8 L 135.4 316.9 L 131.0 313.1 L 126.8 308.6 L 123.0 303.3 L 119.4 297.4 L 116.3 290.8 L 113.4 283.6 L 111.0 276.0 L 109.0 267.9 L 107.4 259.5 L 106.1 250.8 L 105.3 241.8 L 104.9 232.8 L 104.8 223.6 L 105.2 214.5 L 105.9 205.5 L 107.0 196.7 L 108.4 188.0 L 110.1 179.7 L 112.0 171.8 L 114.3 164.2 L 116.7 157.2 L 119.4 150.7 L 122.2 144.7 L 125.2 139.4 L 128.3 134.8 L 131.4 130.8 L 134.6 127.5 L 137.8 124.9 L 140.9 123.1 L 144.0 122.0 L 147.1 121.6 L 150.0 122.0"}]
  },
  {kind:"trace", title:"Trace while you listen", stars:0,
    designs:[{name:"Puzzle",color:"#d39b12",ghost:"#f3e2ae",d:"M 34.5 93.5 L 53.5 93.5 Q 67.5 93.5 67.5 107.5 L 67.5 112.5 Q 67.5 126.5 53.5 126.5 L 48.5 126.5 Q 34.5 126.5 34.5 140.5 L 34.5 145.5 Q 34.5 159.5 34.5 173.5 L 34.5 178.5 Q 34.5 192.5 48.5 192.5 L 53.5 192.5 Q 67.5 192.5 67.5 178.5 L 67.5 173.5 Q 67.5 159.5 81.5 159.5 L 86.5 159.5 Q 100.5 159.5 100.5 173.5 L 100.5 178.5 Q 100.5 192.5 114.5 192.5 L 119.5 192.5 Q 133.5 192.5 133.5 178.5 L 133.5 173.5 Q 133.5 159.5 133.5 145.5 L 133.5 140.5 Q 133.5 126.5 119.5 126.5 L 114.5 126.5 Q 100.5 126.5 100.5 112.5 L 100.5 107.5 Q 100.5 93.5 114.5 93.5 L 119.5 93.5 Q 133.5 93.5 147.5 93.5 L 152.5 93.5 Q 166.5 93.5 166.5 107.5 L 166.5 112.5 Q 166.5 126.5 180.5 126.5 L 185.5 126.5 Q 199.5 126.5 199.5 112.5 L 199.5 107.5 Q 199.5 93.5 213.5 93.5 L 218.5 93.5 Q 232.5 93.5 246.5 93.5 L 251.5 93.5 Q 265.5 93.5 265.5 107.5 L 265.5 112.5 Q 265.5 126.5 251.5 126.5 L 246.5 126.5 Q 232.5 126.5 232.5 140.5 L 232.5 145.5 Q 232.5 159.5 246.5 159.5 L 251.5 159.5 Q 265.5 159.5 265.5 173.5 L 265.5 178.5 Q 265.5 192.5 251.5 192.5 L 246.5 192.5 Q 232.5 192.5 218.5 192.5 L 213.5 192.5 Q 199.5 192.5 199.5 178.5 L 199.5 173.5 Q 199.5 159.5 185.5 159.5 L 180.5 159.5 Q 166.5 159.5 166.5 173.5 L 166.5 178.5 Q 166.5 192.5 166.5 206.5 L 166.5 211.5 Q 166.5 225.5 166.5 239.5 L 166.5 244.5 Q 166.5 258.5 180.5 258.5 L 185.5 258.5 Q 199.5 258.5 199.5 244.5 L 199.5 239.5 Q 199.5 225.5 213.5 225.5 L 218.5 225.5 Q 232.5 225.5 246.5 225.5 L 251.5 225.5 Q 265.5 225.5 265.5 239.5 L 265.5 244.5 Q 265.5 258.5 251.5 258.5 L 246.5 258.5 Q 232.5 258.5 232.5 272.5 L 232.5 277.5 Q 232.5 291.5 246.5 291.5 L 251.5 291.5 Q 265.5 291.5 265.5 305.5 L 265.5 310.5 Q 265.5 324.5 251.5 324.5 L 246.5 324.5 Q 232.5 324.5 218.5 324.5 L 213.5 324.5 Q 199.5 324.5 199.5 310.5 L 199.5 305.5 Q 199.5 291.5 185.5 291.5 L 180.5 291.5 Q 166.5 291.5 166.5 305.5 L 166.5 310.5 Q 166.5 324.5 152.5 324.5 L 147.5 324.5 Q 133.5 324.5 119.5 324.5 L 114.5 324.5 Q 100.5 324.5 100.5 310.5 L 100.5 305.5 Q 100.5 291.5 114.5 291.5 L 119.5 291.5 Q 133.5 291.5 133.5 277.5 L 133.5 272.5 Q 133.5 258.5 133.5 244.5 L 133.5 239.5 Q 133.5 225.5 119.5 225.5 L 114.5 225.5 Q 100.5 225.5 100.5 239.5 L 100.5 244.5 Q 100.5 258.5 86.5 258.5 L 81.5 258.5 Q 67.5 258.5 67.5 244.5 L 67.5 239.5 Q 67.5 225.5 53.5 225.5 L 48.5 225.5 Q 34.5 225.5 34.5 239.5 L 34.5 244.5 Q 34.5 258.5 34.5 272.5 L 34.5 277.5 Q 34.5 291.5 48.5 291.5 L 53.5 291.5 Q 67.5 291.5 67.5 305.5 L 67.5 310.5 Q 67.5 324.5 53.5 324.5 L 34.5 324.5"},{name:"Coil",color:"#6f4b96",ghost:"#ddd0ee",d:"M 18.0 18.0 L 262.0 18.0 Q 282.0 18.0 282.0 38.0 L 282.0 380.0 Q 282.0 400.0 262.0 400.0 L 94.0 400.0 Q 74.0 400.0 74.0 380.0 L 74.0 94.0 Q 74.0 74.0 94.0 74.0 L 206.0 74.0 Q 226.0 74.0 226.0 94.0 L 226.0 324.0 Q 226.0 344.0 206.0 344.0 L 150.0 344.0 Q 130.0 344.0 130.0 324.0 L 130.0 130.0"},{name:"Snake",color:"#2a8aa0",ghost:"#c5e6ec",d:"M 26.0 18.0 L 26.0 378.0 Q 26.0 400.0 48.0 400.0 L 60.0 400.0 Q 82.0 400.0 82.0 378.0 L 82.0 40.0 Q 82.0 18.0 104.0 18.0 L 116.0 18.0 Q 138.0 18.0 138.0 40.0 L 138.0 378.0 Q 138.0 400.0 160.0 400.0 L 172.0 400.0 Q 194.0 400.0 194.0 378.0 L 194.0 40.0 Q 194.0 18.0 216.0 18.0 L 228.0 18.0 Q 250.0 18.0 250.0 40.0 L 250.0 400.0"},{name:"Spiral",color:"#2c7a55",ghost:"#c4ead4",d:"M 150.0 26.0 L 161.4 27.5 L 172.6 30.4 L 183.5 34.8 L 193.9 40.5 L 203.9 47.6 L 213.4 55.9 L 222.2 65.3 L 230.3 75.9 L 237.7 87.5 L 244.3 99.9 L 250.0 113.1 L 254.9 127.0 L 258.8 141.5 L 261.8 156.4 L 263.9 171.5 L 265.1 186.9 L 265.3 202.3 L 264.5 217.7 L 262.9 232.8 L 260.3 247.6 L 256.9 262.0 L 252.7 275.9 L 247.7 289.1 L 241.9 301.5 L 235.6 313.1 L 228.6 323.8 L 221.0 333.5 L 213.0 342.0 L 204.6 349.5 L 195.9 355.7 L 186.9 360.7 L 177.7 364.5 L 168.5 366.9 L 159.2 368.1 L 150.0 368.0 L 140.9 366.6 L 132.1 364.0 L 123.5 360.2 L 115.2 355.1 L 107.4 349.0 L 100.0 341.8 L 93.1 333.6 L 86.8 324.5 L 81.1 314.6 L 76.1 303.9 L 71.7 292.5 L 68.0 280.6 L 65.1 268.3 L 62.9 255.6 L 61.4 242.7 L 60.7 229.6 L 60.7 216.5 L 61.5 203.5 L 62.9 190.7 L 65.0 178.1 L 67.8 166.0 L 71.2 154.3 L 75.2 143.2 L 79.8 132.8 L 84.8 123.1 L 90.2 114.2 L 96.1 106.1 L 102.3 99.0 L 108.7 92.9 L 115.4 87.7 L 122.3 83.6 L 129.2 80.6 L 136.2 78.7 L 143.1 77.8 L 150.0 78.0 L 156.7 79.3 L 163.3 81.6 L 169.6 84.9 L 175.7 89.2 L 181.4 94.4 L 186.7 100.5 L 191.6 107.4 L 196.1 115.1 L 200.1 123.4 L 203.6 132.3 L 206.6 141.8 L 209.1 151.7 L 211.0 161.9 L 212.4 172.4 L 213.2 183.1 L 213.5 193.9 L 213.3 204.6 L 212.6 215.3 L 211.3 225.8 L 209.6 236.1 L 207.4 246.0 L 204.9 255.5 L 201.9 264.5 L 198.5 272.9 L 194.9 280.7 L 191.0 287.9 L 186.8 294.3 L 182.4 300.0 L 177.9 304.8 L 173.3 308.8 L 168.6 312.0 L 163.9 314.3 L 159.2 315.8 L 154.5 316.3 L 150.0 316.0 L 145.6 314.8 L 141.3 312.8 L 137.3 310.0 L 133.5 306.5 L 129.9 302.2 L 126.6 297.2 L 123.7 291.5 L 121.0 285.4 L 118.7 278.6 L 116.7 271.5 L 115.1 263.9 L 113.8 256.0 L 112.9 247.9 L 112.3 239.5 L 112.1 231.1 L 112.2 222.6 L 112.7 214.2 L 113.4 205.8 L 114.4 197.7 L 115.7 189.7 L 117.3 182.1 L 119.1 174.8 L 121.0 167.9 L 123.2 161.4 L 125.4 155.5 L 127.8 150.1 L 130.3 145.3 L 132.8 141.1 L 135.4 137.5 L 138.0 134.6 L 140.5 132.3 L 143.0 130.7 L 145.4 129.8 L 147.8 129.6 L 150.0 130.0"}]
  },
  {kind:"scene", title:"What would you say?",
    img:"media/img-021.jpg",
    spots:[
      {id:"window", label:"the window", hint:"It looks broken.", x:0,y:6,w:22,h:42,
        q:"You noticed the window. What could you say?",
        options:[
          {t:"Did something happen to your window? Is everyone okay?", a:true},
          {t:"Your house looks messy.", a:false}
        ]},
      {id:"plant", label:"the plant", hint:"There is a plant by the door.", x:0,y:52,w:28,h:46,
        q:"You noticed the plant. What could you say?",
        options:[
          {t:"Your plant is pretty. Do you like growing things?", a:true},
          {t:"That plant is in the way.", a:false}
        ]},
      {id:"mom", label:"the sister", hint:"She has her arm around the boy.", x:46,y:5,w:24,h:48,
        q:"You noticed she is holding the boy close. What could you say?",
        options:[
          {t:"You look like you take good care of him. How is your family?", a:true},
          {t:"Why do you look so worried?", a:false}
        ]},
      {id:"boy", label:"the boy", hint:"He looks worried.", x:60,y:50,w:26,h:48,
        q:"You noticed the boy. What could you say?",
        options:[
          {t:"Hi. I like your shirt. How are you today?", a:true},
          {t:"Why is he staring like that?", a:false}
        ]},
      {id:"door", label:"the door", hint:"They are standing in the doorway.", x:84,y:6,w:15,h:44,
        q:"You noticed they came to the door together. What could you say?",
        options:[
          {t:"Thanks for coming to the door. Is this an okay time for a short visit?", a:true},
          {t:"Move so I can come in.", a:false}
        ]}
    ]
  },
  null,
  {kind:"search", title:"Who touched me?",
    words:["JESUS", "WOMAN", "TOUCHED", "FAITH", "CROWD", "NOTICE", "KIND", "PEACE", "HELP", "LOVE", "DAUGHTER", "ROBE", "HEALED", "POWER", "HEART", "GENTLE", "OTHERS", "LIVES", "TRUST", "HOPE"],
    grid:[["J", "G", "T", "S", "U", "R", "T", "K", "I", "N", "D", "V"], ["E", "R", "E", "T", "N", "O", "T", "I", "C", "E", "C", "F"], ["S", "E", "P", "N", "O", "L", "I", "V", "E", "S", "S", "P"], ["U", "T", "O", "D", "T", "U", "P", "V", "N", "F", "D", "B"], ["S", "H", "H", "S", "G", "L", "C", "G", "P", "L", "E", "H"], ["F", "G", "E", "V", "O", "L", "E", "H", "L", "I", "L", "O"], ["L", "U", "H", "E", "F", "R", "R", "H", "E", "T", "A", "T"], ["R", "A", "N", "E", "C", "A", "E", "P", "R", "D", "E", "H"], ["O", "D", "A", "O", "V", "M", "I", "A", "O", "A", "H", "E"], ["B", "T", "M", "L", "A", "U", "E", "T", "U", "W", "M", "R"], ["E", "I", "O", "B", "S", "H", "G", "E", "H", "F", "E", "S"], ["C", "D", "W", "O", "R", "C", "R", "T", "T", "S", "G", "R"]]
  },
  {kind:"order", title:"Moses made a choice",
    done:"He chose Jehovah’s people.",
    feed:"Walk Courageously With God · chapter 10",
    steps:[{t:"Grew up in Pharaoh’s house",img:"media/img-022.jpg"},
{t:"Could have stayed rich",img:"media/img-023.jpg"},
{t:"Chose Jehovah’s people",img:"media/img-024.jpg"},
{t:"Saw a Hebrew being hurt",img:"media/img-025.jpg"},
{t:"Ran away to Midian",img:"media/img-026.jpg"},
{t:"Jehovah was not finished",img:"media/img-027.jpg"}
]
  },
  {kind:"quiz", title:"Look closer",
    qs:[
      {q:"Why did Moses refuse to be called the son of Pharaoh’s daughter?",
       opts:[{t:"He wanted to be with Jehovah’s people, not just stay rich.",a:true},{t:"He did not like the food in the palace.",a:false}]},
      {q:"What happened when Moses tried to help in his own way?",
       opts:[{t:"It did not go well. He had to leave Egypt.",a:true},{t:"Pharaoh made him king that same day.",a:false}]},
      {q:"Why did Moses flee to Midian?",
       opts:[{t:"Pharaoh wanted to hurt him after the secret came out.",a:true},{t:"He wanted to look for gold in the desert.",a:false}]}
    ]
  },
  {kind:"quiz", title:"Easy way or Jehovah's way?",
    qs:[
      {q:"Friends want you to skip the meeting for a movie night. What is Jehovah's way?",
       opts:[{t:"Go to the meeting. You can see friends another time.",a:true},{t:"Skip. The movie sounds easier.",a:false}]},
      {q:"Someone is sitting alone and looks left out. What is Jehovah's way?",
       opts:[{t:"Sit with them or ask them to play.",a:true},{t:"Pretend you did not see. That is easier.",a:false}]},
      {q:"A kid is being picked on. What is Jehovah's way?",
       opts:[{t:"Tell a grown-up and be kind to the kid.",a:true},{t:"Laugh along so nobody picks on you.",a:false}]},
      {q:"You could copy a friend's homework and be done fast. What is Jehovah's way?",
       opts:[{t:"Do your own work, even if it takes longer.",a:true},{t:"Copy it. Nobody will know.",a:false}]}
    ]
  },
  {kind:"quiz", title:"What does this teach about Jehovah?",
    qs:[
      {q:"What does this account teach you about Jehovah?",
       opts:[{t:"He saw Moses’ heart — not just the palace clothes.",a:true},{t:"He only loves people who never make mistakes.",a:false}]},
      {q:"How did Jehovah keep using Moses after a hard start?",
       opts:[{t:"He still had work for Moses to do. Midian was not the end.",a:true},{t:"He sent Moses away forever and picked someone else.",a:false}]},
      {q:"What else is true about Jehovah in this story?",
       opts:[{t:"He is patient. He helps us grow.",a:true},{t:"He only uses people who stay rich.",a:false}]}
    ]
  },
  null
];

/* WEEK PACK — buddy answers for this week’s material */
const BUDDY_FACTS = [
  {keys:["ebed","spoke up","cistern","well"], ans:"Ebed-melech spoke up for Jeremiah when others wanted him left in the cistern. Then he helped pull Jeremiah out. Jehovah noticed."},
  {keys:["zedekiah","king","39"], ans:"King Zedekiah made a bad choice. He would not really listen to Jehovah. Family heads can learn to listen and lead their family the right way."},
  {keys:["comfort","support","encourage"], ans:"We support one another three ways in this part: speak up, comfort, and encourage."},
  {keys:["weather","storm"], ans:"If someone is worried about extreme weather, be kind first. Then you can offer a Bible study and real hope."},
  {keys:["parent","mom","dad"], ans:"The follow-up is offering a Bible study to a parent. Parents care a lot about their children."},
  {keys:["touched","video","jesus"], ans:"The video is “Who Touched Me?” Jesus noticed one person in a crowd. We can notice people too."},
  {keys:["moses","choice","egypt","midian"], ans:"Moses grew up in Pharaoh’s house. He chose Jehovah’s people instead of Egypt’s riches. After a mistake he fled to Midian. Jehovah was not done with him."},
  {keys:["meek","meekness"], ans:"Moses was brave, but he still needed meekness. Jehovah helps us grow."},
  {keys:["song 102","102"], ans:"Song 102 is Assist Those Who Are Weak. That fits a week about supporting one another."},
  {keys:["song 90","90"], ans:"Song 90 is Encourage One Another."},
  {keys:["song 56","56"], ans:"Song 56 is the closing song — Make the Truth Your Own."},
  {keys:["bored","tired","long"], ans:"Meetings can feel long. Try this: answer the Check, then play the little game. I’m staying with you."},
  {keys:["who are you","your name","buddy"], ans:"I’m Brutus. I know this week’s meeting."},
  {keys:["hello","hi","hey"], ans:"Hi. Look at the purple Check card if you want a hint."}
];
