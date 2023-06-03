import { Link, useLocation, useParams } from 'react-router-dom';

import styles from './order-card.module.css';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from 'react-redux';

export default function OrderCard({ id, cardTitle, preparation = null, orderNumber, orderCreatedAt }) {
  const location = useLocation();
  const params = useParams();

  const { ingredients } = useSelector(store => ({
    ingredients: store.ingredients.ingredients,
  }));

  const orderIngredients = ingredients.filter(ing => ing._id === params.id);

  // TODO orderPrice func
  // const orderPrice = orderIngredients.map(ing => {
  //   ing.type === 'bun' ? ing.price * 2 : 
  // });
  // orderIngredients.type === 'bun' ?  orderIngredients.reduce((accumulator, currentSum) => )

  return (
    <Link 
      to={{ pathname: `/feed/${id}` }}
      state={{ background: location }}
      className={styles.orderCard}
    >
      <li className={styles.listItem}>
        <div className={`${styles.orderInfo}`}>
          <p className={`${styles.orderNumber} text text_type_digits-default`}>#{orderNumber}</p>
          <p className={`${styles.orderCreatedAt} text text_type_main-default text_color_inactive`}>{orderCreatedAt}</p>
        </div>
        <h4 className={`${styles.cardTitle} text text_type_main-medium`}>{cardTitle}</h4>
        <p className={`${styles.preparation} text text_type_main-small`}>{preparation}</p>
        <div className={`${styles.ingredientsInfo}`}>
          <div className={`${styles.ingredients}`}>
            {/* TODO ingredients's imgs */}
          </div>
          <div className={`${styles.orderPrice}`}>
            {/* <span className={`${styles.price} text text_type_digits-default`}>{orderPrice}</span> */}
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </li>
    </Link>
  );
}