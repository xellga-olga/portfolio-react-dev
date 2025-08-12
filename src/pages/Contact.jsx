import React from 'react';
import { SiGmail } from "react-icons/si";
import { SiTelegram } from "react-icons/si";
import { SiGithub } from "react-icons/si";

const Contact = () => {
  return (
    <div className='text-white py-6 px-3 sm:py-10 sm:px-4"'>
      <h1 className="text-4xl font-bold mb-5 text-center">Contact</h1>
      <p className="text-center text-gray-300 leading-8 ">Open to junior roles and freelance projects — especially
        anything involving React.<br/>
        If you’re hiring, collaborating, or just want to chat about code — feel free to drop a message 👋
      </p>

      <div className="mt-6 text-white flex items-center justify-center">
        <ul className="flex gap-6 text-3xl text-white">
          <li className="hover:scale-125 transition-transform">
            <a href="mailto:noskinaolga1@gmail.com" title="Gmail">
              <SiGmail/>
            </a>
          </li>
          <li className="hover:scale-125 transition-transform">
            <a href="https://t.me/xellga_olga" target="_blank" rel="noreferrer" title="Telegram">
              <SiTelegram/>
            </a>
          </li>
          <li className="hover:scale-125 transition-transform">
            <a href="https://github.com/xellga-olga" target="_blank" rel="noreferrer" title="GitHub">
              <SiGithub/>
            </a>
          </li>
        </ul>
      </div>

    </div>
  );
};

export default Contact;