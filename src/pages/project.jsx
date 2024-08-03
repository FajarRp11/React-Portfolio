import React from "react";
import { BsRocketTakeoff } from "react-icons/bs";
import { IoLogoJavascript } from "react-icons/io5";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGithub,
  FaBootstrap,
  FaPhp,
} from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

const Project = () => {
  const project = [
    {
      id: 1,
      title: "Company Profile Landing Page",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quidem, neque voluptas, quos, quae doloribus tempora voluptates",
      img: "Images/P5.png",
      link: "https://github.com/FajarRp11/construction-company-website",
      tech: [
        <RiTailwindCssFill key="tailwind" />,
        <IoLogoJavascript key="js" />,
      ],
    },
    {
      id: 2,
      title: "POS System Rahyu Komputer",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quidem, neque voluptas, quos, quae doloribus tempora voluptates",
      img: "Images/P2.png",
      link: "https://github.com/FajarRp11/SBD-Kelas-A-Kelompok-6-UAS-Kode-Program",
      tech: [
        <FaBootstrap key="bootstrap" />,
        <FaPhp key="php" />,
        <SiMysql key="mysql" />,
      ],
    },
    {
      id: 3,
      title: "POS System Pecel Lele Bang Toyib",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quidem, neque voluptas, quos, quae doloribus tempora voluptates",
      img: "Images/P3.png",
      link: "https://github.com/FajarRp11/Bang-Toyib",
      tech: [
        <FaBootstrap key="bootstrap" />,
        <FaPhp key="php" />,
        <SiMysql key="mysql" />,
      ],
    },
    {
      id: 4,
      title: "Web Portfolio",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quidem, neque voluptas, quos, quae doloribus tempora voluptates",
      img: "Images/P4.png",
      link: "https://github.com/FajarRp11",
      tech: [<RiTailwindCssFill key="tailwind" />, <FaReact key="react" />],
    },
    {
      id: 5,
      title: "Kalkulator",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quidem, neque voluptas, quos, quae doloribus tempora voluptates",
      img: "Images/P1.png",
      link: "https://github.com/FajarRp11/kalkulator",
      tech: [
        <FaHtml5 key="html5" />,
        <FaCss3Alt key="css3" />,
        <IoLogoJavascript key="js" />,
      ],
    },
  ];
  return (
    <div className="container px-8 py-4 mx-auto text-gray-900" name="Projects">
      <h1 className="flex items-center justify-center gap-2 mb-4 text-3xl font-bold text-center">
        <span>Projects</span>
        <BsRocketTakeoff />
      </h1>
      <div className="grid grid-cols-12 gap-4">
        {project.map(({ id, title, desc, img, link, tech }) => (
          <div
            key={id}
            className="col-span-12 p-4 flex flex-col justify-between bg-gray-200 md:col-span-6 lg:col-span-4 rounded-xl lg:h-[475px]"
          >
            <div>
              <img src={img} alt="" className="rounded" />
              <div className="mt-4">
                <h1 className="mb-2 text-xl font-bold md:text-2xl">{title}</h1>
                <p className="font-medium">{desc}</p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-4 text-3xl">
              <div className="flex items-center justify-start gap-2 text-3xl">
                {tech}
              </div>
              <div>
                <a href={link} target="_blank">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
