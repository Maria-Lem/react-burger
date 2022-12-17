import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useDrop } from 'react-dnd';
import { createNewOrder } from '../../services/actions/order';
import { addIngredient, deleteIngredient } from '../../services/actions/burgerConstructor';

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
    // filling: console.log(store.burger),
    bun: store.burger.bun,
    filling: store.burger.filling,
    totalPrice: store.burger.totalPrice,
    orderList: store.burger.orderList
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
    setIsOpen(true);
    dispatch(createNewOrder(orderListId()));
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
      <Modal openModal={isOpen} closeModal={closeModal}>
        <OrderDetails />
      </Modal>
    </div>
  )
}

export default BurgerConstructor;