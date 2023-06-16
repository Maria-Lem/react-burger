import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

import styles from './order-card.module.css';

import OrderIngredientIcon from '../order-ingredient-icon/order-ingredient-icon';

import { getFormattedDate, orderPrice, preparationStatus, preparationStatusColor } from '../../../utils/utils';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

export default function OrderCard({ id, cardTitle, preparation = null, orderNumber, orderCreatedAt, orderIng, linkTo }) {
  const location = useLocation();

  const { ingredients } = useSelector(store => ({
    ingredients: store.ingredients.ingredients,
  }));

  const orderIngredients = ingredients.filter(ing => orderIng.includes(ing._id) && ing);

  return (
    <Link 
      to={{ pathname: `/${linkTo}/${id}` }}
      state={{ background: location }}
      className={`${styles.orderCard} mb-4 mr-2`}
    >
      <li className={`${styles.listItem} p-6`}>
        <div className={`${styles.orderInfo} mb-6`}>
          <p className={`${styles.orderNumber} text text_type_digits-default`}>#{orderNumber}</p>
          <p className={`${styles.orderCreatedAt} text text_type_main-default text_color_inactive`}>{getFormattedDate(new Date(Date.parse(orderCreatedAt)), new Date())}</p>
        </div>
        <h4 className={`${styles.cardTitle} text text_type_main-medium`}>{cardTitle}</h4>
        <p className={`${styles.preparation} text text_type_main-small mt-2`} style={preparationStatusColor(preparation)}>{preparationStatus(preparation)}</p>
        <div className={`${styles.ingredientsInfo} mt-6`}>
          <ul className={`${styles.ingredients}`}>
            {orderIngredients.slice(0, 5).map((ingredient, i) => {
              return (
                <li key={nanoid()}>
                  <OrderIngredientIcon
                    icon={ingredient.image_mobile} 
                    name={ingredient.name} 
                    index={i} 
                    length={orderIngredients.length} 
                  />
                </li>
              )
            })}
            {orderIngredients.length > 5 && (
              <li className={`${styles.extraIng} ${styles.ingredientItem}`} style={{ zIndex: 1 }}>
                <p className={`${styles.extraIngText} text text_type_main-default`}>+{orderIngredients.length - 5}</p>
                <img className={`${styles.ingredientIcon} ${styles.ingredientExtraIcon}`} src={orderIngredients[5].image_mobile} alt={orderIngredients[5].name} />
              </li>
            )}
          </ul>
          <div className={`${styles.orderPrice}`}>
            <span className={`${styles.price} text text_type_digits-default mr-2`}>
              {orderPrice(orderIng, ingredients)}
            </span>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </li>
    </Link>
  );
}