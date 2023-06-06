import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './feed.module.css';

import { wsConnectionClosed, wsConnectionRequest } from '../../services/actions/wsActionTypes';

import OrderCard from '../../components/feed-components/order-card/order-card';
import OrderPreparationTitle from '../../components/feed-components/order-preparation-title/order-preparation-title';

export default function Feed() {
  const dispatch = useDispatch();
  const { orders, total, totalToday } = useSelector(store => ({
    orders: store.orders.orders,
    total: store.orders.total,
    totalToday: store.orders.totalToday,
  }));
  // console.log('orders: ', orders);

  useEffect(() => {
    dispatch(wsConnectionRequest());

    return () => {
      dispatch(wsConnectionClosed());
    }
  }, [dispatch]);

  const orderElement = orders.map(order => (
    <OrderCard 
      key={order._id}
      id={order._id}
      cardTitle={order.name}
      orderNumber={order.number}
      orderCreatedAt={order.createdAt}
      orderIng={order.ingredients}
    />
    ));
    // console.log('orderElement: ', orderElement);

  return (
    <main className={styles.main}>
      <h1 className={`${styles.title} text text_type_main-large mt-10 mb-5`}>Лента заказов</h1>
      <div className={styles.feedContent}>
        <ul className={`${styles.feedContainer}`}>
          {orderElement}
        </ul>
        <div className={`${styles.orderPreparation} ml-15`}>
          <div className={styles.ordersTable}>
            <div>
              <OrderPreparationTitle title="Готовы:" />
              <div>
                <span></span>
              </div>
            </div>
            <div>
              <OrderPreparationTitle title="В работе:" />
              <div>
                <span></span>
              </div>
            </div>
          </div>
          <div>
            <OrderPreparationTitle title="Выполнено за все время:" />
            <p></p>
          </div>
          <div>
            <OrderPreparationTitle title="Выполнено за сегодня:" />
            <p></p>
          </div>
  
        </div>
      </div>
    </main>
  );
}