import { useRef, useState } from "react";
import BlogEditor from "../../Components/BlogEditor/BlogEditor";
import styles from './BlogCreate.module.css';
import { useNavigate } from "react-router";

function BlogCreate() {
    const editorRef = useRef(null);

    const [title, setTitle] = useState();

    const navigate = useNavigate();

    async function getHtmlContent() {
        const content = editorRef.current.getContent().split("\n").join('');

        const beforeCodeTagIndexes = Array.from(content.matchAll("<code>")).map((array) => array.index + 6);
        const afterCodeTagIndexes = Array.from(content.matchAll("</pre>")).map((array) => array.index - 7);

        let replacedContent = null;

        for (let i = 0; i < beforeCodeTagIndexes.length; i++) {
            const code = content.substring(beforeCodeTagIndexes[i], afterCodeTagIndexes[i]);
            const highlightedCode = Prism.highlight(code, Prism.languages.js, "js");

            replacedContent = content.replaceAll(content.substring(beforeCodeTagIndexes[i] - 6, afterCodeTagIndexes[i] + 7), highlightedCode);
        }

        await fetch("http://localhost:3000/api/posts", {
            method: "POST",
            mode: "cors",
            headers: {
                "Authorization": localStorage.getItem('token'),
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title: title, "content": (replacedContent === null) ? content : replacedContent }),
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