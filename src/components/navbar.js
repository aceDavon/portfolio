import React from 'react';
import { Facebook, Hamburger, Twitter, Whatsapp } from './common/icons';
import Dashboard from './dashboard';

const Navbar = () => {
  const [dashboard, setDashboard] = React.useState(false);

  const ShowDashBoard = () => {
    setDashboard(!dashboard);
  };

  return (
    <nav className=' relative w-full flex flex-wrap items-center justify-between py-4 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg navbar navbar-expand-lg navbar-light'>
      {dashboard && (
        <Dashboard
          sx={
            'fixed left-5 md:left-44 top-5 bottom-5 right-5 md:right-44 rounded-xl bg-purple-100 backdrop-blur-lg wiggle z-50'
          }
          others={ShowDashBoard}
        />
      )}
      <div className='container-fluid w-full flex flex-wrap items-center justify-between px-6'>
        <button
          className=' navbar-toggler text-gray-500 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
    '
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <Hamburger />
        </button>
        <div
          className='collapse navbar-collapse flex-grow items-center relative'
          id='navbarSupportedContent'
        >
          <a
            className=' flex items-center text-gray-900 hover:text-gray-900 focus:text-gray-900 mt-2 lg:mt-0 mr-1 transition ease-in hover:scale-75  delay-150'
            href='/'
          >
            <span className='text-blue-400 font-bold text-2xl'>
              Makoji David
            </span>
          </a>
          <ul className='navbar-nav flex flex-col pl-0 list-style-none ml-auto'>
            <li className='nav-item p-2 transition delay-150 ease-in hover:-translate-y-1'>
              <a
                whilehover={{ translateX: 6 }}
                className='nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0'
                href='#'
                onClick={() => ShowDashBoard()}
              >
                Dashboard
              </a>
            </li>
            <li className='nav-item p-2 transition delay-150 ease-in hover:-translate-y-1'>
              <a
                className='nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0'
                href='/#about'
              >
                About
              </a>
            </li>
            <li className='nav-item p-2 transition delay-150 ease-in hover:-translate-y-1'>
              <a
                className='nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0'
                href='/#portfolio'
              >
                Portfolio
              </a>
            </li>
            <li className='nav-item p-2 transition delay-150 ease-in hover:-translate-y-1'>
              <a
                className='nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0'
                href='/#contact'
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className='flex items-center relative'>
          <div className='dropdown relative'>
            <a
              className='dropdown-toggle flex items-center hidden-arrow'
              href='/'
              id='dropdownMenuButton2'
              role='button'
              data-bs-toggle='dropdown'
              aria-expanded='false'
            >
              <img
                src='https://avatars.githubusercontent.com/u/57240208?v=4'
                className='rounded-full transition duration-150  ease-in-out'
                data-bs-toggle='tooltip'
                data-bs-placement='bottom'
                title='Click to connect'
                style={{ height: '25px', width: '25px' }}
                alt=''
                loading='lazy'
              />
            </a>
            <ul
              className='dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none left-auto right-0 '
              aria-labelledby='dropdownMenuButton2'
            >
              <li>
                <a
                  className='dropdown-item text-sm py-2 px-2 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 relative'
                  href='https://wa.me/+2347018669454'
                  noreferrer
                  target={'_blank'}
                >
                  WhatsApp <Whatsapp />
                </a>
              </li>
              <li>
                <a
                  className='dropdown-item text-sm py-2 px-2 font-normal block w-full whitespace-nowrap bg-transparent text-gray-70 hover:bg-gray-100 relative'
                  href='https://www.facebook.com/aceDavon/'
                  noreferrer
                  target={'_blank'}
                >
                  Facebook
                  <div className='text-blue-300 w-12 h-6 pl-3 absolute right-0 top-2'>
                    {' '}
                    <Facebook />{' '}
                  </div>
                </a>
              </li>
              <li>
                <a
                  className='dropdown-item text-sm py-2 px-2 font-normal block w-full whitespace-nowrap bg-transparent text-gray-70 hover:bg-gray-100 relative'
                  href='https://twitter.com/sharkleshevon'
                  noreferrer
                  target={'_blank'}
                >
                  Twitter
                  <div className='text-blue-300 w-12 h-6 pl-3 absolute right-0 top-2'>
                    <Twitter />
                  </div>
                </a>
              </li>
              <li
                className='dropdown-itemtext-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100'
                href='/'
              >
                I reply within an hour
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
