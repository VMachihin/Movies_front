import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <h3 className="footer__title">Учебный проект Яндекс.Практикум х&nbsp;BeatFilm.</h3>
        <div className="line line_footer"></div>
        <div className="footer__info">
          <span className="year">&#169;{new Date().getFullYear()}</span>

          <ul className="footer__list">
            <li className="footer__item">
              <a href="https://practicum.yandex.ru/" className="footer__link" target="blank">
                Яндекс.Практикум
              </a>
            </li>
            <li className="footer__item">
              <a href="https://github.com/VMachihin/VMachihin" className="footer__link" target="blank">
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
