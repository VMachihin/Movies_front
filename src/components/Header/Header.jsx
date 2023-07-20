import { Link } from 'react-router-dom';

import logo from '../../images/logo/main_logo.svg';

import useResize from '../../hooks/useResize';
import { useLocation } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

function Header({ loggedIn }) {
  const resize = useResize();
  const location = useLocation();

  const mainPage = location.pathname === '/';

  return (
    <header className={`header ${mainPage && `header_mainPage`}`}>
      <div className="container">
        <div className="header__wrapper">
          <Link to="/" className="main-logo">
            <img src={logo} alt="главный логотип" />
          </Link>

          {loggedIn & (resize.width <= 768) ? (
            <BurgerMenu loggedIn={loggedIn} mainPage={mainPage} />
          ) : (
            <Navigation loggedIn={loggedIn} mainPage={mainPage} />
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
