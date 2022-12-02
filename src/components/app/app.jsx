import { useReducer, useEffect, useState } from 'react';
import { BurgerContext } from '../../utils/burgerContext';
import { getIngredients } from '../../utils/api';

import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';

import styles from './app.module.css';

const initialTotalPriceState = { 
  bun: null,
  filling: [],
  totalPrice: 0,
  order: []
};

function constructorReducer(state, action) {
  switch (action.type) {
    case 'add':
      if (action.payload.type === 'bun') {
        return { 
          ...state,
          bun: action.payload,
          totalPrice: state.totalPrice + action.payload.price * 2,
          order: [...state.order, action.payload._id]
        };
      } else {
        return { 
          ...state,
          filling: [...state.filling, action.payload],
          totalPrice: state.totalPrice + action.payload.price,
          order: [...state.order, action.payload._id]
        };
      }
    case 'delete':
      return { totalPrice: state.totalPrice - action.payload.price }
    case 'reset':
      return initialTotalPriceState;
    default:
      throw new Error(`Wrong type of action: ${action.type}`);
  }
}

function App() {
  const [allIngredients, setAllIngredients] = useState([]);
  const [constructorState, constructorDispatcher] = useReducer(constructorReducer, initialTotalPriceState);

  useEffect(() => {
    getIngredients(setAllIngredients);
  }, [])
  
  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={styles.main}>
        <BurgerContext.Provider value={[constructorState, constructorDispatcher]}>
          <BurgerIngredients ingredients={allIngredients} />
          <BurgerConstructor />
        </BurgerContext.Provider>
      </main>
    </div>
  );
}

export default App;
