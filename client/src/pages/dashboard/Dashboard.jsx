import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllTasks } from "../../redux/taskSlice";
import { DefaultSidebar } from "../../components/sidebar/Sidebar";

const Dashboard = () => {
  const tasklist = useSelector((state) => state.task);
  const { AllTasks } = tasklist;
  const user = useSelector((state) => state.auth);
  const { currentUser } = user;

  let pendingTask = [];
  let completedTask = [];
  for (let i = 0; i < AllTasks.length; i++) {
    if (AllTasks[i].status === "todo") {
      pendingTask.push(AllTasks[i]);
    } else if (AllTasks[i].status === "done") {
      completedTask.push(AllTasks[i]);
    }
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTasks(currentUser.token, currentUser.id));
  }, [dispatch, currentUser.token, currentUser.id]);

  return (
    <div className="flex h-screen">
      <div className="pr-2">
        <DefaultSidebar />
      </div>
      <div className="flex-1">
        <div className="flex flex-col items-center mt-5 space-y-5 md:space-y-0 md:flex-row md:space-x-10 md:justify-center">
          <div className="max-w-sm p-10 md:p-14 lg:p-20 font-extrabold bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-gray-900 dark:text-white">
            Todo - {pendingTask.length}
          </div>
          <div className="max-w-sm p-10 md:p-14 lg:p-20 font-extrabold bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-gray-900 dark:text-white">
            Complete - {completedTask.length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
