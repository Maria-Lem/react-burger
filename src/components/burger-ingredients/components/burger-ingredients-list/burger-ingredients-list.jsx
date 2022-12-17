import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styles from './burger-ingredients-list.module.css';

const BurgerIngredientsList = forwardRef((props, ref) => {  
  return (
    <div ref={ref}>
      <h3 className="text text_type_main-medium mt-10 mb-6">{props.ingredientType}</h3>
      <ul className={`${styles.ingredientsContainer}`}>
        {props.children}
      </ul>
    </div>
  )
});

BurgerIngredientsList.propTypes = {
  ingredientType: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired
};

export default BurgerIngredientsList;