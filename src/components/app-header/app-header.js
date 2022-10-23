import styles from './app-header.module.css';

import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function AppHeader() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          <li className={styles.menu__item}>
            <BurgerIcon type="primary" />
            <span className={`text text_type_main-default`}>Конструктор</span>
          </li>
          <li className={styles.menu__item}>
            <ListIcon type="secondary" />
            <span className={`text text_type_main-default text_color_inactive`}>Лента заказов</span>
          </li>
        </ul>
        <Logo />
      </nav>
      <div className={styles.menu__item}>
        <ProfileIcon type="secondary" />
        <span className={`text text_type_main-default text_color_inactive`}>Личный кабинет</span>
      </div>
    </header>
  )
}

export default AppHeader;