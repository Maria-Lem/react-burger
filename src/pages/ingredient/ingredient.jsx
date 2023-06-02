import IngredientDetails from '../../components/modals/ingredient-details/ingredient-details';
import styles from './ingredient.module.css';

function Ingredient() {


  return (
    <div className={`${styles.ingredient}`}>
      <IngredientDetails align="center" />
    </div>
  )
}

export default Ingredient;