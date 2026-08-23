const EVENTS = [
  {start:"2026-01-02", end:"2026-01-02", key:"belynda"},
  {start:"2026-02-02", end:"2026-02-02", key:"winter"},
  {start:"2026-02-19", end:"2026-02-20", key:"xidr"},
  {start:"2026-03-03", end:"2026-03-04", key:"barat"},
  {start:"2026-03-18", end:"2026-03-18", key:"koluj"},
  {start:"2026-04-15", end:"2026-04-15", key:"newyear"},
  {start:"2026-04-17", end:"2026-04-17", key:"tawafa"},
  {start:"2026-05-25", end:"2026-05-26", key:"shexems"},
  {start:"2026-06-14", end:"2026-06-14", key:"sultan"},
  {start:"2026-06-18", end:"2026-06-18", key:"roshe"},
  {start:"2026-08-02", end:"2026-08-02", key:"summer"},
  {start:"2026-08-03", end:"2026-08-03", key:"genocide"},
  {start:"2026-10-06", end:"2026-10-13", key:"cmaia"},
  {start:"2026-12-18", end:"2026-12-18", key:"rosheez"},
  {start:"2026-12-27", end:"2027-01-03", key:"pirali"}
];

const NAMES = {
  ar:{
    title:"تقويم إيزيدي", subtitle:"التقويم الإيزيدي والميلادي", today:"اليوم", calendar:"التقويم", events:"المناسبات", about:"حول التقويم",
    search:"ابحث عن مناسبة...", aboutTitle:"حول التقويم",
    aboutText:"هذه هي النسخة الأولى من تطبيق تقويم إيزيدي متعدد اللغات. بيانات المناسبات لعام 2026 مبنية على ملف Ezidische Kalender 2026 المرفق بالمشروع.",
    source:"مصدر بيانات النسخة الأولى", weekdays:["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],
    months:["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],
    eventsTitle:"المناسبات الإيزيدية", year:"2026", no:"لا توجد نتائج."
  },
  en:{
    title:"Ezidi Calendar", subtitle:"Ezidi and Gregorian Calendar", today:"Today", calendar:"Calendar", events:"Events", about:"About",
    search:"Search events...", aboutTitle:"About the calendar",
    aboutText:"First version of a multilingual Ezidi Calendar app. The 2026 event data is based on the attached Ezidische Kalender 2026 file.",
    source:"Source for this first version", weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
    months:["January","February","March","April","May","June","July","August","September","October","November","December"],
    eventsTitle:"Ezidi Events", year:"2026", no:"No results."
  },
  de:{
    title:"Êzîdî-Kalender", subtitle:"Êzîdî- und Gregorianischer Kalender", today:"Heute", calendar:"Kalender", events:"Feiertage & Termine", about:"Über den Kalender",
    search:"Termine suchen...", aboutTitle:"Über den Kalender",
    aboutText:"Erste Version einer mehrsprachigen Êzîdî-Kalender-App. Die Veranstaltungsdaten für 2026 basieren auf der beigefügten Datei Ezidische Kalender 2026.",
    source:"Datenquelle dieser ersten Version", weekdays:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],
    months:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],
    eventsTitle:"Êzîdî-Termine", year:"2026", no:"Keine Ergebnisse."
  },
  ez:{
    title:"Êzîdî Kalender", subtitle:"Takvimê Êzîdî û Miladî", today:"Îro", calendar:"Takvim", events:"Rojên taybet", about:"Derbarê takvimê",
    search:"Li roja taybet bigere...", aboutTitle:"Derbarê takvimê",
    aboutText:"Ev guhertoya yekem a sepanê Takvimê Êzîdî ye ku bi çar zimanên cihê tê amadekirin. Daneyên 2026 li ser dosyaya Ezidische Kalender 2026 hatine avakirin.",
    source:"Çavkaniya daneyan", weekdays:["Yekşem","Duşem","Sêşem","Çarşem","Pêncşem","Înî","Şemî"],
    months:["Çile","Şbat","Adar","Nîsan","Gûlan","Xêzîran","Tîrmeh","Tebax","Îlon","Cotmeh","Mijdar","Kanûn"],
    eventsTitle:"Rojên taybet ên Êzîdî", year:"2026", no:"Tu encam tune."
  }
};

const EVENT_TEXT = {
 belynda:{ez:"Îda Bêlînda",ar:"عيد بيليندا (Îda Bêlînda)",en:"Îda Bêlînda",de:"Îda Bêlînda"},
 winter:{ez:"Îda Çîle Zivistanê",ar:"عيد أربعينية الشتاء (Îda Çîle Zivistanê)",en:"Îda Çîle Zivistanê",de:"Îda Çîle Zivistanê"},
 xidr:{ez:"Îda Xêdr Alîas û Xêdr Nabî",ar:"عيد خضر إلياس وخضر نبي",en:"Îda Xêdr Alîas û Xêdr Nabî",de:"Îda Xêdr Alîas û Xêdr Nabî"},
 barat:{ez:"Šêv Barat",ar:"ليلة البرات (Šêv Barat)",en:"Šêv Barat",de:"Šêv Barat"},
 koluj:{ez:"Îda Kolûj li Gorgîya û Rûsîya û Êrmînya",ar:"عيد كولوج في جورجيا وروسيا وأرمينيا",en:"Îda Kolûj li Gorgîya û Rûsîya û Êrmînya",de:"Îda Kolûj in Georgien, Russland und Armenien"},
 newyear:{ez:"Îda Çaršema Sarê Salê",ar:"عيد الأربعاء الأول من السنة",en:"Îda Çaršema Sarê Salê",de:"Îda Çaršema Sarê Salê"},
 tawafa:{ez:"Dêstpêka Tawafa Wlat Šêx",ar:"بداية طواف وطن الشيخ",en:"Dêstpêka Tawafa Wlat Šêx",de:"Beginn der Tawafa Wlat Šêx"},
 shexems:{ez:"Îda Šêšims (Hjiya)",ar:"عيد شمس (الحجية)",en:"Îda Šêšims (Hjiya)",de:"Îda Šêšims (Hjiya)"},
 sultan:{ez:"Tawafa Sltan Êzî lê Jorjîa",ar:"طواف سلطان إيزي في جورجيا",en:"Tawafa Sltan Êzî lê Jorjîa",de:"Tawafa Sltan Êzî in Georgien"},
 roshe:{ez:"Roša Sardana Trba li Gorgîya/Rûsîya/Êrmînya",ar:"روش زيارة التربة في جورجيا/روسيا/أرمينيا",en:"Roša Sardana Trba li Gorgîya/Rûsîya/Êrmînya",de:"Besuchstag der Trba in Georgien/Russland/Armenien"},
 summer:{ez:"Îda Çîle Havînê",ar:"عيد أربعينية الصيف",en:"Îda Çîle Havînê",de:"Îda Çîle Havînê"},
 genocide:{ez:"Roša Cînosaîda Êzîdîa",ar:"ذكرى الإبادة الإيزيدية",en:"Roša Cînosaîda Êzîdîa",de:"Gedenktag des êzîdischen Genozids"},
 cmaia:{ez:"Cmaîa Šîxadî",ar:"جماعة الشيخ عدي",en:"Cmaîa Šîxadî",de:"Cmaîa Šîxadî"},
 rosheez:{ez:"Îda Rošên Êzî",ar:"عيد روشين إيزي",en:"Îda Rošên Êzî",de:"Îda Rošên Êzî"},
 pirali:{ez:"Batzmîa Pîrê Alî",ar:"باتزمي بير علي",en:"Batzmîa Pîrê Alî",de:"Batzmîa Pîrê Alî"}
};

let lang = localStorage.getItem("lang") || "ar";
let cursor = new Date(2026,7,1);
let selected = new Date();
let dark = localStorage.getItem("dark") === "1";

function iso(d){return d.toISOString().slice(0,10)}
function parse(s){let [y,m,d]=s.split("-").map(Number); return new Date(y,m-1,d)}
function eventFor(date){
  const x=iso(date);
  return EVENTS.filter(e=>x>=e.start && x<=e.end);
}
function eventName(e){return EVENT_TEXT[e.key][lang] || EVENT_TEXT[e.key].ez}
function formatDate(d){
  return new Intl.DateTimeFormat(lang==="ar"?"ar":lang==="de"?"de-DE":lang==="ez"?"en":"en-US",{day:"numeric",month:"long",year:"numeric"}).format(d);
}
function applyLang(){
  const t=NAMES[lang];
  document.documentElement.lang=lang;
  document.documentElement.dir=lang==="ar"?"rtl":"ltr";
  document.getElementById("appTitle").textContent=t.title;
  document.getElementById("appSubtitle").textContent=t.subtitle;
  document.getElementById("todayLabel").textContent=t.today;
  document.getElementById("todayBtn").textContent=t.today;
  document.getElementById("tabCalendar").textContent=t.calendar;
  document.getElementById("tabEvents").textContent=t.events;
  document.getElementById("tabAbout").textContent=t.about;
  document.getElementById("eventsTitle").textContent=t.eventsTitle;
  document.getElementById("eventsEyebrow").textContent=t.year;
  document.getElementById("aboutTitle").textContent=t.aboutTitle;
  document.getElementById("aboutText").textContent=t.aboutText;
  document.getElementById("sourceTitle").textContent=t.source;
  document.getElementById("eventSearch").placeholder=t.search;
  render();
}
function render(){
  const t=NAMES[lang];
  document.getElementById("monthName").textContent=t.months[cursor.getMonth()];
  document.getElementById("yearNumber").textContent=cursor.getFullYear();
  document.getElementById("todayDate").textContent=formatDate(new Date());
  const te=eventFor(new Date());
  document.getElementById("todayEvent").textContent=te.length?te.map(eventName).join(" • "):"";
  const weekdays=document.getElementById("weekdays"); weekdays.innerHTML="";
  t.weekdays.forEach(x=>{let d=document.createElement("div");d.textContent=x;weekdays.appendChild(d)});
  const grid=document.getElementById("calendarGrid"); grid.innerHTML="";
  const first=new Date(cursor.getFullYear(),cursor.getMonth(),1);
  const last=new Date(cursor.getFullYear(),cursor.getMonth()+1,0);
  const offset=first.getDay();
  for(let i=0;i<offset;i++){let b=document.createElement("button");b.className="day muted";b.textContent="";grid.appendChild(b)}
  for(let n=1;n<=last.getDate();n++){
    let d=new Date(cursor.getFullYear(),cursor.getMonth(),n), ev=eventFor(d);
    let b=document.createElement("button"); b.className="day"+(iso(d)===iso(new Date())?" today":"")+(ev.length?" has-event":"");
    b.innerHTML=`<span class="day-number">${n}</span>${ev.length?`<span class="event-mini">${eventName(ev[0])}</span><span class="day-dot"></span>`:""}`;
    b.onclick=()=>showDay(d); grid.appendChild(b);
  }
  showDay(selected,false); renderEvents();
}
function showDay(d,open=true){
  selected=d; const ev=eventFor(d);
  const body=document.getElementById("selectedDay");
  body.innerHTML=`<div class="day-detail"><h3>${formatDate(d)}</h3><div>${ev.length?ev.map(e=>`<div class="event-chip">${eventName(e)}</div>`).join(""):`<span class="muted">${lang==="ar"?"لا توجد مناسبة مسجلة لهذا اليوم.":lang==="de"?"Kein Termin für diesen Tag eingetragen.":lang==="ez"?"Ji bo vê rojê ti roja taybet nehatiye qeyd kirin.":"No event is recorded for this day."}</span>`}</div></div>`;
  if(open){document.getElementById("dialogBody").innerHTML=body.innerHTML;document.getElementById("dayDialog").showModal()}
}
function renderEvents(){
  const q=document.getElementById("eventSearch").value.toLowerCase().trim();
  const list=document.getElementById("eventList"); list.innerHTML="";
  EVENTS.filter(e=>eventName(e).toLowerCase().includes(q)).forEach(e=>{
    const c=document.createElement("article");c.className="event-card";
    const dates=e.start===e.end?formatDate(parse(e.start)):`${formatDate(parse(e.start))} – ${formatDate(parse(e.end))}`;
    c.innerHTML=`<div class="event-date">${dates}</div><h3>${eventName(e)}</h3><p>${e.start} → ${e.end}</p>`;
    c.onclick=()=>{cursor=parse(e.start);selected=parse(e.start);document.querySelector('[data-view="calendar"]').click();render()};
    list.appendChild(c);
  });
  if(!list.children.length)list.innerHTML=`<div class="event-card">${NAMES[lang].no}</div>`;
}
document.getElementById("languageSelect").value=lang;
document.getElementById("languageSelect").onchange=e=>{lang=e.target.value;localStorage.setItem("lang",lang);applyLang()};
document.getElementById("themeBtn").onclick=()=>{dark=!dark;document.body.classList.toggle("dark",dark);localStorage.setItem("dark",dark?"1":"0")};
document.getElementById("prevMonth").onclick=()=>{cursor.setMonth(cursor.getMonth()-1);render()};
document.getElementById("nextMonth").onclick=()=>{cursor.setMonth(cursor.getMonth()+1);render()};
document.getElementById("todayBtn").onclick=()=>{cursor=new Date();selected=new Date();render()};
document.getElementById("closeDialog").onclick=()=>document.getElementById("dayDialog").close();
document.getElementById("eventSearch").oninput=renderEvents;
document.querySelectorAll(".tab").forEach(tab=>tab.onclick=()=>{
  document.querySelectorAll(".tab").forEach(x=>x.classList.remove("active"));tab.classList.add("active");
  ["calendar","events","about"].forEach(v=>document.getElementById(v+"View").classList.toggle("hidden",tab.dataset.view!==v+""));
});
document.body.classList.toggle("dark",dark);
applyLang();
if("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js").catch(()=>{});
