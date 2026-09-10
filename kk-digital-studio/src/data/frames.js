// Photo frame catalog with dynamic pricing
export const FRAME_SIZES = [
  { id: '8x10', label: '8" × 10"', multiplier: 1 },
  { id: '12x16', label: '12" × 16"', multiplier: 1.6 },
  { id: '16x20', label: '16" × 20"', multiplier: 2.3 },
  { id: '20x30', label: '20" × 30"', multiplier: 3.4 }
];

export const FRAME_MATERIALS = [
  { id: 'classic-wood', label: 'Classic Wood', add: 0 },
  { id: 'premium-oak', label: 'Premium Oak', add: 450 },
  { id: 'acrylic', label: 'Crystal Acrylic', add: 650 },
  { id: 'metal', label: 'Brushed Metal', add: 800 }
];

export const FRAME_COLORS = [
  { id: 'walnut', label: 'Walnut Brown', hex: '#5b4232' },
  { id: 'ebony', label: 'Ebony Black', hex: '#1a1a1c' },
  { id: 'gold', label: 'Champagne Gold', hex: '#c8a96a' },
  { id: 'white', label: 'Ivory White', hex: '#efe7da' }
];

const img = (id, w = 900, h = 1100) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

export const FRAMES = [
  {
    id: 'heritage-wood',
    name: 'Heritage Wooden Frame',
    category: 'wooden',
    basePrice: 1299,
    description:
      'Hand-finished solid wood frame with museum-grade glass. A timeless home for your most treasured portrait.',
    images: [img('photo-1513519245088-0e12902e5a38'), img('photo-1519710164239-da123dc03ef4'), img('photo-1506806732259-39c2d0268443')]
  },
  {
    id: 'royal-gold',
    name: 'Royal Gold Frame',
    category: 'premium',
    basePrice: 2499,
    description:
      'Ornate champagne-gold moulding with velvet mount — crafted for wedding portraits and heirloom photographs.',
    images: [img('photo-1519225421980-715cb0215aed'), img('photo-1465495976277-4387d4b0b4c6'), img('photo-1520854221256-17451cc331bf')]
  },
  {
    id: 'crystal-acrylic',
    name: 'Crystal Acrylic Frame',
    category: 'acrylic',
    basePrice: 1899,
    description:
      'Frameless crystal-clear acrylic with polished edges. Modern, luminous, and perfect for contemporary interiors.',
    images: [img('photo-1606216794074-735e91aa2c92'), img('photo-1583939003579-730e3918a45a'), img('photo-1522673607200-164d1b6ce486')]
  },
  {
    id: 'gallery-canvas',
    name: 'Gallery Canvas Wrap',
    category: 'canvas',
    basePrice: 1599,
    description:
      'Fine-art canvas stretched over kiln-dried pine. Rich texture that turns a photograph into wall art.',
    images: [img('photo-1519741497674-611481863552'), img('photo-1606800052052-a08af7148866'), img('photo-1537633552985-df8429e8048b')]
  },
  {
    id: 'ebony-metal',
    name: 'Ebony Metal Frame',
    category: 'metal',
    basePrice: 2199,
    description:
      'Slim brushed-metal profile in matte black. Minimal, architectural, striking against any wall.',
    images: [img('photo-1518199266791-5375a83190b7'), img('photo-1502920917128-1aa500764cbd'), img('photo-1493863641943-9b68992a8d07')]
  },
  {
    id: 'collage-story',
    name: 'Collage Story Frame',
    category: 'wooden',
    basePrice: 1799,
    description:
      'A multi-aperture layout that lets one wall tell a whole story — four, six, or nine moments in a single frame.',
    images: [img('photo-1529636798458-92182e662485'), img('photo-1511285560929-80b456fea0bc'), img('photo-1469371670807-013ccf25f16a')]
  }
];

export const FRAME_CATEGORIES = [
  { id: 'all', label: 'All Frames' },
  { id: 'wooden', label: 'Wooden' },
  { id: 'premium', label: 'Premium Gold' },
  { id: 'acrylic', label: 'Acrylic' },
  { id: 'canvas', label: 'Canvas' },
  { id: 'metal', label: 'Metal' }
];

export function computePrice(basePrice, sizeId, materialId, qty = 1) {
  const size = FRAME_SIZES.find((s) => s.id === sizeId) || FRAME_SIZES[0];
  const material = FRAME_MATERIALS.find((m) => m.id === materialId) || FRAME_MATERIALS[0];
  return Math.round((basePrice * size.multiplier + material.add) * qty);
}

export const formatINR = (n) => '₹' + n.toLocaleString('en-IN');
