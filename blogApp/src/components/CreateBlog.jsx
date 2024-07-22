import React from "react";
import { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

const CreateBlog = ({ isAuth }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const postRef = collection(db, "posts");
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  },[]);

  const handleCreatePost = async (e) => {
    e.preventDefault();
    await addDoc(postRef, {
      title,
      content,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/");
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <form
          className="w-full max-w-md bg-white p-6 rounded-md"
          onSubmit={handleCreatePost}
        >
          <h2 className="text-2xl font-bold mb-4">Create a new post</h2>
          <div className="mb-4">
            <label className="block text-gray-700">Title</label>
            <input
              type="text"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Content</label>
            <textarea
              onChange={(e) => {
                setContent(e.target.value);
              }}
              className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md h-32"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-md mt-4"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateBlog;
