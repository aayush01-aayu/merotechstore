
const data = {
  frames: [
    // ── HOW TO ADD MULTIPLE IMAGES PER PRODUCT ──────────────────────────────
    // Use the `imgs` array to show up to 4 different photos in the gallery.
    // Each slot (Main, View 2, Detail, Side) shows a different image.
    // Example: imgs:['images/f1_main.jpg','images/f1_angle.jpg','images/f1_detail.jpg','images/f1_side.jpg']
    // If you only have 1 photo, just put 1 path and the rest will show an icon.
    // ────────────────────────────────────────────────────────────────────────
    {id:'f1',name:'Document Frame',specs:'Document or Certificate frame, Size 8.3 x 11.7 inches, Brown wood-grain finish',price:385,oldPrice:550,avail:'in-stock',cat:'frame',emoji:'🖼️',imgs:['images/frame01.jpeg','images/lll.png','images/lll.png','images/lll.png'],rating:4.8,rev:113},
    {id:'f2',name:'Silver-colored Rectangle Frame',specs:'Size 8.3 x 11.7 inches, Textural pattern (3D effect)',price:350,oldPrice:550,avail:'in-stock',cat:'frame',emoji:'🖼️',imgs:['images/frame02.jpeg','images/lll.png','images/lll.png','images/ll.png'],rating:4.6,rev:87},
    {id:'f3',name:'White Border Frame',specs:'photography frame, Size 8.3 x 11.7 inches, White border',price:350,oldPrice:500,avail:'in-stock',cat:'frame',emoji:'🖼️',imgs:['images/frame03.jpeg','images/lll.png','images/lll.png','images/lll.png'],rating:4.9,rev:156},
    {id:'f4',name:'White Frame with a Gold Inner Border',specs:'Size 8.3 x 11.7 inches, Gold inner border',price:400,oldPrice:600,avail:'low-stock',cat:'frame',emoji:'🖼️',imgs:['images/frame04.jpeg','images/lll.png','images/lll.png','images/lll.png'],rating:4.5,rev:203},
    {id:'f5',name:'Dark Brown Wooden Frame',specs:'Size 8.3 x 11.7 inches, Dark brown finish',price:320,oldPrice:560,avail:'in-stock',cat:'frame',emoji:'🖼️',imgs:['images/frame05.jpeg','images/lll.png','images/lll.png','images/lll.png'],rating:4.7,rev:55},
    {id:'f6',name:'Thick Black Frame',specs:'Size 8.3 x 11.7 inches, Thick black finish',price:350,oldPrice:500,avail:'in-stock',cat:'frame',emoji:'🖼️',imgs:['images/frame06.jpeg','images/lll.png','images/lll.png','images/lll.png'],rating:4.4,rev:318},
    {id:'f7',name:'Dark Brown or Bronze Picture Frame',specs:'Size 8.3 x 11.7 inches, Dark brown or bronze finish',price:350,oldPrice:500,avail:'in-stock',cat:'frame',emoji:'🖼️',imgs:['images/frame07.jpeg','images/lll.png','images/lll.png','images/lll.png'],rating:4.6,rev:91},
    {id:'f8',name:'Plain Black Frame',specs:'Size 8.3 x 11.7 inches, Plain black finish',price:400,oldPrice:650,avail:'in-stock',cat:'frame',emoji:'🖼️',imgs:['images/frame08.jpeg','images/lll.png','images/lll.png','images/lll.png'],rating:4.8,rev:122},
    {id:'f9',name:'Classic Dark Wood & Gold Border Frame',specs:'Size 8.3 x 11.7 inches, Dark wood and gold border',price:400,oldPrice:700,avail:'in-stock',cat:'frame',emoji:'🖼️',imgs:['images/frame09.jpeg','images/lll.png','images/lll.png','images/lll.png'],rating:4.3,rev:167},
    {id:'f10',name:'Dark Frame With Distinct Gold Inner Border',specs:'Size 8.3 x 11.7 inches, Dark frame with distinct gold inner border',price:400,oldPrice:750,avail:'in-stock',cat:'frame',emoji:'🖼️',imgs:['images/frame10.jpeg','images/lll.png','images/lll.png','images/lll.png'],rating:4.7,rev:273},
    {id:'f11',name:'Wood-Grain Frame With Wide Black inner Mat & Thin Gold Accent Border',specs:'Size 8.3 x 11.7 inches, Wood-grain finish with wide black inner mat and yellow gold accent border',price:450,oldPrice:800,avail:'low-stock',cat:'frame',emoji:'🖼️',imgs:['images/frame11.jpeg','images/lll.png','images/lll.png','images/lll.png'],rating:4.2,rev:445},
    {id:'f12',name:'Live Soon',specs:'Nothing to show yet',price:1.00,oldPrice:1.00,avail:'out-stock',cat:'led',emoji:'⚡',imgs:['images/lll.png','images/lll.png','images/lll.png','images/lll.png'],rating:4.8,rev:0},
  ],
  gadgets: [
    {id:'g1',name:'4 in 1 Fast Charging Cable (Type C/USB A/Lightning) Dual Type C PD 27W 65W ',specs:'Data Cable, Fast Charging',price:230,oldPrice:1000,avail:'low-stock',cat:'Cables',emoji:'🔌',imgs:['images/cv4.png','images/cv1.png','images/cv2.png','images/cv3.png'],rating:4.7,rev:312},
    {id:'g2',name:'Ultra Pods Pro Earbuds Transparent TWS Bluetooth Earbuds BT Noise Cancelling ',specs:'True Wireless Stereo, Active Noise Cancellation',price:320,oldPrice:800,avail:'in-stock',cat:'Earbuds',emoji:'🎧',imgs:['images/ear4.png','images/ear1.png','images/ear3.png','images/ear2.png'],rating:4.8,rev:198},
    {id:'g3',name:'ALL IN ONE 5in1 Fast Charging Data Cable Kit',specs:'5-in-1 charging solution with multiple port options',price:299,oldPrice:499,avail:'low-stock',cat:'Cables',emoji:'🔋',imgs:['images/ca1.png','images/ca2.png','images/ca1.png','images/ca2.png'],rating:4.5,rev:267},
    {id:'g4',name:'USB-C Cable 2m',specs:'240W, 40Gbps, Thunderbolt 4',price:699,oldPrice:null,avail:'low-stock',cat:'cables',emoji:'🔗',imgs:['images/ch1.jpg','images/ch1.jpg','images/ch1.jpg','images/ch1.jpg'],rating:4.6,rev:532},
    {id:'g5',name:'Flexible USB LED Light',specs:'Adjustable brightness, USB-powered',price:65,oldPrice:100,avail:'in-stock',cat:'accessories',emoji:'💻',imgs:['images/le1.png','images/le2.png','images/le3.png','images/le2.png'],rating:4.7,rev:144},
    {id:'g6',name:'PODS TWS Earbuds with Battery Display',specs:'True Wireless Stereo, Built-in Battery Indicator',price:499,oldPrice:null,avail:'in-stock',cat:'Earbuds',emoji:'⌨️',imgs:['images/po1.png','images/po2.png','images/po3.png','images/po4.png'],rating:4.9,rev:87},
    {id:'g7',name:'Dual Rechargeable Bluetooth and 2.4G Wireless Mouse 2 in 1 Mouse',specs:'Rechargeable, Multi-device, Slim',price:399,oldPrice:799,avail:'low-stock',cat:'input',emoji:'🖱️',imgs:['images/mo1.png','images/mo2.png','images/mo2.png','images/mo1.png'],rating:4.6,rev:221},
    {id:'g8',name:'Ubon Maharaja SP 46 Wireless Speaker',specs:'10W RMS, 360° Sound, Built-in Battery',price:999,oldPrice:null,avail:'in-stock',cat:'speakers',emoji:'🛡️',imgs:['images/sp1.png','images/sp2.png','images/sp3.png','images/sp4.png'],rating:4.4,rev:890},
    {id:'g9',name:'Huntkey Surge Protector SZM804-2 | 8 Socket Multiplug',specs:'8 USB ports, 2 AC outlets, Surge protection',price:1999,oldPrice:3200,avail:'low-stock',cat:'charging',emoji:'🔋',imgs:['images/mu2.jpg','images/mu1.jpg','images/mu1.jpg','images/mu2.jpg'],rating:4.8,rev:176},
    {id:'g10',name:'T800 Ultra smartwatch,S9 Ultra 2 with wireless charging And Smartwatch',specs:'Smartwatch with wireless charging capability',price:799,oldPrice:null,avail:'low-stock',cat:'smartwatch',emoji:'🗂️',imgs:['images/wa1.png','images/wa2.png','images/wa3.png','images/wa4.png'],rating:4.3,rev:456},
    {id:'g11',name:'3-in-1 Wireless Charging Stand',specs:'Phone+Watch+Earbuds, 15W max',price:4200,oldPrice:5000,avail:'low-stock',cat:'charging',emoji:'📱',imgs:['images/wi1.png','images/wi2.png','images/wi3.png','images/wi4.png'],rating:4.7,rev:63},
    {id:'g12',name:'Fantech ATOM96 MK890 V2 Wired Mechanical Gaming Keyboard Mizu Edition',specs:'Mechanical switches, RGB lighting, Programmable keys',price:3500,oldPrice:null,avail:'low-stock',cat:'input',emoji:'🔢',imgs:['images/ke1.png','images/ke2.png','images/ke3.png','images/ke4.png'],rating:4.5,rev:112},
  ],
  repairs: [
    {id:'r1',name:'Screen Replacement',desc:'Full AMOLED/LCD screen swap with touch digitizer. Supports all major smartphone models.',price:'From Rs. 1,500',time:'2–4 hours',emoji:'📱'},
    {id:'r2',name:'Battery Replacement',desc:'Genuine OEM battery replacement. Battery health test included. Device performance restored.',price:'From Rs. 1,200',time:'1–2 hours',emoji:'🔋'},
    {id:'r3',name:'Charging Port Repair',desc:'USB-C / microUSB / Lightning port cleaning or full replacement. Includes contact test.',price:'From Rs. 1,800',time:'1–3 hours',emoji:'⚡'},
    {id:'r4',name:'Water Damage Recovery',desc:'Ultrasonic cleaning, board inspection, component replacement. Emergency service available.',price:'From Rs. 2,500',time:'24–48 hours',emoji:'💧'},
    {id:'r5',name:'Camera Module Fix',desc:'Front or rear camera replacement. Autofocus, OIS and video tested post-repair.',price:'From Rs. 2,800',time:'3–5 hours',emoji:'📷'},
    {id:'r6',name:'Software Recovery & Unlock',desc:'Factory reset, IMEI recovery, account removal, bootloop fix, Android & iOS supported.',price:'From Rs. 1,500',time:'1–4 hours',emoji:'💻'},
    {id:'r7',name:'Back Glass Replacement',desc:'Precision laser removal and replacement for all Samsung/Apple glass back models.',price:'From Rs. 800',time:'2–4 hours',emoji:'🔲'},
    {id:'r8',name:'Speaker & Microphone Repair',desc:'Audio quality tested. Speaker grille cleaning or full module replacement available.',price:'From Rs. 500',time:'1–3 hours',emoji:'🔊'},
  ],
  pcbServices: [
    {id:'ps1',name:'Custom PCB Design',desc:'Schematic to layout — single or multi-layer boards up to 8 layers. DRC & simulation included.',price:'From Rs. 3,000',time:'3–7 days',emoji:'📐'},
    {id:'ps2',name:'PCB Prototype (5 units)',desc:'Manufactured prototypes of your design. 2-layer standard. FR4 material, HASL finish.',price:'From Rs. 2,500',time:'5–10 days',emoji:'🔬'},
    {id:'ps3',name:'PCB Assembly & Soldering',desc:'SMD & through-hole component soldering. BOM supply available. AOI inspection included.',price:'From Rs. 4,000',time:'3–7 days',emoji:'🔧'},
    {id:'ps4',name:'Arduino / ESP32 Shield Design',desc:'Custom shields, breakout boards, and sensor integrations for Arduino/ESP families.',price:'From Rs. 2,000',time:'2–5 days',emoji:'🤖'},
    {id:'ps5',name:'PCB Testing & Quality Check',desc:'Functional testing, continuity checks, and full QC report for your manufactured boards.',price:'From Rs. 800',time:'1–2 days',emoji:'✅'},
    {id:'ps6',name:'Reverse Engineering & Cloning',desc:'Recreate or repair damaged PCBs from working samples. Legal use only.',price:'From Rs. 5,000',time:'5–14 days',emoji:'🔍'},
  ],
  pcbComponents: [
    {id:'p1',name:'Flysky FS-i6X 10CH 2.4GHz AFHDS RC Transmitter',specs:'Flysky FS-i6X 10CH 2.4GHz AFHDS RC Transmitter',price:8999,oldPrice:null,avail:'low-stock',cat:'components',emoji:'⚙️',imgs:['images/i61.jpg','images/i62.jpg','images/i63.jpg','images/i64.jpg'],rating:4.7,rev:134},
    {id:'p2',name:'ESP32 Dev Board',specs:'Dual-core, WiFi+BT, 38 GPIO pins',price:1199,oldPrice:1500,avail:'low-stock',cat:'components',emoji:'📡',imgs:['images/e1.png','images/e2.png','images/e3.png','images/e4.png'],rating:4.9,rev:178},
    {id:'p3',name:'A2212 1000 KV BLDC Brushless DC Motor for Drone',specs:'High-performance motor for drone applications',price:999,oldPrice:null,avail:'low-stock',cat:'components',emoji:'⚡',imgs:['images/bl2.png','images/bl1.png','images/bl3.png','images/bl2.png'],rating:4.9,rev:167},
    {id:'p4',name:'Soldering Iron 60W Digital',specs:'LED display, ceramic heater, °C/°F',price:1199,oldPrice:2000,avail:'low-stock',cat:'components',emoji:'🔥',imgs:['images/i2.png','images/i1.png','images/i2.png','images/i1.png'],rating:4.6,rev:89},
    {id:'p5',name:'ESC 30A Brushless Speed Controller',specs:'30A continuous current, 5V–30V input voltage',price:799,oldPrice:1200,avail:'low-stock',cat:'components',emoji:'📦',imgs:['images/esc1.webp','images/esc2.webp','images/esc3.png','images/esc4.png'],rating:4.8,rev:312},
    {id:'p6',name:'Breadboard 830-Point + Jumpers',specs:'Solderless, 830 tie points, 140 jumpers',price:499,oldPrice:null,avail:'low-stock',cat:'components',emoji:'🔲',imgs:['images/br1.png','images/br2.png','images/br3.png','images/br4.png'],rating:4.5,rev:567},
    {id:'p7',name:'Arduino Nano V3',specs:'ATmega328P, Mini-USB, 5V/3.3V out',price:799,oldPrice:1200,avail:'low-stock',cat:'components',emoji:'⚙️',imgs:['images/n1.png','images/n2.png','images/n1.png','images/n2.png'],rating:4.7,rev:198},
    {id:'p8',name:'NodeMCU ESP8266 WiFi Board',specs:'80MHz Tensilica, WiFi 802.11b/g/n, Lua/Arduino',price:1199,oldPrice:null,avail:'low-stock',cat:'components',emoji:'📡',imgs:['images/es1.png','images/es2.png','images/es3.png','images/es1.png'],rating:4.6,rev:322},
    {id:'p9',name:'16x2 LCD Display + I2C Module',specs:'HD44780 controller, I2C backpack, 5V, Blue/Green backlight',price:699,oldPrice:999,avail:'low-stock',cat:'components',emoji:'🖥️',imgs:['images/lcd1.png','images/lcd2.png','images/lcd3.png','images/lcd4.png'],rating:4.5,rev:145},
    {id:'p10',name:'HC-SR04 Ultrasonic Sensor',specs:'2cm–400cm range, ±3mm accuracy, 5V',price:299,oldPrice:null,avail:'low-stock',cat:'components',emoji:'📶',imgs:['images/u1.png','images/u2.png','images/u3.png','images/u2.png'],rating:4.6,rev:280},
    {id:'p11',name:'DHT22 Temperature & Humidity Sensor',specs:'-40°C to +80°C, 0–100% RH, Digital output',price:499,oldPrice:null,avail:'low-stock',cat:'components',emoji:'🌡️',imgs:['images/th1.png','images/th2.png','images/th1.png','images/th2.png'],rating:4.8,rev:201},
    {id:'p12',name:'L298N Dual Motor Driver Module',specs:'2A per channel, 7–46V, PWM control',price:499,oldPrice:549,avail:'low-stock',cat:'components',emoji:'⚡',imgs:['images/d1.png','images/d2.png','images/d3.png','images/d4.png'],rating:4.5,rev:167},
    {id:'p13',name:'Lithium Battery Charger Protection Module (BMS) 3S 20A 12.6V',specs:'3S, 20A, 12.6V',price:250,oldPrice:449,avail:'low-stock',cat:'components',emoji:'🔴',imgs:['images/bms1.png','images/bms2.png','images/bms3.png','images/bms4.png'],rating:4.7,rev:433},
    {id:'p14',name:'18650 2000mAh 3.7v 7.4Wh Lithium-Ion Rechargeable Battery (High Backup)',specs:'18650, 2000mAh, 3.7V, 7.4Wh',price:99,oldPrice:199,avail:'low-stock',cat:'components',emoji:'🔵',imgs:['images/ba2.png','images/ba1.png','images/ba3.png','images/ba2.png'],rating:4.6,rev:189},
    {id:'p15',name:' 10 Inch propeler  set',specs:'10 inch, 4-blade, Plastic',price:1499,oldPrice:null,avail:'low-stock',cat:'components',emoji:'💡',imgs:['images/pp1.png','images/pp2.png','images/pp1.png','images/pp2.png'],rating:4.4,rev:512},
    {id:'p16',name:'Relay Module 5V (4-Channel)',specs:'5V trigger, 10A/250VAC contacts, Optoisolated',price:599,oldPrice:800,avail:'low-stock',cat:'modules',emoji:'🔌',imgs:['images/re1.jpg','images/re2.jpg','images/re3.jpg','images/re1.jpg'],rating:4.7,rev:244},
    {id:'p17',name:'0 Pcb Board (3 x 2-Inch)',specs:'0 pcs',price:199,oldPrice:399,avail:'low-stock',cat:'components',emoji:'⚡',imgs:['images/p1.png','images/p2.png','images/p1.png','images/p2.png'],rating:4.5,rev:310},
    {id:'p18',name:'ISD1820 Voice Recording Module',specs:'1820, 3.3V, 5V',price:699,oldPrice:null,avail:'low-stock',cat:'modules',emoji:'🔧',imgs:['images/rec1.png','images/rec2.png','images/rec3.png','images/rec1.png'],rating:4.6,rev:278},
    {id:'p19',name:'Digital Multimeter UT33C+',specs:'AC/DC voltage/current, Diode/continuity, Auto range',price:2199,oldPrice:2800,avail:'low-stock',cat:'tools',emoji:'🔬',imgs:['images/m1.png','images/m2.png','images/m1.png','images/m2.png'],rating:4.8,rev:134},
    {id:'p20',name:'Mg995 Metal Gear Servo Motor',specs:'MG995, 3.3V–5V, 120° range',price:699,oldPrice:null,avail:'low-stock',cat:'components',emoji:'✂️',imgs:['images/se1.png','images/se2.png','images/se3.png','images/se4.png'],rating:4.6,rev:98},
    {id:'p21',name:'Bluetooth MP3 Player Decoding Board Module w/ SD, USB 2.0, FM 5V DC',specs:'Bluetooth 5.0, SD card reader, USB 2.0 port, FM radio',price:399,oldPrice:null,avail:'in-stock',cat:'modules',emoji:'🔲',imgs:['images/bt1.png','images/bt2.png'],rating:4.5,rev:361},
    {id:'p22',name:'IR Receiver + Remote Kit',specs:'38kHz NEC protocol, VS1838B sensor, 21-key remote',price:799,oldPrice:null,avail:'low-stock',cat:'modules',emoji:'📡',imgs:['images/ir1.png','images/ir2.png','images/ir3.png','images/ir2.png'],rating:4.4,rev:287},
  ],
  // ── Homemade Gadgets ──
  ups: [
    {id:'hg1',name:'Live Soon',specs:'Work in Progess',price:1,oldPrice:null,avail:'out-stock',cat:'all',emoji:'🌱',imgs:['images/lll.png'],rating:4.8,rev:12},
    {id:'hg2',name:'Live Soon',specs:'Work in Progess',price:1,oldPrice:null,avail:'out-stock',cat:'all',emoji:'🚪',imgs:['images/lll.png'],rating:4.7,rev:8},
    {id:'hg3',name:'Live Soon',specs:'Work in Progess',price:1,oldPrice:null,avail:'out-stock',cat:'all',emoji:'💨',imgs:['images/lll.png'],rating:4.6,rev:15},
    {id:'hg4',name:'Live Soon',specs:'Work in Progess',price:1,oldPrice:null,avail:'out-stock',cat:'all',emoji:'🌡️',imgs:['images/lll.png'],rating:4.9,rev:21},
    {id:'hg5',name:'Live Soon',specs:'Work in Progess',price:1,oldPrice:null,avail:'out-stock',cat:'all',emoji:'👏',imgs:['images/lll.png'],rating:4.7,rev:6},
    {id:'hg6',name:'Live Soon',specs:'Work in Progess',price:1,oldPrice:null,avail:'out-stock',cat:'all',emoji:'💡',imgs:['images/lll.png'],rating:4.8,rev:9},
    {id:'hg7',name:'Live Soon',specs:'Work in Progess',price:1,oldPrice:null,avail:'out-stock',cat:'all',emoji:'🔴',imgs:['images/lll.png'],rating:4.9,rev:5},
    {id:'hg8',name:'Live Soon',specs:'Work in Progess',price:1,oldPrice:null,avail:'out-stock',cat:'all',emoji:'🌙',imgs:['images/lll.png'],rating:4.6,rev:18},
    {id:'hg9',name:'Live Soon',specs:'Work in Progess',price:1,oldPrice:null,avail:'out-stock',cat:'all',emoji:'🔧',imgs:['images/lll.png'],rating:4.5,rev:30},
    {id:'hg10',name:'Live Soon',specs:'Work in Progess',price:1,oldPrice:null,avail:'out-stock',cat:'all',emoji:'🔋',imgs:['images/lll.png'],rating:4.7,rev:14},
  ]
};

const timeline = [
  {
    q:'Q3 2025',title:'Mobile App Launch',
    desc:'A full-featured iOS & Android app for Mero Tech Store. Book repairs, track orders, browse products, and get push notifications on service updates — all from your phone.',
    features:['Live repair tracking','In-app chat support','Loyalty points','One-tap reorder'],
    status:'in-progress'
  },
  {
    q:'Q3 2026',title:'Online Payment Integration',
    desc:'Accept eSewa, Khalti, ConnectIPS, and international cards for seamless checkout. No more cash-only transactions. Secure PCI-compliant payment processing.',
    features:['eSewa & Khalti','Credit/Debit cards','EMI options','Auto-invoice email'],
    status:'in-progress'
  },
  {
    q:'Q4 2026',title:'PCB Design Studio Online',
    desc:'An in-browser PCB design tool where customers can upload Gerber files, configure layer counts, choose finishes, and place orders directly with real-time pricing.',
    features:['Gerber file upload','Real-time pricing','DFM checks','Auto-quote system'],
    status:'planned'
  },
  {
    q:'Q4 2026',title:'Home Service Program',
    desc:'Certified technicians dispatched to your home or office for network setup, NAS installation, and select device repairs. Jhapa district first, expanding to surrounding areas.',
    features:['Router setup at home','NAS installation','Network audit','Evening slots available'],
    status:'planned'
  },
  {
    q:'Q1 2026',title:'Mero Tech Loyalty Program',
    desc:'Earn MeroPoints on every purchase and repair. Redeem for discounts, priority service slots, free accessories, and exclusive member-only deals. Tier system: Bronze → Silver → Gold → Platinum.',
    features:['Points on every purchase','Tier-based benefits','Birthday bonus','Referral rewards'],
    status:'planned'
  },
  {
    q:'Q2 2026',title:'Second Branch — Birtramod',
    desc:'Expanding to Birtramod with a fully staffed repair center, showroom, and PCB lab. Located in Thamel for maximum accessibility. Grand opening event planned.',
    features:['Full repair center','Walk-in PCB lab','Product showroom','Training academy'],
    status:'future'
  },
];

// ══════════════════════════════════════════
//  STATE
// ══════════════════════════════════════════
let cart = [];
let currentPage = 'home';
let toastTimer = null;

// ══════════════════════════════════════════
//  NAVIGATION
// ══════════════════════════════════════════
function nav(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const el = document.getElementById('page-' + page);
  if(el) {
    el.classList.add('active');
    el.classList.add('page-enter');
    setTimeout(() => el.classList.remove('page-enter'), 500);
  }
  document.querySelectorAll('.nav-link').forEach(l => {
    l.classList.toggle('active', l.dataset.page === page);
  });
  window.scrollTo({top: 0, behavior: 'smooth'});
  currentPage = page;
  // Hide sticky buy bar when navigating away from product page
  if(page !== 'product') {
    const sb = document.getElementById('pdp-sticky-bar');
    if(sb) sb.classList.remove('visible');
  }
}

function toggleMenu() {
  var menu = document.getElementById('mobile-menu');
  var hbg  = document.getElementById('hamburger');
  var isOpen = menu.classList.toggle('open');
  hbg.classList.toggle('open', isOpen);
  // Prevent body scroll when menu open
  document.body.style.overflow = isOpen ? 'hidden' : '';
}
function closeMenu() {
  document.getElementById('mobile-menu').classList.remove('open');
  document.getElementById('hamburger').classList.remove('open');
  document.body.style.overflow = '';
}

window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 20);
});

// ══════════════════════════════════════════
//  PRODUCT RENDERING
// ══════════════════════════════════════════
function availBadge(avail) {
  if(avail==='in-stock')  return '<span class="tag-green"><span class="tag-dot" style="background:var(--green)"></span>In Stock</span>';
  if(avail==='low-stock') return '<span class="tag-yellow"><span class="tag-dot" style="background:var(--gold)"></span>Low Stock</span>';
  if(avail==='pre-order') return '<span class="tag-blue"><span class="tag-dot" style="background:var(--gold)"></span>Pre-Order</span>';
  return '';
}

function starsHtml(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? '½' : '';
  return '★'.repeat(full) + half;
}

function productCard(p) {
  const isPreOrder = p.avail === 'pre-order';
  const imgSrc = (Array.isArray(p.imgs) ? p.imgs.find(src => src) : '') || (p.img || '');
  const hasImg = imgSrc ? 'has-image' : '';
  const isHomemade = p._cat === 'ups';
  const waMsg = encodeURIComponent(`Hi! I'm interested in your homemade gadget:\n*${p.name}*\nCould you tell me more and check availability?`);

  // Discount % badge
  const discountBadge = (p.oldPrice && p.oldPrice > p.price)
    ? `<div class="product-discount-badge">-${Math.round((1 - p.price/p.oldPrice)*100)}%</div>`
    : '';

  // Availability badge (top-left)
  const availTag = isHomemade
    ? '<span class="tag-handmade"><span class="tag-dot" style="background:var(--gold)"></span>Handmade</span>'
    : availBadge(p.avail);

  // CTA button
  const ctaBtn = isHomemade
    ? `<a class="add-cart-btn btn-wa" href="https://wa.me/9779744924667?text=${waMsg}" target="_blank" style="text-decoration:none;" onclick="event.stopPropagation()">💬 Enquire</a>`
    : `<button class="add-cart-btn" ${isPreOrder ? 'style="opacity:.55;pointer-events:none;"' : ''} onclick="event.stopPropagation();addToCart('${p.id}','${escHtml(p.name)}',${p.price},'${p.emoji}',this)">
        <svg width="12" height="12" viewBox="0 0 20 20" fill="none" style="flex-shrink:0"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 5M17 18a1 1 0 100-2 1 1 0 000 2zM9 18a1 1 0 100-2 1 1 0 000 2z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
        ${isPreOrder ? 'Pre-Order' : 'Add'}
      </button>`;

  return `
    <div class="product-card" data-cat="${p.cat}" data-id="${p.id}" onclick="openProduct('${p.id}','${p._cat||p.cat}')">
      <div class="product-img ${hasImg}">
        <div class="product-badge">${availTag}</div>
        ${discountBadge}
        ${imgSrc
          ? `<img class="product-real-img" src="${imgSrc}" alt="${escHtml(p.name)}" loading="lazy">`
          : `<div class="pimg-placeholder"><div class="pimg-placeholder-icon">${p.emoji}</div><div class="pimg-placeholder-label">${isHomemade ? 'Handmade' : 'No Image'}</div></div>`
        }
      </div>
      <div class="product-info">
        <div class="product-rating-row">
          <span class="product-stars">${starsHtml(p.rating)}</span>
          <span class="product-rating-count">(${p.rev})</span>
        </div>
        <div class="product-name">${escHtml(p.name)}</div>
        <div class="product-specs">${escHtml(p.specs)}</div>
        <div class="product-footer">
          <div class="product-price-block">
            <span class="product-price">Rs. ${p.price.toLocaleString()}</span>
            ${p.oldPrice ? `<span class="product-price-old">Rs. ${p.oldPrice.toLocaleString()}</span>` : ''}
          </div>
          ${ctaBtn}
        </div>
      </div>
    </div>`;
}

function escHtml(s){ return s.replace(/'/g,"&#39;"); }

function renderGrid(id, products) {
  const catKeyMap = { frames:'frames', gadgets:'gadgets', ups:'ups', pcb:'pcbComponents' };
  const catKey = catKeyMap[id] || id;
  const tagged = products.map(p => ({...p, _cat: catKey}));
  const el = document.getElementById('grid-' + id);
  if(el) el.innerHTML = tagged.map(productCard).join('');
}

function serviceCard(s) {
  return `
    <div class="service-card">
      <div class="service-icon-wrap">${s.emoji}</div>
      <div class="service-info">
        <div class="service-name">${s.name}</div>
        <div class="service-desc">${s.desc}</div>
        <div class="service-meta">
          <span class="service-price">${s.price}</span>
          <span class="service-time">⏱ ${s.time}</span>
          ${s.warranty ? `<span class="tag-green">🛡️ ${s.warranty} warranty</span>` : ''}
        </div>
      </div>
      <button class="btn btn-blue btn-sm" onclick="nav('booking')">Book →</button>
    </div>`;
}

function pcbServiceCard(s) {
  return `
    <div style="background:var(--bg2);border:1px solid var(--border);border-radius:var(--r2);padding:28px;display:grid;grid-template-columns:60px 1fr auto;gap:20px;align-items:center;transition:var(--transition);" onmouseover="this.style.borderColor='var(--blue)'" onmouseout="this.style.borderColor='var(--border)'">
      <div style="width:56px;height:56px;background:var(--blue-bg);border:1px solid rgba(0,102,255,.2);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:1.8rem;">${s.emoji}</div>
      <div>
        <div style="font-family:'Syne',sans-serif;font-weight:700;font-size:1rem;margin-bottom:6px;">${s.name}</div>
        <div style="font-size:.83rem;color:var(--muted);margin-bottom:10px;line-height:1.5;">${s.desc}</div>
        <div style="display:flex;gap:14px;align-items:center;flex-wrap:wrap;">
          <span style="font-family:'Syne',sans-serif;font-weight:700;color:var(--blue);font-size:1rem;">${s.price}</span>
          <span style="font-size:.75rem;color:var(--muted);">⏱ ${s.time}</span>
        </div>
      </div>
      <button class="btn btn-blue btn-sm" onclick="nav('booking')">Request Quote →</button>
    </div>`;
}

function renderTimeline() {
  const statusColors = {
    'in-progress': {color:'var(--blue)',label:'In Progress'},
    'planned': {color:'var(--yellow)',label:'Planned'},
    'future': {color:'var(--muted)',label:'Future'}
  };
  const html = timeline.map(t => {
    const sc = statusColors[t.status] || statusColors.planned;
    return `
      <div class="timeline-item">
        <div class="timeline-quarter">${t.q}</div>
        <div class="upcoming-card">
          <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:16px;margin-bottom:10px;">
            <div class="timeline-title">${t.title}</div>
            <span style="background:transparent;border:1px solid ${sc.color};color:${sc.color};font-size:.72rem;padding:3px 10px;border-radius:20px;white-space:nowrap;font-weight:600;">${sc.label}</span>
          </div>
          <div class="timeline-desc">${t.desc}</div>
          <div class="upcoming-features">
            ${t.features.map(f => `<span class="feature-chip">✓ ${f}</span>`).join('')}
          </div>
        </div>
      </div>`;
  }).join('');
  const el = document.getElementById('timeline-container');
  if(el) el.innerHTML = html;

  // Progress sidebar
  const counts = {
    'In Progress': timeline.filter(t=>t.status==='in-progress').length,
    'Planned': timeline.filter(t=>t.status==='planned').length,
    'Future': timeline.filter(t=>t.status==='future').length,
  };
  const colors = {'In Progress':'var(--blue)','Planned':'var(--yellow)','Future':'var(--muted)'};
  const progressEl = document.getElementById('progress-cards');
  if(progressEl) {
    progressEl.innerHTML = Object.entries(counts).map(([label,count]) => `
      <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--border);">
        <div style="display:flex;align-items:center;gap:8px;">
          <div style="width:8px;height:8px;border-radius:50%;background:${colors[label]};"></div>
          <span style="font-size:.85rem;color:var(--muted);">${label}</span>
        </div>
        <span style="font-family:'Syne',sans-serif;font-weight:700;color:${colors[label]};">${count}</span>
      </div>`).join('');
  }
}

// ══════════════════════════════════════════
//  CART
// ══════════════════════════════════════════
function addToCart(id, name, price, emoji, btnEl) {
  const existing = cart.find(i => i.id === id);
  if(existing) { existing.qty++; }
  else { cart.push({id, name, price, emoji, qty:1}); }
  updateCartUI();
  showToast(`🛒 ${name.substring(0,22)}... added to cart!`);
  // Subtle button feedback
  if(btnEl) {
    const orig = btnEl.textContent;
    btnEl.textContent = '✓ Added';
    btnEl.style.background = 'var(--green)';
    btnEl.style.color = '#fff';
    btnEl.disabled = true;
    setTimeout(() => {
      btnEl.textContent = orig;
      btnEl.style.background = '';
      btnEl.style.color = '';
      btnEl.disabled = false;
    }, 1200);
  }
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  updateCartUI();
}

function updateCartUI() {
  const total = cart.reduce((s,i) => s + i.price * i.qty, 0);
  const count = cart.reduce((s,i) => s + i.qty, 0);
  const countEl = document.getElementById('cart-count');
  countEl.textContent = count;
  countEl.classList.toggle('show', count > 0);
  const hCount = document.getElementById('cart-header-count');
  if(hCount) hCount.textContent = count > 0 ? `(${count} items)` : '';
  document.getElementById('cart-total').textContent = `Rs. ${total.toLocaleString()}`;
  const itemsEl = document.getElementById('cart-items');
  if(cart.length === 0) {
    itemsEl.innerHTML = `<div class="cart-empty"><div class="cart-empty-icon">🛒</div><div>Your cart is empty</div><div style="font-size:.8rem;color:var(--dim);margin-top:6px;">Browse our products to add items</div></div>`;
  } else {
    itemsEl.innerHTML = cart.map(i => `
      <div class="cart-item">
        <div class="cart-item-img">${i.emoji}</div>
        <div class="cart-item-info">
          <div class="cart-item-name">${i.name}</div>
          <div style="display:flex;align-items:center;gap:10px;">
            <div class="cart-item-price">Rs. ${(i.price*i.qty).toLocaleString()}</div>
            ${i.qty>1?`<span style="font-size:.75rem;color:var(--dim);">×${i.qty}</span>`:''}
          </div>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart('${i.id}')">✕</button>
      </div>`).join('');
  }
}

function openCart() {
  document.getElementById('cart-sidebar').classList.add('open');
  document.getElementById('overlay').classList.add('show');
}
function closeCart() {
  document.getElementById('cart-sidebar').classList.remove('open');
  document.getElementById('overlay').classList.remove('show');
}
function checkout() {
  if(cart.length === 0) { showToast('⚠️ Your cart is empty!'); return; }

  const WHATSAPP_NUMBER = '9779744924667'; // Business WhatsApp number

  const now = new Date();
  const timestamp = now.toLocaleString('en-NP', { dateStyle:'medium', timeStyle:'short' });
  const itemCount = cart.reduce((s,i) => s + i.qty, 0);
  const total = cart.reduce((s,i) => s + i.price * i.qty, 0);

  // Build itemised list
  const lines = cart.map((i, idx) =>
    `  ${idx+1}. ${i.emoji} ${i.name}\n` +
    `     Qty: ${i.qty}  ×  Rs. ${i.price.toLocaleString()} = *Rs. ${(i.price*i.qty).toLocaleString()}*`
  ).join('\n\n');

  const message =
`🛒 *NEW ORDER — MERO TECH STORE*
━━━━━━━━━━━━━━━━━━━━━
🕐 ${timestamp}
📦 Items: ${itemCount}
━━━━━━━━━━━━━━━━━━━━━

${lines}

━━━━━━━━━━━━━━━━━━━━━
💰 *TOTAL: Rs. ${total.toLocaleString()}*
━━━━━━━━━━━━━━━━━━━━━

📍 Payment: Cash on delivery / pickup
📞 Please confirm my order. Thank you!`;

  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(waUrl, '_blank');
  closeCart();
  showToast('✅ Opening WhatsApp to confirm your order!');
}

// ══════════════════════════════════════════
//  BOOKING FORM
// ══════════════════════════════════════════
function handleBooking(e) {
  e.preventDefault();
  const f = {
    name: document.getElementById('b-name').value,
    phone: document.getElementById('b-phone').value,
    email: document.getElementById('b-email').value,
    service: document.getElementById('b-service').value,
    device: document.getElementById('b-device').value,
    date: document.getElementById('b-date').value,
    time: document.getElementById('b-time').value,
    desc: document.getElementById('b-desc').value,
    source: document.getElementById('b-source').value
  };
  const subject = `Repair Booking: ${f.service} — ${f.device}`;
  const body = `REPAIR BOOKING — MERO TECH STORE
======================================

Customer Name: ${f.name}
Phone: ${f.phone}
Email: ${f.email}

Service Requested: ${f.service}
Device / Brand: ${f.device}
Preferred Date: ${f.date}
Preferred Time Slot: ${f.time}

Problem Description:
${f.desc}

How They Found Us: ${f.source || 'Not specified'}

======================================
Please confirm this booking within 30 minutes.
Mero Tech Store CRM System`;
  window.location.href = `mailto:info@merotechstore.com.np?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  document.getElementById('success-modal').classList.add('show');
  document.getElementById('booking-form').reset();
}

function closeModal() {
  document.getElementById('success-modal').classList.remove('show');
  nav('home');
}

// ══════════════════════════════════════════
//  FILTERS
// ══════════════════════════════════════════
function filterProduct(btn, category, cat) {
  btn.closest('.filter-bar').querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const grid = document.getElementById('grid-' + category);
  if(!grid) return;
  grid.querySelectorAll('.product-card').forEach(card => {
    card.style.display = (cat==='all' || card.dataset.cat===cat) ? '' : 'none';
  });
}

function sortProducts(category, value) {
  const dataKey = {frames:'frames',gadgets:'gadgets',ups:'ups',pcb:'pcbComponents'}[category] || category;
  let products = [...(data[dataKey] || [])];
  if(value.includes('Low to High')) products.sort((a,b)=>a.price-b.price);
  else if(value.includes('High to Low')) products.sort((a,b)=>b.price-a.price);
  else if(value.includes('Newest')) products.reverse();
  renderGrid(category, products);
}

// ══════════════════════════════════════════
//  TOAST
// ══════════════════════════════════════════
function showToast(msg) {
  const toast = document.getElementById('toast');
  document.getElementById('toast-msg').textContent = msg;
  // Remove then re-add to re-trigger animation if already showing
  toast.classList.remove('show');
  void toast.offsetWidth; // reflow
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(12px) scale(.97)';
    toast.style.transition = 'opacity .35s cubic-bezier(.4,0,.2,1), transform .35s cubic-bezier(.4,0,.2,1)';
    setTimeout(() => {
      toast.classList.remove('show');
      toast.style.opacity = '';
      toast.style.transform = '';
      toast.style.transition = '';
    }, 360);
  }, 3000);
}

// ══════════════════════════════════════════
//  INIT
// ══════════════════════════════════════════
function init() {
  renderGrid('frames', data.frames);
  renderGrid('gadgets', data.gadgets);
  renderGrid('ups', data.ups);
  renderGrid('pcb', data.pcbComponents);

  const servicesList = document.getElementById('services-list');
  if(servicesList) servicesList.innerHTML = data.repairs.map(serviceCard).join('');

  renderTimeline();

  // Set min date for booking
  const dateInput = document.getElementById('b-date');
  if(dateInput) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate()+1);
    dateInput.min = tomorrow.toISOString().split('T')[0];
  }

  // Nav links from footer
  document.querySelectorAll('[onclick*="nav("]').forEach(el => {
    if(el.tagName==='SPAN' || el.tagName==='A') {
      const m = el.getAttribute('onclick').match(/nav\('(\w+)'\)/);
      if(m) el.style.cursor='pointer';
    }
  });
}

// ══════════════════════════════════════════
//  PRODUCT DETAIL PAGE
// ══════════════════════════════════════════

// Map category keys to display info
const catMeta = {
  frames:        { label:'Photo Frames',       page:'frames',  dataKey:'frames' },
  gadgets:       { label:'Gadget Accessories', page:'gadgets', dataKey:'gadgets' },
  ups:           { label:'Homemade Gadgets',   page:'ups',     dataKey:'ups' },
  pcbComponents: { label:'PCB Components',     page:'pcb',     dataKey:'pcbComponents' },
};

// Build extended spec rows from product data
function buildSpecs(p) {
  const rows = [];
  // Always include specs string split by commas
  if(p.specs) {
    p.specs.split(',').forEach(s => {
      const trimmed = s.trim();
      if(trimmed) {
        // try to split on first colon for key:val
        const colonIdx = trimmed.indexOf(':');
        if(colonIdx > 0 && colonIdx < 30) {
          rows.push({ k: trimmed.slice(0, colonIdx).trim(), v: trimmed.slice(colonIdx+1).trim() });
        } else {
          rows.push({ k: 'Feature', v: trimmed });
        }
      }
    });
  }
  // Add standard fields
  if(p.price)  rows.push({ k:'Price', v:`Rs. ${p.price.toLocaleString()}` });
  if(p.avail)  rows.push({ k:'Availability', v: p.avail==='in-stock'?'In Stock':p.avail==='low-stock'?'Low Stock':'Pre-Order' });
  if(p.rating) rows.push({ k:'Customer Rating', v:`${p.rating} / 5 (${p.rev} reviews)` });
  return rows;
}

// Generate gallery thumbs from the product's imgs[] array.
// Each product can have up to 4 separate images:
//   imgs: ['main.jpg', 'angle2.jpg', 'detail.jpg', 'side.jpg']
// If imgs[] is not set, falls back to the legacy single `img` field.
function buildThumbs(p) {
  const labels = ['Main', 'View 2', 'Detail', 'Side'];
  const thumbs = [];

  // Use the imgs array if provided
  const imgArr = Array.isArray(p.imgs) ? p.imgs : (p.img ? [p.img] : []);

  if(imgArr.length > 0) {
    imgArr.forEach((src, i) => {
      thumbs.push({ src: src || null, emoji: p.emoji, label: labels[i] || `View ${i+1}` });
    });
    // Fill remaining slots (up to 4) with emoji placeholders
    for(let i = imgArr.length; i < 4; i++) {
      thumbs.push({ src: null, emoji: p.emoji, label: labels[i] });
    }
  } else {
    // No images at all — show emoji placeholders
    thumbs.push({ src:null, emoji: p.emoji, label:'Main' });
    thumbs.push({ src:null, emoji: p.emoji, label:'Detail' });
  }
  return thumbs;
}

let currentPdpProduct = null;
let currentPdpQty = 1;
let currentPdpThumb = 0;
let currentPdpThumbs = [];

function openProduct(productId, catKey) {
  // Find product in data
  const allProds = [
    ...data.frames.map(p=>({...p,_cat:'frames'})),
    ...data.gadgets.map(p=>({...p,_cat:'gadgets'})),
    ...data.ups.map(p=>({...p,_cat:'ups'})),
    ...data.pcbComponents.map(p=>({...p,_cat:'pcbComponents'})),
  ];
  const p = allProds.find(x => x.id === productId);
  if(!p) return;

  currentPdpProduct = p;
  currentPdpQty = 1;
  const meta = catMeta[p._cat] || { label: 'Products', page: 'home', dataKey: p._cat };

  // Breadcrumb
  document.getElementById('pdp-bread-cat').textContent = meta.label;
  document.getElementById('pdp-bread-cat').onclick = () => nav(meta.page);
  document.getElementById('pdp-bread-name').textContent = p.name;

  // Category tag
  document.getElementById('pdp-cat-tag').textContent = meta.label;

  // Name
  document.getElementById('pdp-name').textContent = p.name;

  // Rating
  document.getElementById('pdp-stars').textContent = starsHtml(p.rating);
  document.getElementById('pdp-rev-count').textContent = `(${p.rev} reviews)`;
  document.getElementById('pdp-avail-tag').innerHTML = availBadge(p.avail);

  // Price
  const disc = p.oldPrice ? Math.round((1 - p.price/p.oldPrice)*100) : 0;
  const priceHtml = `
    <span class="pdp-price">Rs. ${p.price.toLocaleString()}</span>
    ${p.oldPrice ? `<span class="pdp-old-price">Rs. ${p.oldPrice.toLocaleString()}</span>` : ''}
    ${disc ? `<span class="pdp-discount-tag">−${disc}%</span>` : ''}
  `;
  document.getElementById('pdp-price-block').innerHTML = priceHtml;
  document.getElementById('pdp-price-block-2').innerHTML = priceHtml;

  // Description (generated from specs)
  document.getElementById('pdp-desc').textContent =
    `${p.name} — ${p.specs}. Available now at Mero Tech Store, Jhapa. Genuine product with 90-day warranty and free diagnostic service.`;

  // Spec rows
  const specs = buildSpecs(p);
  document.getElementById('pdp-specs-rows').innerHTML = specs.map(s =>
    `<div class="pdp-spec-row"><span class="pdp-spec-key">${s.k}</span><span class="pdp-spec-val">${s.v}</span></div>`
  ).join('');

  // Availability panel
  const availClass = p.avail==='in-stock'?'green':p.avail==='low-stock'?'yellow':'red';
  const availText  = p.avail==='in-stock'?'In Stock — Ready to ship':p.avail==='low-stock'?'Low Stock — Order soon':'Pre-Order';
  document.getElementById('pdp-avail-row').innerHTML = `
    <div class="pdp-avail-dot ${availClass}"></div>
    <span class="pdp-avail-text ${availClass}">${availText}</span>
  `;

  // Qty reset
  document.getElementById('pdp-qty').value = 1;
  currentPdpQty = 1;

  // Add to cart button state
  const addBtn = document.getElementById('pdp-add-btn');
  if(p.avail === 'out-stock') {
    addBtn.disabled = true; addBtn.style.opacity = '.5'; addBtn.textContent = 'Out of Stock';
  } else {
    addBtn.disabled = false; addBtn.style.opacity = '1'; addBtn.innerHTML = '🛒 Add to Cart';
  }

  // WhatsApp link
  const waMsg = encodeURIComponent(`Hi! I'm interested in:\n*${p.name}*\nPrice: Rs. ${p.price.toLocaleString()}\n\nPlease confirm availability.`);
  document.getElementById('pdp-wa-btn').href = `https://wa.me/9779744924667?text=${waMsg}`;

  // ── STICKY BAR: populate price, WA link, cart state ──
  const stickyBar = document.getElementById('pdp-sticky-bar');
  const stickyPriceEl = document.getElementById('pdp-sticky-price-val');
  const stickyCartBtn = document.getElementById('pdp-sticky-cart-btn');
  const stickyWaBtn   = document.getElementById('pdp-sticky-wa-btn');
  if(stickyPriceEl) stickyPriceEl.textContent = `Rs. ${p.price.toLocaleString()}`;
  if(stickyWaBtn)   stickyWaBtn.href = `https://wa.me/9779744924667?text=${waMsg}`;
  if(stickyCartBtn) {
    if(p.avail === 'out-stock') {
      stickyCartBtn.disabled = true; stickyCartBtn.style.opacity = '.5';
      stickyCartBtn.textContent = 'Out of Stock';
    } else {
      stickyCartBtn.disabled = false; stickyCartBtn.style.opacity = '1';
      stickyCartBtn.innerHTML = '🛒 Add to Cart';
    }
  }

  // Build gallery
  currentPdpThumbs = buildThumbs(p);
  currentPdpThumb = 0;
  renderGallery();

  // Related products (same category, exclude self)
  const siblings = allProds.filter(x => x._cat === p._cat && x.id !== p.id).slice(0, 4);
  document.getElementById('pdp-related-grid').innerHTML = siblings.map(productCard).join('');

  // Navigate to product page
  nav('product');

  // Show sticky bar on mobile once user scrolls past the in-page Add-to-Cart button
  if(stickyBar) {
    // Small delay so scroll listener is re-evaluated after page renders
    setTimeout(() => {
      function pdpScrollHandler() {
        const addBtn = document.getElementById('pdp-add-btn');
        const pageEl = document.getElementById('page-product');
        if(!pageEl || !pageEl.classList.contains('active')) { stickyBar.classList.remove('visible'); return; }
        if(!addBtn) { stickyBar.classList.add('visible'); return; }
        const rect = addBtn.getBoundingClientRect();
        // Show sticky bar when the real Add-to-Cart button has scrolled out of view
        if(rect.bottom < 0 || rect.top > window.innerHeight) {
          stickyBar.classList.add('visible');
        } else {
          stickyBar.classList.remove('visible');
        }
      }
      window.removeEventListener('scroll', window._pdpScrollHandler);
      window._pdpScrollHandler = pdpScrollHandler;
      window.addEventListener('scroll', pdpScrollHandler, { passive: true });
      pdpScrollHandler(); // run once immediately
    }, 100);
  }
}

function renderGallery() {
  const p = currentPdpProduct;
  const thumbsEl = document.getElementById('pdp-thumbs');
  const mainEl   = document.getElementById('pdp-main-img');
  const dotsEl   = document.getElementById('pdp-dots');

  // Thumbs
  thumbsEl.innerHTML = currentPdpThumbs.map((t, i) => {
    if(t.src) {
      return `<div class="pdp-thumb ${i===currentPdpThumb?'active':''}" onclick="selectThumb(${i})"><img src="${t.src}" alt="${t.label}"></div>`;
    }
    return `<div class="pdp-thumb ${i===currentPdpThumb?'active':''}" onclick="selectThumb(${i})" style="font-size:1.6rem;">${t.emoji}</div>`;
  }).join('');

  // Dot indicators (mobile)
  if(dotsEl) {
    dotsEl.innerHTML = currentPdpThumbs.map((_, i) =>
      `<div class="pdp-dot ${i===currentPdpThumb?'active':''}" onclick="event.stopPropagation();selectThumb(${i})"></div>`
    ).join('');
    dotsEl.style.display = currentPdpThumbs.length > 1 ? 'flex' : 'none';
  }

  // Main image — rebuild content, preserve dots and zoom-hint elements
  const active = currentPdpThumbs[currentPdpThumb];
  // Remove only media children (img/emoji), not dots/hint
  Array.from(mainEl.children).forEach(c => {
    if(!c.classList.contains('pdp-dots') && !c.classList.contains('pdp-img-zoom-hint')) c.remove();
  });
  if(active && active.src) {
    const img = document.createElement('img');
    img.src = active.src;
    img.alt = p.name;
    mainEl.insertBefore(img, mainEl.firstChild);
  } else {
    const em = document.createElement('div');
    em.className = 'pdp-main-emoji';
    em.textContent = p.emoji;
    mainEl.insertBefore(em, mainEl.firstChild);
  }
}

function selectThumb(idx) {
  currentPdpThumb = idx;
  renderGallery();
}

function changeQty(delta) {
  currentPdpQty = Math.max(1, Math.min(99, currentPdpQty + delta));
  document.getElementById('pdp-qty').value = currentPdpQty;
}

function pdpAddToCart() {
  if(!currentPdpProduct) return;
  const p = currentPdpProduct;
  const btn = document.getElementById('pdp-add-btn');
  for(let i=0; i<currentPdpQty; i++) {
    addToCart(p.id, p.name, p.price, p.emoji);
  }
  // Visual feedback on the PDP button
  if(btn) {
    const orig = btn.innerHTML;
    btn.innerHTML = '<svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M4 10l4 4 8-8" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg> Added to Cart';
    btn.style.background = 'var(--green)';
    btn.disabled = true;
    setTimeout(() => {
      btn.innerHTML = orig;
      btn.style.background = '';
      btn.disabled = false;
    }, 1400);
  }
}

function openLightbox() {
  const active = currentPdpThumbs[currentPdpThumb];
  if(active && active.src) {
    document.getElementById('pdp-lightbox-img').src = active.src;
    document.getElementById('pdp-lightbox').classList.add('show');
  }
}
function closeLightbox() {
  document.getElementById('pdp-lightbox').classList.remove('show');
}
document.addEventListener('keydown', e => { if(e.key==='Escape') closeLightbox(); });

function sharePdp(platform) {
  const p = currentPdpProduct;
  const text = `Check out ${p.name} at Mero Tech Store — Rs. ${p.price.toLocaleString()}`;
  if(platform==='fb') {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(text)}`, '_blank');
  } else if(platform==='wa') {
    window.open(`https://wa.me/?text=${encodeURIComponent(text + '\n' + window.location.href)}`, '_blank');
  } else if(platform==='copy') {
    navigator.clipboard.writeText(window.location.href).then(() => showToast('🔗 Link copied!'));
  }
}

document.addEventListener('DOMContentLoaded', init);

/* ── MOBILE BOTTOM NAV ── */
function mbnActive(el) {
  document.querySelectorAll('.mbn-item').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
}

// Sync cart badge on bottom nav
(function() {
  var origUpdateCart = window.updateCart;
  function syncMbnBadge() {
    var badge = document.getElementById('mbn-cart-badge');
    var mainCount = document.getElementById('cart-count');
    if (!badge || !mainCount) return;
    var n = parseInt(mainCount.textContent) || 0;
    badge.textContent = n;
    if (n > 0) { badge.classList.add('show'); }
    else { badge.classList.remove('show'); }
  }
  // Patch addToCart to also update mbn badge
  var origAddToCart = window.addToCart;
  if (origAddToCart) {
    window.addToCart = function() {
      origAddToCart.apply(this, arguments);
      setTimeout(syncMbnBadge, 50);
    };
  }
  document.addEventListener('DOMContentLoaded', syncMbnBadge);
})();

/* ── SWIPE GESTURE ON PDP GALLERY (mobile) ── */
(function() {
  var startX = 0, startY = 0;
  document.addEventListener('touchstart', function(e) {
    var el = e.target.closest('.pdp-main-img');
    if (!el) return;
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  }, { passive: true });

  document.addEventListener('touchend', function(e) {
    var el = e.target.closest('.pdp-main-img');
    if (!el) return;
    var dx = e.changedTouches[0].clientX - startX;
    var dy = e.changedTouches[0].clientY - startY;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      var total = currentPdpThumbs.length;
      if (total < 2) return;
      if (dx < 0) { currentPdpThumb = (currentPdpThumb + 1) % total; }
      else         { currentPdpThumb = (currentPdpThumb - 1 + total) % total; }
      renderGallery();
    }
  }, { passive: true });
})();

/* ── CLOSE MOBILE MENU WHEN TAPPING OVERLAY ── */
document.addEventListener('click', function(e) {
  var menu = document.getElementById('mobile-menu');
  var hamburger = document.getElementById('hamburger');
  if (menu && menu.classList.contains('open') &&
      !menu.contains(e.target) && !hamburger.contains(e.target)) {
    closeMenu();
  }
});


/* ── LOGO THEME SWAP ── */
function applyLogoTheme(theme) {
  var logos = document.querySelectorAll('.nav-logo-img, .footer-logo-img, .loader-logo-img');
  logos.forEach(function(img) {
    var lightSrc = img.getAttribute('data-light-src');
    var darkSrc  = img.getAttribute('data-dark-src') || img.src;
    if (!img.getAttribute('data-dark-src')) {
      img.setAttribute('data-dark-src', img.src);
    }
    img.src = theme === 'light' ? lightSrc : img.getAttribute('data-dark-src');
  });
}

document.addEventListener('DOMContentLoaded', function() {
  var theme = document.documentElement.getAttribute('data-theme') || 'light';
  applyLogoTheme(theme);
});

/* ── THEME MANAGER ── */
(function(){
  var STORAGE_KEY = 'merotech-theme';
  var savedTheme = localStorage.getItem(STORAGE_KEY) || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);

  window.toggleTheme = function() {
    var current = document.documentElement.getAttribute('data-theme') || 'light';
    var next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem(STORAGE_KEY, next);
    applyLogoTheme(next);
  };
})();


(function(){
  var loader = document.getElementById('page-loader');
  function hideLoader() {
    loader.classList.add('fade-out');
    setTimeout(function(){ loader.style.display='none'; }, 650);
  }
  if(document.readyState === 'complete') {
    setTimeout(hideLoader, 2200);
  } else {
    window.addEventListener('load', function(){
      setTimeout(hideLoader, 2200);
    });
  }
})();

/* ── SCROLL REVEAL OBSERVER ── */
(function() {
  var els = document.querySelectorAll('[data-reveal]');
  if (!els.length) return;
  var io = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });
  els.forEach(function(el) { io.observe(el); });
})();
