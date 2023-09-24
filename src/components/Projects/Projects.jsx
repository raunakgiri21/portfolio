import Title from "../Layouts/Title";
import ProjectCard from "./ProjectCard";

import {
  foodstrap,
  twitter,
  netflix,
  nike,
  aisumz,
  weather,
} from "../../assets";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          description="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectCard
          title="FOODSTRAP e-Commerce"
          des="lorem, ipsum dolor sit smasdkn fiir3f3 iurfnio3f iornfoi3nrpowef oiuhrfoinerf oiunfr3"
          src={foodstrap}
        />
        <ProjectCard
          title="Mini Twitter Clone"
          des="lorem, ipsum dolor sit smasdkn fiir3f3 iurfnio3f iornfoi3nrpowef oiuhrfoinerf oiunfr3"
          src={twitter}
        />
        <ProjectCard
          title="Netflix Clone"
          des="lorem, ipsum dolor sit smasdkn fiir3f3 iurfnio3f iornfoi3nrpowef oiuhrfoinerf oiunfr3"
          src={netflix}
        />
        <ProjectCard
          title="FOODSTRAP e-Commerce"
          des="lorem, ipsum dolor sit smasdkn fiir3f3 iurfnio3f iornfoi3nrpowef oiuhrfoinerf oiunfr3"
          src={foodstrap}
        />
        <ProjectCard
          title="Mini Twitter Clone"
          des="lorem, ipsum dolor sit smasdkn fiir3f3 iurfnio3f iornfoi3nrpowef oiuhrfoinerf oiunfr3"
          src={twitter}
        />
        <ProjectCard
          title="Netflix Clone"
          des="lorem, ipsum dolor sit smasdkn fiir3f3 iurfnio3f iornfoi3nrpowef oiuhrfoinerf oiunfr3"
          src={netflix}
        />
      </div>
    </section>
  );
};

export default Projects;
