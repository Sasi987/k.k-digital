import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  FRAME_SIZES, FRAME_MATERIALS, FRAME_COLORS, computePrice, formatINR
} from '../data/frames.js';
import { useCart } from '../context/CartContext.jsx';
import { waProduct } from '../utils/whatsapp.js';
import PhotoUploader from './PhotoUploader.jsx';
import './FrameCustomizer.css';

export default function FrameCustomizer({ frame }) {
  const [sizeId, setSizeId] = useState(FRAME_SIZES[0].id);
  const [materialId, setMaterialId] = useState(FRAME_MATERIALS[0].id);
  const [colorId, setColorId] = useState(FRAME_COLORS[0].id);
  const [qty, setQty] = useState(1);
  const [photo, setPhoto] = useState(null); // { previewUrl, name }
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const size = FRAME_SIZES.find((s) => s.id === sizeId);
  const material = FRAME_MATERIALS.find((m) => m.id === materialId);
  const color = FRAME_COLORS.find((c) => c.id === colorId);

  const unitPrice = useMemo(
    () => computePrice(frame.basePrice, sizeId, materialId, 1),
    [frame.basePrice, sizeId, materialId]
  );
  const total = unitPrice * qty;

  const handleAdd = () => {
    addItem({
      frameId: frame.id,
      name: frame.name,
      image: frame.images[0],
      sizeId, materialId, colorId,
      sizeLabel: size.label,
      materialLabel: material.label,
      colorLabel: color.label,
      unitPrice,
      qty,
      photoName: photo?.name || null,
      photoPreview: photo?.previewUrl || null
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2200);
  };

  const waHref = waProduct({
    productName: frame.name,
    size: size.label,
    material: `${material.label} / ${color.label}`,
    price: `${formatINR(total)} (×${qty})`
  });

  return (
    <div className="customizer">
      {/* Live preview */}
      <div className="customizer__preview">
        <div
          className="customizer__frame"
          style={{ '--frame-color': color.hex, '--frame-w': `${Math.max(10, 22 - FRAME_SIZES.indexOf(size) * 3)}px` }}
        >
          <img
            src={photo?.previewUrl || frame.images[0]}
            alt={photo ? 'Your uploaded photo preview' : `${frame.name} sample`}
            className="customizer__photo"
          />
        </div>
      </div>

      {/* Options */}
      <div className="customizer__options">
        <fieldset className="opt-group">
          <legend>Size</legend>
          <div className="opt-group__row">
            {FRAME_SIZES.map((s) => (
              <button
                key={s.id}
                type="button"
                className={`opt-chip ${sizeId === s.id ? 'is-active' : ''}`}
                onClick={() => setSizeId(s.id)}
                aria-pressed={sizeId === s.id}
              >
                {s.label}
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset className="opt-group">
          <legend>Material</legend>
          <div className="opt-group__row">
            {FRAME_MATERIALS.map((m) => (
              <button
                key={m.id}
                type="button"
                className={`opt-chip ${materialId === m.id ? 'is-active' : ''}`}
                onClick={() => setMaterialId(m.id)}
                aria-pressed={materialId === m.id}
              >
                {m.label}
                {m.add > 0 && <small> +{formatINR(m.add)}</small>}
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset className="opt-group">
          <legend>Frame Colour</legend>
          <div className="opt-group__row">
            {FRAME_COLORS.map((c) => (
              <button
                key={c.id}
                type="button"
                className={`opt-swatch ${colorId === c.id ? 'is-active' : ''}`}
                onClick={() => setColorId(c.id)}
                aria-pressed={colorId === c.id}
                aria-label={c.label}
                title={c.label}
              >
                <span style={{ background: c.hex }} />
              </button>
            ))}
          </div>
          <p className="opt-group__note">{color.label}</p>
        </fieldset>

        <div className="opt-group">
          <span className="opt-group__legend" id="qty-label">Quantity</span>
          <div className="qty" role="group" aria-labelledby="qty-label">
            <button type="button" onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Decrease quantity">−</button>
            <output aria-live="polite">{qty}</output>
            <button type="button" onClick={() => setQty((q) => Math.min(20, q + 1))} aria-label="Increase quantity">+</button>
          </div>
        </div>

        <PhotoUploader onPhoto={setPhoto} />

        <p className="customizer__hint">
          {photo ? 'Live preview with your photo' : 'Upload your photo to see a live preview'}
        </p>

        <div className="customizer__actions">
          <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp">
            Enquire on WhatsApp
          </a>
        </div>

        <div className="customizer__total" aria-live="polite">
          <span>Total</span>
          <motion.strong
            key={total}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {formatINR(total)}
          </motion.strong>
        </div>

        <div className="customizer__actions">
          <button type="button" className="btn btn--gold" onClick={handleAdd}>
            {added ? '✓ Added to Cart' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
}
