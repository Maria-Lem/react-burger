import styles from './ingredient.module.css';

function Ingredient({ ingredient }) {

  return (
    <main className={`${styles.main}`}>
      <h3 className={`${styles.title} text text_type_main-large`}>Детали ингредиента</h3>
      <img className={`mb-4`} src={ingredient.image_large} alt={ingredient.name} />
      <h5 className={`${styles.cardTitle} text text_type_main-medium mb-8`}>{ingredient.name}</h5>
      <ul className={`${styles.nutrition}`}>
        <li className={`${styles.nutritionItem} mr-5`}>
          <p className={`text text_type_main-default`}>Калории,ккал</p>
          <span className={`text text_type_digits-default`}>{ingredient.calories}</span>
        </li>
        <li className={`${styles.nutritionItem} mr-5`}>
          <p className={`text text_type_main-default`}>Белки, г</p>
          <span className={`text text_type_digits-default`}>{ingredient.proteins}</span>
        </li>
        <li className={`${styles.nutritionItem} mr-5`}>
          <p className={`text text_type_main-default`}>Жиры, г</p>
          <span className={`text text_type_digits-default`}>{ingredient.fat}</span>
        </li>
        <li className={`${styles.nutritionItem}`}>
          <p className={`text text_type_main-default`}>Углеводы, г</p>
          <span className={`text text_type_digits-default`}>{ingredient.carbohydrates}</span>
        </li>
      </ul>
    </main>
  )
}

export default Ingredient;