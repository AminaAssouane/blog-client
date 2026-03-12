import styles from "./Comments.module.css";
import { useState, useEffect } from "react";

export function Comments({ post }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchComments() {
      try {
        const response = await fetch(
          `http://localhost:3000/posts/${post.id}/comments`,
        );
        if (!response.ok) throw Error;
        const data = await response.json();
        setComments(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchComments();
  }, [post]);

  return (
    <>
      <div className={styles.commentsContainer}>
        <h3>Comments ({comments.length}) </h3>
        <div className={styles.comments}>
          {comments.map((comment) => {
            return (
              <Comment
                key={comment.id}
                username={comment.username}
                date={comment.createdAt}
                content={comment.content}
              />
            );
          })}
          {comments.length === 0 && <p> No comments yet...</p>}
        </div>
      </div>
    </>
  );

  function Comment({ username, date, content }) {
    return (
      <div className={styles.comment}>
        <div className={styles.commentInfo}>
          <span>{username}</span> <span>{date}</span>
        </div>
        <div className={styles.commentContent}>
          <p>{content}</p>
        </div>
      </div>
    );
  }
}
