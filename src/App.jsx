import { useLocation, useNavigate } from 'react-router';
import './App.css';

import Header from "./Components/Header/Header";
import Dashboard from './Pages/Dashboard/Dashboard';
import Login from './Pages/Login/Login';
import { useEffect } from 'react';
import BlogCreate from './Pages/BlogCreate/BlogCreate';

function App() {
  const location = useLocation();
  const locationPathName = location.pathname;
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("token");

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, []);


  return (
    <>
      <Header />
      {(locationPathName === '/login') ? <Login /> : (locationPathName === '/create-blog') ? <BlogCreate /> : <Dashboard />}
    </>
  );
}

export default App;
