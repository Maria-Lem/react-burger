import { useState } from 'react';
import styles from './burger-ingredients.module.css';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerIngredients() {
  const [current, setCurrent] = useState('buns');

  return (
    <div className={`${styles.burgerIngredients}`}>
      <h1 className={`${styles.title} text text_type_main-large`}>Соберите бургер</h1>
      <div className={`${styles.ingredientsNav}`}>
        <Tab value="buns" active={current === 'buns'} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="sauces" active={current === 'sauces'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="fillings" active={current === 'fillings'} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
    </div>
  )
}

export default BurgerIngredients;