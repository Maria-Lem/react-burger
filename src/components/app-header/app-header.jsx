import { NavLink, useLocation } from 'react-router-dom';
import styles from './app-header.module.css';

import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function AppHeader() {
  const { pathname } = useLocation();
  
  const activeLinkStyle = ({ isActive }) => {
    return isActive ? `${styles.activeLink}` : `${styles.link} text_color_inactive`;
  };

  return (
    <header className={`${styles.header} pt-4 pb-4`}>
      <nav>
        <ul className={styles.menu}>
          <li className={`${styles.menu__item} pl-5 pr-5 mr-2`}>
            <NavLink to="/" className={activeLinkStyle}>
              <BurgerIcon type={pathname === "/" ? "primary" : "secondary"} />
              <span className={`text text_type_main-default ml-2`}>Конструктор</span>
            </NavLink>
          </li>
          <li className={`${styles.menu__item} pl-5 pr-5`}>
            <NavLink to="/orders" className={activeLinkStyle}>
              <ListIcon type={pathname === "/orders" ? "primary" : "secondary"} />
              <span className={`text text_type_main-default ml-2`}>Лента заказов</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={styles.logo}><Logo /></div>
      <div className={`${styles.menu__item} pl-5 pr-5`}>
        <NavLink to="/profile" className={activeLinkStyle}>
          <ProfileIcon type={pathname === "/profile" ? "primary" : "secondary"} />
          <span className={`text text_type_main-default ml-2`}>Личный кабинет</span>
        </NavLink>
      </div>
    </header>
  )
}

export default AppHeader;