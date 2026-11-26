const MENU_DATA = {
  pivo: [
    {
      name: 'Pilsner Urquell 12°',
      badge: 'Hvězda sládků',
      desc: 'Čepovaný na hladinku z dokonale ošetřeného výčepu. Zlatá barva, říz a hustá krémová pěna.',
      price: '62 Kč',
      size: '0,5 l / 0,3 l'
    },
    {
      name: 'Velkopopovický Kozel 11°',
      badge: 'Oblíbené',
      desc: 'Poctivý ležák s vyváženou hořkostí a jemným sladovým tělem. Ideální parťák ke kvízu i kulečníku.',
      price: '52 Kč',
      size: '0,5 l / 0,3 l'
    },
    {
      name: 'Řezané pivo (Světlé / Tmavé)',
      desc: 'Harmonie světlého ležáku a tmavého piva s karamelovým nádechem.',
      price: '54 Kč',
      size: '0,5 l'
    },
    {
      name: 'Volba sládků — Měsíční speciál',
      badge: 'Speciál',
      desc: 'Každý měsíc jiný limitovaný pivní speciál na rotující pípě. Zeptejte se obsluhy.',
      price: '59 Kč',
      size: '0,4 l / 0,5 l'
    },
    {
      name: 'Birell Pomelo & Grep / Světlý',
      desc: 'Osvěžující čepované nealko pro řidiče i horké dny na zahrádce.',
      price: '48 Kč',
      size: '0,5 l'
    },
    {
      name: 'Domácí limonády & Kofola',
      desc: 'Čepovaná Kofola a sezónní ovocné limonády s čerstvou mátou a citrusy.',
      price: '45 Kč',
      size: '0,5 l'
    }
  ],
  pizza: [
    {
      name: 'POKR Speciál',
      badge: 'Hit podniku',
      desc: 'Rajčatový základ, mozzarella, šunka, anglická slanina, salám, žampiony, jalapeños, česnek.',
      price: '205 Kč',
      size: 'Ø 32 cm'
    },
    {
      name: 'Bela Italia',
      badge: 'Oblíbená',
      desc: 'Rajčatový základ, mozzarella, parmská šunka prosciutto, čerstvá rukola, hobliny parmazánu.',
      price: '215 Kč',
      size: 'Ø 32 cm'
    },
    {
      name: 'Quattro Formaggi',
      desc: 'Smetanový základ, mozzarella, niva, uzený sýr, hermelín, čerstvě mletý pepř.',
      price: '195 Kč',
      size: 'Ø 32 cm'
    },
    {
      name: 'Provenzale',
      desc: 'Rajčatový základ, mozzarella, šunka, slanina, kukuřice, feferonky.',
      price: '189 Kč',
      size: 'Ø 32 cm'
    },
    {
      name: 'Venezia',
      desc: 'Smetanový základ, mozzarella, kuřecí prsa, listový špenát, česnek.',
      price: '199 Kč',
      size: 'Ø 32 cm'
    },
    {
      name: 'Margherita Classica',
      desc: 'San Marzano rajčatový základ, mozzarella fior di latte, čerstvá bazalka, olivový olej.',
      price: '165 Kč',
      size: 'Ø 32 cm'
    }
  ],
  burgery: [
    {
      name: 'POKR Bacon Cheese Burger',
      badge: 'Bestseller',
      desc: '180 g vyzrálého hovězího masa, máslová brioška, dvojitý cheddar, křupavá slanina, karamelizovaná cibulka, domácí BBQ dresink, hranolky.',
      price: '249 Kč',
      size: 'včetně hranolek'
    },
    {
      name: 'Jalapeño Smash Burger',
      badge: 'Pikantní',
      desc: 'Dvojité křupavé smash hovězí, cheddar, nakládané jalapeños, chipotle majonéza, nakládaná okurka, hranolky.',
      price: '259 Kč',
      size: 'včetně hranolek'
    },
    {
      name: 'Crispy Chicken Burger',
      desc: 'Křupavé kuřecí prso v kukuřičné strouhance, coleslaw salát, cheddar, česnekový dip, hranolky.',
      price: '229 Kč',
      size: 'včetně hranolek'
    },
    {
      name: 'Grilovaný Hermelín Burger',
      desc: 'Rozpečený hermelín z grilu, brusinkové chutney, rukola, pečená rajčata, máslová brioška, hranolky.',
      price: '219 Kč',
      size: 'včetně hranolek'
    }
  ],
  rizky: [
    {
      name: 'Poctivý vepřový řízek z krkovice',
      badge: 'Klasika',
      desc: '200 g šťavnatého masa smaženého dozlatova, čerstvý citron, kyselá okurka, příloha dle výběru.',
      price: '215 Kč',
      size: '200 g'
    },
    {
      name: 'Křupavý kuřecí řízek',
      desc: '200 g kuřecích prsou v jemné strouhance, citron, tatarská omáčka nebo hranolky / šťouchané brambory.',
      price: '205 Kč',
      size: '200 g'
    },
    {
      name: 'Pečená vepřová žebra na prkně',
      badge: 'K pivu',
      desc: '500 g pomalu pečených masitých žeber v pivní marinádě, křen, hořčice, kozí rohy a náš domácí fokáč.',
      price: '299 Kč',
      size: '500 g'
    },
    {
      name: 'Pečené vepřové koleno',
      desc: 'Celé vepřové koleno pečené do křupavé kůrky, čerstvý křen, hořčice, beraní rohy a čerstvý chléb / fokáč.',
      price: '369 Kč',
      size: 'cca 1 kg'
    }
  ],
  fokace: [
    {
      name: 'Domácí rozmarýnový fokáč',
      badge: 'Z pece',
      desc: 'Čerstvě upečená křupavá focaccia potřená extra panenským olivovým olejem, rozmarýnem a hrubozrnnou solí.',
      price: '89 Kč',
      size: '1 ks'
    },
    {
      name: 'Česnekový fokáč s parmazánem',
      badge: 'Oblíbený',
      desc: 'Horký fokáč přímo z pece s čerstvým česnekem, strouhaným parmazánem a bylinkovým dipem.',
      price: '109 Kč',
      size: '1 ks'
    },
    {
      name: 'Fokáč s olivami a sušenými rajčaty',
      desc: 'Nadýchané těsto zapečené s černými olivami, sušenými rajčaty a oreganem.',
      price: '115 Kč',
      size: '1 ks'
    },
    {
      name: 'Pivní prkno chuťovek pro partu',
      desc: 'Cibulové kroužky, sýrové nugetky, pizza tyčinky, nakládaný hermelín a 3 druhy domácích dipů.',
      price: '279 Kč',
      size: 'pro 3–4 osoby'
    }
  ]
};

// Render menu items
const menuGrid = document.getElementById('menuGrid');
const tabButtons = document.querySelectorAll('.tab-btn');

function renderMenu(category) {
  const items = MENU_DATA[category] || [];
  menuGrid.innerHTML = items.map((item) => `
    <article class="menu-item">
      <div>
        <h3 class="menu-item-title">
          ${item.name}
          ${item.badge ? `<span class="menu-badge">${item.badge}</span>` : ''}
        </h3>
        <p class="menu-item-desc">${item.desc}</p>
      </div>
      <div>
        <span class="menu-item-price">${item.price}</span>
        ${item.size ? `<span class="menu-item-size">${item.size}</span>` : ''}
      </div>
    </article>
  `).join('');
}

tabButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    tabButtons.forEach((b) => {
      b.classList.remove('active');
      b.setAttribute('aria-selected', 'false');
    });
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
    renderMenu(btn.dataset.category);
  });
});

renderMenu('pivo');

// Header scroll & Mobile Drawer
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 30);
});

const menuToggle = document.getElementById('menuToggle');
const mobileDrawer = document.getElementById('mobileDrawer');
menuToggle.addEventListener('click', () => {
  const open = mobileDrawer.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  mobileDrawer.setAttribute('aria-hidden', String(!open));
});
mobileDrawer.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileDrawer.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    mobileDrawer.setAttribute('aria-hidden', 'true');
  });
});

// Live opening hours indicator (Po–Čt, Ne: 15:00–01:00; Pá–So: 15:00–03:00)
function updateOpenStatus() {
  const el = document.getElementById('openStatus');
  if (!el) return;
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();
  const isLateWeekend = (day === 6 || day === 0) && hour < 3;
  const isLateWeekday = (day >= 1 && day <= 5) && hour < 1;
  const isOpen = hour >= 15 || isLateWeekend || isLateWeekday;

  el.classList.toggle('is-open', isOpen);
  const textEl = el.querySelector('.open-pill-text');
  textEl.textContent = isOpen ? 'Právě otevřeno' : 'Otevíráme v 15:00';
}
updateOpenStatus();

// Catering form preview
const guestSlider = document.getElementById('guestCount');
const guestVal = document.getElementById('guestCountVal');
guestSlider.addEventListener('input', () => {
  guestVal.textContent = guestSlider.value;
});

const cateringForm = document.getElementById('cateringForm');
const formResult = document.getElementById('formResult');
cateringForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const fd = new FormData(cateringForm);
  const type = fd.get('type');
  const guests = fd.get('guests');
  const name = fd.get('name');
  const contact = fd.get('contact');
  const note = fd.get('note') || 'Bez další poznámky';
  const items = fd.getAll('items').join(', ') || 'Dle domluvy';

  const subject = encodeURIComponent(`Poptávka: ${type} (${guests} osob) – ${name}`);
  const body = encodeURIComponent(
    `Dobrý den,\n\nrád(a) bych poptal(a): ${type}\nPočet osob: ${guests}\nVybrané položky: ${items}\nKontakt: ${contact}\nPoznámka: ${note}\n\nS pozdravem,\n${name}`
  );

  formResult.hidden = false;
  formResult.innerHTML = `
    <strong>Děkujeme, ${name}!</strong> Poptávka pro <strong>${guests} osob</strong> (${type}) je připravena.<br>
    <a href="mailto:info@pivnicepizzapokr.cz?subject=${subject}&body=${body}">Odeslat e-mailem přímo do POKRu</a> nebo zavolejte na <a href="tel:+420608822342">+420 608 822 342</a>.
  `;
});

// Reveal on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

document.getElementById('year').textContent = new Date().getFullYear();
