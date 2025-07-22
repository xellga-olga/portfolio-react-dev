import React, { useRef } from 'react';
import {
  motion
} from "framer-motion";
import image1 from '../assets/projectsImg/movie-app.png'
import image2 from '../assets/projectsImg/todolist.png'
import image3 from '../assets/projectsImg/blog-website.png'
import image4 from '../assets/projectsImg/FruitStore.png'
import image5 from '../assets/projectsImg/animatedPortfolioWebsite.png'
import image6 from '../assets/projectsImg/weather.png'



const projects = [
  {
    name: "Search Movie",
    description: "React, JavaScript, TailwindCSS",
    demoUrl: "https://movie-app-swart-omega.vercel.app/",
    githubUrl: "https://github.com/xellga-olga/Movie-App",
    bgImage: image1
  },
  {
    name: "Todo List",
    description: "React, JavaScript, CSS",
    demoUrl: "https://todo-list-react-js-gules.vercel.app/",
    githubUrl: "https://github.com/xellga-olga/TodoList-React-Js",
    bgImage: image2
  },
  {
    name: "Blog-Website",
    description: "React (Next.js), TailwindCSS",
    demoUrl: "https://blog-website-gamma-dusky.vercel.app/",
    githubUrl: "https://github.com/xellga-olga/Blog-Website",
    bgImage: image3
  },
  {
    name: "Fruits-Shop",
    description: "React, JavaScript, TailwindCSS, Framer-motion",
    demoUrl: "https://fruits-shop-six.vercel.app/",
    githubUrl: "https://github.com/xellga-olga/Fruits-Shop",
    bgImage: image4
  },
  {
    name: "Animated Portfolio Website",
    description: "React (Next.js), Framer Motion, TailwindCSS",
    demoUrl: "https://animated-portfolio-website-nine.vercel.app/",
    githubUrl: "https://github.com/xellga-olga/Animated-Portfolio-Website",
    bgImage: image5
  },
  {
    name: "Weather",
    description: "React, JavaScript, OpenWeatherMap API, CSS",
    githubUrl: "https://github.com/xellga-olga/Weather",
    demoUrl: "https://weather-six-orcin.vercel.app/",
    bgImage: image6
  }
]

const Projects = () => {
  return (
    <div className="text-white py-10 px-4">
      <h1 className="text-4xl font-bold mb-5 text-center">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-xl mx-auto">
        {projects.map((item, index) => (
          <motion.div key={index}
                     className="relative group rounded-xl p-5 shadow-lg overflow-hidden transition-transform transform hover:scale-[1.02] hover:shadow-xl duration-300 hover:ring-2 hover:ring-cyan-400"
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.4, delay: index * 0.2 }}
                     viewport={{ once: true }}
                      style={{ backgroundImage: `url(${item.bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}

          >
            <div className="absolute inset-0 bg-black bg-opacity-70 rounded-xl pointer-events-none z-0"></div>
            <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/80 to-transparent rounded-t-xl pointer-events-none z-10"></div>
            <div className="relative z-20">
              <h5 className="text-lg text-center mb-2 font-bold text-gray-100">{item.name}</h5>
              <p className="text-sm mb-2 text-gray-200 text-center">{item.description}</p>
              <div className="flex items-center justify-center gap-3 mt-3">
                <a
                  href={item.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-cyan-300 border border-cyan-400 px-3 py-1.5 rounded-md hover:bg-cyan-500 hover:text-black hover:shadow-[0_0_10px_rgba(6,182,212,0.6)] transition-all"
                >
                  Demo
                </a>
                <a
                  href={item.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex items-center gap-1 border border-blue-400 text-blue-300 px-3 py-1.5 rounded-md text-sm hover:bg-blue-500 hover:text-white hover:shadow-blue-500/30 hover:shadow-md transition-all"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};


export default Projects;