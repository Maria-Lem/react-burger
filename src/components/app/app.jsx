import { useReducer } from 'react';
import useData from '../../hooks/useData';
import { ConstructorContext } from '../../utils/constructorContext';

import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';

import styles from './app.module.css';

const initialTotalPriceState = { 
  bun: null,
  filling: [],
  totalPrice: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      if (action.payload.type === 'bun') {
        return { 
          ...state,
          bun: action.payload,
          totalPrice: state.totalPrice + action.payload.price * 2,
        };
      } else {
        return { 
          ...state,
          filling: [...state.filling, action.payload],
          totalPrice: state.totalPrice + action.payload.price,
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
  const {allIngredients} = useData();
  const [state, dispatch] = useReducer(reducer, initialTotalPriceState);
  
  if (allIngredients.length === 0) {
    return null;
  }
  
  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={styles.main}>
        <ConstructorContext.Provider value={[state, dispatch]}>
          <BurgerIngredients ingredients={allIngredients} />
          <BurgerConstructor />
        </ConstructorContext.Provider>
      </main>
    </div>
  );
}

export default App;
