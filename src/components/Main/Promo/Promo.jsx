import main_logo from '../../../images/main_img.png';
import './Promo.css';

function Promo() {
  return (
    <section className="promo">
      <div className="container">
        <div className="promo__wrapper">
          <div className="promo__info">
            <h1 className="promo__title">
              Учебный проект студента факультета <nobr>Веб-разработки</nobr>.
            </h1>
            <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и&nbsp;его создателя.</p>
          </div>

          <img src={main_logo} alt="изображение земли словами web" className="promo__img"></img>
        </div>
      </div>
    </section>
  );
}

export default Promo;
