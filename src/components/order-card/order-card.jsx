import { Link, useLocation } from 'react-router-dom';

import styles from './order-card.module.css';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

export default function OrderCard({ id, cardTitle, orderNumber, orderCreatedAt, orderPrice }) {
  const location = useLocation();
  return (
    <Link 
      to={{ pathname: `/feed/${id}` }}
      state={{ background: location }}
      className={styles.orderCard}
    >
      <li className={styles.listItem}>
        <div className={`${styles.listItem}`}>
          <p className={`${styles.listItem}`}>#{orderNumber}</p>
          <p className={`${styles.listItem}`}>{orderCreatedAt}</p>
        </div>
        <h4 className={`${styles.listItem}`}>{cardTitle}</h4>
        <div className={`${styles.listItem}`}>
          <div className={`${styles.listItem}`}>

          </div>
          <div className={`${styles.listItem}`}>
            <span className={`${styles.listItem}`}>{orderPrice}</span>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </li>
    </Link>
  );
}