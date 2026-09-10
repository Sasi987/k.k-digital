import { createContext, useContext, useEffect, useMemo, useState, useCallback } from 'react';
import { formatINR } from '../data/frames.js';

const CartContext = createContext(null);
const STORAGE_KEY = 'kkds_cart_v1';

function loadCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(loadCart);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* storage full / private mode — cart stays in memory */
    }
  }, [items]);

  const addItem = useCallback((item) => {
    setItems((prev) => {
      const key = (i) => `${i.frameId}|${i.sizeId}|${i.materialId}|${i.colorId}|${i.photoName || ''}`;
      const existing = prev.find((i) => key(i) === key(item));
      if (existing) {
        return prev.map((i) => (key(i) === key(item) ? { ...i, qty: i.qty + item.qty } : i));
      }
      return [...prev, { ...item, id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}` }];
    });
  }, []);

  const updateQty = useCallback((id, qty) => {
    setItems((prev) =>
      qty <= 0 ? prev.filter((i) => i.id !== id) : prev.map((i) => (i.id === id ? { ...i, qty } : i))
    );
  }, []);

  const removeItem = useCallback((id) => setItems((prev) => prev.filter((i) => i.id !== id)), []);
  const clearCart = useCallback(() => setItems([]), []);

  const value = useMemo(() => {
    const count = items.reduce((s, i) => s + i.qty, 0);
    const total = items.reduce((s, i) => s + i.unitPrice * i.qty, 0);
    return { items, count, total, totalLabel: formatINR(total), addItem, updateQty, removeItem, clearCart };
  }, [items, addItem, updateQty, removeItem, clearCart]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
