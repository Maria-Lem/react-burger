import styles from './form-input-container.module.css';

function FormInputContainer({ children }) {
  return (
    <div className={`${styles.formInputContainer} mb-6`}>{children}</div>
  )
}

export default FormInputContainer;