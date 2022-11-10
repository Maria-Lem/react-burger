import PropTypes from 'prop-types';
import styles from './burger-constructor-card.module.css';

import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerConstructorCard(props) {
  return (
    <li className={`${styles.burgerConstructorItem} mr-1`}>
      <DragIcon type="primary" />
      <ConstructorElement
        text={props.name}
        price={props.price}
        thumbnail={props.image}
      />
    </li>
  )
}

BurgerConstructorCard.propTypes = {
  image: PropTypes.string,
  price: PropTypes.number,
  name: PropTypes.string
}

export default BurgerConstructorCard;