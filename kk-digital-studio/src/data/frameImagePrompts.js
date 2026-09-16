const SHARED_STYLE =
  'Original ultra-premium ecommerce product photograph for an Indian luxury personalized-gifts store, photorealistic commercial studio photography, accurate proportions, realistic material texture, sharp edges, natural contact shadows, controlled reflections, warm ivory and deep charcoal palette with restrained champagne and soft bronze accents, sophisticated negative space, subtle depth of field, premium color grading, 4K-quality detail, product as the hero, no logos, no watermark, no brand names, no random text, no fake typography, no copied competitor design, no duplicated products, no distorted geometry, no floating objects, no plastic-looking surfaces, no oversaturated colors, no excessive glow, no deformed hands or extra fingers';

const NEGATIVE_PROMPT =
  'generic AI stock photo, low resolution, soft or melted edges, warped frame, incorrect perspective, bent glass, cloudy acrylic, impossible reflections, pasted-on photo, floating print, unreadable text, logo, watermark, brand name, duplicate product, random decorations, cluttered background, excessive bokeh, fake HDR, oversaturation, deformed hands, extra fingers';

const FRAME_IMAGE_SPECS = {
  'heritage-wood': {
    searchTerms: ['premium personalized wooden photo frame', 'walnut wood portrait frame product photography'],
    subject: 'a substantial hand-finished walnut wooden portrait frame with museum-grade clear glass and a softly bevelled profile',
    personalization: 'a natural-looking Indian family portrait printed behind the glass, aligned precisely within an ivory mount',
    ratio: '4:5',
    filename: 'wooden-frame-heritage-01.webp'
  },
  'royal-gold': {
    searchTerms: ['champagne gold ornate photo frame velvet mount', 'luxury wedding photo frame product photography'],
    subject: 'an elegant champagne-gold moulded portrait frame with a refined velvet mount and polished, believable metallic finish',
    personalization: 'an original Indian wedding couple portrait seated naturally inside the mount, with no visible lettering',
    ratio: '4:5',
    filename: 'gold-frame-royal-01.webp'
  },
  'crystal-acrylic': {
    searchTerms: ['clear acrylic photo frame polished edges', 'personalized acrylic photo frame studio product'],
    subject: 'a frameless crystal-clear acrylic photo block with thick polished edges, realistic transparency, and controlled studio reflections',
    personalization: 'a high-quality Indian couple portrait printed as a clean UV image inside the acrylic, visibly embedded rather than pasted on',
    ratio: '4:5',
    filename: 'acrylic-frame-crystal-01.webp'
  },
  'gallery-canvas': {
    searchTerms: ['premium personalized canvas photo wrap', 'gallery canvas family portrait product photography'],
    subject: 'a gallery-grade canvas wrap stretched over a solid pine frame, with fine woven texture and neatly finished corners',
    personalization: 'a richly printed Indian portrait with natural skin tones wrapping cleanly across the front face and visible side edge',
    ratio: '3:2',
    filename: 'canvas-frame-gallery-01.webp'
  },
  'ebony-metal': {
    searchTerms: ['matte black metal photo frame brushed metal', 'minimal metal portrait frame product photography'],
    subject: 'a slim architectural matte-black brushed-metal frame with precise mitred corners and museum-grade glazing',
    personalization: 'a warmly lit Indian portrait photograph, perfectly centered and mounted behind the glass with a discreet ivory border',
    ratio: '4:5',
    filename: 'metal-frame-ebony-01.webp'
  },
  'collage-story': {
    searchTerms: ['multi aperture collage photo frame wooden', 'personalized family collage frame premium product'],
    subject: 'a premium walnut multi-aperture collage frame with six precisely cut windows, clean ivory mounts, and museum-grade glazing',
    personalization: 'six distinct original Indian family and celebration photographs, naturally varied but consistently color graded and perfectly aligned',
    ratio: '4:5',
    filename: 'wooden-frame-collage-story-01.webp'
  }
};

export function getFrameImageBrief(frameId) {
  const spec = FRAME_IMAGE_SPECS[frameId];
  if (!spec) return null;

  return {
    ...spec,
    folder: 'src/assets/gifts/frames',
    prompt: `${SHARED_STYLE}. Show ${spec.subject}. ${spec.personalization}. Centered hero composition, professional ecommerce framing, clean luxury studio background, enough breathing room for a 1:1 or 4:3 product card, physically plausible light and shadow.`,
    negativePrompt: NEGATIVE_PROMPT
  };
}

export { FRAME_IMAGE_SPECS, NEGATIVE_PROMPT };