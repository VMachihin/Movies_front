import { useLocation, Link } from 'react-router-dom';

import './MoviesCard.css';
import { converterMinutes } from '../../utils/utils';
import { MOVIES_URL } from '../../utils/constants';

function MoviesCard({ movie, savedMovies, onSaveMovie, onDeleteMovie }) {
  const location = useLocation();

  const savedMovie = savedMovies ? savedMovies.find((item) => item.movieId === movie.id) : '';
  const isSave = savedMovies ? savedMovies.some((item) => item.movieId === movie.id) : false;

  const imageUrl = movie.image.url ? `${MOVIES_URL}${movie.image.url}` : movie.image;

  function saveMovie() {
    onSaveMovie(movie, isSave, savedMovie);
  }

  function deleteMovie() {
    onDeleteMovie(movie._id);
  }
  return (
    <li className="movie-library__item">
      <article className="movie">
        <div className="movie__info">
          <h3 className="movie__title">{movie.nameRU}</h3>
          <span className="movie__duration">{converterMinutes(movie.duration)}</span>

          {location.pathname === '/movies' && (
            <button className={`movie__like-btn ${isSave ? `movie__like-btn_like` : ''}`} onClick={saveMovie} />
          )}

          {location.pathname === '/saved-movies' && <button className="movie__delete-btn" onClick={deleteMovie} />}
        </div>

        <Link to={movie.trailerLink} target="blank">
          <img src={imageUrl} alt="постер к фильму" className="movie__img" />
        </Link>
      </article>
    </li>
  );
}

export default MoviesCard;
