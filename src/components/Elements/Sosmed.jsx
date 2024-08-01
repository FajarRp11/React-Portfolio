import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { IoMdMailUnread } from "react-icons/io";

const Sosmed = () => {
  const sosmed = [
    {
      id: 1,
      title: "Github",
      path: "https://github.com/FajarRp11",
      svg: <FaGithub />,
    },
    {
      id: 2,
      title: "Linkedin",
      path: "https://www.linkedin.com/in/kurnia-fajar-rahyudi-putra-a3b5732b7",
      svg: <FaLinkedin />,
    },
    {
      id: 3,
      title: "Instagram",
      path: "https://www.instagram.com/fajar.rahyu/",
      svg: <FaInstagram />,
    },
    {
      id: 4,
      title: "Email",
      path: "mailto:fajarrahyu1103@gmail.com",
      svg: <IoMdMailUnread />,
    },
  ];

  return (
    <div className="flex gap-2">
      {sosmed.map(({ id, title, path, svg }) => (
        <div
          key={id}
          className="flex items-center justify-center w-10 text-base text-gray-900 transition-all duration-200 border border-gray-400 rounded-full hover:bg-gray-900 hover:text-gray-50 md:w-12 md:text-2xl bg-gray-50 aspect-square"
        >
          <a href={path} target="_blank">
            {svg}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Sosmed;
