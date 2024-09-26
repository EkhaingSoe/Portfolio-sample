import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
// import Portfolio from "./pages/Portfolio";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className=" font-poppins text-sm text-gray-700   ">
      <Navbar />
      <div className=" xl:max-w-[1300px] mx-auto px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/portfolio" element={<Portfolio />} /> */}
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
