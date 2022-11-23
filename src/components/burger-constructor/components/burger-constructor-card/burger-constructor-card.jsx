import { ingredientPropTypes } from '../../../../utils/types';

import styles from './burger-constructor-card.module.css';

import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerConstructorCard({ ingredient }) {
  return (
    <li className={`${styles.burgerConstructorItem} mr-1`}>
      <DragIcon type="primary" />
      <ConstructorElement
        text={ingredient.name}
        price={ingredient.price}
        thumbnail={ingredient.image}
      />
    </li>
  )
}
BurgerConstructorCard.propTypes = {
  ingredient: ingredientPropTypes.isRequired
}

export default BurgerConstructorCard;