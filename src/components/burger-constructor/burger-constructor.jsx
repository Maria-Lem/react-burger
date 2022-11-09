import styles from './burger-constructor.module.css';
import useData from '../../hooks/useData';
import BurgerConstructorCard from './components/burger-constructor-card/burger-constructor-card';

import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerConstructor() {
  const {allIngredients} = useData();

  const filling = allIngredients.map(card => {
    return (
      <BurgerConstructorCard 
        key={card._id}
        price={card.price}
        name={card.name}
        image={card.image}
        type={card.type}
      />
    )
  });

  if (allIngredients.length === 0) {
    return null;
  }

  return (
    <div>
      <div className={`${styles.burgerConstructor} ml-3 mr-3 mb-10`}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text={`${allIngredients[0].name} (верх)`}
          price={allIngredients[0].price}
          thumbnail={allIngredients[0].image}
        />
        <ul className={`${styles.burgerConstructorFilling}`}>
          {filling.filter(item => item.props.type !== 'bun')}
        </ul>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={`${allIngredients[0].name} (низ)`}
          price={allIngredients[0].price}
          thumbnail={allIngredients[0].image}
        />
      </div>
      <div className={`${styles.orderDetails}`}>
        <div className={`${styles.priceTotal} mr-10`}>
          <span className={`${styles.priceValTotal} text text_type_digits-medium`}>
            {filling.reduce((acc, item) => acc + item.props.price, allIngredients[0].price)}
          </span>
          <CurrencyIcon type="primary" />
        </div>
        <Button type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </div>
  )
}

export default BurgerConstructor;