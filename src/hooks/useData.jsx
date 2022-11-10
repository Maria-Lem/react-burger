import { useState, useEffect } from 'react';

function useData() {
  const [allIngredients, setAllIngredients] = useState([]);
  const url = 'https://norma.nomoreparties.space/api';

  useEffect(() => {
    fetch(`${url}/ingredients`)
      .then(res => res.json())
      .then(data => setAllIngredients(data.data))
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return {allIngredients};
}

export default useData;