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
          Hi, I'm <span className="violet">Amina Assouane</span>, a passionate{" "}
          <span className="violet">Full Stack Developer</span> from Algeria. I
          have a <span className="violet">Computer Science degree</span> from{" "}
          <span className="violet">Paris Diderot University</span>. These past
          few years, I've immersed myself in coding and exploring technologies
          in order to build engaging, functional, and modern{" "}
          <span className="violet">web applications</span>. My journey began
          with curiosity and quickly evolved into a deep passion for{" "}
          <span className="violet">creation</span>.
        </p>
        <p style={{ marginTop: "20px" }}>
          I love learning new things, and understanding something complicated
          gives me satisfaction and a sense of acomplishment. That's why I
          decided to dive into the{" "}
          <span className="violet">web development</span> world - and it turned
          out to be my niche, a never ending well of{" "}
          <span className="violet">knowledge</span>. Every time I learn about
          something new, whether it's a <span className="violet">function</span>
          , a <span className="violet">language</span> or a{" "}
          <span className="violet">framework</span> - I discover more and more
          things that I do not know yet. And I love that!
        </p>
        <p style={{ marginTop: "20px" }}>
          In addition to my{" "}
          <span className="violet">Computer Science degree</span>, I have
          pursued continuous learning through programs such as{" "}
          <span className="violet">The Odin Project</span>,{" "}
          <span className="violet">Coursera</span>, and{" "}
          <span className="violet">Udacity</span>, allowing me to deepen my web
          development knowledge and continuously refine my{" "}
          <span className="violet">technical skills</span>.
        </p>
        <p style={{ marginTop: "20px" }}>
          Now it's 2026, and the <span className="violet">web development</span>{" "}
          community is growing larger and larger. Maybe you're a part of it!
          This blog is dedicated to aspiring{" "}
          <span className="violet">developers</span> with the same goal. I want
          to share my journey and experiences to{" "}
          <span className="violet">inspire</span> and{" "}
          <span className="violet">motivate</span> people on the same path.
        </p>
      </div>
    </main>
  );
}
