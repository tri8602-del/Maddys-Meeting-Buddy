/* ============================================================
   SUNDAY WATCHTOWER week pack — Nov 16–22, 2026.
   The Watchtower (Study), September 2026, “Sharing the Good News in ‘All the Languages of the Nations’” (pp. 14–19).
   Loaded by sunday/index.html. Paths here (wt, unit img, games/) are
   relative to THIS folder. See README "Weekly update".
   ============================================================ */
self.SUNDAY_WEEK=(function(){
const meta={
  id:'2026-11-22',                 // the Sunday date; Sunday progress is saved per id
  range:'Nov 16–22 · 2026',
  title:'Sharing the Good News in “All the Languages of the Nations”',
  short:'All the Languages',
  theme:'“Ten men out of all the languages of the nations will take . . . hold of the robe of a Jew.” — Zechariah 8:23',
  wt:'w_E_202609.pdf',             // Watchtower issue PDF in this folder (Page button)
  songOpen:84, songOpenTitle:'Reaching Out',
  songClose:57, songCloseTitle:'Preaching to All Sorts of People',
  about:'This week: the good news in every language. Zechariah said people from all the languages of the nations would want to go with Jehovah’s people. We can help by sharing the Bible’s message in a language someone understands.'
};
// Paragraph number -> PDF page in meta.wt (article is pp. 14–19)
function wtPage(p){return p<=2?14:p<=6?15:p<=8?16:p<=11?17:p<=15?18:19}
const pTexts={
1:"JEHOVAH frustrated the efforts of the rebellious builders of the Tower of Babel by confusing their language. As a result, the human family was fragmented into language groups and scattered throughout the earth. (Gen. 11:6-9) But it is Jehovah’s declared purpose to unite “a great crowd . . . out of all nations and tribes and peoples and languages” and lead them through the great tribulation and into the new world. (Rev. 7:9, ftn., 10, 14) This great crowd can call on Jehovah’s name during the great tribulation because the Kingdom message has reached them in a language they understand. (Read Romans 10:13, 14.) What a privilege we have to share in that lifesaving work!",
2:"Centuries before the apostle John wrote the book of Revelation, Jehovah inspired the prophet Zechariah to foretell that “many nations [would] join themselves to Jehovah . . . and [would] become [His] people.” (Zech. 2:11) Later in his prophetic book, Zechariah wrote: “This is what Jehovah of armies says, ‘In those days ten men out of all the languages of the nations will take . . . firm hold of the robe of a Jew, saying: “We want to go with you, for we have heard that God is with you people.”’” (Zech. 8:23) This exciting prophecy is being fulfilled in our day. Let us see how each of us can have a part in its fulfillment.",
3:"The “Jew” in Zechariah’s prophecy represents those whom God has anointed with holy spirit. They are also known as “the Israel of God.” (Gal. 6:16) These have “the heavenly calling.” (Heb. 3:1) The “ten men” represent humble ones who hope to live forever in Paradise on earth. They come from all linguistic and national backgrounds.",
4:"When Christ appointed “the faithful and discreet slave” in 1919, those making up that slave recognized that their commission was international in scope, one that would involve translating the Bible’s message into numerous languages. (Matt. 24:45) The Bible Students had already been presenting the “Photo-Drama of Creation” to international audiences, but the faithful slave saw the need to do more. For example, the Bible study aid entitled The Harp of God, released in 1921, was eventually translated into 36 languages. In 1935 the “great crowd” was clearly identified, revealing the enormous scope of the work. Thus, during the first few decades of the 20th century, Jehovah laid the foundation for the witnessing work to expand and completely fulfill Zechariah’s prophecy.",
5:"As the good news continued to spread, righthearted people were found among many language groups. As foretold, people from all nations were invited to Jehovah’s house so that they could be instructed about his ways. (Read Isaiah 2:2-4.) In order to reach these potential disciples and care for them, God’s people have “offer[ed] themselves willingly” not only to preach but also to translate, to print, and to ship the lifesaving message contained in our publications in an ever-growing number of languages. (Ps. 68:11; 110:3) In addition, computer programmers and other skilled workers have designed and maintained programs, including JW Library®, as well as a multilanguage website.",
6:"People of all nations and language groups benefit from the spiritual food provided by the faithful and discreet slave. One way they show their appreciation is by providing financial support, making voluntary donations to the worldwide preaching work. As a result of this united effort, lifesaving Bible-based publications have become available in over 1,100 languages. And each year, hundreds of thousands of individuals get baptized.",
7:"Jehovah’s people are now equipped with tools that transcend language barriers. Under angelic direction, they are unitedly declaring “everlasting good news . . . to every nation and tribe and tongue [or, “language,” ftn.] and people.” (Read Revelation 14:6.) When we see how the thrilling prophecies recorded by Zechariah and by John are being fulfilled in modern times, we are moved to trust Bible prophecy and to cling to the organization that God is using to proclaim the good news.",
8:"On the day of Pentecost 33 C.E., Jehovah revealed that he had the power to reverse the effects of what he had done at the Tower of Babel. He miraculously enabled Christ’s disciples to speak in languages that they did not know. (Acts 2:4-10) Why did he do so? In order to make known “the magnificent things of God” to an international crowd of God-fearing persons. (Acts 2:11) Today, our publications enable us, in effect, to speak in the tongues of interested ones.",
9:"People need to hear the good news in a language that they understand. Consider this illustration: A person travels overseas, but he becomes seriously ill and needs medical attention. If he does not speak the local language, he will need an interpreter to help him understand what the doctor is instructing him to do to get well. Similarly, countless people today are suffering spiritually and emotionally, and they are in need of hope and comfort. The remedy they require is found in the Bible’s message. When we meet someone, we can help him to receive that lifesaving remedy in a language that he understands. We have the tools we need — printed literature, videos, and digital publications.",
10:"How can we effectively use the spiritual tools available to us? Note the experience of Robert, who speaks English. While doing harbor witnessing, he met a man from Türkiye who was working on a ship. The man spoke little English but accepted the brochure Good News From God! in Turkish. Robert was thoroughly familiar with the brochure’s contents, so he was able to direct the man to read selected portions in his language. The Turkish man then asked a number of questions about world conditions and was shown the Bible’s answers in Turkish, using the JW Library app. He exclaimed: “It is as if you knew my language!” Robert relates: “We spoke for about an hour. During the conversation, it was clear that this man’s respect for the Bible and his understanding of its message greatly increased.” What a privilege we have to help sincere individuals hear God’s message in the language of their heart!",
11:"Something as simple as sharing a tract or an article on the jw.org website in a language that another person can understand could have amazing results. Why not make it a goal to prepare to share the Bible’s message with those who do not speak your language?",
12:"All of us depend on the work done by translators. Bible translation is not new. a Translators have worked tirelessly to ensure that the message of God’s Word reaches more people. In recent years, a remarkable tool for unifying Jehovah’s people has been the New World Translation of the Holy Scriptures. Note what an elder who serves in Nepal says about this translation: “Reading this translation in my language has made Jehovah more real to me. It has helped me draw closer to God and has strengthened my faith.” The New World Translation is available, in whole or in part, in well over 300 languages. That is one reason why Jehovah’s people are able to think and speak in agreement — they use this clear, reliable Bible translation that conveys the same message regardless of language. (1 Cor. 1:10) However, this translation does much more.",
13:"The New World Translation is one of the few Bibles being distributed in the 21st century that continues to honor Jehovah’s name by using it throughout the Bible text. At the beginning of the last days, it was common to find the name Jehovah in many translations of the Bible, especially in the Hebrew Scriptures. However, the leaders of Christendom, who claim to represent God, have become increasingly opposed to making known or to using God’s name, Jehovah. The leaders of the Catholic Church have removed it from their Bibles and from related literature. b Most Protestant denominations likewise omit the name from their translations of the Bible. In contrast, the New World Translation consistently restores the divine name to its rightful place in the Scriptures, regardless of language. Why is this significant?",
14:"The Scriptures repeatedly highlight the importance of knowing and using God’s name. The psalmist urges God’s servants to “praise the name of Jehovah.” (Ps. 135:1) When teaching his disciples how to pray to Jehovah, Jesus directed them to say: “Let your name be sanctified.” Later, while praying to his Father, Jesus said: “I have made your name known.” (Matt. 6:9; John 17:26) The apostle Paul quoted the words of the prophet Joel, who said: “Everyone who calls on the name of Jehovah will be saved.” (Rom. 10:13) People who use Bible translations that omit the divine name cannot obey these inspired exhortations.",
15:"The vast majority of Jehovah’s Witnesses have access to a translation that accurately conveys Bible truth, including the importance of relying on and praising God’s illustrious name. They have grown to love that name and to rely on the One it represents. — Prov. 18:10; Isa. 56:6.",
16:"The Bible foretells a showdown in the near future between “the kings of the entire inhabited earth” and Jehovah. (Rev. 16:14) During that time, those who know Jehovah and honor his name will be kept safe. (Ps. 9:10; read John 17:3; see study note on “their coming to know you.”) But those who refuse to know him as their Father and God will be forced to know him in a different way. Jehovah says: “I will certainly magnify myself and sanctify myself and make myself known before the eyes of many nations; and they will have to know that I am Jehovah.” (Ezek. 38:23) How happy Jehovah’s people will be that they know him as their Friend and not as their adversary! — Mal. 3:16.",
17:"What a privilege we have to play even a small role in the fulfillment of the prophecy recorded at Zechariah 8:23! We have the opportunity of working unitedly not only with our brothers and sisters but also with the angels in this multilingual preaching work. Jehovah is giving us the tools we need to reach people from every nation and tribe and tongue. May we use these tools effectively to help draw as many people as possible to our impartial, merciful, and patient God, Jehovah. It is our honor to share in this work until Jehovah’s name is sanctified before all creation. — Luke 11:2."
};
const easy={
1:"Long ago at Babel, people were split into many languages. Jehovah wants people from every language to learn about him, so they can be his friends and be safe. That is why the good news is preached in so many languages.",
2:"Zechariah wrote that people from all the languages of the nations would take hold of a Jew’s robe and say, “We want to go with you, for we have heard that God is with you people.” That is happening now!",
3:"In that prophecy, the “Jew” means God’s anointed ones, who will live in heaven. The “ten men” means humble people from every language who hope to live on a paradise earth.",
4:"After 1919, Jesus’ “faithful and discreet slave” saw that the work was for the whole world. They began translating the Bible’s message into many languages, so more people could learn about Jehovah.",
5:"People from all nations are invited to learn Jehovah’s ways. Willing brothers and sisters preach, translate, print, and ship the good news. Others build tools like JW Library and jw.org.",
6:"People show they are thankful by giving to support the work. Because of this, Bible publications are now in over 1,100 languages, and each year many people get baptized.",
7:"With Jehovah’s help, and with the angels, we can share the good news in every language. Seeing this come true helps us trust the Bible and stay close to the organization Jehovah is using.",
8:"At Pentecost, Jehovah helped Jesus’ disciples speak languages they had not learned, so people from many lands could hear “the magnificent things of God.” Today our publications help us do that too.",
9:"If you got sick in another country, you would need help in a language you understand. People need the Bible’s hope in a language they understand too. We have tracts, videos, and publications to help.",
10:"Robert met a man from Türkiye who spoke little English. Robert gave him a brochure in Turkish and used JW Library to show Bible answers in Turkish. The man said, “It is as if you knew my language!”",
11:"Even a simple tract or a jw.org article in someone’s language can do a lot of good. Youa, a Hmong sister, found hope in a tract left in her language. Let’s be ready to share the good news that way.",
12:"Translators work hard so we can read the Bible clearly. An elder in Nepal said the New World Translation made Jehovah more real to him. It is in well over 300 languages, so we can all learn the same message.",
13:"Many Bibles today leave out God’s name. The New World Translation keeps the name Jehovah in its rightful place in the Scriptures, in every language it is translated into.",
14:"The Bible tells us to praise Jehovah’s name. Jesus taught us to pray, “Let your name be sanctified,” and he said, “I have made your name known.” People need a Bible that uses God’s name so they can do that.",
15:"Most of Jehovah’s people have a Bible that teaches them to love and rely on Jehovah’s name. They have grown to love that name and to rely on the One it represents.",
16:"It is urgent to know Jehovah now. Those who know him and honor his name will be kept safe. How happy we will be that we know him as our Friend!",
17:"What a privilege to have even a small part in Zechariah’s prophecy! We work with our brothers and sisters, and with the angels, to help people of every language come to know our kind God, Jehovah."
};
// Questions are keyed by the last paragraph of each printed question; 19 is the review (sunday/index.html expects questions[19] for the review unit).
const questions={
1:"Why is it essential for the good news to be preached in many languages? (Romans 10:13, 14)",
2:"What was the prophet Zechariah inspired to foretell?",
3:"Who today are represented by the “Jew,” and who are represented by the “ten men”?",
4:"What happened after Jesus appointed “the faithful and discreet slave” in 1919?",
6:"How is Isaiah 2:2-4 being fulfilled today? (See also picture.)",
7:"How are we affected by seeing the fulfillment of Revelation 14:6?",
8:"At Pentecost 33 C.E., how did Jehovah reverse the effects of what he had done at the Tower of Babel?",
9:"How can we help those who speak a language that we do not know to learn about the good news?",
11:"What do you learn from the experience of a brother named Robert and from the account in the box “A Refugee Finds Hope”?",
12:"What effect does reading and studying the New World Translation have on Jehovah’s people?",
13:"Why do few modern Bible translations use God’s name?",
14:"According to the Scriptures, why is it important to know and to use God’s name?",
15:"How do Jehovah’s people feel about the divine name?",
16:"Why is it urgent to come to know Jehovah now? (John 17:3)",
17:"What privilege do we have?",
19:"How would you answer? Who are represented by the “Jew” and by the “ten men” mentioned at Zechariah 8:23? What is making it possible for people from every tongue to learn about Jehovah? Why is it important for people to know and to use Jehovah’s name?"
};
const units=[
{id:'u1',game:'w-01',pts:5,ps:[1],verse:"“Everyone who calls on the name of Jehovah will be saved.” — Romans 10:13",activity:{type:'iframe',prompt:"The good news needs many languages."}},
{id:'u2',game:'w-02',pts:5,ps:[2],verse:"“We want to go with you, for we have heard that God is with you people.” — Zechariah 8:23",activity:{type:'iframe',prompt:"Zechariah’s prophecy is coming true."}},
{id:'u3',game:'w-03',pts:6,ps:[3],activity:{type:'iframe',prompt:"Who are the “Jew” and the “ten men”?"}},
{id:'u4',game:'w-04',pts:6,ps:[4],activity:{type:'iframe',prompt:"The work is for the whole world."}},
{id:'u5',game:'w-05',pts:7,ps:[5, 6],img:'wt-pages/p16.jpg',cap:"People of all nations and language groups benefit from the spiritual food provided through the faithful and discreet slave",verse:"“The nations will stream to it.” — Isaiah 2:2",activity:{type:'iframe',prompt:"Willing workers help the good news travel."}},
{id:'u6',game:'w-06',pts:5,ps:[7],activity:{type:'iframe',prompt:"We can trust Bible prophecy."}},
{id:'u7',game:'w-07',pts:6,ps:[8],activity:{type:'iframe',prompt:"Jehovah helps people hear in their language."}},
{id:'u8',game:'w-08',pts:6,ps:[9],activity:{type:'iframe',prompt:"Share the Bible in a language they understand."}},
{id:'u9',game:'w-09',pts:7,ps:[10, 11],img:'wt-pages/p17.jpg',cap:"Youa treasured a tract in the Hmong language, which gave her hope for a better life",activity:{type:'iframe',prompt:"A tract in the right language can give hope."}},
{id:'u10',game:'w-10',pts:6,ps:[12],activity:{type:'iframe',prompt:"A clear Bible helps us know Jehovah."}},
{id:'u11',game:'w-11',pts:6,ps:[13],activity:{type:'iframe',prompt:"This Bible keeps Jehovah’s name."}},
{id:'u12',game:'w-12',pts:6,ps:[14],verse:"“Let your name be sanctified.” — Matthew 6:9",activity:{type:'iframe',prompt:"We need to know and use God’s name."}},
{id:'u13',game:'w-13',pts:5,ps:[15],verse:"“The name of Jehovah is a strong tower.” — Proverbs 18:10",activity:{type:'iframe',prompt:"We love Jehovah’s name."}},
{id:'u14',game:'w-14',pts:6,ps:[16],verse:"“This means everlasting life, their coming to know you.” — John 17:3",activity:{type:'iframe',prompt:"It is urgent to know Jehovah now."}},
{id:'u15',game:'w-15',pts:6,ps:[17],verse:"“Ten men out of all the languages of the nations will take . . . hold of the robe of a Jew.” — Zechariah 8:23",activity:{type:'iframe',prompt:"What a privilege to have a part!"}},
{id:'u16',game:'w-16',pts:4,ps:[17],review:1,activity:{type:'iframe',prompt:"Tap a card, then tap the question it answers."}}
];
return {meta,wtPage,pTexts,easy,questions,units};
})();
