import { navigationItems } from '../../data/navigation';

export const Header = () => {
  return (
    <header className="header">
      <div className="container header__content">
        <div className="header__logo">bouncy</div>
        <nav className="header__nav" aria-label="Main navigation">
          {navigationItems.map((item) => (
            <a key={item} className="header__link" href="#">
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};
