//import styles from "./PostsPreview.module.css";
import { useState, useEffect } from "react";

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
    <>
      {posts.map((post) => (
        <div
          key={post.id}
          style={{ borderBottom: "1px solid #ccc", marginBottom: "1rem" }}
        >
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <h4>Comments:</h4>
          <ul>
            {post.comments.map((comment) => (
              <li key={comment.id}>
                {comment.username}: {comment.content}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}
