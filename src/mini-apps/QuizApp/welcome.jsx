import React from 'react';
import reactLogo from '../../assets/mini-apps-images/reactLogo.jpg'

function Welcome({onStart}) {
  return (
    <div className='flex flex-col items-center gap-6 text-center sm:gap-8'>
      <img src={reactLogo} alt='React Logo' className='w-[150px] sm:w-[200px] sm:h-[200px]'/>
      <h1 className='text-2xl font-bold text-gray-800 sm:text-4xl'>React Knowledge Quiz</h1>
      <span className='text-lg font-semibold sm:text-3xl'>
        Test your React expertise!
      </span>
      <button onClick={onStart} className='w-1/2 bg-black rounded-full text-white text-sm px-4 py-2 hover:opacity-80 sm:w-1/3 sm:text-xl '>Start</button>
    </div>
  );
}

export default Welcome;