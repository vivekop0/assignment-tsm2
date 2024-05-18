import { useState } from "react";

import { addTask } from "../../redux/taskSlice";
import { useDispatch, useSelector } from "react-redux";

const AddTask = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => ({ ...state }));
  const { currentUser } = auth;
  const [state, setState] = useState({
    task: "",
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(state.task, currentUser.id));
    setState({
      task: "",
    });
  };

  return (
    <div>
      <div className="addtask">
        ={" "}
        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
          <div className="relative">
            <input
              type="text"
              name="task"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={handleChange}
              value={state.task}
              placeholder="Add ...."
              required
            />

            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              AddTask
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
