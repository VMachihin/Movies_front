import { headers } from './MoviesApi';
import { BASE_URL } from './constants';

export function request(url, options) {
  return fetch(url, options).then((res) => checkResponse(res));
}

export function checkResponse(response) {
  if (response.ok) {
    return response.json();
  }
  return Promise.reject(`Произошла ошибка: ${response.status}`);
}

export function getUserInfo() {
  return request(`${BASE_URL}/users/me`, { headers: headers });
}

export function editingProfile(userData) {
  return request(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    headers: headers,
    body: JSON.stringify({
      name: userData.name,
      email: userData.email,
    }),
  });
}
