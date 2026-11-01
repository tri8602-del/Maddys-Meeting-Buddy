/* ============================================================
   SUNDAY WATCHTOWER week pack — Nov 2–8, 2026.
   The Watchtower (Study), September 2026, “Trust In Jehovah for Protection” (pp. 2–7).
   Loaded by sunday/index.html. Paths here (wt, unit img, games/) are
   relative to THIS folder. See README "Weekly update".
   ============================================================ */
self.SUNDAY_WEEK=(function(){
const meta={
  id:'2026-11-08',                 // the Sunday date; Sunday progress is saved per id
  range:'Nov 2–8 · 2026',
  title:'Trust In Jehovah for Protection',
  short:'Trust In Jehovah',
  theme:'“You said: ‘Jehovah is my refuge.’” — Psalm 91:9',
  wt:'w_E_202609.pdf',             // Watchtower issue PDF in this folder (Page button)
  songOpen:3, songOpenTitle:'Our Strength, Our Hope, Our Confidence',
  songClose:8, songCloseTitle:'Jehovah Is Our Refuge',
  about:'This week: Psalm 91. Jehovah is our refuge. He protects us now, and he will protect us at Armageddon. Jesus, Satan and the temple, angels, holy spirit.'
};
// Paragraph number -> PDF page in meta.wt (article is pp. 2–7)
function wtPage(p){return p<=3?2:p<=7?3:p<=13?4:p<=15?5:p<=18?6:7}
const pTexts={
1:"WE ARE living in the last of the last days. Earthshaking events will soon occur. Jehovah will put into the hearts of the nations “his thought”—that they give “their kingdom to the wild beast,” the United Nations. (Rev. 17:17) Then that greatly empowered beast, along with the full cooperation of all political powers, will remove the world’s false religious organizations once and for all. (Rev. 17:16) That event will mark the start of the great tribulation. Then what?",
2:"Further climactic events will follow. The nations of this world will launch a coordinated, all-out attack on Jehovah’s people. (Ezek. 38:14-16) Why? The book Pure Worship of Jehovah—Restored At Last! explains: “Egged on by Satan, the nations will try to efface true worshippers—and along with them pure worship—from the earth.” What will follow this will be the most momentous event of all—the war of Armageddon. Jesus will lead his heavenly executional forces, including his 144,000 corulers, in removing this wicked world and in delivering us into a righteous new world.—Rev. 16:14-16; 19:11-21.",
3:"Should we fear the coming execution of divine judgment on this wicked world? No! Why not? Because Jehovah promises to protect us. He had this promise recorded in his Word: “A thousand will fall at your side and ten thousand at your right hand, but to you it will not come near.” (Ps. 91:7) Let us examine Psalm 91 and answer the following questions: What kind of protection does this psalm promise? How does Jehovah protect us now? How will he protect us in the future? But first, let us get an overview of Psalm 91.",
4:"The basic message of Psalm 91 can be summed up in a few words: Trust in God’s protection. From the opening two verses, we are assured that Jehovah will protect those who put their trust in him. (Read Psalm 91:1, 2.) What could make us feel more secure than knowing that we are under the protective shadow and wings of the Most High, the Almighty? (Ruth 2:12; Ps. 17:8) The nouns “refuge” and “stronghold” remind us of the protection that a walled city provided in Bible times. The city’s inhabitants were protected within its walls, and those in outlying areas could run into the city to be safe from enemies. In the verses that follow, the psalmist uses vivid imagery to assure us that Jehovah can protect His people no matter what dangers they may face.—Ps. 91:3-13.",
5:"In the closing verses of Psalm 91, we find the strongest assurance of all: In a dramatic shift, the psalmist goes from words about Jehovah’s protective care to words from Jehovah himself. Jehovah makes a promise—or guarantee—to his worshippers. (Read Psalm 91:14-16.) Note the words “I will” in these verses. Jehovah promises to protect his people because they trust in him, acknowledge his name, and call on him. We can have complete confidence in the Fulfiller of promises. (Josh. 23:14) His protection is not a mere possibility or probability; it is an absolute certainty!—Num. 23:19.",
6:"Jehovah inspired the psalmist to record the words found in Psalm 91 for our benefit. (Rom. 15:4) We echo the psalmist’s confidence and say to Jehovah: “You are my refuge and my stronghold.” (Ps. 91:2) But what kind of protection can we look to Jehovah to provide?",
7:"As our publications have explained, Psalm 91 is a promise of spiritual security, or protection. We can be sure that Jehovah will always provide what we need so that we can protect ourselves from spiritual dangers and safeguard our precious friendship with him. But does this psalm promise only spiritual protection? No. This psalm is also a promise that Jehovah will protect his people as a group from physical and emotional harm at the hands of their enemies. Why can we say that Psalm 91 also applies to physical and emotional protection?",
8:"Consider how Jesus responded when Satan tempted him and quoted the words found in Psalm 91. (Read Matthew 4:5-7.) Referring to the words of Psalm 91:11, 12 as a promise of physical protection, Satan tempted Jesus to jump off the temple battlement to see if angels would protect him from harm. How did Jesus respond? He did not say: ‘You are mistaken, Satan! That psalm does not promise physical protection.’ Rather, Jesus replied: “You must not put Jehovah your God to the test.” What can we learn from Jesus’ response?",
9:"Jesus was fully aware that his Father had at times used angels to protect His people from physical harm at the hands of their enemies. (2 Ki. 6:15-17; 19:34, 35; Dan. 3:19, 20, 26-28; 6:16-22) But Jesus refused to test his Father by expecting angels to protect him from physical harm if he behaved recklessly. So Satan misused Psalm 91, not by referring to it as a promise of physical protection, but by using it to justify putting Jehovah to the test. Based on Jesus’ response to Satan’s temptation, we may conclude that Psalm 91 is a promise of complete protection: spiritual as well as physical and emotional protection.",
10:"The inspired words found in Psalm 91 fill us with confidence. We are convinced that Jehovah is the Protector of all those who trust in him as their refuge and stronghold. So we do not need to live in fear of the earthshaking events just ahead. Let us take a closer look at how Jehovah protects us now and how he will protect us in the future.",
11:"Jehovah protects us spiritually. This means that he gives us the help we need to combat spiritual dangers—influences that could threaten our relationship with him. Consider, for example, our ongoing battle against our sinful condition. Jehovah fully understands the powerful grip that sin has over us. (Rom. 6:16; 7:21-23) Let us examine some of the ways that he helps us in this fight.",
12:"His Word. Jehovah’s Word not only warns us about sinful desires but also tells us how to win the fight against them. For instance, note Jesus’ words found at Matthew 5:28, 29. (Read.) Jesus is talking about a man “who keeps on looking at a woman so as to have a passion for her.” Such a man, Jesus says, “has already committed adultery with her in his heart.” What is the lesson for us?",
13:"If we continue looking at immoral images, we will arouse passion in our heart. And when passion meets opportunity, the likely result is sexual immorality. (Jas. 1:14, 15) To combat such wrong desires, we need to take strong measures. Jesus gives us what one Bible commentator refers to as “the surgical cure.” We need to cut passion-arousing images out of our lives as if they were a cancerous tumor. (Col. 3:5) When we apply that counsel, we safeguard our friendship with Jehovah.",
14:"His holy spirit. Jehovah also uses his spirit to help us in our fight against our sinful flesh. If we keep praying for holy spirit, he will give it to us. (Luke 11:9-13) How can holy spirit protect us? The apostle Paul says: “Keep walking by spirit and you will carry out no fleshly desire at all.” (Gal. 5:16) The study note on this verse explains: “A person who walks by spirit seeks the direction of God’s spirit and allows it to influence his thoughts and actions. Though he may have sinful desires, he rejects them immediately, refusing to entertain them.” Jehovah’s spirit does not eliminate wrong desires. But it can help strengthen our resolve to do what is right and to avoid acting on them. And that resolve will help protect us spiritually.",
15:"His organization. Through his organization, Jehovah provides timely publications to safeguard us spiritually. Consider: Because of our imperfect, sinful nature, we may at times struggle with negative thoughts and feelings. For example, we may fight unrelenting guilt, extreme insecurity, or undue anxiety. Satan, “the Tempter,” exploits such feelings, trying to get us to give up. (Matt. 4:3; 6:13) God’s organization has provided us with spiritual food designed to assure us of Jehovah’s forgiveness, to convince us of our worth in his eyes, and to strengthen our confidence in his promise to care for our needs. (Ps. 86:5; Matt. 10:29-31; Luke 12:28; Heb. 13:5) Can you recall reading something in one of our publications that touched your heart and caused you to think, ‘That was written for me’? Remember that Jehovah provides such timely information that can protect us spiritually.",
16:"Jehovah protects his people as a group from physical harm at the hands of their enemies. However, Jehovah has at times allowed individual worshippers to face persecution and even death at the hands of opposers in order to prove Satan a liar. (Rev. 2:10; 6:9) But Satan is not content with these relatively few deaths. Enraged, he would like to see opposers exterminate all of God’s faithful people. (Matt. 24:9; Rev. 12:9-12) However, that will never happen! We can be sure that Jehovah is using his angels to protect his people as a group so that pure worship continues uninterrupted on earth.—Heb. 1:7, 14.",
17:"Jehovah does not protect us as individuals from all physical harm. When we live by his principles and standards, we are protected from many practices and situations that could hurt us physically. (Prov. 14:29, 30; 22:3; 2 Cor. 7:1) Still, we do not expect him to protect us from all physical harm at this time. If He were to do that, Satan would surely promote the lie that we serve Jehovah only because of the protection that He provides. (Job 1:10, 11) We understand that because of the great issue involving the sanctification of his holy name, Jehovah has “tolerated with much patience” wicked people who oppose and mistreat his worshippers. (Rom. 9:22) However, his toleration of such injustice is nearing its end. Meanwhile, he will help us to endure whatever trials we face so that we may protect our precious friendship with him.—1 Cor. 10:13; 1 Pet. 5:10.",
18:"During the great tribulation, Jehovah will continue to protect his people spiritually. What about physical protection? When the nations launch an all-out assault on his people, Jehovah will not allow his worshippers to be exterminated as a group. (Ezek. 38:1, 2, 10-16) This will lead to the war of Armageddon when Jehovah will unleash his executional forces—Jesus Christ and his heavenly armies. They will take action against God’s enemies. (Rev. 17:12-14; 19:11, 14, 15) How will Jehovah protect his people during Armageddon?",
19:"We do not need to fear the coming destruction of this wicked world in the war of Armageddon. Why not? We trust in Jehovah as our refuge and our stronghold. So we can be absolutely sure of this: When Jesus and his heavenly armies execute divine judgment at Armageddon, not one of God’s enemies will be left standing. (Jer. 25:33; Zech. 14:12) But during that war, not one of God’s precious sheep will be killed at the hands of his enemies—human or demonic.—Luke 21:28; 2 Pet. 2:9.",
20:"During the war of Armageddon, the psalmist’s inspired words may literally prove true: “A thousand will fall at your side and ten thousand at your right hand, but to you it will not come near. You will only see it with your eyes as you witness the punishment of the wicked. Because you said: ‘Jehovah is my refuge,’ you have made the Most High your dwelling.” (Ps. 91:7-9) Once Armageddon begins, we can expect that Jehovah will provide complete physical, emotional, and spiritual protection for his people not just as a group but also as individuals. Because you say: “Jehovah is my refuge,” Jehovah promises: “To you it will not come near.” Let us, then, face the future with confidence, knowing that we can fully trust in Jehovah for protection."
};
const easy={
1:"We live in the last of the last days. Soon the nations will get rid of false religion. That starts the great tribulation.",
2:"Then the nations will try to attack Jehovah’s people. After that comes Armageddon. Jesus and his armies will clean up the earth and bring us into a new world.",
3:"Should we be scared? No! Jehovah promises to protect us. We will look at Psalm 91 to learn how he protects us now and how he will protect us later.",
4:"Psalm 91 says: Trust in God’s protection. Jehovah is like a strong city with walls, or a bird keeping its babies safe under its wings.",
5:"At the end of Psalm 91, Jehovah himself speaks. He says, “I will” protect you. Jehovah always keeps his promises. That is for sure!",
6:"Jehovah put Psalm 91 in the Bible for us. We can say to him, “You are my refuge.”",
7:"Psalm 91 means Jehovah keeps our friendship with him safe. It also means he protects his people as a group from enemies who want to hurt us.",
8:"Satan quoted Psalm 91 to Jesus. He told Jesus to jump off the temple so angels would catch him. Jesus said, “You must not put Jehovah your God to the test.”",
9:"Jesus knew Jehovah sometimes used angels to protect his people, like Daniel in the lions’ pit. But Jesus would not do something dangerous just to test his Father.",
10:"Psalm 91 makes us feel brave. Jehovah protects everyone who trusts in him. We do not have to be afraid of what is coming.",
11:"Jehovah protects us spiritually. That means he helps us stay his friend, even though we are imperfect and sometimes want to do wrong things.",
12:"Jehovah’s Word helps us. Jesus taught that if we keep looking at bad things, our heart starts to want them.",
13:"So we need to be strong and quickly cut out bad pictures and shows, like a doctor cutting out something harmful. That keeps us close to Jehovah.",
14:"Jehovah gives holy spirit to everyone who keeps asking for it. The spirit helps us say no to wrong things right away.",
15:"Jehovah’s organization gives us books, videos, and magazines just when we need them. They remind us that Jehovah loves us and will take care of us.",
16:"Some faithful ones have been hurt by enemies. But Jehovah uses his angels to protect his people as a group. True worship will never stop on earth!",
17:"Right now, Jehovah does not stop every bad thing from happening to us. But obeying him keeps us safe from many dangers, and he helps us endure hard times.",
18:"During the great tribulation, the nations will attack Jehovah’s people. Jehovah will not let them win. Then Jesus and his heavenly armies will fight at Armageddon.",
19:"We do not need to be afraid of Armageddon. Jehovah’s enemies will lose, but not one of Jehovah’s “sheep” will be hurt by them.",
20:"Psalm 91 says: “A thousand will fall at your side . . . but to you it will not come near.” We can trust Jehovah to protect us!"
};
// Questions are keyed by the last paragraph of each printed question; 19 is the review (sunday/index.html uses questions[19] for the review unit).
const questions={
2:"What earthshaking events will soon occur?",
3:"What will we consider in this article?",
4:"How do the opening words of Psalm 91 assure us of Jehovah’s protection? (Psalm 91:1, 2)",
6:"Psalm 91 ends with what promise, and what confidence does this give us? (Psalm 91:14-16)",
7:"What kind of protection does Psalm 91 promise?",
9:"How did Jesus respond to one of Satan’s temptations, and what can we learn from his response? (Matthew 4:5-7)",
10:"What confidence do we have?",
11:"How is Jehovah protecting us spiritually?",
13:"How can we win the fight against sinful desires? (Matthew 5:28, 29)",
14:"How can holy spirit help protect us?",
15:"How has Jehovah’s organization safeguarded us spiritually? (See also pictures.)",
16:"What trials has Jehovah allowed some of his worshippers to face, and of what can we be sure?",
17:"What reason do we have not to expect that Jehovah will protect us from all physical harm at this time?",
18:"How will Jehovah protect us in the future?",
19:"How would you answer? What kind of protection does Psalm 91 promise? How is Jehovah protecting us now? How will Jehovah protect us in the future?",
20:"Why do we not need to fear the coming execution of divine judgment at Armageddon? (See also picture.)"
};
const units=[
{id:'u1',game:'w-01',pts:7,ps:[1, 2],verse:"“You said: ‘Jehovah is my refuge.’” — Psalm 91:9",activity:{type:'iframe',prompt:"Big events are coming soon."}},
{id:'u2',game:'w-02',pts:5,ps:[3],activity:{type:'iframe',prompt:"Jehovah promises to protect us."}},
{id:'u3',game:'w-03',pts:7,ps:[4],verse:"“I will say to Jehovah: ‘You are my refuge and my stronghold, my God in whom I trust.’” — Psalm 91:2",activity:{type:'iframe',prompt:"Jehovah is like a safe, strong city."}},
{id:'u4',game:'w-04',pts:7,ps:[5, 6],verse:"“He will call on me, and I will answer him.” — Psalm 91:15",activity:{type:'iframe',prompt:"Jehovah says, “I will!”"}},
{id:'u5',game:'w-05',pts:6,ps:[7],activity:{type:'iframe',prompt:"What kind of protection does Psalm 91 promise?"}},
{id:'u6',game:'w-06',pts:7,ps:[8, 9],verse:"“You must not put Jehovah your God to the test.” — Matthew 4:7",activity:{type:'iframe',prompt:"Jesus would not test Jehovah."}},
{id:'u7',game:'w-07',pts:5,ps:[10],activity:{type:'iframe',prompt:"We don’t have to be afraid."}},
{id:'u8',game:'w-08',pts:6,ps:[11],activity:{type:'iframe',prompt:"Jehovah protects us spiritually."}},
{id:'u9',game:'w-09',pts:7,ps:[12, 13],activity:{type:'iframe',prompt:"Jehovah’s Word helps us say no."}},
{id:'u10',game:'w-10',pts:6,ps:[14],verse:"“Keep walking by spirit and you will carry out no fleshly desire at all.” — Galatians 5:16",activity:{type:'iframe',prompt:"Holy spirit makes us strong."}},
{id:'u11',game:'w-11',pts:7,ps:[15],img:'wt-pages/p15.jpg',cap:"Through his organization, Jehovah provides timely publications to protect us spiritually",activity:{type:'iframe',prompt:"Spiritual food, right on time!"}},
{id:'u12',game:'w-12',pts:6,ps:[16],verse:"“Are they not all spirits for sacred service, sent out to minister?” — Hebrews 1:14",activity:{type:'iframe',prompt:"Angels protect Jehovah’s people."}},
{id:'u13',game:'w-13',pts:6,ps:[17],activity:{type:'iframe',prompt:"Jehovah helps us endure."}},
{id:'u14',game:'w-14',pts:6,ps:[18],activity:{type:'iframe',prompt:"Jehovah will protect us in the future."}},
{id:'u15',game:'w-15',pts:7,ps:[19, 20],img:'wt-pages/p19.jpg',cap:"During Armageddon, we will be protected from physical and emotional harm",verse:"“A thousand will fall at your side and ten thousand at your right hand, but to you it will not come near.” — Psalm 91:7",activity:{type:'iframe',prompt:"“To you it will not come near.”"}},
{id:'u16',game:'w-16',pts:4,ps:[20],review:1,activity:{type:'iframe',prompt:"Tap a card, then tap the question it answers."}}
];
return {meta,wtPage,pTexts,easy,questions,units};
})();
