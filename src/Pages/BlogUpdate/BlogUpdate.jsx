import { useEffect, useRef, useState } from "react";
import BlogEditor from "../../Components/BlogEditor/BlogEditor";
import styles from "./BlogUpdate.module.css";
import { useNavigate, useParams } from "react-router";

function BlogUpdate() {
  const editorRef = useRef(null);
  const [title, setTitle] = useState();
  const [post, setPost] = useState("");
  const navigate = useNavigate();
  const params = useParams();
  const postId = params.postId;

  useEffect(() => {
    let ignore = false;

    fetch("http://localhost:3000/api/posts/" + postId, {
      mode: "cors",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((result) => result.json())
      .then((data) => {
        if (!ignore) {
          setPost(data.post);
          setTitle(data.post.title);
        }
      });

    return () => {
      ignore = true;
    };
  }, []);

  async function updateBlog() {
    let content = editorRef.current.getContent();

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
        published: post.published,
      }),
    });

    navigate("/");
  }

  return (
    <div className={styles.blogUpdate}>
      <form action={updateBlog} className={styles.blogUpdateForm}>
        <div className={styles.blogUpdateTitle}>
          <input
            type="text"
            id="blogTitle"
            value={post === "" ? "" : post.title}
            className={styles.blogUpdateTitleInput}
            placeholder="New post title here..."
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <BlogEditor
          content={post === "" ? "" : post.content}
          editorRef={editorRef}
        />
        <button className={styles.blogUpdatePublishBtn}>Update</button>
      </form>
    </div>
  );
}

export default BlogUpdate;
