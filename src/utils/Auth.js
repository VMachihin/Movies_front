import { BASE_URL } from './constants';

export default class Auth {
  constructor({ url }) {
    this._url = url;
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

  register(name, email, password) {
    return this._request(`${this._url}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });
  }

  authorization(email, password) {
    return this._request(`${this._url}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
  }

  checkToken(token) {
    return this._request(`${this._url}/users/me`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
  }
}

export const auth = new Auth({
  url: BASE_URL,
});

// export function register(name, email, password) {
//   return request(`${BASE_URL}/signup`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ name, email, password }),
//   });
// }

// export function authorization(email, password) {
//   return request(`${BASE_URL}/signin`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ email, password }),
//   });
// }

// export function checkToken(token) {
//   return request(`${BASE_URL}/users/me`, {
//     method: 'GET',
//     headers: {
//       authorization: `Bearer ${token}`,
//       'Content-Type': 'application/json',
//     },
//   });
// }
