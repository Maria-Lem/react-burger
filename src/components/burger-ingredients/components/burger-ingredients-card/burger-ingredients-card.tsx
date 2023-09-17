import { useMemo, FC } from 'react';
import { useSelector } from '../../../../services/types/hooks';
import { useDrag } from 'react-dnd/dist/hooks';
import { Link, useLocation } from 'react-router-dom';

import styles from './burger-ingredients-card.module.css';

import { IIngredient } from '../../../../utils/interfaces/data';

import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';

interface IProps {
  ingredient: IIngredient;
  openModal: () => void;
}

const BurgerIngredientsCard: FC<IProps> = ({ ingredient, openModal }) => {
  const location = useLocation();

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
    <Link 
      key={ingredient._id}
      to={{pathname: `/ingredients/${ingredient._id}`}}
      state={{ background: location }}
      className={`${styles.link}`} 
    >
      <li ref={dragRef} style={{opacity}} className={`${styles.card} pl-4 pr-2 mb-8`} onClick={openModal} draggable>
        {
          quantity > 0 && 
            <div className={`${styles.counter} m-1`}>
              <Counter count={quantity} size="default" />
            </div>
        }
        <img className={`${styles.image} ml-4 mr-4`} src={ingredient.image} alt={ingredient.name}/>
        <div className={`${styles.price} mt-1 mb-1`}>
          <span className={`${styles.priceVal} text text_type_digits-default`}>{ingredient.price}</span>
          <CurrencyIcon type="primary" />
        </div>
        <p className={`${styles.cardTitle} text text_type_main-default`}>{ingredient.name}</p>
      </li>
    </Link>
  )
}

export default BurgerIngredientsCard;