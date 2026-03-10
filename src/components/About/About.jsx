import styles from "./About.module.css";
import avatar from "../../assets/images/aboutme.jpg";

export function About() {
  return (
    <main className={styles.container}>
      <h1>
        About <span className="violet">me</span>
      </h1>
      <div className={styles.content}>
        <div className={styles.avatar}>
          <img src={avatar} alt="Avatar" />
        </div>
        <p>
          Hi, I'm Amina Assouane, a passionate Full Stack Developer from
          Algeria. I have a Computer Science degree from Paris University. I've
          immersed myself in coding and exploring technologies in order to build
          engaging, functional, and modern web applications. My journey began
          with curiosity and quickly evolved into a deep passion for creation.
        </p>
        <p style={{ marginTop: "20px" }}>
          In 2023, I came across a video on social media showcasing some
          codebase on screen - it looked very intimidating and complex. I love
          learning new things, and understanding something complicated gives me
          satisfaction and a sense of acomplishment. That's why I decided to
          dive into the web development world - and it turned out to be my
          niche, a never ending well of knowledge. Every time I learn about
          something new, whether it's a function, a language or a framework - I
          discover more and more things that I do not know yet. And I love that!
        </p>
        <p style={{ marginTop: "20px" }}>
          I decided to turn this hobby into a passion. People online recommended
          me The Odin Project. It's a free curriculum that guides you in the
          path to become a successful web developer. It was a game-changer for
          me, as I was constantly stressed about whether I'm going in the right
          direction with my studies or not.
        </p>
        <p style={{ marginTop: "20px" }}>
          Now it's 2025, and the web development community is growing larger and
          larger. Maybe you're a part of it! This blog is dedicated to other
          aspiring developers with the same goal. I want to share my journey and
          experiences to inspire and motivate people on the same path.
        </p>
      </div>
    </main>
  );
}
