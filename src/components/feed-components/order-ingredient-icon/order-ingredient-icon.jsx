import styles from './order-ingredient-icon.module.css';

export default function OrderIngredientIcon({ icon, length, index, name }) {
  return (
    <div className={`${styles.ingredientItem}`} style={{ zIndex: `${length - index}` }}>
      <img className={`${styles.ingredientIcon}`} src={icon} alt={name} />
    </div>
  );
}