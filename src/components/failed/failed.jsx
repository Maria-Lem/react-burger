import styles from './failed.module.css';

function Failed() {
  return (
      <div className={`${styles.modalContent} pt-30 pr-10 pl-10`}>
        <h3 className={`${styles.title} text text_type_main-medium`}>¯\_(ツ)_/¯</h3>
        <h3 className={`${styles.title} text text_type_main-medium`}>Что-то пошло не так. Попробуйте снова.</h3>
      </div >
  )
}

export default Failed;