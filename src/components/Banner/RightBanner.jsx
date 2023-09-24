import { my_img, my_casual_img } from "../../assets";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center relative">
      <img
        src={my_casual_img}
        alt="bannerImg"
        className="h-[410px] w-[410px] lgl:h-[680px] lgl:w-[680px] z-10 ml-5 object-cover"
      />
      <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
};

export default RightBanner;
