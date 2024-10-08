// import { HiArrowRight } from "react-icons/hi";

const Card = ({ title, icon, description }) => {
  return (
    <div className="w-full px-12 h-auto py-10 rounded-lg shadow-shadowOne flex  items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100">
      <div className="h-full overflow-y-hidden">
        <div className="flex h-full flex-col gap-6 md:gap-10 translate-y-0 transition-transform duration-500">
          <div>
            <span className="text-5xl text-designcolor">{icon}</span>
          </div>
          <div className="flex flex-col gap-4 md:gap-6">
            <h2 className="text-xl md:text-2xl font-titleFont font-bold text-gray-300">
              {title}
            </h2>
            <p
              className="base"
              dangerouslySetInnerHTML={{ __html: description }}
            >
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
