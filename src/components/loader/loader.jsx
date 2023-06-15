import styles from './loader.module.css';

import ModalOverlay from '../modals/modal-overlay/modal-overlay';

function Loader() {
  return (
    <ModalOverlay>
      <span className={styles.loader}></span>
    </ModalOverlay>
  )
}

export default Loader;