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
  { icon: <GrJs className="text-yellow-400 text-5xl" />, label: "JS" },
  { icon: <FaGitAlt className="text-orange-500 text-5xl" />, label: "Git" },
  { icon: <MdHtml className="text-red-500 text-5xl" />, label: "HTML" },
  { icon: <MdCss className="text-blue-500 text-5xl" />, label: "CSS" },
  { icon: <RiTailwindCssFill className="text-cyan-400 text-5xl" />, label: "Tailwind" },
];

const Skills = () => {
  return (
    <div
      className="text-white py-10 px-4">
      <h1 className="text-4xl font-bold mb-5 text-center">Skills</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {skillSet.map((skill, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            key={index}
            className="w-28 h-28 flex flex-col items-center justify-center border border-gray-700 bg-gray-800 rounded-xl shadow-md hover:scale-105 transition-transform"
          >
            {skill.icon}
            <h5 className="mt-2 text-sm">{skill.label}</h5>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;