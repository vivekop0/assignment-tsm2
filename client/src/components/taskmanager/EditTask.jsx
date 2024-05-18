import  { useState } from "react";
import { editTask } from "../../redux/taskSlice";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const EditTask = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [state, setState] = useState({
    updatedTask: "",
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(editTask(id, state.updatedTask)); // Dispatch editTask action with id
    setState({
      updatedTask: "",
    });
    window.location.href = '/taskmanager'; // Redirect to the task manager page after updating the task
  };

  return (
    <div>
      <div className="edittask">
        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
          <div className="relative">
            <input
              type="text"
              name="updatedTask"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={handleChange}
              value={state.updatedTask}
              placeholder="Edit ...."
              required
            />

            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Edit Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTask;
