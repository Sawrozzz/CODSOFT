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


const App = () => {
  const [isAuth, setAuth] = useState(false);
  const Logout = () => {
signOut(auth).then(()=>{
  localStorage.clear();
  setAuth(false);
  window.location.assign("/login");
});
}

  return (
    <>
      <BrowserRouter>
        <nav className="bg-gray-900 text-2xl text-white flex justify-end gap-4 pr-10 py-5">
          <Link to="/">Home</Link>
          <Link to="/create">Create Post</Link>
          {isAuth ? (
            <>
              <Link to="/profile">Profile</Link>
              <button  onClick={Logout}>Logout</button>
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setAuth={setAuth} />} />
          <Route path="/create" element={<CreateBlog />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
