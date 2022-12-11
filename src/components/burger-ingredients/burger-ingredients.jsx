import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setIngredientDetail,removeIngredientDetail } from '../../services/actions/ingredient';
import { addIngredient } from '../../services/actions/burgerConstructor';

import styles from './burger-ingredients.module.css';
import BurgerIngredientsList from './components/burger-ingredients-list/burger-ingredients-list';
import BurgerIngredientsCard from './components/burger-ingredients-card/burger-ingredients-card';
import Modal from '../modals/modal/modal';
import IngredientDetails from '../modals/ingredient-details/ingredient-details';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerIngredients() {
  const [current, setCurrent] = useState('bun');
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  const { ingredients } = useSelector(store => ({
    ingredients: store.ingredients.ingredients,
  }));
  
  const openModal = (card) => {
    setIsOpen(true);
    dispatch(setIngredientDetail(card));
    dispatch(addIngredient(card));
  };

  const closeModal = () => {
    dispatch(removeIngredientDetail());
    setIsOpen(false);
  };

  const ingredientElement = ingredients.map(card => (
    <BurgerIngredientsCard 
      key={card._id}
      openModal={() => openModal(card)}
      ingredient={card}
    />
    ));

  const bun = ingredientElement.filter(el => el.props.ingredient.type === 'bun');
  const sauce = ingredientElement.filter(el => el.props.ingredient.type === 'sauce');
  const main = ingredientElement.filter(el => el.props.ingredient.type === 'main');
  
  return (
    <>
      <h1 className={`${styles.title} text text_type_main-large mt-10 mb-5`}>Соберите бургер</h1>
      <div className={`${styles.burgerIngredients} mr-10`}>
        <div className={`${styles.ingredientsNav}`}>
          <Tab value="bun" active={current === 'bun'} onClick={setCurrent}>
            Булки
          </Tab>
          <Tab value="sauce" active={current === 'sauce'} onClick={setCurrent}>
            Соусы
          </Tab>
          <Tab value="main" active={current === 'main'} onClick={setCurrent}>
            Начинки
          </Tab>
        </div>
        <div className={`${styles.ingredientsContainer}`}>
          <BurgerIngredientsList ingredientType="Булки">
            {bun}
          </BurgerIngredientsList>
          <BurgerIngredientsList ingredientType="Соусы">
            {sauce}
          </BurgerIngredientsList>
          <BurgerIngredientsList ingredientType="Начинки">
            {main}
          </BurgerIngredientsList>
        </div>
      </div>
      <Modal openModal={isOpen} closeModal={closeModal}>
        <IngredientDetails />
      </Modal>
    </>
  )
}

export default BurgerIngredients;