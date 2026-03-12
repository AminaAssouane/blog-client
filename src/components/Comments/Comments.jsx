import styles from "./Comments.module.css";
import { useState, useEffect } from "react";

export function Comments({ post }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [username, setUsername] = useState("");

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
      }
    }
    fetchComments();
  }, [post]);

  function handleCommentChange(e) {
    setNewComment(e.target.value);
  }

  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }

  async function handleSubmit(e) {
    if (newComment === "") return;
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:3000/posts/${post.id}/comments`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            postId: post.id,
            username: username,
            content: newComment,
          }),
        },
      );
      const data = await response.json();
      if (response.ok) {
        setComments([...comments, data]);
      } else {
        throw Error;
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <section className={styles.commentsWrapper}>
        <div className={styles.commentCreatorWrapper}>
          <div className={styles.commentCreator}>
            <h3>Leave a comment</h3>
            <form onSubmit={handleSubmit}>
              <label>Username </label>
              <input
                required
                type="text"
                name="username"
                id="username"
                onChange={handleUsernameChange}
              />

              <label htmlFor="comment">Message</label>
              <textarea
                required
                name="comment"
                id="comment"
                onChange={handleCommentChange}
              ></textarea>
              <button type="submit">Comment</button>
            </form>
          </div>
        </div>

        <div className={styles.commentsContainer}>
          <h3>Comments ({comments.length}) </h3>
          <div className={styles.comments}>
            {comments.map((comment) => {
              return (
                <Comment
                  key={comment.id}
                  username={comment.username}
                  date={new Date(comment.createdAt)}
                  content={comment.content}
                />
              );
            })}
            {comments.length === 0 && <p> No comments yet...</p>}
          </div>
        </div>
      </section>
    </>
  );

  function Comment({ username, date, content }) {
    const formattedDate = date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
    return (
      <div className={styles.comment}>
        <div className={styles.commentInfo}>
          <span>{username}</span> <span>{formattedDate}</span>
        </div>
        <div className={styles.commentContent}>
          <p>{content}</p>
        </div>
      </div>
    );
  }
}
