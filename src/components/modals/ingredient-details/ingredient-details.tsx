import { FC } from 'react';
import { useSelector } from '../../../services/types/hooks';
import { useParams } from 'react-router-dom';

import styles from './ingredient-details.module.css';

import Loader from '../../loader/loader';

interface IProps {
  align?: string;
}

const IngredientDetails: FC<IProps> = ({ align }) => {
  const params = useParams();

  const { ingredients } = useSelector(store => ({
    ingredients: store.ingredients.ingredients
  }));
  const ingredient = ingredients.find(ingredient => ingredient._id === params.id);

  if (!ingredient) {
    return <Loader />;
  }

  const style = {
    alignSelf: align,
  };

  return (
    <>
      <div className={`${styles.modalContent} pt-10 pr-10 pb-15 pl-10`}>
        <h3 className={`${styles.title} text text_type_main-large`} style={style}>Детали ингредиента</h3>
        <img className={`mb-4`} src={ingredient.image_large} alt={ingredient.name} />
        <h5 className={`${styles.cardTitle} text text_type_main-medium mb-8`}>{ingredient.name}</h5>
        <ul className={`${styles.nutrition} text_color_inactive`}>
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
      </div>
    </>
  );
}

export default IngredientDetails;