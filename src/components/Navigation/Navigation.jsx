import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import useResize from '../../hooks/useResize';

import './Navigation.css';

function Navigation({ loggedIn, toggleBurger, mainPage }) {
  const location = useLocation();
  const moviesPath = location.pathname === '/movies';
  const savedMoviesPath = location.pathname === '/saved-movies';

  const resize = useResize();
  const widthPoint = resize.width <= 768;

  const activeStyleLink = widthPoint ? 'nav-movies__link_burger-active' : 'nav-movies__link_active';

  return (
    <>
      {!loggedIn ? (
        <div className="nav-auth">
          <Link to="/signup" className="nav-auth__register-link">
            Регистрация
          </Link>

          <Link to="/signin" className="nav-auth__login-link">
            Войти
          </Link>
        </div>
      ) : (
        <div className={`nav-movies ${widthPoint ? `nav-movies_burger` : ''}`}>
          <div className={`nav-movies__wrapper ${widthPoint ? `nav-movies__wrapper_burger` : ''}`}>
            {widthPoint && (
              <Link className="link-main" to="/" onClick={toggleBurger}>
                Главная
              </Link>
            )}

            <Link
              to="/movies"
              className={`nav-movies__link ${mainPage ? `nav-movies__link_main` : ''} ${widthPoint ? `nav-movies__link_burger` : ''} ${
                moviesPath ? `${activeStyleLink}` : ''
              }`}
              onClick={toggleBurger}
            >
              Фильмы
            </Link>

            <Link
              to="/saved-movies"
              className={`nav-movies__link  ${mainPage ? `nav-movies__link_main` : ''} ${widthPoint ? `nav-movies__link_burger` : ''} ${
                savedMoviesPath ? `${activeStyleLink}` : ''
              }`}
              onClick={toggleBurger}
            >
              Сохранённые фильмы
            </Link>
          </div>

          <div className={`profile-link ${widthPoint ? `profile-link_burger` : ''}`}>
            <span className={`profile-link__text ${mainPage ? `profile-link__text_main` : ''}`}>Аккаунт</span>

            <Link to="/profile" className="profile-link__route" onClick={toggleBurger} />
          </div>
        </div>
      )}
    </>
  );
}

export default Navigation;
