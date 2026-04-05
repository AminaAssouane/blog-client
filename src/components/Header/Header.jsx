import styles from "./Header.module.css";
import { Link } from "react-router";
import logo from "../../assets/icons/logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.navLeft}>
        <img src={logo} alt="logo" className={styles.logo} />
        <div>
          Dev<span className="violet">Minds</span>
        </div>
      </h1>
      <nav className={styles.navRight}>
        <Link to="/">Home</Link>
        <Link to="about">About me</Link>

        <button className="admin">Admin Dashboard</button>
      </nav>
    </header>
  );
}
