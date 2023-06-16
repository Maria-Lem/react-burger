import { getCookie } from "./utils";
import { burgerApiUrl } from "./variables";

// const burgerApiUrl = {
//   baseUrl: 'https://norma.nomoreparties.space/api',
//   headers: {
//     'Content-Type': 'application/json'
//   }
// };

const getResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

export const request = (url, options) => {
  return fetch(url, options)
    .then(getResponse);
};

export const getIngredients = () => {
  return request(`${burgerApiUrl.baseUrl}/ingredients`, {
    method: 'GET',
    headers: burgerApiUrl.headers
  });
};

export const createOrder = (orderList) => {
  return request(`${burgerApiUrl.baseUrl}/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: 'Bearer ' + getCookie('accessToken')
    },
    body: JSON.stringify({
      ingredients: orderList
    })
  });
};

export const register = (email, password, name) => {
  return request(`${burgerApiUrl.baseUrl}/auth/register`, {
    method: 'POST',
    headers: burgerApiUrl.headers,
    body: JSON.stringify({
      email,
      password,
      name,
    })
  });
};

export const logIn = (email, password) => {
  return request(`${burgerApiUrl.baseUrl}/auth/login`, {
    method: 'POST',
    headers: burgerApiUrl.headers,
    body: JSON.stringify({
      email,
      password,
    })
  });
};

export const getUser = () => {
  return request(`${burgerApiUrl.baseUrl}/auth/user`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: 'Bearer ' + getCookie('accessToken')
    },
  })
};

export const patchUser = (name, email, password, accessToken) => {
  return request(`${burgerApiUrl.baseUrl}/auth/user`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      authorization: accessToken
    },
    body: JSON.stringify({
      name,
      email,
      password
    })
  })
};

export const forgotPasswordRequest = (email) => {
  return request(`${burgerApiUrl.baseUrl}/password-reset`, {
    method: 'POST',
    headers: burgerApiUrl.headers,
    body: JSON.stringify({
      email,
    })
  });
};

export const resetPasswordRequest = (password, token) => {
  return request(`${burgerApiUrl.baseUrl}/password-reset/reset`, {
    method: 'POST',
    headers: burgerApiUrl.headers,
    body: JSON.stringify({
      password,
      token,
    })
  });
};

export const refreshTokenRequest = () => {
  return request(`${burgerApiUrl.baseUrl}/auth/token`, {
    method: 'POST',
    headers: burgerApiUrl.headers,
    body: JSON.stringify({
      token: localStorage.getItem('refreshToken')
    })
  });
};

export const logOut = (refreshToken) => {
  return request(`${burgerApiUrl.baseUrl}/auth/logout`, {
    method: 'POST',
    headers: burgerApiUrl.headers,
    body: JSON.stringify( {
      token: refreshToken
    })
  });
};