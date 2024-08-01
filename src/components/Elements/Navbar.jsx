import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navLink = [
    {
      id: 1,
      title: "Home",
      path: "/",
    },
    {
      id: 2,
      title: "About",
      path: "/about",
    },
    {
      id: 3,
      title: "Contact",
      path: "/contact",
    },
  ];
  return (
    <div className="fixed flex items-center justify-end w-full h-16 px-8 md:justify-center md:px-12 text-gray-50">
      <div className="items-center hidden gap-4 px-8 py-2 bg-gray-300 border rounded-full shadow shadow-black/20 border-gray-50 md:flex">
        {navLink.map(({ id, title, path }) => (
          <a
            className="text-gray-900 transition-all duration-200 hover:tracking-wide hover:font-semibold"
            href={path}
            key={id}
          >
            {title}
          </a>
        ))}
      </div>

      <div
        className="z-10 flex items-center justify-center w-12 py-2 text-gray-900 rounded cursor-pointer aspect-video md:hidden bg-white/60 backdrop-blur"
        onClick={() => setNav(!nav)}
      >
        {nav ? <FaTimes size={18} /> : <FaBars size={18} />}
      </div>

      <AnimatePresence>
        {nav && (
          <motion.ul
            key={nav}
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: "5%", opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            className="absolute flex flex-col items-center justify-center w-48 gap-2 py-5 text-xl text-center rounded left-7 top-4 h-fit bg-white/60 backdrop-blur"
          >
            {navLink.map(({ id, title, path }) => (
              <li
                className="text-gray-900 transition-all duration-200 hover:tracking-wide hover:font-semibold"
                key={id}
              >
                <a href={path}>{title}</a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
