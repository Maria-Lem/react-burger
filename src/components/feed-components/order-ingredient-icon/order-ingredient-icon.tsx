import { FC } from 'react';
import styles from './order-ingredient-icon.module.css';

interface IProps {
  icon: string; 
  length: number; 
  index: number; 
  name: string;
}

const OrderIngredientIcon: FC<IProps> = ({ icon, length, index, name }) => {
  return (
    <div className={`${styles.ingredientItem}`} style={{ zIndex: `${length - index}` }}>
      <img className={`${styles.ingredientIcon}`} src={icon} alt={name} />
    </div>
  );
};

export default OrderIngredientIcon;