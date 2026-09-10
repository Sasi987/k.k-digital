import './PortfolioFilter.css';

export default function PortfolioFilter({ categories, active, onChange }) {
  return (
    <div className="filter-bar" role="tablist" aria-label="Filter work by category">
      {categories.map((c) => (
        <button
          key={c.id}
          role="tab"
          aria-selected={active === c.id}
          className={`filter-bar__btn ${active === c.id ? 'is-active' : ''}`}
          onClick={() => onChange(c.id)}
        >
          {c.label}
        </button>
      ))}
    </div>
  );
}
