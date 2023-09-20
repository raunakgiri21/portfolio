import Title from "../Layouts/Title";
import { contact } from "../../assets";
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="Contact"
          description="Contact With Me"
        />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex justify-between">
          <div className="w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
            <img
              className="w-full h-64 object-cover rounded-lg mb-2 opacity-90"
              src={contact}
              alt="contactImg"
            />
            <div className="flex flex-col gap-4">
              <h3 className="text-3xl font-bold text-white">Raunak Giri</h3>
              <p className="text-lg font-normal text-gray-400">
                MERN Stack Developer
              </p>
              <p className="text-base text-gray-500 tracking-wide italic">
                Crafting seamless MERN experiences to elevate web applications -
                let's build something amazing together!
              </p>
              <p className="text-base text-gray-400 flex items-center gap-2">
                Phone: <span className="text-lightText">+91 8638189725</span>
              </p>
              <p className="text-base text-gray-400 flex items-center gap-2">
                Email:{" "}
                <span className="text-lightText">raunakgiri21@gmail.com</span>
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-base uppercase font-titleFont mb-4">
                Find me in
              </h2>
              <div className="flex gap-4">
                <span className="bannerIcon">
                  <FaGithub />
                </span>
                <span className="bannerIcon">
                  <FaLinkedinIn />
                </span>
                <span className="bannerIcon">
                  <FaInstagram />
                </span>
              </div>
            </div>
          </div>
          <div className="w-[60%] h-full flex flex-col justify-between"></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
