import { Link } from "react-router";
import styles from "./BlogCard.module.css";
import { useState } from "react";

function BlogCard({
  title,
  content,
  createdAt,
  postId,
  isPublished,
  deletePost,
}) {
  const [published, setPublished] = useState(isPublished);

  async function updatePost() {
    await fetch("http://localhost:3000/api/posts/" + postId, {
      method: "PUT",
      mode: "cors",
      headers: {
        Authorization: localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        content: content,
        published: !published,
      }),
    });

    setPublished(!published);
  }

  return (
    <div className={styles.blogCard}>
      <Link to={"/posts/" + postId}>
        <p className={styles.blogCardTitle}>{title}</p>
      </Link>
      <div className={styles.blogCardInfo}>
        <div className={styles.blogCardCreatedAt}>{createdAt}</div>
        <div className={styles.blogCardActions}>
          <button
            onClick={() => {
              deletePost(postId);
            }}
            className={styles.blogCardDelete}
          >
            Delete
          </button>
          <Link to={"/update-blog/" + postId}>
            <button className={styles.blogCardEdit}>Edit</button>
          </Link>
          <button
            onClick={() => updatePost()}
            className={styles.blogCardPublish}
          >
            {published ? "Archive" : "Publish"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
