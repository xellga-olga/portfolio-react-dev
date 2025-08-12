import React, {useState} from 'react';
import img1 from '../assets/aboutImg.jpg';
import img2 from '../assets/aboutImg2.jpg';
import img3 from '../assets/aboutImg3.jpg';
import img4 from '../assets/aboutImg4.jpg';


const About = () => {
  const images = [img1, img2, img3, img4];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className='text-white py-6 px-3 sm:py-10 sm:px-4'>
      <h1 className="text-4xl font-bold mb-5 text-center">About Me</h1>
      <div className="bg-black flex flex-col lg:flex-row items-center lg:items-start justify-center gap-12 p-6">
        {/* slider */}
        <div className="relative w-full max-w-[350px] h-64 sm:h-96">
          <img
            src={images[currentIndex]}
            alt="About me"
            className="w-full object-cover rounded-2xl h-full  "
          />
          {/* buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 rounded-full transform -translate-y-1/2 bg-gray-400/20 text-white px-3 py-2 text-lg sm:text-xl"
          >
            ❮
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 rounded-full transform -translate-y-1/2 bg-gray-400/20 text-white px-3 py-2 text-lg sm:text-xl"
          >
            ❯
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-4 sm:gap-6 max-w-[800px] text-gray-300">
          <p className="text-base sm:text-[18px] leading-relaxed sm:leading-[32px]">
            As a frontend developer specializing in React, I enjoy transforming ideas into interactive and visually
            appealing interfaces. I approach each project with curiosity and precision, aiming to combine clean code with
            thoughtful user experience. My goal is to grow as a developer while creating products that are both functional
            and inspiring.
          </p>

          {/* INFO*/}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-sm md:text-base">
            <div className="space-y-5 mt-3">
              <p className='border-b border-b-gray-800'><span className="font-semibold text-white">Birthday:</span> 7
                April 1997</p>
              <p className='border-b border-b-gray-800'><span className="font-semibold text-white">Age:</span> 28</p>
              <p className='border-b border-b-gray-800'><span className="font-semibold text-white">From:</span> Odesa,
                Ukraine</p>
              <p className='border-b border-b-gray-800'><span className="font-semibold text-white">Base:</span> Budapest,
                Hungary</p>
            </div>


            {/* Languages */}
            <div className="space-y-5 ">
              {[
                {name: "English", level: 65},
                {name: "Russian", level: 100},
                {name: "Ukrainian", level: 100}
              ].map((lang, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-white font-semibold">{lang.name}</span>
                    <span className="text-white">{lang.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-red-500 h-2 rounded-full"
                      style={{width: `${lang.level}%`}}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

    </div>
  )
};

export default About;