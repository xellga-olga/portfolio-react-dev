import React, {useState} from 'react';
import circle_icon from '../assets/mini-apps-images/circle_icon.png';
import cross_icon from '../assets/mini-apps-images/cross_icon.png';

let data = ['','','','','','','','']

const TicTacToe = () => {
  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);

  const toggle = (e, num) => {
    if(lock) {
      return 0
    }

    if(count % 2 === 0) {
      e.target.innerHTML=` <img src="${cross_icon}"/> `;
      data[num] = 'x'
      setCount(++count)
    } else {
      e.target.innerHTML=` <img src="${circle_icon}"/> `;
      data[num] = 'o'
      setCount(++count)
    }
  }

  return (
    <div className='max-w-xl mx-auto mt-10 p-8 mb-7 bg-black flex content-center flex-col items-center rounded-3xl text-center '>
      <h2 className="text-2xl font-bold mb-4 text-white/70 text-center">Tic Toc Toe Game</h2>
      <div className='grid grid-cols-3 gap-2 w-full max-w-[300px] '>
        <div className='flex h-24 w-24 cursor-pointer rounded-lg border-4 border-gray-600' onClick={(e) => {toggle(e,0)}}></div>
        <div className='flex h-24 w-24 cursor-pointer rounded-lg border-4 border-gray-600' onClick={(e) => {toggle(e,1)}}></div>
        <div className='flex h-24 w-24 cursor-pointer rounded-lg border-4 border-gray-600' onClick={(e) => {toggle(e,2)}}></div>
        <div className='flex h-24 w-24 cursor-pointer rounded-lg border-4 border-gray-600' onClick={(e) => {toggle(e,3)}}></div>
        <div className='flex h-24 w-24 cursor-pointer rounded-lg border-4 border-gray-600' onClick={(e) => {toggle(e,4)}}></div>
        <div className='flex h-24 w-24 cursor-pointer rounded-lg border-4 border-gray-600' onClick={(e) => {toggle(e,5)}}></div>
        <div className='flex h-24 w-24 cursor-pointer rounded-lg border-4 border-gray-600' onClick={(e) => {toggle(e,6)}}></div>
        <div className='flex h-24 w-24 cursor-pointer rounded-lg border-4 border-gray-600' onClick={(e) => {toggle(e,7)}}></div>
        <div className='flex h-24 w-24 cursor-pointer rounded-lg border-4 border-gray-600' onClick={(e) => {toggle(e,8)}}></div>
      </div>
      <button className="px-6 py-2 mt-5 bg-white/20 text-white rounded-lg hover:bg-white/30 transition flex justify-center items-center">
        Reset
      </button>
    </div>
  );
};

export default TicTacToe;