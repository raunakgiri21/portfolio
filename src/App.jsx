import Banner from "./components/Banner/Banner";
import Features from "./components/Features/Features";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";

const App = () => {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <div className="max-w-screen-2xl mx-auto">
        <Navbar />
        <Banner />
        <Features />
        <Projects />
        <Resume />
      </div>
    </div>
  );
};

export default App;
