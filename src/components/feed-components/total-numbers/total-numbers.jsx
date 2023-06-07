import styles from './total-numbers.module.css';

export default function TotalNumbers({ totalNum }) {
  return (
    <p className={`${styles.totalNum} text text_type_digits-large`}>{totalNum}</p>
  );
}