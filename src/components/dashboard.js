import { data } from 'autoprefixer';
import axios from 'axios';
import * as React from 'react';
import { Facebook, LinkedIn, Twitter } from './common/icons';

const Dashboard = ({ sx, others }) => {
  const [user, setUser] = React.useState([]);

  React.useEffect(
    () => async () => {
      const url = `https://api.github.com/users/aceDavon`;
      const data = await fetch(url);
      const res = await data.json();
      setUser(res);
    },
    []
  );
  return (
    <div className={sx}>
      <div className='flex justify-center'>
        <div className='rounded-lg shadow-lg bg-white max-w-sm my-16'>
          <a href='#!' data-mdb-ripple='true' data-mdb-ripple-color='light'>
            <img
              className='rounded-full w-40 h-40 mx-auto my-5'
              src={user.avatar_url}
              alt=''
            />
          </a>
          <div className='p-6'>
            <a
              href={user.html_url}
              className='text-gray-900 text-xl font-medium mb-2 hover:cursor-pointer'
            >
              {user.name}
            </a>
            <span className='block my-1 font-thin text-base text-gray-500 italic'>
              {user.location}
            </span>
            <p className='text-gray-700 text-base mb-4'>{user.bio}</p>
            <div className='flex gap-4 mt-3'>
              <span className='text-sm'>Repo Count: {user.public_repos}</span>
              <span className='text-sm'>Gist Count: {user.public_gists}</span>
            </div>
            <div className='flex gap-2 mt-3'>
              <button
                type='button'
                className=' flex items-center gap-1 px-1 py-1.5 bg-sky-500 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
                onClick={() =>
                  (window.location.href = 'https://twitter.com/sharkleshevon')
                }
              >
                <Twitter /> @Sharkleshevon
              </button>
              <button
                type='button'
                className=' flex items-center gap-1 px-1 py-1.5 bg-blue-900 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
                onClick={() =>
                  (window.location.href ='https://www.linkedin.com/in/david-makoji-b6090971/')
                }
              >
                <LinkedIn /> Makoji David
              </button>
              <button
                type='button'
                className=' flex items-center gap-1 px-1 py-1.5 bg-blue-700 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
                onClick={() =>
                  (window.location.href = 'https://facebook.com/aceDavon')
                }
              >
                <Facebook /> aceDavon
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
