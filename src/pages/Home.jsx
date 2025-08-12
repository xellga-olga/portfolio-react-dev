import React, {useState} from 'react';
import image from '../assets/img.jpeg'
import Skills from "./Skills";
import Projects from "./Projects";
import About from "./About";
import {motion} from "framer-motion";
import MiniAppsPage from "./MiniAppsPage";
import { FaPhoneAlt } from "react-icons/fa";



const Home = () => {
  const [showPhone, setShowPhone] = useState(false);
  return (
    <motion.div
      initial={{opacity: 0, y: 20}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.4, delay: 0.5}}
      viewport={{once: true}}
    >
      <div className="bg-black text-white flex items-center justify-center px-4 py-8 border-t border-t-[#676767]">
        <div className="flex flex-col items-center justify-center gap-6 text-center max-w-3xl">
          <div>
            <img
              src={image}
              alt="profile"
              className="w-[158px] h-[158px] md:w-48 md:h-48 rounded-full object-cover border border-pink-400"
            />
          </div>

          <h2 className="text-xl md:text-2xl font-medium">Hi! I’m Olya Pla 👋</h2>

          <h1 className="text-3xl md:text-5xl leading-tight">
            junior frontend React developer <br/> based in Hungary.
          </h1>

          <p className="text-gray-400 text-[20px] md:text-base">
            I'm a passionate junior frontend developer with a focus on React. I’m currently based in Hungary and
            constantly learning to build modern, responsive web applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <button
              onClick={() => setShowPhone(prev => !prev)}
              className="bg-white text-black px-6 py-3 rounded-full font-medium hover:scale-105 transition-transform">
              connect with me
            </button>
            <button
              className="bg-transparent border border-white text-white px-6 py-3 rounded-full font-medium hover:scale-105 transition-transform">
              my resume
            </button>
          </div>
          {showPhone && (
            <div className="bg-gray-900 text-white px-6 py-4 rounded-xl mt-3 text-sm sm:text-base shadow-lg flex items-center gap-3">
              <div className="bg-pink-500 p-2 rounded-full text-white">
                <FaPhoneAlt />
              </div>
              <div>
                <p className="font-semibold">Phone:</p>
                <a href="tel:+380509077560" className="underline hover:text-pink-400 transition-colors duration-200">
                  +380509077560
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className='mt-8 pt-6 border-t border-t-[#676767] bg-black'>
        <About/>
      </div>


      <div className='mt-8 pt-6 border-t border-t-[#676767]'>
        <Skills/>
      </div>
      <div className='mt-8 pt-6 border-t border-t-[#676767]'>
        <Projects/>
      </div>
      <div className='mt-8 pt-6 border-t border-t-[#676767]'>
        <MiniAppsPage />
      </div>
    </motion.div>
  );
};

export default Home;