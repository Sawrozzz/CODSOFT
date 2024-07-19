import React from "react";
import CreateBlog from "./components/CreateBlog";
import Home from "./components/Home";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./index.css";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import UpdateBlog from "./components/UpdateBlog";

const App = () => {
  const [isAuth, setAuth] = useState(localStorage.getItem("isAuth"));
  const Logout = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setAuth(false);
      window.location.assign("/login");
    });
  };

  return (
    <>
      <BrowserRouter>
        <nav className="bg-gray-900 font-sans text-white flex justify-around gap-4 py-5 sticky top-0 z-50  ">
          <Link to='/'>MyBlog</Link>
          <div className="flex  gap-5 items-center ">
            <Link to="/">Home</Link>
            {isAuth ? (
              <>
                <Link to="/create">CreatePost</Link>

                <Link to="/profile">Profile</Link>
                <button
                  className="bg-red-500 hover:bg-red-700 py-1 px-2 text-white text-center rounded"
                  onClick={Logout}
                >
                  Logout
                </button>
              </>
            ) : (
              <Link className="bg-blue-500 hover:bg-blue-700 py-1 px-2 text-white text-center rounded" to="/login">Login</Link>
            )}
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home isAuth={isAuth} />} />
          <Route path="/login" element={<Login setAuth={setAuth} />} />
          <Route path="/create" element={<CreateBlog isAuth={isAuth} />} />
          <Route path="/update/:id" element={<UpdateBlog isAuth={isAuth} />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
