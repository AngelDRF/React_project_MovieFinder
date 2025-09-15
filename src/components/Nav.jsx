import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Nav = () => {
  function openMenu() {
    document.body.classList += " menu--open";
  }
  function closeMenu() {
    document.body.classList.remove("menu--open");
  }

  return (
    <nav>
      <div className="row">
        <div className="nav__container">
          <div className="navbar">
            
              <div className="logo__wrapper">
                <FontAwesomeIcon
                  icon="fa-solid fa-film"
                  style={{ color: "#B197FC" }}
                  id="logo__film"
                />
                <h2 className="logo">MovieFinder</h2>
              </div>
            

            <div className="navbar__links">
              <Link to="/movie">
                <button className="button btn__find">Find Your Movie</button>
              </Link>
              <Link to="/">
                <div className="home__wrapper">
                  <FontAwesomeIcon
                    icon="fa-solid fa-house"
                    size="2xl"
                    id="home--navbar"
                  />
              
                </div>
              </Link>
            </div>
            <button className="btn__menu" onClick={openMenu}>
              <FontAwesomeIcon icon="bars" />
            </button>
          </div>
          <div className="navbar__overlay"></div>

          <div className="menu__backdrop">
            <button className="btn__menu btn__menu--close" onClick={closeMenu}>
              <FontAwesomeIcon icon="times" />
            </button>
            <ul className="menu__links">
              <li className="menu__list">
                <Link to="/" className="menu__link" onClick={closeMenu}>
                  Home
                </Link>
              </li>
              <li className="menu__list">
                <Link to="/movie" className="menu__link" onClick={closeMenu}>
                  Find
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
