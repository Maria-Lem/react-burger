import styles from './app-header.module.css';

import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function AppHeader() {
  return (
    <header className={`${styles.header} pt-4 pb-4`}>
      <nav>
        <ul className={styles.menu}>
          <li className={`${styles.menu__item} pl-5 pr-5 mr-2`}>
            <BurgerIcon type="primary" />
            <span className={`text text_type_main-default ml-2`}>Конструктор</span>
          </li>
          <li className={`${styles.menu__item} pl-5 pr-5`}>
            <ListIcon type="secondary" />
            <span className={`text text_type_main-default ml-2 text_color_inactive`}>Лента заказов</span>
          </li>
        </ul>
      </nav>
      <div className={styles.logo}><Logo /></div>
      <div className={`${styles.menu__item} pl-5 pr-5`}>
        <ProfileIcon type="secondary" />
        <span className={`text text_type_main-default ml-2 text_color_inactive`}>Личный кабинет</span>
      </div>
    </header>
  )
}

export default AppHeader;