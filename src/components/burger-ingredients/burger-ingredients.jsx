import { useEffect, useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, useLocation } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { setIngredientDetail,removeIngredientDetail } from '../../services/actions/ingredient';
import { filterIngredientElements } from '../../utils/utils';

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
  };

  const closeModal = () => {
    dispatch(removeIngredientDetail());
    setIsOpen(false);
  };

  const options = { threshold: 0.3 };

  const [bunRef, inViewBun] = useInView(options);
  const [sauceRef, inViewSauce] = useInView(options);
  const [mainRef, inViewMain] = useInView(options);

  useEffect(() => {
    if (inViewBun) {
      setCurrent('bun');
    } else if (inViewSauce) {
      setCurrent('sauce');
    } else if (inViewMain) {
      setCurrent('main');
    }
  }, [inViewBun, inViewSauce, inViewMain]);

  const ingredientElement = ingredients.map(card => (
    <BurgerIngredientsCard 
      key={card._id}
      openModal={() => openModal(card)}
      ingredient={card}
    />
    ));

  const bun = useMemo(
    () => filterIngredientElements(ingredientElement, 'bun'),
    [ingredientElement]
    );
  const sauce = useMemo(
    () => filterIngredientElements(ingredientElement, 'sauce'),
    [ingredientElement]
  );
  const main = useMemo(
    () => filterIngredientElements(ingredientElement, 'main'),
    [ingredientElement]
  );
  
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
          <BurgerIngredientsList ref={bunRef} ingredientType="Булки">
            {bun}
          </BurgerIngredientsList>
          <BurgerIngredientsList ref={sauceRef} ingredientType="Соусы">
            {sauce}
          </BurgerIngredientsList>
          <BurgerIngredientsList ref={mainRef} ingredientType="Начинки">
            {main}
          </BurgerIngredientsList>
        </div>
      </div>
      {/* {
        state &&
        <Route path="/ingredients/:id">
          <Modal  closeModal={closeModal}>
            <IngredientDetails />
          </Modal>
        </Route>
      } */}
    </>
  )
}

export default BurgerIngredients;