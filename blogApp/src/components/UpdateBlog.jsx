import React from "react";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from "../firebase-config";

const UpdateBlog = () => {
  const { id } = useParams();
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedContent, setUpdatedContent] = useState(" ");
  const navigate = useNavigate();
  const postRef = doc(db, "posts", id);

  useEffect(() => {
    const post = async () => {
      const postDoc = await getDoc(postRef);
      if (postDoc.exists()) {
        setUpdatedTitle(postDoc.data().title);
        setUpdatedContent(postDoc.data().content);
      } else {
        console.log("No such document!");
      }
    };
    post();
  }, [id]);
  const handleUpdatePost = async (e) => {
    e.preventDefault();
    await updateDoc(postRef, {
      title: updatedTitle,
      content: updatedContent,
    });
    navigate("/");
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <form
          className="w-full max-w-md bg-white p-6 rounded-md"
          onSubmit={handleUpdatePost}
        >
          <h2 className="text-2xl font-bold mb-4">Update Your post</h2>
          <div className="mb-4">
            <label className="block text-gray-700">Title</label>
            <input
              type="text"
              value={updatedTitle}
              onChange={(e) => {
                setUpdatedTitle(e.target.value);
              }}
              className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Content</label>
            <textarea
              value={updatedContent}
              onChange={(e) => {
                setUpdatedContent(e.target.value);
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

export default UpdateBlog;
