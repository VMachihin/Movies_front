import { request } from './MainApi';

import { BASE_URL, MOVIES_URL } from './constants';

export const headers = {
  'Content-Type': 'application/json',
  authorization: `Bearer ${localStorage.getItem('jwt')}`,
};

export function getAllMovies() {
  return request(`${MOVIES_URL}/beatfilm-movies`, { headers: headers });
}

export function getSavedMovies() {
  return request(`${BASE_URL}/movies`, { headers: headers });
}

export function saveMovie(movie) {
  return request(`${BASE_URL}/movies`, {
    headers: headers,
    method: 'POST',
    body: JSON.stringify({
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: `${MOVIES_URL}${movie.image.url}`,
      trailerLink: movie.trailerLink,
      thumbnail: `${MOVIES_URL}${movie.image.formats.thumbnail.url}`,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
    }),
  });
}

export function deleteMovie(id) {
  return request(`${BASE_URL}/movies/${id}`, {
    method: 'DELETE',
    headers: headers,
  });
}
