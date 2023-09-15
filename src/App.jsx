import Banner from "./components/Banner/Banner";
import Features from "./components/Features/Features";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
      <div
        id="home"
        className="max-w-screen-2xl mx-auto"
      >
        <Navbar />
        <Banner />
        <Features />
      </div>
    </div>
  );
};

export default App;
