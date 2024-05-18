import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
  const { auth } = useSelector((state) => ({ ...state }));

  return (
    <header className='bg-gradient-to-r from-blue-500 to-blue-700 shadow-lg'>
      <nav className='container mx-auto flex justify-between items-center p-4'>
        <div className='text-white font-bold text-xl'>
          <h5>Task Manager</h5>
        </div>
        <div>
          {auth.currentUser && auth.currentUser.token ? (
            <>
              
            </>
          ) : (
            <>
              <Link
                to='/signin'
                className='p-2 text-white font-semibold hover:text-blue-200 transition-colors duration-300'
              >
                Sign In
              </Link>
              <Link
                to='/signup'
                className='ml-4 p-2 text-white font-semibold hover:text-blue-200 transition-colors duration-300'
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
