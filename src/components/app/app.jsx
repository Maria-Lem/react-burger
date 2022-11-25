import useData from '../../hooks/useData';
import { IngredientsContext } from '../../utils/ingredientsContext';

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
        <IngredientsContext.Provider value={allIngredients}>
          <BurgerConstructor />
        </IngredientsContext.Provider>
      </main>
    </div>
  );
}

export default App;
