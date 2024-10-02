import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <div className="text-center">
      <div className="text-xl font-bold">📌Todos</div>
      {todos.length > 0 ? (
        todos.map((todo) => (
          <div
            key={todo.id}
            className="flex justify-between items-center my-2 p-2 bg-gray-100 rounded-md shadow-sm max-w-md mx-auto"
          >
            <span>{todo.text}</span>
            <button
              onClick={()=> dispatch(removeTodo(todo.id))}
              className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 transition duration-200"
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <div className="text-gray-500 mt-4">No todos available.</div>
      )}
    </div>
  );
};

export default Todos;
