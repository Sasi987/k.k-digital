const toDataUri = (svg) => `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;

const makeProductArt = ({ title, accentA, accentB, productType = 'mug' }) => {
  const shapes = {
    mug: `
      <g transform="translate(240 190)">
        <ellipse cx="360" cy="650" rx="260" ry="66" fill="rgba(7,20,38,0.16)"/>
        <rect x="180" y="130" width="360" height="430" rx="68" fill="url(#productBody)" stroke="rgba(255,255,255,0.5)"/>
        <rect x="220" y="80" width="280" height="90" rx="32" fill="rgba(255,255,255,0.18)"/>
        <path d="M560 220 C620 220,660 250,660 310 L660 400 C660 460,620 500,560 500" stroke="rgba(255,255,255,0.9)" stroke-width="26" fill="none"/>
        <rect x="260" y="185" width="220" height="255" rx="26" fill="rgba(255,255,255,0.10)"/>
        <rect x="285" y="216" width="170" height="185" rx="20" fill="rgba(95,72,47,0.64)" stroke="rgba(255,255,255,0.2)"/>
        <path d="M320 246 L420 246 L438 390 L306 390 Z" fill="rgba(255,255,255,0.26)"/>
        <circle cx="355" cy="298" r="52" fill="rgba(255,255,255,0.3)"/>
        <circle cx="350" cy="294" r="26" fill="rgba(255,255,255,0.45)"/>
        <rect x="234" y="550" width="296" height="28" rx="14" fill="rgba(255,255,255,0.2)"/>
      </g>
    `,
    cushion: `
      <g transform="translate(180 150)">
        <ellipse cx="420" cy="710" rx="290" ry="72" fill="rgba(7,20,38,0.15)"/>
        <rect x="170" y="120" width="500" height="500" rx="46" fill="url(#productBody)" stroke="rgba(255,255,255,0.45)"/>
        <rect x="232" y="180" width="370" height="370" rx="28" fill="rgba(255,255,255,0.22)"/>
        <path d="M278 420 C340 312, 432 288, 510 330 C566 360, 610 420, 602 490 C540 520, 470 530, 410 520 C332 508, 296 476, 278 420 Z" fill="rgba(255,255,255,0.26)"/>
        <circle cx="430" cy="312" r="92" fill="rgba(255,255,255,0.28)"/>
        <rect x="248" y="190" width="220" height="30" rx="12" fill="rgba(255,255,255,0.15)"/>
        <rect x="434" y="190" width="144" height="30" rx="12" fill="rgba(255,255,255,0.15)"/>
      </g>
    `,
    keychain: `
      <g transform="translate(150 180)">
        <ellipse cx="450" cy="660" rx="260" ry="60" fill="rgba(7,20,38,0.12)"/>
        <circle cx="420" cy="360" r="185" fill="url(#productBody)" stroke="rgba(255,255,255,0.46)"/>
        <circle cx="420" cy="360" r="120" fill="rgba(255,255,255,0.22)"/>
        <rect x="360" y="420" width="120" height="180" rx="26" fill="rgba(240,200,118,0.55)"/>
        <circle cx="420" cy="185" r="72" fill="rgba(255,255,255,0.18)"/>
        <circle cx="420" cy="185" r="42" fill="rgba(255,255,255,0.32)"/>
        <path d="M450 495 C520 505, 590 560, 620 630" stroke="rgba(255,255,255,0.7)" stroke-width="20" fill="none"/>
      </g>
    `,
    lamp: `
      <g transform="translate(205 120)">
        <ellipse cx="400" cy="700" rx="245" ry="62" fill="rgba(7,20,38,0.12)"/>
        <rect x="330" y="160" width="150" height="360" rx="40" fill="url(#productBody)" stroke="rgba(255,255,255,0.45)"/>
        <rect x="285" y="170" width="240" height="180" rx="24" fill="rgba(255,255,255,0.16)"/>
        <circle cx="405" cy="260" r="94" fill="rgba(255,255,255,0.26)"/>
        <circle cx="405" cy="260" r="54" fill="rgba(255,207,117,0.7)"/>
        <path d="M365 530 L445 530 L520 670 L285 670 Z" fill="rgba(237,187,110,0.42)"/>
        <rect x="375" y="670" width="70" height="80" rx="18" fill="rgba(255,255,255,0.25)"/>
      </g>
    `,
    frame: `
      <g transform="translate(150 110)">
        <ellipse cx="450" cy="710" rx="300" ry="68" fill="rgba(7,20,38,0.15)"/>
        <rect x="230" y="120" width="440" height="500" rx="24" fill="url(#productBody)" stroke="rgba(255,255,255,0.38)"/>
        <rect x="270" y="155" width="360" height="430" rx="14" fill="rgba(255,255,255,0.14)"/>
        <rect x="308" y="190" width="284" height="355" rx="8" fill="rgba(245, 238, 225, 0.82)"/>
        <rect x="325" y="210" width="250" height="315" rx="6" fill="rgba(122,101,76,0.65)"/>
        <circle cx="450" cy="325" r="80" fill="rgba(255,255,255,0.42)"/>
      </g>
    `,
    plaque: `
      <g transform="translate(200 180)">
        <ellipse cx="400" cy="660" rx="260" ry="60" fill="rgba(7,20,38,0.14)"/>
        <rect x="195" y="150" width="410" height="370" rx="32" fill="url(#productBody)" stroke="rgba(255,255,255,0.38)"/>
        <path d="M255 385 L330 315 L405 385 L476 315 L545 385" stroke="rgba(255,255,255,0.58)" stroke-width="12" fill="none"/>
        <text x="400" y="290" text-anchor="middle" font-size="72" font-family="Georgia, serif" fill="rgba(255,255,255,0.92)" letter-spacing="8">A &amp; R</text>
        <text x="400" y="470" text-anchor="middle" font-size="36" font-family="Arial, sans-serif" fill="rgba(255,255,255,0.8)" letter-spacing="7">Forever</text>
      </g>
    `,
    bottle: `
      <g transform="translate(260 150)">
        <ellipse cx="280" cy="700" rx="180" ry="46" fill="rgba(7,20,38,0.12)"/>
        <rect x="175" y="140" width="210" height="420" rx="62" fill="url(#productBody)" stroke="rgba(255,255,255,0.5)"/>
        <rect x="225" y="80" width="110" height="94" rx="20" fill="rgba(255,255,255,0.18)"/>
        <rect x="210" y="210" width="140" height="220" rx="18" fill="rgba(255,255,255,0.16)"/>
        <rect x="228" y="228" width="104" height="184" rx="12" fill="rgba(255,255,255,0.28)"/>
        <path d="M226 295 L332 295" stroke="rgba(255,255,255,0.42)" stroke-width="8"/>
      </g>
    `,
    tshirt: `
      <g transform="translate(170 150)">
        <ellipse cx="430" cy="720" rx="260" ry="60" fill="rgba(7,20,38,0.13)"/>
        <path d="M220 180 L290 120 L390 150 L430 120 L470 150 L560 120 L630 180 L610 600 L250 600 Z" fill="url(#productBody)" stroke="rgba(255,255,255,0.45)"/>
        <path d="M310 200 L430 255 L550 200" stroke="rgba(255,255,255,0.48)" stroke-width="10" fill="none"/>
        <rect x="322" y="280" width="218" height="200" rx="18" fill="rgba(255,255,255,0.14)"/>
        <circle cx="430" cy="358" r="70" fill="rgba(255,255,255,0.24)"/>
      </g>
    `,
    clock: `
      <g transform="translate(180 120)">
        <ellipse cx="430" cy="700" rx="280" ry="66" fill="rgba(7,20,38,0.15)"/>
        <circle cx="430" cy="370" r="210" fill="url(#productBody)" stroke="rgba(255,255,255,0.4)"/>
        <circle cx="430" cy="370" r="148" fill="rgba(255,255,255,0.16)"/>
        <circle cx="430" cy="370" r="96" fill="rgba(255,255,255,0.22)"/>
        <path d="M430 370 L430 250" stroke="rgba(255,255,255,0.85)" stroke-width="12" stroke-linecap="round"/>
        <path d="M430 370 L500 430" stroke="rgba(255,255,255,0.68)" stroke-width="10" stroke-linecap="round"/>
        <circle cx="430" cy="370" r="18" fill="rgba(255,255,255,0.72)"/>
      </g>
    `,
    album: `
      <g transform="translate(210 140)">
        <ellipse cx="390" cy="700" rx="240" ry="60" fill="rgba(7,20,38,0.14)"/>
        <rect x="190" y="130" width="400" height="470" rx="28" fill="url(#productBody)" stroke="rgba(255,255,255,0.42)"/>
        <rect x="235" y="175" width="310" height="350" rx="18" fill="rgba(255,255,255,0.15)"/>
        <rect x="270" y="210" width="240" height="180" rx="12" fill="rgba(255,255,255,0.3)"/>
        <path d="M292 412 C350 335, 425 332, 480 400" fill="none" stroke="rgba(255,255,255,0.7)" stroke-width="16"/>
      </g>
    `,
    giftbox: `
      <g transform="translate(180 150)">
        <ellipse cx="430" cy="700" rx="285" ry="64" fill="rgba(7,20,38,0.14)"/>
        <rect x="180" y="220" width="500" height="360" rx="38" fill="url(#productBody)" stroke="rgba(255,255,255,0.4)"/>
        <rect x="285" y="150" width="290" height="120" rx="24" fill="rgba(255,255,255,0.18)"/>
        <rect x="405" y="180" width="40" height="420" fill="rgba(255,255,255,0.28)"/>
        <rect x="180" y="390" width="500" height="30" fill="rgba(255,255,255,0.22)"/>
        <circle cx="315" cy="450" r="52" fill="rgba(255,255,255,0.18)"/>
        <circle cx="520" cy="450" r="52" fill="rgba(255,255,255,0.18)"/>
      </g>
    `,
    mobilecover: `
      <g transform="translate(220 180)">
        <ellipse cx="360" cy="650" rx="220" ry="58" fill="rgba(7,20,38,0.12)"/>
        <rect x="140" y="120" width="440" height="500" rx="54" fill="url(#productBody)" stroke="rgba(255,255,255,0.5)"/>
        <rect x="205" y="180" width="310" height="390" rx="36" fill="rgba(255,255,255,0.16)"/>
        <circle cx="360" cy="330" r="88" fill="rgba(255,255,255,0.28)"/>
        <path d="M276 450 C330 390, 390 390, 440 450" fill="none" stroke="rgba(255,255,255,0.7)" stroke-width="12"/>
      </g>
    `,
    wineglass: `
      <g transform="translate(240 120)">
        <ellipse cx="300" cy="700" rx="190" ry="54" fill="rgba(7,20,38,0.12)"/>
        <path d="M260 170 L330 170 L375 530 C378 575, 351 622, 300 650 C249 622, 222 575, 225 530 Z" fill="url(#productBody)" stroke="rgba(255,255,255,0.46)"/>
        <path d="M250 220 L340 220" stroke="rgba(255,255,255,0.22)" stroke-width="10"/>
        <path d="M270 300 L320 300" stroke="rgba(255,255,255,0.32)" stroke-width="10"/>
        <path d="M300 150 L300 90" stroke="rgba(255,255,255,0.8)" stroke-width="16"/>
        <path d="M260 92 L340 92" stroke="rgba(255,255,255,0.8)" stroke-width="18"/>
      </g>
    `,
    trophy: `
      <g transform="translate(170 120)">
        <ellipse cx="430" cy="700" rx="260" ry="58" fill="rgba(7,20,38,0.15)"/>
        <path d="M310 150 L550 150 L520 500 L340 500 Z" fill="url(#productBody)" stroke="rgba(255,255,255,0.4)"/>
        <rect x="350" y="80" width="160" height="90" rx="18" fill="rgba(255,255,255,0.2)"/>
        <path d="M330 510 H530 L575 620 H285 Z" fill="rgba(255,255,255,0.18)"/>
        <circle cx="430" cy="270" r="76" fill="rgba(255,255,255,0.22)"/>
        <rect x="390" y="220" width="80" height="120" rx="18" fill="rgba(255,255,255,0.2)"/>
      </g>
    `,
    collage: `
      <g transform="translate(150 150)">
        <ellipse cx="450" cy="700" rx="330" ry="70" fill="rgba(7,20,38,0.12)"/>
        <rect x="180" y="150" width="540" height="460" rx="22" fill="url(#productBody)" stroke="rgba(255,255,255,0.38)"/>
        <rect x="220" y="190" width="180" height="160" rx="12" fill="rgba(255,255,255,0.22)"/>
        <rect x="420" y="190" width="260" height="150" rx="12" fill="rgba(255,255,255,0.18)"/>
        <rect x="240" y="380" width="245" height="180" rx="12" fill="rgba(255,255,255,0.16)"/>
        <rect x="500" y="370" width="170" height="190" rx="12" fill="rgba(255,255,255,0.12)"/>
        <circle cx="290" cy="250" r="62" fill="rgba(255,255,255,0.28)"/>
      </g>
    `,
  };

  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1200">
    <defs>
      <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stop-color="#fbf7f2" />
        <stop offset="100%" stop-color="#e9e0d3" />
      </linearGradient>
      <linearGradient id="productBody" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stop-color="${accentA}" />
        <stop offset="100%" stop-color="${accentB}" />
      </linearGradient>
      <filter id="softShadow" x="-20%" y="-20%" width="140%" height="160%">
        <feDropShadow dx="0" dy="28" stdDeviation="30" flood-color="rgba(6, 15, 26, 0.18)" />
      </filter>
    </defs>
    <rect width="1200" height="1200" fill="url(#bg)"/>
    <circle cx="940" cy="190" r="220" fill="rgba(200,169,106,0.12)"/>
    <circle cx="290" cy="960" r="260" fill="rgba(14,33,56,0.08)"/>
    <g filter="url(#softShadow)">
      ${shapes[productType] || shapes.mug}
    </g>
    <text x="600" y="1030" text-anchor="middle" font-size="58" letter-spacing="8" font-family="Arial, sans-serif" fill="rgba(14,33,56,0.84)">${title}</text>
  </svg>
  `;

  return toDataUri(svg);
};

export const CUSTOMIZED_PRODUCTS = [
  {
    id: 'customized-photo-mug',
    name: 'Customized Photo Mug',
    category: 'Drinkware',
    description: 'A premium ceramic mug featuring your favourite portrait and a warm luxury finish.',
    price: 799,
    badge: 'Customizable',
    customizable: ['Photo', 'Name', 'Message'],
    image: makeProductArt({ title: 'PHOTO MUG', accentA: '#f4efe8', accentB: '#a67956', productType: 'mug' }),
    aiPrompt: 'Show one premium white ceramic coffee mug with a personalized family/photo print area, realistic ceramic texture, subtle glossy reflection, studio lighting, luxury ecommerce photography.'
  },
  {
    id: 'customized-cushion',
    name: 'Customized Cushion',
    category: 'Home',
    description: 'A soft memory cushion with a custom photograph and elegant layered styling.',
    price: 999,
    badge: 'Popular',
    customizable: ['Photo', 'Text', 'Date'],
    image: makeProductArt({ title: 'CUSHION', accentA: '#e9dbca', accentB: '#8d6d56', productType: 'cushion' }),
    aiPrompt: 'Show one premium soft square cushion with a realistic personalized photograph printed on the front, detailed fabric texture, elegant studio composition.'
  },
  {
    id: 'personalized-keychain',
    name: 'Personalized Keychain',
    category: 'Accessories',
    description: 'A refined keepsake keychain with a custom photo and premium finish.',
    price: 499,
    badge: 'Customizable',
    customizable: ['Photo', 'Name'],
    image: makeProductArt({ title: 'KEYCHAIN', accentA: '#dfe2e6', accentB: '#6d7784', productType: 'keychain' }),
    aiPrompt: 'Show one premium personalized photo keychain, realistic metal/acrylic material, engraved or printed personalization area, luxury product photography.'
  },
  {
    id: 'personalized-led-photo-lamp',
    name: 'Personalized LED Photo Lamp',
    category: 'Lighting',
    description: 'A warm glow lamp built around your memory and a soft premium illumination.',
    price: 1599,
    badge: 'Bestseller',
    customizable: ['Photo', 'Name', 'Message'],
    image: makeProductArt({ title: 'PHOTO LAMP', accentA: '#d7c5a8', accentB: '#5a4738', productType: 'lamp' }),
    aiPrompt: 'Show one premium personalized LED photo lamp displaying a tasteful family photograph, realistic acrylic material, soft warm illumination, dark luxury studio environment.'
  },
  {
    id: 'customized-photo-frame',
    name: 'Customized Photo Frame',
    category: 'Frames',
    description: 'A luxury framed portrait crafted to showcase your favorite memories beautifully.',
    price: 1299,
    badge: 'Customizable',
    customizable: ['Photo', 'Text'],
    image: makeProductArt({ title: 'PHOTO FRAME', accentA: '#d8b88c', accentB: '#514636', productType: 'frame' }),
    aiPrompt: 'Show one premium personalized photo frame with elegant wood/acrylic construction, realistic glass reflection, professionally printed photograph, luxury studio styling.'
  },
  {
    id: 'personalized-name-plaque',
    name: 'Personalized Name Plaque',
    category: 'Decor',
    description: 'A polished wall plaque with graceful lettering, names and heartwarming personalization.',
    price: 899,
    badge: 'Customizable',
    customizable: ['Name', 'Message'],
    image: makeProductArt({ title: 'NAME PLAQUE', accentA: '#d9c9b1', accentB: '#6e5648', productType: 'plaque' }),
    aiPrompt: 'Show one premium customized name plaque with elegant personalized lettering, realistic wood/acrylic material, premium wall-display style, clean studio background.'
  },
  {
    id: 'customized-bottle',
    name: 'Customized Bottle',
    category: 'Drinkware',
    description: 'A sleek personalised bottle designed for daily use with your photograph or name.',
    price: 899,
    badge: 'Customizable',
    customizable: ['Photo', 'Name'],
    image: makeProductArt({ title: 'BOTTLE', accentA: '#c9d8d9', accentB: '#4d6a7e', productType: 'bottle' }),
    aiPrompt: 'Show one premium personalized reusable bottle with a custom photograph/name design, realistic metallic or premium plastic material, professional ecommerce lighting.'
  },
  {
    id: 'personalized-t-shirt',
    name: 'Personalized T-Shirt',
    category: 'Wearables',
    description: 'A premium tee with your own design, message, or memory-backed printed art.',
    price: 1199,
    badge: 'Customizable',
    customizable: ['Design', 'Name', 'Message'],
    image: makeProductArt({ title: 'T-SHIRT', accentA: '#eef0f5', accentB: '#7c899e', productType: 'tshirt' }),
    aiPrompt: 'Show one premium folded or displayed personalized T-shirt with a realistic custom photo/design print, detailed cotton texture, professional fashion ecommerce photography.'
  },
  {
    id: 'customized-photo-clock',
    name: 'Customized Photo Clock',
    category: 'Home',
    description: 'An elegant display clock that turns your favorite photograph into a keepsake.',
    price: 1499,
    badge: 'Popular',
    customizable: ['Photo', 'Name'],
    image: makeProductArt({ title: 'PHOTO CLOCK', accentA: '#efe5d5', accentB: '#6e4d35', productType: 'clock' }),
    aiPrompt: 'Show one premium personalized wall clock containing a family photograph, realistic clock hands and glass surface, premium studio lighting.'
  },
  {
    id: 'personalized-water-bottle',
    name: 'Personalized Water Bottle',
    category: 'Drinkware',
    description: 'A luxury daily-use water bottle with a custom name and memory-inspired print.',
    price: 799,
    badge: 'Customizable',
    customizable: ['Name', 'Photo'],
    image: makeProductArt({ title: 'WATER BOTTLE', accentA: '#dfe7ea', accentB: '#5a7280', productType: 'bottle' }),
    aiPrompt: 'Show one premium personalized water bottle with custom name/photo print, realistic bottle material, clean luxury ecommerce composition.'
  },
  {
    id: 'customized-photo-album',
    name: 'Customized Photo Album',
    category: 'Keepsakes',
    description: 'A premium photo album handcrafted for your family stories and milestones.',
    price: 1399,
    badge: 'Classic',
    customizable: ['Photos', 'Cover Text'],
    image: makeProductArt({ title: 'PHOTO ALBUM', accentA: '#e5d5c7', accentB: '#876b55', productType: 'album' }),
    aiPrompt: 'Show one premium hardcover personalized photo album, elegant cover photograph, realistic paper and leather/fabric texture, luxury editorial product photography.'
  },
  {
    id: 'personalized-gift-box',
    name: 'Personalized Gift Box',
    category: 'Gift Sets',
    description: 'An elegant gift box with premium packaging designed for memorable gifting moments.',
    price: 1699,
    badge: 'Luxury',
    customizable: ['Message', 'Name'],
    image: makeProductArt({ title: 'GIFT BOX', accentA: '#f2e3be', accentB: '#a8774c', productType: 'giftbox' }),
    aiPrompt: 'Show one premium personalized gift box containing tasteful customized gifts, elegant packaging, warm ivory and champagne accents, luxury commercial photography.'
  },
  {
    id: 'customized-mobile-cover',
    name: 'Customized Mobile Cover',
    category: 'Tech',
    description: 'A premium phone cover featuring your portrait, favorite quote, or cherished memory.',
    price: 699,
    badge: 'Customizable',
    customizable: ['Photo', 'Name'],
    image: makeProductArt({ title: 'MOBILE COVER', accentA: '#dfe4ee', accentB: '#686f7d', productType: 'mobilecover' }),
    aiPrompt: 'Show one premium smartphone case with a personalized photograph printed on the back, realistic phone-case material, studio product photography.'
  },
  {
    id: 'personalized-wine-glass',
    name: 'Personalized Wine Glass',
    category: 'Drinkware',
    description: 'A refined glass designed with custom engraving, perfect for romantic evenings.'
    ,
    price: 999,
    badge: 'Elevated',
    customizable: ['Name', 'Text'],
    image: makeProductArt({ title: 'WINE GLASS', accentA: '#eff0f1', accentB: '#7f8c91', productType: 'wineglass' }),
    aiPrompt: 'Show one premium personalized glass with elegant customized engraving, realistic glass reflections, sophisticated luxury studio setup.'
  },
  {
    id: 'customized-trophy',
    name: 'Customized Trophy',
    category: 'Awards',
    description: 'A premium recognition trophy with personalized text, names and a statement finish.',
    price: 1799,
    badge: 'Award',
    customizable: ['Name', 'Title', 'Year'],
    image: makeProductArt({ title: 'TROPHY', accentA: '#e6d3a3', accentB: '#8a6a2d', productType: 'trophy' }),
    aiPrompt: 'Show one premium customized trophy with personalized name/text plate, realistic metallic finish, dramatic but clean studio lighting.'
  },
  {
    id: 'personalized-wall-collage',
    name: 'Personalized Wall Collage',
    category: 'Decor',
    description: 'A curated gallery-style wall collage capturing your most meaningful memories.',
    price: 1999,
    badge: 'Featured',
    customizable: ['Photos', 'Title'],
    image: makeProductArt({ title: 'WALL COLLAGE', accentA: '#d9d2c6', accentB: '#6d574e', productType: 'collage' }),
    aiPrompt: 'Show one premium multi-photo wall collage arrangement with realistic printed photographs, elegant frame materials, luxury interior presentation.'
  }
];

export const CUSTOMIZED_PRODUCT_CATEGORIES = ['All', ...new Set(CUSTOMIZED_PRODUCTS.map((product) => product.category))];

export const getCustomizedProductById = (productId) => CUSTOMIZED_PRODUCTS.find((product) => product.id === productId) || null;
