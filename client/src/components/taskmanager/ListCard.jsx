/* eslint-disable react/prop-types */
import { BiChevronLeft, BiChevronRight, BiTrash } from 'react-icons/bi';
import { arrowClick, deleteItem } from '../../redux/taskSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const ListCard = (items) => {
  const { item } = items;
  const dispatch = useDispatch();

  const ArrowClick = (string) => {
    dispatch(arrowClick(item, string));
  };

  const handleDelete = () => {
    dispatch(deleteItem(item._id));
  };

  return (
    <div className=' flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full sm:w-96 '>
      <div className='p-6 '>
        <h5 className='block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900'>
          {item.status}
        </h5>
        <p className='block font-sans text-base antialiased font-light leading-relaxed text-inherit'>
          {item.task}
        </p>
      </div>
      <div className='p-6 pt-0 flex space-x-2'>
        <button
          className='align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none'
          disabled={item.status === 'backlog'}
          onClick={() => ArrowClick('left')}
          type='button'
        >
          <BiChevronLeft />
        </button>
        <button
          className='align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none'
          disabled={item.status === 'done'}
          onClick={() => ArrowClick('right')}
          type='button'
        >
          <BiChevronRight />
        </button>
        <button
          className='align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none'
          onClick={handleDelete}
          type='button'
        >
          <BiTrash />
        </button>
        <Link
          className='align-middle select-none font-sans font-bold text-center uppercase transition-all text-xs py-3 px-6 rounded-lg bg-blue-700 text-white shadow-md shadow-blue-700/10 hover:shadow-lg hover:shadow-blue-700/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none'
          to={`/edit/${item._id}`}
        >
          Edit
        </Link>
      </div>
    </div>
  );
};

export default ListCard;
