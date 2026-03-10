import styles from "./About.module.css";

export function About() {
  return (
    <main className={styles.container}>
      <h1>
        About <span className="violet">me</span>
      </h1>
      <p>
        Hi, I'm Amina Assouane, a passionate Full Stack Developer from Algeria.
      </p>
    </main>
  );
}
