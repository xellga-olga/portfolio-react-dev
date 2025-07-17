import React, { useRef } from 'react';
import {
  motion
} from "framer-motion";


const projects = [
  {
    name: "Search Movie",
    description: "React, JavaScript, TailwindCSS",
    demoUrl: "https://movie-app-swart-omega.vercel.app/",
    githubUrl: "https://github.com/xellga-olga/Movie-App"
  },
  {
    name: "Todo List",
    description: "React, JavaScript, CSS",
    demoUrl: "https://todo-list-react-js-gules.vercel.app/",
    githubUrl: "https://github.com/xellga-olga/TodoList-React-Js"
  },
  {
    name: "Blog-Website",
    description: "React (Next.js), TailwindCSS",
    demoUrl: "https://blog-website-gamma-dusky.vercel.app/",
    githubUrl: "https://github.com/xellga-olga/Blog-Website"
  },
  {
    name: "Fruits-Shop",
    description: "React, JavaScript, TailwindCSS, Framer-motion",
    demoUrl: "https://fruits-shop-six.vercel.app/",
    githubUrl: "https://github.com/xellga-olga/Fruits-Shop"
  },
  {
    name: "Animated Portfolio Website",
    description: "React (Next.js), Framer Motion, TailwindCSS",
    demoUrl: "https://animated-portfolio-website-nine.vercel.app/",
    githubUrl: "https://github.com/xellga-olga/Animated-Portfolio-Website"
  },
  {
    name: "Weather",
    description: "React, JavaScript, OpenWeatherMap API, CSS",
    githubUrl: "https://github.com/xellga-olga/Weather",
    demoUrl: "https://weather-six-orcin.vercel.app/"
  }
]

const Projects = () => {
  return (
    <div className="text-white py-10 px-4">
      <h1 className="text-4xl font-bold mb-5 text-center">Projects</h1>
      <motion.ul
        className="flex gap-6 overflow-x-auto px-4 pb-4 snap-x snap-mandatory scroll-smooth max-w-screen-xl mx-auto "
      >
        {projects.map((item, index) => (
          <motion.li key={index}
                     className="snap-center min-w-[280px] sm:min-w-[350px] h-44 bg-gray-800 rounded-xl p-4 shadow-md"
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.4, delay: index * 0.1 }}
                     viewport={{ once: true }}
          >
            <h5 className="text-lg text-center mb-2 font-bold text-gray-200">{item.name}</h5>
            <p className="text-sm mb-2 text-gray-400 text-center">{item.description}</p>
            <div className="flex items-center justify-center gap-3 mt-3">
              <a
                href={item.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className='border border-gray-500 px-2 py-1 rounded text-sm hover:scale-105 transition-transform'>
                Demo
              </a>
              <a
                href={item.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className='border border-gray-500 px-2 py-1 rounded text-sm hover:scale-105 transition-transform'>
                GitHub
              </a>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};


export default Projects;