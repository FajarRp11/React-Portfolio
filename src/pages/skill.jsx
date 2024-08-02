import React from "react";
import { TbTargetArrow } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5, FaCss3Alt, FaReact, FaLaravel, FaPhp } from "react-icons/fa";

const Skills = () => {
  const skill = [
    {
      id: 1,
      name: "HTML",
      icon: <FaHtml5 size={50} />,
      styles: "hover:shadow hover:shadow-orange-400 text-orange-600",
    },

    {
      id: 2,
      name: "CSS",
      icon: <FaCss3Alt size={50} />,
      styles: "hover:shadow hover:shadow-blue-400 text-blue-600",
    },

    {
      id: 3,
      name: "JavaScript",
      icon: <IoLogoJavascript size={50} />,
      styles: "hover:shadow hover:shadow-yellow-500 text-yellow-400",
    },

    {
      id: 4,
      name: "React JS",
      icon: <FaReact size={50} />,
      styles: "hover:shadow hover:shadow-blue-400 text-blue-600",
    },

    {
      id: 5,
      name: "PHP",
      icon: <FaPhp size={50} />,
      styles: "hover:shadow hover:shadow-blue-400 text-blue-600",
    },

    {
      id: 6,
      name: "Laravel",
      icon: <FaLaravel size={50} />,
      styles: "hover:shadow hover:shadow-red-600 text-red-600",
    },
  ];

  return (
    <div className="container px-8 py-4 mx-auto text-gray-900" name="Skills">
      <h1 className="flex justify-center gap-2 mb-4 text-3xl font-bold text-center items-centers">
        <span>Skills</span>
        <TbTargetArrow />
      </h1>
      <div className="grid grid-cols-12 ">
        {skill.map(({ id, name, icon, styles }) => (
          <div
            className="col-span-6 px-4 py-6 cursor-pointer md:col-span-4 lg:col-span-2"
            key={id}
          >
            <div
              className={`flex flex-col items-center justify-center gap-2 py-4 transition-all duration-200 bg-gray-200 rounded  ${styles}`}
            >
              {icon}
              <p className="px-2 font-semibold md:text-lg">{name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
