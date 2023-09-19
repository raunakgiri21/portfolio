import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="py-12 font-titleFont">
        <p className="text-sm text-designcolor tracking-[4px]">India</p>
        <h2 className="text-4xl font-bold">Educational Qualifications</h2>
      </div>
      <div className="w-1/2 h-[1000px] border-l-[6px] border-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
          title="B.Tech in Electronics & Telecommunication Engineering"
          subTitle="Assam Engineering College (2019-2023)"
          score="82.9%"
          des="Trained in various field of technologies like programming, software projects, networking and communication protocols, etc."
        />
        <ResumeCard
          title="Higher Secondary in Science"
          subTitle="Cotton College (2017-2019)"
          score="71%"
          des="Built a strong mathematical foundation for further studies in engineering, computer science, and other technical disciplines."
        />
        <ResumeCard
          title="High School"
          subTitle="DAV High School (2017)"
          score="88.6%"
          des="Foundational education, social interaction, creativity, physical activity, basic problem-solving, character development."
        />
      </div>
    </div>
  );
};

export default Education;
