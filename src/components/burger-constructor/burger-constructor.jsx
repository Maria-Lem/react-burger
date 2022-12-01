import { useContext, useState } from 'react';
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

  const [state] = useContext(ConstructorContext);

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
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className={`${styles.burgerConstructor} ml-3 mr-3 mb-10`}>
        {state.bun && <ConstructorElement
          type="top"
          isLocked={true}
          text={`${state.bun.name} (верх)`}
          price={state.bun.price}
          thumbnail={state.bun.image}
        />}
        <ul className={`${styles.burgerConstructorFilling}`}>
          {/* {filling} */}
          {state.filling.map(card => {
            return (
              <BurgerConstructorCard 
                key={card._id}
                ingredient={card}
              />
            )
          })}
        </ul>
        {state.bun && <ConstructorElement
          type="bottom"
          isLocked={true}
          text={`${state.bun.name} (низ)`}
          price={state.bun.price}
          thumbnail={state.bun.image}
        />}
      </div>
      <div className={`${styles.orderDetails}`}>
        <div className={`${styles.priceTotal} mr-10`}>
          <span className={`${styles.priceValTotal} text text_type_digits-medium`}>
            {state.totalPrice}
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