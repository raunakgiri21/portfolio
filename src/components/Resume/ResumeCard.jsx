const ResumeCard = ({ title, subTitle, score, des }) => {
  return (
    <div className="w-full h-1/3 group flex">
      <div className="w-4 md:w-10 h-[6px] bgOpacity mt-16 relative">
        <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60">
          <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designcolor duration-300"></span>
        </span>
      </div>
      <div className="w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg p-4 flex flex-col justify-center gap-6 shadow-shadowOne">
        <div className="flex flex-row justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold group-hover:text-white duration-300">
              {title}
            </h3>
            <p className="text-sm mt-2 text-gray-400 group-hover:text-white duration-300">
              {subTitle}
            </p>
          </div>
          <div>
            <p className="px-4 py-2 group-hover:text-designcolor duration-300 bg-black bg-opacity-25 rounded-lg flex justify-center items-center shadow-shadowOne text-sm font-medium">
              {score}
            </p>
          </div>
        </div>
        <p className="text-sm font-medium text-gray-400 group-hover:text-gray-300 duration-300">
          {des}
        </p>
      </div>
    </div>
  );
};

export default ResumeCard;
