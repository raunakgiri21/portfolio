import { Link } from "react-scroll";
import { logo } from "../../assets";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { navLinksdata } from "../../constants";
import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-full h-[76px] md:h-24 sticky top-0 mx-auto flex justify-between items-center font-titleFont z-50 border-b-[1px] border-b-gray-600 bg-bodyColor">
      <div className="flex justify-between items-center gap-2">
        <img
          src={logo}
          alt="logo"
          className="w-[60px] h-[60px] md:w-[70px] md:h-[70px]"
        />
      </div>
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map((navLink) => (
            <li
              key={navLink._id}
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designcolor duration-300"
            >
              <Link
                activeClass="active"
                to={navLink.link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {navLink.title}
              </Link>
            </li>
          ))}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designcolor cursor-pointer"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 -left-3 bg-gray-900 p-4 pt-2 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2">
              <div>
                <img
                  src={logo}
                  alt="logo"
                  className="w-[60px] h-[60px] md:w-[70px] md:h-[70px]"
                />
              </div>
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((navLink) => (
                  <li
                    key={navLink._id}
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designcolor duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={navLink.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {navLink.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-4">
                  Find me in
                </h2>
                <div className="flex gap-4">
                  <span className="bannerIcon">
                    <FaGithub />
                  </span>
                  <span className="bannerIcon">
                    <FaLinkedinIn />
                  </span>
                  <span className="bannerIcon">
                    <FaInstagram />
                  </span>
                </div>
              </div>
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designcolor duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
