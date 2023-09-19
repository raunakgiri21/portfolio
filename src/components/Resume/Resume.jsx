import { useState } from "react";
import Title from "../Layouts/Title";
import Achievement from "./Achievement";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

const Resume = () => {
  const [resumeState, setResumeState] = useState(1);
  const resume = [<Education />, <Skills />, <Experience />];
  return (
    <section
      id="resume"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="HIRE ME FOR EXCEPTIONAL TALENT AND UNMATCHED CONTRIBUTION!"
          description="My Resume"
        />
      </div>
      <div>
        <ul className="w-full grid grid-cols-3">
          <li
            className={`${
              resumeState === 1
                ? "border-designcolor rounded-lg"
                : "border-transparent"
            } resumeLi`}
            onClick={() => setResumeState(1)}
          >
            Education
          </li>
          <li
            className={`${
              resumeState === 2
                ? "border-designcolor rounded-lg"
                : "border-transparent"
            } resumeLi`}
            onClick={() => setResumeState(2)}
          >
            Professional Skill
          </li>
          <li
            className={`${
              resumeState === 3
                ? "border-designcolor rounded-lg"
                : "border-transparent"
            } resumeLi`}
            onClick={() => setResumeState(3)}
          >
            Experience
          </li>
        </ul>
      </div>
      {resume[resumeState - 1]}
    </section>
  );
};

export default Resume;
