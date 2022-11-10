import { useState } from 'react';
import styles from './burger-ingredients.module.css';
import BurgerIngredientsList from './components/burger-ingredients-list/burger-ingredients-list';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerIngredients() {
  const [current, setCurrent] = useState('bun');

  return (
    <>
      <h1 className={`${styles.title} text text_type_main-large mt-10 mb-5`}>Соберите бургер</h1>
      <div className={`${styles.burgerIngredients} mr-10`}>
        <div className={`${styles.ingredientsNav}`}>
          <Tab value="bun" active={current === 'bun'} onClick={setCurrent}>
            Булки
          </Tab>
          <Tab value="sauce" active={current === 'sauce'} onClick={setCurrent}>
            Соусы
          </Tab>
          <Tab value="main" active={current === 'main'} onClick={setCurrent}>
            Начинки
          </Tab>
        </div>
        <div className={`${styles.ingredientsContainer}`}>
          <BurgerIngredientsList ingredientType="Булки" type="bun" />
          <BurgerIngredientsList ingredientType="Соусы" type="sauce" />
          <BurgerIngredientsList ingredientType="Начинки" type="main" />
        </div>
      </div>
    </>
  )
}

export default BurgerIngredients;