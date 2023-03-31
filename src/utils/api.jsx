const burgerApiUrl = {
  baseUrl: 'https://norma.nomoreparties.space/api',
  headers: {
    'Content-Type': 'application/json'
  }
};

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
  return request(`${burgerApiUrl.baseUrl}/ingredients`);
};

export const createOrder = (orderList) => {
  return request(`${burgerApiUrl.baseUrl}/orders`, {
    method: 'POST',
    headers: burgerApiUrl.headers,
    body: JSON.stringify({
      ingredients: orderList
    })
  });
};

export const register = (email, password, name) => {
  return request(`${burgerApiUrl.baseUrl}/auth/register`, {
    method: 'POST',
    headers:burgerApiUrl.headers,
    body: JSON.stringify({
      email,
      password,
      name,
    })
  });
};

export const forgotPassword = (email) => {
  return request(`${burgerApiUrl.baseUrl}/password-reset`, {
    method: 'POST',
    headers: burgerApiUrl.headers,
    body: JSON.stringify({
      email,
    })
  });
};

export const resetPassword = (password, token) => {
  return request(`${burgerApiUrl.baseUrl}/password-reset/reset`, {
    method: 'POST',
    headers: burgerApiUrl.headers,
    body: JSON.stringify({
      password,
      token,
    })
  });
};