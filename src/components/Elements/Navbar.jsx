import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navLink = [
    {
      id: 1,
      title: "Home",
    },
    {
      id: 2,
      title: "About",
    },
    {
      id: 3,
      title: "Skills",
    },
    {
      id: 4,
      title: "Projects",
    },
    {
      id: 5,
      title: "Contact",
    },
  ];
  return (
    <div className="fixed flex items-center justify-end w-full h-16 px-8 md:justify-center md:px-12 text-gray-50">
      <div className="items-center hidden gap-4 px-8 py-2 border rounded-full shadow bg-white/50 backdrop-blur shadow-black/20 border-gray-50 md:flex">
        {navLink.map(({ id, title }) => (
          <p
            className="text-gray-900 transition-all duration-200 cursor-pointer hover:tracking-wide hover:font-semibold"
            key={id}
          >
            <Link to={title} smooth duration={500}>
              {title}
            </Link>
          </p>
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
            animate={{ x: "0", opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-screen gap-2 py-5 text-xl text-center rounded bg-white/60 backdrop-blur"
          >
            {navLink.map(({ id, title }) => (
              <li
                className="text-gray-900 transition-all duration-200 hover:tracking-wide hover:font-semibold"
                key={id}
              >
                <p>
                  <Link to={title} smooth duration={500}>
                    {title}
                  </Link>
                </p>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
