import { useLocation, useNavigate, useParams } from "react-router";
import "./App.css";

import Header from "./Components/Header/Header";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Login from "./Pages/Login/Login";
import Post from "./Pages/Post/Post";
import { useEffect } from "react";
import BlogCreate from "./Pages/BlogCreate/BlogCreate";
import BlogUpdate from "./Pages/BlogUpdate/BlogUpdate";

function App() {
  const location = useLocation();
  const params = useParams();
  const locationPathName = location.pathname;
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("token");
  const postId = params.postId;

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <Header />
      {locationPathName === "/login" ? (
        <Login />
      ) : locationPathName === "/create-blog" ? (
        <BlogCreate />
      ) : postId !== undefined && locationPathName.startsWith("/posts/") ? (
        <Post />
      ) : postId !== undefined && locationPathName.startsWith("/update-blog/") ? (
        <BlogUpdate />
      ) : (
        <Dashboard />
      )}
    </>
  );
}

export default App;
