import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useDrag } from 'react-dnd/dist/hooks';
import { ingredientPropTypes } from '../../../../utils/types';
import styles from './burger-ingredients-card.module.css';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerIngredientsCard({ ingredient, openModal }) {
  const { bun, filling } = useSelector(store => ({
    bun: store.burger.bun,
    filling: store.burger.filling
  }));

  const quantity = useMemo(() => {
    if (bun !== null && ingredient._id === bun._id) {
      return 1;
    } else {
      return filling.filter(ing => ing._id === ingredient._id).length;
    }
  }, 
  [bun, filling, ingredient._id]
  );

  const [{ opacity }, dragRef] = useDrag({
    type: 'ingredient',
    item: ingredient,
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.5 : 1
    })
  }, [bun, filling]);
  
  return (
    <>
      <li ref={dragRef} style={{opacity}} className={`${styles.card} pl-4 pr-2 mb-8`} onClick={openModal} draggable>
        {
          quantity > 0 && 
            <Counter count={quantity} size="default" extraClass={`${styles.counter} m-1`} />
        }
        <img className={`${styles.image} ml-4 mr-4`} src={ingredient.image} alt={ingredient.name}/>
        <div className={`${styles.price} mt-1 mb-1`}>
          <span className={`${styles.priceVal} text text_type_digits-default`}>{ingredient.price}</span>
          <CurrencyIcon type="primary" />
        </div>
        <p className={`${styles.cardTitle} text text_type_main-default`}>{ingredient.name}</p>
      </li>
    </>
  )
}

BurgerIngredientsCard.propTypes = {
  ingredient: ingredientPropTypes.isRequired
}

export default BurgerIngredientsCard;