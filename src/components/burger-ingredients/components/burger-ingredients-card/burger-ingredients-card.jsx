import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './burger-ingredients-card.module.css';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerIngredientsCard( props ) {
  // eslint-disable-next-line no-unused-vars
  const [counter, setCounter] = useState(1);
  
  return (
    <>
      <li className={`${styles.card} pl-4 pr-2 mb-8`} onClick={props.openModal} >
        {
          counter !== 0 && 
            <span className={`${styles.counter} text text_type_digits-default`}>
              {counter}
            </span>
        }
        <img className={`${styles.image} ml-4 mr-4`} src={props.image} alt={props.name}/>
        <div className={`${styles.price} mt-1 mb-1`}>
          <span className={`${styles.priceVal} text text_type_digits-default`}>{props.price}</span>
          <CurrencyIcon type="primary" />
        </div>
        <p className={`${styles.cardTitle} text text_type_main-default`}>{props.name}</p>
      </li>
    </>
  )
}

BurgerIngredientsCard.propTypes = {
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
}

export default BurgerIngredientsCard;