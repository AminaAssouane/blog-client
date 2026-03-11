import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import welcomeImage from "../../assets/images/welcome.jpg";

export function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch("http://localhost:3000/posts");
        if (!response.ok) throw new Error("Failed to fetch posts");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  return (
    <>
      <section className={styles.welcomeContainer}>
        <div className={styles.welcomeMessage}>
          <h1>
            Welcome to Amina's <span className="violet">blog</span>
          </h1>
          <p>
            Hi there! My name is <span className="violet">Amina Assouane</span>,
            and this is my blog: written by a web developer, for other
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

        {posts.map((post) => (
          <div
            key={post.id}
            style={{ borderBottom: "1px solid #ccc", marginBottom: "1rem" }}
          >
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p>Published: {post.published ? "Yes" : "No"}</p>
            <small>Author ID: {post.userId}</small>
          </div>
        ))}
      </section>
    </>
  );
}
