import styles from "./Post.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Comments } from "../Comments/Comments.jsx";

export function Post() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await fetch(`http://localhost:3000/posts/${postId}`);
        if (!response.ok) throw Error;
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchPost();
  }, [postId]);

  if (loading) return <p>Loading...</p>;

  const date = new Date(post.createdAt);
  const formattedDate = date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <main className={styles.postPageMain}>
      <article className={styles.post}>
        <div className={styles.image}>
          <img src={post.image} alt={post.title} />
        </div>
        <div className={styles.info}>
          <h1>{post.title}</h1>
          <div className={styles.date}>{formattedDate}</div>
        </div>
        <div className={styles.content}>
          <p>{post.content}</p>
        </div>
      </article>
      <Comments post={post} />
    </main>
  );
}
