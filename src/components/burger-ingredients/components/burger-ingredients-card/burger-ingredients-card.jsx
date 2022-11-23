import { useState } from 'react';
import { ingredientPropTypes } from '../../../../utils/types';
import styles from './burger-ingredients-card.module.css';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerIngredientsCard({ ingredient, openModal }) {
  // eslint-disable-next-line no-unused-vars
  const [counter, setCounter] = useState(1);
  
  return (
    <>
      <li className={`${styles.card} pl-4 pr-2 mb-8`} onClick={openModal} >
        {
          counter !== 0 && 
            <span className={`${styles.counter} text text_type_digits-default`}>
              {counter}
            </span>
        }
        <img className={`${styles.image} ml-4 mr-4`} src={ingredient.image} alt={ingredient.name}/>
        <div className={`${styles.price} mt-1 mb-1`}>
          <span className={`${styles.priceVal} text text_type_digits-default`}>{ingredient.price}</span>
          <CurrencyIcon type="primary" />
        </div>
        <p className={`${styles.cardTitle} text text_type_main-default`}>{ingredient.name}</p>
      </li>
    </>
  )
}

BurgerIngredientsCard.propTypes = {
  ingredient: ingredientPropTypes.isRequired
}

export default BurgerIngredientsCard;