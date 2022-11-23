import useData from '../../hooks/useData';

import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';

import styles from './app.module.css';

function App() {
  const {allIngredients} = useData();
  
  if (allIngredients.length === 0) {
    return null;
  }
  
  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={styles.main}>
        <BurgerIngredients ingredients={allIngredients} />
        <BurgerConstructor ingredients={allIngredients} />
      </main>
    </div>
  );
}

export default App;
