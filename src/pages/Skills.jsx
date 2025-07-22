import React from 'react';
import {motion} from "framer-motion";

import { FaReact } from "react-icons/fa";
import { GrJs } from "react-icons/gr";
import { FaGitAlt } from "react-icons/fa";
import { MdHtml } from "react-icons/md";
import { MdCss } from "react-icons/md";
import { RiTailwindCssFill } from "react-icons/ri";

const skillSet = [
  { icon: <FaReact className="text-blue-400 text-5xl" />, label: "React", bottomInfo: "react-router" },
  { icon: <GrJs className="text-yellow-400 text-5xl" />, label: "JS", bottomInfo: "babel, es6+" },
  { icon: <FaGitAlt className="text-orange-500 text-5xl" />, label: "Git", bottomInfo: "branching, merge" },
  { icon: <MdHtml className="text-red-500 text-5xl" />, label: "HTML", bottomInfo: "semantic tags" },
  { icon: <MdCss className="text-blue-500 text-5xl" />, label: "CSS", bottomInfo: "flexbox, grid" },
  { icon: <RiTailwindCssFill className="text-cyan-400 text-5xl" />, label: "Tailwind", bottomInfo: "utility-first" },
];

const Skills = () => {
  return (
    <div
      className="text-white py-10 px-4 mb-5">
      <h1 className="text-4xl font-bold mb-5 text-center">Skills</h1>
      <div className="flex flex-wrap justify-center gap-6 overflow-visible">
        {skillSet.map((skill, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            key={index}
            className="relative group w-28 h-28 flex flex-col items-center justify-center border border-gray-700 bg-gray-800 rounded-xl shadow-md hover:scale-105 transition-transform"
          >
            {skill.icon}
            <h5 className="mt-2 text-sm">{skill.label}</h5>
            {skill.bottomInfo && (
              <div
                className="absolute top-full mt-2 left-1/2 -translate-x-1/2 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 transform z-10">
                <div className="w-2 h-2 bg-gray-700 rotate-45 -mb-1 mx-auto"/>
                <div className="bg-gray-700 text-l text-white px-2 py-1 rounded shadow-lg whitespace-nowrap">
                  {skill.bottomInfo}
                </div>
              </div>
            )}
          </motion.div>

        ))}
      </div>
    </div>
  );
};

export default Skills;