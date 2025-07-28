import { motion } from "framer-motion";
import quoteImg from "../assets/mini-apps-images/quoteImg.jpg";
import TicTacToeImg from "../assets/mini-apps-images/TicTacToeImg.jpg";
import { Link } from "react-router-dom";
import { IoGameController } from "react-icons/io5";
import { IoChatbubbleOutline } from "react-icons/io5";
import React from "react";
import { GiTicTacToe } from "react-icons/gi";



export default function MiniAppsPage() {
  return (
    <div className="text-white py-10 px-4">
      <h1 className="text-4xl font-bold mb-5 text-center flex items-center justify-center"><IoGameController/>Mini Apps</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-xl mx-auto">

        {/*Cards*/}
        <motion.div
          key="quote"
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.4}}
          viewport={{once: true}}
          className="relative group rounded-xl p-5 shadow-lg overflow-hidden transition-transform transform hover:scale-[1.02] hover:shadow-xl duration-300 hover:ring-2 hover:ring-cyan-400"
          style={{
            backgroundImage: `url(${quoteImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-70 rounded-xl pointer-events-none z-0"></div>
          <div className="relative z-10 p-2 flex flex-col h-full justify-between text-white">
            <div className="text-lg text-center mb-2 font-bold text-gray-100 flex items-center justify-center ">
              <span>Quote Generator</span>
              <IoChatbubbleOutline className="text-2xl"/>
            </div>
            <p className="text-sm mb-2 text-gray-200 text-center">
              Random Quotes and Anecdotes to inspire or entertain.
            </p>
            <div className="flex justify-center gap-3 mt-2">
              <Link
                to="/mini-apps/quote"
                className="text-sm border border-cyan-400 text-cyan-300 px-3 py-1.5 rounded hover:bg-cyan-500 hover:text-black transition"
              >
                Play
              </Link>
            </div>
          </div>
        </motion.div>


        <motion.div
          key="TicTacToe"
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.6}}
          viewport={{once: true}}
          className="relative group rounded-xl p-5 shadow-lg overflow-hidden transition-transform transform hover:scale-[1.02] hover:shadow-xl duration-300 hover:ring-2 hover:ring-cyan-400"
          style={{
            backgroundImage: `url(${TicTacToeImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-70 rounded-xl pointer-events-none z-0"></div>
          <div className="relative z-10 p-2 flex flex-col h-full justify-between text-white">
            <div className="text-lg text-center mb-2 font-bold text-gray-100 flex items-center justify-center ">
              <span>Tic Tac Toe Game</span>
              <GiTicTacToe  className="text-2xl"/>
            </div>
            <p className="text-sm mb-2 text-gray-200 text-center">
              Play the timeless game of Tic Tac Toe
            </p>
            <div className="flex justify-center gap-3 mt-2">
              <Link
                to="/mini-apps/tictactoe"
                className="text-sm border border-cyan-400 text-cyan-300 px-3 py-1.5 rounded hover:bg-cyan-500 hover:text-black transition"
              >
                Play
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          key="quote"
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.4}}
          viewport={{once: true}}
          className="relative group rounded-xl p-5 shadow-lg overflow-hidden transition-transform transform hover:scale-[1.02] hover:shadow-xl duration-300 hover:ring-2 hover:ring-cyan-400"
          style={{
            backgroundImage: `url(${quoteImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-70 rounded-xl pointer-events-none z-0"></div>
          <div className="relative z-10 p-2 flex flex-col h-full justify-between text-white">
            <div className="text-lg text-center mb-2 font-bold text-gray-100 flex items-center justify-center ">
              <span>Quote Generator</span>
              <GiTicTacToe className="text-2xl"/>
            </div>
            <p className="text-sm mb-2 text-gray-200 text-center">
              Random Quotes and Anecdotes to inspire or entertain.
            </p>
            <div className="flex justify-center gap-3 mt-2">
              <Link
                to="/mini-apps/quote"
                className="text-sm border border-cyan-400 text-cyan-300 px-3 py-1.5 rounded hover:bg-cyan-500 hover:text-black transition"
              >
                Play
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}