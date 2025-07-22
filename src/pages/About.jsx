import React from 'react';
import image from '../assets/aboutImg.jpg';
import { SiWebstorm } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { IoLogoFigma } from "react-icons/io5";
import { motion } from 'framer-motion';
import languagesImage from '../assets/languagesImage.svg'
import educationImage from '../assets/educationImage.svg'
import projectsImage from '../assets/projectsImage.svg'

import instagramImage from '../assets/instagram.svg'
import facebookImage from '../assets/facebook.svg'


const About = () => {
  return (
    <motion.div className='text-white py-10 px-4 bg-black md:px-10'
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.4, delay: 0.2}}
                viewport={{once: true}}
    >
      <h1 className='text-4xl font-bold mb-5 text-center xl:text-xl'>About me</h1>
      <div className='flex flex-col md:flex-row md:justify-center gap-8 md:gap-12'>
        <img src={image} alt='image' className='w-full max-w-[400px] h-auto rounded-3xl object-cover'/>

        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.4, delay: 0.5}}
          viewport={{once: true}}>

          <p
            className="text-gray-300 text-[15px] md:text-[20px] leading-[32px] md:leading-[40px] w-full md:w-[797px] h-auto"> I’m
            an aspiring Frontend Developer focused on building user interfaces with React.js.<br/>I’m learning
            through
            self-directed projects and constantly improving my skills.<br/>Looking to grow within a team and gain
            experience
            working on real-world tasks.
          </p>


          <div className='flex gap-6 md:gap-10 flex-wrap justify-center md:justify-start mt-5'>
            <div className='border border-gray-800 w-48 h-48 rounded-lg border-b-4 border-r-4 p-4'>
              <img src={languagesImage} alt='languages' className='mb-2'/>
              <p className='text-xl text-gray-300 mb-1'>Languages</p>
              <p className='text-sm text-gray-400 '>
                HTML, CSS, JavaScript, React.js
              </p>
            </div>

            <div className='border border-gray-800 w-48 h-48 rounded-lg border-b-4 border-r-4 p-4'>
              <img src={educationImage} alt='education' className='mb-2'/>
              <p className='text-xl text-gray-300 mb-1'>Education</p>
              <p className='text-sm text-gray-400 '>
                Self-taught developer, learning through online courses and hands-on practice.
              </p>
            </div>

            <div className='border border-gray-800 w-48 h-48 rounded-lg border-b-4 border-r-4 p-4'>
              <img src={projectsImage} alt='projects' className='mb-2'/>
              <p className='text-xl text-gray-300 mb-1'>Projects</p>
              <p className='text-sm text-gray-400'>
                Built several personal projects: landing pages, UI components, simple apps.
              </p>
            </div>
          </div>

          <div className='mt-5'>
            <p className='text-xl text-gray-300 mb-2 uppercase tracking-wider text-center md:text-left'>Qualities</p>
            <div className='flex flex-wrap gap-3 justify-center md:justify-start'>
              <span className='bg-gray-800 text-gray-200 text-lg px-3 py-1 rounded-full border border-gray-600'>
                Fast Learner
              </span>
              <span className='bg-gray-800 text-gray-200 text-lg px-3 py-1 rounded-full border border-gray-600'>
                Adaptable
              </span>
              <span className='bg-gray-800 text-gray-200 text-lg px-3 py-1 rounded-full border border-gray-600'>
                Communicative
              </span>
            </div>
          </div>


          <div className='flex gap-3 md:gap-10 flex-col md:flex-row items-center'>
            <div className='mt-5 flex flex-col items-center md:items-start'>
              <p className='text-[20px] text-gray-300 tracking-wider'>Tools i use</p>
              <motion.div className="flex flex-wrap gap-3 mt-3"
                          initial={{opacity: 0, y: 20}}
                          whileInView={{opacity: 1, y: 0}}
                          transition={{duration: 0.4, delay: 0.8}}
                          viewport={{once: true}}
              >
                <div className='border rounded border-gray-500 p-3'>
                  <SiWebstorm className='text-[34px] text-[#00c7b7]'/>
                </div>
                <div className='border rounded border-gray-500 p-3'>
                  <VscVscode className='text-[34px] text-[#007ACC]'/>
                </div>
                <div className='border rounded border-gray-500 p-3'>
                  <IoLogoFigma className='text-[34px] text-[#A259FF]'/>
                </div>
              </motion.div>
            </div>

            <div className='mt-5 flex flex-col items-center md:items-start'>
              <p className='text-[20px] text-gray-300 tracking-wider'>My social networks</p>
              <motion.div className="flex flex-wrap gap-3 mt-3"
                          initial={{opacity: 0, y: 20}}
                          whileInView={{opacity: 1, y: 0}}
                          transition={{duration: 0.4, delay: 0.7}}
                          viewport={{once: true}}
              >
                <a href="https://www.instagram.com/olya__pla/" target="_blank" rel="noopener noreferrer">
                  <div className='border rounded border-gray-500 p-3 hover:border-pink-500 hover:scale-105 transition duration-300 ease-in-out'>
                    <img src={instagramImage} width={30} height={30} alt="Instagram"/>
                  </div>
                </a>
                <a href="https://www.facebook.com/O1ina/" target="_blank" rel="noopener noreferrer">
                  <div className='border rounded border-gray-500 p-3 hover:border-blue-500 hover:scale-105 transition duration-300 ease-in-out'>
                    <img src={facebookImage} width={30} height={30} alt="Facebook"/>
                  </div>
                </a>
              </motion.div>
            </div>
          </div>


        </motion.div>

      </div>
    </motion.div>
  );
};

export default About;