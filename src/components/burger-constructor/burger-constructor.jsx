import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createNewOrder } from '../../services/actions/order';

import styles from './burger-constructor.module.css';
import BurgerConstructorCard from './components/burger-constructor-card/burger-constructor-card';
import Modal from '../modals/modal/modal';
import OrderDetails from '../modals/order-details/order-details';

import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerConstructor() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const { bun, filling, totalPrice, orderList } = useSelector(store => ({
    bun: store.burger.bun,
    filling: store.burger.filling,
    totalPrice: store.burger.totalPrice,
    orderList: store.burger.orderList
  }));

  const openModal = () => {
    setIsOpen(true);
    dispatch(createNewOrder(orderList));
  }

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className={`${styles.burgerConstructor} ml-3 mr-3 mb-10`}>
        {!bun && filling.length === 0 && 
          <p className={`${styles.emptyBurgerConstructor} text text_type_main-default`}>Вы ещё не добавили ни одного ингредиента из меню</p>
        }
        {bun && <ConstructorElement
          type="top"
          isLocked={true}
          text={`${bun.name} (верх)`}
          price={bun.price}
          thumbnail={bun.image}
        />}
        <ul className={`${styles.burgerConstructorFilling}`}>
          {filling.map(card => {
            return (
              <BurgerConstructorCard 
                key={card._id}
                ingredient={card}
              />
            )
          })}
        </ul>
        {bun && <ConstructorElement
          type="bottom"
          isLocked={true}
          text={`${bun.name} (низ)`}
          price={bun.price}
          thumbnail={bun.image}
        />}
      </div>
      <div className={`${styles.orderDetails}`}>
        <div className={`${styles.priceTotal} mr-10`}>
          <span className={`${styles.priceValTotal} text text_type_digits-medium`}>
            {totalPrice}
          </span>
          <CurrencyIcon type="primary" />
        </div>
        <Button type="primary" size="large" onClick={openModal}>
          Оформить заказ
        </Button>
      </div>
      <Modal openModal={isOpen} closeModal={closeModal}>
        <OrderDetails />
      </Modal>
    </div>
  )
}

export default BurgerConstructor;