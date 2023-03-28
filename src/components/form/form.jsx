import PropTypes from 'prop-types';
import styles from './form.module.css';

function Form({ title, children }) {
  return (
    <form className={`${styles.form}`}>
      <h2 className={`${styles.title} text text_type_main-medium mb-6`}>{title}</h2>
      {children}
    </form>
  )
};

Form.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired
};

export default Form;