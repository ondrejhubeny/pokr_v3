const BOARD_ITEMS = [
  { cat: 'pivo', label: 'Na čepu • Hvězda sládků', name: 'Pilsner Urquell 12°', desc: 'Zlatá hladinka s hustou pěnou, špičková péče o výčep.', price: '62 Kč', unit: '0,5 l' },
  { cat: 'pivo', label: 'Na čepu', name: 'Velkopopovický Kozel 11°', desc: 'Poctivý ležák plné chuti, parťák ke kulečníku i kvízu.', price: '52 Kč', unit: '0,5 l' },
  { cat: 'pivo', label: 'Na čepu • Speciál', name: 'Volba sládků — Měsíční speciál', desc: 'Rotující limitovaný speciál na pípě každý měsíc.', price: '59 Kč', unit: '0,4 / 0,5 l' },
  { cat: 'pivo', label: 'Na čepu • Nealko', name: 'Birell Pomelo & Grep / Kofola', desc: 'Osvěžení na čepu pro řidiče i horké odpoledne.', price: '48 Kč', unit: '0,5 l' },

  { cat: 'pizza', label: 'Pizza • Hit podniku', name: 'POKR Speciál', desc: 'Rajčatový základ, mozzarella, šunka, slanina, salám, žampiony, jalapeños, česnek.', price: '205 Kč', unit: 'Ø 32 cm' },
  { cat: 'pizza', label: 'Pizza', name: 'Bela Italia', desc: 'Rajčatový základ, mozzarella, prosciutto, čerstvá rukola, hobliny parmazánu.', price: '215 Kč', unit: 'Ø 32 cm' },
  { cat: 'pizza', label: 'Pizza', name: 'Quattro Formaggi', desc: 'Smetana, mozzarella, niva, uzený sýr, hermelín, čerstvý pepř.', price: '195 Kč', unit: 'Ø 32 cm' },
  { cat: 'pizza', label: 'Pizza', name: 'Provenzale', desc: 'Rajčatový základ, mozzarella, šunka, anglická slanina, kukuřice, feferonky.', price: '189 Kč', unit: 'Ø 32 cm' },

  { cat: 'burgery', label: 'Burger • Bestseller', name: 'POKR Bacon Cheese Burger', desc: '180 g hovězího, máslová brioška, dvojitý cheddar, slanina, karamelizovaná cibule, hranolky.', price: '249 Kč', unit: 's hranolky' },
  { cat: 'burgery', label: 'Burger • Pikantní', name: 'Jalapeño Smash Burger', desc: 'Dvojité křupavé smash hovězí, cheddar, jalapeños, chipotle mayo, hranolky.', price: '259 Kč', unit: 's hranolky' },
  { cat: 'burgery', label: 'Burger', name: 'Crispy Chicken Burger', desc: 'Křupavé kuřecí prso, coleslaw, cheddar, česnekový dip, hranolky.', price: '229 Kč', unit: 's hranolky' },

  { cat: 'rizky', label: 'Řízky & Maso', name: 'Vepřový řízek z krkovice', desc: '200 g dozlatova usmaženého masa, citron, okurka, příloha dle výběru.', price: '215 Kč', unit: '200 g' },
  { cat: 'rizky', label: 'Řízky & Maso', name: 'Kuřecí řízek v křupavé strouhance', desc: '200 g kuřecích prsou, citron a domácí tatarská omáčka.', price: '205 Kč', unit: '200 g' },
  { cat: 'rizky', label: 'Maso na prkně', name: 'Pečená žebra v pivní marinádě', desc: '500 g masitých žeber s křenem, hořčicí, kozími rohy a domácím fokáčem.', price: '299 Kč', unit: '500 g' },

  { cat: 'fokace', label: 'Domácí fokáč', name: 'Rozmarýnový fokáč s olivovým olejem', desc: 'Horká křupavá focaccia přímo z pece s hrubozrnnou solí.', price: '89 Kč', unit: '1 ks' },
  { cat: 'fokace', label: 'Domácí fokáč', name: 'Česnekový fokáč s parmazánem', desc: 'Potřený čerstvým česnekem, zasypaný parmazánem, podávaný s dipem.', price: '109 Kč', unit: '1 ks' },
  { cat: 'fokace', label: 'Pro partu', name: 'Pivní prkno chuťovek', desc: 'Cibulové kroužky, pizza tyčinky, sýrové nugetky, nakládaný hermelín a 3 dipy.', price: '279 Kč', unit: '3–4 osoby' }
];

let activeCat = 'all';
let searchTerm = '';

const boardList = document.getElementById('boardList');
const tabs = document.querySelectorAll('.btab');
const searchInput = document.getElementById('menuSearch');

function renderBoard() {
  const q = searchTerm.trim().toLowerCase();
  const filtered = BOARD_ITEMS.filter((item) => {
    const matchesCat = activeCat === 'all' || item.cat === activeCat;
    const matchesQuery = !q ||
      item.name.toLowerCase().includes(q) ||
      item.desc.toLowerCase().includes(q) ||
      item.label.toLowerCase().includes(q);
    return matchesCat && matchesQuery;
  });

  if (!filtered.length) {
    boardList.innerHTML = `<div class="board-empty">Pro výraz „${searchTerm}“ jsme na ukázkové tabuli nic nenašli. Zkuste jiné slovo nebo kategorii.</div>`;
    return;
  }

  boardList.innerHTML = filtered.map((item) => `
    <article class="board-item">
      <div>
        <span class="board-cat">${item.label}</span>
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
      </div>
      <div class="board-price">
        ${item.price}
        <small>${item.unit}</small>
      </div>
    </article>
  `).join('');
}

tabs.forEach((t) => {
  t.addEventListener('click', () => {
    tabs.forEach((x) => x.classList.remove('active'));
    t.classList.add('active');
    activeCat = t.dataset.cat;
    renderBoard();
  });
});

searchInput.addEventListener('input', (e) => {
  searchTerm = e.target.value;
  renderBoard();
});

renderBoard();

// Mobile nav drawer
const navBtn = document.getElementById('navBtn');
const drawer = document.getElementById('drawer');
navBtn.addEventListener('click', () => {
  const hidden = drawer.hasAttribute('hidden');
  if (hidden) {
    drawer.removeAttribute('hidden');
    navBtn.setAttribute('aria-expanded', 'true');
  } else {
    drawer.setAttribute('hidden', '');
    navBtn.setAttribute('aria-expanded', 'false');
  }
});
drawer.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => {
  drawer.setAttribute('hidden', '');
  navBtn.setAttribute('aria-expanded', 'false');
}));

// Interactive Catering Configurator
let selectedVenue = 'V prostorách Pivnice POKR';
document.querySelectorAll('#venueGroup .toggle-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('#venueGroup .toggle-btn').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    selectedVenue = btn.dataset.val;
  });
});

document.querySelectorAll('#stationGrid .station-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
  });
});

const clubForm = document.getElementById('clubForm');
const configResult = document.getElementById('configResult');
clubForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const fd = new FormData(clubForm);
  const guests = fd.get('guests');
  const name = fd.get('name');
  const contact = fd.get('contact');
  const date = fd.get('date') || 'Upřesníme společně';
  const stations = Array.from(document.querySelectorAll('#stationGrid .station-btn.active'))
    .map((b) => b.dataset.station)
    .join(', ') || 'Dle doporučení';

  const subject = encodeURIComponent(`Poptávka POKR: ${selectedVenue} (${guests} osob) – ${name}`);
  const body = encodeURIComponent(
    `Dobrý den,\n\nmám zájem o: ${selectedVenue}\nPočet osob: ${guests}\nTermín: ${date}\nObčerstvení / servis: ${stations}\nKontakt: ${contact}\n\nS pozdravem,\n${name}`
  );

  configResult.hidden = false;
  configResult.innerHTML = `
    <strong>Poptávka připravena pro ${name} (${guests} osob):</strong><br>
    ${selectedVenue} • ${stations}<br>
    <a href="mailto:info@pivnicepizzapokr.cz?subject=${subject}&body=${body}">Odeslat e-mailem do POKRu</a> nebo zavolejte na <a href="tel:+420608822342">+420 608 822 342</a>.
  `;
});

document.getElementById('year').textContent = new Date().getFullYear();
