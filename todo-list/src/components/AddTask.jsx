import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
const AddTask = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const emptyTodo = input.trim();
    if (!emptyTodo) return alert("Please enter a todo");
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center flex-col justify-start mt-5 bg-gray-100 p-4"
    >
      <input
        type="text"
        placeholder="Add your todo here...."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border-2 w-[80%]  bg-white h-20 px-5 pr-16 rounded-lg text-sm focus:outline-none"
      />
      <button
        type="submit"
        className=" w-full max-w-24 mt-3 h-8 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
      >
        Add
      </button>
    </form>
  );
};

export default AddTask;
