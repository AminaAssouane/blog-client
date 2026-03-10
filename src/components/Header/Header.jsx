import styles from "./Header.module.css";
import { Link } from "react-router";

export function Header() {
  return (
    <header className={styles.header}>
      <h1>
        Amina's <span className="violet">blog</span>
      </h1>
      <nav className={styles.navBar}>
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
