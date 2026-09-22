import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';
import { formatINR } from '../data/frames.js';
import { CUSTOMIZED_PRODUCT_CATEGORIES, CUSTOMIZED_PRODUCTS } from '../data/customizedProducts.js';
import { waLink } from '../utils/whatsapp.js';
import CustomizedProductCard from '../components/customized/CustomizedProductCard.jsx';
import './CustomizedProducts.css';

const STORAGE_KEY = 'kkds_customized_product_form';

const createBlankForm = (product) => ({
  productId: product.id,
  productName: product.name,
  name: '',
  message: '',
  personalisation: '',
  size: 'Standard',
  material: 'Premium Acrylic',
  color: 'Champagne Gold',
  qty: 1,
  photoPreview: '',
  photoName: '',
});

export default function CustomizedProducts() {
  const { addItem } = useCart();
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(CUSTOMIZED_PRODUCTS[0]);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [form, setForm] = useState(() => createBlankForm(CUSTOMIZED_PRODUCTS[0]));

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'All') return CUSTOMIZED_PRODUCTS;
    return CUSTOMIZED_PRODUCTS.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const saved = JSON.parse(raw);
        if (saved?.productId) {
          const match = CUSTOMIZED_PRODUCTS.find((item) => item.id === saved.productId) || CUSTOMIZED_PRODUCTS[0];
          setSelectedProduct(match);
          setForm({ ...createBlankForm(match), ...saved });
        }
      }
    } catch {
      // ignore localStorage issues in private mode
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(form));
    } catch {
      // ignore localStorage issues in private mode
    }
  }, [form]);

  const openCustomizer = (product) => {
    setSelectedProduct(product);
    setForm({ ...createBlankForm(product), productId: product.id, productName: product.name });
    setIsEditorOpen(true);
  };

  const handlePhotoUpload = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const allowed = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    if (!allowed.includes(file.type) || file.size > 5 * 1024 * 1024) {
      event.target.value = '';
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setForm((current) => ({
        ...current,
        photoPreview: typeof reader.result === 'string' ? reader.result : '',
        photoName: file.name,
      }));
    };
    reader.readAsDataURL(file);
    event.target.value = '';
  };

  const total = selectedProduct.price * Number(form.qty || 1);

  const handleAddToCart = () => {
    addItem({
      frameId: selectedProduct.id,
      name: selectedProduct.name,
      image: selectedProduct.image,
      sizeId: form.size,
      materialId: form.material,
      colorId: form.color,
      sizeLabel: form.size,
      materialLabel: form.material,
      colorLabel: form.color,
      unitPrice: selectedProduct.price,
      qty: Number(form.qty || 1),
      photoName: form.photoName || null,
      photoPreview: form.photoPreview || null,
      personalizationName: form.name || null,
      personalizationMessage: form.message || null,
      customProduct: true,
    });
    setIsEditorOpen(false);
  };

  const waOrderMessage = waLink(
    `Hello KK DIGITAL STUDIO 👋\n\nI would like to order a customized product.\n\nProduct: ${selectedProduct.name}\nSize: ${form.size}\nMaterial: ${form.material}\nColor: ${form.color}\nName: ${form.name || 'Not specified'}\nMessage: ${form.message || 'Not specified'}\nQuantity: ${form.qty}\nEstimated Price: ${formatINR(total)}\n\nI will provide the customization photo.`
  );

  return (
    <>
      <section className="customized-products page-shell">
        <div className="container customized-products__hero">
          <motion.div
            className="customized-products__copy"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            <span className="eyebrow">Luxury personalized gifting</span>
            <h1 className="display-1">MAKE IT PERSONAL. MAKE IT YOURS.</h1>
            <p className="lead">
              Create meaningful customized products with your photographs, names, messages and memories.
            </p>

            <div className="customized-products__actions">
              <button type="button" className="btn btn--gold" onClick={() => openCustomizer(selectedProduct)}>
                CUSTOMIZE NOW
              </button>
              <a href="#catalog" className="btn btn--outline">
                EXPLORE PRODUCTS
              </a>
            </div>

            <div className="customized-products__trustline">
              <span>Free consultation</span>
              <span>Premium finish</span>
              <span>Custom gifting</span>
            </div>
          </motion.div>

          <motion.div
            className="customized-products__showcase"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="customized-products__feature-card">
              <div className="customized-products__image-wrap">
                <img src={selectedProduct.image} alt={`${selectedProduct.name} preview`} onError={(event) => { event.currentTarget.src = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`<?xml version="1.0"?><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 820 820"><defs><linearGradient id="bg" x1="0" x2="1" y1="0" y2="1"><stop offset="0%" stop-color="#f7f1e8"/><stop offset="100%" stop-color="#e5dcc7"/></linearGradient></defs><rect width="820" height="820" fill="url(#bg)"/><rect x="110" y="110" width="600" height="600" rx="48" fill="rgba(13,33,56,0.06)" stroke="rgba(13,33,56,0.12)"/><circle cx="410" cy="330" r="120" fill="rgba(200,169,106,0.28)"/><text x="410" y="530" text-anchor="middle" font-size="42" font-family="Arial, sans-serif" fill="#0d2138" letter-spacing="8">${selectedProduct.name}</text></svg>`)}`; }} />
              </div>
              <div className="customized-products__showcase-copy">
                <span className="eyebrow">Featured Product</span>
                <h2>{selectedProduct.name}</h2>
                <p>{selectedProduct.description}</p>
                <div className="customized-products__showcase-row">
                  <strong>{formatINR(selectedProduct.price)}</strong>
                  <button type="button" className="btn btn--outline" onClick={() => openCustomizer(selectedProduct)}>
                    CUSTOMIZE
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section" id="catalog">
        <div className="container">
          <div className="customized-products__header-row">
            <div>
              <span className="eyebrow">Curated collection</span>
              <h2 className="display-2">Luxury gifting, made personal.</h2>
            </div>
            <a href={waOrderMessage} target="_blank" rel="noreferrer" className="btn btn--whatsapp">
              ORDER ON WHATSAPP
            </a>
          </div>

          <div className="customized-products__filters" aria-label="Product categories">
            {CUSTOMIZED_PRODUCT_CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                className={`customized-products__filter ${activeCategory === category ? 'is-active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="customized-products__grid">
            {filteredProducts.map((product) => (
              <CustomizedProductCard
                key={product.id}
                product={product}
                onCustomize={openCustomizer}
                onQuickView={openCustomizer}
              />
            ))}
          </div>
        </div>
      </section>

      {isEditorOpen && (
        <div className="customizer-panel" aria-modal="true" role="dialog">
          <div className="customizer-panel__backdrop" onClick={() => setIsEditorOpen(false)} aria-hidden="true" />

          <motion.aside
            className="customizer-panel__sheet"
            initial={{ opacity: 0, x: 36 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 36 }}
            transition={{ duration: 0.35 }}
          >
            <div className="customizer-panel__topbar">
              <div>
                <span className="eyebrow">Customize</span>
                <h3>{selectedProduct.name}</h3>
              </div>
              <button type="button" className="customizer-panel__close" onClick={() => setIsEditorOpen(false)} aria-label="Close customizer">
                ×
              </button>
            </div>

            <div className="customizer-panel__layout">
              <div className="customizer-panel__preview-wrap">
                <img src={selectedProduct.image} alt={`${selectedProduct.name} preview`} onError={(event) => {
                  event.currentTarget.src = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`<?xml version="1.0"?><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 820 820"><defs><linearGradient id="bg" x1="0" x2="1" y1="0" y2="1"><stop offset="0%" stop-color="#f7f1e8"/><stop offset="100%" stop-color="#e5dcc7"/></linearGradient></defs><rect width="820" height="820" fill="url(#bg)"/><rect x="110" y="110" width="600" height="600" rx="48" fill="rgba(13,33,56,0.06)" stroke="rgba(13,33,56,0.12)"/><circle cx="410" cy="330" r="120" fill="rgba(200,169,106,0.28)"/><text x="410" y="530" text-anchor="middle" font-size="42" font-family="Arial, sans-serif" fill="#0d2138" letter-spacing="8">${selectedProduct.name}</text></svg>`)}`;
                }} />
                <div className="customizer-panel__summary">
                  <span>{selectedProduct.category}</span>
                  <strong>{formatINR(selectedProduct.price)}</strong>
                </div>
              </div>

              <div className="customizer-panel__form">
                <div className="field">
                  <label htmlFor="custom-product">Product</label>
                  <select id="custom-product" value={selectedProduct.id} onChange={(event) => {
                    const product = CUSTOMIZED_PRODUCTS.find((item) => item.id === event.target.value);
                    if (product) {
                      setSelectedProduct(product);
                      setForm({ ...createBlankForm(product), productId: product.id, productName: product.name });
                    }
                  }}>
                    {CUSTOMIZED_PRODUCTS.map((product) => (
                      <option key={product.id} value={product.id}>{product.name}</option>
                    ))}
                  </select>
                </div>

                <div className="field">
                  <label htmlFor="custom-name">Name</label>
                  <input id="custom-name" value={form.name} onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))} placeholder="Enter the name" />
                </div>

                <div className="field">
                  <label htmlFor="custom-message">Message</label>
                  <textarea id="custom-message" value={form.message} onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))} placeholder="Add your personal message" />
                </div>

                <div className="field">
                  <label htmlFor="custom-personalisation">Personalization text</label>
                  <input id="custom-personalisation" value={form.personalisation} onChange={(event) => setForm((current) => ({ ...current, personalisation: event.target.value }))} placeholder="Your personalization text" />
                </div>

                <div className="customizer-panel__double">
                  <div className="field">
                    <label htmlFor="custom-size">Size</label>
                    <select id="custom-size" value={form.size} onChange={(event) => setForm((current) => ({ ...current, size: event.target.value }))}>
                      <option value="Standard">Standard</option>
                      <option value="Medium">Medium</option>
                      <option value="Large">Large</option>
                    </select>
                  </div>

                  <div className="field">
                    <label htmlFor="custom-material">Material</label>
                    <select id="custom-material" value={form.material} onChange={(event) => setForm((current) => ({ ...current, material: event.target.value }))}>
                      <option value="Premium Acrylic">Premium Acrylic</option>
                      <option value="Natural Wood">Natural Wood</option>
                      <option value="Ceramic Finish">Ceramic Finish</option>
                      <option value="Metallic Finish">Metallic Finish</option>
                    </select>
                  </div>
                </div>

                <div className="customizer-panel__double">
                  <div className="field">
                    <label htmlFor="custom-color">Color</label>
                    <select id="custom-color" value={form.color} onChange={(event) => setForm((current) => ({ ...current, color: event.target.value }))}>
                      <option value="Champagne Gold">Champagne Gold</option>
                      <option value="Ivory White">Ivory White</option>
                      <option value="Charcoal Black">Charcoal Black</option>
                      <option value="Rose Gold">Rose Gold</option>
                    </select>
                  </div>

                  <div className="field">
                    <label htmlFor="custom-qty">Quantity</label>
                    <input id="custom-qty" type="number" min="1" max="10" value={form.qty} onChange={(event) => setForm((current) => ({ ...current, qty: Math.max(1, Number(event.target.value) || 1) }))} />
                  </div>
                </div>

                <div className="customizer-panel__upload">
                  <label htmlFor="custom-photo-upload" className="customizer-panel__upload-label">
                    <span>UPLOAD YOUR PHOTO</span>
                    <small>Add your favorite photograph to personalize this product.</small>
                  </label>
                  <input id="custom-photo-upload" type="file" accept="image/jpeg,image/jpg,image/png,image/webp" onChange={handlePhotoUpload} />
                  {form.photoPreview && (
                    <div className="customizer-panel__preview-image">
                      <img src={form.photoPreview} alt="Selected product preview" />
                      <button type="button" className="btn btn--ghost" onClick={() => setForm((current) => ({ ...current, photoPreview: '', photoName: '' }))}>Remove photo</button>
                    </div>
                  )}
                </div>

                <div className="customizer-panel__footer">
                  <div className="customizer-panel__price">
                    <span>Estimated total</span>
                    <strong>{formatINR(total)}</strong>
                  </div>

                  <div className="customizer-panel__actions">
                    <a href={waOrderMessage} target="_blank" rel="noreferrer" className="btn btn--whatsapp">
                      WhatsApp
                    </a>
                    <button type="button" className="btn btn--gold" onClick={handleAddToCart}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      )}
    </>
  );
}
