import { Link, useLocation, useParams } from 'react-router-dom';

import styles from './order-card.module.css';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

export default function OrderCard({ id, cardTitle, preparation = null, orderNumber, orderCreatedAt, orderIng }) {
  // console.log('orderIng: ', orderIng);
  const location = useLocation();
  // const params = useParams();
  // console.log('params: ', params.id);

  const { ingredients } = useSelector(store => ({
    ingredients: store.ingredients.ingredients,
  }));

  const orderIngredients = ingredients.filter(ing => orderIng.includes(ing._id) && ing);

  // TODO orderPrice func
  // let orderPrice = 0
  // orderPrice += ingredients.forEach(ing => orderIng.includes(ing._id) && ing.price)
  const orderPrice = ingredients.forEach(ing => {
    // ing.type === 'bun' ? ing.price * 2 : 
    let price = 0;
    if (orderIng.includes(ing._id)) {
      console.log('ing: ', typeof(ing.price));

      price += Number(ing.price);
      console.log('price: ', price);

    }
    return price;
  });
  // orderIngredients.type === 'bun' ?  orderIngredients.reduce((accumulator, currentSum) => )

  return (
    <Link 
      to={{ pathname: `/feed/${id}` }}
      state={{ background: location }}
      className={`${styles.orderCard} mb-4`}
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
            {/* TODO ingredients's imgs */}
            {orderIngredients.slice(0, 5).map((ingredient, i) => {
              return (
                <li key={nanoid()} className={`${styles.ingredientItem}`} style={{ zIndex: `${orderIngredients.length - i}` }}>
                  <img className={`${styles.ingredientIcon}`} src={ingredient.image_mobile} alt={ingredient.name} />
                </li>
              )
            })}
            {orderIngredients.length > 5 && (
            <li className={`${styles.extraIng} ${styles.ingredientItem}`} style={{ zIndex: 1 }}>
              <p className={`${styles.extraIngText} text text_type_main-small`}>+{orderIngredients.length - 5}</p>
              <img className={`${styles.ingredientIcon}`} src={orderIngredients[5].image_mobile} alt={orderIngredients[5].name} />
            </li>
            )}
          </ul>
          <div className={`${styles.orderPrice}`}>
            <span className={`${styles.price} text text_type_digits-default`}>{orderPrice}</span>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </li>
    </Link>
  );
}