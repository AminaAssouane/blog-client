import styles from "./Home.module.css";
import { PostsPreview } from "../PostsPreview/PostsPreview.jsx";
import welcomeImage from "../../assets/images/welcome.jpg";

export function Home() {
  return (
    <>
      <section className={styles.welcomeContainer}>
        <div className={styles.welcomeMessage}>
          <h1>
            Welcome to Amina's <span className="violet">blog</span>
          </h1>
          <p>
            Hi there! My name is{" "}
            <span className="violet">
              <b>Amina Assouane</b>
            </span>
            , and this is my blog: written by a web developer, for other
            developers. Feel free to read all about my insights, experiences,
            tips and reflections!
          </p>
        </div>
        <div className={styles.welcomeImage}>
          <img src={welcomeImage} alt="Welcome image" />
        </div>
      </section>
      <section className={styles.postsContainer}>
        <h1>
          Available <span className="violet">dev</span> blog articles:
        </h1>
        <PostsPreview />
      </section>
    </>
  );
}
