import { useState, useEffect } from 'react';

function useData() {
  const [allIngredients, setAllIngredients] = useState([]);
  const burgerApiUrl = 'https://norma.nomoreparties.space/api';

  const getResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  useEffect(() => {
    fetch(`${burgerApiUrl}/ingredients`)
      .then(getResponse)
      .then(data => setAllIngredients(data.data))
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return {allIngredients};
}

export default useData;