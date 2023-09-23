import { logo } from "../../assets/index";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full py-20 h-96 border-b-[1px] border-b-black grid grid-cols-4">
      <div className="w-full h-full flex flex-col gap-6">
        <img
          src={logo}
          alt="logo"
          width={62}
          className="opacity-[85%]"
        />
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
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designcolor tracking-wider">
          Quick Link
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          <li>
            <span className="w-full text-lg relative hover:text-designcolor duration-300 group cursor-pointer">
              About
              <span className="w-full h-[1px] bg-designcolor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designcolor duration-300 group cursor-pointer">
              Portfolio
              <span className="w-full h-[1px] bg-designcolor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designcolor duration-300 group cursor-pointer">
              Services
              <span className="w-full h-[1px] bg-designcolor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designcolor duration-300 group cursor-pointer">
              Blog
              <span className="w-full h-[1px] bg-designcolor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designcolor duration-300 group cursor-pointer">
              Contact
              <span className="w-full h-[1px] bg-designcolor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
        </ul>
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designcolor tracking-wider">
          Resources
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          <li>
            <span className="w-full text-lg relative hover:text-designcolor duration-300 group cursor-pointer">
              Authentication
              <span className="w-full h-[1px] bg-designcolor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designcolor duration-300 group cursor-pointer">
              System Status
              <span className="w-full h-[1px] bg-designcolor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designcolor duration-300 group cursor-pointer">
              Terms of Services
              <span className="w-full h-[1px] bg-designcolor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designcolor duration-300 group cursor-pointer">
              Pricing
              <span className="w-full h-[1px] bg-designcolor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designcolor duration-300 group cursor-pointer">
              Over Right
              <span className="w-full h-[1px] bg-designcolor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
        </ul>
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designcolor tracking-wider">
          Developers
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          <li>
            <span className="w-full text-lg relative hover:text-designcolor duration-300 group cursor-pointer">
              Documentation
              <span className="w-full h-[1px] bg-designcolor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designcolor duration-300 group cursor-pointer">
              Authentication
              <span className="w-full h-[1px] bg-designcolor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designcolor duration-300 group cursor-pointer">
              API Reference
              <span className="w-full h-[1px] bg-designcolor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designcolor duration-300 group cursor-pointer">
              Support
              <span className="w-full h-[1px] bg-designcolor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designcolor duration-300 group cursor-pointer">
              Open Source
              <span className="w-full h-[1px] bg-designcolor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
        </ul>
      </div>
      <div className="w-full h-full"></div>
    </div>
  );
};

export default Footer;
