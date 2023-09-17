import { useEffect } from 'react';
import { useDispatch, useSelector } from '../../services/types/hooks';

import styles from './order-library.module.css';

import ProfileMenu from '../../components/profile-menu/profile-menu';
import OrderCard from '../../components/feed-components/order-card/order-card';
import Loader from '../../components/loader/loader';

import { getCookie } from '../../utils/utils';
import { wsConnectionClosed, wsConnectionRequest } from '../../services/actions/wsActionTypes';
import { Navigate } from 'react-router-dom';

export default function OrderLibrary() {
  const dispatch = useDispatch();
  const { orders, wsRequest, wsError, wsClosed, wsOpen } = useSelector(store => ({
    orders: store.orders.orders,
    wsRequest: store.orders.wsRequest,
    wsError: store.orders.wsError,
    wsClosed: store.orders.wsClosed,
    wsOpen: store.orders
  }));
  console.log('wsOpen: ', wsOpen);
  
  const accessToken = getCookie('accessToken');
  console.log('accessToken: ', accessToken);
  
  useEffect(() => {
    dispatch(wsConnectionRequest(`wss://norma.nomoreparties.space/orders?token=${accessToken}`));

    return () => {
      dispatch(wsConnectionClosed());
    }
  }, [accessToken, dispatch]);

  if (!accessToken) {
    return <Navigate to="/" />;
  }
  
  if (!orders) {
    return <Loader />;
  }

  const orderElement = orders.map(order => (
    <OrderCard 
      key={order._id}
      id={order._id}
      linkTo={"profile/orders"}
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
      {!orders || wsRequest || !wsError || <Loader />}
      {/* {wsClosed && <p>Closed</p>} */}
      {!orders && (wsClosed || wsError) && <h2 className={`${styles.text} text text_type_main-medium`}>Произошла ошибка, попробуйте обновить страницу.</h2>}
      {/* {!orders && wsRequest && !wsError && <h2 className={`${styles.text} text text_type_main-medium`}>Здесь будет история Ваших заказов.</h2>} */}
      {orders && <ul className={`${styles.feedContainer}`}>
        {orderElement.reverse()}
      </ul>}
    </main>
  );
}