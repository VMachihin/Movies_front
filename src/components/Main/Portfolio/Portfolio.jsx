import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="container">
        <h3 className="section-title section-title_portfolio">Портфолио</h3>

        <a href="https://github.com/VMachihin/how-to-learn" className="portfolio__link" target="blank">
          Статичный сайт
        </a>
        <div className="line line_portfolio"></div>
        <a href="https://github.com/VMachihin/russian-travel" className="portfolio__link" target="blank">
          Адаптивный сайт
        </a>
        <div className="line line_portfolio"></div>
        <a href="https://github.com/VMachihin/react-mesto-auth" className="portfolio__link" target="blank">
          Одностраничное приложение
        </a>
        <div className="line line_portfolio"></div>
      </div>
    </section>
  );
}

export default Portfolio;
