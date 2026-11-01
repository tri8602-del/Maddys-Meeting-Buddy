/* ============================================================
   SUNDAY WATCHTOWER week pack — Oct 26–Nov 1, 2026.
   The Watchtower (Study), August 2026, “Cherish ‘the Privilege of Fearlessly Rendering Sacred Service’” (pp. 20–25).
   Loaded by sunday/index.html. Paths here (wt, unit img, games/) are
   relative to THIS folder. See README "Weekly update".
   ============================================================ */
self.SUNDAY_WEEK=(function(){
const meta={
  id:'2026-11-01',                 // the Sunday date; Sunday progress is saved per id
  range:'Oct 26–Nov 1 · 2026',
  title:'Cherish “the Privilege of Fearlessly Rendering Sacred Service”',
  short:'Fearless Sacred Service',
  theme:'“He has raised up a horn of salvation . . . to grant us . . . the privilege of fearlessly rendering sacred service.” — Luke 1:69, 74',
  wt:'w_E_202608.pdf',             // Watchtower issue PDF in this folder (Page button)
  songOpen:62, songOpenTitle:'The New Song',
  songClose:159, songCloseTitle:'Give Jehovah Glory',
  about:'This week: Zechariah’s prophecy about baby John. Three things to cherish: the gift of salvation, the privilege of sacred service, and the responsibility to preach.'
};
// Paragraph number -> PDF page in meta.wt (article is pp. 20–25)
function wtPage(p){return p<=2?20:p<=5?21:p<=7?22:p<=12?23:p<=15?24:25}
const pTexts={
1:"“WHAT will this young child turn out to be?” (Luke 1:57-66) The neighbors and the relatives were curious about John, the son who was born miraculously to aged priest Zechariah and his elderly wife, Elizabeth, who had been barren. Jehovah used Zechariah to answer that question. He explained that the long-awaited Messiah would soon arrive and that John would prepare repentant people to recognize and follow that one. (Amos 3:7; Luke 1:67-79) But Zechariah did more than relate what his son, John, would do. As we will see in this article, Zechariah’s message was prophetic and it involves us today. From his message, we will learn about three things we should cherish: (1) the gift of salvation, (2) the privilege of sacred service, and (3) the responsibility to preach.",
2:"Read Luke 1:67-73. God had promised to give his people a wonderful gift: salvation. But salvation by whom? Zechariah said: “[Jehovah] has raised up a powerful savior for us in the house of David.” (Luke 1:69; see study note.) That “powerful savior” was to be the Messiah. The Jews of Zechariah’s day already expected the promised Messiah and knew that he would be a descendant of Abraham through the royal line of David. (Gen. 22:17, 18; Matt. 22:42) Why, then, did Jehovah move Zechariah to announce the coming of this “powerful savior”? Because the Messiah’s arrival was closer than ever! Within six months, a young woman named Mary would give birth to Jesus, who, as the angel Gabriel said, would be called “God’s Son” and would rule as King on “the throne of David his father.” (Luke 1:30-35) The “powerful savior” was raised up when Jesus got baptized at age 30. At that time, Jehovah anointed him with holy spirit as the promised Messiah. (Matt. 3:16, 17) An exciting development indeed!",
3:"The first-century Jews needed to be saved. But from whom or from what? Zechariah answers: “Salvation from our enemies and from the hand of all those hating us.” (Luke 1:71) Did this mean that Jesus would save the Jews from the oppressive Roman authorities? No. Rather, the Jews needed to be saved from the chief source of oppression, Satan. (Heb. 2:14, 15) Satan is responsible for causing mankind, including the ancient Jews, to become enslaved to sin and death. Additionally, the Jews were unable to keep the Mosaic Law perfectly. For that reason, they came under a curse from which they needed to be saved. (Rom. 3:20; Gal. 3:10, 13) Thus, they needed what Jehovah promised through Zechariah—“salvation . . . by forgiveness of their sins.”—Luke 1:77.",
4:"What enemies do we need to be saved from today? Like the Jews in Jesus’ day, we are enslaved to sin and death. (Rom. 5:12) In addition, Satan and the demons are sources of oppression. They try to deceive us, hoping to turn us away from true worship. They even influence individuals and organizations—some of whom are among “those hating us”—to oppose our worship. We need to be saved from such enemies.",
5:"How does our Savior rescue us from these enemies? Consider how Jesus delivers us from sin. During his earthly ministry, Jesus taught his followers how to worship Jehovah acceptably. Then he gave his life as a ransom, “so that everyone exercising faith in him might not be destroyed but have everlasting life.” (John 3:16; Matt. 20:28) We do our best to follow what Jesus taught about giving Jehovah acceptable worship. But we are still imperfect, so we ask Jehovah to forgive us when we fall short of his standards. Then on the basis of the ransom, Jehovah kindly accepts our worship. (1 John 2:1, 2) In these ways, our Savior Jesus delivers us from the condemnation of sin.",
6:"How will Jesus save us completely from sin and death, from Satan and his demons, and from “those hating us”? Since 1914, Jesus has been ruling in heaven on “the throne of David his father.” (Luke 1:32, 33) As King of God’s Kingdom, he and his heavenly corulers along with his holy angels will wipe out all of God’s earthly enemies at Armageddon. Then during the Thousand Year Reign, Jesus will raise the dead and, together with his 144,000 corulers, gradually restore mankind to perfection. (John 5:28; Rev. 22:1, 2) By the end of the thousand years, they will have done away with inherited sin and death. (1 Cor. 15:26, 55-57) They will then crush out of existence Satan, his demons, and all humans who side with them during the final test. (Rev. 20:7-10) Loyal worshippers will finally enjoy a relationship with Jehovah that is unhindered by sin, death, or any opposer! We will forever praise our God and cherish “his indescribable free gift,” which includes our salvation through Christ Jesus.—2 Cor. 9:15.",
7:"Read Luke 1:74, 75. Jehovah’s gift of the ransom grants us something special. Zechariah called it “the privilege of fearlessly rendering sacred service.” Our “sacred service” to Jehovah includes all aspects of true worship. We render Jehovah sacred service when we preach, pray, study his Word, and worship at our meetings, assemblies, and conventions. Our sacred service also includes other activities directly related to our worship, such as serving at Bethel and building and maintaining Kingdom Halls and Assembly Halls.",
8:"In what sense do we render Jehovah sacred service “fearlessly”? First, we no longer need to fear death. Because we have the firm hope of everlasting life, we can focus on pleasing Jehovah instead of on trying to squeeze all we can out of a short life in this system. Even when persecutors threaten us with death, we refuse to give in to fear. We confidently maintain our integrity because we know that if we were to die, Jesus would bring us back to life. (John 6:39, 40) Second, we don’t need to fear that Jehovah will reject us because of our inherited sinfulness. We enjoy Jehovah’s love and approval, confident in his merciful provision to forgive our sins.—1 John 4:9, 10.",
9:"Some Christians, however, may struggle to believe that Jehovah accepts their worship. They might feel unworthy of Jehovah’s approval, perhaps because of a traumatic experience they had in the past. Or they may be tormented by guilt over sins they committed long ago, even though they sought Jehovah’s forgiveness and the help of the elders. If this is your struggle, what can you do?",
10:"Consider an illustration. A man breaks his leg and visits a doctor. After the doctor sets the broken leg, he may prescribe physical therapy to help the patient restore strength and mobility to the leg and eventually walk on it again. What if the injured person is afraid that his leg is too damaged ever to regain full mobility? He needs to trust the doctor and patiently stick to the prescribed therapy. In time his leg may heal, allowing him to walk or even to run.",
11:"In a similar way, if you feel badly broken by sin and are suffering emotional pain, trust in Jehovah. Know that in his undeserved kindness and mercy, Jehovah applies to you the spiritual healing power of the ransom. (John 1:16, 17; Rom. 3:23, 24; 1 John 3:19, 20) Apply the “prescribed therapy”—prayer, study, and spiritual activities. (Ps. 1:2; 1 Thess. 5:17; Heb. 10:25) Like physical healing, spiritual healing may take time and its progress may be imperceptible at first. But you can trust the spiritual healing process. So never give up on Jehovah or on yourself. Keep up your good spiritual routine. (Phil. 3:16) And thank Jehovah daily for the strength he gives you to continue worshipping him faithfully. We can all be grateful to God and Christ for the precious privilege of fearlessly rendering sacred service!",
12:"Read Luke 1:76-79. Zechariah next addressed his infant son, saying: “You will go ahead of Jehovah to prepare his ways.” How did John the Baptist accomplish that? As an adult, he became a zealous preacher. He urged the Jews to repent of their sins, get baptized, and accept the coming Messiah. After he baptized Jesus, John publicly identified him as Jehovah’s representative, saying: “See, the Lamb of God who takes away the sin of the world!” John then encouraged his own disciples to follow Jesus, the Messiah.—John 1:29, 34-36, 40, 41.",
13:"While John clearly identified Jesus as the Messiah, more witnesses were needed. Why? According to Zechariah, the coming of the Messiah would be “a daybreak,” the dawn of a new era, an extraordinary event! Surely, the news about this great gift deserved the widest possible publicity—far beyond what one man, such as John, could provide. Who, in addition to John, would help broadcast this important message of salvation?",
14:"Jesus did a great deal of witnessing. He fulfilled Zechariah’s words by bringing “light to those sitting in darkness and death’s shadow.” Jesus had tremendous compassion for the downtrodden common people. He shared with them the comforting, enlightening message of “the year of Jehovah’s goodwill.” (Read Isaiah 61:1, 2; Luke 4:16-21) He zealously proclaimed: “The Kingdom of the heavens has drawn near.” Still, he knew that many more proclaimers would be needed. So he trained his disciples to preach that same message.—Matt. 4:16, 17; 10:7; 28:19, 20.",
15:"As Christ’s followers today, we cherish the responsibility we have to continue spreading Jehovah’s message of salvation. In fact, preaching about Jesus’ ransom and God’s Kingdom is now more important than ever. Why? Consider what lies ahead. Mankind will soon face a period of “great tribulation such as has not occurred since the world’s beginning.” (Matt. 24:21) During that time, more may respond to the good news of salvation and take sides with Jehovah because they recall what we preached. Then Jesus will lead his corulers and the angels in the fight against all human opposers and bring true worshippers into God’s righteous new world. (Matt. 25:34; Rev. 16:16; 19:19) How vital it is, then, that we preach the good news now!—Matt. 24:14; Mark 13:10.",
16:"Zechariah’s words found at Luke 1:68-79 remind us of three things that we cherish: Jehovah’s marvelous gift of salvation, the privilege of serving him fearlessly, and the responsibility to preach his comforting message. Have you accepted Jehovah’s gift by putting faith in Christ’s ransom and by dedicating yourself to Jehovah? Do you treasure your privilege to serve him? If so, zealously embrace your responsibility to preach “the year of Jehovah’s goodwill.” Share the good news of Jehovah’s coming “day of vengeance,” the day when God’s Kingdom will eliminate his and our enemies and usher in the earthly Paradise. Invite all who love God to join us in “fearlessly rendering sacred service to him with loyalty and righteousness before him all our days.”—Luke 1:74, 75."
};
const easy={
1:"When baby John was born, people wondered what he would become. His father, Zechariah, said John would get people ready for the Messiah. Zechariah’s words teach us three things to cherish: salvation, sacred service, and preaching.",
2:"Jehovah promised a gift: salvation. The “powerful savior” is Jesus, the Messiah from King David’s family. Soon Mary would give birth to Jesus.",
3:"The Jews needed to be saved — not from the Romans, but from Satan, sin, and death. They needed Jehovah to forgive their sins.",
4:"We need to be saved too. We are imperfect, and Satan and the demons try to trick us and turn us away from Jehovah.",
5:"Jesus taught us how to worship Jehovah. Then he gave his life as a ransom. When we make mistakes and say sorry, Jehovah forgives us because of the ransom.",
6:"Jesus is King in heaven now. Soon he will get rid of Jehovah’s enemies, bring the dead back to life, and make people perfect. No more sin or death!",
7:"Sacred service is everything we do to worship Jehovah: preaching, praying, studying, going to meetings, and even helping build Kingdom Halls.",
8:"We don’t have to be afraid of death, because Jesus will bring Jehovah’s friends back to life. And we don’t have to be afraid that Jehovah won’t love us, because he forgives us.",
9:"Some people feel that Jehovah could never accept them because of sad things that happened or mistakes they made long ago.",
10:"If a man breaks his leg, the doctor fixes it. Then he does exercises every day. It takes time, but his leg gets strong again.",
11:"If we feel sad or broken inside, we trust Jehovah. We keep praying, studying, and going to meetings. Healing takes time, so we never give up.",
12:"John the Baptist grew up and preached. He pointed to Jesus and said: “See, the Lamb of God who takes away the sin of the world!”",
13:"The Messiah coming was like the sun rising — a brand-new day! That news was too big for just one man to tell everyone.",
14:"Jesus preached a lot and was kind to people who were sad. He trained his disciples to preach the same good news.",
15:"Preaching is more important than ever, because the great tribulation is coming soon. People may remember what we told them and choose Jehovah.",
16:"Let’s cherish Jehovah’s gift of salvation, enjoy serving him without fear, and preach the good news to everyone we can!"
};
// Questions are keyed by the last paragraph of each printed question; 19 is the review (sunday/index.html uses questions[19] for the review unit).
const questions={
1:"What is Zechariah’s prophecy about?",
2:"(a) According to Luke 1:67-73, what gift is promised to God’s people? (b) Who is the “powerful savior” mentioned at Luke 1:69?",
3:"From whom or from what did first-century Jews need to be saved?",
4:"From whom and from what do we need to be saved today?",
5:"How does Jesus deliver us from the condemnation of sin?",
6:"What will Jesus accomplish as King on “the throne of David”? (See also picture.)",
7:"According to Luke 1:74, 75, what privilege does Jehovah grant his people?",
8:"What do we not need to fear?",
9:"What struggle do some Christians have?",
11:"What can we do if we feel that we are badly broken and are suffering emotional pain? Illustrate.",
12:"How did John the Baptist prepare the ways of Jehovah? (Luke 1:76-79)",
13:"How was the coming of the Messiah “a daybreak” for God’s people?",
14:"What important work did Jesus and his disciples do? (Isaiah 61:1, 2)",
15:"Why is preaching today more important than ever?",
16:"What are you determined to do? (See also pictures.)",
19:"Based on the prophecy found at Luke 1:68-79, what precious gift has Jehovah given us? What privilege does Jesus’ ransom make possible? What responsibility do we have?"
};
const units=[
{id:'u1',game:'w-01',pts:7,ps:[1],verse:"“He has raised up a horn of salvation . . . to grant us . . . the privilege of fearlessly rendering sacred service.” — Luke 1:69, 74",activity:{type:'iframe',prompt:"Three things to cherish."}},
{id:'u2',game:'w-02',pts:7,ps:[2],verse:"“He has raised up a powerful savior for us in the house of David his servant.” — Luke 1:69",activity:{type:'iframe',prompt:"Jesus is the powerful savior."}},
{id:'u3',game:'w-03',pts:6,ps:[3],activity:{type:'iframe',prompt:"Saved from what?"}},
{id:'u4',game:'w-04',pts:6,ps:[4],activity:{type:'iframe',prompt:"We need to be saved too."}},
{id:'u5',game:'w-05',pts:7,ps:[5],verse:"“God loved the world so much that he gave his only-begotten Son.” — John 3:16",activity:{type:'iframe',prompt:"The ransom saves us."}},
{id:'u6',game:'w-06',pts:7,ps:[6],img:'wt-pages/p6.jpg',cap:"Jehovah’s gift of salvation through Jesus Christ",activity:{type:'iframe',prompt:"King Jesus will fix everything."}},
{id:'u7',game:'w-07',pts:6,ps:[7],activity:{type:'iframe',prompt:"Sacred service is a privilege."}},
{id:'u8',game:'w-08',pts:6,ps:[8],activity:{type:'iframe',prompt:"No need to be afraid."}},
{id:'u9',game:'w-09',pts:5,ps:[9],activity:{type:'iframe',prompt:"Some feel unworthy."}},
{id:'u10',game:'w-10',pts:7,ps:[10, 11],activity:{type:'iframe',prompt:"Healing takes time."}},
{id:'u11',game:'w-11',pts:7,ps:[12],verse:"“See, the Lamb of God who takes away the sin of the world!” — John 1:29",activity:{type:'iframe',prompt:"John pointed to Jesus."}},
{id:'u12',game:'w-12',pts:5,ps:[13],activity:{type:'iframe',prompt:"A brand-new day!"}},
{id:'u13',game:'w-13',pts:6,ps:[14],activity:{type:'iframe',prompt:"Jesus trained preachers."}},
{id:'u14',game:'w-14',pts:6,ps:[15],activity:{type:'iframe',prompt:"Preaching is urgent!"}},
{id:'u15',game:'w-15',pts:7,ps:[16],img:'wt-pages/p16.jpg',cap:"If we accept God’s gift and cherish our privilege, we will embrace our responsibility to preach",activity:{type:'iframe',prompt:"What will you do?"}},
{id:'u16',game:'w-16',pts:4,ps:[16],review:1,activity:{type:'iframe',prompt:"Tap a card, then tap the question it answers."}}
];
return {meta,wtPage,pTexts,easy,questions,units};
})();
