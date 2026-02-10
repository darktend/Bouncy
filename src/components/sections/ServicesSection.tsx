import { services } from '../../data/services';

export const ServicesSection = () => {
  return (
    <section className="services">
      <div className="container">
        <h2 className="section-title">Services</h2>
        <div className="services__grid">
          {services.map((service) => (
            <article key={service.title} className="service-card">
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__description">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
