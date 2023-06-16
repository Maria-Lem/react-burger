import { Link, NavLink, useLocation } from 'react-router-dom';

import styles from './app-header.module.css';

import { 
  Logo, 
  BurgerIcon,
  ListIcon,
  ProfileIcon, 
} from '@ya.praktikum/react-developer-burger-ui-components';

function AppHeader() {
  const { pathname } = useLocation();
  
  const activeLinkStyle = ({ isActive }) => {
    return isActive ? `${styles.activeLink}` : `${styles.link} text_color_inactive`;
  };

  return (
    <header className={`${styles.header} pt-4 pb-4`}>
      <div className={styles.headerContent}>
        <nav>
          <ul className={styles.menu}>
            <li className={`${styles.menu__item} pl-5 pr-5 mr-2`}>
              <NavLink end to="/" className={activeLinkStyle}>
                <BurgerIcon type={pathname === "/" ? "primary" : "secondary"} />
                <span className={`text text_type_main-default ml-2`}>Конструктор</span>
              </NavLink>
            </li>
            <li className={`${styles.menu__item} pl-5 pr-5`}>
              <NavLink to="/feed" className={activeLinkStyle}>
                <ListIcon type={pathname === "/feed" ? "primary" : "secondary"} />
                <span className={`text text_type_main-default ml-2`}>Лента заказов</span>
              </NavLink>
            </li>
          </ul>
        </nav>
        <Link to="/" className={styles.logo}><Logo /></Link>
        <div className={`${styles.menu__item} pl-5 pr-5`}>
          <NavLink end to="/profile" className={activeLinkStyle}>
            <ProfileIcon type={pathname === "/profile" ? "primary" : "secondary"} />
            <span className={`text text_type_main-default ml-2`}>Личный кабинет</span>
          </NavLink>
        </div>
      </div>
    </header>
  )
}

export default AppHeader;