import { logo } from "../../assets";
import { navLinksdata } from "../../constants";

const Navbar = () => {
  return (
    <div className="w-full h-24 sticky top-0 mx-auto flex justify-between items-center font-titleFont z-50 border-b-[1px] border-b-gray-600 bg-bodyColor">
      <div className="flex justify-between items-center gap-2">
        <img
          src={logo}
          alt="logo"
          width={70}
          height={70}
        />
      </div>
      <div>
        <ul className="flex items-center gap-10">
          {navLinksdata.map((navLink) => (
            <li
              key={navLink._id}
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designcolor duration-300"
            >
              <a href={`#${navLink.link}`}>{navLink.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
