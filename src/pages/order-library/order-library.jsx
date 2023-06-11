import styles from './order-library.module.css';

import ProfileMenu from '../../components/profile-menu/profile-menu';
import { useDispatch, useSelector } from 'react-redux';
import { getCookie } from '../../utils/utils';
import { useEffect } from 'react';
import { wsConnectionClosed, wsConnectionRequest } from '../../services/actions/wsActionTypes';
import OrderCard from '../../components/feed-components/order-card/order-card';
import Loader from '../../components/loader/loader';

export default function OrderLibrary() {
  const dispatch = useDispatch();
  const { orders } = useSelector(store => ({
    orders: store.orders.orders
  }));
  // console.log('orders: ', orders);

  const accessToken = getCookie('accessToken');
  
  useEffect(() => {
    dispatch(wsConnectionRequest(`wss://norma.nomoreparties.space/orders?token=${accessToken}`));

    return () => {
      dispatch(wsConnectionClosed());
    }
  }, [accessToken, dispatch]);
  
  if (!orders) {
    return <Loader />
  }

  const orderElement = orders.map(order => (
    <OrderCard 
      key={order._id}
      id={order._id}
      linkTo={"react-burger/profile/orders"}
      cardTitle={order.name}
      orderNumber={order.number}
      preparation={order.status}
      orderCreatedAt={order.createdAt}
      orderIng={order.ingredients}
    />
  ));

  return (
    <main className={`${styles.profileContent} pt-30`}>
      <ProfileMenu />
      {!orders && <h2 className={`${styles.text} text text_type_main-medium`}>Здесь будет история Ваших заказов.</h2>}
      <ul className={`${styles.feedContainer}`}>
        {orderElement.reverse()}
      </ul>
    </main>
  );
}