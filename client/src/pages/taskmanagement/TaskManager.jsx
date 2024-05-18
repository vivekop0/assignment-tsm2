import { DefaultSidebar } from '../../components/sidebar/Sidebar';
import AddTask from '../../components/taskmanager/AddTask';
import TaskList from '../../components/taskmanager/TaskList';

const TaskManager = () => {
	return (
		<div className='flex h-screen'>
			<div className='h-full'>
				<DefaultSidebar />
			</div>
			<div className='flex flex-col flex-grow'>
				<div className='taskmanager__addtask p-4'>
					<AddTask />
				</div>
				<div className='taskmanager__tasklist p-4 flex-grow overflow-y-auto'>
					<TaskList />
				</div>
			</div>
		</div>
	);
};

export default TaskManager;
