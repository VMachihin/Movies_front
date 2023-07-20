import React from 'react';

import './BurgerMenu.css';

import Navigation from '../Navigation/Navigation';

function BurgerMenu({ loggedIn, mainPage }) {
  const [isOpen, setIsOpen] = React.useState(false);

  function toggleBurger() {
    setIsOpen(!isOpen);
  }

  // обработчик Escape
  React.useEffect(() => {
    function closeByEscape(evt) {
      if (evt.key === 'Escape') {
        toggleBurger();
      }
    }
    if (isOpen) {
      document.addEventListener('keydown', closeByEscape);
      return () => {
        document.removeEventListener('keydown', closeByEscape);
      };
    }
  }, [isOpen]);

  return (
    <div className="burger">
      <div className="burger__btn" onClick={toggleBurger}>
        <span className={`burger__line ${mainPage ? 'burger__line_mainPage' : ''}`}></span>
        <span className={`burger__line ${mainPage ? 'burger__line_mainPage' : ''}`}></span>
        <span className={`burger__line ${mainPage ? 'burger__line_mainPage' : ''}`}></span>
      </div>

      {isOpen && <div className="burger__overlay" onClick={toggleBurger}></div>}

      <div className={`burger__menu ${isOpen ? 'burger__menu_open' : ''}`}>
        <button className="burger__btn-close" onClick={toggleBurger}></button>

        <Navigation loggedIn={loggedIn} toggleBurger={toggleBurger} />
      </div>
    </div>
  );
}

export default BurgerMenu;
