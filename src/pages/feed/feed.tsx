import { useEffect, FC } from 'react';
import { useDispatch, useSelector } from '../../services/types/hooks';

import styles from './feed.module.css';

import { wsConnectionClosed, wsConnectionRequest } from '../../services/actions/wsActionTypes';

import OrderCard from '../../components/feed-components/order-card/order-card';
import OrderPreparationTitle from '../../components/feed-components/order-preparation-title/order-preparation-title';
import TotalNumbers from '../../components/feed-components/total-numbers/total-numbers';
import OrderNumber from '../../components/feed-components/order-number/order-number';

const Feed: FC = () => {
  const dispatch = useDispatch();
  const { orders, total, totalToday } = useSelector(store => ({
    orders: store.orders.orders,
    total: store.orders.total,
    totalToday: store.orders.totalToday,
  }));

  useEffect(() => {
    dispatch(wsConnectionRequest('wss://norma.nomoreparties.space/orders/all'));

    return () => {
      dispatch(wsConnectionClosed());
    }
  }, [dispatch]);

  const orderElement = orders.map(order => (
    <OrderCard 
      key={order._id}
      id={order._id}
      linkTo={"feed"}
      preparation={null}
      cardTitle={order.name}
      orderNumber={order.number}
      orderCreatedAt={order.createdAt}
      orderIng={order.ingredients}
    />
  ));

  return (
    <main className={styles.main}>
      <h1 className={`${styles.title} text text_type_main-large mt-10 mb-5`}>Лента заказов</h1>
      <div className={styles.feedContent}>
        <ul className={`${styles.feedContainer}`}>
          {orderElement}
        </ul>
        <div className={`${styles.orderPreparation} ml-15`}>
          <div className={`${styles.ordersTable} mb-10`}>
            <div className={`mr-9`}>
              <OrderPreparationTitle title="Готовы:" />
              <div className={`${styles.orderTableContent} mt-6`}>
                {
                  orders.map(order => order.status === 'done' && <OrderNumber key={order._id} color="#00CCCC" orderNum={order.number} />)
                }
              </div>
            </div>
            <div>
              <OrderPreparationTitle title="В работе:" />
              <div className={`${styles.orderTableContent} mt-6`}>
                {
                  orders.map(order => order.status === 'pending' && <OrderNumber key={order._id} orderNum={order.number} />)
                }
              </div>
            </div>
          </div>
          <div className={`mb-10`}>
            <OrderPreparationTitle title="Выполнено за все время:" />
            <TotalNumbers totalNum={total} />
          </div>
          <div>
            <OrderPreparationTitle title="Выполнено за сегодня:" />
            <TotalNumbers totalNum={totalToday} />
          </div>
  
        </div>
      </div>
    </main>
  );
};

export default Feed;