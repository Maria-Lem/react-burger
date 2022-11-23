import { useState } from 'react';
import PropTypes from 'prop-types';
import { ingredientPropTypes } from '../../utils/types';
import styles from './burger-constructor.module.css';
import BurgerConstructorCard from './components/burger-constructor-card/burger-constructor-card';
import Modal from '../modals/modal/modal';
import OrderDetails from '../modals/order-details/order-details';

import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerConstructor({ ingredients }) {
  const [isOpen, setIsOpen] = useState(false);

  const filling = ingredients.map(card => {
    return (
      <BurgerConstructorCard 
        key={card._id}
        ingredient={card}
      />
    )
  });

  if (ingredients.length === 0) {
    return null;
  }

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className={`${styles.burgerConstructor} ml-3 mr-3 mb-10`}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text={`${ingredients[0].name} (верх)`}
          price={ingredients[0].price}
          thumbnail={ingredients[0].image}
        />
        <ul className={`${styles.burgerConstructorFilling}`}>
          {filling.filter(item => item.props.ingredient.type !== 'bun')}
        </ul>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={`${ingredients[0].name} (низ)`}
          price={ingredients[0].price}
          thumbnail={ingredients[0].image}
        />
      </div>
      <div className={`${styles.orderDetails}`}>
        <div className={`${styles.priceTotal} mr-10`}>
          <span className={`${styles.priceValTotal} text text_type_digits-medium`}>
            {filling.reduce((acc, item) => acc + item.props.ingredient.price, ingredients[0].price)}
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

BurgerConstructor.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropTypes.isRequired).isRequired
}

export default BurgerConstructor;