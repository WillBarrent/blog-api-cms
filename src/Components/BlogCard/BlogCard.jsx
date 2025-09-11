import styles from './BlogCard.module.css';

function BlogCard() {
    return <div className={styles.blogCard}>
        <div className={styles.blogCardInfo}>
            <div className={styles.blogCardTitle}>Post title</div>
            <div className={styles.blogCardCreatedAt}>11/09/2025</div>
        </div>
        <div className={styles.blogCardActions}>
            <div className={styles.blogCardDelete}>Delete</div>
            <div className={styles.blogCardEdit}>Edit</div>
            <div className={styles.blogCardPublish}>Publish</div>
        </div>
    </div>;
}

export default BlogCard;