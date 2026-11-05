/*
 * SIX DAYS OF DECISIONS | StandWithUs UK Explore
 * 14 chronological decision points, written for students aged 16 to 17.
 * Each correct answer follows the documented historical path, not necessarily
 * the only defensible strategic or moral choice.
 *
 * TO ADD MEDIA: put files inside assets/ and update image or video below.
 * Example image: 'assets/08-old-city.jpg'
 * Example video: 'assets/08-old-city.mp4'
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
    focus:['israel','sinai'],point:[369,250],map:'SINAI AND THE BORDER',archiveTitle:'The period of waiting',archiveCaption:'UN peacekeepers withdrew as tensions along Israel’s borders increased.',image:'assets/01-peacekeepers.jpg',video:null,source:0
  },
  {
    date:'22 TO 23 MAY 1967',day:'BEFORE THE WAR',phase:0,tag:'02 / THE BLOCKADE',title:'The Straits of Tiran close',
    brief:'Egypt announces that the Straits of Tiran will be closed to Israeli shipping. These waters connect Israel’s port of Eilat to the Red Sea. Israel regards the blockade as a serious threat to its security and freedom of navigation.',
    intel:'The United States and other countries explored diplomatic proposals to reopen the waterway. These did not remove the crisis before the war.',
    question:'What do you do while the waterway remains blocked?',
    options:['Rely on international guarantees without further military preparation.','Seek an international solution while preparing for the possibility of fighting.'],correct:1,
    success:'Israel pursued diplomacy and prepared militarily. The failure to reopen the Straits helped persuade Israeli leaders that the crisis was deepening.',
    alternative:'There was no diplomatic breakthrough by early June. The historical Israeli response combined international appeals with military preparations.',
    focus:['sinai','israel'],point:[399,420],map:'STRAITS OF TIRAN',archiveTitle:'The maritime blockade',archiveCaption:'Eilat’s access to the Red Sea became a central question in the crisis.',image:'assets/02-tiran.jpg',video:null,source:1
  },
  {
    date:'30 MAY 1967',day:'BEFORE THE WAR',phase:0,tag:'03 / A NEW ALLIANCE',title:'Jordan joins the crisis',
    brief:'Jordan signs a mutual defence agreement with Egypt. Egypt, Syria and Jordan now form the main fronts of Israel’s security crisis. Threatening public statements add to fear among Israelis, while families and reservists prepare for possible war.',
    intel:'Israel faced the possibility of fighting across several fronts. Mobilising reserves protected the country but was costly and disrupted daily life.',
    question:'How does Israel prepare for the possibility of several fronts?',
    options:['Call up reservists and prepare the home front while maintaining diplomatic contact.','Maintain normal readiness while seeking assurances from Egypt and Jordan.'],correct:0,
    success:'Israel mobilised large numbers of reservists. Public anxiety was intense, especially amid fears that the conflict could threaten the state’s survival.',
    alternative:'The crisis was not over. Israeli leaders continued the mobilisation because a regional war was a genuine possibility.',
    focus:['israel','westbank','golan'],point:[427,277],map:'THREE FRONTS',archiveTitle:'Israel prepares',archiveCaption:'Reservists were mobilised as tensions increased across the region.',image:'assets/03-mobilisation.jpg',video:null,source:1
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
    focus:['sinai','israel'],point:[342,306],map:'THE SOUTHERN FRONT',archiveTitle:'Operation Focus',archiveCaption:'The opening air campaign dramatically changed the balance of the war.',image:'assets/05-airfields.jpg',video:null,mediaCredit:'Unpacked / OpenDor Media',source:1
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
    focus:['westbank'],point:[427,277],map:'EAST JERUSALEM',archiveTitle:'The divided city',archiveCaption:'The Old City was under Jordanian control from 1948 until June 1967.',image:'assets/07-jerusalem.jpg',video:null,source:1
  },
  {
    date:'7 JUNE 1967',day:'DAY THREE',phase:1,tag:'08 / THE OLD CITY',title:'The Old City is entered',
    brief:'Israeli paratroopers enter the Old City through the Lions’ Gate. Israeli forces gain control of the Temple Mount, also known as Haram al Sharif, and reach the Western Wall. The moment carries deep meaning for Jewish history while also transforming the position of Palestinian residents and Muslim and Christian holy sites.',
    intel:'Israeli leaders sought to safeguard the holy places. The Muslim Waqf retained a central religious administration role at the Temple Mount.',
    question:'What approach is consistent with the reported Israeli priority in the Old City?',
    options:['Delay entry into the Old City because of the risks to religious sites and civilians.','Enter with ground forces while seeking to protect sacred places.'],correct:1,
    success:'Israeli paratroopers entered the Old City on 7 June. The Western Wall became accessible to Jewish worshippers, while Jerusalem’s political and religious status remained deeply contested.',
    alternative:'The objective was not to destroy the holy sites. Israeli leaders were concerned about the damage and diplomatic repercussions of an assault.',
    focus:['westbank','israel'],point:[427,277],map:'THE OLD CITY',archiveTitle:'Jerusalem, 7 June',archiveCaption:'Paratroopers reached the Western Wall after the battle for Jerusalem.',image:'assets/08-old-city.jpg',video:null,mediaCredit:'Old City archival film: source credit to be confirmed',source:1
  },
  {
    date:'7 JUNE 1967',day:'DAY THREE',phase:1,tag:'09 / THE SOUTHERN FRONT',title:'The route to Eilat',
    brief:'Meanwhile, Israel’s southern offensive has moved rapidly through Sinai. Israeli forces take Sharm el Sheikh near the entrance to the Straits of Tiran. Israel can again use the sea route it had regarded as essential.',
    intel:'Egyptian forces retreated across Sinai. By 8 June, fighting on the Egyptian and Jordanian fronts had largely stopped.',
    question:'Which strategic goal was achieved in the south?',
    options:['Regain access through the Straits of Tiran and secure the Sinai front.','Hold existing positions in Sinai instead of pressing towards the Straits of Tiran.'],correct:0,
    success:'Israel secured Sharm el Sheikh and access to the Straits. By the end of the fighting it occupied the Sinai Peninsula and Gaza Strip.',
    alternative:'Capturing Cairo was not the outcome of the 1967 southern campaign. Securing Sinai and access to the Straits were central developments.',
    focus:['sinai','gaza'],point:[399,420],map:'SINAI AND THE STRAITS',archiveTitle:'The Sinai campaign',archiveCaption:'The battle in Sinai was decided quickly. The blockade of the Straits ended.',image:'assets/09-sinai.jpg',video:null,source:7
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
    focus:['golan','syria'],point:[451,113],map:'GOLAN HEIGHTS',archiveTitle:'The battle for the Golan',archiveCaption:'The northern offensive took place on 9 and 10 June, shortly before the final ceasefire.',image:'assets/11-golan.jpg',video:null,source:3
  },
  {
    date:'10 JUNE 1967',day:'DAY SIX',phase:1,tag:'12 / THE WAR ENDS',title:'Six days later',
    brief:'After heavy fighting, Israeli forces gain control of the Golan Heights. International pressure for a ceasefire is intense. Israel now holds territory captured from Egypt, Jordan and Syria, and faces decisions extending far beyond the battlefield.',
    intel:'The war ended on 10 June. Control of the Sinai, Gaza, West Bank, East Jerusalem and Golan would reshape politics in the region.',
    question:'How did the military phase end?',
    options:['The sides accepted a ceasefire and the major fighting stopped.','Continue the northern offensive towards Damascus rather than accept a ceasefire.'],correct:0,
    success:'The ceasefire took hold on 10 June. The military conflict had lasted just six days, but its consequences continued for decades.',
    alternative:'The main fighting ended with a ceasefire on 10 June. Israeli forces did not take Damascus.',
    focus:['golan','sinai','westbank','gaza'],point:[446,120],map:'THE CEASEFIRE',archiveTitle:'The ceasefire',archiveCaption:'The 5 to 10 June war changed the territorial map of the Middle East.',image:'assets/12-ceasefire.jpg',video:null,source:7
  },
  {
    date:'19 JUNE 1967',day:'AFTER THE WAR',phase:2,tag:'13 / TERRITORY AND PEACE',title:'What should happen to the land?',
    brief:'Israel’s leaders debate the territories captured in the war. Some support far reaching territorial exchanges for peace. Others want to retain areas considered vital for security, while another camp argues against withdrawal. Cabinet ministers discuss peace treaties involving Egypt and Syria.',
    intel:'On 19 June, the cabinet adopted a position involving potential withdrawal from Sinai and the Golan for peace and security arrangements. Historians dispute how far this was formally communicated as an offer.',
    question:'Which position did the cabinet adopt on 19 June?',
    options:['Retain all captured territory without proposing any withdrawal in peace negotiations.','Consider peace treaties with Egypt and Syria involving withdrawal from Sinai and the Golan.'],correct:1,
    success:'The cabinet agreed on a diplomatic position involving Sinai and the Golan in exchange for peace. East Jerusalem, the West Bank and Gaza raised further unresolved questions.',
    alternative:'Not every minister agreed on the future of the territories. Nevertheless, the recorded resolution included possible withdrawal from Sinai and the Golan for peace.',
    focus:['sinai','golan','westbank'],point:[389,278],map:'LAND FOR PEACE?',archiveTitle:'The peace debate',archiveCaption:'The future of the occupied territories divided Israeli leaders.',image:'assets/13-cabinet-peace.jpg',video:null,source:4
  },
  {
    date:'1 SEPTEMBER 1967',day:'AFTER THE WAR',phase:2,tag:'14 / THE THREE NO’S',title:'Khartoum and the future',
    brief:'Arab League leaders meet in Khartoum, Sudan, from 29 August to 1 September. Their declaration becomes known for the “Three No’s”: no peace with Israel, no recognition of Israel and no negotiations with Israel. The outcome appears to narrow the immediate prospects for direct peace talks.',
    intel:'The Khartoum statement represented the participating governments at that summit. Arab and Israeli positions were not fixed forever. Egypt and Israel signed a peace treaty in 1979.',
    question:'How should the historical record of Khartoum be understood?',
    options:['Arab League leaders adopted a declaration rejecting peace, recognition and negotiations with Israel at that time.','Arab League leaders called for immediate direct peace negotiations with Israel.'],correct:0,
    success:'The Three No’s became a defining feature of the immediate aftermath. In November 1967, UN Resolution 242 offered a framework linking withdrawal, recognition and secure peace.',
    alternative:'There was no peace treaty at Khartoum. Its declaration included the Three No’s, although diplomatic positions evolved in later years.',
    focus:['israel','sinai','golan','westbank'],point:[411,250],map:'THE DIPLOMATIC FRONT',archiveTitle:'The Khartoum summit',archiveCaption:'Arab leaders adopted the declaration known as the Three No’s.',image:'assets/14-khartoum.jpg',video:null,source:6
  }
];


// Every completed decision reveals a video interlude before advancing.
// Upload assets/01-peacekeepers.mp4, etc. No JavaScript edits are necessary.
const PHASES = ['THE CRISIS', 'SIX DAYS OF WAR', 'THE AFTERMATH'];
const STATE_KEY = 'swu_six_days_decisions_v2';
const LEGACY_KEY = 'swu_six_days_decisions_v1';
const $ = id => document.getElementById(id);
const pad = n => String(n).padStart(2,'0');
let state = {index:0,alternatives:0,started:false,finished:false};
let view = 'welcome';
let locked = false;
let pendingAdvance = null;
let videoReady = false;

function store(){try{localStorage.setItem(STATE_KEY,JSON.stringify(state))}catch(e){}}
function load(){try{let raw=localStorage.getItem(STATE_KEY);if(!raw)raw=localStorage.getItem(LEGACY_KEY);const data=JSON.parse(raw);if(data&&Number.isInteger(data.index)&&data.index>=0&&data.index<=STAGES.length)state={index:data.index,alternatives:Number(data.alternatives)||0,started:!!data.started,finished:!!data.finished};}catch(e){}}
function setView(next){
  view=next;
  $('welcome-view').hidden=next!=='welcome';$('game-view').hidden=next!=='decision';$('reel-view').hidden=next!=='reel';$('finish-view').hidden=next!=='finish';
  window.scrollTo({top:0,behavior:'instant'});
}
function start(){state.started=true;state.finished=false;store();renderDecision();}
function reset(){state={index:0,alternatives:0,started:true,finished:false};store();renderDecision();}
function renderProgress(){
  const bar=$('micro-progress');bar.replaceChildren();
  STAGES.forEach((_,i)=>{const piece=document.createElement('span');piece.className='micro-piece'+(i<state.index?' completed':i===state.index?' live':'');bar.appendChild(piece)});
}
function renderDecision(){
  clearTimeout(pendingAdvance);stopVideo();
  if(state.index>=STAGES.length){finish();return;}
  locked=false;
  $('try-again-panel').hidden=true;
  const s=STAGES[state.index];
  $('stage-indicator').textContent=`DECISION ${pad(state.index+1)} / ${STAGES.length}`;
  $('scenario-chapter').textContent=`CHAPTER ${['ONE','TWO','THREE'][s.phase]} / ${PHASES[s.phase]}`;
  $('scenario-date').textContent=s.date;
  $('decision-title').textContent=s.title;
  $('scenario-copy').textContent=s.brief;
  $('scenario-intel').textContent=s.intel;
  $('question').textContent=s.question;
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
    state.alternatives++;store();$('retry-copy').textContent=stage.alternative;
    $('try-again-panel').hidden=false;$('retry-button').focus();
  }
}
function retry(){
  locked=false;$('try-again-panel').hidden=true;
  Array.from($('choices').children).forEach(b=>{b.disabled=false;b.classList.remove('correct','incorrect')});
  $('choices').querySelector('button')?.focus();
}
function reelVideoPath(s){return s.video || s.image.replace(/\.(jpe?g|png|webp)$/i,'.mp4')}
function stopVideo(){
  const v=$('outcome-video');
  v.oncanplay=null;v.onended=null;v.onerror=null;
  v.pause();v.removeAttribute('src');v.load();v.hidden=true;
  videoReady=false;$('reel-view').classList.remove('has-video');
}
function showReel(s){
  clearTimeout(pendingAdvance);stopVideo();setView('reel');
  $('reel-count').textContent=`${pad(state.index+1)} / ${STAGES.length}`;
  $('reel-date').textContent=s.date;
  $('reel-heading').textContent=s.archiveTitle;
  $('reel-description').textContent=s.success;
  $('reel-foot-step').textContent=state.index===STAGES.length-1?'NEXT: THE FINAL DEBRIEF':`NEXT: DECISION ${pad(state.index+2)}`;
  $('media-type').textContent='VISUAL HISTORY CARD';
  $('reel-help').textContent='Upload the numbered MP4 to replace this card with archival or narrated footage.';
  $('reel-next').textContent=state.index===STAGES.length-1?'View the final debrief →':'Continue to the next decision →';
  $('reel-replay').hidden=true;
  const credit=$('reel-credit');credit.textContent=s.mediaCredit?`Video source: ${s.mediaCredit}`:'';credit.hidden=true;
  const image=$('reel-image');image.hidden=true;image.onload=()=>{image.hidden=false};image.onerror=()=>{image.hidden=true};image.src=s.image;
  $('reel-illustration').hidden=false;
  const vid=$('outcome-video');
  // On GitHub Pages a missing video simply falls back to the illustrated result.
  vid.oncanplay=()=>{
    if(view!=='reel'||videoReady)return;
    videoReady=true;
    $('reel-view').classList.add('has-video');vid.hidden=false;$('reel-illustration').hidden=true;
    $('media-type').textContent='ARCHIVE VIDEO';
    credit.hidden=!s.mediaCredit;
    $('reel-help').textContent='After the clip finishes, the next decision will appear automatically. You can also continue now.';
    $('reel-replay').hidden=false;
    const result=vid.play();if(result&&typeof result.catch==='function')result.catch(()=>{$('reel-help').textContent='Select play on the video to watch the historical footage.'});
  };
  vid.onended=()=>{
    if(view!=='reel')return;
    $('reel-help').textContent='The clip has finished. Moving to the next decision.';
    pendingAdvance=setTimeout(()=>{if(view==='reel')advance()},2800);
  };
  vid.onerror=()=>{
    videoReady=false;$('reel-view').classList.remove('has-video');
    vid.hidden=true;$('reel-illustration').hidden=false;
    $('media-type').textContent='VISUAL HISTORY CARD';
    $('reel-replay').hidden=true;
    credit.hidden=true;
  };
  vid.src=reelVideoPath(s);vid.load();
  $('reel-next').focus({preventScroll:true});
}
function replayVideo(){
  const v=$('outcome-video');if(!videoReady)return;
  clearTimeout(pendingAdvance);v.currentTime=0;v.play()?.catch(()=>{});
}
function advance(){
  if(view!=='reel')return;
  clearTimeout(pendingAdvance);stopVideo();
  state.index++;store();
  if(state.index>=STAGES.length)finish();else renderDecision();
}
function finish(){
  state.finished=true;state.started=true;store();stopVideo();
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
  setUpSources();setUpLogos();load();
  $('start-button').textContent=state.started&&!state.finished?'Resume your journey →':'Enter the decision room →';
  $('start-button').addEventListener('click',start);
  $('retry-button').addEventListener('click',retry);
  $('reel-next').addEventListener('click',advance);
  $('reel-replay').addEventListener('click',replayVideo);
  $('notes-button').addEventListener('click',openNotes);
  $('welcome-notes-button').addEventListener('click',openNotes);
  $('finish-notes-button').addEventListener('click',openNotes);
  $('close-notes').addEventListener('click',()=>$('notes-dialog').close());
  $('notes-dialog').addEventListener('click',e=>{if(e.target===$('notes-dialog'))$('notes-dialog').close()});
  $('replay-button').addEventListener('click',reset);
  document.addEventListener('keydown',e=>{
    if($('notes-dialog').open)return;
    if(view==='decision'&&$('try-again-panel').hidden&&!locked&&(e.key==='1'||e.key==='2')){e.preventDefault();choose(Number(e.key)-1)}
    if(view==='decision'&&!$('try-again-panel').hidden&&e.key==='Escape'){e.preventDefault();retry()}
    if(view==='reel'&&e.key==='ArrowRight'){e.preventDefault();advance()}
  });
  if(state.finished||state.index>=STAGES.length)finish();else if(state.started)renderDecision();else setView('welcome');
}
document.addEventListener('DOMContentLoaded',init);
