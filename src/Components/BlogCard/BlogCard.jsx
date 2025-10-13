import { Link } from "react-router";
import styles from "./BlogCard.module.css";

function BlogCard({ title, createdAt, postId }) {
  async function deletePost() {
    await fetch("http://localhost:3000/api/posts/" + postId, {
      method: "DELETE",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
  }

  return (
    <div className={styles.blogCard}>
      <Link to={"/posts/" + postId}>
        <p className={styles.blogCardTitle}>{title}</p>
      </Link>
      <div className={styles.blogCardInfo}>
        <div className={styles.blogCardCreatedAt}>{createdAt}</div>
        <div className={styles.blogCardActions}>
          <button onClick={deletePost} className={styles.blogCardDelete}>
            Delete
          </button>
          <Link to={"/update-blog/" + postId}>
            <button className={styles.blogCardEdit}>Edit</button>
          </Link>
          <button className={styles.blogCardPublish}>Publish</button>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
