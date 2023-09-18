import Title from "../Layouts/Title";
import Education from "./Education";

const Resume = () => {
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
        <ul className="w-full grid grid-cols-4">
          <li className="resumeLi">Education</li>
          <li className="resumeLi">Professional Skill</li>
          <li className="resumeLi">Experience</li>
          <li className="resumeLi">Achievements</li>
        </ul>
      </div>
      <Education />
    </section>
  );
};

export default Resume;