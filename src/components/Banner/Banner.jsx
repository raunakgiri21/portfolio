import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";

const Banner = () => {
  return (
    <section className="w-full py-20 flex border-b-[1px] font-titleFont border-b-black">
      <LeftBanner />
      <RightBanner />
    </section>
  );
};

export default Banner;
