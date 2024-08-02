import React from "react";
import { IoPersonSharp } from "react-icons/io5";

const About = () => {
  return (
    <div
      className="container flex flex-col items-center p-8 py-4 mx-auto text-gray-900"
      name="About"
    >
      <h1 className="flex items-center justify-center gap-2 mb-4 text-3xl font-bold text-center">
        <span>About Me</span>
        <IoPersonSharp />
      </h1>
      <p className="font-medium text-center md:max-w-5xl">
        Hello, I am Fajar! I am from West Sumatra, Indonesia. I am interested in
        frontend developer. I am currently learning React JS. I am proficient in
        HTML, CSS, Javascript, PHP and Laravel.
      </p>
    </div>
  );
};

export default About;
