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
    brief:'Egypt wants UN peacekeepers out of Sinai and Gaza. Egyptian troops are moving in. Israeli leaders are alarmed.',
    intel:'The UN force was stationed on Egyptian territory with Egypt’s consent. Its departure made the crisis more dangerous.',
    question:'What would you do first?',
    options:['Prepare the military while pushing for answers.','Trust diplomacy and delay military preparations.'],correct:0,
    success:'Israel raised military readiness while trying to resolve the crisis through diplomacy. The country entered a tense period of waiting.',
    alternative:'The historical government prepared for danger while still pursuing diplomacy.',
    focus:['israel','sinai'],point:[369,250],map:'SINAI AND THE BORDER',archiveTitle:'The period of waiting',archiveCaption:'UN peacekeepers withdrew as tensions along Israel’s borders increased.',image:'assets/01-peacekeepers.jpg',video:null,animatedMap:'assets/maps/01-un-withdrawal.svg',source:0
  },
  {
    date:'22 TO 23 MAY 1967',day:'BEFORE THE WAR',phase:0,tag:'02 / THE BLOCKADE',title:'The Straits of Tiran close',
    brief:'President Nasser closes the Straits of Tiran to Israeli shipping. Eilat’s route to the Red Sea is cut off. Israel sees this as a major threat.',
    intel:'Other countries considered ways to reopen the route, but no solution emerged before the war.',
    question:'How do you respond to the blockade?',
    options:['Wait for international guarantees before preparing further.','Push for diplomacy, but prepare for possible fighting.'],correct:1,
    success:'Israel tried diplomacy and prepared its forces. The blockade remained in place as the crisis deepened.',
    alternative:'Israel combined diplomatic efforts with military preparations because the blockade remained unresolved.',
    focus:['sinai','israel'],point:[399,420],map:'STRAITS OF TIRAN',archiveTitle:'The maritime blockade',archiveCaption:'Eilat’s access to the Red Sea became a central question in the crisis.',image:'assets/02-tiran.jpg',video:null,animatedMap:'assets/maps/02-straits-tiran.svg',source:1
  },
  {
    date:'30 MAY 1967',day:'BEFORE THE WAR',phase:0,tag:'03 / A NEW ALLIANCE',title:'Jordan joins the crisis',
    brief:'Jordan signs a defence pact with Egypt. Israel now faces the possibility of war with Egypt, Jordan and Syria. Reservists and families prepare for the worst.',
    intel:'Mobilising reservists was expensive and disruptive, but it strengthened Israel’s defences.',
    question:'What is your next move?',
    options:['Call up reservists and prepare civilians.','Keep normal readiness and seek new assurances.'],correct:0,
    success:'Israel mobilised its reservists as fear spread through the country.',
    alternative:'The historical response included mobilisation because a wider war was possible.',
    focus:['israel','westbank','golan'],point:[427,277],map:'THREE FRONTS',archiveTitle:'Israel prepares',archiveCaption:'Reservists were mobilised as tensions increased across the region.',image:'assets/03-mobilisation.jpg',video:null,animatedMap:'assets/maps/03-mobilisation.svg',source:1
  },
  {
    date:'4 JUNE 1967',day:'EVE OF WAR',phase:0,tag:'04 / THE CABINET VOTE',title:'The decision to act',
    brief:'Weeks of tension have passed. Diplomacy has failed to end the crisis. On 4 June, Israeli ministers must decide whether to strike first or wait.',
    intel:'Striking first carried major risks. So did waiting. Historians continue to debate the options.',
    question:'What did the cabinet decide?',
    options:['Wait longer for a diplomatic breakthrough.','Approve an air strike against Egyptian bases.'],correct:1,
    success:'The cabinet approved military action. Israeli jets were set to attack Egyptian airfields on 5 June.',
    alternative:'Waiting was debated, but the cabinet authorised military action on 4 June.',
    focus:['israel','sinai'],point:[370,207],map:'THE DECISION ROOM',archiveTitle:'The cabinet debates',archiveCaption:'Prime Minister Levi Eshkol and ministers faced the most consequential decision of the crisis.',image:'assets/04-cabinet.jpg',video:null,mediaCredit:'Unpacked / OpenDor Media',source:2
  },
  {
    date:'5 JUNE 1967',day:'DAY ONE',phase:1,tag:'05 / OPERATION FOCUS',title:'The opening air strikes',
    brief:'At dawn on 5 June, Israel launches Operation Focus. Its aircraft attack Egyptian airfields, aiming to prevent Egypt from using its air force.',
    intel:'Air power became a major advantage, but ground battles were still to come.',
    question:'Where do you strike first?',
    options:['Target the Egyptian airfields.','Begin the ground campaign before the air strikes.'],correct:0,
    success:'Israeli aircraft hit Egyptian bases and destroyed much of the Egyptian air force on the ground.',
    alternative:'Operation Focus opened with attacks on Egyptian airfields, giving Israel a major air advantage.',
    focus:['sinai','israel'],point:[342,306],map:'THE SOUTHERN FRONT',archiveTitle:'Operation Focus',archiveCaption:'The opening air campaign dramatically changed the balance of the war.',image:'assets/05-airfields.jpg',video:null,mediaCredit:'Unpacked / OpenDor Media',archivePhoto:'assets/05-airfields-wreckage.jpg',archivePhotoCredit:'Dan Hadani Collection, The Pritzker Family National Photography Collection, The National Library of Israel',archivePhotoCaption:'Wreckage of the Egyptian Air Force after the first day of the war. Historical photograph.',source:1
  },
  {
    date:'5 JUNE 1967',day:'DAY ONE',phase:1,tag:'06 / THE EASTERN FRONT',title:'Jerusalem under fire',
    brief:'Israel tells Jordan it will not attack if Jordan stays out of the war. Jordanian forces then shell West Jerusalem. A second front opens.',
    intel:'King Hussein had signed a pact with Egypt and received misleading reports of early Egyptian victories.',
    question:'Jerusalem is under fire. What now?',
    options:['Defend the city but avoid wider operations.','Defend the city and counterattack Jordanian forces.'],correct:1,
    success:'Israel counterattacked. Heavy fighting spread through Jerusalem and the West Bank, then under Jordanian control.',
    alternative:'The historical response was a counterattack after Jordan entered the fighting.',
    focus:['westbank','israel'],point:[427,277],map:'JERUSALEM FRONT',archiveTitle:'Jerusalem under fire',archiveCaption:'Jordanian artillery fire was followed by intense fighting around Jerusalem.',image:'assets/gpo/10-jerusalem-101-400x267.jpg',video:'assets/06-shelling.mp4',mediaCredit:'Unpacked / OpenDor Media',source:1
  },
  {
    date:'6 JUNE 1967',day:'DAY TWO',phase:1,tag:'07 / THE APPROACH',title:'A divided Jerusalem',
    brief:'The battle for Jerusalem continues. The Old City has been under Jordanian control since 1948. Narrow streets and holy sites make any assault dangerous.',
    intel:'Israel did not begin the war with a settled plan to take the Old City.',
    question:'How do you approach the Old City?',
    options:['Secure the surrounding routes and positions first.','Enter the Old City before securing the approaches.'],correct:0,
    success:'Israeli forces secured positions around Jerusalem. On 7 June, they entered the Old City.',
    alternative:'Troops secured key routes and positions before entering the Old City.',
    focus:['westbank'],point:[427,277],map:'EAST JERUSALEM',archiveTitle:'A divided Jerusalem',archiveCaption:'The Old City and East Jerusalem had been under Jordanian control since 1948.',image:'assets/divided-jerusalem-aerial-1967.jpg',video:null,animatedMap:'assets/maps/07-jerusalem.svg',source:1
  },
  {
    date:'7 JUNE 1967',day:'DAY THREE',phase:1,tag:'08 / THE OLD CITY',title:'The Old City is entered',
    brief:'On 7 June, Israeli paratroopers approach the Lions’ Gate. Beyond it lie the Temple Mount, also known as Haram al Sharif, and the Western Wall.',
    intel:'Entering the Old City meant major military, religious and political risks.',
    question:'What approach was chosen?',
    options:['Hold back to avoid fighting near holy places.','Enter on foot while seeking to protect holy places.'],correct:1,
    success:'Israeli paratroopers entered the Old City and reached the Western Wall. Jerusalem’s status remained deeply contested.',
    alternative:'Israel entered the Old City while its leaders sought to protect the holy places.',
    focus:['westbank','israel'],point:[427,277],map:'THE OLD CITY',archiveTitle:'Jerusalem, 7 June',archiveCaption:'Paratroopers reached the Western Wall after the battle for Jerusalem.',image:'assets/08-old-city.jpg',video:null,mediaCredit:'IDF',source:1
  },
  {
    date:'7 JUNE 1967',day:'DAY THREE',phase:1,tag:'09 / THE SOUTHERN FRONT',title:'The route to Eilat',
    brief:'Israeli forces push across Sinai. They reach Sharm el Sheikh, near the entrance to the Straits of Tiran. The southern front is shifting fast.',
    intel:'By 8 June, major fighting with Egypt and Jordan was drawing to a close.',
    question:'What was the strategic goal?',
    options:['Reopen the Straits and secure the Sinai front.','Stop short of the Straits and hold existing positions.'],correct:0,
    success:'Israel took Sharm el Sheikh and gained access through the Straits. Its forces occupied Sinai and Gaza by the war’s end.',
    alternative:'Securing access to the Straits was a central result of the Sinai campaign.',
    focus:['sinai','gaza'],point:[399,420],map:'SINAI AND THE STRAITS',archiveTitle:'The Sinai campaign',archiveCaption:'The battle in Sinai was decided quickly. The blockade of the Straits ended.',image:'assets/09-sinai.jpg',video:'assets/09-sinai.mp4',mediaCredit:'Periscope Film LLC',photoCredit:'Dan Hadani Collection, The Pritzker Family National Photography Collection, The National Library of Israel',photoCaption:'Still: IDF soldiers at an improvised shower in Sinai, June 1967. The film illustrates armour and artillery; precise filming locations have not been verified.',source:7
  },
  {
    date:'8 JUNE 1967',day:'DAY FOUR',phase:1,tag:'10 / THE CEASEFIRE',title:'The fighting changes',
    brief:'Egypt and Jordan accept ceasefire arrangements. But Syrian positions on the Golan Heights still overlook northern Israeli communities.',
    intel:'The UN was pushing for a ceasefire. Opening another offensive had serious risks.',
    question:'Where does Israel turn next?',
    options:['Keep attacking Egypt despite the ceasefire.','Stop fighting Egypt and Jordan; assess Syria.'],correct:1,
    success:'The Egyptian and Jordanian fronts quietened. Israel’s leaders turned to the question of Syria and the Golan Heights.',
    alternative:'The major fighting with Egypt and Jordan ended. Attention shifted to Syria.',
    focus:['golan','syria'],point:[447,115],map:'NORTHERN FRONT',archiveTitle:'The northern question',archiveCaption:'Syrian positions in the Golan overlooked communities in northern Israel.',image:'assets/10-northern-front.jpg',video:null,mediaCredit:'Unpacked / OpenDor Media',source:7
  },
  {
    date:'9 JUNE 1967',day:'DAY FIVE',phase:1,tag:'11 / THE GOLAN DECISION',title:'The high ground',
    brief:'Syrian positions high on the Golan overlook the Galilee. Israel’s leaders disagree about whether to attack. Defence Minister Moshe Dayan changes his mind on 9 June.',
    intel:'The Golan assault was dangerous, and a final ceasefire was approaching.',
    question:'What decision was made on 9 June?',
    options:['Accept the ceasefire without taking the Heights.','Launch an offensive onto the Golan Heights.'],correct:1,
    success:'Israeli troops attacked the Syrian positions on 9 June and advanced into the next day.',
    alternative:'There were arguments for restraint, but Israel launched the Golan offensive.',
    focus:['golan','syria'],point:[451,113],map:'GOLAN HEIGHTS',archiveTitle:'The battle for the Golan',archiveCaption:'The northern offensive took place on 9 and 10 June, shortly before the final ceasefire.',image:'assets/11-golan.jpg',video:null,animatedMap:'assets/maps/11-golan.svg',mediaCredit:'Unpacked / OpenDor Media',source:3
  },
  {
    date:'10 JUNE 1967',day:'DAY SIX',phase:1,tag:'12 / THE WAR ENDS',title:'Six days later',
    brief:'By 10 June, Israeli forces control the Golan Heights. The UN presses for a ceasefire. The war has changed the map of the region.',
    intel:'The consequences for Israelis and Palestinians, and for the wider region, would last for decades.',
    question:'How does the war end?',
    options:['Accept the ceasefire and stop major fighting.','Keep advancing towards Damascus.'],correct:0,
    success:'The ceasefire took hold on 10 June. The war lasted six days; its political consequences lasted far longer.',
    alternative:'The fighting ended with a ceasefire. Israeli forces did not take Damascus.',
    focus:['golan','sinai','westbank','gaza'],point:[446,120],map:'THE CEASEFIRE',archiveTitle:'The ceasefire',archiveCaption:'The 5 to 10 June war changed the territorial map of the Middle East.',image:'assets/12-ceasefire.jpg',video:null,animatedMap:'assets/maps/12-ceasefire.svg',source:7
  },
  {
    date:'19 JUNE 1967',day:'AFTER THE WAR',phase:2,tag:'13 / TERRITORY AND PEACE',title:'What should happen to the land?',
    brief:'Israel now controls Sinai, Gaza, the West Bank, East Jerusalem and the Golan Heights. Its leaders must decide what territory, if any, to exchange for peace.',
    intel:'On 19 June, the cabinet discussed withdrawal from Sinai and the Golan in return for peace. Whether the position became a formal offer is disputed.',
    question:'What did the cabinet agree on?',
    options:['Keep all the territory without considering withdrawal.','Consider returning Sinai and the Golan for peace.'],correct:1,
    success:'The cabinet supported possible withdrawal from Sinai and the Golan for peace. Other territorial questions remained unresolved.',
    alternative:'The cabinet’s recorded position included possible withdrawal from Sinai and the Golan.',
    focus:['sinai','golan','westbank'],point:[389,278],map:'LAND FOR PEACE?',archiveTitle:'The peace debate',archiveCaption:'The future of the occupied territories divided Israeli leaders.',image:'assets/13-cabinet-peace.jpg',video:null,animatedMap:'assets/maps/13-peace.svg',source:4
  },
  {
    date:'1 SEPTEMBER 1967',day:'AFTER THE WAR',phase:2,tag:'14 / THE THREE NO’S',title:'Khartoum and the future',
    brief:'Arab League leaders meet in Khartoum. On 1 September, their declaration sets out the Three No’s: no peace, recognition or negotiations with Israel.',
    intel:'The declaration reflected the participating governments at that time. Egypt later made peace with Israel in 1979.',
    question:'What did the summit declare?',
    options:['No peace, recognition or negotiations with Israel.','Immediate direct peace negotiations with Israel.'],correct:0,
    success:'The Three No’s shaped the immediate aftermath. Later that year, UN Resolution 242 helped define a future diplomatic framework.',
    alternative:'The Khartoum declaration included the Three No’s; it did not announce direct peace talks.',
    focus:['israel','sinai','golan','westbank'],point:[411,250],map:'THE DIPLOMATIC FRONT',archiveTitle:'Nasser arrives at the Khartoum Summit',archiveCaption:'AP Archive footage dated 30 August 1967 shows President Gamal Abdel Nasser arriving in Khartoum. The Arab League declaration containing the Three No’s was adopted at the summit on 1 September.',image:'assets/14-khartoum.jpg',video:'assets/14-khartoum.mp4',mediaCredit:'AP Archive',photoCaption:'30 August 1967: President Nasser arrives at Khartoum and inspects a guard of honour. This footage shows his arrival, not the adoption of the final declaration.',source:6
  }
];



/* Decision-screen photographs are separate from the animated outcome films.
   Never label a map, an illustration or a documentary reconstruction as an
   original historical photograph. Dates refer to the pictured event when known. */
const ARCHIVE_CARDS = [{"kind":"ARCHIVE PHOTO","image":"assets/archive/01-unef-flag-19-may-1967.jpg","alt":"United Nations flag lowered at King’s Gate, 19 May 1967","tag":"The UN flag comes down","date":"19 May 1967","location":"King’s Gate, Gaza City","source":"UN Photo","caption":"UN peacekeepers withdraw from positions along the border."},{"kind":"ARCHIVE PHOTO","image":"assets/gpo/13-nasser-pre-war.jpg","tag":"President Nasser, 1967","date":"1967 (exact date not verified)","location":"Egypt (precise location not verified)","source":"Government Press Office (GPO) collection","caption":"Egypt’s president ordered the Straits of Tiran closed. This is a contextual portrait, not a photograph of the blockade."},{"kind":"ARCHIVE PHOTO","image":"assets/gpo/19-shelter-galilee-20-400x267.jpg","tag":"Civilian preparations","date":"1967 (date not verified)","location":"Galilee, northern Israel","source":"Government Press Office (GPO) collection","caption":"Families shelter in northern Israel. This photograph documents civilian vulnerability; it does not depict military mobilisation."},{"kind":"ARCHIVE PHOTO","image":"assets/gpo/18-rabin-52-400x267.jpg","tag":"IDF Chief of Staff Rabin","date":"1967 (exact date not verified)","location":"Israel (precise location not confirmed)","source":"Government Press Office (GPO) collection","caption":"Rabin photographed with military personnel. This is a contextual image, not a photograph of a cabinet meeting."},{"kind":"ARCHIVE PHOTO","image":"assets/archive/05-egyptian-aircraft-wreckage.jpg","alt":"Egyptian military aircraft wreckage after the opening air strikes","tag":"Operation Focus aftermath","date":"5 June 1967","location":"Egyptian airfield","source":"Dan Hadani Collection, The Pritzker Family National Photography Collection, The National Library of Israel","caption":"Damaged Egyptian military aircraft following Israeli air strikes on 5 June."},{"kind":"ARCHIVE PHOTO","image":"assets/gpo/10-jerusalem-101-400x267.jpg","tag":"Jerusalem under fire","date":"5 June 1967 (date not verified)","location":"Jerusalem","source":"Government Press Office (GPO) collection","caption":"Context photograph linked to the Jordanian front in Jerusalem. Replace with a King Hussein archive photo if a preferred file is later added.","alt":"Historical photograph linked to the Jordanian front in Jerusalem in June 1967"},{"kind":"ARCHIVE PHOTO","image":"assets/divided-jerusalem-aerial-1967.jpg","tag":"A divided Jerusalem","date":"1967","location":"Jerusalem","source":"Government Press Office (GPO) collection","caption":"Aerial view showing the Old City and the line through divided Jerusalem before the city was reunified in the war.","alt":"Aerial view of divided Jerusalem in 1967"},{"kind":"ARCHIVE PHOTO","image":"assets/gpo/17-paratroopers-western-wall.jpg","alt":"Three Israeli paratroopers standing at the Western Wall, photographed by David Rubinger on 7 June 1967","tag":"The three paratroopers","date":"7 June 1967","location":"Western Wall, Jerusalem","source":"David Rubinger / GPO archive","caption":"Three Israeli paratroopers photographed at the Western Wall on 7 June 1967."},{"kind":"ARCHIVE PHOTO","image":"assets/archive/09-israeli-soldiers-sinai-shower.jpg","tag":"A moment in the Sinai","date":"1967","location":"Sinai Peninsula","source":"Dan Hadani Collection, The Pritzker Family National Photography Collection, The National Library of Israel","caption":"Israeli soldiers use a makeshift shower during the Sinai campaign."},{"kind":"ARCHIVE PHOTO","image":"assets/gpo/21-shelter-galilee-22.jpg","tag":"Sheltering on the northern front","date":"1967 (date not verified)","location":"Galilee, northern Israel","source":"Government Press Office (GPO) collection","caption":"A child seeks shelter in northern Israel, illustrating the danger faced by border communities."},{"kind":"ARCHIVE PHOTO","image":"assets/gpo/08-israeli-tanks-in-golan-88-400x267.jpg","tag":"Armour on the Golan","date":"June 1967 (date not verified)","location":"Golan Heights","source":"Government Press Office (GPO) collection","caption":"Israeli armour pictured on the Golan Heights during the 1967 war; the precise day is not established."},{"kind":"ARCHIVE PHOTO","image":"assets/gpo/04-golan-tanks-104-400x267.jpg","tag":"After the fighting","date":"June 1967 (date not verified)","location":"Golan Heights","source":"Government Press Office (GPO) collection","caption":"Military vehicles on the Heights. This photograph illustrates the situation after the fighting; its precise date is not verified."},{"kind":"ARCHIVE PHOTO","image":"assets/gpo/03-eshkol-in-golan-86-400x267.jpg","tag":"Levi Eshkol on the Golan","date":"1967 (exact date not verified)","location":"Golan Heights","source":"Government Press Office (GPO) collection","caption":"Prime Minister Levi Eshkol visits the Golan. This image is contextual and does not depict the cabinet meeting of 19 June."},{"kind":"ARCHIVE FILM","image":"assets/14-khartoum.jpg","tag":"Nasser arrives in Khartoum","date":"30 August 1967","location":"Khartoum, Sudan","source":"AP Archive","caption":"President Nasser arrives for the summit. This does not depict the adoption of the Three No’s."}];


/* GPO gallery: catalogued from the supplied sixdaywar.org photo page,
   with explicit photo dates and separate links for unavailable image files. */
const GPO_LIBRARY = [{"stage":8,"title":"Dayan and Rabin in Jerusalem","date":"7 June 1967","location":"Old City, Jerusalem","description":"Moshe Dayan and Yitzhak Rabin with Israeli officers after entry into the Old City.","image":"assets/gpo/01-dayan-and-rabin-in-jerusalem.jpg","link":"https://www.sixdaywar.org/resources-documents-photos-and-video/photos/","source":"Government Press Office (GPO) collection","notes":"User supplied archive copy. Where an exact date is not documented, only the year or month is shown."},{"stage":8,"title":"Dayan at the Western Wall","date":"June 1967","location":"Western Wall, Jerusalem","description":"Moshe Dayan at the Western Wall following the war.","image":"assets/gpo/02-dayan-wailing-wall-46.jpg","link":"https://www.sixdaywar.org/resources-documents-photos-and-video/photos/","source":"Government Press Office (GPO) collection","notes":"User supplied archive copy. Where an exact date is not documented, only the year or month is shown."},{"stage":13,"title":"Levi Eshkol visits the Golan","date":"1967 (exact date not verified)","location":"Golan Heights","description":"Levi Eshkol visits soldiers and officials in the Golan region after the fighting.","image":"assets/gpo/03-eshkol-in-golan-86-400x267.jpg","link":"https://www.sixdaywar.org/resources-documents-photos-and-video/photos/","source":"Government Press Office (GPO) collection","notes":"User supplied archive copy. Where an exact date is not documented, only the year or month is shown."},{"stage":11,"title":"Armoured advance on the Heights","date":"June 1967 (date not verified)","location":"Golan Heights","description":"Israeli military vehicles and soldiers pictured on mountainous terrain.","image":"assets/gpo/04-golan-tanks-104-400x267.jpg","link":"https://www.sixdaywar.org/resources-documents-photos-and-video/photos/","source":"Government Press Office (GPO) collection","notes":"User supplied archive copy. Where an exact date is not documented, only the year or month is shown."},{"stage":11,"title":"Armour in motion","date":"June 1967 (date not verified)","location":"Golan Heights","description":"Tanks and military transport move across rough terrain during the Golan campaign.","image":"assets/gpo/05-golan-tanks-1-400x267.jpg","link":"https://www.sixdaywar.org/resources-documents-photos-and-video/photos/","source":"Government Press Office (GPO) collection","notes":"User supplied archive copy. Where an exact date is not documented, only the year or month is shown."},{"stage":11,"title":"Tank on the Heights","date":"1967 (date not verified)","location":"Golan Heights","description":"An Israeli tank overlooks the hills and valleys of the Golan Heights.","image":"assets/gpo/06-golan-tanks-2-400x267.jpg","link":"https://www.sixdaywar.org/resources-documents-photos-and-video/photos/","source":"Government Press Office (GPO) collection","notes":"User supplied archive copy. Where an exact date is not documented, only the year or month is shown."},{"stage":11,"title":"Armoured vehicle in rocky terrain","date":"1967 (date not verified)","location":"Golan Heights","description":"An Israeli military vehicle stationed on steep rocky ground.","image":"assets/gpo/07-golan-tanks-34-400x267.jpg","link":"https://www.sixdaywar.org/resources-documents-photos-and-video/photos/","source":"Government Press Office (GPO) collection","notes":"User supplied archive copy. Where an exact date is not documented, only the year or month is shown."},{"stage":11,"title":"Tanks and infantry on the Golan","date":"June 1967 (date not verified)","location":"Golan Heights","description":"Israeli tanks and soldiers on the northern front.","image":"assets/gpo/08-israeli-tanks-in-golan-88-400x267.jpg","link":"https://www.sixdaywar.org/resources-documents-photos-and-video/photos/","source":"Government Press Office (GPO) collection","notes":"User supplied archive copy. Where an exact date is not documented, only the year or month is shown."},{"stage":7,"title":"Jerusalem battlefield position","date":"June 1967 (date not verified)","location":"Jerusalem","description":"A soldier takes cover near a position overlooking a Jerusalem street.","image":"assets/gpo/09-jerusalem-100-400x267.jpg","link":"https://www.sixdaywar.org/resources-documents-photos-and-video/photos/","source":"Government Press Office (GPO) collection","notes":"User supplied archive copy. Where an exact date is not documented, only the year or month is shown."},{"stage":7,"title":"Old City street scene","date":"June 1967 (date not verified)","location":"Jerusalem","description":"Soldiers pictured in a narrow Jerusalem street.","image":"assets/gpo/10-jerusalem-101-400x267.jpg","link":"https://www.sixdaywar.org/resources-documents-photos-and-video/photos/","source":"Government Press Office (GPO) collection","notes":"User supplied archive copy. Where an exact date is not documented, only the year or month is shown."},{"stage":7,"title":"Soldiers among Jerusalem walls","date":"June 1967 (date not verified)","location":"Jerusalem","description":"Israeli troops beside a stone wall during the Jerusalem campaign.","image":"assets/gpo/11-jerusalem-105-400x267.jpg","link":"https://www.sixdaywar.org/resources-documents-photos-and-video/photos/","source":"Government Press Office (GPO) collection","notes":"User supplied archive copy. Where an exact date is not documented, only the year or month is shown."},{"stage":8,"title":"Jerusalem from above","date":"June 1967 (date not verified)","location":"Old City, Jerusalem","description":"Aerial view of the Old City and its prominent historic buildings.","image":"assets/gpo/12-jerusalem-1967-60-400x267.jpg","link":"https://www.sixdaywar.org/resources-documents-photos-and-video/photos/","source":"Government Press Office (GPO) collection","notes":"User supplied archive copy. Where an exact date is not documented, only the year or month is shown."},{"stage":2,"title":"President Nasser addresses a crowd","date":"1967 (exact date not verified)","location":"Egypt (precise location not verified)","description":"President Gamal Abdel Nasser addressing a crowd in the period surrounding the crisis.","image":"assets/gpo/13-nasser-pre-war.jpg","link":"https://www.sixdaywar.org/resources-documents-photos-and-video/photos/","source":"Government Press Office (GPO) collection","notes":"User supplied archive copy. Where an exact date is not documented, only the year or month is shown."},{"stage":5,"title":"Operation Focus aftermath","date":"5 June 1967 (attributed)","location":"Egypt","description":"Damaged aircraft on an Egyptian airfield after the Israeli opening air strikes.","image":"assets/gpo/16-operation-focus-aftermath.jpg","link":"https://www.sixdaywar.org/resources-documents-photos-and-video/photos/","source":"Government Press Office (GPO) collection","notes":"User supplied archive copy. Where an exact date is not documented, only the year or month is shown."},{"stage":8,"title":"The three paratroopers","date":"7 June 1967","location":"Western Wall, Jerusalem","description":"The celebrated photograph of three Israeli paratroopers at the Western Wall.","image":"assets/gpo/17-paratroopers-western-wall.jpg","link":"https://www.sixdaywar.org/resources-documents-photos-and-video/photos/","source":"David Rubinger / Government Press Office (GPO) archive","notes":"User supplied archive copy. Where an exact date is not documented, only the year or month is shown."},{"stage":4,"title":"Yitzhak Rabin with soldiers","date":"1967 (exact date not verified)","location":"Israel (precise location not confirmed)","description":"IDF Chief of Staff Yitzhak Rabin among soldiers and officers.","image":"assets/gpo/18-rabin-52-400x267.jpg","link":"https://www.sixdaywar.org/resources-documents-photos-and-video/photos/","source":"Government Press Office (GPO) collection","notes":"User supplied archive copy. Where an exact date is not documented, only the year or month is shown."},{"stage":3,"title":"Children shelter in the Galilee","date":"1967 (date not verified)","location":"Galilee, northern Israel","description":"Adults and children shelter together from shelling.","image":"assets/gpo/19-shelter-galilee-20-400x267.jpg","link":"https://www.sixdaywar.org/resources-documents-photos-and-video/photos/","source":"Government Press Office (GPO) collection","notes":"User supplied archive copy. Where an exact date is not documented, only the year or month is shown."},{"stage":3,"title":"Families outside a shelter","date":"1967 (date not verified)","location":"Galilee, northern Israel","description":"Families and children photographed near a shelter.","image":"assets/gpo/20-shelter-galilee-21-400x267.jpg","link":"https://www.sixdaywar.org/resources-documents-photos-and-video/photos/","source":"Government Press Office (GPO) collection","notes":"User supplied archive copy. Where an exact date is not documented, only the year or month is shown."},{"stage":3,"title":"A child takes shelter","date":"1967 (date not verified)","location":"Galilee, northern Israel","description":"A child pictured sheltering during the crisis.","image":"assets/gpo/21-shelter-galilee-22.jpg","link":"https://www.sixdaywar.org/resources-documents-photos-and-video/photos/","source":"Government Press Office (GPO) collection","notes":"User supplied archive copy. Where an exact date is not documented, only the year or month is shown."},{"stage":10,"title":"Northern frontier from above","date":"1967 (exact date not verified)","location":"Northern Israel","description":"View of kibbutzim and agricultural land near the Syrian border.","image":"assets/gpo/22-syria-kibbutz-25-400x267.jpg","link":"https://www.sixdaywar.org/resources-documents-photos-and-video/photos/","source":"Government Press Office (GPO) collection","notes":"User supplied archive copy. Where an exact date is not documented, only the year or month is shown."},{"stage":10,"title":"Damaged border settlement","date":"1967 (date not verified)","location":"Northern Israel","description":"A building in a northern kibbutz photographed in the war period.","image":"assets/gpo/23-syria-kibbutz-27-400x267.jpg","link":"https://www.sixdaywar.org/resources-documents-photos-and-video/photos/","source":"Government Press Office (GPO) collection","notes":"User supplied archive copy. Where an exact date is not documented, only the year or month is shown."},{"stage":10,"title":"Damage to a house","date":"1967 (date not verified)","location":"Northern Israel","description":"A resident surveys damage to a building near the Syrian border.","image":"assets/gpo/24-syria-kibbutz-28.jpg","link":"https://www.sixdaywar.org/resources-documents-photos-and-video/photos/","source":"Government Press Office (GPO) collection","notes":"User supplied archive copy. Where an exact date is not documented, only the year or month is shown."},{"stage":10,"title":"Civilians in a shelter","date":"1967 (date not verified)","location":"Northern Israel","description":"Civilians gather in a protected room.","image":"assets/gpo/25-syria-kibbutz-29.jpg","link":"https://www.sixdaywar.org/resources-documents-photos-and-video/photos/","source":"Government Press Office (GPO) collection","notes":"User supplied archive copy. Where an exact date is not documented, only the year or month is shown."},{"stage":10,"title":"Children in a shelter","date":"1967 (date not verified)","location":"Northern Israel","description":"Children and families take shelter during shelling.","image":"assets/gpo/26-syria-kibbutz-30-400x267.jpg","link":"https://www.sixdaywar.org/resources-documents-photos-and-video/photos/","source":"Government Press Office (GPO) collection","notes":"User supplied archive copy. Where an exact date is not documented, only the year or month is shown."},{"stage":10,"title":"Shell damage","date":"1967 (date not verified)","location":"Northern Israel","description":"Damage to a building in a northern settlement.","image":"assets/gpo/27-syria-kibbutz-31.jpg","link":"https://www.sixdaywar.org/resources-documents-photos-and-video/photos/","source":"Government Press Office (GPO) collection","notes":"User supplied archive copy. Where an exact date is not documented, only the year or month is shown."},{"stage":10,"title":"Inside a damaged building","date":"1967 (date not verified)","location":"Northern Israel","description":"Residents inside a damaged house following shelling.","image":"assets/gpo/28-syria-kibbutz-33.jpg","link":"https://www.sixdaywar.org/resources-documents-photos-and-video/photos/","source":"Government Press Office (GPO) collection","notes":"User supplied archive copy. Where an exact date is not documented, only the year or month is shown."},{"stage":10,"title":"Fortified lookout","date":"1967 (date not verified)","location":"Golan Heights","description":"An observation position overlooking the northern border.","image":"assets/gpo/29-syria-kibbutz-35-400x267.jpg","link":"https://www.sixdaywar.org/resources-documents-photos-and-video/photos/","source":"Government Press Office (GPO) collection","notes":"User supplied archive copy. Where an exact date is not documented, only the year or month is shown."},{"stage":10,"title":"View across the frontier","date":"1967 (date not verified)","location":"Golan Heights","description":"View of northern Israeli farmland from the high ground.","image":"assets/gpo/30-syria-kibbutz-36-400x267.jpg","link":"https://www.sixdaywar.org/resources-documents-photos-and-video/photos/","source":"Government Press Office (GPO) collection","notes":"User supplied archive copy. Where an exact date is not documented, only the year or month is shown."},{"stage":10,"title":"Defensive position overlooking Galilee","date":"1967 (date not verified)","location":"Golan Heights","description":"A defensive position on the high ground overlooking the Galilee.","image":"assets/gpo/31-syria-kibbutz-37-400x267.jpg","link":"https://www.sixdaywar.org/resources-documents-photos-and-video/photos/","source":"Government Press Office (GPO) collection","notes":"User supplied archive copy. Where an exact date is not documented, only the year or month is shown."},{"stage":8,"title":"At the Western Wall","date":"June 1967 (date not verified)","location":"Western Wall, Jerusalem","description":"Israeli soldiers and civilians gather at the Western Wall.","image":"assets/gpo/32-wall-58-400x267.jpg","link":"https://www.sixdaywar.org/resources-documents-photos-and-video/photos/","source":"Government Press Office (GPO) collection","notes":"User supplied archive copy. Where an exact date is not documented, only the year or month is shown."},{"stage":8,"title":"At the stones of the Wall","date":"June 1967 (date not verified)","location":"Western Wall, Jerusalem","description":"A soldier pictured at the stones of the Western Wall.","image":"assets/gpo/33-wall-jerusalem-3.jpg","link":"https://www.sixdaywar.org/resources-documents-photos-and-video/photos/","source":"Government Press Office (GPO) collection","notes":"User supplied archive copy. Where an exact date is not documented, only the year or month is shown."},{"stage":8,"title":"Gathering at the Western Wall","date":"June 1967 (date not verified)","location":"Western Wall, Jerusalem","description":"A crowd gathered at the Western Wall in the aftermath of the war.","image":"assets/gpo/34-wall-jerusalem-61-400x267.jpg","link":"https://www.sixdaywar.org/resources-documents-photos-and-video/photos/","source":"Government Press Office (GPO) collection","notes":"User supplied archive copy. Where an exact date is not documented, only the year or month is shown."}];
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
  $('gpo-source-link').textContent='View the original GPO collection ↗';
  $('gpo-notes').textContent=p.notes||'Source: Government Press Office (GPO) collection; supplied image.';
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
  $('gpo-open').textContent=count?`More photos (${count}) ↗`:'';
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

let audioContext=null,musicGain=null,musicMaster=null,musicStarted=false,musicMuted=true,musicTimers=[];
function clearMusicTimers(){musicTimers.forEach(id=>clearTimeout(id));musicTimers=[]}
function updateMusicButton(){const b=$('music-button'); if(!b)return; const on=musicStarted && !musicMuted; b.setAttribute('aria-pressed', String(on)); b.textContent=on?'♫ Music on':'♫ Music off';}
function stopMusic(){clearMusicTimers(); if(musicGain){musicGain.gain.cancelScheduledValues(audioContext.currentTime); musicGain.gain.setTargetAtTime(0,audioContext.currentTime,0.15);} musicMuted=true; updateMusicButton();}
function scheduleAmbientLoop(){ if(!audioContext||!musicGain) return; clearMusicTimers(); const notes=[146.83,174.61,196.00,220.00,196.00,174.61]; let t=audioContext.currentTime+0.05; notes.forEach((freq,i)=>{ const osc=audioContext.createOscillator(); const gain=audioContext.createGain(); osc.type=i%2?'triangle':'sine'; osc.frequency.value=freq; gain.gain.value=0.0001; osc.connect(gain).connect(musicGain); osc.start(t); gain.gain.exponentialRampToValueAtTime(0.025,t+0.4); gain.gain.exponentialRampToValueAtTime(0.0001,t+4.8); osc.stop(t+5); t+=2.3; }); musicTimers.push(setTimeout(()=>{if(!musicMuted) scheduleAmbientLoop()},12000)); }
function initMusic(){ if(audioContext) return; const AC=window.AudioContext||window.webkitAudioContext; if(!AC) return; audioContext=new AC(); musicMaster=audioContext.createGain(); musicMaster.gain.value=0.7; musicGain=audioContext.createGain(); musicGain.gain.value=0.0001; const lp=audioContext.createBiquadFilter(); lp.type='lowpass'; lp.frequency.value=900; musicGain.connect(lp).connect(musicMaster).connect(audioContext.destination); }
function startMusic(force){ initMusic(); if(!audioContext||!musicGain) return; audioContext.resume?.(); if(!musicStarted){musicStarted=true; musicMuted=false; scheduleAmbientLoop();} if(force) musicMuted=false; musicGain.gain.cancelScheduledValues(audioContext.currentTime); musicGain.gain.setTargetAtTime(musicMuted?0:0.9,audioContext.currentTime,0.4); updateMusicButton(); }
function toggleMusic(){ initMusic(); if(!audioContext) return; if(!musicStarted){musicStarted=true; musicMuted=false; scheduleAmbientLoop(); startMusic(true); return;} musicMuted=!musicMuted; if(musicMuted) stopMusic(); else startMusic(true); }

function store(){}
function load(){ state={index:0,alternatives:0,started:false,finished:false,gameOver:false}; }
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
function start(){reset();startMusic(true);}
function reset(){state={index:0,alternatives:0,started:true,finished:false,gameOver:false};renderDecision();}
function goHome(){clearTimeout(pendingAdvance);stopVideo();locked=false;$('try-again-panel').hidden=true;setView('welcome');updateWelcome()}
function updateWelcome(){ $('start-button').innerHTML='Start Mission <span aria-hidden="true">→</span>'; }
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
    const bot=document.createElement('span');bot.className='big-choice-bottom';bot.textContent='SELECT';
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
  if(s.video || (!s.animatedMap && !s.youtube)) stopMusic();
  $('reel-count').textContent=`${pad(state.index+1)} / ${STAGES.length}`;
  $('reel-date').textContent=s.date;
  $('reel-heading').textContent=s.archiveTitle;
  $('reel-description').textContent=s.success;
  $('reel-foot-step').textContent=state.index===STAGES.length-1?'NEXT: THE FINAL DEBRIEF':`NEXT: DECISION ${pad(state.index+2)}`;
  $('media-type').textContent='WHAT HAPPENED';
  $('reel-help').textContent='';
  $('reel-next').textContent=state.index===STAGES.length-1?'View the final result →':'Next decision →';
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
    $('media-type').textContent='WHAT HAPPENED';
    $('reel-help').textContent='';
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
    $('media-type').textContent='WHAT HAPPENED';
    $('reel-help').textContent='';
    $('reel-replay').hidden=false;
    $('reel-replay').textContent='Replay ↺';
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
    $('media-type').textContent=state.index===7?'WHAT HAPPENED':'WHAT HAPPENED';
    credit.hidden=!s.mediaCredit;
    $('reel-help').textContent=state.index===7?'':'';
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
    $('reel-help').textContent='';
    pendingAdvance=setTimeout(()=>{if(view==='reel')advance()},2800);
  };
  vid.onerror=()=>{
    videoReady=false;$('reel-view').classList.remove('has-video');
    vid.hidden=true;$('reel-illustration').hidden=false;
    $('media-type').textContent='WHAT HAPPENED';
    $('reel-replay').hidden=true;
    credit.hidden=!(s.photoCredit);
  };
  vid.src=reelVideoPath(s);vid.load();
  $('reel-next').focus({preventScroll:true});
}
function replayVideo(){
  clearTimeout(pendingAdvance);
  stopMusic();
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
  state.index++;
  if(state.index>=STAGES.length)finish();else {startMusic(true); renderDecision();}
}
function gameOver(){
  clearTimeout(pendingAdvance);stopVideo();
  startMusic(true);
  locked=true;state.gameOver=true;state.finished=false;state.started=true;
  $('try-again-panel').hidden=true;
  $('gameover-stage').textContent=`REACHED DECISION ${pad(state.index+1)} OF ${STAGES.length}`;
  $('gameover-mistakes').textContent=state.alternatives;
  setView('gameover');
  $('gameover-restart').focus({preventScroll:true});
}
function finish(){
  state.finished=true;state.started=true;state.gameOver=false;stopVideo();
  startMusic(true);
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
  $('music-button').addEventListener('click',toggleMusic);
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
  setView('welcome'); updateMusicButton();
}
document.addEventListener('DOMContentLoaded',init);
