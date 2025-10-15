import { useEffect, useState } from "react";
import BlogCard from "../../Components/BlogCard/BlogCard";
import styles from "./Dashboard.module.css";
import { Link } from "react-router";

function Dashboard() {
  const [posts, setPosts] = useState("");

  useEffect(() => {
    let ignore = false;

    fetch("http://localhost:3000/api/posts", {
      mode: "cors",
    })
      .then((result) => result.json())
      .then((data) => {
        if (!ignore) {
          setPosts(data.posts);
        }
      });

    return () => {
      ignore = true;
    };
  }, []);

  async function deletePost(postId) {
    await fetch("http://localhost:3000/api/posts/" + postId, {
      method: "DELETE",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });

    const updatedPosts = posts.filter((post) => {
      if (post.id !== postId) {
        return post;
      }
    });

    setPosts(updatedPosts);
  }

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
            <h1 className={styles.dashboardInformationBlockCount}>{posts === "" ? 0 : posts.length}</h1>
            <div className={styles.dashboardInformationBlockTitle}>
              Total posts created
            </div>
          </div>
        </div>
        <div className={styles.dashboardPosts}>
          <h2 className={styles.dashboardPostsTitle}>Posts</h2>
          <div className={styles.dashboardPostsSection}>
            {posts === "" ? (
              <div className={styles.dashboardPostsNotFound}>
                <div className={styles.dashboardPostsNotFoundTitle}>
                  This is where you can manage your posts, but you haven't
                  written anything yet.
                </div>
                <Link to="/create-blog">
                  <button className={styles.dashboardPostsCreateBtn}>
                    Write your first post now
                  </button>
                </Link>
              </div>
            ) : (
              posts.map((post) => {
                const createdAt = new Date(post.createdAt);
                const date = createdAt.getDate();
                const getMonth = createdAt.getMonth() + 1;
                const getYear = createdAt.getFullYear();

                return (
                  <BlogCard
                    title={post.title}
                    createdAt={`${date}/${
                      getMonth % 10 === getMonth ? `0${getMonth}` : getMonth
                    }/${getYear}`}
                    postId={post.id}
                    isPublished={post.published}
                    content={post.content}
                    deletePost={deletePost}
                  />
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
