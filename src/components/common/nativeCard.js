import React from 'react'
import TimeAgo from './timeAgo';

const NativeCard = ({cardMedia, cardContent}) => {
  return (
    <div className='flex justify-center'>
      <div className='flex flex-col md:flex-row w-full rounded-lg bg-white shadow-lg swaps'>
        <img
          className=' w-full h-60 object-cover md:w-60 rounded-t-lg md:rounded-none md:rounded-l-lg'
          src={cardMedia}
          alt=''
        />
        <div className='p-6 flex flex-col justify-start'>
          <h5 className='text-gray-900 text-xl font-medium mb-2'>{cardContent.name}</h5>
          <p className='text-gray-700 text-base mb-4'>
            {cardContent.description}
          </p>
          <span className='text-gray-600 text-xs'>{<TimeAgo content={cardContent}/>}</span>
        </div>
      </div>
    </div>
  );
}

export default NativeCard