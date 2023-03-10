import ModalOverlay from '../modals/modal-overlay/modal-overlay';
import styles from './loader.module.css';

function Loader() {
  return (
    <ModalOverlay>
      <span className={styles.loader}></span>
    </ModalOverlay>
  )
}

export default Loader;