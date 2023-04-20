const Navigation = () => {
  return (
    <nav className="nav">
      <div className="container">
        <div className="menuLeft">Moja Firma</div>
        <ul className="navigation menuRight">
          <li>
            <a href="#specialist" className="nav_color_white">
              o nas
            </a>
          </li>
          <li>
            <a
              href="#services-section_desc"
              className="nav_color_white"
            >
              oferta
            </a>
          </li>
          <li>
            <a href="#kontakt" className="nav_color_white contact">
              kontakt
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
