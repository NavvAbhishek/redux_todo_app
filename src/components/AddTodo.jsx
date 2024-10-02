import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault(); 

    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <div className="max-w-md mx-auto my-6 p-4 bg-white shadow-md rounded-md">
      <form onSubmit={addTodoHandler} className="flex flex-col">
        <label
          htmlFor="todo"
          className="mb-2 text-lg font-semibold text-gray-700"
        >
          Add a new Todo:
        </label>
        <input
          type="text"
          id="todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="p-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your task"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
