import styles from './burger-ingredients-list.module.css';
import BurgerIngredientsCard from '../burger-ingredients-card/burger-ingredients-card';

import useData from '../../../../hooks/useData';

function BurgerIngredientsList(props) {  
  const {allIngredients} = useData();

  const ingredientElement = allIngredients.map(card => (
    <BurgerIngredientsCard 
    key={card._id}
    image={card.image}
    name={card.name}
    price={card.price}
    type={card.type}
    />
  ));

  return (
    <>
      <h3 className="text text_type_main-medium mt-10 mb-6">{props.ingredientType}</h3>
      <ul className={`${styles.ingredientsContainer}`}>
        {ingredientElement.filter(el => el.props.type === props.type)}
      </ul>
    </>
  )
}

export default BurgerIngredientsList;