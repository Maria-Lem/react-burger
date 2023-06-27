import { FC, ReactNode } from 'react';
import styles from './form-input-container.module.css';

interface IProps {
  children: ReactNode;
}

const FormInputContainer: FC<IProps> = ({ children }) => {
  return (
    <div className={`${styles.formInputContainer} mb-6`}>{children}</div>
  )
}

export default FormInputContainer;