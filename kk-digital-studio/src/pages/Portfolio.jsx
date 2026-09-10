import { useMemo, useState } from 'react';
import PageHero from '../components/PageHero.jsx';
import PortfolioFilter from '../components/PortfolioFilter.jsx';
import PortfolioGrid from '../components/PortfolioGrid.jsx';
import { PORTFOLIO_ITEMS, CATEGORIES } from '../data/gallery.js';

export default function Portfolio() {
  const [filter, setFilter] = useState('all');
  const items = useMemo(
    () => (filter === 'all' ? PORTFOLIO_ITEMS : PORTFOLIO_ITEMS.filter((i) => i.category === filter)),
    [filter]
  );

  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Selected stories"
        lead="Weddings, portraits, and celebrations — curated like an editorial."
        image="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1920&h=1080&q=80"
      />
      <section className="section">
        <div className="container">
          <PortfolioFilter categories={CATEGORIES} active={filter} onChange={setFilter} />
          <PortfolioGrid items={items} />
        </div>
      </section>
    </>
  );
}
