import styles from "./PostsPreview.module.css";
import { useState, useEffect } from "react";
import welcomeImage from "../../assets/images/welcome.jpg";

export function PostsPreview() {
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
    <div className={styles.postsPreviewContainer}>
      {posts.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </div>
  );
}

function Card({ post }) {
  return (
    <article className={styles.preview}>
      <div className={styles.cover}>
        <img src={post.image} alt="Cover image" />
      </div>
      <div className={styles.content}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>
    </article>
  );
}
