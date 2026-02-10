export const AboutSection = () => {
  return (
    <section className="about">
      <div className="container about__grid">
        <article>
          <h2 className="section-title">This is Bouncy</h2>
          <p className="section-description">
            We redesigned the project structure into isolated React components and reusable SCSS layers to make
            scaling easier.
          </p>
        </article>
        <img className="about__image" src="/img/IPAD.png" alt="iPad preview" />
      </div>
    </section>
  );
};
