/* ============================================================
   SUNDAY WATCHTOWER week pack — Oct 5–11, 2026.
   Loaded by sunday/index.html. Paths here (wt, unit img, games/) are
   relative to THIS folder. See README "Weekly update".
   ============================================================ */
self.SUNDAY_WEEK=(function(){
const meta={
  id:'2026-10-11',                 // the Sunday date; Sunday progress is saved per id
  range:'Oct 5–11 · 2026',
  title:'Resist Satan’s Tactics—Trust In Jehovah and In Jesus',
  short:'Resist Satan’s Tactics',
  theme:'“Oppose the Devil, and he will flee from you.” — James 4:7',
  wt:'w_E_202608.pdf',             // Watchtower issue PDF in this folder (Page button)
  songOpen:55, songOpenTitle:'Fear Them Not!',
  songClose:150, songCloseTitle:'Seek God for Your Deliverance',
  about:'This week: Satan lies about Jehovah and Jesus. Eve, Job, Jesus, Shannon. Jehovah and Jesus are on your side.'
};
// Paragraph number -> PDF page in meta.wt (article is pp. 2–7)
function wtPage(p){return p<=2?2:p<=8?3:p<=9?4:p<=14?5:p<=15?6:7}
const pTexts={
1:`FROM the moment we decide to serve Jehovah, Satan and his demons become our unrelenting enemies. But Satan knows that he cannot overpower us as long as we have Jehovah’s support. So the Devil tries to undermine that support by getting us to turn our back on Jehovah. One way he does this is by trying to make us doubt that Jehovah and his Son are truly on our side.—2 Cor. 11:14; Jas. 1:6.`,
2:`In the midst of a battle, soldiers need to have confidence in their leaders. If they were to lose that confidence, they might act independently. This could cost them their lives. In a similar way, we are soldiers in a spiritual battle against “wicked spirit forces.” (Eph. 6:12) Satan the Devil knows that if we lose confidence in Jehovah God and in Jesus Christ, we will likely reject their lead and support. So he does all he can to weaken our confidence in them. In this article, we will examine how he used this tactic in the past and how he is still using it today. Then we will consider how we can resist his schemes. In the next article, we will examine two other tactics Satan uses against us in our spiritual warfare.`,
3:`Early in human history, Satan set out to turn Adam and Eve away from Jehovah. Satan deceived Eve into believing that her Creator did not have her best interests at heart. Satan asked her: “Did God really say that you must not eat from every tree of the garden?” (Gen. 3:1-5) Satan convinced Eve that Jehovah was imposing unreasonable limits on both her and her husband. Sadly, Eve and later Adam sided with the enemy Satan. They turned their back on Jehovah—the One who had given them everything.—Gen. 3:6.`,
4:`Since the time of Adam and Eve, Satan has continued to misrepresent Jehovah. For example, Satan incited Job’s false friends to move Job to doubt that Jehovah loved him and valued his faithful course. (Job 22:1-3) The Devil assumed that personal tragedies would cause Job to reject Jehovah. Although Job was under great pressure from Satan’s scheme, that faithful man maintained his integrity, never losing sight of his friendship with God.—Job 27:1, 5.`,
5:`Centuries later when Jesus came to the earth, Satan tried to prevent people from following Jesus. One way he did this was by inciting hateful religious leaders and others to spread lies about Jesus. And in the end, they had him executed as a common criminal.—Read Matthew 11:19; 27:27-31; Mark 14:55, 56; John 8:41-45.`,
6:`After Jesus’ death, Satan turned his attention to the work of Jesus’ followers. First, the Devil tried to introduce doubts about Jesus’ resurrection. Under Satan’s influence, a false story circulated that Jesus’ disciples had stolen his body. (Matt. 28:11-15) Then during the days that followed, Satan tried to intimidate the congregation by means of persecution. Satan wanted to make the work that their Master had entrusted to them appear too difficult for them to carry out.—Acts 7:57–8:1; 12:1-3; 28:22.`,
7:`Although some of the early Christians gave in to this pressure to stop preaching, most stood firm and refused to keep silent. They recognized that Satan and the demons were their real enemies. (Acts 4:18-20; 1 Pet. 5:8) What about today? What tactics is Satan using to try to discourage us from serving Jehovah?`,
8:`Today, one of Satan’s main tactics is to obscure the truth about Jehovah and about Jesus. As “the father of the lie,” the Devil spreads lies about them by means of false religion. (John 8:44) For example, he has blinded people about the true identity of Jehovah and of his Son. (2 Cor. 4:3, 4) Christendom often presents the Father and the Son as being equal. As a result, people tend to ignore the Father, whose name they do not know, and worship the Son. Neither Jehovah nor Jesus approves of such worship. (Matt. 4:10; John 4:23) When people are blinded in such ways, they may be difficult to reason with or may even oppose our ministry.`,
9:`When we start a relationship, one of the first things we do is learn the person’s name. Satan seeks to prevent people from having a close friendship with Jehovah by keeping them from even knowing His name. Thus, Satan has long used false religion to make people forget God’s name. (Read Jeremiah 23:26, 27.) That enemy has even made sure that God’s name—which the Bible likens to a strong, protective tower—is omitted from many translations of the Bible. (Prov. 18:10) The Devil is also behind the lie that Jehovah causes suffering. As a result, sincere people may struggle to see Jehovah as a Friend they can draw close to. (Jas. 4:8) However, Satan also seeks to undermine the faith of Jehovah’s people.`,
10:`When we are going through personal challenges, Satan wants us to believe that Jehovah doesn’t care about us. Satan hopes that we will become angry if Jehovah allows our suffering to continue. (Prov. 19:3) Those who begin to feel this way may even wonder: ‘What is the point of continuing to follow Jehovah’s laws and principles? It doesn’t seem to benefit me!’ This type of thinking could lead us to come under Satan’s influence.`,
11:`Satan uses such tools as social media to raise doubts about Jehovah’s standards. On these platforms, many people express the view that the moral values found in the Bible are outdated and that everyone should be free to set his own standards. Most certainly, “the ruler of the world” has been very skilled at blurring the lines between what is good and what is bad.—John 14:30; Isa. 5:20; 1 Tim. 4:1, 2.`,
12:`Listening to Satan’s propaganda could cause us to drift away from Jehovah. A young sister whom we will call Shannon relates: “It took me a while to realize that the morals I was being taught in school and the people I was associating with were distorting my sense of right and wrong. The more time I spent on social media, the more I wanted to copy the values of those I met online. I gradually began to drift away from Jehovah, my family, and my brothers and sisters.” Eventually, Shannon found her way back to her heavenly Father and escaped from the Devil’s snare. What helped her?`,
13:`Shannon realized that she needed to work hard to remain friends with Jehovah and Jesus. She says: “I prayed and worked in harmony with my prayers by doing research in our publications. The video Young People Ask—How Can I Make Real Friends? helped me a lot. In that dramatization, a young sister was experiencing many of the same challenges that I was. She humbly turned to her parents and asked for help. I did the same. My parents, the elders, and mature Christian sisters in the congregation helped me to break free from my bad association. I came to understand that the truth is not only about going to meetings and pleasing my parents but about making the truth my own and maintaining a close personal relationship with Jehovah.”`,
14:`To remain friends with Jehovah, we must choose our associates wisely. (Jas. 4:4) We should also be careful not to believe everything we read or hear that is put out by the world. For instance, we could draw wrong conclusions if we believed material that consisted of half-truths or outright lies. But if we study the Bible and our publications and regularly associate with mature Christians, we will not be easily swayed. The better we know the truth, the more likely we will be to succeed in rejecting Satan’s attempts to weaken our faith.—Prov. 13:20; Acts 17:11.`,
15:`By examining the Bible carefully, we can build our confidence that Jehovah and Jesus are on our side. (Prov. 22:19) As we meditate on accounts that show how much Jehovah and Jesus care for humans, we will be moved to count on them as reliable friends. The Bible is filled with reassurances that Jehovah and Jesus love us. For example, Jehovah describes his feelings for his people as being stronger than those of a nursing mother for her child. (Isa. 49:15) He considers any who cherish his name as “a treasured possession.” (Mal. 3:16, 17, ftn.) And the Bible reveals the depth of Jesus’ love for us by recording his sentiments about his sacrifice.—John 15:12, 13.`,
16:`Reflecting on the support that Jehovah and Jesus give us today can also help us to become convinced of their love for us. We can remind ourselves of times when we felt that Jehovah was near, and we can draw strength from those memories. We can also ask our brothers and sisters how they have experienced this help. (Prov. 22:17) By doing so, we will build our confidence that whatever challenges we face, Jehovah and Jesus are on our side.—Read Psalm 118:5, 6.`,
17:`We all want to remain close friends of Jehovah God and Jesus Christ. But until Satan and his demons are destroyed forever, we will need to contend with their attempts to weaken our confidence in Jehovah and in Jesus. (Rev. 20:1-3, 10) To resist our enemies’ tactics, we must maintain a close personal relationship with Jehovah and remain convinced that he and his dear Son love and value us. Then, as Jesus said, no one will be able to “snatch [you] out of the hand of the Father.”—Read John 10:29; Jas. 4:7.`,
18:`In the following article, we will examine two other tactics Satan uses against us during our spiritual warfare—attempts to cause division within the congregation and opposition from the outside. How can we successfully fight against these? We shall see.`
};
const easy={
1:`When we serve Jehovah, Satan and his demons become our enemies. Satan cannot beat us while Jehovah supports us. So he tries to make us doubt that Jehovah and Jesus are on our side.`,
2:`Soldiers must trust their leaders. We are in a spiritual battle. If we stop trusting Jehovah and Jesus, we might stop following them. That is what Satan wants.`,
3:`Satan tricked Eve. He made her think Jehovah did not care what was best for her. Eve and then Adam turned away from Jehovah, who had given them everything.`,
4:`Satan used Job’s false friends to make Job doubt that Jehovah loved him. Job stayed faithful and stayed God’s friend.`,
5:`Satan got religious leaders to tell lies about Jesus, so people would not follow him. In the end they had Jesus killed like a criminal.`,
6:`After Jesus died, Satan spread a lie that the disciples stole Jesus’ body. Then he tried to scare the Christians with persecution.`,
7:`Some Christians stopped preaching, but most stood firm and kept talking about Jesus. They knew Satan was the real enemy.`,
8:`Today Satan, “the father of the lie,” uses false religion to hide the truth. Many people do not know the Father’s name and worship only the Son. Jehovah and Jesus do not approve of that.`,
9:`Friends learn each other’s names. Satan tries to keep people from knowing Jehovah’s name. God’s name is like a strong tower, but many Bibles leave it out. Satan also lies that Jehovah causes suffering.`,
10:`When life is hard, Satan wants us to think Jehovah does not care. He wants us to be angry at Jehovah and stop obeying him.`,
11:`Satan uses social media to make people think the Bible’s rules are old-fashioned. He mixes up what is good and what is bad.`,
12:`Shannon spent lots of time on social media and copied what she saw. She drifted away from Jehovah, her family, and the congregation. But she came back!`,
13:`Shannon prayed, did research, watched a video, and asked her parents for help. Elders and mature sisters helped too. She made the truth her own.`,
14:`Choose friends who love Jehovah. Do not believe everything online. Study the Bible and spend time with mature Christians, so you are not fooled.`,
15:`The Bible shows how much Jehovah and Jesus love us. Jehovah loves us more than a mother loves her baby. We are his treasure. Jesus gave his life for us.`,
16:`Remember times when Jehovah helped you. Ask others how he helped them. Then you will be sure Jehovah and Jesus are on your side.`,
17:`Satan will keep trying until he is destroyed. Stay close to Jehovah. No one can snatch you out of the Father’s hand.`,
18:`Next week we will learn about two more of Satan’s tricks: trying to divide the congregation, and opposition from outside.`
};
const questions={
1:`What tactic does Satan use to try to break the integrity of God’s servants?`,
2:`Why is it important that we have confidence in Jehovah God and in Jesus Christ?`,
3:`How was Eve’s confidence in Jehovah undermined by Satan?`,
4:`In the days of Job, how did Satan misrepresent Jehovah?`,
5:`How did Satan try to prevent people from following Jesus? (Matthew 11:19)`,
6:`In what ways did Satan attack Jesus’ early disciples?`,
7:`In what ways did Satan attack Jesus’ early disciples?`,
8:`How does Satan use false religion to spread lies about Jehovah and about Jesus?`,
9:`Under Satan’s influence, what has false religion kept people from learning? (Jeremiah 23:26, 27)`,
10:`Why might a Christian become angry with Jehovah?`,
11:`How is Satan raising doubts about Jehovah’s standards? (See also picture.)`,
12:`Why should we avoid Satan’s propaganda?`,
13:`What do you learn from Shannon’s experience?`,
14:`How can we avoid Satan’s attempts to weaken our faith? (See also picture.)`,
15:`How can we build our confidence that Jehovah and Jesus are on our side?`,
16:`How can recalling our own experiences or listening to those of others benefit us? (Psalm 118:5, 6)`,
17:`According to John 10:29, what assurance does Jesus give to all those who stay close to him and to his Father?`,
18:`What will we consider in the following article?`,
19:`How would you answer? How has Satan misrepresented Jehovah and Jesus in the past? How is Satan misrepresenting Jehovah and Jesus today? What convinces you that Jehovah and Jesus are on your side?`
};
const units=[
{id:'u1',game:'w-01',pts:5,ps:[1],activity:{type:'iframe',prompt:"Satan is our enemy, but he cannot beat Jehovah’s support."}},
{id:'u2',game:'w-02',pts:6,ps:[2],activity:{type:'iframe',prompt:"We are soldiers in a spiritual battle."}},
{id:'u3',game:'w-03',pts:6,ps:[3],activity:{type:'iframe',prompt:"Satan made Eve think Jehovah did not care what was best for her."}},
{id:'u4',game:'w-04',pts:6,ps:[4],activity:{type:'iframe',prompt:"Satan used Job’s false friends to make Jehovah look unloving."}},
{id:'u5',game:'w-05',pts:6,ps:[5],verse:'“Look! A man who is a glutton and is given to drinking wine, a friend of tax collectors and sinners.” All the same, wisdom is proved righteous by its works. — Matthew 11:19',activity:{type:'iframe',prompt:"Satan tried to stop people from following Jesus."}},
{id:'u6',game:'w-06',pts:7,ps:[6, 7],activity:{type:'iframe',prompt:"Satan attacked Jesus’ followers too."}},
{id:'u7',game:'w-07',pts:6,ps:[8],activity:{type:'iframe',prompt:"Satan, “the father of the lie,” uses false religion."}},
{id:'u8',game:'w-08',pts:6,ps:[9],verse:'“They intend to make my people forget my name.” — Jeremiah 23:27',activity:{type:'iframe',prompt:"Satan tries to keep people from knowing Jehovah’s name."}},
{id:'u9',game:'w-09',pts:5,ps:[10],activity:{type:'iframe',prompt:"Satan wants us to think Jehovah does not care."}},
{id:'u10',game:'w-10',pts:6,ps:[11],img:'wt-pages/p11.jpg',cap:'Satan’s world bombards us with material that undermines God’s standards',activity:{type:'iframe',prompt:"Satan uses social media to raise doubts about Jehovah’s standards."}},
{id:'u11',game:'w-11',pts:5,ps:[12],activity:{type:'iframe',prompt:"Listening to Satan’s propaganda can make us drift from Jehovah."}},
{id:'u12',game:'w-12',pts:6,ps:[13],activity:{type:'iframe',prompt:"Shannon worked hard to stay friends with Jehovah and Jesus."}},
{id:'u13',game:'w-13',pts:6,ps:[14],img:'wt-pages/p14.jpg',cap:'We resist Satan’s efforts by reflecting on how we can maintain a close personal relationship with Jehovah',activity:{type:'iframe',prompt:"Choose friends wisely and know the truth well."}},
{id:'u14',game:'w-14',pts:6,ps:[15],activity:{type:'iframe',prompt:"The Bible is filled with reassurances that Jehovah and Jesus love us."}},
{id:'u15',game:'w-15',pts:5,ps:[16],verse:'Jehovah is on my side; I will not be afraid. What can man do to me? — Psalm 118:6',activity:{type:'iframe',prompt:"Remembering Jehovah’s help builds our confidence."}},
{id:'u16',game:'w-16',pts:5,ps:[17],verse:'No one can snatch them out of the hand of the Father. — John 10:29',activity:{type:'iframe',prompt:"Stay close to Jehovah and Jesus."}},
{id:'u17',game:'w-17',pts:4,ps:[18],activity:{type:'iframe',prompt:"The next article looks at two other tactics."}},
{id:'u18',game:'w-18',pts:4,ps:[18],review:1,activity:{type:'iframe',prompt:"Tap a card, then tap the question it answers."}}
];
return {meta,wtPage,pTexts,easy,questions,units};
})();
