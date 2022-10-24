import React, { useState, useEffect } from 'react';
import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';

import './app.css';

function App() {
  const [allIngredients, setAllIngredients] = useState([]);
  // console.log('allIngredients: ', allIngredients);

  useEffect(() => {
    fetch(`https://norma.nomoreparties.space/api/ingredients`)
      .then(res => res.json())
      .then(data => setAllIngredients(data.data))
  }, []);

  return (
    <div className="App">
      <AppHeader />
      <main className="main">
        <BurgerIngredients />
        <BurgerConstructor />
      </main>
    </div>
  );
}

export default App;
