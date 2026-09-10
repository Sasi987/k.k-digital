import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import ServicesGrid from '../components/ServicesGrid.jsx';
import { SERVICES } from '../data/packages.js';

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything your story needs"
        lead="Photography, films, and handcrafted frames — one studio, end to end."
        image="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1920&h=1080&q=80"
      />
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Our Craft"
            title="Choose how we tell it"
            lead="Every service includes a pre-session consultation, professional editing, and a private online gallery."
          />
          <ServicesGrid services={SERVICES} />
        </div>
      </section>
    </>
  );
}
