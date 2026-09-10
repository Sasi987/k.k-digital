import { useMemo, useState } from 'react';
import PageHero from '../components/PageHero.jsx';
import PortfolioFilter from '../components/PortfolioFilter.jsx';
import PortfolioGrid from '../components/PortfolioGrid.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { PORTFOLIO_ITEMS, CATEGORIES } from '../data/gallery.js';

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const items = useMemo(
    () => (filter === 'all' ? PORTFOLIO_ITEMS : PORTFOLIO_ITEMS.filter((i) => i.category === filter)),
    [filter]
  );

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="The full archive"
        lead="Browse every frame — tap any image for the fullscreen experience."
        image="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1920&h=1080&q=80"
      />
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Browse" title="Every moment, unfiltered by category" />
          <PortfolioFilter categories={CATEGORIES} active={filter} onChange={setFilter} />
          <PortfolioGrid items={items} />
        </div>
      </section>
    </>
  );
}
