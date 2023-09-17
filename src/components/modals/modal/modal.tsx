import { useEffect, FC, ReactNode } from 'react';
import ReactDOM from 'react-dom';

import styles from './modal.module.css';

import ModalOverlay from '../modal-overlay/modal-overlay';

import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const modalRoot = document.getElementById('react-modals') as HTMLElement;

interface IProps {
  children: ReactNode;
  openModal: (() => void) | boolean; 
  closeModal: () => void;
}

const Modal: FC<IProps> = ({ children, openModal, closeModal }) => {
  useEffect(() => {
    if (!openModal) return;

    const closeOnEsc = (e: KeyboardEvent) => {
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
        <ModalOverlay closeModal={closeModal}>
          <div className={`${styles.modal}`} onClick={(e) => e.stopPropagation()}>
            <button className={`${styles.closeBtn} mt-15 mr-10`} onClick={closeModal}>
              <CloseIcon type="primary" />
            </button>
            {children}
          </div>
        </ModalOverlay>
      </>
    ),
    modalRoot
  );
};

export default Modal;