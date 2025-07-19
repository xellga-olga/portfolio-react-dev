import React from 'react';
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io5";
import { LuMapPinHouse } from "react-icons/lu";


const InfoContact = () => {
  return (
    <div className="bg-black text-gray-200 font-thin px-4 py-8 border-t border-t-[#676767]  mx-auto">
      <div className="flex flex-col items-center  sm:flex-row justify-center sm:items-center gap-6 flex-wrap md:items-center md:justify-center ">
        <div className="flex items-center gap-1">
          <IoIosMail className="text-xl" />
          <a href="mailto:noskinaolga1@gmail.com">noskinaolga1@gmail.com</a>
        </div>
        <div className="flex items-center gap-1">
          <FaPhone className="text-xl" />
          <p>+380509077560</p>
        </div>
        <div className="flex items-center gap-1">
          <IoLogoGithub className="text-xl" />
          <a href='https://github.com/xellga-olga' target='_blank'>github.com/xellga-olga</a>
        </div>
        <div className="flex items-center gap-1">
          <LuMapPinHouse className="text-xl" />
          <p>Hungary, Budapest</p>
        </div>
      </div>
    </div>
  );
};

export default InfoContact;