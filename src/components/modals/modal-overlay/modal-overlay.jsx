import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './modal-overlay.module.css';

import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const modalRoot = document.getElementById('react-modals');

function ModalOverlay({ children, openModal, closeModal }) {
  useEffect(() => {
    if (!openModal) return;

    const closeOnEsc = e => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    document.addEventListener('keydown', closeOnEsc);
    
    return () => {
      document.removeEventListener('keydown', closeOnEsc);
    }
  }, [closeModal, openModal]);
  
  if (!openModal) return null;

  return ReactDOM.createPortal(
    (
      <>
        <div className={styles.overlay} onClick={closeModal}>
          <div className={`${styles.modal}`} onClick={(e) => e.stopPropagation()}>
            <button className={`${styles.closeBtn} mt-15 mr-10`} onClick={closeModal}>
              <CloseIcon type="primary" />
            </button>
            {children}
          </div>
        </div>
      </>
    ),
    modalRoot
  );
}

export default ModalOverlay;