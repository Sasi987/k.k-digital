const img = (id, w = 900, h = 1200) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

export const PORTFOLIO_ITEMS = [
  { id: 'w1', category: 'wedding', src: img('photo-1519741497674-611481863552'), alt: 'Bride and groom sharing an intimate moment', title: 'Ananya & Rohan', tall: true },
  { id: 'w2', category: 'wedding', src: img('photo-1511285560929-80b456fea0bc'), alt: 'Wedding ceremony with floral décor', title: 'The Vows' },
  { id: 'w3', category: 'wedding', src: img('photo-1465495976277-4387d4b0b4c6'), alt: 'Bridal portrait in soft window light', title: 'Her Morning', tall: true },
  { id: 'w4', category: 'wedding', src: img('photo-1520854221256-17451cc331bf'), alt: 'Couple walking together after the ceremony', title: 'Just Married' },
  { id: 'w5', category: 'wedding', src: img('photo-1529636798458-92182e662485'), alt: 'Wedding rings close-up detail', title: 'The Promise' },
  { id: 'w6', category: 'wedding', src: img('photo-1469371670807-013ccf25f16a'), alt: 'Reception dance under warm lights', title: 'First Dance', tall: true },
  { id: 'p1', category: 'portrait', src: img('photo-1531746020798-e6953c6e8e04'), alt: 'Studio portrait of a woman in dramatic light', title: 'Aishwarya', tall: true },
  { id: 'p2', category: 'portrait', src: img('photo-1507003211169-0a1dd7228f2d'), alt: 'Moody male portrait with cinematic tone', title: 'Karthik' },
  { id: 'p3', category: 'portrait', src: img('photo-1544005313-94ddf0286df2'), alt: 'Natural light portrait with gentle expression', title: 'Meera' },
  { id: 'p4', category: 'portrait', src: img('photo-1517841905240-472988babdf9'), alt: 'Golden hour outdoor portrait', title: 'Golden Hour', tall: true },
  { id: 'e1', category: 'event', src: img('photo-1511578314322-379afb476865'), alt: 'Candid moment from a corporate event', title: 'The Launch' },
  { id: 'e2', category: 'event', src: img('photo-1519225421980-715cb0215aed'), alt: 'Elegant birthday celebration table setting', title: 'Celebrations', tall: true },
  { id: 'e3', category: 'event', src: img('photo-1478146896981-b80fe463b330'), alt: 'Stage performance captured live', title: 'On Stage' },
  { id: 'e4', category: 'event', src: img('photo-1530103862676-de8c9debad1d'), alt: 'Festive gathering with warm ambient light', title: 'Festival Night' },
  { id: 'pw1', category: 'prewedding', src: img('photo-1583939003579-730e3918a45a'), alt: 'Couple embracing during a pre-wedding shoot', title: 'Before Forever', tall: true },
  { id: 'pw2', category: 'prewedding', src: img('photo-1522673607200-164d1b6ce486'), alt: 'Romantic outdoor pre-wedding session', title: 'The Promise Walk' },
  { id: 'pw3', category: 'prewedding', src: img('photo-1537633552985-df8429e8048b'), alt: 'Couple silhouette at dusk', title: 'Dusk' },
  { id: 'pw4', category: 'prewedding', src: img('photo-1606800052052-a08af7148866'), alt: 'Joyful couple laughing together', title: 'Laughter', tall: true }
];

export const CATEGORIES = [
  { id: 'all', label: 'All Work' },
  { id: 'wedding', label: 'Weddings' },
  { id: 'prewedding', label: 'Pre-Wedding' },
  { id: 'portrait', label: 'Portraits' },
  { id: 'event', label: 'Events' }
];
