import { useContext, useState } from 'react';
import useData from '../../hooks/useData';
import { ConstructorContext } from '../../utils/constructorContext';

import styles from './burger-constructor.module.css';
import BurgerConstructorCard from './components/burger-constructor-card/burger-constructor-card';
import Modal from '../modals/modal/modal';
import OrderDetails from '../modals/order-details/order-details';

import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerConstructor() {
  const [isOpen, setIsOpen] = useState(false);
  const [orderNumber, setOrderNumber] = useState(null);
  const { createOrder } = useData();

  const [constructorState] = useContext(ConstructorContext);

  // const ingredients = state.filling.map(card => {
  //   return (
  //     <BurgerConstructorCard 
  //       key={card._id}
  //       ingredient={card}
  //       // dispatch={dispatch}
  //     />
  //   )
  // });

  // const filling = ingredients.filter(item => item.props.ingredient.type !== 'bun');

  // if (state.filling.length === 0) {
  //   return null;
  // }

  const openModal = () => {
    setIsOpen(true);
    createOrder(constructorState.order, setOrderNumber)
  }

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {!constructorState.bun && constructorState.filling.length === 0 && <p className={`${styles.emptyBurgerConstructor} text text_type_main-large`}>Empty</p>}
      <div className={`${styles.burgerConstructor} ml-3 mr-3 mb-10`}>
        {constructorState.bun && <ConstructorElement
          type="top"
          isLocked={true}
          text={`${constructorState.bun.name} (верх)`}
          price={constructorState.bun.price}
          thumbnail={constructorState.bun.image}
        />}
        <ul className={`${styles.burgerConstructorFilling}`}>
          {/* {filling} */}
          {constructorState.filling.map(card => {
            return (
              <BurgerConstructorCard 
                key={card._id}
                ingredient={card}
              />
            )
          })}
        </ul>
        {constructorState.bun && <ConstructorElement
          type="bottom"
          isLocked={true}
          text={`${constructorState.bun.name} (низ)`}
          price={constructorState.bun.price}
          thumbnail={constructorState.bun.image}
        />}
      </div>
      <div className={`${styles.orderDetails}`}>
        <div className={`${styles.priceTotal} mr-10`}>
          <span className={`${styles.priceValTotal} text text_type_digits-medium`}>
            {constructorState.totalPrice}
          </span>
          <CurrencyIcon type="primary" />
        </div>
        <Button type="primary" size="large" onClick={openModal}>
          Оформить заказ
        </Button>
      </div>
      <Modal openModal={isOpen} closeModal={closeModal}>
        <OrderDetails orderNumber={orderNumber} />
      </Modal>
    </div>
  )
}

export default BurgerConstructor;