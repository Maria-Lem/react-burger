import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useDrop } from 'react-dnd';

import styles from './burger-constructor.module.css';

import { createNewOrder } from '../../services/actions/order';
import { addIngredient, deleteIngredient } from '../../services/actions/burgerConstructor';
import { resetBurger } from '../../services/actions/burgerConstructor';

import BurgerConstructorCard from './components/burger-constructor-card/burger-constructor-card';
import Modal from '../modals/modal/modal';
import OrderCreated from '../modals/order-created/order-created';
import Loader from '../loader/loader';
import Failed from '../failed/failed';

import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerConstructor() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const { bun, filling, totalPrice, orderRequest, orderFailed, user } = useSelector(store => ({
    bun: store.burger.bun,
    filling: store.burger.filling,
    totalPrice: store.burger.totalPrice,
    orderRequest: store.order.orderRequest,
    orderFailed: store.order.orderFailed,
    user: store.user.user,
  }));

  const [{ isHover }, dropRef] = useDrop({
    accept: 'ingredient',
    collect: monitor => ({
      isHover: monitor.isOver(),
    }),
    drop(ingredient) {
      dispatch(addIngredient(ingredient))
    }
  });

  const orderListId = () => {
    if (bun && filling) {
      return  [bun._id, ...filling.map(ingredient => ingredient._id)]
    }
  };

  const openModal = () => {
    if (!user) {
      navigation('/login');
    } else {
      setIsOpen(true);
      dispatch(createNewOrder(orderListId()));
      if (!orderRequest && !orderFailed) {
        return dispatch(resetBurger());
      }
    }
  }

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleDelete = (ingredient) => {
    dispatch(deleteIngredient(ingredient))
  }

  const opacity = isHover ? 0.5 : 1;

  return (
    <div>
      <div ref={dropRef} style={{opacity}} className={`${styles.burgerConstructor} ml-3 mr-3 mb-10`}>
        {!bun 
          ? <p className={`${styles.emptyBurgerConstructor} text text_type_main-medium`}>Добавьте булочку</p>
          : <ConstructorElement
              type="top"
              isLocked={true}
              text={`${bun.name} (верх)`}
              price={bun.price}
              thumbnail={bun.image}
            />
        }
        <ul className={`${styles.burgerConstructorFilling}`}>
          {filling.length === 0
            ? <p className={`${styles.emptyBurgerConstructor} text text_type_main-medium`}>Добавьте начинку</p>
            : filling.map((card, index) => {
                return (
                  <BurgerConstructorCard 
                    key={card.nanoId}
                    ingredient={card}
                    handleDelete={handleDelete}
                    id={card.nanoId}
                    index={index}
                  />
                )
              })
            }
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
      {
        orderRequest
          ? <Loader />
          : <Modal openModal={isOpen} closeModal={closeModal}>
              {orderFailed
                ? <Failed />
                : <OrderCreated />
              }
            </Modal>
      }
    </div>
  )
}

export default BurgerConstructor;