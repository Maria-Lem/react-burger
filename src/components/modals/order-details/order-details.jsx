import { useParams } from 'react-router-dom';
import styles from './order-details.module.css';
import { useSelector } from 'react-redux';
import Loader from '../../loader/loader';

export default function OrderDetails() {
  const params = useParams();
  console.log('params: ', params);

  const { orders } = useSelector(store => ({
    orders: store.orders.orders,
  }));
  console.log('orders: ', orders);

  const order = orders.find(order => order._id === params.id);

  if (!order) {
    return <Loader />
  }

  return (
    <>
      <div className={`${styles.modalContent} pt-10 pr-10 pb-15 pl-10`}>
        <h3 className={`${styles.title} text text_type_main-large`}>Детали ингредиента</h3>
        <img className={`mb-4`} src={order.image_large} alt={order.name} />
        <h5 className={`${styles.cardTitle} text text_type_main-medium mb-8`}>{order.name}</h5>
        <ul className={`${styles.nutrition} text_color_inactive`}>
          <li className={`${styles.nutritionItem} mr-5`}>
            <p className={`text text_type_main-default`}>Калории,ккал</p>
            <span className={`text text_type_digits-default`}>{order.calories}</span>
          </li>
          <li className={`${styles.nutritionItem} mr-5`}>
            <p className={`text text_type_main-default`}>Белки, г</p>
            <span className={`text text_type_digits-default`}>{order.proteins}</span>
          </li>
          <li className={`${styles.nutritionItem} mr-5`}>
            <p className={`text text_type_main-default`}>Жиры, г</p>
            <span className={`text text_type_digits-default`}>{order.fat}</span>
          </li>
          <li className={`${styles.nutritionItem}`}>
            <p className={`text text_type_main-default`}>Углеводы, г</p>
            <span className={`text text_type_digits-default`}>{order.carbohydrates}</span>
          </li>
        </ul>
      </div>
    </>
  );
}