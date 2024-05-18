import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTasks } from '../../redux/taskSlice';
import ListCard from './ListCard';

const TaskList = () => {
    const auth = useSelector((state) => state.auth);
    const tasks = useSelector((state) => state.task);

    const { currentUser } = auth;
    const { AllTasks } = tasks;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllTasks(currentUser.token, currentUser.id));
    }, [dispatch, currentUser.token, currentUser.id]);

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 '>
            {Object.values(AllTasks).map((item) => (
                <div key={item._id} >
                    <ListCard item={item} />
                </div>
            ))}
        </div>
    );
};

export default TaskList;
