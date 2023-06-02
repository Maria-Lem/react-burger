import styles from './order-library.module.css';

import ProfileMenu from '../../components/profile-menu/profile-menu';

export default function OrderLibrary() {
  return (
    <main className={`${styles.profileContent} pt-30`}>
      <ProfileMenu />
      <h2 className={`${styles.text} text text_type_main-medium`}>Здесь будет история Ваших заказов.</h2>
    </main>
  );
}