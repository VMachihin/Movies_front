import './Techs.css';

function Techs() {
  return (
    <section className="tech">
      <div className="container">
        <h2 className="section-title">Технологии</h2>
        <div className="line"></div>

        <h3 className="tech__title">7 технологий</h3>
        <p className="tech__subtitle">
          На&nbsp;курсе веб-разработки мы&nbsp;освоили технологии, которые применили в&nbsp;дипломном проекте.
        </p>

        <u className="tech__list">
          <li className="tech__item">
            <a
              href="https://developer.mozilla.org/ru/docs/Learn/Getting_started_with_the_web/HTML_basics"
              target="blank"
              className="tech__link"
            >
              HTML
            </a>
          </li>
          <li className="tech__item">
            <a
              href="https://developer.mozilla.org/ru/docs/Learn/Getting_started_with_the_web/CSS_basics"
              target="blank"
              className="tech__link"
            >
              CSS
            </a>
          </li>
          <li className="tech__item">
            <a href="https://developer.mozilla.org/ru/docs/Web/JavaScript" target="blank" className="tech__link">
              JS
            </a>
          </li>
          <li className="tech__item">
            <a href="https://ru.legacy.reactjs.org/docs/getting-started.html" target="blank" className="tech__link">
              React
            </a>
          </li>
          <li className="tech__item">
            <a href="https://git-scm.com/" target="blank" className="tech__link">
              Git
            </a>
          </li>
          <li className="tech__item">
            <a href="https://expressjs.com/ru/" target="blank" className="tech__link">
              Express.js
            </a>
          </li>
          <li className="tech__item">
            <a href="https://www.mongodb.com/" target="blank" className="tech__link">
              mongoDB
            </a>
          </li>
        </u>
      </div>
    </section>
  );
}

export default Techs;
