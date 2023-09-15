import { my_img, my_casual_img } from "../../assets";

const RightBanner = () => {
  return (
    <div className="w-1/2 flex justify-center relative">
      <img
        src={my_casual_img}
        alt="bannerImg"
        className="h-[680px] z-10 pl-5"
      />
      <div className="absolute bottom-0 w-[500px] h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
};

export default RightBanner;
