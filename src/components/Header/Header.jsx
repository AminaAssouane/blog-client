import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <h1>Amina's blog</h1>
      <nav>
        <button>Home</button>
        <button>About me</button>
        <button>Admin Dashboard</button>
      </nav>
    </header>
  );
}
