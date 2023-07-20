import './AboutMe.css';
import mePhoto from '../../../images/me.jpg';

function AboutMe() {
  return (
    <section className="aboutMe">
      <div className="container">
        <h2 className="section-title">Студент</h2>
        <div className="line"></div>

        <div className="aboutMe__wrapper">
          <div className="aboutMe__info">
            <h3 className="aboutMe__title">Виталий</h3>
            <span className="aboutMe__subtitle">Фронтенд-разработчик, 34&nbsp;года</span>

            <p className="aboutMe__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis alias non eos at fugit veniam delectus esse repudiandae
              laboriosam ducimus, labore facilis culpa facere, maxime quisquam consectetur mollitia illum nulla.
            </p>

            <a href="https://github.com/VMachihin/VMachihin" className="aboutMe__link" target="blank">
              Github
            </a>
          </div>
          <img src={mePhoto} className="aboutMe__photo" alt="фото студента" />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
