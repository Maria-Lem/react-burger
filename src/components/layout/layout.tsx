import { FC } from 'react';
import { Outlet } from "react-router-dom";

import styles from "./layout.module.css";

const Layout: FC = () => {
  return (
    <main className={`${styles.main}`}>
      <Outlet />
    </main>
  )
}

export default Layout;