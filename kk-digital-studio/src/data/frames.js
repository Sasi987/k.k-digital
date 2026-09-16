// src/data/frames.js
// Premium personalized-gift / photo-frame catalog
// Uses the supplied local product images from src/assets/frames/.

const localImage = (filename) =>
  new URL(`../assets/frames/${filename}`, import.meta.url).href;

export const FRAME_SIZES = [
  { id: '8x10', label: '8" × 10"', multiplier: 1 },
  { id: '12x16', label: '12" × 16"', multiplier: 1.6 },
  { id: '16x20', label: '16" × 20"', multiplier: 2.3 },
  { id: '20x30', label: '20" × 30"', multiplier: 3.4 },
];

export const FRAME_MATERIALS = [
  { id: 'classic-wood', label: 'Classic Wood', add: 0 },
  { id: 'premium-oak', label: 'Premium Oak', add: 450 },
  { id: 'acrylic', label: 'Crystal Acrylic', add: 650 },
  { id: 'metal', label: 'Brushed Metal', add: 800 },
];

export const FRAME_COLORS = [
  { id: 'walnut', label: 'Walnut Brown', hex: '#5b4232' },
  { id: 'ebony', label: 'Ebony Black', hex: '#1a1a1c' },
  { id: 'gold', label: 'Champagne Gold', hex: '#c8a96a' },
  { id: 'white', label: 'Ivory White', hex: '#efe7da' },
];

export const FRAME_IMAGE_MAP = {
  'personalized-name-plaque': {
    filename: 'images (41).jpg',
    title: 'Personalized Name Heart Plaque',
    visual: 'Slim rectangular wooden plaque with two engraved-style names and heart motifs.',
    use: 'Couples, anniversary gifts, wedding keepsakes, bedroom or desk decor.',
    finish: 'Natural light wood / warm blush-brown tone',
  },
  'photo-cushion': {
    filename: 'images (40).jpg',
    title: 'Personalized Couple Photo Cushion',
    visual: 'White square cushion with a warm tan photo panel, decorative border and personalized names/date.',
    use: 'Anniversary, wedding, engagement, couple and family gifting.',
    finish: 'Soft white textile with printed personalized artwork',
  },
  'personalized-wine-glasses': {
    filename: 'images (39).jpg',
    title: 'Personalized Black Couple Wine Glass Set',
    visual: 'Two matte-black stemmed wine glasses with contrasting personalized names.',
    use: 'Wedding, engagement, anniversary and romantic celebration gifts.',
    finish: 'Matte black with premium gold-look personalization',
  },
  'photo-round-plate': {
    filename: 'images (38).jpg',
    title: 'Personalized Photo Round Plate',
    visual: 'White circular display plate featuring a centered portrait/photo composition.',
    use: 'Birthday, family, couple, celebration and personalized home decor.',
    finish: 'White ceramic-style presentation with printed photo insert',
  },
  'achievement-trophy': {
    filename: 'images (37).jpg',
    title: 'Premium Achievement Trophy',
    visual: 'Tall gold-tone trophy with faceted top, decorative body and personalized maroon base plate.',
    use: 'Awards, employee recognition, school, sports and achievement ceremonies.',
    finish: 'Gold-tone trophy with engraved/printed recognition plate',
  },
  'mini-photo-album': {
    filename: 'images (36).jpg',
    title: 'Mini Personalized Photo Album',
    visual: 'Compact handmade-style photo album held in hand, showing a personalized message page and portrait page.',
    use: 'Best-friend gifts, couple memories, birthdays and pocket keepsakes.',
    finish: 'Compact album with printed photo and message pages',
  },
  'premium-wallet-gift-set': {
    filename: 'images (35).jpg',
    title: 'Personalized Premium Wallet Gift Set',
    visual: 'Gift-box assortment containing wallets and matching accessories with personalized metallic details.',
    use: 'Birthday, anniversary, corporate and men’s premium gifting.',
    finish: 'Leather-look accessories with metallic personalization',
  },
  'personalized-tumbler-set': {
    filename: 'images (34).jpg',
    title: 'Personalized Insulated Tumbler',
    visual: 'Collection of tall handled tumblers in multiple colors with individual names.',
    use: 'Daily-use gifts, birthdays, office gifts, couples and personalized gifting.',
    finish: 'Gloss / satin colored insulated tumbler body with name print',
  },
  'led-photo-lamp': {
    filename: 'images (33).jpg',
    title: 'Personalized LED Photo Lamp',
    visual: 'Cylindrical illuminated lamp with a personalized photo panel and touch-control presentation.',
    use: 'Couple gifts, birthdays, bedside decor, anniversary and romantic gifting.',
    finish: 'Warm wood-tone body with programmable LED illumination',
  },
  'personalized-baby-bag': {
    filename: 'images (32).jpg',
    title: 'Personalized Baby Carry Bag',
    visual: 'Quilted baby bag with colorful animal print, carry handle, side construction and large personalized name patch.',
    use: 'Newborn gifting, baby showers, naming ceremonies and parents.',
    finish: 'Quilted fabric with colorful printed pattern and name patch',
  },
  'photo-collage-wall-frame': {
    filename: 'images (31).jpg',
    title: 'Premium Multi-Photo Collage Frame',
    visual: 'Large black rectangular wall frame displaying a curated multi-photo collage.',
    use: 'Family walls, wedding memories, birthdays, portraits and home interiors.',
    finish: 'Black frame with printed multi-photo collage artwork',
  },
  'personalized-pen-stand': {
    filename: 'images (30).jpg',
    title: 'Personalized Pen Stand',
    visual: 'Minimal black pen mounted on a round personalized base with a clean presentation.',
    use: 'Corporate gifts, office desks, teachers, professionals and custom branding.',
    finish: 'Black pen and base with white personalization',
  },
  'photo-collage-mug': {
    filename: 'images (29).jpg',
    title: 'Personalized Photo Collage Mug',
    visual: 'White mug with a red handle, personalized portrait and circular multi-photo collage composition.',
    use: 'Birthday, couple, friendship, family and memory gifts.',
    finish: 'White ceramic-style mug with printed photo collage',
  },
  'personalized-photo-bottle': {
    filename: 'images (28).jpg',
    title: 'Personalized Photo Bottle',
    visual: 'Decorative bottle illuminated by warm bokeh lights, featuring a custom photo label.',
    use: 'Anniversary, couple, wedding, romantic and celebration gifts.',
    finish: 'Decorative bottle with personalized photo label and ambient lighting',
  },
  'cool-boss-acrylic-stand': {
    filename: 'images (27).jpg',
    title: 'Cool Boss Personalized Acrylic Stand',
    visual: 'Cartoon-style professional character mounted above a personalized “#CoolBoss” desk base.',
    use: 'Boss gifts, farewell gifts, office celebrations and corporate occasions.',
    finish: 'Printed character topper with personalized desk plaque',
  },
};

export const FRAMES = [
  {
    id: 'personalized-name-plaque',
    name: 'Personalized Name Heart Plaque',
    category: 'personalized',
    productType: 'Wooden Personalized Decor',
    basePrice: 799,
    description:
      'A charming personalized name plaque with heart detailing, designed as a compact romantic keepsake for couples and special occasions.',
    shortDescription: 'Personalized wooden name plaque with heart details.',
    occasion: ['Anniversary', 'Wedding', 'Engagement', 'Couples'],
    tags: ['name plaque', 'couple gift', 'wooden gift', 'anniversary'],
    materialOptions: ['classic-wood'],
    featured: true,
    bestseller: true,
    customizable: ['Names', 'Heart layout', 'Message'],
    image: localImage('images (41).jpg'),
    images: [localImage('images (41).jpg')],
    imageDetails: FRAME_IMAGE_MAP['personalized-name-plaque'],
  },
  {
    id: 'photo-cushion',
    name: 'Personalized Couple Photo Cushion',
    category: 'photo-gifts',
    productType: 'Personalized Cushion',
    basePrice: 999,
    description:
      'A soft personalized cushion featuring a couple photo, decorative artwork and custom names or dates.',
    shortDescription: 'Photo cushion with custom names and memory artwork.',
    occasion: ['Anniversary', 'Wedding', 'Birthday', 'Couple'],
    tags: ['cushion', 'photo gift', 'couple', 'personalized'],
    materialOptions: ['classic-wood'],
    featured: true,
    bestseller: true,
    customizable: ['Photo', 'Names', 'Date', 'Message'],
    image: localImage('images (40).jpg'),
    images: [localImage('images (40).jpg')],
    imageDetails: FRAME_IMAGE_MAP['photo-cushion'],
  },
  {
    id: 'personalized-wine-glasses',
    name: 'Personalized Black Couple Wine Glass Set',
    category: 'drinkware',
    productType: 'Personalized Glassware',
    basePrice: 1299,
    description:
      'A coordinated pair of matte-black stemmed glasses personalized with names, ideal for romantic celebrations.',
    shortDescription: 'Elegant personalized black wine-glass pair.',
    occasion: ['Wedding', 'Engagement', 'Anniversary', 'Couples'],
    tags: ['wine glass', 'couple gift', 'glassware', 'names'],
    materialOptions: ['metal'],
    featured: true,
    customizable: ['Names', 'Text'],
    image: localImage('images (39).jpg'),
    images: [localImage('images (39).jpg')],
    imageDetails: FRAME_IMAGE_MAP['personalized-wine-glasses'],
  },
  {
    id: 'photo-round-plate',
    name: 'Personalized Photo Round Plate',
    category: 'photo-gifts',
    productType: 'Photo Display Plate',
    basePrice: 899,
    description:
      'A circular photo display designed to turn a favorite portrait into an elegant tabletop memory piece.',
    shortDescription: 'Round photo display plate for portraits and memories.',
    occasion: ['Birthday', 'Family', 'Couple', 'Celebration'],
    tags: ['photo plate', 'round frame', 'portrait gift', 'home decor'],
    materialOptions: ['classic-wood', 'acrylic'],
    customizable: ['Photo', 'Text'],
    image: localImage('images (38).jpg'),
    images: [localImage('images (38).jpg')],
    imageDetails: FRAME_IMAGE_MAP['photo-round-plate'],
  },
  {
    id: 'achievement-trophy',
    name: 'Premium Achievement Trophy',
    category: 'awards',
    productType: 'Recognition Trophy',
    basePrice: 1499,
    description:
      'A tall gold-tone recognition trophy with a premium presentation base and customizable award plate.',
    shortDescription: 'Gold-tone trophy for recognition and achievements.',
    occasion: ['Awards', 'Sports', 'Corporate', 'School'],
    tags: ['trophy', 'award', 'recognition', 'corporate gift'],
    materialOptions: ['metal'],
    featured: true,
    customizable: ['Recipient name', 'Award title', 'Organization', 'Year'],
    image: localImage('images (37).jpg'),
    images: [localImage('images (37).jpg')],
    imageDetails: FRAME_IMAGE_MAP['achievement-trophy'],
  },
  {
    id: 'mini-photo-album',
    name: 'Mini Personalized Photo Album',
    category: 'photo-gifts',
    productType: 'Mini Memory Album',
    basePrice: 699,
    description:
      'A compact personalized album that combines photographs with short messages, creating a pocket-sized memory story.',
    shortDescription: 'Compact photo-and-message memory album.',
    occasion: ['Birthday', 'Friendship', 'Couple', 'Best Friend'],
    tags: ['mini album', 'photo album', 'memory gift', 'friendship'],
    materialOptions: ['classic-wood'],
    customizable: ['Photos', 'Cover title', 'Messages'],
    image: localImage('images (36).jpg'),
    images: [localImage('images (36).jpg')],
    imageDetails: FRAME_IMAGE_MAP['mini-photo-album'],
  },
  {
    id: 'premium-wallet-gift-set',
    name: 'Personalized Premium Wallet Gift Set',
    category: 'gifts',
    productType: 'Wallet & Accessories Gift Set',
    basePrice: 1499,
    description:
      'A presentation-ready men’s gift set combining personalized wallet-style accessories with coordinated desk and carry items.',
    shortDescription: 'Premium personalized wallet and accessory set.',
    occasion: ['Birthday', 'Anniversary', 'Corporate', 'Men'],
    tags: ['wallet', 'gift set', 'men gift', 'corporate'],
    materialOptions: ['classic-wood', 'metal'],
    featured: true,
    customizable: ['Name', 'Initials', 'Text'],
    image: localImage('images (35).jpg'),
    images: [localImage('images (35).jpg')],
    imageDetails: FRAME_IMAGE_MAP['premium-wallet-gift-set'],
  },
  {
    id: 'personalized-tumbler-set',
    name: 'Personalized Insulated Tumbler',
    category: 'drinkware',
    productType: 'Personalized Tumbler',
    basePrice: 899,
    description:
      'A practical insulated tumbler with a clean personalized name finish, available in a variety of contemporary colors.',
    shortDescription: 'Reusable insulated tumbler with custom name.',
    occasion: ['Birthday', 'Office', 'Couple', 'Daily Use'],
    tags: ['tumbler', 'bottle', 'drinkware', 'name gift'],
    materialOptions: ['metal'],
    customizable: ['Name', 'Text'],
    image: localImage('images (34).jpg'),
    images: [localImage('images (34).jpg')],
    imageDetails: FRAME_IMAGE_MAP['personalized-tumbler-set'],
  },
  {
    id: 'led-photo-lamp',
    name: 'Personalized LED Photo Lamp',
    category: 'lighting',
    productType: 'LED Photo Decor',
    basePrice: 1599,
    description:
      'A decorative LED photo lamp that combines a custom photo panel with ambient illumination for a memorable bedside or display piece.',
    shortDescription: 'Photo lamp with touch-style LED lighting.',
    occasion: ['Anniversary', 'Birthday', 'Couple', 'Romantic'],
    tags: ['led lamp', 'photo lamp', 'night lamp', 'couple gift'],
    materialOptions: ['classic-wood', 'acrylic'],
    featured: true,
    bestseller: true,
    customizable: ['Photo', 'Names', 'Message'],
    image: localImage('images (33).jpg'),
    images: [localImage('images (33).jpg')],
    imageDetails: FRAME_IMAGE_MAP['led-photo-lamp'],
  },
  {
    id: 'personalized-baby-bag',
    name: 'Personalized Baby Carry Bag',
    category: 'baby',
    productType: 'Personalized Baby Bag',
    basePrice: 1199,
    description:
      'A colorful quilted baby carry bag with a prominent personalized name patch, designed for practical everyday use and gifting.',
    shortDescription: 'Quilted baby bag with custom name patch.',
    occasion: ['Baby Shower', 'Newborn', 'Naming Ceremony', 'Parents'],
    tags: ['baby bag', 'newborn gift', 'baby shower', 'name patch'],
    materialOptions: ['classic-wood'],
    customizable: ['Baby name', 'Patch text'],
    image: localImage('images (32).jpg'),
    images: [localImage('images (32).jpg')],
    imageDetails: FRAME_IMAGE_MAP['personalized-baby-bag'],
  },
  {
    id: 'photo-collage-wall-frame',
    name: 'Premium Multi-Photo Collage Frame',
    category: 'frames',
    productType: 'Wall Photo Collage',
    basePrice: 1699,
    description:
      'A large statement wall frame designed to showcase multiple favorite photographs in one curated collage composition.',
    shortDescription: 'Large multi-photo collage wall frame.',
    occasion: ['Family', 'Wedding', 'Birthday', 'Home Decor'],
    tags: ['collage frame', 'wall frame', 'family photos', 'photo decor'],
    materialOptions: ['classic-wood', 'premium-oak', 'acrylic', 'metal'],
    featured: true,
    bestseller: true,
    customizable: ['Photos', 'Layout', 'Title'],
    image: localImage('images (31).jpg'),
    images: [localImage('images (31).jpg')],
    imageDetails: FRAME_IMAGE_MAP['photo-collage-wall-frame'],
  },
  {
    id: 'personalized-pen-stand',
    name: 'Personalized Pen Stand',
    category: 'corporate',
    productType: 'Desk Accessory',
    basePrice: 699,
    description:
      'A minimal personalized pen-and-base desk accessory suited to professional desks, recognition gifts and corporate occasions.',
    shortDescription: 'Minimal personalized pen desk stand.',
    occasion: ['Corporate', 'Boss', 'Teacher', 'Office'],
    tags: ['pen stand', 'desk gift', 'corporate', 'boss gift'],
    materialOptions: ['classic-wood', 'metal'],
    customizable: ['Name', 'Title', 'Message'],
    image: localImage('images (30).jpg'),
    images: [localImage('images (30).jpg')],
    imageDetails: FRAME_IMAGE_MAP['personalized-pen-stand'],
  },
  {
    id: 'photo-collage-mug',
    name: 'Personalized Photo Collage Mug',
    category: 'drinkware',
    productType: 'Photo Mug',
    basePrice: 599,
    description:
      'A personalized ceramic-style mug combining a favorite portrait with a circular photo collage for an everyday memory gift.',
    shortDescription: 'Photo collage mug with custom portrait.',
    occasion: ['Birthday', 'Friendship', 'Family', 'Couple'],
    tags: ['photo mug', 'collage mug', 'birthday gift', 'friendship'],
    materialOptions: ['classic-wood'],
    customizable: ['Photos', 'Text'],
    image: localImage('images (29).jpg'),
    images: [localImage('images (29).jpg')],
    imageDetails: FRAME_IMAGE_MAP['photo-collage-mug'],
  },
  {
    id: 'personalized-photo-bottle',
    name: 'Personalized Photo Bottle',
    category: 'decor',
    productType: 'Photo Bottle Decor',
    basePrice: 999,
    description:
      'A decorative personalized bottle with a custom photo label and warm ambient-light presentation for romantic displays.',
    shortDescription: 'Decorative bottle with personalized photo label.',
    occasion: ['Anniversary', 'Wedding', 'Couple', 'Celebration'],
    tags: ['photo bottle', 'romantic gift', 'bottle decor', 'anniversary'],
    materialOptions: ['classic-wood'],
    customizable: ['Photo', 'Names', 'Message'],
    image: localImage('images (28).jpg'),
    images: [localImage('images (28).jpg')],
    imageDetails: FRAME_IMAGE_MAP['personalized-photo-bottle'],
  },
  {
    id: 'cool-boss-acrylic-stand',
    name: 'Cool Boss Personalized Acrylic Stand',
    category: 'corporate',
    productType: 'Personalized Desk Stand',
    basePrice: 899,
    description:
      'A fun professional desk display featuring a character topper and personalized “Cool Boss” style base.',
    shortDescription: 'Fun personalized boss desk display.',
    occasion: ['Boss', 'Farewell', 'Corporate', 'Office'],
    tags: ['boss gift', 'acrylic stand', 'desk decor', 'corporate gift'],
    materialOptions: ['acrylic'],
    featured: true,
    customizable: ['Name', 'Title', 'Message'],
    image: localImage('images (27).jpg'),
    images: [localImage('images (27).jpg')],
    imageDetails: FRAME_IMAGE_MAP['cool-boss-acrylic-stand'],
  },
];

export const FRAME_CATEGORIES = [
  { id: 'all', label: 'All Gifts', count: FRAMES.length },
  { id: 'frames', label: 'Photo Frames' },
  { id: 'photo-gifts', label: 'Photo Gifts' },
  { id: 'personalized', label: 'Personalized' },
  { id: 'drinkware', label: 'Drinkware' },
  { id: 'corporate', label: 'Corporate' },
  { id: 'gifts', label: 'Gift Sets' },
  { id: 'lighting', label: 'LED Gifts' },
  { id: 'baby', label: 'Baby Gifts' },
  { id: 'awards', label: 'Awards' },
  { id: 'decor', label: 'Decor' },
];

export function computePrice(basePrice, sizeId, materialId, qty = 1) {
  const size = FRAME_SIZES.find((item) => item.id === sizeId) || FRAME_SIZES[0];
  const material = FRAME_MATERIALS.find((item) => item.id === materialId) || FRAME_MATERIALS[0];
  return Math.round((basePrice * size.multiplier + material.add) * qty);
}

export const formatINR = (value) => `₹${Number(value || 0).toLocaleString('en-IN')}`;

export const getFrameById = (id) => FRAMES.find((frame) => frame.id === id) || null;

export const getFramesByCategory = (category) => {
  if (!category || category === 'all') return FRAMES;
  return FRAMES.filter((frame) => frame.category === category);
};

export const getFeaturedFrames = () => FRAMES.filter((frame) => frame.featured);

export const getBestsellers = () => FRAMES.filter((frame) => frame.bestseller);

export const searchFrames = (query = '') => {
  const term = query.trim().toLowerCase();

  if (!term) return FRAMES;

  return FRAMES.filter((frame) => {
    const searchable = [
      frame.name,
      frame.category,
      frame.productType,
      frame.description,
      frame.shortDescription,
      ...(frame.tags || []),
      ...(frame.occasion || []),
    ]
      .join(' ')
      .toLowerCase();

    return searchable.includes(term);
  });
};

export const getFrameAlt = (frame) => `${frame.name} — ${frame.productType}. Personalized gift product preview.`;
