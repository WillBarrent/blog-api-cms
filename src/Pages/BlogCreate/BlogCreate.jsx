import { useRef, useState } from "react";
import BlogEditor from "../../Components/BlogEditor/BlogEditor";
import styles from './BlogCreate.module.css';
import { useNavigate } from "react-router";

function BlogCreate() {
    const editorRef = useRef(null);

    const [title, setTitle] = useState();

    const navigate = useNavigate();

    async function getHtmlContent() {
        let content = editorRef.current.getContent();

        await fetch("http://localhost:3000/api/posts", {
            method: "POST",
            mode: "cors",
            headers: {
                "Authorization": localStorage.getItem('token'),
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title: title, content: content }),
        });

        navigate("/");
    }

    return <div className={styles.blogCreate}>
        <form action={getHtmlContent} className={styles.blogCreateForm}>
            <div className={styles.blogCreateTitle}>
                <input type="text" id="blogTitle"
                    className={styles.blogCreateTitleInput} placeholder="New post title here..."
                    onChange={(e) => setTitle(e.target.value)} />
            </div>
            <BlogEditor editorRef={editorRef} />
            <button className={styles.blogCreatePublishBtn}>Publish</button>
        </form>
    </div>;
}

export default BlogCreate;  