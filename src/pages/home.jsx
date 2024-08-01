import React from "react";
import Navbar from "../components/Elements/Navbar";
import HeroImage from "../assets/hero.jpg";
import Button from "../components/Elements/Button";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import Sosmed from "../components/Elements/Sosmed";

const Home = () => {
  return (
    <div className="min-h-screen text-gray-900 bg-gradient-to-br from-blue-500 to-gray-50">
      <Navbar />
      <div className="">
        <div className="container flex flex-col items-center justify-center w-full h-screen gap-4 px-8 mx-auto overflow-hidden ">
          <div className="flex items-center justify-center w-40 overflow-hidden border-4 border-gray-200 rounded-full shadow-md shadow-black/20">
            <img src={HeroImage} alt="" />
          </div>
          <div className="flex flex-col justify-center gap-2 text-center md:my-4">
            <h1 className="text-2xl font-bold md:text-4xl text-wrap font-montserrat">
              Kurnia Fajar Rahyudi Putra.
            </h1>
            <p className="font-medium">
              {" "}
              <span className="hidden md:block">
                Saya adalah seorang mahasiswa jurusan Teknik Komputer yang
                tertarik dalam bidang frontend developer.
              </span>
              Saat ini saya sedang mempelajari framework React, dan ini
              merupakan projek pertama saya menggunakan React.{" "}
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 md:flex-row">
            <Button href="/about">
              <span>Check My Portfolio</span>
              <FaArrowRight size={15} />
            </Button>
            <Button
              href="https://drive.google.com/file/d/1vZk0ZwkW7fOgLiPisF40wnqoshB27-DQ/view?usp=sharing"
              variant="bg-gray-200 text-gray-900"
              target="_blank"
            >
              <span>Download CV</span>
              <MdOutlineFileDownload size={20} />
            </Button>
          </div>
          <Sosmed />
        </div>
      </div>
    </div>
  );
};

export default Home;
