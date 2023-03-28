import { Link } from "react-router-dom";
import styles from "./form-additional-actions.module.css";

function FormAdditionalActions({ text, linkName, pageName }) {
  return (
    <div className={`${styles.container} mb-4`}>
      <p className={`${styles.text} text text_type_main-default mr-2`}>{text}</p>
      <Link to={`/${pageName}`} className={`${styles.link} text text_type_main-default`}>{linkName}</Link>
    </div>
  )
}

export default FormAdditionalActions;