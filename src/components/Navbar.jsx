import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants/index";
import { menu, close } from "../assets/index";
import { motion } from "framer-motion";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled || toggle ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <p className="text-white text-[18px] font-bold cursor-pointer">
            FranG<span className="sm:block hidden"> | Web Developer</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                location.pathname === `/${nav.id}`
                  ? "text-[#D4AF37]"
                  : "text-secondary"
              } 
                        hover:text-[#D4AF37] text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`/${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => {
              setToggle(!toggle);
            }}
          />
          <div
            className={`${!toggle ? "hidden" : "flex"} absolute black-transparent top-[50px] right-0 w-full rounded-xl z-10 p-6`}
          >
            <ul className="w-full list-none flex flex-col items-center gap-4">
              {navLinks.map((nav, index) => (
                <motion.li
                  key={nav.id}
                  className={`${
                    location.pathname === `/${nav.id}`
                      ? "text-[#D4AF37]"
                      : "text-secondary"
                  }  fonts-poppins font-medium cursor-pointer text-[16px]`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: toggle ? 1 : 0, y: toggle ? 0 : 10 }}
                  transition={{
                    duration: 0.3,
                    delay: toggle ? 0.1 * index : 0,
                  }}
                  onClick={() => {
                    setActive(nav.title);
                    setToggle(!toggle);
                  }}
                >
                  <a href={`/${nav.id}`}>{nav.title}</a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
