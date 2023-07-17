import { MOVIES_URL } from '../utils/constants';

export default class MoviesApi {
  constructor({ url, header }) {
    this._url = url;
    this._headers = header;
  }

  _checkResponse(response) {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(`Произошла ошибка: ${response.status}`);
  }

  _request(url, options) {
    return fetch(url, options).then((res) => this._checkResponse(res));
  }

  getAllMovies() {
    return this._request(`${this._url}/beatfilm-movies`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

export const moviesApi = new MoviesApi({
  url: `${MOVIES_URL}`,
  headers: {
    'Content-Type': 'application/json',
  },
});
