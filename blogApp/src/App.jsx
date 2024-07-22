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
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
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
        <nav className="bg-gray-900 text-white px-6 py-4 sticky top-0 z-50 flex flex-wrap items-center justify-between">
          <Link to="/" className="text-2xl font-bold">
            MyBlog
          </Link>
          <div className=" md:hidden flex flex-col ">
            <button
              onClick={toggleMenu}
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block  "
            >
              <span className="block relative w-6 h-px rounded-sm bg-white"></span>
              <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
              <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
            </button>
            <div
              className={`md:flex items-end md:w-auto w-full ${
                isOpen ? "" : "hidden"
              }`}
              id="menu"
            >
              <nav>
                <ul className="md:flex  text-base text-white pt-4 md:pt-0">
                  <li>
                    <Link
                      className="text-lg px-3 py-2 rounded hover:bg-gray-700"
                      to="/"
                    >
                      Home
                    </Link>
                    {isAuth ? (
                      <>
                        <section className="flex flex-col ">
                          <Link
                            to="/create"
                            className="text-lg px-3 py-2 rounded hover:bg-gray-700"
                          >
                            CreatePost
                          </Link>
                          <Link
                            to="/profile"
                            className="text-lg px-3 py-2 rounded hover:bg-gray-700"
                          >
                            Profile
                          </Link>
                          <button
                            className="bg-green-500 hover:bg-red-700 py-2 px-3 text-white text-center rounded"
                            onClick={Logout}
                          >
                            Logout
                          </button>
                        </section>
                      </>
                    ) : (
                      <section className="flex flex-col mt-2">
                        <Link
                          className="bg-blue-500 hover:bg-blue-700 py-2 px-3 text-white text-center rounded"
                          to="/login"
                        >
                          Login
                        </Link>
                      </section>
                    )}
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div
            className="hidden md:flex md:items-center md:w-auto w-full"
            id="menu"
          >
            <nav className=" p-2 mt-0 w-full">
              <div className=" mx-auto flex flex-wrap items-end">
                <div className=" md:w-1/2 md:justify-end">
                  <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
                    <li className="mr-3">
                      <Link
                        className="inline-block py-2 px-4 text-white no-underline"
                        to="/"
                      >
                        Home
                      </Link>
                    </li>
                    {isAuth ? (
                      <>
                        <li className="mr-3">
                          <Link
                            className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
                            to="/create"
                          >
                            CreatePost
                          </Link>
                        </li>
                        <li className="mr-3">
                          <Link
                            className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
                            to="/profile"
                          >
                            Profile
                          </Link>
                        </li>
                        <li className="mr-3">
                          <button
                            className="bg-red-500 hover:bg-red-700 py-2 px-3 text-white text-center rounded"
                            onClick={Logout}
                          >
                            Logout
                          </button>
                        </li>
                      </>
                    ) : (
                      <li className="mr-3">
                        <Link
                          className="inline-block bg-blue-500 rounded no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
                          to="/login"
                        >
                          Login
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </nav>
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
