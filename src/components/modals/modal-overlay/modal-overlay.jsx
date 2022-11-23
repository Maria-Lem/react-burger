import styles from './modal-overlay.module.css';
import PropTypes from 'prop-types';

function ModalOverlay({ children, closeModal }) {
  return (
    <div className={`${styles.overlay}`} onClick={closeModal}>
      {children}
    </div>
  );
}

ModalOverlay.propTypes = {
  children: PropTypes.object.isRequired,
  closeModal: PropTypes.func.isRequired
};

export default ModalOverlay;