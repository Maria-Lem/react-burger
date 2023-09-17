import { FC } from 'react';
import { useSelector } from '../../../services/types/hooks';

import styles from './order-created.module.css';

import { CheckMarkIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const OrderCreated: FC = () => {
  const { orderNumber } = useSelector(store => ({
    orderNumber: store.order.orderNumber
  }));
  
  return (
    <div className={`${styles.modalContent} pt-30 pb-30`}>
      <p className={`${styles.orderNumber} text text_type_digits-large mb-8`}>{orderNumber}</p>
      <p className={`text text_type_main-medium mb-15`}>идентификатор заказа</p>
      <div className={`${styles.checkmarkContainer} mb-15`}>
        <CheckMarkIcon type="primary" />
      </div>
      <p className={`text text_type_main-default mb-2`}>Ваш заказ начали готовить</p>
      <p className={`text text_type_main-default text_color_inactive`}>Дождитесь готовности на орбитальной станции</p>
    </div>
  )
};

export default OrderCreated;