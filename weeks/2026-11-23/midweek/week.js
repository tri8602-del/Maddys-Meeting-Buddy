/* MIDWEEK week pack — loaded by index.html before the app engine (see README "Weekly update").
   Week of November 23–29, 2026 · Lamentations 3–5. Source: Life and Ministry Meeting Workbook,
   November–December 2026 (wol.jw.org / jw.org), and Walk Courageously With God (wcg) chapter 18.
   Image paths are relative to index.html. */

/* Song titles and lead sheets used by this week's parts (pages from songs/, the "Sing Out Joyfully" book).
   Song 158 is one of the new songs, so its lead sheet (jw.org original-song lead sheet) lives in this week's folder. */
const SONG_TITLES = {
  158: "Song 158 — “It Will Not Be Late!”",
  109: "Song 109 — Love Intensely From the Heart",
  74: "Song 74 — Join in the Kingdom Song!"
};
const SONG_SHEETS = {
  158: ["weeks/2026-11-23/midweek/song-158-1.png", "weeks/2026-11-23/midweek/song-158-2.png"],
  109: ["songs/109-1.png", "songs/109-2.png"],
  74: ["songs/074-1.png", "songs/074-2.png"]
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
  id: "2026-11-23",
  heading: "Lamentations 3–5",
  range: "November 23–29, 2026",
  start: [2026, 10, 24, 19, 0, 0],
  secretKind: "word",
  secretWord: "Fleece",
  secretChoices: ["Fleece","Crown","Boat","Ladder"],
  secretHint: "Listen in the Congregation Bible Study. Gideon put this on the ground and asked Jehovah for a sign.",
  secretFoundBlurb: "Gideon put a fleece on the ground. Jehovah made it wet one night and dry the next. Jehovah patiently helped Gideon be brave!",
  chestCode: "torch",
  prizeText: "Congratulations — you had a perfect meeting! Mommy and Daddy will take you to get one thing from Sheetz!"
};

const meetingParts = [
  {section:"Opening",title:"Song 158 and Opening Comments",minutes:1,kind:"normal",song:158,
    listen:"Stand ready for song 158, then listen to the opening comments.",
    buddy:"This meeting is Lamentations 3 to 5. Listen for how Jehovah helps us not to give up, and for brave and careful Gideon.",
    html:`<div class="material-block"><strong>Song 158 and Prayer</strong> — “It Will Not Be Late!”</div>
<div class="material-block">Opening Comments <em>(1 min.)</em></div>`},
  {section:"Treasures From God’s Word",title:"Do Not Give Out When Experiencing Trials",minutes:10,kind:"answer",
    listen:"Jehovah’s mercies are new every morning. What three things help us not to give up?",
    buddy:"When something is hard, we can remember the good things Jehovah has done for us, trust that he will stay with us tomorrow too, and wait patiently. While we wait, we keep praying.",
    html:`<div class="material-block"><ul>
<li>Appreciate what Jehovah has done for you <strong>(La 3:22; w24.01 30 ¶16)</strong></li>
<li>Trust that Jehovah will continue to be with you <strong>(La 3:23; Mt 6:34)</strong></li>
<li>Wait patiently for your trials to end <strong>(La 3:24; w21.08 13 ¶17-19)</strong></li>
</ul></div>
<div class="source-pic"><img src="weeks/2026-11-23/midweek/mwb-trials.jpg" alt="A sister with a severe illness calmly prays while receiving an IV treatment"><p>While we wait on Jehovah, we keep praying to him in faith. This sister is very sick, but she keeps talking to Jehovah, and he helps her not to give up.</p></div>`},
  {section:"Treasures From God’s Word",title:"Spiritual Gems",minutes:10,kind:"questions",
    listen:"Listen for what good can come from doing hard things when you are young.",
    buddy:"Lamentations 3:27 says it is good to carry a load when you are young. When young people learn to keep going through hard things with Jehovah’s help, they grow strong and patient.",
    questions:["La 3:27—What good can come from enduring hardships during youth?","What spiritual gems from this week’s Bible reading would you like to share?"],
    html:`<div class="material-block review-question"><p><strong>La 3:27</strong> — What good can come from enduring hardships during youth? <strong>(w07 6/1 11 ¶5)</strong></p></div>
<div class="material-block"><p class="review-question">What spiritual gems from this week’s Bible reading would you like to share?</p></div>`},
  {section:"Treasures From God’s Word",title:"Bible Reading",minutes:4,kind:"answer",
    listen:"Follow Lamentations 3:19-42. What is new every morning?",
    buddy:"This reading is Lamentations 3:19-42. Jeremiah felt sad, but then he remembered Jehovah’s loyal love. Jehovah’s mercies are new every morning, so Jeremiah decided to wait for Jehovah.",
    html:`<div class="material-block"><strong>Lamentations 3:19-42</strong> <em>(th study 12)</em></div>
<div class="material-block">Jeremiah felt sad and tired, but then he remembered something happy: Jehovah’s loyal love never ends, and his mercies are new every morning. So Jeremiah said he would wait for Jehovah.</div>`},
  {section:"Apply Yourself to the Field Ministry",title:"Starting a Conversation",minutes:3,kind:"answer",
    listen:"House to house. Which Bible truth do they share?",
    buddy:"House to house. They share one short Bible truth, like one from the back of the Love People brochure.",
    html:`<div class="material-block"><strong>HOUSE TO HOUSE.</strong> Share a Bible truth, such as one from appendix A of the <em>Love People</em> brochure. <em>(lmd lesson 5 point 4)</em></div>`},
  {section:"Apply Yourself to the Field Ministry",title:"Starting a Conversation",minutes:4,kind:"answer",
    listen:"Informal witnessing. What do they offer?",
    buddy:"Informal witnessing. While they are just talking with someone, they kindly offer a tract.",
    html:`<div class="material-block"><strong>INFORMAL WITNESSING.</strong> Offer a tract. <em>(lmd lesson 4 point 3)</em></div>`},
  {section:"Apply Yourself to the Field Ministry",title:"Talk",minutes:5,kind:"answer",
    listen:"This talk is for older brothers and sisters. Why are they a treasure to the congregation?",
    buddy:"Older brothers and sisters are a treasure! They have loved Jehovah for a long time. They can pray for us, teach us, and cheer us on.",
    html:`<div class="material-block"><strong>w25.12 26-30</strong> — Theme: <strong>Older Ones—You Are an Asset to the Congregation.</strong> <em>(th study 16)</em></div>
<div class="material-block">Older brothers and sisters have served Jehovah for many years. Their faith, prayers, and kind words help the whole congregation.</div>`},
  {section:"Living as Christians",title:"Song 109 — Love Intensely From the Heart",minutes:0,kind:"song",song:109,
    listen:"Follow the words. This song is about loving each other from the heart.",
    buddy:"We can show love from the heart!",
    html:`<div class="material-block"><strong>Song 109</strong> — Love Intensely From the Heart</div>`},
  {section:"Living as Christians",title:"Help Caregivers Not to Give Out",minutes:15,kind:"questions",
    listen:"Watch the video Comfort for the Caregiver. How can we help someone who takes care of a sick or older family member?",
    buddy:"A caregiver is someone who takes care of a family member who is sick or old. It is hard work! Friends in the congregation can help — like bringing a snack, visiting, or helping with chores.",
    questions:["How can family members apply these scriptures when caring for loved ones?","What is involved in being a caregiver?","How can caregivers take care of themselves?","How can the congregation help caregivers?","How does Jehovah help caregivers not to give out?"],
    html:`<div class="material-block">Christians consider it a privilege to care for loved ones. Nevertheless, caregiving presents challenges. One way that Jehovah helps caregivers not to give out is by means of practical assistance from fellow believers.</div>
<div class="material-block">Read <strong>Proverbs 20:18</strong> and <strong>Philippians 2:4</strong>. Then ask the audience:</div>
<div class="review-list">
<div class="review-question"><strong>How can family members apply these scriptures when caring for loved ones?</strong></div>
</div>
<div class="material-block">Play the VIDEO <em>Comfort for the Caregiver</em>. Then ask the audience:</div>
<div class="review-list">
<div class="review-question"><strong>What is involved in being a caregiver?</strong></div>
<div class="review-question"><strong>How can caregivers take care of themselves?</strong></div>
<div class="review-question"><strong>How can the congregation help caregivers?</strong></div>
<div class="review-question"><strong>How does Jehovah help caregivers not to give out?</strong></div>
</div>
<div class="source-pic"><img src="weeks/2026-11-23/midweek/mwb-caregiver.jpg" alt="A sister and her elderly mother enjoy some snacks with their friends"><p>This sister takes care of her mom. Friends came to visit and brought snacks. Being a kind friend helps a caregiver not to give up.</p></div>
<div class="material-block"><em>For more information, see the article “Maintain Your Joy as a Caregiver” in the November 2025 issue of</em> The Watchtower.</div>`},
  {section:"Congregation Bible Study",title:"Gideon — Courageous and Cautious",minutes:30,kind:"cbs",
    listen:"Listen for how Gideon was brave and careful at the same time.",
    buddy:"Gideon was brave, and he was careful too. He trusted Jehovah, and Jehovah helped just 300 men win against a huge army.",
    html:`<div class="cbs-reference"><strong>Walk Courageously With God, chapter 18</strong><br>Read: Judges 6:1–7:22; 8:4-23, 28</div>
<div class="source-pic"><img src="weeks/2026-11-23/midweek/wcg-torches.jpg" alt="Gideon and his men holding torches in their left hands and blowing horns in their right hands. Smashed jars lie at their feet."><p>In the dark night, Gideon’s men broke their jars, held up torches, blew their horns, and shouted: “The sword of Jehovah and of Gideon!”</p></div>
<div class="story-text">
<p>Gideon lived at a time when enemies called the Midianites kept taking the Israelites’ food. Gideon was brave and kept working to feed his people, but he was careful too. He hid while he worked.</p>
<p>Jehovah sent an angel to Gideon. Jehovah wanted Gideon to save His people. Gideon asked for a sign, and Jehovah gave him one.</p>
<p>Gideon put a fleece, a piece of wool, on the ground. One night Jehovah made the fleece wet and the ground dry. The next night the fleece was dry and the ground was wet. Jehovah was patient with Gideon.</p>
<p>Gideon had 32,000 men, but Jehovah said that was too many! Jehovah wanted everyone to know that He was the one who would win. In the end, Gideon had just 300 men. The men he kept were the ones who stayed alert while they drank water.</p>
<p>In the dark night, the 300 men spread out around the enemy camp. They blew horns, broke their jars, and held up bright torches. The enemies got so confused that they ran away! When the people wanted Gideon to be their king, he humbly said: “Jehovah is the one who will rule over you.”</p>
</div>
<div class="review-question"><strong>For discussion:</strong> In what ways did Gideon show courage?</div>`},
  {section:"Congregation Bible Study",title:"Dig Deeper",minutes:0,kind:"cbs",
    listen:"Pick one Dig Deeper question and try to answer it.",
    buddy:"Usually only a few soldiers blew horns. When the enemy heard 300 horns at once, they thought a giant army was all around them!",
    html:`<div class="review-list">
<div class="review-question"><strong>1. Why might the “round loaf of barley” in the soldier’s dream have been a fitting symbol of Gideon’s army? (Judg. 7:13; it “Barley” ¶7)</strong></div>
<div class="review-question"><strong>2. Why did the sound of 300 horns confuse and frighten the Midianites? (it “Horn” ¶3)</strong></div>
<div class="source-pic"><img src="weeks/2026-11-23/midweek/wcg-horn.jpg" alt="A ram’s horn"><p>Rams’ horns were used as signaling instruments. Gideon’s men blew 300 of them!</p></div>
<div class="review-question"><strong>3. What did Gideon and his army have to do to defeat the Midianites? (w04 10/15 16 ¶9-10)</strong></div>
<div class="source-pic"><img src="weeks/2026-11-23/midweek/wcg-map.jpg" alt="A map showing the distance Gideon and his men chased the Midianites from the Jezreel Valley to Jogbehah"><p>Gideon chased the Midianites about 80 kilometers (50 miles) to Jogbehah. They were tired, but they kept going!</p></div>
<div class="review-question"><strong>4. What details confirm the accuracy of this Bible account? (w05 4/15 32)</strong></div>
</div>`},
  {section:"Congregation Bible Study",title:"Reflect on the Lessons",minutes:0,kind:"cbs",
    listen:"Gideon was brave and careful. When do we need to be both?",
    buddy:"Gideon stayed humble and spoke kindly when people were upset with him. We can be brave when we stand up for Jehovah, and careful by thinking first and staying calm and kind.",
    html:`<div class="review-list">
<div class="review-question"><strong>Gideon led God’s people to a victory. But he remained humble and spoke peaceably to others. (Judg. 8:1-3) How can family heads and elders imitate Gideon when someone is upset by something they do?</strong></div>
<div class="review-question"><strong>In what situations might we need to be both courageous and cautious?</strong></div>
<div class="review-question"><strong>How might you imitate Gideon’s courage in your life?</strong></div>
</div>`},
  {section:"Congregation Bible Study",title:"Meditate on the Bigger Picture",minutes:0,kind:"cbs",
    listen:"What does the story of Gideon teach you about Jehovah?",
    buddy:"Jehovah is patient. He gave Gideon signs to help him be brave. And Jehovah can win even with just a few people, because the victory is his.",
    html:`<div class="review-list">
<div class="review-question"><strong>What does this account teach me about Jehovah?</strong></div>
<div class="review-question"><strong>How does the account tie in with Jehovah’s purposes?</strong></div>
<div class="review-question"><strong>What would I like to ask Gideon in the resurrection?</strong></div>
</div>`},
  {section:"Closing",title:"Concluding Comments",minutes:3,kind:"normal",song:74,
    listen:"Listen for the concluding comments, then sing song 74.",
    buddy:"You did it. Song 74 — Join in the Kingdom Song!",
    html:`<div class="material-block"><strong>Concluding Comments</strong> <em>(3 min.)</em></div>
<div class="material-block"><strong>Song 74 and Prayer</strong> — Join in the Kingdom Song!</div>`}
];

/* WEEK PACK — listening checks, one per meetingParts index */
const PART_CHECKS = [
  {q:"What is the opening song tonight?", opts:["Song 158 — “It Will Not Be Late!”","Song 109","Song 1"], a:0, hint:"Look at the song button."},
  {q:"While we wait on Jehovah, we keep…", opts:["Praying to him in faith","Complaining","Hiding from everyone"], a:0, hint:"Treasures, Lamentations 3:24."},
  {q:"Lamentations 3:27 says it is good to carry a load when you are…", opts:["Young","Asleep","On vacation"], a:0, hint:"Spiritual Gems."},
  {q:"In the Bible reading, what is new every morning?", opts:["Jehovah’s mercies","A new house","The moon"], a:0, hint:"Lamentations 3:22-23."},
  {q:"In the first ministry part, they share…", opts:["A Bible truth","A cookie recipe","A funny joke"], a:0, hint:"Starting a Conversation — house to house."},
  {q:"In informal witnessing tonight, they offer…", opts:["A tract","A balloon","A toy car"], a:0, hint:"Starting a Conversation — informal witnessing."},
  {q:"The talk says older brothers and sisters are…", opts:["A treasure to the congregation","Too old to help","Not important"], a:0, hint:"Older Ones — You Are an Asset."},
  {q:"Song 109 is…", opts:["Love Intensely From the Heart","A song about fishing","A birthday song"], a:0, hint:"Look at the song button."},
  {q:"A caregiver is someone who…", opts:["Takes care of a family member who is sick or old","Fixes cars","Drives a bus"], a:0, hint:"Help Caregivers Not to Give Out."},
  {q:"How many men did Gideon have at the end?", opts:["300","32,000","3"], a:0, hint:"Walk Courageously With God, chapter 18."},
  {q:"What did Gideon’s men blow in the night?", opts:["Horns","Bubbles","Whistles"], a:0, hint:"Look at the picture of the ram’s horn."},
  {q:"Gideon was brave and also…", opts:["Careful","Lazy","Mean"], a:0, hint:"Courageous and cautious."},
  {q:"What does Gideon’s story teach us about Jehovah?", opts:["He is patient and he gives the victory","He only helps big armies","He gets tired of helping"], a:0, hint:"Think about the fleece and the 300 men."},
  {q:"The closing song is…", opts:["Song 74 — Join in the Kingdom Song!","Song 158","Song 10"], a:0, hint:"Stay for the last song."}
];

/* WEEK PACK — portraits for this week's games (new pictures made for this week, kept in this week's folder) */
const WHO_PORTRAITS = {
  gideon:"weeks/2026-11-23/midweek/who-gideon.jpg",
  angel:"weeks/2026-11-23/midweek/who-angel.jpg",
  soldier:"weeks/2026-11-23/midweek/who-soldier.jpg"
};
const WISE_PORTRAITS = {
  wise:"weeks/2026-11-23/midweek/wise-pray.jpg",
  unwise:"weeks/2026-11-23/midweek/unwise-giveup.jpg"
};
/* WEEK PACK — little games, one per meetingParts index, different from the check */
const PART_GAMES = [
  null,
  {kind:"wise", title:"Keep going with Jehovah, or give up?",
    prompts:[
      {q:"Something is hard, so I pray to Jehovah about it.", a:"wise"},
      {q:"I give up the first time something is hard.", a:"unwise"},
      {q:"I remember the good things Jehovah has done for me.", a:"wise"},
      {q:"I worry and worry about tomorrow.", a:"unwise"},
      {q:"I wait patiently and keep praying.", a:"wise"},
      {q:"I stop talking to Jehovah because I feel sad.", a:"unwise"}
    ]
  },
  {kind:"quiz", title:"Strong when you are young", done:"Doing hard things with Jehovah’s help makes you strong!",
    qs:[
      {q:"Lamentations 3:27 says it is good to carry a load when you are…", opts:[{t:"Young",a:true},{t:"Grown up only",a:false}]},
      {q:"When a young person keeps going through hard things, they learn to be…", opts:[{t:"Patient and strong",a:true},{t:"Grumpy all the time",a:false}]},
      {q:"Who helps you when something is hard?", opts:[{t:"Jehovah",a:true},{t:"Nobody",a:false}]}
    ]
  },
  {kind:"order", title:"New every morning",
    feed:"Lamentations 3:19-42",
    done:"Jehovah’s mercies are new every morning!",
    steps:[
      "Jeremiah feels sad and tired.",
      "He remembers Jehovah’s loyal love.",
      "Jehovah’s mercies are new every morning.",
      "Jeremiah decides to wait for Jehovah."
    ]
  },
  {kind:"trace", title:"Trace while you listen", stars:0,
    designs:[{name:"Coil",color:"#6f4b96",ghost:"#ddd0ee",d:"M 18.0 18.0 L 262.0 18.0 Q 282.0 18.0 282.0 38.0 L 282.0 380.0 Q 282.0 400.0 262.0 400.0 L 90.0 400.0 Q 70.0 400.0 70.0 380.0 L 70.0 90.0 Q 70.0 70.0 90.0 70.0 L 210.0 70.0 Q 230.0 70.0 230.0 90.0 L 230.0 328.0 Q 230.0 348.0 210.0 348.0 L 142.0 348.0 Q 122.0 348.0 122.0 328.0 L 122.0 142.0 Q 122.0 122.0 142.0 122.0 L 158.0 122.0 Q 178.0 122.0 178.0 142.0 L 178.0 296.0"},{name:"Snake",color:"#2a8aa0",ghost:"#c5e6ec",d:"M 18.0 18.0 L 18.0 378.0 Q 18.0 400.0 40.0 400.0 L 48.0 400.0 Q 70.0 400.0 70.0 378.0 L 70.0 40.0 Q 70.0 18.0 92.0 18.0 L 100.0 18.0 Q 122.0 18.0 122.0 40.0 L 122.0 378.0 Q 122.0 400.0 144.0 400.0 L 152.0 400.0 Q 174.0 400.0 174.0 378.0 L 174.0 40.0 Q 174.0 18.0 196.0 18.0 L 204.0 18.0 Q 226.0 18.0 226.0 40.0 L 226.0 378.0 Q 226.0 400.0 248.0 400.0 L 256.0 400.0 Q 278.0 400.0 278.0 378.0 L 278.0 18.0"},{name:"Waves",color:"#c45b8c",ghost:"#f3c4d8",d:"M 18.0 18.0 L 260.0 18.0 Q 282.0 18.0 282.0 40.0 L 282.0 50.0 Q 282.0 72.0 260.0 72.0 L 40.0 72.0 Q 18.0 72.0 18.0 94.0 L 18.0 104.0 Q 18.0 126.0 40.0 126.0 L 260.0 126.0 Q 282.0 126.0 282.0 148.0 L 282.0 158.0 Q 282.0 180.0 260.0 180.0 L 40.0 180.0 Q 18.0 180.0 18.0 202.0 L 18.0 212.0 Q 18.0 234.0 40.0 234.0 L 260.0 234.0 Q 282.0 234.0 282.0 256.0 L 282.0 266.0 Q 282.0 288.0 260.0 288.0 L 40.0 288.0 Q 18.0 288.0 18.0 310.0 L 18.0 320.0 Q 18.0 342.0 40.0 342.0 L 260.0 342.0 Q 282.0 342.0 282.0 364.0 L 282.0 374.0 Q 282.0 396.0 260.0 396.0 L 18.0 396.0"},{name:"Spiral",color:"#d45b7a",ghost:"#f4c9d4",d:"M 150.0 22.0 L 161.8 23.5 L 173.3 26.4 L 184.5 30.8 L 195.4 36.7 L 205.7 43.8 L 215.5 52.3 L 224.6 61.9 L 233.1 72.7 L 240.8 84.5 L 247.6 97.2 L 253.6 110.8 L 258.7 125.0 L 262.8 139.8 L 266.0 155.0 L 268.2 170.6 L 269.5 186.3 L 269.7 202.1 L 269.0 217.9 L 267.4 233.4 L 264.8 248.7 L 261.3 263.5 L 256.9 277.7 L 251.8 291.3 L 245.9 304.1 L 239.2 316.1 L 232.0 327.1 L 224.2 337.1 L 215.8 345.9 L 207.1 353.6 L 198.0 360.1 L 188.6 365.3 L 179.0 369.2 L 169.4 371.8 L 159.7 373.1 L 150.0 373.0 L 140.5 371.6 L 131.1 369.0 L 122.1 365.1 L 113.4 359.9 L 105.1 353.6 L 97.3 346.2 L 90.0 337.8 L 83.4 328.4 L 77.3 318.2 L 71.9 307.2 L 67.3 295.5 L 63.3 283.2 L 60.1 270.4 L 57.7 257.3 L 56.1 243.9 L 55.3 230.3 L 55.2 216.8 L 56.0 203.3 L 57.4 189.9 L 59.6 176.9 L 62.5 164.3 L 66.1 152.1 L 70.2 140.5 L 75.0 129.6 L 80.3 119.5 L 86.1 110.2 L 92.3 101.8 L 98.9 94.3 L 105.7 87.9 L 112.9 82.4 L 120.2 78.1 L 127.6 74.9 L 135.1 72.8 L 142.6 71.8 L 150.0 72.0 L 157.3 73.3 L 164.4 75.6 L 171.2 79.0 L 177.8 83.5 L 184.0 88.9 L 189.9 95.2 L 195.3 102.4 L 200.2 110.4 L 204.6 119.1 L 208.5 128.4 L 211.9 138.3 L 214.7 148.7 L 216.9 159.4 L 218.5 170.4 L 219.5 181.7 L 219.9 193.0 L 219.8 204.4 L 219.1 215.6 L 217.8 226.7 L 216.0 237.5 L 213.7 248.0 L 211.0 258.1 L 207.7 267.6 L 204.1 276.6 L 200.1 284.9 L 195.8 292.5 L 191.3 299.4 L 186.4 305.5 L 181.4 310.7 L 176.3 315.0 L 171.0 318.5 L 165.7 321.0 L 160.4 322.6 L 155.2 323.3 L 150.0 323.0 L 145.0 321.8 L 140.1 319.8 L 135.4 316.9 L 131.0 313.1 L 126.8 308.6 L 123.0 303.3 L 119.4 297.4 L 116.3 290.8 L 113.4 283.6 L 111.0 276.0 L 109.0 267.9 L 107.4 259.5 L 106.1 250.8 L 105.3 241.8 L 104.9 232.8 L 104.8 223.6 L 105.2 214.5 L 105.9 205.5 L 107.0 196.7 L 108.4 188.0 L 110.1 179.7 L 112.0 171.8 L 114.3 164.2 L 116.7 157.2 L 119.4 150.7 L 122.2 144.7 L 125.2 139.4 L 128.3 134.8 L 131.4 130.8 L 134.6 127.5 L 137.8 124.9 L 140.9 123.1 L 144.0 122.0 L 147.1 121.6 L 150.0 122.0"}]
  },
  {kind:"quiz", title:"Offering a tract", done:"A tract is a little gift of good news!",
    qs:[
      {q:"A tract is…", opts:[{t:"A little paper with good news from the Bible",a:true},{t:"A kind of train",a:false}]},
      {q:"Informal witnessing means talking about Jehovah…", opts:[{t:"With people we meet every day",a:true},{t:"Only at the door",a:false}]},
      {q:"How should we offer a tract?", opts:[{t:"With a smile and kind words",a:true},{t:"By throwing it and running away",a:false}]}
    ]
  },
  {kind:"quiz", title:"Older ones are a treasure", done:"Older brothers and sisters are a treasure!",
    qs:[
      {q:"Older brothers and sisters have loved Jehovah…", opts:[{t:"For a long time",a:true},{t:"Only since yesterday",a:false}]},
      {q:"What can older ones do for the congregation?", opts:[{t:"Pray, teach, and encourage us",a:true},{t:"Nothing at all",a:false}]},
      {q:"How can you show love to an older friend?", opts:[{t:"Say hello and listen to them",a:true},{t:"Run past them",a:false}]}
    ]
  },
  null,
  {kind:"quiz", title:"Helping caregivers", done:"A kind friend helps a caregiver not to give up.",
    qs:[
      {q:"A caregiver takes care of someone who is…", opts:[{t:"Sick or old",a:true},{t:"On a trip",a:false}]},
      {q:"Philippians 2:4 says to look out for…", opts:[{t:"Other people too, not just ourselves",a:true},{t:"Only ourselves",a:false}]},
      {q:"In the picture, what did the friends bring?", opts:[{t:"Snacks to share",a:true},{t:"A bicycle",a:false}]},
      {q:"How can you help a caregiver?", opts:[{t:"Visit, draw a card, or help with a chore",a:true},{t:"Make lots of noise",a:false}]}
    ]
  },
  {kind:"who", title:"Who is talking?",
    people:[
      {id:"gideon", name:"Gideon"},
      {id:"angel", name:"The angel"},
      {id:"soldier", name:"Enemy soldier"}
    ],
    prompts:[
      {q:"Jehovah is with you, you mighty warrior.", a:"angel"},
      {q:"Please give me a sign. Let the fleece be wet and the ground dry.", a:"gideon"},
      {q:"I dreamed that a round loaf of barley bread rolled into our camp!", a:"soldier"},
      {q:"Follow me, and do what I do when I blow my horn.", a:"gideon"},
      {q:"Jehovah is the one who will rule over you.", a:"gideon"}
    ]
  },
  {kind:"order", title:"Gideon trusts Jehovah",
    done:"Gideon was brave and careful, and Jehovah gave the victory.",
    feed:"Walk Courageously With God · chapter 18",
    steps:[
      "An angel tells Gideon that Jehovah is with him.",
      "Gideon puts a fleece on the ground, and Jehovah gives him a sign.",
      "Jehovah makes Gideon’s army small — just 300 men.",
      "The men blow horns, break jars, and hold up torches.",
      "The enemy runs away, and Gideon says Jehovah will rule."
    ]
  },
  {kind:"quiz", title:"Brave and careful", done:"You can be brave and careful, like Gideon!",
    qs:[
      {q:"Gideon was brave, and he was also…", opts:[{t:"Careful",a:true},{t:"Silly",a:false}]},
      {q:"Someone is upset with you. What would Gideon do?", opts:[{t:"Stay calm and speak kindly",a:true},{t:"Yell back louder",a:false}]},
      {q:"A friend wants you to do something wrong. What is brave?", opts:[{t:"Kindly say no",a:true},{t:"Just go along",a:false}]},
      {q:"What is careful?", opts:[{t:"Think first, and ask Mommy or Daddy",a:true},{t:"Jump in without thinking",a:false}]}
    ]
  },
  {kind:"search", title:"Word hunt while you listen",
    feed:"Slide across letters. Words from tonight’s meeting.",
    done:"You found them all. Jehovah helps people who are brave and careful!",
    words:["GIDEON", "FLEECE", "TORCH", "HORN", "JARS", "TRUST", "PRAY", "WAIT", "MERCY", "BRAVE", "CAREFUL", "JEHOVAH", "HELP", "KIND", "MORNING", "HOPE"],
    grid:[
      ["L", "U", "F", "E", "R", "A", "C", "H", "B", "K", "F", "S"],
      ["J", "A", "R", "S", "C", "P", "R", "A", "Y", "K", "N", "H"],
      ["L", "K", "O", "D", "D", "T", "R", "R", "L", "G", "A", "L"],
      ["D", "T", "S", "U", "R", "T", "R", "D", "N", "V", "R", "O"],
      ["D", "N", "I", "K", "B", "K", "L", "I", "O", "Y", "E", "F"],
      ["W", "U", "N", "W", "H", "C", "N", "H", "H", "O", "R", "N"],
      ["C", "C", "G", "C", "H", "R", "E", "B", "H", "E", "L", "P"],
      ["N", "A", "R", "T", "O", "J", "D", "N", "T", "S", "K", "P"],
      ["R", "O", "I", "M", "U", "B", "R", "A", "V", "E", "Y", "G"],
      ["T", "A", "O", "M", "E", "R", "C", "Y", "C", "M", "H", "I"],
      ["W", "U", "F", "O", "G", "M", "E", "C", "E", "E", "L", "F"],
      ["D", "G", "I", "D", "E", "O", "N", "H", "O", "P", "E", "C"]
    ]
  },
  null
];

/* WEEK PACK — buddy answers for this week’s material */
const BUDDY_FACTS = [
  {keys:["trial","give out","give up","hard","wait","patient"], ans:"When something is hard, we remember the good things Jehovah has done, trust that he will be with us tomorrow too, and wait patiently. While we wait, we keep praying."},
  {keys:["mercies","morning","new","loyal love"], ans:"Lamentations 3 says Jehovah’s mercies are new every morning. His loyal love never ends!"},
  {keys:["youth","young","yoke","load","gems"], ans:"Lamentations 3:27 says it is good to carry a load when you are young. Doing hard things with Jehovah’s help makes you strong and patient."},
  {keys:["reading","lamentations","jeremiah"], ans:"In Lamentations 3, Jeremiah felt sad. Then he remembered Jehovah’s loyal love, and he decided to wait for Jehovah."},
  {keys:["house","bible truth","love people","brochure"], ans:"House to house. They share one short Bible truth, like one from the back of the Love People brochure."},
  {keys:["tract","informal","offer"], ans:"Informal witnessing. While talking with someone they meet, they kindly offer a tract — a little paper with good news from the Bible."},
  {keys:["older","asset","treasure","grandma","grandpa","talk"], ans:"Older brothers and sisters are a treasure to the congregation. They have loved Jehovah for a long time, and they pray for us and encourage us."},
  {keys:["caregiver","care","sick","video","comfort"], ans:"A caregiver takes care of a family member who is sick or old. Friends can help by visiting, bringing a snack, or helping with chores."},
  {keys:["gideon","brave","careful","cautious","courage"], ans:"Gideon was brave and careful. He trusted Jehovah, and Jehovah helped just 300 men win against a huge army."},
  {keys:["fleece","wool","dew","sign"], ans:"Gideon put a fleece on the ground. One night Jehovah made it wet and the ground dry. The next night it was dry and the ground was wet. Jehovah was patient with him."},
  {keys:["300","army","water","drink"], ans:"Gideon started with 32,000 men. Jehovah made the army smaller and smaller until there were just 300 — so everyone would know Jehovah gave the victory."},
  {keys:["horn","torch","jar","night","sword"], ans:"In the dark, Gideon’s men blew horns, broke jars, and held up torches. They shouted, “The sword of Jehovah and of Gideon!” The enemy got confused and ran away."},
  {keys:["angel","warrior"], ans:"The angel told Gideon, “Jehovah is with you, you mighty warrior.”"},
  {keys:["dream","bread","barley","loaf"], ans:"An enemy soldier dreamed that a round loaf of barley bread rolled into their camp and knocked over a tent. It meant Gideon’s army would win."},
  {keys:["king","rule","humble"], ans:"The people wanted Gideon to be king, but he humbly said: “Jehovah is the one who will rule over you.”"},
  {keys:["song 158","158","late"], ans:"Song 158 is “It Will Not Be Late!” It is about waiting patiently for Jehovah."},
  {keys:["song 109","109","love intensely"], ans:"Song 109 is Love Intensely From the Heart."},
  {keys:["song 74","74","kingdom song"], ans:"Song 74 is the closing song — Join in the Kingdom Song!"},
  {keys:["bored","tired","long"], ans:"Meetings can feel long. Try this: answer the Check, then play the little game. I’m staying with you."},
  {keys:["who are you","your name","buddy"], ans:"I’m Brutus. I know this week’s meeting."},
  {keys:["hello","hi","hey"], ans:"Hi. Look at the purple Check card if you want a hint."}
];
