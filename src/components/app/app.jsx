import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getBurgerIngredients } from '../../services/actions/ingredients';

import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';

import styles from './app.module.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBurgerIngredients());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={styles.main}>
        <BurgerIngredients />
        <BurgerConstructor />
      </main>
    </div>
  );
}

export default App;
