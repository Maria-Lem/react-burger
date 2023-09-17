import { FC } from 'react';
import styles from './total-numbers.module.css';

interface IProps {
  totalNum: number | null;
}

const TotalNumbers: FC<IProps> = ({ totalNum }) => {
  return (
    <p className={`${styles.totalNum} text text_type_digits-large`}>{totalNum}</p>
  );
};

export default TotalNumbers;