/*
 * SIX DAYS OF DECISIONS | StandWithUs UK Explore
 * 14 chronological decision points, written for students aged 16 to 17.
 * Each correct answer follows the documented historical path, not necessarily
 * the only defensible strategic or moral choice.
 *
 * Archival media belongs to the relevant decision stage.
 */
'use strict';

const SOURCES = [
  {title:'United Nations: withdrawal of UNEF, May to June 1967',url:'https://www.un.org/unispal/document/auto-insert-182090/'},
  {title:'United States Naval History: The Six Day War',url:'https://www.history.navy.mil/content/history/nhhc/browse-by-topic/wars-conflicts-and-operations/middle-east/six-day-war-liberty.html'},
  {title:'Israel Ministry of Defence archives: Going to war',url:'https://archives.mod.gov.il/sites/english/exhibitions/the_six-day_war/pages/going-to-war.aspx'},
  {title:'Former Israel State Archivist: cabinet debate over Syria',url:'https://www.tabletmag.com/sections/israel-middle-east/articles/secret-transcripts-six-day-war-1'},
  {title:'Israel State Archives: cabinet meeting of 19 June 1967',url:'https://archive.nyu.edu/jspui/handle/2451/71897'},
  {title:'Scholarly debate: was the 19 June resolution offered?',url:'https://doi.org/10.1093/dh/dhs004'},
  {title:'Economic Cooperation Foundation: Khartoum resolution',url:'https://www.ecf.org.il/issues/issue/141'},
  {title:'United Nations: Security Council Resolution 242',url:'https://www.un.org/unispal/document/auto-insert-184858/'},
  {title:'UNRWA: humanitarian consequences of 1967',url:'https://www.un.org/unispal/document/auto-insert-198325/'}
];

const STAGES = [
  {
    date:'16 MAY 1967',day:'BEFORE THE WAR',phase:0,tag:'01 / A REGION ON EDGE',title:'The peacekeepers withdraw',
    brief:'Egypt asks the United Nations to withdraw its peacekeeping force from positions in Sinai and Gaza. Egyptian troops are moving into the region. Israeli leaders fear that the security arrangements established after the 1956 war are breaking down.',
    intel:'The UN force had been stationed on Egyptian territory with Egypt’s consent. Its removal raised the risks, but war had not yet begun.',
    question:'As the Israeli leadership, how do you react to the growing threat?',
    options:['Raise military readiness while seeking urgent diplomatic clarification.','Rely on diplomatic pressure alone and postpone military preparations.'],correct:0,
    success:'Israel raised its readiness and continued consultations with allies. The following weeks became known in Israel as the period of waiting.',
    alternative:'Ignoring the mobilisation would leave Israel exposed. Historically, Israeli leaders raised the alert while continuing diplomatic efforts.',
    focus:['israel','sinai'],point:[369,250],map:'SINAI AND THE BORDER',archiveTitle:'The period of waiting',archiveCaption:'UN peacekeepers withdrew as tensions along Israel’s borders increased.',image:'assets/01-peacekeepers.jpg',video:null,animatedMap:'assets/maps/01-un-withdrawal.svg',source:0
  },
  {
    date:'22 TO 23 MAY 1967',day:'BEFORE THE WAR',phase:0,tag:'02 / THE BLOCKADE',title:'The Straits of Tiran close',
    brief:'Egypt announces that the Straits of Tiran will be closed to Israeli shipping. These waters connect Israel’s port of Eilat to the Red Sea. Israel regards the blockade as a serious threat to its security and freedom of navigation.',
    intel:'The United States and other countries explored diplomatic proposals to reopen the waterway. These did not remove the crisis before the war.',
    question:'What do you do while the waterway remains blocked?',
    options:['Rely on international guarantees without further military preparation.','Seek an international solution while preparing for the possibility of fighting.'],correct:1,
    success:'Israel pursued diplomacy and prepared militarily. The failure to reopen the Straits helped persuade Israeli leaders that the crisis was deepening.',
    alternative:'There was no diplomatic breakthrough by early June. The historical Israeli response combined international appeals with military preparations.',
    focus:['sinai','israel'],point:[399,420],map:'STRAITS OF TIRAN',archiveTitle:'The maritime blockade',archiveCaption:'Eilat’s access to the Red Sea became a central question in the crisis.',image:'assets/02-tiran.jpg',video:null,animatedMap:'assets/maps/02-straits-tiran.svg',source:1
  },
  {
    date:'30 MAY 1967',day:'BEFORE THE WAR',phase:0,tag:'03 / A NEW ALLIANCE',title:'Jordan joins the crisis',
    brief:'Jordan signs a mutual defence agreement with Egypt. Egypt, Syria and Jordan now form the main fronts of Israel’s security crisis. Threatening public statements add to fear among Israelis, while families and reservists prepare for possible war.',
    intel:'Israel faced the possibility of fighting across several fronts. Mobilising reserves protected the country but was costly and disrupted daily life.',
    question:'How does Israel prepare for the possibility of several fronts?',
    options:['Call up reservists and prepare the home front while maintaining diplomatic contact.','Maintain normal readiness while seeking assurances from Egypt and Jordan.'],correct:0,
    success:'Israel mobilised large numbers of reservists. Public anxiety was intense, especially amid fears that the conflict could threaten the state’s survival.',
    alternative:'The crisis was not over. Israeli leaders continued the mobilisation because a regional war was a genuine possibility.',
    focus:['israel','westbank','golan'],point:[427,277],map:'THREE FRONTS',archiveTitle:'Israel prepares',archiveCaption:'Reservists were mobilised as tensions increased across the region.',image:'assets/03-mobilisation.jpg',video:null,animatedMap:'assets/maps/03-mobilisation.svg',source:1
  },
  {
    date:'4 JUNE 1967',day:'EVE OF WAR',phase:0,tag:'04 / THE CABINET VOTE',title:'The decision to act',
    brief:'After weeks of mounting tensions and unsuccessful diplomacy, Israeli ministers meet to determine whether to begin military action. Some worry about international support and the dangers of striking first. Others believe waiting increases the risk.',
    intel:'The cabinet voted on 4 June to take military action. The timing and necessity of the first strike remain subjects of historical discussion.',
    question:'Which course did Israel’s government choose in the historical record?',
    options:['Give diplomacy more time, despite the risk of further escalation.','Authorise military action, beginning with an air operation against Egypt.'],correct:1,
    success:'The government authorised action. Israeli aircraft were ordered to strike Egyptian airfields the following morning.',
    alternative:'Waiting was a real question in contemporary debate, but it was not the cabinet’s final decision on 4 June 1967.',
    focus:['israel','sinai'],point:[370,207],map:'THE DECISION ROOM',archiveTitle:'The cabinet debates',archiveCaption:'Prime Minister Levi Eshkol and ministers faced the most consequential decision of the crisis.',image:'assets/04-cabinet.jpg',video:null,mediaCredit:'Unpacked / OpenDor Media',source:2
  },
  {
    date:'5 JUNE 1967',day:'DAY ONE',phase:1,tag:'05 / OPERATION FOCUS',title:'The opening air strikes',
    brief:'Israel launches the war with a major air operation against Egyptian airfields. The surprise attacks destroy much of Egypt’s air force on the ground, allowing Israeli forces to operate with a major advantage in the air.',
    intel:'The operation is commonly called Operation Focus. It was crucial to Israel’s rapid military success, although fighting continued on several fronts.',
    question:'What was the opening military priority on 5 June?',
    options:['Attack Egyptian airfields to reduce the threat from the air.','Open with a ground offensive in Sinai before trying to neutralise Egyptian aircraft.'],correct:0,
    success:'Israeli pilots struck Egyptian air bases. The loss of aircraft and runways severely weakened Egypt’s ability to defend its forces in Sinai.',
    alternative:'The historical operation focused on Egyptian airfields, not symbolic flights over cities.',
    focus:['sinai','israel'],point:[342,306],map:'THE SOUTHERN FRONT',archiveTitle:'Operation Focus',archiveCaption:'The opening air campaign dramatically changed the balance of the war.',image:'assets/05-airfields.jpg',video:null,mediaCredit:'Unpacked / OpenDor Media',archivePhoto:'assets/05-airfields-wreckage.jpg',archivePhotoCredit:'Dan Hadani Collection, The Pritzker Family National Photography Collection, The National Library of Israel',archivePhotoCaption:'Wreckage of the Egyptian Air Force after the first day of the war. Historical photograph.',source:1
  },
  {
    date:'5 JUNE 1967',day:'DAY ONE',phase:1,tag:'06 / THE EASTERN FRONT',title:'Jordan opens fire',
    brief:'Israel initially tells Jordan that it will not attack if Jordan stays outside the fighting. Jordanian forces nevertheless begin shelling western Jerusalem and other Israeli positions. A second major front opens.',
    intel:'King Hussein had signed a defence pact with Egypt. Reports of Egyptian success during the first hours of the war also influenced Jordanian decisions.',
    question:'How did Israel respond after Jordan entered the fighting?',
    options:['Defend existing positions but avoid a wider advance against Jordanian forces.','Defend its positions and begin operations against Jordanian forces.'],correct:1,
    success:'Israeli forces counterattacked. Fighting spread across Jerusalem and the West Bank, then controlled by Jordan.',
    alternative:'Israeli forces did not withdraw from the defence of Jerusalem. They responded militarily after Jordan began shelling.',
    focus:['westbank','israel'],point:[427,277],map:'JERUSALEM FRONT',archiveTitle:'Jerusalem under fire',archiveCaption:'Jordanian artillery fire was followed by intense fighting around Jerusalem.',image:'assets/06-shelling.jpg',video:null,mediaCredit:'Unpacked / OpenDor Media',source:1
  },
  {
    date:'6 JUNE 1967',day:'DAY TWO',phase:1,tag:'07 / THE APPROACH',title:'A divided Jerusalem',
    brief:'Israeli troops fight to secure strategic routes around Jerusalem. The city has been divided since 1948. The Old City and its sacred sites remain under Jordanian control. Any assault risks casualties, damage to holy places and major diplomatic consequences.',
    intel:'The Israeli government had not entered the war with an agreed plan to capture the Old City. Events on the ground changed the options available.',
    question:'What was the next part of Israel’s advance around Jerusalem?',
    options:['Secure surrounding positions and routes before attempting to enter the Old City.','Attempt to enter the Old City before securing the routes and surrounding positions.'],correct:0,
    success:'Israeli forces secured positions around the city. By 7 June, they were in a position to enter East Jerusalem and the Old City.',
    alternative:'The historical advance consolidated key positions rather than abandoning Jerusalem. The decision to enter the Old City remained sensitive.',
    focus:['westbank'],point:[427,277],map:'EAST JERUSALEM',archiveTitle:'The divided city',archiveCaption:'The Old City was under Jordanian control from 1948 until June 1967.',image:'assets/07-jerusalem.jpg',video:null,animatedMap:'assets/maps/07-jerusalem.svg',source:1
  },
  {
    date:'7 JUNE 1967',day:'DAY THREE',phase:1,tag:'08 / THE OLD CITY',title:'The Old City is entered',
    brief:'Israeli paratroopers enter the Old City through the Lions’ Gate. Israeli forces gain control of the Temple Mount, also known as Haram al Sharif, and reach the Western Wall. The moment carries deep meaning for Jewish history while also transforming the position of Palestinian residents and Muslim and Christian holy sites.',
    intel:'Israeli leaders sought to safeguard the holy places. The Muslim Waqf retained a central religious administration role at the Temple Mount.',
    question:'What approach is consistent with the reported Israeli priority in the Old City?',
    options:['Delay entry into the Old City because of the risks to religious sites and civilians.','Enter with ground forces while seeking to protect sacred places.'],correct:1,
    success:'Israeli paratroopers entered the Old City on 7 June. The Western Wall became accessible to Jewish worshippers, while Jerusalem’s political and religious status remained deeply contested.',
    alternative:'The objective was not to destroy the holy sites. Israeli leaders were concerned about the damage and diplomatic repercussions of an assault.',
    focus:['westbank','israel'],point:[427,277],map:'THE OLD CITY',archiveTitle:'Jerusalem, 7 June',archiveCaption:'Paratroopers reached the Western Wall after the battle for Jerusalem.',image:'assets/08-old-city.jpg',video:null,mediaCredit:'IDF',source:1
  },
  {
    date:'7 JUNE 1967',day:'DAY THREE',phase:1,tag:'09 / THE SOUTHERN FRONT',title:'The route to Eilat',
    brief:'Meanwhile, Israel’s southern offensive has moved rapidly through Sinai. Israeli forces take Sharm el Sheikh near the entrance to the Straits of Tiran. Israel can again use the sea route it had regarded as essential.',
    intel:'Egyptian forces retreated across Sinai. By 8 June, fighting on the Egyptian and Jordanian fronts had largely stopped.',
    question:'Which strategic goal was achieved in the south?',
    options:['Regain access through the Straits of Tiran and secure the Sinai front.','Hold existing positions in Sinai instead of pressing towards the Straits of Tiran.'],correct:0,
    success:'Israel secured Sharm el Sheikh and access to the Straits. By the end of the fighting it occupied the Sinai Peninsula and Gaza Strip.',
    alternative:'Capturing Cairo was not the outcome of the 1967 southern campaign. Securing Sinai and access to the Straits were central developments.',
    focus:['sinai','gaza'],point:[399,420],map:'SINAI AND THE STRAITS',archiveTitle:'The Sinai campaign',archiveCaption:'The battle in Sinai was decided quickly. The blockade of the Straits ended.',image:'assets/09-sinai.jpg',video:'assets/09-sinai.mp4',mediaCredit:'Periscope Film LLC',photoCredit:'Dan Hadani Collection, The Pritzker Family National Photography Collection, The National Library of Israel',photoCaption:'Still: IDF soldiers at an improvised shower in Sinai, June 1967. The film illustrates armour and artillery; precise filming locations have not been verified.',source:7
  },
  {
    date:'8 JUNE 1967',day:'DAY FOUR',phase:1,tag:'10 / THE CEASEFIRE',title:'The fighting changes',
    brief:'Egypt and Jordan accept ceasefire arrangements, and fighting on those fronts winds down. Syrian positions in the Golan Heights still overlook Israeli communities near the Sea of Galilee. The Israeli government debates whether to fight on the northern front.',
    intel:'The United Nations Security Council had been pressing for a ceasefire. Expanding the war carried risks as well as possible security gains.',
    question:'Which approach reflects the events of 8 June?',
    options:['Continue offensive operations against Egypt despite ceasefire arrangements.','End the major fighting with Egypt and Jordan while examining the Syrian front.'],correct:1,
    success:'By 8 June, fighting with Egypt and Jordan had stopped. The critical remaining decision concerned Syria and the Golan Heights.',
    alternative:'The Israeli campaign did not continue towards Cairo. The northern front became the focus of the final two days.',
    focus:['golan','syria'],point:[447,115],map:'NORTHERN FRONT',archiveTitle:'The northern question',archiveCaption:'Syrian positions in the Golan overlooked communities in northern Israel.',image:'assets/10-northern-front.jpg',video:null,mediaCredit:'Unpacked / OpenDor Media',source:7
  },
  {
    date:'9 JUNE 1967',day:'DAY FIVE',phase:1,tag:'11 / THE GOLAN DECISION',title:'The high ground',
    brief:'Syria’s Golan Heights offer commanding terrain above northern Israel. The Israeli cabinet and military leadership debate an offensive against Syrian forces. Defence Minister Moshe Dayan, initially opposed to a ground attack, changes his position on 9 June.',
    intel:'There were strong arguments both for and against advancing. Fighting on the Golan was costly, and the possibility of another UN ceasefire was approaching.',
    question:'Which decision was taken as the war entered its fifth day?',
    options:['Stay below the Golan Heights and accept a ceasefire without an offensive.','Authorise an advance onto the Golan Heights despite the risks.'],correct:1,
    success:'Israeli forces attacked Syrian positions on 9 June. The advance was contested but continued into the following day.',
    alternative:'Restraint was advocated by some leaders, but the actual decision on 9 June was to launch the Golan offensive.',
    focus:['golan','syria'],point:[451,113],map:'GOLAN HEIGHTS',archiveTitle:'The battle for the Golan',archiveCaption:'The northern offensive took place on 9 and 10 June, shortly before the final ceasefire.',image:'assets/11-golan.jpg',video:null,mediaCredit:'Unpacked / OpenDor Media',source:3
  },
  {
    date:'10 JUNE 1967',day:'DAY SIX',phase:1,tag:'12 / THE WAR ENDS',title:'Six days later',
    brief:'After heavy fighting, Israeli forces gain control of the Golan Heights. International pressure for a ceasefire is intense. Israel now holds territory captured from Egypt, Jordan and Syria, and faces decisions extending far beyond the battlefield.',
    intel:'The war ended on 10 June. Control of the Sinai, Gaza, West Bank, East Jerusalem and Golan would reshape politics in the region.',
    question:'How did the military phase end?',
    options:['The sides accepted a ceasefire and the major fighting stopped.','Continue the northern offensive towards Damascus rather than accept a ceasefire.'],correct:0,
    success:'The ceasefire took hold on 10 June. The military conflict had lasted just six days, but its consequences continued for decades.',
    alternative:'The main fighting ended with a ceasefire on 10 June. Israeli forces did not take Damascus.',
    focus:['golan','sinai','westbank','gaza'],point:[446,120],map:'THE CEASEFIRE',archiveTitle:'The ceasefire',archiveCaption:'The 5 to 10 June war changed the territorial map of the Middle East.',image:'assets/12-ceasefire.jpg',video:null,animatedMap:'assets/maps/12-ceasefire.svg',source:7
  },
  {
    date:'19 JUNE 1967',day:'AFTER THE WAR',phase:2,tag:'13 / TERRITORY AND PEACE',title:'What should happen to the land?',
    brief:'Israel’s leaders debate the territories captured in the war. Some support far reaching territorial exchanges for peace. Others want to retain areas considered vital for security, while another camp argues against withdrawal. Cabinet ministers discuss peace treaties involving Egypt and Syria.',
    intel:'On 19 June, the cabinet adopted a position involving potential withdrawal from Sinai and the Golan for peace and security arrangements. Historians dispute how far this was formally communicated as an offer.',
    question:'Which position did the cabinet adopt on 19 June?',
    options:['Retain all captured territory without proposing any withdrawal in peace negotiations.','Consider peace treaties with Egypt and Syria involving withdrawal from Sinai and the Golan.'],correct:1,
    success:'The cabinet agreed on a diplomatic position involving Sinai and the Golan in exchange for peace. East Jerusalem, the West Bank and Gaza raised further unresolved questions.',
    alternative:'Not every minister agreed on the future of the territories. Nevertheless, the recorded resolution included possible withdrawal from Sinai and the Golan for peace.',
    focus:['sinai','golan','westbank'],point:[389,278],map:'LAND FOR PEACE?',archiveTitle:'The peace debate',archiveCaption:'The future of the occupied territories divided Israeli leaders.',image:'assets/13-cabinet-peace.jpg',video:null,animatedMap:'assets/maps/13-peace.svg',source:4
  },
  {
    date:'1 SEPTEMBER 1967',day:'AFTER THE WAR',phase:2,tag:'14 / THE THREE NO’S',title:'Khartoum and the future',
    brief:'Arab League leaders meet in Khartoum, Sudan, from 29 August to 1 September. Their declaration becomes known for the “Three No’s”: no peace with Israel, no recognition of Israel and no negotiations with Israel. The outcome appears to narrow the immediate prospects for direct peace talks.',
    intel:'The Khartoum statement represented the participating governments at that summit. Arab and Israeli positions were not fixed forever. Egypt and Israel signed a peace treaty in 1979.',
    question:'How should the historical record of Khartoum be understood?',
    options:['Arab League leaders adopted a declaration rejecting peace, recognition and negotiations with Israel at that time.','Arab League leaders called for immediate direct peace negotiations with Israel.'],correct:0,
    success:'The Three No’s became a defining feature of the immediate aftermath. In November 1967, UN Resolution 242 offered a framework linking withdrawal, recognition and secure peace.',
    alternative:'There was no peace treaty at Khartoum. Its declaration included the Three No’s, although diplomatic positions evolved in later years.',
    focus:['israel','sinai','golan','westbank'],point:[411,250],map:'THE DIPLOMATIC FRONT',archiveTitle:'Nasser arrives at the Khartoum Summit',archiveCaption:'AP Archive footage dated 30 August 1967 shows President Gamal Abdel Nasser arriving in Khartoum. The Arab League declaration containing the Three No’s was adopted at the summit on 1 September.',image:'assets/14-khartoum.jpg',video:'assets/14-khartoum.mp4',mediaCredit:'AP Archive',photoCaption:'30 August 1967: President Nasser arrives at Khartoum and inspects a guard of honour. This footage shows his arrival, not the adoption of the final declaration.',source:6
  }
];



/* Decision-screen photographs are separate from the animated outcome films.
   Never label a map, an illustration or a documentary reconstruction as an
   original historical photograph. Dates refer to the pictured event when known. */
const ARCHIVE_CARDS = [
  {kind:'HISTORICAL PHOTOGRAPH',image:'assets/archive/01-unef-flag-19-may-1967.jpg',alt:'A United Nations peacekeeper lowers the UN flag at King’s Gate on 19 May 1967.',tag:'The UN flag comes down',date:'19 May 1967',location:'King’s Gate, Gaza City',source:'UN Photo',caption:'The United Nations flag is lowered at the Erez crossing as the Emergency Force withdraws from its observation posts.'},
  {kind:'ARCHIVAL PHOTO REQUIRED',image:null,tag:'The maritime blockade',date:'May 1967',location:'Straits of Tiran',source:'Archival photograph pending',caption:'A historical photograph of Eilat, the Straits of Tiran or shipping in 1967 is still needed.'},
  {kind:'HISTORICAL PHOTOGRAPH',image:"https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ab/Flickr_-_Government_Press_Office_%28GPO%29_-_P.M._Levy_Eshkol_with_Chief_of_Staff_Yitzhak_Rabin_and_Min._Yigal_Allon.jpg/960px-Flickr_-_Government_Press_Office_%28GPO%29_-_P.M._Levy_Eshkol_with_Chief_of_Staff_Yitzhak_Rabin_and_Min._Yigal_Allon.jpg",tag:'Eshkol visits military units',date:'25 May 1967',location:'Negev, Israel',source:'Government Press Office (GPO), photo D325-044',caption:'Levi Eshkol, Yitzhak Rabin and Yigal Allon visit army units before the war.'},
  {kind:'DOCUMENTARY ARCHIVE FRAME',image:'assets/04-cabinet.jpg',tag:'Cabinet deliberations',date:'June 1967',location:'Israel',source:'Unpacked / OpenDor Media',caption:'A historical image included in documentary coverage of Israel’s wartime leadership.'},
  {kind:'HISTORICAL PHOTOGRAPH',image:'assets/archive/05-egyptian-aircraft-wreckage.jpg',alt:'A man stands beside the wreckage of an Egyptian military aircraft after the opening air strikes.',tag:'The aftermath of Operation Focus',date:'5 June 1967',location:'Egyptian airfield',source:'Dan Hadani Collection, The Pritzker Family National Photography Collection, The National Library of Israel',caption:'A photograph of damaged Egyptian Air Force aircraft following the opening day of the war.'},
  {kind:'DOCUMENTARY ARCHIVE FRAME',image:'assets/06-shelling.jpg',tag:'Jerusalem under fire',date:'5 June 1967',location:'Jerusalem front',source:'Unpacked / OpenDor Media',caption:'A frame from documentary footage illustrating the fighting after Jordan entered the war.'},
  {kind:'ARCHIVAL PHOTO REQUIRED',image:null,tag:'The battle for East Jerusalem',date:'6 June 1967',location:'Jerusalem',source:'Archival photograph pending',caption:'A photograph of Ammunition Hill or the fighting around East Jerusalem is still needed.'},
  {kind:'HISTORICAL PHOTOGRAPH',image:"https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dc/Flickr_-_Israel_Defense_Forces_-_Life_of_Lt._Gen._Yitzhak_Rabin%2C_7th_IDF_Chief_of_Staff_in_photos_%2814%29.jpg/960px-Flickr_-_Israel_Defense_Forces_-_Life_of_Lt._Gen._Yitzhak_Rabin%2C_7th_IDF_Chief_of_Staff_in_photos_%2814%29.jpg",tag:'Commanders enter the Old City',date:'7 June 1967',location:'Lions’ Gate, Jerusalem',source:'Ilan Bruner / Government Press Office (GPO), D327-039',caption:'Moshe Dayan, Yitzhak Rabin and Uzi Narkiss enter the Old City following the fighting.'},
  {kind:'HISTORICAL PHOTOGRAPH',image:'assets/archive/09-israeli-soldiers-sinai-shower.jpg',alt:'Israeli soldiers wash using a makeshift shower beside military trucks in Sinai.',tag:'A moment in the Sinai',date:'1967',location:'Sinai Peninsula',source:'Dan Hadani Collection, The Pritzker Family National Photography Collection, The National Library of Israel',caption:'Israeli soldiers use a makeshift shower during the Sinai campaign.'},
  {kind:'DOCUMENTARY ARCHIVE FRAME',image:'assets/10-northern-front.jpg',tag:'The northern front',date:'June 1967',location:'Northern Israel and Syria',source:'Unpacked / OpenDor Media',caption:'A frame from the documentary footage of artillery and the fighting on the Syrian front.'},
  {kind:'HISTORICAL PHOTOGRAPH',image:"https://thumb.wikimedia.org/wikipedia/commons/thumb/4/47/Israeli_tanks_advancing_on_the_Golan_Heights._June_1967._D327-098.jpg/960px-Israeli_tanks_advancing_on_the_Golan_Heights._June_1967._D327-098.jpg",tag:'Israeli armour on the Golan',date:'10 June 1967',location:'Near Tel Faher, Golan Heights',source:'Assaf Kutin / Government Press Office (GPO), D327-098',caption:'Israeli forces advance near Tel Faher during the final day of the war.'},
  {kind:'ARCHIVAL PHOTO REQUIRED',image:null,tag:'The ceasefire',date:'10 June 1967',location:'Israel and neighbouring fronts',source:'Archival photograph pending',caption:'A dated photograph of soldiers or contemporary celebrations at the ceasefire is still needed.'},
  {kind:'ARCHIVAL PHOTO REQUIRED',image:null,tag:'The peace debate',date:'19 June 1967',location:'Jerusalem',source:'Archival photograph pending',caption:'A verified photograph of the Israeli cabinet or its June 1967 deliberations is still needed.'},
  {kind:'AP ARCHIVE FILM FRAME',image:'assets/14-khartoum.jpg',tag:'Nasser arrives in Khartoum',date:'30 August 1967',location:'Khartoum, Sudan',source:'AP Archive',caption:'President Nasser arrives at the summit. This film shows his arrival, not the declaration of the Three No’s.'}
];


/* GPO gallery: catalogued from the supplied sixdaywar.org photo page,
   with explicit photo dates and separate links for unavailable image files. */
const GPO_LIBRARY = [{"stage":3,"title":"Shelter preparations at Nahal Oz","date":"29 May 1967","location":"Kibbutz Nahal Oz","description":"Toddlers and nurses outside the entrance to an underground shelter.","image":null,"link":"https://www.sixdaywar.org/resources-documents-photos-and-video/photos/","source":"Government Press Office (GPO)","notes":""},{"stage":3,"title":"Children sheltered at Gadot","date":"1 April 1967","location":"Kibbutz Gadot","description":"Children shelter during a Syrian shelling attack; photograph predates the June war.","image":null,"link":"https://www.sixdaywar.org/resources-documents-photos-and-video/photos/","source":"Government Press Office (GPO)","notes":""},{"stage":6,"title":"Soldier covering a sniper position","date":"5 June 1967","location":"Jerusalem","description":"An Israeli soldier aims towards an Arab Legion sniper position.","image":null,"link":"https://www.sixdaywar.org/resources-documents-photos-and-video/photos/","source":"Government Press Office (GPO)","notes":""},{"stage":7,"title":"Israeli troops advance in Jerusalem","date":"5 June 1967","location":"Jerusalem","description":"Israeli troops advancing over high ground in Jerusalem.","image":null,"link":"https://www.sixdaywar.org/resources-documents-photos-and-video/photos/","source":"Government Press Office (GPO)","notes":""},{"stage":7,"title":"Paratroopers in an Old City lane","date":"7 June 1967","location":"Old City, Jerusalem","description":"Israeli paratroopers move through a deserted lane in the Old City.","image":null,"link":"https://www.sixdaywar.org/resources-documents-photos-and-video/photos/","source":"Government Press Office (GPO)","notes":""},{"stage":8,"title":"Commanders enter through Lions’ Gate","date":"7 June 1967","location":"Old City, Jerusalem","description":"Moshe Dayan, Yitzhak Rabin and Uzi Narkiss enter Jerusalem’s Old City.","image":"https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dc/Flickr_-_Israel_Defense_Forces_-_Life_of_Lt._Gen._Yitzhak_Rabin%2C_7th_IDF_Chief_of_Staff_in_photos_%2814%29.jpg/960px-Flickr_-_Israel_Defense_Forces_-_Life_of_Lt._Gen._Yitzhak_Rabin%2C_7th_IDF_Chief_of_Staff_in_photos_%2814%29.jpg","link":"https://commons.wikimedia.org/wiki/File:Flickr_-_Israel_Defense_Forces_-_Life_of_Lt._Gen._Yitzhak_Rabin,_7th_IDF_Chief_of_Staff_in_photos_(14).jpg","source":"Government Press Office (GPO)","notes":"Matching GPO photograph, photographed by Ilan Bruner."},{"stage":8,"title":"Israeli paratroopers at the Western Wall","date":"7 June 1967","location":"Western Wall, Jerusalem","description":"Paratroopers stand at the Western Wall; the website identifies the image as GPO. The original file has not been embedded.","image":null,"link":"https://www.sixdaywar.org/resources-documents-photos-and-video/photos/","source":"Government Press Office (GPO)","notes":""},{"stage":8,"title":"Israeli flag above the Western Wall","date":"7 June 1967","location":"Western Wall, Jerusalem","description":"Israeli paratroopers raise an Israeli flag above the Western Wall.","image":null,"link":"https://www.sixdaywar.org/resources-documents-photos-and-video/photos/","source":"Government Press Office (GPO)","notes":""},{"stage":8,"title":"Dayan and Narkiss beside a street sign","date":"7 June 1967","location":"Old City, Jerusalem","description":"Israeli commanders stand beside a sign directing people towards the Western Wall.","image":null,"link":"https://www.sixdaywar.org/resources-documents-photos-and-video/photos/","source":"Government Press Office (GPO)","notes":""},{"stage":8,"title":"Soldiers and commanders in Jerusalem","date":"3 June 1967 (gallery date)","location":"Jerusalem","description":"Yitzhak Rabin and Ezer Weizman speaking to soldiers. The gallery date should be treated cautiously.","image":null,"link":"https://www.sixdaywar.org/resources-documents-photos-and-video/photos/","source":"Government Press Office (GPO)","notes":""},{"stage":8,"title":"Aerial view of Jerusalem","date":"9 June 1967","location":"Jerusalem","description":"View of Jerusalem shortly after Israeli forces took the Old City.","image":null,"link":"https://www.sixdaywar.org/resources-documents-photos-and-video/photos/","source":"Government Press Office (GPO)","notes":""},{"stage":10,"title":"Damaged house at Gadot","date":"1 April 1967","location":"Kibbutz Gadot","description":"A home damaged by Syrian shelling before the June war.","image":null,"link":"https://www.sixdaywar.org/resources-documents-photos-and-video/photos/","source":"Government Press Office (GPO)","notes":""},{"stage":10,"title":"Home damaged in Rosh Pina","date":"5 June 1967","location":"Rosh Pina","description":"A family inside a home damaged by Syrian shellfire.","image":null,"link":"https://www.sixdaywar.org/resources-documents-photos-and-video/photos/","source":"Government Press Office (GPO)","notes":""},{"stage":10,"title":"Stroller among the ruins","date":"11 June 1967","location":"Kibbutz Tel Katzir","description":"A child’s stroller lies amid debris after Syrian shelling.","image":null,"link":"https://www.sixdaywar.org/resources-documents-photos-and-video/photos/","source":"Government Press Office (GPO)","notes":""},{"stage":10,"title":"Sheltering during shellfire","date":"1 April 1967","location":"Kibbutz Gadot","description":"A child shelters during Syrian shelling; the photograph predates the June war.","image":null,"link":"https://www.sixdaywar.org/resources-documents-photos-and-video/photos/","source":"Government Press Office (GPO)","notes":""},{"stage":10,"title":"Children shelter at Tel Katzir","date":"1 January 1967 (gallery date)","location":"Kibbutz Tel Katzir","description":"Toddlers take shelter during shelling from Syrian positions near Tawafiq.","image":null,"link":"https://www.sixdaywar.org/resources-documents-photos-and-video/photos/","source":"Government Press Office (GPO)","notes":""},{"stage":10,"title":"Protective wall at Kibbutz Shamir","date":"1 January 1967 (gallery date)","location":"Kibbutz Shamir","description":"A concrete wall protects a dining hall facing the Syrian frontier.","image":null,"link":"https://www.sixdaywar.org/resources-documents-photos-and-video/photos/","source":"Government Press Office (GPO)","notes":""},{"stage":10,"title":"Syrian position overlooking the Galilee","date":"5 August 1967","location":"Tawfik, Golan Heights","description":"A Syrian tank in a fortified emplacement overlooking Tel Katzir; photographed after the war.","image":null,"link":"https://www.sixdaywar.org/resources-documents-photos-and-video/photos/","source":"Government Press Office (GPO)","notes":""},{"stage":10,"title":"Syrian tank position at Hirbet Batin","date":"5 August 1967","location":"Above Kibbutz Ha’on","description":"A Syrian fortified tank emplacement photographed after the fighting.","image":null,"link":"https://www.sixdaywar.org/resources-documents-photos-and-video/photos/","source":"Government Press Office (GPO)","notes":""},{"stage":10,"title":"Fortified Syrian position","date":"5 August 1967","location":"Above Kibbutz Ha’on","description":"The Amrat Az Adin fortified position overlooking the Sea of Galilee.","image":null,"link":"https://www.sixdaywar.org/resources-documents-photos-and-video/photos/","source":"Government Press Office (GPO)","notes":""},{"stage":10,"title":"View down from Tel Azaziat","date":"1 August 1967","location":"Golan Heights","description":"View towards Kibbutz Daphna and Dan from the former Syrian fortifications; taken after the war.","image":null,"link":"https://www.sixdaywar.org/resources-documents-photos-and-video/photos/","source":"Government Press Office (GPO)","notes":""},{"stage":10,"title":"View from the Syrian Heights","date":"3 August 1967","location":"Golan Heights","description":"View towards Daphna and Shear Yashuv from Tel Azaziat; photographed after the war.","image":null,"link":"https://www.sixdaywar.org/resources-documents-photos-and-video/photos/","source":"Government Press Office (GPO)","notes":""},{"stage":11,"title":"Israeli tanks climbing the Golan","date":"10 June 1967","location":"Golan Heights","description":"Israeli armour advances up the steep terrain during the final stage of the war.","image":null,"link":"https://www.sixdaywar.org/resources-documents-photos-and-video/photos/","source":"Government Press Office (GPO)","notes":""},{"stage":11,"title":"Israeli tanks advancing on the heights","date":"10 June 1967","location":"Near Tel Faher, Golan Heights","description":"Verified additional GPO photograph of Israeli tanks and troops advancing.","image":"https://thumb.wikimedia.org/wikipedia/commons/thumb/4/47/Israeli_tanks_advancing_on_the_Golan_Heights._June_1967._D327-098.jpg/960px-Israeli_tanks_advancing_on_the_Golan_Heights._June_1967._D327-098.jpg","link":"https://commons.wikimedia.org/wiki/File:Israeli_tanks_advancing_on_the_Golan_Heights._June_1967._D327-098.jpg","source":"Government Press Office (GPO)","notes":"Additional GPO photograph of the same battle, by Assaf Kutin; not verified as identical to the gallery thumbnail."},{"stage":11,"title":"Northern command visit by Eshkol","date":"10 June 1967","location":"Northern Command","description":"Prime Minister Levi Eshkol with senior officers during a visit to headquarters.","image":null,"link":"https://www.sixdaywar.org/resources-documents-photos-and-video/photos/","source":"Government Press Office (GPO)","notes":""},{"stage":12,"title":"Israeli soldiers at Banias","date":"11 June 1967","location":"Banias, Golan Heights","description":"An Israeli detachment stops beside a water pool following the war.","image":null,"link":"https://www.sixdaywar.org/resources-documents-photos-and-video/photos/","source":"Government Press Office (GPO)","notes":""},{"stage":12,"title":"Golan Heights shortly after the war","date":"1967","location":"Golan Heights","description":"Israeli tanks photographed in the Heights; the original gallery gives no exact day.","image":null,"link":"https://www.sixdaywar.org/resources-documents-photos-and-video/photos/","source":"Government Press Office (GPO)","notes":""},{"stage":12,"title":"View across the Galilee","date":"3 August 1967","location":"Tel Azaziat, Golan Heights","description":"A view of Daphna fishponds from former Syrian positions; photographed after the war.","image":null,"link":"https://www.sixdaywar.org/resources-documents-photos-and-video/photos/","source":"Government Press Office (GPO)","notes":""},{"stage":3,"title":"Eshkol visits troops in the Negev","date":"25 May 1967","location":"Negev, Israel","description":"Levi Eshkol, Yitzhak Rabin and Yigal Allon visit Israeli army units before the war.","image":"https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ab/Flickr_-_Government_Press_Office_%28GPO%29_-_P.M._Levy_Eshkol_with_Chief_of_Staff_Yitzhak_Rabin_and_Min._Yigal_Allon.jpg/960px-Flickr_-_Government_Press_Office_%28GPO%29_-_P.M._Levy_Eshkol_with_Chief_of_Staff_Yitzhak_Rabin_and_Min._Yigal_Allon.jpg","link":"https://commons.wikimedia.org/wiki/File:Flickr_-_Government_Press_Office_(GPO)_-_P.M._Levy_Eshkol_with_Chief_of_Staff_Yitzhak_Rabin_and_Min._Yigal_Allon.jpg","source":"Government Press Office (GPO)","notes":"Additional GPO record D325-044, not from the supplied gallery."}];
const GPO_GALLERY_URL = "https://www.sixdaywar.org/resources-documents-photos-and-video/photos/";
let gpoActive = [];
let gpoCursor = 0;
function openGpoGallery(){
  gpoActive=GPO_LIBRARY.filter(entry=>entry.stage===state.index+1);
  gpoCursor=0;
  if(!gpoActive.length)return;
  renderGpoGallery();
  $('gpo-dialog').showModal();
}
function renderGpoGallery(){
  const p=gpoActive[gpoCursor];
  $('gpo-count').textContent=`${gpoCursor+1} / ${gpoActive.length}`;
  $('gpo-heading').textContent=p.title;
  $('gpo-date').textContent=p.date;
  $('gpo-location').textContent=p.location;
  $('gpo-caption').textContent=p.description;
  $('gpo-photographer').textContent=p.source;
  $('gpo-source-link').href=p.link;
  $('gpo-source-link').textContent=p.image?'View the photo record ↗':'View the original GPO gallery ↗';
  $('gpo-notes').textContent=p.notes||'Source: Government Press Office (GPO)';
  const image=$('gpo-gallery-image'),missing=$('gpo-gallery-placeholder');
  image.hidden=true;missing.hidden=true;
  image.onload=()=>{image.hidden=false;missing.hidden=true};
  image.onerror=()=>{image.hidden=true;missing.hidden=false};
  if(p.image){ image.alt=p.description;image.src=p.image }
  else {image.removeAttribute('src');missing.hidden=false}
  $('gpo-prev').disabled=gpoCursor<=0;
  $('gpo-next').disabled=gpoCursor>=gpoActive.length-1;
}
function setGpoDecisionUI(index){
  const count=GPO_LIBRARY.filter(entry=>entry.stage===index+1).length;
  $('gpo-open').hidden=count===0;
  $('gpo-open').textContent=count?`Explore GPO archive photos (${count}) ↗`:'';
}

function renderDecisionArchive(index){
  const info=ARCHIVE_CARDS[index];
  const photo=$('archive-photo');
  const placeholder=$('archive-missing');
  $('archive-sequence').textContent=`${pad(index+1)} / ${STAGES.length}`;
  $('archive-kind').textContent=info.kind;
  $('archive-tag').textContent=info.tag;
  $('archive-date').textContent=info.date;
  $('archive-location').textContent=info.location;
  $('archive-source').textContent=info.source;
  $('archive-caption').textContent=info.caption;
  photo.hidden=true;placeholder.hidden=true;
  photo.onload=()=>{photo.hidden=false;placeholder.hidden=true};
  photo.onerror=()=>{photo.hidden=true;placeholder.hidden=false};
  if(info.image){photo.alt=info.alt||info.tag;photo.src=info.image}
  else{photo.removeAttribute('src');placeholder.hidden=false}
  $('decision-archive-card').classList.toggle('pending',!info.image);
}

// Each completed decision reveals an archival film when available.
// Missing films use the historically grounded illustrated outcome.
const PHASES = ['THE CRISIS', 'SIX DAYS OF WAR', 'THE AFTERMATH'];
const STATE_KEY = 'swu_six_days_decisions_v8_lives';
const PRIOR_STATE_KEY = 'swu_six_days_decisions_v2';
const INITIAL_SPARE_LIVES = 2;
const MAX_MISTAKES = 3;
const LEGACY_KEY = 'swu_six_days_decisions_v1';
const $ = id => document.getElementById(id);
const pad = n => String(n).padStart(2,'0');
let state = {index:0,alternatives:0,started:false,finished:false,gameOver:false};
let view = 'welcome';
let locked = false;
let pendingAdvance = null;
let videoReady = false;
let animationReady = false;
let mapReplayCount = 0;

function store(){try{localStorage.setItem(STATE_KEY,JSON.stringify(state))}catch(e){}}
function load(){
  try{
    // Existing players retain their chapter progress. The previous build had no lives.
    let raw=localStorage.getItem(STATE_KEY);
    let migrated=false;
    if(!raw){raw=localStorage.getItem(PRIOR_STATE_KEY)||localStorage.getItem(LEGACY_KEY);migrated=!!raw;}
    if(!raw)return;
    const data=JSON.parse(raw);
    if(data&&Number.isInteger(data.index)&&data.index>=0&&data.index<=STAGES.length){
      state={index:data.index,alternatives:migrated?0:Math.min(MAX_MISTAKES,Math.max(0,Number(data.alternatives)||0)),started:!!data.started,finished:!!data.finished,gameOver:migrated?false:!!data.gameOver};
      if(!state.finished && state.alternatives>=MAX_MISTAKES)state.gameOver=true;
      if(migrated)store();
    }
  }catch(e){}
}
function remainingLives(){return Math.max(0,INITIAL_SPARE_LIVES-state.alternatives)}
function renderLives(){
  const hearts=$('lives-icons');
  hearts.replaceChildren();
  for(let i=0;i<INITIAL_SPARE_LIVES;i++){
    const h=document.createElement('span');h.className='life-icon'+(i<remainingLives()?'':' spent');
    h.textContent='♥';h.setAttribute('aria-hidden','true');hearts.appendChild(h);
  }
  const remaining=remainingLives();
  const status=remaining>0?`${remaining} ${remaining===1?'life':'lives'} remaining`:'Final chance';
  $('lives-text').textContent=status;
  $('lives-counter').setAttribute('aria-label',`${status}. A third incorrect decision ends the game.`);
}

function setView(next){
  view=next;
  $('welcome-view').hidden=next!=='welcome';$('game-view').hidden=next!=='decision';$('reel-view').hidden=next!=='reel';$('finish-view').hidden=next!=='finish';$('gameover-view').hidden=next!=='gameover';
  window.scrollTo({top:0,behavior:'instant'});
}
function start(){if(state.finished||state.gameOver){reset();return;}state.started=true;state.finished=false;store();renderDecision();}
function reset(){state={index:0,alternatives:0,started:true,finished:false,gameOver:false};store();renderDecision();}
function goHome(){clearTimeout(pendingAdvance);stopVideo();locked=false;$('try-again-panel').hidden=true;setView('welcome');updateWelcome()}
function updateWelcome(){
  $('start-button').textContent=state.started&&!state.finished&&!state.gameOver?'Resume your journey →':state.finished||state.gameOver?'Begin the mission again →':'Enter the decision room →';
  $('welcome-new-button').hidden=!(state.started&&!state.finished&&!state.gameOver);
}
function requestRestart(){$('restart-dialog').showModal()}

function renderProgress(){
  const bar=$('micro-progress');bar.replaceChildren();
  STAGES.forEach((_,i)=>{const piece=document.createElement('span');piece.className='micro-piece'+(i<state.index?' completed':i===state.index?' live':'');bar.appendChild(piece)});
}
function renderDecision(){
  clearTimeout(pendingAdvance);stopVideo();
  if(state.gameOver){gameOver();return;}
  if(state.index>=STAGES.length){finish();return;}
  locked=false;
  renderLives();
  $('try-again-panel').hidden=true;
  const s=STAGES[state.index];
  $('stage-indicator').textContent=`DECISION ${pad(state.index+1)} / ${STAGES.length}`;
  $('scenario-chapter').textContent=`CHAPTER ${['ONE','TWO','THREE'][s.phase]} / ${PHASES[s.phase]}`;
  $('scenario-date').textContent=s.date;
  $('decision-title').textContent=s.title;
  $('scenario-copy').textContent=s.brief;
  $('scenario-intel').textContent=s.intel;
  $('question').textContent=s.question;
  renderDecisionArchive(state.index);
  setGpoDecisionUI(state.index);
  $('stage-source').href=SOURCES[s.source].url;
  const img=$('decision-photo');img.hidden=true;img.onload=()=>{img.hidden=false};img.onerror=()=>{img.hidden=true};img.src=s.image;
  const choices=$('choices');choices.replaceChildren();
  s.options.forEach((option,i)=>{
    const b=document.createElement('button');b.type='button';b.className='big-choice';b.setAttribute('aria-label',`Choice ${i===0?'A':'B'}: ${option}`);
    const top=document.createElement('span');top.className='big-choice-top';top.innerHTML=`<span class="big-choice-letter">${i===0?'A':'B'}</span><span class="big-choice-prompt">OPTION ${pad(i+1)} <span class="big-choice-marker">↗</span></span>`;
    const main=document.createElement('span');main.className='big-choice-copy';main.textContent=option;
    const bot=document.createElement('span');bot.className='big-choice-bottom';bot.textContent='MAKE THIS DECISION';
    b.append(top,main,bot);b.addEventListener('click',()=>choose(i));choices.appendChild(b);
  });
  renderProgress();setView('decision');
}
function choose(i){
  if(locked||view!=='decision'||state.index>=STAGES.length)return;
  locked=true;
  const stage=STAGES[state.index],correct=i===stage.correct;
  Array.from($('choices').children).forEach((b,j)=>{b.disabled=true;if(j===i)b.classList.add(correct?'correct':'incorrect')});
  if(correct){
    // Show the film sequence immediately following a correct historical decision.
    showReel(stage);
  }else{
    state.alternatives++;
    if(state.alternatives>=MAX_MISTAKES){
      state.gameOver=true;
      store();
      gameOver();
      return;
    }
    store();renderLives();
    const remaining=remainingLives();
    $('retry-lives').textContent=remaining===1?'LIFE LOST · 1 LIFE LEFT':'LIFE LOST · FINAL CHANCE';
    $('retry-heading').textContent=remaining===1?'One life remaining.':'Your final chance.';
    $('retry-copy').textContent=stage.alternative+' '+(remaining===0?'Another incorrect decision will end the mission.':'You can reconsider this decision.');
    $('try-again-panel').hidden=false;
    $('retry-button').focus();
  }
}
function retry(){
  locked=false;$('try-again-panel').hidden=true;
  Array.from($('choices').children).forEach(b=>{b.disabled=false;b.classList.remove('correct','incorrect')});
  $('choices').querySelector('button')?.focus();
}
function reelVideoPath(s){return s.video || s.image.replace(/\.(jpe?g|png|webp)$/i,'.mp4')}
function stopVideo(){
  $('archive-reveal').hidden=true;
  const v=$('outcome-video');
  v.oncanplay=null;v.onended=null;v.onerror=null;
  v.pause();v.removeAttribute('src');v.load();v.hidden=true;
  const youtubeFrame=$('outcome-youtube');youtubeFrame.removeAttribute('src');youtubeFrame.hidden=true;
  const mapFrame=$('animated-map');mapFrame.onload=null;mapFrame.removeAttribute('src');mapFrame.hidden=true;
  $('external-film-link').hidden=true;
  videoReady=false;animationReady=false;
  $('reel-view').classList.remove('has-video','has-animation');
}
function showReel(s){
  clearTimeout(pendingAdvance);stopVideo();setView('reel');
  $('reel-count').textContent=`${pad(state.index+1)} / ${STAGES.length}`;
  $('reel-date').textContent=s.date;
  $('reel-heading').textContent=s.archiveTitle;
  $('reel-description').textContent=s.success;
  $('reel-foot-step').textContent=state.index===STAGES.length-1?'NEXT: THE FINAL DEBRIEF':`NEXT: DECISION ${pad(state.index+2)}`;
  $('media-type').textContent='VISUAL HISTORY CARD';
  $('reel-help').textContent='Read the historical outcome and continue when you are ready.';
  $('reel-next').textContent=state.index===STAGES.length-1?'View the final debrief →':'Continue to the next decision →';
  $('reel-replay').hidden=true;
  const credit=$('reel-credit');credit.textContent=s.mediaCredit?`Footage: ${s.mediaCredit}`:s.photoCredit?`Photograph: ${s.photoCredit}`:'';credit.hidden=!(s.mediaCredit||s.photoCredit);
  const photoCaption=$('reel-photo-caption');photoCaption.textContent=s.photoCaption||'';photoCaption.hidden=!s.photoCaption;
  const image=$('reel-image');image.hidden=true;image.onload=()=>{image.hidden=false};image.onerror=()=>{image.hidden=true};image.src=s.image;
  $('reel-illustration').hidden=false;
  const vid=$('outcome-video');
  // Only Stage 08 preserves the Hebrew communications from the IDF film.
  vid.muted = state.index !== 7;
  vid.volume = state.index === 7 ? 1 : 0;
  // User provided this source as a YouTube link, not a locally licensed media file.
  // Official YouTube embedding allows students to view the original upload without
  // copying or redistributing Periscope Film's footage in the GitHub package.
  if(s.youtube){
    const yt=s.youtube;
    const frame=$('outcome-youtube');
    const sourceLink=$('external-film-link');
    sourceLink.href=`https://www.youtube.com/watch?v=${yt.id}&t=${yt.start}s`;
    sourceLink.hidden=false;
    credit.textContent=`Archival film source: ${yt.credit}. Viewed through the original YouTube player.`;
    credit.hidden=false;
    photoCaption.textContent=yt.description;
    photoCaption.hidden=false;
    $('media-type').textContent='SILENT ARCHIVAL FILM';
    $('reel-help').textContent='This archival film plays without sound. Choose Continue when ready.';
    $('reel-view').classList.add('has-video');
    $('reel-illustration').hidden=true;
    frame.hidden=false;
    frame.src=`https://www.youtube-nocookie.com/embed/${yt.id}?start=${yt.start}&end=${yt.end}&autoplay=1&mute=1&controls=0&disablekb=1&playsinline=1&rel=0`;
    $('reel-next').focus({preventScroll:true});
    return;
  }
  // Original silent animated maps fill the six stages that have no archival video.
  // They run locally as small SVG files with no external libraries or sound.
  if(s.animatedMap){
    animationReady=true;
    $('reel-view').classList.add('has-animation');
    $('reel-illustration').hidden=true;
    $('media-type').textContent='ANIMATED HISTORICAL MAP';
    $('reel-help').textContent='This original map animation has no audio. The next decision follows automatically.';
    $('reel-replay').hidden=false;
    $('reel-replay').textContent='Replay map animation ↺';
    credit.textContent='Map: original educational reconstruction using Natural Earth public domain geography. Not to scale.';
    credit.hidden=false;
    const frame=$('animated-map');frame.hidden=false;
    frame.onload=()=>{
      if(view!=='reel'||!animationReady)return;
      clearTimeout(pendingAdvance);
      pendingAdvance=setTimeout(()=>{if(view==='reel')advance()},15500);
    };
    frame.src=s.animatedMap+'?play='+ (++mapReplayCount);
    $('reel-next').focus({preventScroll:true});
    return;
  }
  // On GitHub Pages a missing local video simply falls back to the illustrated result.
  vid.oncanplay=()=>{
    if(view!=='reel'||videoReady)return;
    videoReady=true;
    $('reel-view').classList.add('has-video');vid.hidden=false;$('reel-illustration').hidden=true;
    $('media-type').textContent=state.index===7?'HEBREW ARCHIVE AUDIO':'SILENT ARCHIVE VIDEO';
    credit.hidden=!s.mediaCredit;
    $('reel-help').textContent=state.index===7?'Original Hebrew military communications. The next decision follows the clip.':'This film plays without sound. The next decision follows the clip.';
    $('reel-replay').hidden=false;
    const result=vid.play();if(result&&typeof result.catch==='function')result.catch(()=>{$('reel-help').textContent='Select play on the video to watch the historical footage.'});
  };
  vid.onended=()=>{
    if(view!=='reel')return;
    if(s.archivePhoto){
      const picture=$('archive-reveal-image');
      const verify=new Image();
      verify.onload=()=>{
        if(view!=='reel')return;
        picture.src=s.archivePhoto;
        $('archive-reveal-caption').textContent=s.archivePhotoCaption||'';
        $('archive-reveal-credit').textContent=s.archivePhotoCredit||'';
        $('archive-reveal').hidden=false;
        $('reel-help').textContent='Archival photograph: continue when you are ready.';
        pendingAdvance=setTimeout(()=>{if(view==='reel')advance()},6500);
      };
      verify.onerror=()=>{pendingAdvance=setTimeout(()=>{if(view==='reel')advance()},1800)};
      verify.src=s.archivePhoto;
      return;
    }
    $('reel-help').textContent='The clip has finished. Moving to the next decision.';
    pendingAdvance=setTimeout(()=>{if(view==='reel')advance()},2800);
  };
  vid.onerror=()=>{
    videoReady=false;$('reel-view').classList.remove('has-video');
    vid.hidden=true;$('reel-illustration').hidden=false;
    $('media-type').textContent='VISUAL HISTORY CARD';
    $('reel-replay').hidden=true;
    credit.hidden=!(s.photoCredit);
  };
  vid.src=reelVideoPath(s);vid.load();
  $('reel-next').focus({preventScroll:true});
}
function replayVideo(){
  clearTimeout(pendingAdvance);
  if(animationReady && view==='reel'){
    const frame=$('animated-map');
    frame.src=STAGES[state.index].animatedMap+'?play='+(++mapReplayCount);
    return;
  }
  const v=$('outcome-video');if(!videoReady)return;
  v.currentTime=0;v.play()?.catch(()=>{});
}
function advance(){
  if(view!=='reel')return;
  clearTimeout(pendingAdvance);stopVideo();
  state.index++;store();
  if(state.index>=STAGES.length)finish();else renderDecision();
}
function gameOver(){
  clearTimeout(pendingAdvance);stopVideo();
  locked=true;state.gameOver=true;state.finished=false;state.started=true;store();
  $('try-again-panel').hidden=true;
  $('gameover-stage').textContent=`REACHED DECISION ${pad(state.index+1)} OF ${STAGES.length}`;
  $('gameover-mistakes').textContent=state.alternatives;
  setView('gameover');
  $('gameover-restart').focus({preventScroll:true});
}
function finish(){
  state.finished=true;state.started=true;state.gameOver=false;store();stopVideo();
  $('finish-attempts').textContent=state.alternatives;setView('finish');
}
function openNotes(){$('notes-dialog').showModal()}
function setUpSources(){
  const root=$('sources-list');SOURCES.forEach(s=>{let a=document.createElement('a');a.className='source-link';a.href=s.url;a.target='_blank';a.rel='noopener noreferrer';a.textContent=s.title+' ↗';root.appendChild(a)});
}
function setUpLogos(){
  [['swu-logo','assets/swu-logo.png'],['explore-logo','assets/explore-logo.png']].forEach(([id,src])=>{
    const img=$(id);img.onload=()=>{img.hidden=false;img.nextElementSibling.hidden=true};img.onerror=()=>{img.hidden=true;img.nextElementSibling.hidden=false};img.src=src;
  });
}
function init(){
  $('gpo-open').addEventListener('click',openGpoGallery);
  $('gpo-prev').addEventListener('click',()=>{if(gpoCursor>0){gpoCursor--;renderGpoGallery()}});
  $('gpo-next').addEventListener('click',()=>{if(gpoCursor<gpoActive.length-1){gpoCursor++;renderGpoGallery()}});
  $('gpo-close').addEventListener('click',()=>$('gpo-dialog').close());
  setUpSources();setUpLogos();load();
  updateWelcome();
  $('start-button').addEventListener('click',start);
  $('home-button').addEventListener('click',goHome);
  $('restart-button').addEventListener('click',requestRestart);
  $('welcome-new-button').addEventListener('click',requestRestart);
  $('cancel-restart').addEventListener('click',()=>$('restart-dialog').close());
  $('confirm-restart').addEventListener('click',()=>{$('restart-dialog').close();reset()});
  $('retry-button').addEventListener('click',retry);
  $('reel-next').addEventListener('click',advance);
  $('reel-replay').addEventListener('click',replayVideo);
  $('notes-button').addEventListener('click',openNotes);
  $('welcome-notes-button').addEventListener('click',openNotes);
  $('finish-notes-button').addEventListener('click',openNotes);
  $('close-notes').addEventListener('click',()=>$('notes-dialog').close());
  $('notes-dialog').addEventListener('click',e=>{if(e.target===$('notes-dialog'))$('notes-dialog').close()});
  $('replay-button').addEventListener('click',reset);
  $('gameover-restart').addEventListener('click',reset);
  $('gameover-home').addEventListener('click',goHome);
  document.addEventListener('keydown',e=>{
    if($('notes-dialog').open)return;
    if(view==='decision'&&$('try-again-panel').hidden&&!locked&&(e.key==='1'||e.key==='2')){e.preventDefault();choose(Number(e.key)-1)}
    if(view==='decision'&&!$('try-again-panel').hidden&&e.key==='Escape'){e.preventDefault();retry()}
    if(view==='reel'&&e.key==='ArrowRight'){e.preventDefault();advance()}
  });
  if(state.gameOver)gameOver();else if(state.finished||state.index>=STAGES.length)finish();else setView('welcome');
}
document.addEventListener('DOMContentLoaded',init);
