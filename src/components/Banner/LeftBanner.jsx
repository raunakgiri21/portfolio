import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiJavascript,
  SiCodechef,
} from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Software Engineer.",
      "Full Stack Developer.",
      "Professional Coder.",
      "ReactJS Developer.",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className="text-base md:text-lg font-normal">WELCOME TO MY PORTFOLIO</h4>
        <h1 className="text-5xl md:text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designcolor capitalize">Raunak Giri</span>
        </h1>
        <h2 className="text-[1.75rem] md:text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I'm an aspiring Full Stack Developer, specializing in ReactJs. With
          solid experience, I've completed several projects showcasing my
          proficiency in the field.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 xl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
            <span className="bannerIcon">
              <FaGithub />
            </span>
            <span className="bannerIcon">
              <FaInstagram />
            </span>
            <span className="bannerIcon">
              <SiCodechef />
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Best Skill On
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <SiJavascript />
            </span>
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <FaNodeJs />
            </span>
            <span className="bannerIcon">
              <SiCplusplus />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
