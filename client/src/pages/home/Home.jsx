import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Home = () => {
  const { auth } = useSelector((state) => ({ ...state }));
  const { currentUser } = auth;

  return (
    <div className='bg-gradient-to-r from-slate-900 to-blue-900 w-screen h-screen flex items-center justify-center'>
      <div className='text-center p-10 bg-opacity-90 bg-white rounded-lg shadow-lg'>
        <h2 className='text-4xl font-bold text-cyan-600 mb-4 animate-pulse'>
          Organize it all
        </h2>
        <p className='text-xl text-cyan-600 mb-8'>
          With TaskManager
        </p>
        {currentUser && currentUser.token ? (
          <Link 
            to='/dashboard' 
            className='inline-block px-8 py-4 text-lg font-semibold text-blue-100 bg-cyan-700 hover:bg-cyan-600 rounded-lg shadow transition-all duration-300'
          >
            Get Started
          </Link>
        ) : (
          <Link 
            to='/signin' 
            className='inline-block px-8 py-4 text-lg font-extrabold text-blue-50 bg-blue-700 hover:bg-blue-600 rounded-lg shadow transition-all duration-300 mt-6'
          >
            Get Started
          </Link>
        )}
      </div>
    </div>
  );
};

export default Home;
