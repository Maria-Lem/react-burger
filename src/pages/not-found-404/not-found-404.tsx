import { Link } from 'react-router-dom';
import styles from './not-found-404.module.css';

function NotFound404() {
  return (
    <main className={`${styles.main}`}>
      <div className={styles.content}>
        <h1>Oops! 404 Error</h1>
        <p>The page you requested does not exist</p>
        <br />
        <br />
        <p>check the address or try <Link to='/' className={styles.link}>homepage</Link></p>
        </div>
    </main>
  );
}

export default NotFound404;