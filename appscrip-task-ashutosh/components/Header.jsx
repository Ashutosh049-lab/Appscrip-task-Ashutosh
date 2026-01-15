export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="/" className="logo" aria-label="Store home">
          <span className="logo-text">LOGO</span>
        </a>
        <nav aria-label="Primary navigation">
          <ul className="nav-list">
            <li>
              <a href="/" className="nav-link nav-link-active">
                Shop
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link">
                Blog
              </a>
            </li>
            <li>
              <a href="#stories" className="nav-link">
                Stories
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
