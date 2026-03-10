import styles from "./Header.module.css";
import { Link } from "react-router";

export function Header() {
  return (
    <header className={styles.header}>
      <h1>
        Amina's <span className="violet">blog</span>
      </h1>
      <nav>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="about">
          <button>About me</button>
        </Link>
        <button>Admin Dashboard</button>
      </nav>
    </header>
  );
}
