import styles from './modal-overlay.module.css';

function ModalOverlay({ children, closeModal }) {
  return (
    <div className={styles.overlay} onClick={closeModal}>
      {children}
    </div>
  );
}

export default ModalOverlay;