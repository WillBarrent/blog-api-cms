import BlogEditor from "../../Components/BlogEditor/BlogEditor";
import styles from './BlogCreate.module.css';

function BlogCreate() {
    return <div className={styles.blogCreate}>
        <div className={styles.blogCreateContent}>
            <div className={styles.blogCreateTitle}>
                <input type="text" id="blogTitle"
                    className={styles.blogCreateTitleInput} placeholder="New post title here..." />
            </div>
            <BlogEditor />
            <button className={styles.blogCreatePublishBtn} type="button">Publish</button>
        </div>
    </div>;
}

export default BlogCreate;