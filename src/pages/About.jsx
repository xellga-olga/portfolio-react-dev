import React from 'react';
import image from '../assets/img.jpeg';

const About = () => {
  return (
    <div className='text-white py-10 px-4'>
      <h1 className='text-4xl font-bold mb-5 text-center'>About Me</h1>
      <div className='flex justify-center gap-12'>
        <img src={image} alt='image'  className='w-64 rounded-3xl' />
        <p className="text-gray-300  leading-8 text-center w-[500px]">
          I'm a passionate and motivated Junior React Developer with a strong foundation in modern front-end
          technologies.
          <br/>
          I enjoy building clean, responsive, and user-friendly interfaces using React, Tailwind CSS, and JavaScript.
          <br/>
          I’m constantly learning and striving to improve my skills by working on personal projects and exploring new
          tools in the ecosystem.
        </p>
      </div>
    </div>
  );
};

export default About;