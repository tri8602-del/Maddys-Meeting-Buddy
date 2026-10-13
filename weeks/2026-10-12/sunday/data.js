/* ============================================================
   SUNDAY WATCHTOWER week pack — Oct 12–18, 2026.
   The Watchtower (Study), August 2026, “You Can Win the Battle!” (pp. 8–13).
   Loaded by sunday/index.html. Paths here (wt, unit img, games/) are
   relative to THIS folder. See README "Weekly update".
   ============================================================ */
self.SUNDAY_WEEK=(function(){
const meta={
  id:'2026-10-18',                 // the Sunday date; Sunday progress is saved per id
  range:'Oct 12–18 · 2026',
  title:'You Can Win the Battle!',
  short:'You Can Win the Battle!',
  theme:'“We have a struggle, not against blood and flesh, but against . . . the wicked spirit forces in the heavenly places.” — Ephesians 6:12',
  wt:'w_E_202608.pdf',             // Watchtower issue PDF in this folder (Page button)
  songOpen:129, songOpenTitle:'We Will Keep Enduring',
  songClose:149, songCloseTitle:'A Victory Song',
  about:'This week: Satan tries to divide us and to discourage us with opposition. Saul, Jonathan, Isaac, Jesus. With faith and love, we can win!'
};
// Paragraph number -> PDF page in meta.wt (article is pp. 8–13)
function wtPage(p){return p<=3?8:p<=5?9:p<=10?10:p<=12?11:p<=14?12:13}
const pTexts={
1:"AS SERVANTS of Jehovah, we do not engage in physical warfare. (Isa. 2:4; John 18:36) However, the Bible describes a fight that none of us can avoid—a struggle against wicked spirits. (Read Ephesians 6:11, 12.) How can we hope to succeed against such powerful enemies? Above all, we need to rely on Jehovah’s support. But we must also recognize the tactics that Satan and his demons use against us and our spiritual family.",
2:"In the preceding article, we considered how the Devil tries to undermine our trust in Jehovah God and in Jesus Christ. In this article, we will discuss two other tactics that Satan uses in his fight against us. He tries to break up our unity with our brothers and sisters. And he stirs up opposition in an attempt to distract or frighten us, hoping to stop us from carrying out the work Jehovah has given us to do.",
3:"Satan tries to cause division between us and our brothers and sisters. His goal is to cause us to fight against one another instead of fighting against him. How does he try to get us to do that? Many people in Satan’s world are harsh and unloving. They often do not trust one another. Satan hopes that their example will rub off on us and that we will develop a critical, cynical view of our friends in Jehovah’s organization and turn on them.—Rom. 16:17.",
4:"Consider an example. King Saul turned against loyal David. At first, Saul loved this young man. He was thoroughly impressed by David’s ability as a warrior. (1 Sam. 18:5) In time, though, Saul became consumed with jealousy when he saw that David was more popular with the people than he was. As a result, Saul engaged in a prolonged campaign to kill David. (1 Sam. 18:9-11) It would have suited Satan’s interests if David were killed. How so? At Jehovah’s direction, David had already been anointed as the future king of Israel. (1 Sam. 16:13) Satan would have been delighted if that purpose failed. Imagine Satan watching with satisfaction as jealous Saul became obsessed with killing the man Jehovah had chosen to be the next king.",
5:"Satan knows that our unity leads to Jehovah’s blessing and support. (Ps. 133:1) Because Satan seeks to destroy that unity, he wants us to become jealous and envious of others, just as Saul was of David. Satan knows that if we become jealous of our brother or sister, it will be very difficult to show them love. (Mark 12:30, 31) If that were to happen, would Jehovah find our worship acceptable? The disciple James wrote in very strong terms about the danger of allowing a jealous spirit to develop in us.—Read James 3:14-16.",
6:"When we stand together as a united brotherhood, we can avoid allowing jealousy and envy to take root in our heart. Consider the fine example of Jonathan, the son of Saul. Unlike his father, who was jealous of David, Jonathan told his young friend David that he had complete faith that Jehovah’s purpose would succeed. “You will be king over Israel,” Jonathan said reassuringly. With true humility, Jonathan acknowledged Jehovah’s will and supported David as Israel’s next king.—1 Sam. 23:16, 17.",
7:"Satan would also like to use our differences to break up our unity. He wants us to believe that because of differences in opinions, personalities, race, or culture, we cannot get along with one another. How can you avoid giving him an opportunity to create divisions? Resolve any disagreements or problems quickly. (Read Ephesians 4:25-27.) Deepen your love for your brothers and sisters. Keep a proper view of them. Despite being so different, we are all members of one body. (1 Cor. 12:12) Our fellow Christians stand beside us, fighting the same enemies we are fighting—Satan and the demons.—1 Pet. 5:8, 9.",
8:"When a fellow worshipper says or does something that hurts you, remember that you are just as imperfect as he is. If you work closely together with others, it is realistic to expect some friction to develop. (Eccl. 7:20) When that happens, follow the inspired counsel to put up with one another. And if someone hurts you, be quick to forgive. (Col. 3:12-14) Cooperate with Jehovah and Jesus in their purpose to keep our Christian family united.—John 17:20, 21.",
9:"Another way that Satan tries to discourage us is through persecution. The apostle Paul warned that all true Christians will face persecution. (2 Tim. 3:12) Persecution involves injustice. We could become so consumed by the desire to get justice, to be vindicated, or to take revenge that we lose sight of the all-important Kingdom-preaching work—the work Jehovah has given us to do.—Rom. 12:19-21.",
10:"Consider the example of Abraham’s son Isaac. Envious of Isaac’s prosperity, the Philistines, his neighbors, made a hostile move—they stopped up wells that Abraham’s servants had dug. (Gen. 26:12-18) Water was very important in caring for families and livestock. So Isaac chose to move farther away and dig other wells. However, the Philistines claimed ownership of the water in that location too. This kind of injustice could have been discouraging. Yet, Isaac prevented the quarreling between his shepherds and the Philistines from escalating. How? By pursuing peace. He moved yet again, and Jehovah blessed him. (Gen. 26:19-25) When we face injustice, can we likewise respond with mildness and patience?",
11:"Centuries later when Jesus, the promised Messiah, arrived, he faced many challenges. For example, some of Jesus’ relatives thought that he was out of his mind. (Mark 3:21) Religious leaders constantly challenged his authority to preach. (Luke 11:15, 16) One of his closest associates betrayed him. (Matt. 26:14-16) Chief priests joined political authorities to have him sentenced to death. (Mark 15:1, 13-15) But Jesus did not allow opposition to cause him to slow down in Jehovah’s service. And he never showed a vengeful attitude. When Jesus was arrested, the apostle Peter tried to come to his defense. Peter cut off the ear of a slave of the high priest. But Jesus did not agree with Peter’s violent reaction and miraculously healed the man’s wounds. (Luke 22:50, 51) In all these instances, Jesus never allowed the challenges he faced to distract him or cause him to seek revenge.",
12:"Similarly today, we face situations that could discourage us. Satan tries to keep us from carrying out the preaching work. Unbelieving family members or others may oppose or even persecute us. Yet, Jesus instructed us to love even those who persecute us. (Read Matthew 5:43, 44.) This rules out responding with hostility when we suffer persecution. Rather, following Jesus’ clear direction, we do our best to treat all men kindly, patiently, and respectfully even if they oppose us or our work.—1 Cor. 13:4.",
13:"Government authorities also deserve our respect even if they enact laws that restrict our freedom of worship or if they make life hard for us in some other way. Why? Because God’s Word requires it of us. (Rom. 13:1, 2) Satan may not be directly behind every unjust decision that governments make. Yet, he likely hopes that we will react negatively or critically to those decisions. He would be delighted to see us abandon our neutral stand. In the world, people mount protests against decisions they do not like. That type of action is not for Christians! (Prov. 24:21, 22, ftn.; Eccl. 8:2, 3) If we were to lose our balance and compromise our neutral stand, we would really be giving in to Satan’s desires.—John 15:19.",
14:"Some who formerly opposed the truth have in time become zealous Witnesses. (1 Tim. 1:12, 13) Keep this in mind when “people reproach you and persecute you and lyingly say every sort of wicked thing against you.” (Matt. 5:11) Pray that those in authority will allow us to continue worshipping peacefully. (1 Tim. 2:1, 2) Pray also for your opposing family members, workmates, and schoolmates. Ask Jehovah to help you to see what you can do to touch their heart. And be patient! A woman who became a Witness after opposing her husband for many years said, “Much good can be achieved with patience, patience, and still more patience.”",
15:"We would soon expend a lot of our time and energy if we tried to correct all the injustices that we see or suffer today. (Eccl. 1:15) Jehovah knows exactly what we are enduring. (Ps. 37:18) Very soon, his Kingdom will undo all the harm that Satan and his agents have caused. (1 John 3:8; Rev. 21:5) In the meantime, we must remain patient and show love for our neighbor. We should focus our time and energy on helping as many as possible to become Jehovah’s friends.",
16:"The Bible assures us that we can win the battle against wicked spirit forces. (Jas. 4:7; 1 John 5:4, 5) As we struggle against them, God’s Word states that faith will be the key to our success. (Eph. 6:16) So continue to build up your faith in Jehovah God and Jesus Christ. Let that faith motivate you to continue to love your brothers and sisters and remain united with them.",
17:"May we never succumb to whatever tactics the Devil may use in the coming days to try to divide and discourage us. Jehovah and Jesus promise to remain on our side as long as we stick to them. Our brothers and sisters are united with us in the struggle against our principal enemy, Satan. As for those who oppose us, we must try our best to follow Jesus’ counsel to be kind to them. (Luke 6:27, 28) So continue to resist Satan’s tactics, confident that you will succeed in your struggle against the wicked spirit forces."
};
const easy={
1:"Jehovah’s servants do not fight wars. But we all have a fight we cannot avoid — against wicked spirits. Above all, we need Jehovah’s support. We also need to know Satan’s tricks.",
2:"Last week we learned how Satan tries to make us doubt Jehovah and Jesus. This week: two more tricks. He tries to break up our unity, and he stirs up opposition to stop our work.",
3:"Satan wants us to fight each other instead of fighting him. Many people in his world are harsh and do not trust each other. He hopes we will copy them and turn on our friends.",
4:"At first King Saul loved David. But Saul got jealous when the people liked David more. He tried to kill David. Satan was happy, because Jehovah had chosen David to be the next king.",
5:"Unity brings Jehovah’s blessing. So Satan wants us to be jealous like Saul. If we are jealous of someone, it is very hard to love them.",
6:"Jonathan was Saul’s son, but he was not jealous. He told David: “You will be king over Israel.” Jonathan humbly supported Jehovah’s choice.",
7:"Satan wants us to think we cannot get along because we are different. Fix problems quickly. Love your brothers and sisters. We are all one body, fighting the same enemy.",
8:"When someone hurts you, remember you are imperfect too. Put up with one another, and be quick to forgive.",
9:"Satan also uses persecution. That is unfair. But if we only think about getting even, we could forget our most important work — preaching about the Kingdom.",
10:"The Philistines filled up Isaac’s wells. Isaac dug new ones, and they argued over those too. Isaac did not fight. He moved again, and Jehovah blessed him.",
11:"Jesus’ relatives thought he was out of his mind. Leaders challenged him, and a friend betrayed him. When Peter cut off a man’s ear, Jesus healed it. Jesus never tried to get even.",
12:"Satan tries to stop our preaching. Some people may oppose us. Jesus said to love even those who persecute us. We treat everyone kindly, patiently, and with respect.",
13:"We respect governments even when their rules are hard for us, because God’s Word says to. Christians do not join protests. Satan would love to see us take sides.",
14:"Some people who opposed the truth later became Witnesses! So we pray for those who oppose us, and we are patient, patient, and still more patient.",
15:"We cannot fix every unfair thing now. Jehovah knows what we are going through, and soon his Kingdom will undo all the harm. Until then, we help people become Jehovah’s friends.",
16:"We can win the battle! Faith is the key. Keep building your faith in Jehovah and Jesus, and keep loving your brothers and sisters.",
17:"Never give in to Satan’s tricks. Jehovah and Jesus are on our side. Our brothers and sisters are with us. Be kind even to those who oppose us."
};
const questions={
1:"Whom must we all fight against? (Ephesians 6:11, 12)",
2:"What will we discuss in this article?",
3:"In what way does Satan try to divide us?",
4:"Why did King Saul turn against David? (See also picture.)",
5:"Why does the Devil want us to develop a jealous and envious spirit? (James 3:14-16)",
6:"What do you learn from the example of Jonathan? (See also picture.)",
7:"How can we avoid giving the Devil an opportunity to break up our unity? (Ephesians 4:25-27)",
8:"How should we react when a fellow Christian says or does something that hurts us?",
9:"What is another way that Satan tries to discourage us?",
10:"How did Isaac respond to injustice?",
11:"How did Jesus react to the challenges he faced?",
12:"According to Matthew 5:43, 44, how should we treat those who oppose or persecute us?",
13:"Why should we respect governments even if they oppose us? (See also picture.)",
14:"What should we keep in mind about those who oppose God’s people?",
15:"Why is it unrealistic to try to correct all the injustices that we see or suffer today?",
16:"What will help us to win the battle against wicked spirit forces? (See also pictures.)",
17:"What should we be determined to do?",
19:"How would you answer? How does Satan try to break up our unity with our brothers and sisters? How does Satan try to discourage us from carrying out the Kingdom-preaching work? What convinces you that you can win the battle against the wicked spirit forces?"
};
const units=[
{id:'u1',game:'w-01',pts:5,ps:[1],verse:"“We have a struggle, not against blood and flesh, but against . . . the wicked spirit forces in the heavenly places.” — Ephesians 6:12",activity:{type:'iframe',prompt:"We fight against wicked spirits — not people."}},
{id:'u2',game:'w-02',pts:5,ps:[2],activity:{type:'iframe',prompt:"Satan has two other tactics."}},
{id:'u3',game:'w-03',pts:6,ps:[3],activity:{type:'iframe',prompt:"Satan wants us to fight one another instead of fighting him."}},
{id:'u4',game:'w-04',pts:6,ps:[4],img:'wt-pages/p4.jpg',cap:"Unlike loyal Jonathan, who supported David, Saul became jealous of David and lost faith in Jehovah",activity:{type:'iframe',prompt:"Saul turned against loyal David."}},
{id:'u5',game:'w-05',pts:6,ps:[5],verse:"For wherever there are jealousy and contentiousness, there will also be disorder and every vile thing. — James 3:16",activity:{type:'iframe',prompt:"Satan wants us to be jealous and envious."}},
{id:'u6',game:'w-06',pts:6,ps:[6],activity:{type:'iframe',prompt:"Jonathan supported Jehovah’s choice."}},
{id:'u7',game:'w-07',pts:6,ps:[7],verse:"Be wrathful, but do not sin; do not let the sun set while you are still angry. — Ephesians 4:26",activity:{type:'iframe',prompt:"Don’t let differences divide us."}},
{id:'u8',game:'w-08',pts:6,ps:[8],activity:{type:'iframe',prompt:"Remember, everyone is imperfect."}},
{id:'u9',game:'w-09',pts:5,ps:[9],activity:{type:'iframe',prompt:"Satan uses persecution to discourage us."}},
{id:'u10',game:'w-10',pts:6,ps:[10],activity:{type:'iframe',prompt:"Isaac pursued peace."}},
{id:'u11',game:'w-11',pts:6,ps:[11],activity:{type:'iframe',prompt:"Jesus never let challenges distract him."}},
{id:'u12',game:'w-12',pts:6,ps:[12],verse:"Continue to love your enemies and to pray for those who persecute you. — Matthew 5:44",activity:{type:'iframe',prompt:"Jesus told us to love even those who persecute us."}},
{id:'u13',game:'w-13',pts:6,ps:[13],img:'wt-pages/p13.jpg',cap:"Will you resist the world’s efforts to make you compromise your neutrality?",activity:{type:'iframe',prompt:"We stay neutral and respect governments."}},
{id:'u14',game:'w-14',pts:5,ps:[14],activity:{type:'iframe',prompt:"Some opposers later became Witnesses!"}},
{id:'u15',game:'w-15',pts:5,ps:[15],activity:{type:'iframe',prompt:"We can’t fix every unfair thing now."}},
{id:'u16',game:'w-16',pts:6,ps:[16],img:'wt-pages/p16.jpg',cap:"We can win the battle against wicked spirit forces by promoting love and unity among our brothers and sisters",activity:{type:'iframe',prompt:"We can win the battle against wicked spirits!"}},
{id:'u17',game:'w-17',pts:5,ps:[17],activity:{type:'iframe',prompt:"Jehovah and Jesus are on our side."}},
{id:'u18',game:'w-18',pts:4,ps:[17],review:1,activity:{type:'iframe',prompt:"Tap a card, then tap the question it answers."}}
];
return {meta,wtPage,pTexts,easy,questions,units};
})();
