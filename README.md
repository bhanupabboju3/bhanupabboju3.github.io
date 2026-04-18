<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Accordion Page with Themes</title>

<style>
:root {
  --primary: #818cf8;
  --bg: #111827;
  --surface: #1f2933;
  --text: #e5e7eb;
  --muted: #9ca3af;
  --border: #374151;
  --logo-color: var(--primary);
}

/* THEMES */
body[data-theme="dark"] {
  --primary:#818cf8;
  --bg:#111827;
  --surface:#1f2933;
  --text:#e5e7eb;
  --muted:#9ca3af;
  --border:#374151;
}

body[data-theme="forest"] {
  --primary:#34d399;
  --bg:#0b1d13;
  --surface:#12281c;
  --text:#d1fae5;
  --muted:#6ee7b7;
}

body[data-theme="light"] {
  --primary:#4f46e5;
  --bg:#ffffff;
  --surface:#e5e7eb;
  --text:#111827;
  --muted:#6b7280;
  --border:#d1d5db;
  --logo-color:#4f46e5;
}

body[data-theme="frost"] {
  --primary:#0ea5e9;
  --bg:#ffffff;          
  --surface:#f0f9ff;     
  --text:#0f172a;
  --muted:#38bdf8;
}

/* ORANGE THEME */
body[data-theme="orange"] {
  --primary: #FF8F29;
  --bg: #ffffff;           
  --surface: #FF8F29;      
  --text: #1f1f1f;
  --muted: #333333;
  --border: #cc7000;
  --logo-color: #FF8F29;
}

/* BLUE THEME */
body[data-theme="blue"] {
  --primary: #362B5A;
  --bg: #ffffff;           
  --surface: #2201E2;      
  --text:#111827;          
  --muted: #b0a9d1;
  --border: #1a00b3;
  --logo-color: #2201E2;
}

/* BLUE THEME TEXT OVERRIDES */
body[data-theme="blue"] header,
body[data-theme="blue"] footer,
body[data-theme="blue"] select,
body[data-theme="blue"] .select-wrapper svg {
  color: #ffffff;
}

.select-wrapper select.blue-selected {
  color: #ffffff;
}

/* GOLD THEME */
body[data-theme="gold"] {
  --primary: #FFD700;
  --bg: #fffbea;
  --surface: #FFD700;
  --text: #1f1f1f;
  --muted: #333300;
  --border: #e6c200;
  --logo-color: #FFD700;
}

/* GOLD THEME select text and arrow */
body[data-theme="gold"] select,
body[data-theme="gold"] .select-wrapper svg {
  color: #1f1f1f;
}

/* GLOBAL */
body {
  font-family: system-ui, sans-serif;
  background: var(--bg);
  color: var(--text);
  margin: 0;
  transition: background 0.3s ease, color 0.3s ease;
}

.container_content {
  max-width: 900px;
  margin: auto;
  padding: 1rem;
}

/* HEADER */
header {
  background: var(--surface);
  border-bottom: 1px solid var(--border);
  position: sticky;
  top: 0;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  flex-wrap: nowrap;
}

/* LOGO IMAGE */
.logo img {
  height: 50px;
  width: auto;
  display: block;
}

/* RIGHT GROUP */
.right-group {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  flex-shrink: 0;
}

/* SELECT WRAPPER */
.select-wrapper {
  position: relative;
  display: inline-block;
  color: var(--muted);
  max-width: 100%;
}

/* SELECT */
select {
  background: var(--surface);
  color: var(--text);
  border: 1px solid var(--border);
  padding: 0.4rem 2.2rem 0.4rem 0.6rem;
  border-radius: 6px;
  appearance: none;
  cursor: pointer;
  max-width: 100%;
  box-sizing: border-box;
}

/* SVG ARROW */
.select-wrapper svg {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%) rotate(0deg);
  pointer-events: none;
  width: 14px;
  height: 14px;
  transition: transform 0.25s ease;
}

.select-wrapper:focus-within svg {
  transform: translateY(-50%) rotate(180deg);
}

/* hidden measurer */
#measure {
  position: absolute;
  visibility: hidden;
  white-space: nowrap;
  font-family: system-ui, sans-serif;
  font-size: 14px;
  padding: 0.4rem 0.6rem;
}

/* BACK TO TOP */
#backToTop {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: var(--primary);
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: none;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0,0,0,0.3);
  transition: transform 0.3s ease, opacity 0.3s ease;
}

#backToTop:hover {
  transform: translateY(-3px);
}

/* FOOTER */
footer {
  margin-top: 2rem;
  padding: 1rem;
  background: var(--surface);
  text-align: center;
  color: var(--muted);
}

/* CENTER CONTENT IN MAIN */
main.container_content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

/* MOBILE / TABLET */
@media (max-width: 768px) {
  .nav {
    flex-direction: row;
  }

  .right-group {
    justify-content: flex-end;
  }

  /* Fix select dropdown overflow on mobile/tablet */
  .select-wrapper {
    flex: 1 1 auto;
    min-width: 0;
  }

  select {
    max-width: 100%;
    width: 100%;
  }
}
</style>
</head>

<body data-theme="dark">

<header>
  <div class="container_content nav">
    <a href="/" class="logo">
      <img src="https://media.canva.com/v2/image-resize/format:PNG/height:686/quality:100/uri:ifs%3A%2F%2FM%2F44f30e8a-fe66-4d39-ada6-53cc31f4a6de/watermark:F/width:681?csig=AAAAAAAAAAAAAAAAAAAAADsNUdym-O3IHetOAYE6fEGeVv6xYDBvHkndO2CO4gAK&exp=1776469562&osig=AAAAAAAAAAAAAAAAAAAAAK6HOGjLwcJFugPHzxgDS4-d4mWLiRkMeSaP7xo7j7vI&signer=media-rpc&x-canva-quality=screen_3x" alt="Logo">
    </a>

    <div class="right-group">
      <div class="select-wrapper">
        <select id="themeSelect">
          <option value="dark">🌙 Dark</option>
          <option value="light">☀️ Light</option>
          <option value="forest">🌲 Forest</option>
          <option value="frost">❄️ Frost</option>
          <option value="orange">🍊 Orange</option>
          <option value="blue">🔵 Blue</option>
          <option value="gold">✨ Gold</option>
        </select>

        <svg viewBox="0 0 20 20" fill="none">
          <path d="M5 7l5 5 5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>
  </div>
</header>

<span id="measure"></span>

<main class="container_content">
  <h1>హనుమాన్ చాలీసా</h1>

  <!-- Plain Text Section -->
  <p>దోహా
శ్రీ గురు చరణ సరోజ రజ నిజమన ముకుర సుధారి ।
వరణౌ రఘువర విమలయశ జో దాయక ఫలచారి ॥
బుద్ధిహీన తనుజానికై సుమిరౌ పవన కుమార ।
బల బుద్ధి విద్యా దేహు మోహి హరహు కలేశ వికార ॥

ధ్యానం
అతులిత బలధామం స్వర్ణ శైలాభ దేహమ్ ।
దనుజ వన కృశానుం జ్ఞానినా మగ్రగణ్యమ్ ॥
సకల గుణ నిధానం వానరాణా మధీశమ్ ।
రఘుపతి ప్రియ భక్తం వాతజాతం నమామి ॥

గోష్పదీకృత వారాశిం మశకీకృత రాక్షసమ్ ।
రామాయణ మహామాలా రత్నం వందే-(అ)నిలాత్మజమ్ ॥
యత్ర యత్ర రఘునాథ కీర్తనం తత్ర తత్ర కృతమస్తకాంజలిమ్ ।
భాష్పవారి పరిపూర్ణ లోచనం మారుతిం నమత రాక్షసాంతకమ్ ॥

మనోజవం మారుత తుల్యవేగమ్ ।
జితేంద్రియం బుద్ధి మతాం వరిష్టమ్ ॥
వాతాత్మజం వానరయూథ ముఖ్యమ్ ।
శ్రీ రామ దూతం శిరసా నమామి ॥

చౌపాఈ
జయ హనుమాన జ్ఞాన గుణ సాగర ।
జయ కపీశ తిహు లోక ఉజాగర ॥ 1 ॥

రామదూత అతులిత బలధామా ।
అంజని పుత్ర పవనసుత నామా ॥ 2 ॥

మహావీర విక్రమ బజరంగీ ।
కుమతి నివార సుమతి కే సంగీ ॥3 ॥

కంచన వరణ విరాజ సువేశా ।
కానన కుండల కుంచిత కేశా ॥ 4 ॥

హాథవజ్ర ఔ ధ్వజా విరాజై । [ఔరు]
కాంథే మూంజ జనేవూ సాజై ॥ 5॥

శంకర సువన కేసరీ నందన । [శంకర స్వయం]
తేజ ప్రతాప మహాజగ వందన ॥ 6 ॥

విద్యావాన గుణీ అతి చాతుర ।
రామ కాజ కరివే కో ఆతుర ॥ 7 ॥

ప్రభు చరిత్ర సునివే కో రసియా ।
రామలఖన సీతా మన బసియా ॥ 8॥

సూక్ష్మ రూపధరి సియహి దిఖావా ।
వికట రూపధరి లంక జలావా ॥ 9 ॥

భీమ రూపధరి అసుర సంహారే ।
రామచంద్ర కే కాజ సంవారే ॥ 10 ॥

లాయ సంజీవన లఖన జియాయే ।
శ్రీ రఘువీర హరషి ఉరలాయే ॥ 11 ॥

రఘుపతి కీన్హీ బహుత బడాయీ (ఈ) ।
తుమ మమ ప్రియ భరత సమ భాయీ ॥ 12 ॥

సహస్ర వదన తుమ్హరో యశగావై ।
అస కహి శ్రీపతి కంఠ లగావై ॥ 13 ॥

సనకాదిక బ్రహ్మాది మునీశా ।
నారద శారద సహిత అహీశా ॥ 14 ॥

యమ కుబేర దిగపాల జహాం తే ।
కవి కోవిద కహి సకే కహాం తే ॥ 15 ॥

తుమ ఉపకార సుగ్రీవహి కీన్హా ।
రామ మిలాయ రాజపద దీన్హా ॥ 16 ॥

తుమ్హరో మంత్ర విభీషణ మానా ।
లంకేశ్వర భయే సబ జగ జానా ॥ 17 ॥

యుగ సహస్ర యోజన పర భానూ ।
లీల్యో తాహి మధుర ఫల జానూ ॥ 18 ॥

ప్రభు ముద్రికా మేలి ముఖ మాహీ ।
జలధి లాంఘి గయే అచరజ నాహీ ॥ 19 ॥

దుర్గమ కాజ జగత కే జేతే ।
సుగమ అనుగ్రహ తుమ్హరే తేతే ॥ 20 ॥

రామ దుఆరే తుమ రఖవారే ।
హోత న ఆజ్ఞా బిను పైసారే ॥ 21 ॥

సబ సుఖ లహై తుమ్హారీ శరణా ।
తుమ రక్షక కాహూ కో డర నా ॥ 22 ॥

ఆపన తేజ సమ్హారో ఆపై ।
తీనోం లోక హాంక తే కాంపై ॥ 23 ॥

భూత పిశాచ నికట నహి ఆవై ।
మహవీర జబ నామ సునావై ॥ 24 ॥

నాసై రోగ హరై సబ పీరా ।
జపత నిరంతర హనుమత వీరా ॥ 25 ॥

సంకట సే హనుమాన ఛుడావై ।
మన క్రమ వచన ధ్యాన జో లావై ॥ 26 ॥

సబ పర రామ తపస్వీ రాజా ।
తినకే కాజ సకల తుమ సాజా ॥ 27 ॥

ఔర మనోరథ జో కోయి లావై ।
తాసు అమిత జీవన ఫల పావై ॥ 28 ॥

చారో యుగ ప్రతాప తుమ్హారా ।
హై పరసిద్ధ జగత ఉజియారా ॥ 29 ॥

సాధు సంత కే తుమ రఖవారే ।
అసుర నికందన రామ దులారే ॥ 30 ॥

అష్ఠసిద్ధి నవ నిధి కే దాతా ।
అస వర దీన్హ జానకీ మాతా ॥ 31 ॥

రామ రసాయన తుమ్హారే పాసా ।
సదా రహో రఘుపతి కే దాసా ॥ 32 ॥ [సాద రహో]

తుమ్హరే భజన రామకో పావై ।
జన్మ జన్మ కే దుఖ బిసరావై ॥ 33 ॥

అంత కాల రఘుపతి పురజాయీ । [రఘువర]
జహాం జన్మ హరిభక్త కహాయీ ॥ 34 ॥

ఔర దేవతా చిత్త న ధరయీ ।
హనుమత సేయి సర్వ సుఖ కరయీ ॥ 35 ॥

సంకట క(హ)టై మిటై సబ పీరా ।
జో సుమిరై హనుమత బల వీరా ॥ 36 ॥

జై జై జై హనుమాన గోసాయీ ।
కృపా కరహు గురుదేవ కీ నాయీ ॥ 37 ॥

యహ శత వార పాఠ కర కోయీ । [జో]
ఛూటహి బంది మహా సుఖ హోయీ ॥ 38 ॥

జో యహ పడై హనుమాన చాలీసా ।
హోయ సిద్ధి సాఖీ గౌరీశా ॥ 39 ॥

తులసీదాస సదా హరి చేరా ।
కీజై నాథ హృదయ మహ డేరా ॥ 40 ॥

దోహా
పవన తనయ సంకట హరణ - మంగళ మూరతి రూప్ ।
రామ లఖన సీతా సహిత - హృదయ బసహు సురభూప్ ॥
సియావర రామచంద్రకీ జయ । పవనసుత హనుమానకీ జయ । బోలో భాయీ సబ సంతనకీ జయ ।</p>

</main>

<button id="backToTop" aria-label="Back to top">↑</button>

<footer>
  <p>Thank you for visiting! 🙏 ధన్యవాదాలు!</p>
</footer>

<script>
// THEME SYSTEM
const select = document.getElementById("themeSelect");
const measure = document.getElementById("measure");
const backToTop = document.getElementById("backToTop");

function applyTheme(t){
  document.body.setAttribute("data-theme", t);
  if(t === "blue"){
    select.classList.add("blue-selected");
  } else {
    select.classList.remove("blue-selected");
  }
  localStorage.setItem("theme", t);
}

function adjustWidth() {
  if (window.innerWidth <= 768) {
    select.style.width = "100%";
    return;
  }
  const text = select.options[select.selectedIndex].text;
  measure.textContent = text;
  const width = measure.offsetWidth + 40;
  select.style.width = width + "px";
}

const saved = localStorage.getItem("theme") || "dark";
applyTheme(saved);
select.value = saved;
adjustWidth();

select.addEventListener("change", () => {
  applyTheme(select.value);
  adjustWidth();
});

// BACK TO TOP LOGIC
window.addEventListener("scroll", () => {
  if (window.scrollY > 150) {
    backToTop.style.display = "flex";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
</script>

</body>
</html>
