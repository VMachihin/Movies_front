import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard.jsx';

import { useLocation } from 'react-router-dom';
import useResize from '../../hooks/useResize';

import {
  laptopWidth,
  tabletWidth,
  mobileWidth,
  numberCardsToShowLaptop,
  numberCardsToShowTablet,
  numberCardsToShowMobile,
  quantityLoadingMoviesLaptop,
  quantityLoadingMoviesTablet,
} from '../../utils/constants';

import './MoviesCardList.css';
// const movies = [
//   {
//     movieId: 1,
//     nameRU: '33 слова о дизайне',
//     duration: '1ч 42м',
//     image: 'https://iili.io/H4evIpe.jpg',
//     isLiked: true,
//   },
//   {
//     movieId: 2,
//     nameRU: 'Киноальманах «100 лет дизайна»',
//     duration: '1ч 42м',
//     image: 'https://iili.io/H4evxY7.jpg',
//   },
//   {
//     movieId: 3,
//     nameRU: 'В погоне за Бенкси',
//     duration: '1ч 42м',
//     image: 'https://iili.io/H4evzv9.jpg',
//   },
//   {
//     movieId: 4,
//     nameRU: 'Баския: Взрыв реальности',
//     duration: '1ч 42м',
//     image: 'https://iili.io/H4evo2S.jpg',
//   },
//   {
//     movieId: 5,
//     nameRU: 'Бег это свобода',
//     duration: '1ч 42м',
//     image: 'https://iili.io/H4evuTu.jpg',
//   },
//   {
//     movieId: 6,
//     nameRU: 'Книготорговцы',
//     duration: '1ч 42м',
//     image: 'https://iili.io/H4evAhb.jpg',
//     isLiked: true,
//   },
//   {
//     movieId: 7,
//     nameRU: 'Когда я думаю о Германии ночью',
//     duration: '1ч 42м',
//     image: 'https://iili.io/H4evRQj.jpg',
//   },
// ];

function MoviesCardList({ movies, savedMovies, onSaveMovie, onDeleteMovie }) {
  const location = useLocation();
  let size = useResize();
  const [countShowMovies, setCountShowMovies] = React.useState(0);

  React.useEffect(() => {
    setCountShowMovies(0);
  }, [movies]);

  const showMovies = React.useMemo(() => {
    const sizeCount =
      size.width < mobileWidth ? numberCardsToShowMobile : size.width < tabletWidth ? numberCardsToShowTablet : numberCardsToShowLaptop;

    return movies.slice(0, sizeCount + countShowMovies);
  }, [movies, countShowMovies, size]);

  return (
    <section className="movie-library">
      <div className="container">
        <ul className="movie-library__list">
          {showMovies.map((movie) => (
            <MoviesCard
              movie={movie}
              key={movie.id || movie.movieId}
              savedMovies={savedMovies}
              onSaveMovie={onSaveMovie}
              onDeleteMovie={onDeleteMovie}
            />
          ))}
        </ul>
        {location.pathname === '/movies' && movies.length > showMovies.length && (
          <button
            className="movie-library__btn"
            onClick={() => {
              setCountShowMovies((item) => item + (size.width >= laptopWidth ? quantityLoadingMoviesLaptop : quantityLoadingMoviesTablet));
            }}
          >
            Ещё
          </button>
        )}
      </div>
    </section>
  );
}

export default MoviesCardList;
