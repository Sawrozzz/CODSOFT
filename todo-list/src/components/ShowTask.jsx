import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, updateTodo , toggleTodo} from "../features/todo/todoSlice";

const ShowTask = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [editingId, setEditingId] = useState(null);
  const [newText, setNewText] = useState("");

  const handleEdit = (id, text) => {
    setEditingId(id);
    setNewText(text);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateTodo({ id: editingId, text: newText }));
    setEditingId(null);
  };

  const handleToggle = (id) => {
    dispatch(
      toggleTodo({
        id: id,
      })
    );
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100  p-4 md:p-0 ">
      <div className="text-2xl font-bold mb-4 text-center">Task List</div>
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="flex flex-col flex-wrap justify-between items-start gap-1 w-full md:max-w-xl px-4 py-4 bg-white shadow rounded-lg my-2"
        >
          {editingId === todo.id ? (
            <form
              onSubmit={handleUpdate}
              className=" flex flex-col justify-between flex-wrap gap-3"
            >
              <input
                className=" border-2 border-gray-900 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none "
                type="text"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
              />
              <button
                className="px-2 py-2 ml-3  text-white bg-green-500 rounded hover:bg-green-600"
                type="submit"
              >
                Update
              </button>
            </form>
          ) : (
            <>
              <span
                className={`text-lg text-center text-wrap text-blue-400 ${
                  todo.completed ? "line-through" : ""
                }`}
              >
                {todo.text}
              </span>
              <div className="flex gap-3 justify-center items-center">
                <button
                  onClick={() => dispatch(deleteTodo(todo.id))}
                  className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
                >
                  Delete
                </button>
                <button
                  className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
                  onClick={() => handleEdit(todo.id, todo.text)}
                >
                  Edit
                </button>
              </div>
              <input
                type="checkbox"
                className="h-6 w-6 mt-2"
                checked={todo.completed}
                onChange={() => handleToggle(todo.id)}
              />
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default ShowTask;
