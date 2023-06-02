import { Outlet } from "react-router-dom";
import styles from "./layout.module.css";

function Layout() {
  return (
    <main className={`${styles.main}`}>
      <Outlet />
    </main>
  )
}

export default Layout;