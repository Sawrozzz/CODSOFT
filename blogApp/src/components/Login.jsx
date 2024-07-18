import React from "react";

import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

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
      <div className="flex flex-col justify-center items-center">
        <h2 className=" text-4xl mb-6">Login</h2>
        <p className="mb-4"> Please Login with google</p>
        <button className="border border-black" onClick={signInWithGoogle}>
          Login
        </button>
      </div>
    </>
  );
};

export default Login;
