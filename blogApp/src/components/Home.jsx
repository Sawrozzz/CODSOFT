import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db, auth } from "../firebase-config";

const Home = ({ isAuth }) => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  const postRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postRef);
      setPosts(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    };
    getPosts();
  });

  const deleteOnePost = async (id) => {
    const post = doc(db, "posts", id);
    await deleteDoc(post);
  };

  const handleEditPost = (id) => {
    navigate(`/update/${id}`);
  };

  return (
    <>
      <div className="flex flex-col-reverse">
        {posts.map((post) => (
          <div key={post.id} className="bg-white p-4 m-4 rounded-md shadow-md">
            <h1 className="text-xl font-bold">{post.title}</h1>
            <p>{post.content}</p>
            <p className="text-sm text-gray-500">@{post.author.name}</p>
            {isAuth && post.author.id === auth.currentUser.uid && (
              <>
                <div className="flex gap-4">
                  <button
                    onClick={() => deleteOnePost(post.id)}
                    className="bg-red-500 hover:bg-red-700 mt-2 text-white font-bold py-2 px-2 rounded"
                  >
                    Delete Post
                  </button>
                  <button
                    onClick={() => {
                      handleEditPost(post.id, post.title, post.content);
                    }}
                    className="bg-green-500 hover:bg-green-700 mt-2 text-white font-bold py-2 px-2 rounded"
                  >
                    Update Post
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
