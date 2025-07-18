import React from 'react';
import image from '../assets/img.jpeg'
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import About from "./About";


const Home = () => {
  return (
    <>
      <div className="bg-black text-white flex items-center justify-center px-4 py-8">
        <div className="flex flex-col items-center justify-center gap-6 text-center max-w-3xl">
          <div>
            <img
              src={image}
              alt="profile"
              className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover"
            />
          </div>

          <h2 className="text-xl md:text-2xl font-medium">Hi! I’m Olya Pla 👋</h2>

          <h1 className="text-3xl md:text-5xl leading-tight">
            junior frontend React developer <br/> based in Hungary.
          </h1>

          <p className="text-gray-400 text-sm md:text-base">
            I'm a passionate junior frontend developer with a focus on React. I’m currently based in Hungary and
            constantly learning to build modern, responsive web applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <button
              className="bg-white text-black px-6 py-3 rounded-full font-medium hover:scale-105 transition-transform">
              connect with me
            </button>
            <button
              className="bg-transparent border border-white text-white px-6 py-3 rounded-full font-medium hover:scale-105 transition-transform">
              my resume
            </button>
          </div>
        </div>
      </div>

      <div className='mt-8 pt-6 border-t border-t-[#676767]'>
        <About/>
      </div>


      <div className='mt-8 pt-6 border-t border-t-[#676767]'>
        <Skills/>
      </div>
      <div className='mt-8 pt-6 border-t border-t-[#676767]'>
        <Projects/>
      </div>
      <div className='mt-8 pt-6 border-t border-t-[#676767]'>
        <Contact/>
      </div>
    </>
  );
};

export default Home;