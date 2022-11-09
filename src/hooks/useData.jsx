import { useState, useEffect } from 'react';

function useData() {
  const [allIngredients, setAllIngredients] = useState([]);

  useEffect(() => {
    fetch(`https://norma.nomoreparties.space/api/ingredients`)
      .then(res => res.json())
      .then(data => setAllIngredients(data.data))
  }, []);

  return {allIngredients};
}

export default useData;