/* MIDWEEK week pack — loaded by index.html before the app engine (see README "Weekly update").
   Week of November 16–22, 2026 · Lamentations 1–2. Source: Life and Ministry Meeting Workbook,
   November–December 2026 (wol.jw.org / jw.org), and Walk Courageously With God (wcg) chapter 17.
   Image paths are relative to index.html. */

/* Song titles and lead sheets used by this week's parts (pages from songs/, the "Sing Out Joyfully" book). */
const SONG_TITLES = {
  28: "Song 28 — Gaining Jehovah’s Friendship",
  90: "Song 90 — Encourage One Another",
  75: "Song 75 — “Here I Am! Send Me!”"
};
const SONG_SHEETS = {
  28: "songs/028-1.png",
  90: ["songs/090-1.png", "songs/090-2.png"],
  75: ["songs/075-1.png", "songs/075-2.png"]
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
  id: "2026-11-16",
  heading: "Lamentations 1–2",
  range: "November 16–22, 2026",
  start: [2026, 10, 17, 19, 0, 0],
  secretKind: "word",
  secretWord: "Courage",
  secretChoices: ["Courage","Chariot","Scroll","Tent"],
  secretHint: "Listen in the Congregation Bible Study. Jael showed this when she chose to help Jehovah’s people.",
  secretFoundBlurb: "Jael showed courage when she chose to help Jehovah’s people. We can be courageous too!",
  prizeText: "Congratulations — you had a perfect meeting! Mommy and Daddy will take you to get one thing from Sheetz!"
};

const meetingParts = [
  {section:"Opening",title:"Song 28 and Opening Comments",minutes:1,kind:"normal",song:28,
    listen:"Stand ready for song 28, then listen to the opening comments.",
    buddy:"This meeting is Lamentations 1 and 2. Listen for Jeremiah’s prayers, and for Jael’s courage.",
    html:`<div class="material-block"><strong>Song 28 and Prayer</strong> — Gaining Jehovah’s Friendship</div>
<div class="material-block">Opening Comments <em>(1 min.)</em></div>`},
  {section:"Treasures From God’s Word",title:"An Understandable Response to a Terrible Loss",minutes:10,kind:"answer",
    listen:"Watch the video Introduction to Lamentations. How did Jeremiah feel, and what did he hope the people would do?",
    buddy:"Jeremiah was very sad because people he loved stopped serving Jehovah and got hurt. He hoped they would pray to Jehovah and come back. If someone we love makes a bad choice, we can still pray, and we do not have to blame ourselves.",
    html:`<div class="material-block">Play the VIDEO <em>Introduction to Lamentations</em>.</div>
<div class="material-block"><ul>
<li>Jeremiah felt brokenhearted when those he loved suffered the consequences of no longer serving Jehovah <strong>(La 2:11)</strong></li>
<li>Jeremiah hoped that they would come to their senses, approach Jehovah in humble prayer, and repent <strong>(La 2:19; w24.08 28 ¶7-9)</strong></li>
</ul></div>
<div class="material-block"><p><strong>FOR MEDITATION:</strong> What can help us if we blame ourselves for the poor decisions that others make? <strong>(w23.08 29-30 ¶12-13)</strong></p></div>
<div class="source-pic"><img src="weeks/2026-11-16/midweek/mwb-lament.jpg" alt="Jeremiah writes the book of Lamentations, with tears in his eyes"><p>Jeremiah was heartbroken, and he wrote his feelings down. He still hoped the people would pray and come back to Jehovah.</p></div>`},
  {section:"Treasures From God’s Word",title:"Spiritual Gems",minutes:10,kind:"questions",
    listen:"Listen for how the beauty of Israel was thrown down from heaven to earth.",
    buddy:"Israel used to be strong and beautiful because Jehovah blessed them. When they stopped listening, that blessing was taken away — like something precious coming down from a high place.",
    questions:["La 2:1—How was the beauty of Israel thrown down from heaven to earth?","What spiritual gems from this week’s Bible reading would you like to share?"],
    html:`<div class="material-block review-question"><p><strong>La 2:1</strong> — How was the beauty of Israel thrown down from heaven to earth?</p></div>
<div class="material-block"><p class="review-question">What spiritual gems from this week’s Bible reading would you like to share?</p></div>`},
  {section:"Treasures From God’s Word",title:"Bible Reading",minutes:4,kind:"answer",
    listen:"Follow Lamentations 1:8-18. How did Jerusalem feel?",
    buddy:"This reading is Lamentations 1:8-18. Jerusalem was very sad. The people were hurting, and there was no one to comfort them. Jeremiah wrote down how heavy their hearts felt.",
    html:`<div class="material-block"><strong>Lamentations 1:8-18</strong> <em>(th study 10)</em></div>
<div class="material-block">Jerusalem was very sad. The city was hurting, and there was no one to comfort the people. Jeremiah wrote down how heavy their hearts felt.</div>`},
  {section:"Apply Yourself to the Field Ministry",title:"Starting a Conversation",minutes:3,kind:"answer",
    listen:"How does the conversation start? What happens before a witness can be given?",
    buddy:"Informal witnessing. They start a friendly conversation, but it ends before they can share the good news. That’s okay — they were kind, and they can try again later.",
    html:`<div class="material-block"><strong>INFORMAL WITNESSING.</strong> Initiate a friendly conversation that ends before you can give a witness. <em>(lmd lesson 2 point 4)</em></div>`},
  {section:"Apply Yourself to the Field Ministry",title:"Following Up",minutes:4,kind:"answer",
    listen:"What video do they show, and what do they offer?",
    buddy:"Public witnessing. They show a video from the Teaching Toolbox, then kindly offer a Bible study.",
    html:`<div class="material-block"><strong>PUBLIC WITNESSING.</strong> Feature a video from the Teaching Toolbox, and offer a Bible study. <em>(lmd lesson 9 point 4)</em></div>`},
  {section:"Apply Yourself to the Field Ministry",title:"What Would You Say?",minutes:5,kind:"answer",
    listen:"Look at the picture of the doors. What question could you ask? What Bible truth could you share?",
    buddy:"House to house. One door is decorated for a holiday. A kind question about what you see can start a conversation. Then you can share a Bible truth.",
    html:`<div class="material-block"><strong>HOUSE TO HOUSE.</strong> Briefly review lmd lesson 1 point 4b. Refer to the picture, then ask the audience:</div>
<div class="review-list">
<div class="review-question"><strong>Based on what you observe, what question could you ask to start a conversation?</strong></div>
<div class="review-question"><strong>Which Bible truth might you share?</strong></div>
</div>
<div class="source-pic"><img src="weeks/2026-11-16/midweek/mwb-door.jpg" alt="An apartment hallway with three doors; the middle door is decorated for a holiday, with a wreath, lights, and gifts"><p>Look at the doors. One looks ready for a holiday. What kind question could you ask? What Bible truth could you share?</p></div>`},
  {section:"Living as Christians",title:"Song 90 — Encourage One Another",minutes:0,kind:"song",song:90,
    listen:"Follow the words. This song is about encouraging one another.",
    buddy:"We can cheer each other on!",
    html:`<div class="material-block"><strong>Song 90</strong> — Encourage One Another</div>`},
  {section:"Living as Christians",title:"Do Not Forget Our Inactive Brothers and Sisters",minutes:15,kind:"questions",
    listen:"Watch the video Encourage the Inactive Ones. How can we be a friend to someone who has stopped coming?",
    buddy:"We look for new people to learn about Jehovah, and we also remember our friends who have stopped coming. They may still love Jehovah. We can be kind, listen, and encourage them.",
    questions:["What lessons did you learn from this video?"],
    html:`<div class="material-block">We spend much time and effort searching for people who want to learn about Jehovah and serve him. However, we cannot forget those “related to us in the faith” who have become inactive. <strong>(Ga 6:10)</strong></div>
<div class="material-block">Our brothers and sisters become inactive for various reasons. Some become absorbed in secular work or are overwhelmed by life’s problems or suffer from depression and other health difficulties. Still others are troubled by a guilty conscience, have been stumbled, or have had their feelings hurt. Many who are inactive still love Jehovah but may feel unworthy of resuming their worship. The elders are keenly interested in assisting these ones and take the lead in helping them return to Jehovah. <strong>(1Pe 5:2)</strong> However, how might you be of assistance to an inactive brother or sister?</div>
<div class="material-block">Play the VIDEO DRAMATIZATION <em>Encourage the Inactive Ones</em>. Then ask the audience:</div>
<div class="review-list">
<div class="review-question"><strong>What lessons did you learn from this video?</strong></div>
</div>
<div class="source-pic"><img src="weeks/2026-11-16/midweek/mwb-encourage.jpg" alt="A sister listens kindly while her friend talks"><p>A kind friend listens. We do not forget our brothers and sisters who have stopped coming.</p></div>`},
  {section:"Congregation Bible Study",title:"“Most Blessed of Women” — Jael",minutes:30,kind:"cbs",
    listen:"Listen for how Jael showed courage when she chose to help Jehovah’s people.",
    buddy:"Jael was brave. She chose to help Jehovah’s people, like Rahab did. Deborah and Barak sang that she was “most blessed of women.”",
    html:`<div class="cbs-reference"><strong>Walk Courageously With God, chapter 17</strong><br>Read: Judges 4:9, 11, 17-22; 5:24-31</div>
<div class="source-pic"><img src="weeks/2026-11-16/midweek/wcg-jael.jpg" alt="Jael stands at the door of her tent as Sisera walks toward the camp"><p>Jael saw a dangerous enemy coming. She had to think fast, and she chose to help Jehovah’s people.</p></div>
<div class="story-text">
<p>Sisera was a dangerous enemy. His army had been beaten, and he ran to hide. He went toward the tents of Heber the Kenite. Heber was friends with Sisera’s king, so Sisera thought he would be safe there.</p>
<p>Jael was at the camp. Her husband was away. When she saw Sisera coming, she had to think fast. She knew who he was, and she knew he had hurt Jehovah’s people.</p>
<p>Jael chose to help Jehovah, like Rahab had done. She was brave. She invited Sisera in, gave him a drink, and let him rest.</p>
<p>Jehovah used Jael’s courage to stop the dangerous enemy. When Barak came looking, Jael went out to meet him and showed him that the enemy could not hurt them anymore.</p>
<p>Deborah and Barak sang a happy song. They said: “Most blessed of women is Jael.” Today we do not fight with weapons. We need Jael’s courage when we stand up for what is right and when we tell others about Jehovah.</p>
</div>
<div class="review-question"><strong>For discussion:</strong> In what ways did Jael show courage?</div>`},
  {section:"Congregation Bible Study",title:"Dig Deeper",minutes:0,kind:"cbs",
    listen:"Pick one Dig Deeper question and try to answer it.",
    buddy:"Deborah and Barak sang that Jael was “most blessed of women.” Jael’s family, the Kenites, had been close to Israel since the days of Moses.",
    html:`<div class="review-list">
<div class="review-question"><strong>What connection is there between the battle fought by Sisera and the battle of Armageddon? (w19.09 8-9 ¶3-6)</strong></div>
<div class="review-question"><strong>Jael’s husband, Heber, allied himself with Israel’s enemies the Canaanites. But how was Heber related to the Israelites? (it “Heber” No. 2)</strong></div>
<div class="review-question"><strong>How did Israel’s victory over Sisera and Jabin strengthen the faith of God’s people many years later? (w08 10/15 14-15 ¶12-15)</strong></div>
<div class="source-pic"><img src="weeks/2026-11-16/midweek/wcg-song.jpg" alt="Deborah and Barak sing a victory song while the people clap and play tambourines"><p>Deborah and Barak sang that Jael was “most blessed of women.”</p></div>
<div class="review-question"><strong>What is noteworthy about the way Deborah praised Jael? (w15 8/1 15 ¶3)</strong></div>
</div>`},
  {section:"Congregation Bible Study",title:"Reflect on the Lessons",minutes:0,kind:"cbs",
    listen:"Jael did what she could. How can we be courageous too?",
    buddy:"Jael was not a prophetess like Deborah, and she was not a soldier like Barak. She still did what she could. We can be brave with the gifts Jehovah has given us.",
    html:`<div class="review-list">
<div class="review-question"><strong>As Jael needed courage, when might a sister with an unbelieving husband need courage?</strong></div>
<div class="review-question"><strong>Jael was not a prophetess like Deborah, nor was she a soldier like Barak. Still, she did what she could. What do we learn from her about how to view any limitations we might have?</strong></div>
<div class="source-pic"><img src="weeks/2026-11-16/midweek/wcg-card.jpg" alt="An older sister writes a kind card, and a couple smiles as they read it"><p>Jael did what she could. We can do what we can too — even a kind card can encourage someone.</p></div>
<div class="review-question"><strong>In what other ways might you imitate Jael’s courage?</strong></div>
</div>`},
  {section:"Congregation Bible Study",title:"Meditate on the Bigger Picture",minutes:0,kind:"cbs",
    listen:"What does the story of Jael teach you about Jehovah?",
    buddy:"Jehovah can use someone who is willing and brave, even if they are not famous. He helped his people, and he can help us too.",
    html:`<div class="review-list">
<div class="review-question"><strong>What does this account teach me about Jehovah?</strong></div>
<div class="review-question"><strong>How does the account tie in with Jehovah’s purposes?</strong></div>
<div class="review-question"><strong>What would I like to ask Jael in the resurrection?</strong></div>
</div>`},
  {section:"Closing",title:"Concluding Comments",minutes:3,kind:"normal",song:75,
    listen:"Listen for the concluding comments, then sing song 75.",
    buddy:"You did it. Song 75 — “Here I Am! Send Me!”",
    html:`<div class="material-block"><strong>Concluding Comments</strong> <em>(3 min.)</em></div>
<div class="material-block"><strong>Song 75 and Prayer</strong> — “Here I Am! Send Me!”</div>`}
];

/* WEEK PACK — listening checks, one per meetingParts index */
const PART_CHECKS = [
  {q:"What is the opening song tonight?", opts:["Song 28 — Gaining Jehovah’s Friendship","Song 90","Song 1"], a:0, hint:"Look at the song button."},
  {q:"Jeremiah hoped the people would…", opts:["Pray to Jehovah and come back","Run to another city","Build a taller wall"], a:0, hint:"Treasures, Lamentations 2:19."},
  {q:"The “beauty of Israel” was thrown down when…", opts:["Jehovah’s blessing was taken away","The sun went behind a cloud","Someone lost a crown"], a:0, hint:"Spiritual Gems, Lamentations 2:1."},
  {q:"In the Bible reading, how did Jerusalem feel?", opts:["Very sad, with no one to comfort them","Ready for a party","Proud and strong"], a:0, hint:"Lamentations 1:8-18."},
  {q:"The first ministry part tonight is…", opts:["A friendly conversation that ends early","A wedding talk","A picnic"], a:0, hint:"Starting a Conversation — informal witnessing."},
  {q:"In public witnessing, they show a video and then…", opts:["Offer a Bible study","Ask for a snack","Close the cart and go home"], a:0, hint:"Following Up — Teaching Toolbox."},
  {q:"In the hallway picture, what could you do?", opts:["Ask a kind question about what you see","Ignore the decorated door","Knock and run away"], a:0, hint:"Look at the picture of the doors."},
  {q:"Song 90 is…", opts:["Encourage One Another","A song about fishing","A birthday song"], a:0, hint:"Look at the song button."},
  {q:"If a friend has stopped coming to meetings, we can…", opts:["Be kind, listen, and encourage them","Forget about them","Get angry"], a:0, hint:"Encourage the Inactive Ones."},
  {q:"What did Jael choose to do?", opts:["Help Jehovah’s people","Hide and do nothing","Join Sisera’s army"], a:0, hint:"Walk Courageously With God, chapter 17."},
  {q:"Deborah and Barak sang that Jael was…", opts:["“Most blessed of women”","“Too shy to help”","“A soldier with a chariot”"], a:0, hint:"Look at the picture of the victory song."},
  {q:"Jael was not a prophetess or a soldier. What did she do?", opts:["She did what she could","She waited for someone else","She gave up"], a:0, hint:"Jael used the gifts she had."},
  {q:"What does Jael’s story teach us about Jehovah?", opts:["He can use someone who is willing and brave","He only helps famous people","He forgets his people"], a:0, hint:"Think about how Jehovah helped his people."},
  {q:"The closing song is…", opts:["Song 75 — “Here I Am! Send Me!”","Song 28","Song 10"], a:0, hint:"Stay for the last song."}
];

const WHO_PORTRAITS = {};
const WISE_PORTRAITS = {
  wise:"media/img-019.jpg",
  unwise:"media/img-020.jpg"
};
/* WEEK PACK — little games, one per meetingParts index, different from the check */
const PART_GAMES = [
  null,
  {kind:"wise", title:"Pray, or take on a weight that is not yours?",
    prompts:[
      {q:"Someone I love makes a bad choice, and I pray for them.", a:"wise"},
      {q:"I blame myself for a choice someone else made.", a:"unwise"},
      {q:"I tell Jehovah how I feel when my heart is heavy.", a:"wise"},
      {q:"I stop being kind because I am sad.", a:"unwise"},
      {q:"I hope a friend will come back to Jehovah.", a:"wise"},
      {q:"I decide I have to fix everything all by myself.", a:"unwise"}
    ]
  },
  {kind:"quiz", title:"The beauty of Israel", done:"Jehovah’s blessing made Israel beautiful.",
    qs:[
      {q:"Why was Israel called beautiful?", opts:[{t:"Because Jehovah blessed them",a:true},{t:"Because they built taller houses",a:false}]},
      {q:"What happened when they stopped listening?", opts:[{t:"That blessing was taken away",a:true},{t:"They got a new garden",a:false}]},
      {q:"“Thrown down from heaven to earth” means…", opts:[{t:"Something high and precious was brought down",a:true},{t:"The stars fell on the playground",a:false}]}
    ]
  },
  {kind:"order", title:"Jeremiah writes Lamentations",
    feed:"Lamentations 1:8-18",
    done:"Jeremiah wrote down how heavy their hearts felt.",
    steps:[
      "Jerusalem is very sad.",
      "The people are hurting.",
      "There is no one to comfort them.",
      "Jeremiah writes it down."
    ]
  },
  {kind:"trace", title:"Trace while you listen", stars:0,
    designs:[{name:"Coil",color:"#6f4b96",ghost:"#ddd0ee",d:"M 18.0 18.0 L 262.0 18.0 Q 282.0 18.0 282.0 38.0 L 282.0 380.0 Q 282.0 400.0 262.0 400.0 L 90.0 400.0 Q 70.0 400.0 70.0 380.0 L 70.0 90.0 Q 70.0 70.0 90.0 70.0 L 210.0 70.0 Q 230.0 70.0 230.0 90.0 L 230.0 328.0 Q 230.0 348.0 210.0 348.0 L 142.0 348.0 Q 122.0 348.0 122.0 328.0 L 122.0 142.0 Q 122.0 122.0 142.0 122.0 L 158.0 122.0 Q 178.0 122.0 178.0 142.0 L 178.0 296.0"},{name:"Snake",color:"#2a8aa0",ghost:"#c5e6ec",d:"M 18.0 18.0 L 18.0 378.0 Q 18.0 400.0 40.0 400.0 L 48.0 400.0 Q 70.0 400.0 70.0 378.0 L 70.0 40.0 Q 70.0 18.0 92.0 18.0 L 100.0 18.0 Q 122.0 18.0 122.0 40.0 L 122.0 378.0 Q 122.0 400.0 144.0 400.0 L 152.0 400.0 Q 174.0 400.0 174.0 378.0 L 174.0 40.0 Q 174.0 18.0 196.0 18.0 L 204.0 18.0 Q 226.0 18.0 226.0 40.0 L 226.0 378.0 Q 226.0 400.0 248.0 400.0 L 256.0 400.0 Q 278.0 400.0 278.0 378.0 L 278.0 18.0"},{name:"Waves",color:"#c45b8c",ghost:"#f3c4d8",d:"M 18.0 18.0 L 260.0 18.0 Q 282.0 18.0 282.0 40.0 L 282.0 50.0 Q 282.0 72.0 260.0 72.0 L 40.0 72.0 Q 18.0 72.0 18.0 94.0 L 18.0 104.0 Q 18.0 126.0 40.0 126.0 L 260.0 126.0 Q 282.0 126.0 282.0 148.0 L 282.0 158.0 Q 282.0 180.0 260.0 180.0 L 40.0 180.0 Q 18.0 180.0 18.0 202.0 L 18.0 212.0 Q 18.0 234.0 40.0 234.0 L 260.0 234.0 Q 282.0 234.0 282.0 256.0 L 282.0 266.0 Q 282.0 288.0 260.0 288.0 L 40.0 288.0 Q 18.0 288.0 18.0 310.0 L 18.0 320.0 Q 18.0 342.0 40.0 342.0 L 260.0 342.0 Q 282.0 342.0 282.0 364.0 L 282.0 374.0 Q 282.0 396.0 260.0 396.0 L 18.0 396.0"},{name:"Spiral",color:"#d45b7a",ghost:"#f4c9d4",d:"M 150.0 22.0 L 161.8 23.5 L 173.3 26.4 L 184.5 30.8 L 195.4 36.7 L 205.7 43.8 L 215.5 52.3 L 224.6 61.9 L 233.1 72.7 L 240.8 84.5 L 247.6 97.2 L 253.6 110.8 L 258.7 125.0 L 262.8 139.8 L 266.0 155.0 L 268.2 170.6 L 269.5 186.3 L 269.7 202.1 L 269.0 217.9 L 267.4 233.4 L 264.8 248.7 L 261.3 263.5 L 256.9 277.7 L 251.8 291.3 L 245.9 304.1 L 239.2 316.1 L 232.0 327.1 L 224.2 337.1 L 215.8 345.9 L 207.1 353.6 L 198.0 360.1 L 188.6 365.3 L 179.0 369.2 L 169.4 371.8 L 159.7 373.1 L 150.0 373.0 L 140.5 371.6 L 131.1 369.0 L 122.1 365.1 L 113.4 359.9 L 105.1 353.6 L 97.3 346.2 L 90.0 337.8 L 83.4 328.4 L 77.3 318.2 L 71.9 307.2 L 67.3 295.5 L 63.3 283.2 L 60.1 270.4 L 57.7 257.3 L 56.1 243.9 L 55.3 230.3 L 55.2 216.8 L 56.0 203.3 L 57.4 189.9 L 59.6 176.9 L 62.5 164.3 L 66.1 152.1 L 70.2 140.5 L 75.0 129.6 L 80.3 119.5 L 86.1 110.2 L 92.3 101.8 L 98.9 94.3 L 105.7 87.9 L 112.9 82.4 L 120.2 78.1 L 127.6 74.9 L 135.1 72.8 L 142.6 71.8 L 150.0 72.0 L 157.3 73.3 L 164.4 75.6 L 171.2 79.0 L 177.8 83.5 L 184.0 88.9 L 189.9 95.2 L 195.3 102.4 L 200.2 110.4 L 204.6 119.1 L 208.5 128.4 L 211.9 138.3 L 214.7 148.7 L 216.9 159.4 L 218.5 170.4 L 219.5 181.7 L 219.9 193.0 L 219.8 204.4 L 219.1 215.6 L 217.8 226.7 L 216.0 237.5 L 213.7 248.0 L 211.0 258.1 L 207.7 267.6 L 204.1 276.6 L 200.1 284.9 L 195.8 292.5 L 191.3 299.4 L 186.4 305.5 L 181.4 310.7 L 176.3 315.0 L 171.0 318.5 L 165.7 321.0 L 160.4 322.6 L 155.2 323.3 L 150.0 323.0 L 145.0 321.8 L 140.1 319.8 L 135.4 316.9 L 131.0 313.1 L 126.8 308.6 L 123.0 303.3 L 119.4 297.4 L 116.3 290.8 L 113.4 283.6 L 111.0 276.0 L 109.0 267.9 L 107.4 259.5 L 106.1 250.8 L 105.3 241.8 L 104.9 232.8 L 104.8 223.6 L 105.2 214.5 L 105.9 205.5 L 107.0 196.7 L 108.4 188.0 L 110.1 179.7 L 112.0 171.8 L 114.3 164.2 L 116.7 157.2 L 119.4 150.7 L 122.2 144.7 L 125.2 139.4 L 128.3 134.8 L 131.4 130.8 L 134.6 127.5 L 137.8 124.9 L 140.9 123.1 L 144.0 122.0 L 147.1 121.6 L 150.0 122.0"}]
  },
  {kind:"trace", title:"Trace while you listen", stars:0,
    designs:[{name:"Puzzle",color:"#d39b12",ghost:"#f3e2ae",d:"M 34.5 93.5 L 53.5 93.5 Q 67.5 93.5 67.5 107.5 L 67.5 112.5 Q 67.5 126.5 53.5 126.5 L 48.5 126.5 Q 34.5 126.5 34.5 140.5 L 34.5 145.5 Q 34.5 159.5 34.5 173.5 L 34.5 178.5 Q 34.5 192.5 48.5 192.5 L 53.5 192.5 Q 67.5 192.5 67.5 178.5 L 67.5 173.5 Q 67.5 159.5 81.5 159.5 L 86.5 159.5 Q 100.5 159.5 100.5 173.5 L 100.5 178.5 Q 100.5 192.5 114.5 192.5 L 119.5 192.5 Q 133.5 192.5 133.5 178.5 L 133.5 173.5 Q 133.5 159.5 133.5 145.5 L 133.5 140.5 Q 133.5 126.5 119.5 126.5 L 114.5 126.5 Q 100.5 126.5 100.5 112.5 L 100.5 107.5 Q 100.5 93.5 114.5 93.5 L 119.5 93.5 Q 133.5 93.5 147.5 93.5 L 152.5 93.5 Q 166.5 93.5 166.5 107.5 L 166.5 112.5 Q 166.5 126.5 180.5 126.5 L 185.5 126.5 Q 199.5 126.5 199.5 112.5 L 199.5 107.5 Q 199.5 93.5 213.5 93.5 L 218.5 93.5 Q 232.5 93.5 246.5 93.5 L 251.5 93.5 Q 265.5 93.5 265.5 107.5 L 265.5 112.5 Q 265.5 126.5 251.5 126.5 L 246.5 126.5 Q 232.5 126.5 232.5 140.5 L 232.5 145.5 Q 232.5 159.5 246.5 159.5 L 251.5 159.5 Q 265.5 159.5 265.5 173.5 L 265.5 178.5 Q 265.5 192.5 251.5 192.5 L 246.5 192.5 Q 232.5 192.5 218.5 192.5 L 213.5 192.5 Q 199.5 192.5 199.5 178.5 L 199.5 173.5 Q 199.5 159.5 185.5 159.5 L 180.5 159.5 Q 166.5 159.5 166.5 173.5 L 166.5 178.5 Q 166.5 192.5 166.5 206.5 L 166.5 211.5 Q 166.5 225.5 166.5 239.5 L 166.5 244.5 Q 166.5 258.5 180.5 258.5 L 185.5 258.5 Q 199.5 258.5 199.5 244.5 L 199.5 239.5 Q 199.5 225.5 213.5 225.5 L 218.5 225.5 Q 232.5 225.5 246.5 225.5 L 251.5 225.5 Q 265.5 225.5 265.5 239.5 L 265.5 244.5 Q 265.5 258.5 251.5 258.5 L 246.5 258.5 Q 232.5 258.5 232.5 272.5 L 232.5 277.5 Q 232.5 291.5 246.5 291.5 L 251.5 291.5 Q 265.5 291.5 265.5 305.5 L 265.5 310.5 Q 265.5 324.5 251.5 324.5 L 246.5 324.5 Q 232.5 324.5 218.5 324.5 L 213.5 324.5 Q 199.5 324.5 199.5 310.5 L 199.5 305.5 Q 199.5 291.5 185.5 291.5 L 180.5 291.5 Q 166.5 291.5 166.5 305.5 L 166.5 310.5 Q 166.5 324.5 152.5 324.5 L 147.5 324.5 Q 133.5 324.5 119.5 324.5 L 114.5 324.5 Q 100.5 324.5 100.5 310.5 L 100.5 305.5 Q 100.5 291.5 114.5 291.5 L 119.5 291.5 Q 133.5 291.5 133.5 277.5 L 133.5 272.5 Q 133.5 258.5 133.5 244.5 L 133.5 239.5 Q 133.5 225.5 119.5 225.5 L 114.5 225.5 Q 100.5 225.5 100.5 239.5 L 100.5 244.5 Q 100.5 258.5 86.5 258.5 L 81.5 258.5 Q 67.5 258.5 67.5 244.5 L 67.5 239.5 Q 67.5 225.5 53.5 225.5 L 48.5 225.5 Q 34.5 225.5 34.5 239.5 L 34.5 244.5 Q 34.5 258.5 34.5 272.5 L 34.5 277.5 Q 34.5 291.5 48.5 291.5 L 53.5 291.5 Q 67.5 291.5 67.5 305.5 L 67.5 310.5 Q 67.5 324.5 53.5 324.5 L 34.5 324.5"},{name:"Coil",color:"#6f4b96",ghost:"#ddd0ee",d:"M 18.0 18.0 L 262.0 18.0 Q 282.0 18.0 282.0 38.0 L 282.0 380.0 Q 282.0 400.0 262.0 400.0 L 94.0 400.0 Q 74.0 400.0 74.0 380.0 L 74.0 94.0 Q 74.0 74.0 94.0 74.0 L 206.0 74.0 Q 226.0 74.0 226.0 94.0 L 226.0 324.0 Q 226.0 344.0 206.0 344.0 L 150.0 344.0 Q 130.0 344.0 130.0 324.0 L 130.0 130.0"},{name:"Snake",color:"#2a8aa0",ghost:"#c5e6ec",d:"M 26.0 18.0 L 26.0 378.0 Q 26.0 400.0 48.0 400.0 L 60.0 400.0 Q 82.0 400.0 82.0 378.0 L 82.0 40.0 Q 82.0 18.0 104.0 18.0 L 116.0 18.0 Q 138.0 18.0 138.0 40.0 L 138.0 378.0 Q 138.0 400.0 160.0 400.0 L 172.0 400.0 Q 194.0 400.0 194.0 378.0 L 194.0 40.0 Q 194.0 18.0 216.0 18.0 L 228.0 18.0 Q 250.0 18.0 250.0 40.0 L 250.0 400.0"},{name:"Spiral",color:"#2c7a55",ghost:"#c4ead4",d:"M 150.0 26.0 L 161.4 27.5 L 172.6 30.4 L 183.5 34.8 L 193.9 40.5 L 203.9 47.6 L 213.4 55.9 L 222.2 65.3 L 230.3 75.9 L 237.7 87.5 L 244.3 99.9 L 250.0 113.1 L 254.9 127.0 L 258.8 141.5 L 261.8 156.4 L 263.9 171.5 L 265.1 186.9 L 265.3 202.3 L 264.5 217.7 L 262.9 232.8 L 260.3 247.6 L 256.9 262.0 L 252.7 275.9 L 247.7 289.1 L 241.9 301.5 L 235.6 313.1 L 228.6 323.8 L 221.0 333.5 L 213.0 342.0 L 204.6 349.5 L 195.9 355.7 L 186.9 360.7 L 177.7 364.5 L 168.5 366.9 L 159.2 368.1 L 150.0 368.0 L 140.9 366.6 L 132.1 364.0 L 123.5 360.2 L 115.2 355.1 L 107.4 349.0 L 100.0 341.8 L 93.1 333.6 L 86.8 324.5 L 81.1 314.6 L 76.1 303.9 L 71.7 292.5 L 68.0 280.6 L 65.1 268.3 L 62.9 255.6 L 61.4 242.7 L 60.7 229.6 L 60.7 216.5 L 61.5 203.5 L 62.9 190.7 L 65.0 178.1 L 67.8 166.0 L 71.2 154.3 L 75.2 143.2 L 79.8 132.8 L 84.8 123.1 L 90.2 114.2 L 96.1 106.1 L 102.3 99.0 L 108.7 92.9 L 115.4 87.7 L 122.3 83.6 L 129.2 80.6 L 136.2 78.7 L 143.1 77.8 L 150.0 78.0 L 156.7 79.3 L 163.3 81.6 L 169.6 84.9 L 175.7 89.2 L 181.4 94.4 L 186.7 100.5 L 191.6 107.4 L 196.1 115.1 L 200.1 123.4 L 203.6 132.3 L 206.6 141.8 L 209.1 151.7 L 211.0 161.9 L 212.4 172.4 L 213.2 183.1 L 213.5 193.9 L 213.3 204.6 L 212.6 215.3 L 211.3 225.8 L 209.6 236.1 L 207.4 246.0 L 204.9 255.5 L 201.9 264.5 L 198.5 272.9 L 194.9 280.7 L 191.0 287.9 L 186.8 294.3 L 182.4 300.0 L 177.9 304.8 L 173.3 308.8 L 168.6 312.0 L 163.9 314.3 L 159.2 315.8 L 154.5 316.3 L 150.0 316.0 L 145.6 314.8 L 141.3 312.8 L 137.3 310.0 L 133.5 306.5 L 129.9 302.2 L 126.6 297.2 L 123.7 291.5 L 121.0 285.4 L 118.7 278.6 L 116.7 271.5 L 115.1 263.9 L 113.8 256.0 L 112.9 247.9 L 112.3 239.5 L 112.1 231.1 L 112.2 222.6 L 112.7 214.2 L 113.4 205.8 L 114.4 197.7 L 115.7 189.7 L 117.3 182.1 L 119.1 174.8 L 121.0 167.9 L 123.2 161.4 L 125.4 155.5 L 127.8 150.1 L 130.3 145.3 L 132.8 141.1 L 135.4 137.5 L 138.0 134.6 L 140.5 132.3 L 143.0 130.7 L 145.4 129.8 L 147.8 129.6 L 150.0 130.0"}]
  },
  {kind:"quiz", title:"A kind question at the door", done:"A kind question can start a conversation!",
    qs:[
      {q:"In the picture, one door is…", opts:[{t:"Decorated for a holiday",a:true},{t:"Painted with stripes",a:false}]},
      {q:"What is a good first step?", opts:[{t:"Ask a kind question about what you see",a:true},{t:"Walk past and say nothing",a:false}]},
      {q:"After you start talking, you can…", opts:[{t:"Share a Bible truth",a:true},{t:"Argue until you win",a:false}]},
      {q:"If a friendly talk ends before you can give a witness, you can…", opts:[{t:"Be glad you were kind, and try again later",a:true},{t:"Feel like it was all wasted",a:false}]}
    ]
  },
  null,
  {kind:"quiz", title:"Do not forget our friends", done:"A kind listener can help a friend come back.",
    qs:[
      {q:"Besides looking for new people, we should also…", opts:[{t:"Remember friends who have stopped coming",a:true},{t:"Pretend we never knew them",a:false}]},
      {q:"Why might someone stop coming?", opts:[{t:"They may feel sad, busy, or unworthy",a:true},{t:"They never liked singing",a:false}]},
      {q:"Many who have stopped coming still…", opts:[{t:"Love Jehovah",a:true},{t:"Want us to ignore them",a:false}]},
      {q:"While the video plays, what can you do?", opts:[{t:"Watch and think of one kind thing you can do",a:true},{t:"Play with my shoes",a:false}]}
    ]
  },
  {kind:"order", title:"Jael chose to help",
    done:"Jael showed courage, and Jehovah helped his people.",
    feed:"Walk Courageously With God · chapter 17",
    steps:[
      "Sisera runs away and comes toward Jael’s tent.",
      "Jael thinks fast and chooses to help Jehovah’s people.",
      "Jehovah uses Jael’s courage to stop the enemy.",
      "Deborah and Barak sing that Jael is “most blessed of women.”"
    ]
  },
  {kind:"search", title:"Word hunt while you listen",
    feed:"Slide across letters. Words from tonight’s meeting.",
    done:"You found them all. Jehovah helps people who are brave and kind!",
    words:["PRAYER", "COURAGE", "JAEL", "JEREMIAH", "KIND", "LISTEN", "JEHOVAH", "FRIEND", "SCROLL", "HOPE", "HEART", "TENT", "FAITH", "BLESS", "SISERA", "SONG"],
    grid:[
      ["F", "K", "B", "S", "V", "N", "L", "T", "D", "S", "H", "U"],
      ["P", "S", "T", "X", "R", "C", "I", "R", "N", "G", "H", "S"],
      ["J", "L", "C", "G", "M", "W", "S", "J", "E", "E", "A", "V"],
      ["E", "V", "F", "R", "T", "P", "T", "E", "I", "B", "T", "L"],
      ["H", "A", "P", "A", "O", "V", "E", "R", "R", "F", "U", "H"],
      ["O", "R", "R", "H", "I", "L", "N", "E", "F", "W", "O", "L"],
      ["V", "E", "A", "H", "D", "T", "L", "M", "M", "P", "F", "G"],
      ["A", "S", "Y", "E", "N", "K", "H", "I", "E", "B", "P", "G"],
      ["H", "I", "E", "A", "I", "M", "R", "A", "V", "L", "C", "N"],
      ["T", "S", "R", "R", "K", "D", "T", "H", "A", "E", "G", "O"],
      ["V", "Z", "U", "T", "J", "A", "E", "L", "F", "S", "R", "S"],
      ["R", "E", "G", "A", "R", "U", "O", "C", "R", "S", "T", "E"]
    ]
  },
  {kind:"quiz", title:"Brave like Jael", done:"You can be courageous with what you have!",
    qs:[
      {q:"Jael was not a prophetess or a soldier. What can we learn?", opts:[{t:"We can still do what we can for Jehovah",a:true},{t:"Only famous people can help",a:false}]},
      {q:"When might you need courage like Jael?", opts:[{t:"When I tell a classmate about Jehovah, even if I feel shy",a:true},{t:"Only when I am playing a game",a:false}]},
      {q:"A kind card from someone who cannot do everything still…", opts:[{t:"Can encourage a friend",a:true},{t:"Does not count",a:false}]},
      {q:"How can you be brave this week?", opts:[{t:"Do the right thing, even if it is hard",a:true},{t:"Give up as soon as I feel nervous",a:false}]}
    ]
  },
  {kind:"quiz", title:"What does this teach about Jehovah?", done:"Jehovah uses people who are willing and brave.",
    qs:[
      {q:"What does this account teach you about Jehovah?", opts:[{t:"He can use someone who is willing and brave",a:true},{t:"He only helps people with chariots",a:false}]},
      {q:"Who helped Jael stop the dangerous enemy?", opts:[{t:"Jehovah",a:true},{t:"Sisera’s army",a:false}]},
      {q:"What would you like to ask Jael in the resurrection?", opts:[{t:"Were you scared when Sisera came to your tent?",a:true},{t:"Nothing — I know everything already",a:false}]}
    ]
  },
  null
];

/* WEEK PACK — buddy answers for this week’s material */
const BUDDY_FACTS = [
  {keys:["lamentations","jeremiah","pray","prayer","loss","sad"], ans:"Jeremiah was very sad because people he loved stopped serving Jehovah and got hurt. He hoped they would pray and come back. We can pray too, and we do not have to blame ourselves for someone else’s choice."},
  {keys:["beauty","heaven","earth","gems"], ans:"Israel was beautiful because Jehovah blessed them. When they stopped listening, that blessing was taken away — like something precious coming down from a high place."},
  {keys:["reading","jerusalem","comfort","lament"], ans:"In Lamentations 1, Jerusalem was very sad. The people were hurting, and there was no one to comfort them. Jeremiah wrote it down."},
  {keys:["informal","conversation","ends"], ans:"Informal witnessing. They start a friendly conversation, but it ends before they can share the good news. That’s okay — they were kind, and they can try again later."},
  {keys:["toolbox","video","follow","public"], ans:"Public witnessing. They show a video from the Teaching Toolbox, then kindly offer a Bible study."},
  {keys:["door","holiday","wreath","christmas","say"], ans:"Look at the decorated door. A kind question about what you see can start a conversation. Then you can share a Bible truth."},
  {keys:["inactive","forget","encourage","friend"], ans:"We do not forget friends who have stopped coming. They may still love Jehovah. We can be kind, listen, and encourage them."},
  {keys:["jael","courage","blessed","sisera"], ans:"Jael showed courage when she chose to help Jehovah’s people. Deborah and Barak sang that she was “most blessed of women.” We can be courageous too."},
  {keys:["heber","kenite","moses"], ans:"The Kenites had been close to Israel since the days of Moses. Jael’s husband Heber was a Kenite, even though he had made friends with Israel’s enemies."},
  {keys:["card","limit","could"], ans:"Jael was not a prophetess or a soldier, but she did what she could. We can do what we can too — even a kind card can encourage someone."},
  {keys:["song 28","28","friendship"], ans:"Song 28 is Gaining Jehovah’s Friendship."},
  {keys:["song 90","90","encourage"], ans:"Song 90 is Encourage One Another."},
  {keys:["song 75","75","send me"], ans:"Song 75 is the closing song — “Here I Am! Send Me!”"},
  {keys:["bored","tired","long"], ans:"Meetings can feel long. Try this: answer the Check, then play the little game. I’m staying with you."},
  {keys:["who are you","your name","buddy"], ans:"I’m Brutus. I know this week’s meeting."},
  {keys:["hello","hi","hey"], ans:"Hi. Look at the purple Check card if you want a hint."}
];
