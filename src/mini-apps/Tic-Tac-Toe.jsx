import React, {useRef, useState} from 'react';
import circle_icon from '../assets/mini-apps-images/circle_icon.png';
import cross_icon from '../assets/mini-apps-images/cross_icon.png';

let data = ['','','','','','','','','']

const TicTacToe = () => {
  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);
  let titleRef = useRef(null);

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
    checkWin()
  }

  const checkWin = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[0] !== '') {
      won(data[0]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[3] !== '') {
      won(data[3]);
    } else if (data[6] === data[7] && data[7] === data[8] && data[6] !== '') {
      won(data[6]);
    } else if (data[0] === data[3] && data[3] === data[6] && data[0] !== '') {
      won(data[0]);
    } else if (data[1] === data[4] && data[4] === data[7] && data[1] !== '') {
      won(data[1]);
    } else if (data[2] === data[5] && data[5] === data[8] && data[2] !== '') {
      won(data[2]);
    } else if (data[2] === data[4] && data[4] === data[6] && data[2] !== '') {
      won(data[2]);
    } else if (data[0] === data[4] && data[4] === data[8] && data[0] !== '') {
      won(data[0]);
    }
  }

  const won = (winner) => {
    setLock(true);
    if (winner === 'x'){
      titleRef.current.innerHTML = `
        <span style="
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: white;
          padding: 8px 16px;
          border-radius: 8px;
          font-weight: bold;
          font-size: 20px;
        ">Congratulations:
          <img src="${cross_icon}" style="width: 36px; height: 36px;" />
          Winner
        </span>
      `;
    } else {
      titleRef.current.innerHTML = `
        <span style="
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: white;
          padding: 8px 16px;
          border-radius: 8px;
          font-weight: bold;
          font-size: 20px;
        ">Congratulations:
          <img src="${circle_icon}" style="width: 36px; height: 36px;" />
          Winner
        </span>
      `;
    }
  }

  const reset = () => {
    setLock(false);
    data = ['','','','','','','','','']
    titleRef.current.innerHTML = 'Tic Toc Toe <span>Game</span>';
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
      cell.innerHTML = '';
    });
    setCount(0);
  }

  return (
    <div className='max-w-xl mx-auto mt-10 p-8 mb-7 bg-black flex content-center flex-col items-center rounded-3xl text-center '>
      <h2 ref={titleRef} className="text-2xl font-bold mb-4 text-white/70 text-center">Tic Toc Toe Game</h2>
      <div className='grid grid-cols-3 gap-2 w-full max-w-[300px] '>
        <div className='cell flex h-24 w-24 cursor-pointer rounded-lg border-4 border-gray-600' onClick={(e) => {toggle(e,0)}}></div>
        <div className='cell flex h-24 w-24 cursor-pointer rounded-lg border-4 border-gray-600' onClick={(e) => {toggle(e,1)}}></div>
        <div className='cell flex h-24 w-24 cursor-pointer rounded-lg border-4 border-gray-600' onClick={(e) => {toggle(e,2)}}></div>
        <div className='cell flex h-24 w-24 cursor-pointer rounded-lg border-4 border-gray-600' onClick={(e) => {toggle(e,3)}}></div>
        <div className='cell flex h-24 w-24 cursor-pointer rounded-lg border-4 border-gray-600' onClick={(e) => {toggle(e,4)}}></div>
        <div className='cell flex h-24 w-24 cursor-pointer rounded-lg border-4 border-gray-600' onClick={(e) => {toggle(e,5)}}></div>
        <div className='cell flex h-24 w-24 cursor-pointer rounded-lg border-4 border-gray-600' onClick={(e) => {toggle(e,6)}}></div>
        <div className='cell flex h-24 w-24 cursor-pointer rounded-lg border-4 border-gray-600' onClick={(e) => {toggle(e,7)}}></div>
        <div className='cell flex h-24 w-24 cursor-pointer rounded-lg border-4 border-gray-600' onClick={(e) => {toggle(e,8)}}></div>
      </div>
      <button onClick={() => {reset()}} className="px-6 py-2 mt-5 bg-white/20 text-white rounded-lg hover:bg-white/30 transition flex justify-center items-center">
        Reset
      </button>
    </div>
  );
};

export default TicTacToe;