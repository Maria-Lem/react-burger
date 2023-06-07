import { Link, useLocation, useParams } from 'react-router-dom';

import styles from './order-card.module.css';

import { orderPrice } from '../../../utils/utils';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import OrderIngredientIcon from '../order-ingredient-icon/order-ingredient-icon';

export default function OrderCard({ id, cardTitle, preparation = null, orderNumber, orderCreatedAt, orderIng }) {
  // console.log('orderIng: ', orderIng);
  const location = useLocation();
  // const params = useParams();
  // console.log('params: ', params.id);

  const { ingredients } = useSelector(store => ({
    ingredients: store.ingredients.ingredients,
  }));

  const orderIngredients = ingredients.filter(ing => orderIng.includes(ing._id) && ing);

  return (
    <Link 
      to={{ pathname: `/feed/${id}` }}
      state={{ background: location }}
      className={`${styles.orderCard} mb-4 mr-2`}
    >
      <li className={`${styles.listItem} p-6`}>
        <div className={`${styles.orderInfo} mb-6`}>
          <p className={`${styles.orderNumber} text text_type_digits-default`}>#{orderNumber}</p>
          <p className={`${styles.orderCreatedAt} text text_type_main-default text_color_inactive`}>{orderCreatedAt}</p>
        </div>
        <h4 className={`${styles.cardTitle} text text_type_main-medium mb-6`}>{cardTitle}</h4>
        <p className={`${styles.preparation} text text_type_main-small`}>{preparation}</p>
        <div className={`${styles.ingredientsInfo}`}>
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
            <span className={`${styles.price} text text_type_digits-default`}>
              {orderPrice(orderIng, ingredients)}
            </span>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </li>
    </Link>
  );
}