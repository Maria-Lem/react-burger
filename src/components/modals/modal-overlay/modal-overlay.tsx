import { FC, ReactNode } from 'react';
import styles from './modal-overlay.module.css';

interface IProps {
  children: ReactNode;
  closeModal?: () => void;
}

const ModalOverlay: FC<IProps> = ({ children, closeModal }) => {
  return (
    <div className={`${styles.overlay}`} onClick={closeModal}>
      {children}
    </div>
  );
};

export default ModalOverlay;