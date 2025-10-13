import { Link } from "react-router";
import styles from "./Header.module.css";
import { Search } from "lucide-react";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <h1 className={styles.headerLogo}>
          <div>DEV</div>
        </h1>
        <div className={styles.headerActions}>
          <Link to="/create-blog" className={styles.headerCreatePostBtn}>Create post</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
