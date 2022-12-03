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
  return Promise.reject(`Ошибка: ${res.status}`);
};

const request = (url, options) => {
  return fetch(url, options)
    .then(getResponse);
};

export const getIngredients = (setAllIngredients) => {
  return request(`${burgerApiUrl.baseUrl}/ingredients`)
    .then(data => setAllIngredients(data.data))
    .catch((error) => {
      console.error('Error:', error);
    });
};

export const createOrder = (idArray, setOrderNumber) => {
  return request(`${burgerApiUrl.baseUrl}/orders`, {
    method: 'POST',
    headers: burgerApiUrl.headers,
    body: JSON.stringify({
      ingredients: idArray
    })
  })
    .then(data => setOrderNumber(data.order.number))
    .catch((error) => {
      console.error('Error:', error);
    });
};