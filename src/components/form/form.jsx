import PropTypes from 'prop-types';
import styles from './form.module.css';

function Form({ title = null, children }) {
  return (
    <form className={`${styles.form}`}>
      { 
        title && <h2 className={`${styles.title} text text_type_main-medium mb-6`}>{title}</h2>
      }
      {children}
    </form>
  )
};

Form.propTypes = {
  title: PropTypes.string,
  children: PropTypes.array.isRequired
};

export default Form;