import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="py-12 font-titleFont">
        <p className="text-sm text-designcolor tracking-[4px]">2022 - 2023</p>
        <h2 className="text-3xl md:text-4xl font-bold">Work Experience</h2>
      </div>
      <div className="w-full md:w-1/2 h-[1000px] border-l-[6px] border-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
          title="Graduate Engineer Trainee"
          subTitle="Vodafone Intelligent Solutions  (2023 - Present)"
          score="Pune"
          des="Currently in my training period (work from home)"
        />
        <ResumeCard
          title="Summer Analyst"
          subTitle="TechVariable  (2023)"
          score="Guwahati"
          des="Worked as a MERN Stack Developer to build an E-Commerce website having features like Wishlists, Add-to-Cart, Search Integration, etc."
        />
        <ResumeCard
          title="Software Developer Intern"
          subTitle="Zephyr Solutions  (2022)"
          score="Guwahati"
          des="Worked with Python and Javascript to build an interactive Digital library and Networking Site using Flask framework."
        />
      </div>
    </div>
  );
};

export default Experience;
