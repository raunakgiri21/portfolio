import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="py-12 font-titleFont">
        <p className="text-sm text-designcolor tracking-[4px]">2022 - 2024</p>
        <h2 className="text-3xl md:text-4xl font-bold">Work Experience</h2>
      </div>
      <div className="w-full md:w-1/2 h-[1000px] border-l-[6px] border-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
          title="Software Engineer"
          subTitle="29Kreativ (Jan'2024 - Present)"
          score="Remote"
          des="Built a car rental app with Ionic-Angular and Firebase, integrating authentication, Moneris payments, and an Admin Dashboard for booking management."
        />
        <ResumeCard
          title="Graduate Engineer Trainee"
          subTitle="Vodafone Intelligent Solutions  (Aug'2023 - Dec'2023)"
          score="Pune"
          des="Worked on a SPFX based project and ensured web accessibility compliance by implementing various components in a ReactJS environment."
        />
        <ResumeCard
          title="Summer Analyst Intern"
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
