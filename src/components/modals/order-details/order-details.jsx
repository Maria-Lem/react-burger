import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styles from './order-details.module.css';

import Loader from '../../loader/loader';

import { orderPrice } from '../../../utils/utils';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import OrderIngredientIcon from '../../feed-components/order-ingredient-icon/order-ingredient-icon';

export default function OrderDetails() {
  const params = useParams();

  const { orders, ingredients } = useSelector(store => ({
    orders: store.orders.orders,
    ingredients: store.ingredients.ingredients,
  }));
  // console.log('orders: ', orders);

  const order = orders.find(order => order._id === params.id);

  const orderIngredients = order.ingredients.map(id => ingredients.find(ing => ing._id === id));
  // console.log('orderIngredients: ', orderIngredients);
  orderIngredients.forEach(ing => {
    ing.quantity = 0;
    orderIngredients.forEach(i => i._id === ing._id && ing.quantity++);

    if (ing.type === 'bun' && ing.quantity !== 2) {
      ing.quantity = 2;
    }
  });

  const uniqueOrderIngredients = Array.from(orderIngredients.reduce((a, o) => a.set(o._id, o), new Map()).values());

  if (!order) {
    return <Loader />
  }

  return (
    <>
      <div className={`${styles.modalContent} pt-10 pr-10 pb-15 pl-10`}>
        <p className={`${styles.orderNumber} text text_type_digits-default mb-10`}>#{order.number}</p>
        <h4 className={`${styles.title} text text_type_main-medium mb-3`}>{order.name}</h4>
        <p className={`${styles.title} text text_type_main-default mb-15`}>{order.status}</p>
        <p className={`${styles.title} text text_type_main-medium mb-6`}>Состав:</p>
        <ul className={`${styles.ingredients} mb-10`}>
          {uniqueOrderIngredients.map(ingredient => {
            return (
              <li key={ingredient._id} className={`${styles.ingredientInfo} mb-4 mr-6`}>
                <OrderIngredientIcon
                  icon={ingredient.image_mobile} 
                  name={ingredient.name} 
                  index={0} 
                  length={1}
                />
                <p className={`${styles.ingredientTitle} text text_type_main-default`}>{ingredient.name}</p>
                <div className={`${styles.orderPrice}`}>
                  <p className={`${styles.ingredientPrice} text text_type_digits-default mr-2`}>
                    {ingredient.quantity} x {ingredient.price}
                  </p>
                  <CurrencyIcon type="primary" />
                </div>
              </li>
            )
          })}
        </ul>
        <div className={`${styles.orderInfo}`}>
          <p className={`${styles.orderCreatedAt} text text_type_main-default text_color_inactive`}>{order.createdAt}</p>
          <div className={`${styles.orderPrice}`}>
            <p className={`${styles.price} text text_type_digits-default mr-2`}>
              {orderPrice(order.ingredients, ingredients)}
            </p>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </div>
    </>
  );
}