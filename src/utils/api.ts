import { getCookie } from "./utils";
import { burgerApiUrl } from "./variables";

const getResponse = (res: Response) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

export const request = (url: string, options: any) => {
  return fetch(url, options)
    .then(getResponse);
};

export const getIngredients = () => {
  return request(`${burgerApiUrl.baseUrl}/ingredients`, {
    method: 'GET',
    headers: burgerApiUrl.headers
  });
};

export const createOrder = (orderList: string[] | undefined) => {
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

export const register = (email: string, password: string, name: string) => {
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

export const logIn = (email: string, password: string) => {
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

export const patchUser = (
  name: string, 
  email: string, 
  password: string, 
  accessToken: string
) => {
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

export const forgotPasswordRequest = (email: string) => {
  return request(`${burgerApiUrl.baseUrl}/password-reset`, {
    method: 'POST',
    headers: burgerApiUrl.headers,
    body: JSON.stringify({
      email,
    })
  });
};

export const resetPasswordRequest = (password: string, token: string) => {
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

export const logOut = (refreshToken: string | null) => {
  return request(`${burgerApiUrl.baseUrl}/auth/logout`, {
    method: 'POST',
    headers: burgerApiUrl.headers,
    body: JSON.stringify( {
      token: refreshToken
    })
  });
};