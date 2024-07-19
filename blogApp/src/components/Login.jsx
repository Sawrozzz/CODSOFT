import React from "react";

import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const Login = ({ setAuth }) => {
  const navigate = useNavigate();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setAuth(true);
      navigate("/");
    });
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center p-10 rounded-lg ">
        <h1 className="text-6xl font-semibold mb-6 text-gray-700">Login Here</h1>
        <p className="mb-4 text-2xl text-gray-500">Please Login with Google</p>
        <button
          onClick={signInWithGoogle}
          className="flex items-center justify-center bg-white hover:bg-blue-700 text-gray-900 font-semibold py-2 px-4 border border-gray-300 rounded shadow"
        >
          <FaGoogle className="mr-2 text-red-500" />
          Login with Google
        </button>
      </div>
    </>
  );
};

export default Login;
