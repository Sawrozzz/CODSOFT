import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; 

const Login = () => {
  const[name, setName] = useState("");  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 
  const navigate = useNavigate();

  const handleSignup=()=>{
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    navigate("/login");
  }

 


  return (
    <>
      <div className="flex flex-col sm:flex-row justify-around  ">
        <section className="flex justify-center items-center mt-5 ">
          <div className="w-full max-w-md bg-white p-8 rounded ">
            <h1 className="text-center text-2xl font-semibold text-gray-700 mb-8">
              SignUp Here👇
            </h1>
            <form className="space-y-4" onSubmit={handleSignup} method="post">
              <input
                type="text"
                placeholder="Enter your name"
                onChange={(e)=>setName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
              />
              <input
                type="email"
                placeholder="Enter your email"
                onChange={(e)=>setEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
              />
              <input
                type="password"
                placeholder="Enter your password"
                onChange={(e)=>setPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
              />
              <button className="w-full py-2 px-4 bg-green-600 text-white font-semibold rounded hover:bg-green-500">
                SignUp
              </button>
            </form>
          </div>
        </section>
        <section className="flex justify-center items-center mt-5 ">
          <div className="w-full max-w-md bg-white p-8 rounded ">
            <h1 className="text-center text-2xl font-semibold text-gray-700 mb-8">
              Login Here👋
            </h1>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
              <button className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded hover:bg-blue-500">
                Login
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
