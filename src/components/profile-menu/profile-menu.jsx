import { NavLink } from "react-router-dom";
import styles from "./profile-menu.module.css";

function ProfileMenu() {
  const activeLinkStyle = ({ isActive }) => {
    return isActive ? `${styles.activeLink}` : `${styles.link} text_color_inactive`;
  };

  return (
    <nav className={`${styles.profileMenu} pl-5 pr-15`}>
      <ul className={`${styles.menuList} mb-5 text text_type_main-medium`}>
        <li className={`${styles.menuItem} pt-5 pb-5`}>
          <NavLink to="/profile" className={activeLinkStyle}>Профиль</NavLink>
        </li>
        <li className={`${styles.menuItem} pt-5 pb-5`}>
          <NavLink to="/profile/orders" className={activeLinkStyle}>История заказов</NavLink>
        </li>
        <li className={`${styles.menuItem} pt-5 pb-5`}>
          <NavLink to="/logout" className={activeLinkStyle}>Выход</NavLink>
        </li>
      </ul>
      <p className={`text text_type_main-default text_color_inactive`}>В этом разделе вы можете изменить свои персональные данные</p>
    </nav>
  );
}

export default ProfileMenu;