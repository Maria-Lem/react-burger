import { FC, FormEvent, ReactNode } from 'react';
import styles from './form.module.css';

interface IProps {
  title: string;
  children: ReactNode;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const Form: FC<IProps> = ({ title = null, children, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className={`${styles.form}`}>
      { 
        title && <h2 className={`${styles.title} text text_type_main-medium mb-6`}>{title}</h2>
      }
      {children}
    </form>
  )
};

export default Form;