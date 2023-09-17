import { forwardRef, ReactNode } from 'react';

import styles from './burger-ingredients-list.module.css';

interface IProps {
  ingredientType: string; 
  children: ReactNode;
}

const BurgerIngredientsList = forwardRef<HTMLDivElement, IProps>(({ ingredientType, children }, ref) => {  
  return (
    <div ref={ref}>
      <h3 className="text text_type_main-medium mt-10 mb-6">{ingredientType}</h3>
      <ul className={`${styles.ingredientsContainer}`}>
        {children}
      </ul>
    </div>
  )
});

export default BurgerIngredientsList;