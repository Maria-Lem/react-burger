import { useCallback, FC } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "../../services/types/hooks";

import styles from "./profile-menu.module.css";

import { logOutUser } from "../../services/actions/user";

const ProfileMenu: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const activeLinkStyle = ({ isActive }: { isActive: boolean}) =>  {
    return isActive ? `${styles.activeLink}` : `${styles.link} text_color_inactive`;
  };

  const refreshToken = localStorage.getItem('refreshToken');
  
  const handleLogOut = useCallback(() => {
    dispatch(logOutUser(refreshToken));
    navigate("/login");
  },
  [dispatch, navigate, refreshToken]
  );

  return (
    <nav className={`${styles.profileMenu} pl-5 pr-15`}>
      <ul className={`${styles.menuList} mb-5 text text_type_main-medium`}>
        <li className={`${styles.menuItem} pt-5 pb-5`}>
          <NavLink end to="/profile" className={activeLinkStyle}>Профиль</NavLink>
        </li>
        <li className={`${styles.menuItem} pt-5 pb-5`}>
          <NavLink to="/profile/orders" className={activeLinkStyle}>История заказов</NavLink>
        </li>
        <li className={`${styles.menuItem} pt-5 pb-5`}>
          <button className={`${styles.button} text text_type_main-medium text_color_inactive`} onClick={handleLogOut}>
            Выход
          </button>
        </li>
      </ul>
      <p className={`text text_type_main-default text_color_inactive`}>В этом разделе вы можете изменить свои персональные данные</p>
    </nav>
  );
}

export default ProfileMenu;