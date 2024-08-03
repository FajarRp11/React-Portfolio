import React from "react";
import HeroImage from "../assets/Images/hero.jpg";
import ButtonLink from "../components/Elements/ButtonLink";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import Sosmed from "../components/Elements/Sosmed";
import Button from "../components/Elements/Button";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      className="min-h-screen text-gray-900 bg-gradient-to-b from-blue-500 to-gray-100"
      name="Home"
    >
      <div className="container flex flex-col items-center justify-center w-full h-screen gap-4 px-8 mx-auto overflow-hidden ">
        <div className="flex items-center justify-center w-40 overflow-hidden border-4 border-gray-200 rounded-full shadow-md shadow-black/20">
          <img src={HeroImage} alt="" />
        </div>
        <div className="flex flex-col justify-center gap-2 text-center md:my-4">
          <h1 className="text-3xl font-bold md:text-4xl text-wrap font-montserrat">
            Kurnia Fajar Rahyudi Putra.
          </h1>
          <p className="max-w-5xl font-medium md:text-lg">
            {" "}
            <span className="block">
              I am a student majoring in Computer Engineering who is interested
              in frontend developers.
            </span>
            I'm currently learning the React framework, and this is my first
            project using React.
          </p>
        </div>
        <div className="flex flex-col items-center gap-2 mb-2 md:mb-8 md:flex-row">
          <Link to="Projects" smooth duration={500}>
            <Button>
              <span>Check My Portfolio</span>
              <FaArrowRight size={15} />
            </Button>
          </Link>
          <ButtonLink
            href="https://drive.google.com/file/d/1vZk0ZwkW7fOgLiPisF40wnqoshB27-DQ/view?usp=sharing"
            variant="bg-gray-200 text-gray-900"
            target="_blank"
          >
            <span>Download CV</span>
            <MdOutlineFileDownload size={20} />
          </ButtonLink>
        </div>
        <Sosmed />
      </div>
    </div>
  );
};

export default Home;
