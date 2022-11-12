import PropTypes from 'prop-types';
import styles from './ingredient-details.module.css';

function IngredientDetails({props}) {
  return (
    <div className={`${styles.modalContent} pt-10 pr-10 pb-15 pl-10`}>
      <h3 className={`${styles.title} text text_type_main-large`}>Детали ингредиента</h3>
      <img className={`mb-4`} src={props.image_large} alt={props.name} />
      <h5 className={`${styles.cardTitle} text text_type_main-medium mb-8`}>{props.name}</h5>
      <ul className={`${styles.nutrition}`}>
        <li className={`${styles.nutritionItem} mr-5`}>
          <p className={`text text_type_main-default`}>Калории,ккал</p>
          <span className={`text text_type_digits-default`}>{props.calories}</span>
        </li>
        <li className={`${styles.nutritionItem} mr-5`}>
          <p className={`text text_type_main-default`}>Белки, г</p>
          <span className={`text text_type_digits-default`}>{props.proteins}</span>
        </li>
        <li className={`${styles.nutritionItem} mr-5`}>
          <p className={`text text_type_main-default`}>Жиры, г</p>
          <span className={`text text_type_digits-default`}>{props.fat}</span>
        </li>
        <li className={`${styles.nutritionItem}`}>
          <p className={`text text_type_main-default`}>Углеводы, г</p>
          <span className={`text text_type_digits-default`}>{props.carbohydrates}</span>
        </li>
      </ul>
    </div>
  )
}

IngredientDetails.propTypes = {
  image_large: PropTypes.string.isRequired,
  calories: PropTypes.number.isRequired,
  proteins: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
}

export default IngredientDetails;