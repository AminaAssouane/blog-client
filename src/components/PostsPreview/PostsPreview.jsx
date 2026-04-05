import styles from "./PostsPreview.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import { ClipLoader } from "react-spinners";

export function PostsPreview() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/posts`);
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

  if (loading) {
    return (
      <div className="spinner">
        <ClipLoader color="#955EB4" />
      </div>
    );
  }
  return (
    <div className={styles.postsPreviewContainer}>
      {posts.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </div>
  );
}

function Card({ post }) {
  const date = new Date(post.createdAt);
  const formattedDate = date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  function getPreviewText(html, maxLength = 120) {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    const text = tempDiv.textContent || tempDiv.innerText || "";
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  }

  return (
    <Link to={`/posts/${post.id}`}>
      <article className={styles.preview}>
        <div className={styles.cover}>
          <img src={post.image} alt={post.title} />
        </div>
        <div className={styles.content}>
          <h3>{post.title}</h3>
          <div className={styles.date}>{formattedDate}</div>
          <p>{getPreviewText(post.content)}</p>{" "}
        </div>
      </article>
    </Link>
  );
}
