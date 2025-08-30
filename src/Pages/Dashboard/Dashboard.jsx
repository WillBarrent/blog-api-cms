import styles from "./Dashboard.module.css";

function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboardContent}>
        <h1 className={styles.dashboardTitle}>Dashboard</h1>
        <div className={styles.dashboardInformation}>
          <div className={styles.dashboardInformationBlock}>
            <h1 className={styles.dashboardInformationBlockCount}>0</h1>
            <div className={styles.dashboardInformationBlockTitle}>
              Total post comments
            </div>
          </div>
          <div className={styles.dashboardInformationBlock}>
            <h1 className={styles.dashboardInformationBlockCount}>0</h1>
            <div className={styles.dashboardInformationBlockTitle}>
              Total posts created
            </div>
          </div>
        </div>
        <div className={styles.dashboardPosts}>
          <h2 className={styles.dashboardPostsTitle}>Posts</h2>
          <div className={styles.dashboardPostsSection}>
            <div className={styles.dashboardPostsNotFound}>
              <div className={styles.dashboardPostsNotFoundTitle}>
                This is where you can manage your posts, but you haven't written
                anything yet.
              </div>
              <button className={styles.dashboardPostsCreateBtn}>
                Write your first post now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
