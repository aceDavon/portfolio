import React from 'react';
// import { FeaturedURL } from '../../data/featuredcards';

const CommonCard = ({ sx, others }) => {
  let { handleModal, modalData } = others;
  modalData = modalData.x;

  return modalData ? (
    <div
      className={`flex justify-center ${sx}`}
      onClick={(e) => handleModal(e)}
    >
      <span className='font-bold text-4xl absolute top-1 right-4 text-slate-400 hover:cursor-pointer hover:text-slate-700'>
        X
      </span>
      <div className='rounded-lg shadow-lg bg-white max-w-sm my-10'>
        <a
          href='#!'
          modalData-mdb-ripple='true'
          modalData-mdb-ripple-color='light'
        >
          <img
            className='rounded-t-lg'
            src={modalData.repoImg}
            alt={modalData.id}
          />
        </a>
        <div className='p-6'>
          <h5 className='text-gray-900 text-xl font-medium mb-2'>
            {modalData.name}
          </h5>
          <p className='text-gray-700 text-base mb-4'>
            {modalData.description}
          </p>
          <button
            type='button'
            className=' inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out'
            onClick={() => window.location.href = modalData.live}
          >
            Live Project
          </button>
        </div>
      </div>
    </div>
  ) : (
    'No Project for now :('
  );
};

export default CommonCard;
