import PropTypes from 'prop-types';

import styles from './modal-overlay.module.css';

function ModalOverlay({ children, closeModal }) {
  return (
    <div className={`${styles.overlay}`} onClick={closeModal}>
      {children}
    </div>
  );
}

ModalOverlay.propTypes = {
  children: PropTypes.object.isRequired,
};

export default ModalOverlay;