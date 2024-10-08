import Title from "../Layouts/Title";
import ProjectCard from "./ProjectCard";

import {
  foodstrap,
  twitter,
  netflix,
  nike,
  aisumz,
  weather,
} from "../../assets";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          description="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectCard
          title="FOODSTRAP e-Commerce"
          des="MERN Stack Project with google signin/signup, product filter/search/sort, wishlist, add-to-cart, razorpay payment gateway."
          src={foodstrap}
          github="https://github.com/raunakgiri21/mern-ecommerce"
          // link="https://ecommerce-raunak.up.railway.app/"
        />
        <ProjectCard
          title="Mini Twitter Clone"
          des="MERN Stack mini project with signin/signup, create/like/delete a tweet, follow-unfollow, etc."
          src={twitter}
          github="https://github.com/raunakgiri21/Mini-Twitter-Clone"
          // link="https://exuberant-tie-tick.cyclic.cloud/"
        />
        <ProjectCard
          title="Netflix Clone"
          des="UI clone of Netflix built with ReactJS, other features are signin/signup/logout, using TMDB API."
          src={netflix}
          github="https://github.com/raunakgiri21/Netflix-UI-Clone"
          // link="https://netflix-clone-by-raunak.up.railway.app/signup"
        />
        <ProjectCard
          title="NIKE UI Clone"
          des="A simple static website built using ReactJs and TailwindCSS for  seamless user experiences."
          src={nike}
          github="https://github.com/raunakgiri21/Nike-UI-Clone"
          link="https://nike-ui-clone.vercel.app/"
        />
        <ProjectCard
          title="AI Summary"
          des="Built a website with ReactJS and TailwindCSS which gives us a summary of any news article using AI based Rapid-API."
          src={aisumz}
          github="https://github.com/raunakgiri21/AI-Summarizer"
          link="https://ai-summarizer-jet.vercel.app/"
        />
        <ProjectCard
          title="Weather.ly"
          des="Built a weather forecasting website using HTML, CSS, Javascript and openweathermap-api."
          src={weather}
          github="https://github.com/raunakgiri21/weather.ly"
          link="http://main--weatherdotly.netlify.app/"
        />
      </div>
    </section>
  );
};

export default Projects;
