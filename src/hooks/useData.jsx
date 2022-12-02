import { useState, useEffect } from 'react';

function useData() {
  const [allIngredients, setAllIngredients] = useState([]);
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
  }

  useEffect(() => {
    fetch(`${burgerApiUrl.baseUrl}/ingredients`)
      .then(getResponse)
      .then(data => setAllIngredients(data.data))
      .catch((error) => {
        console.error('Error:', error);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const createOrder = (idArray, setOrderNumber) => {
    return fetch(`${burgerApiUrl.baseUrl}/orders`, {
      method: 'POST',
      headers: burgerApiUrl.headers,
      body: JSON.stringify({
        ingredients: idArray
      })
    })
      .then(getResponse)
      .then(data => setOrderNumber(data.order.number))
  }

  return {allIngredients, createOrder};
}

export default useData;