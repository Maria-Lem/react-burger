import styles from './feed.module.css';

import OrderCard from '../../components/feed-components/order-card/order-card';
import OrderPreparationTitle from '../../components/feed-components/order-preparation-title/order-preparation-title';

export default function Feed({ orderFeed }) {
  const orderElement = orderFeed.map(order => (
    <OrderCard 
      key={order._id}
      cardTitle={order.name}
      orderNumber={order.number}
      orderCreatedAt={order.createdAt}
    />
  ));

  return (
    <main className={styles.main}>
      <div className={styles.feedContainer}>
        <h1 className={`${styles.title} text text_type_main-large`}>Лента заказов</h1>
        {orderElement}
      </div>
      <div className={styles.orderPreparation}>
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
        <div>
          <OrderPreparationTitle title="Выполнено за все время:" />
          <p></p>
        </div>
        <div>
          <OrderPreparationTitle title="Выполнено за сегодня:" />
          <p></p>
        </div>

      </div>
    </main>
  );
}