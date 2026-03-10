import styles from "./Header.module.css";
import { Link } from "react-router";
import logo from "../../assets/icons/logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.navLeft}>
        <img src={logo} alt="logo" className={styles.logo} />
        <div>
          Amina's <span className="violet">blog</span>
        </div>
      </h1>
      <nav className={styles.navRight}>
        <Link to="/">
          <a>Home</a>
        </Link>
        <Link to="about">
          <a>About me</a>
        </Link>

        <button className="admin">Admin Dashboard</button>
      </nav>
    </header>
  );
}
