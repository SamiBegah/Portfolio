import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import Heading from "./components/Heading";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./components/Stars.css";
import { act } from "react-dom/test-utils";

function App() {
  const [activePage, setActivePage] = useState();

  function LocationHandler() {
    const location = useLocation();

    useEffect(() => {
      const currentPage = location.pathname.slice(1);
      setActivePage(currentPage);
    }, [location]);
    return null;
  }

  const pageTitleHandler = () => {
    if (activePage === "projects") {
      return "PROJECTS";
    } else if (activePage === "contact") {
      return "CV / CONTACT";
    } else if (activePage === "about") {
      return "ABOUT ME";
    }
  };

  console.log(activePage);
  return (
    <div>
      <div className=" shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] overflow-hidden ">
        <Router>
          <LocationHandler setActivePage={setActivePage} />
          <div className="font-custom h-fit w-full flex flex-col items-center justify-center">
            <div className="w-full h-full flex flex-col justify-center items-center ">
              <Heading />
              {activePage !== "" ? (
                <Navbar
                  className={`transition-all duration-1000 ease-in-out sticky top-0`}
                  activePage={activePage}
                  setActivePage={setActivePage}
                />
              ) : (
                ""
              )}
            </div>

            <div className="transition-all h-full  duration-1000 ease-in-out flex flex-col justify-center w-full bg-black">
              <Home />
              {activePage !== "" ? (
                <div className="bg-gradient-to-b from-black via-slate-700 to-black overflow-hidden">
                  <div className="flex justify-center items-center text-4xl lg:text-7xl mb-20 bg-[#fafafa] shadow-md z-10">
                    <div className=" font-bold  py-10 w-full flex justify-center items-center z-10 ">
                      <h1> {pageTitleHandler()} </h1>
                    </div>
                  </div>
                  <div id="stars2"></div>

                  <Routes>
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                  </Routes>
                </div>
              ) : (
                <div>
                  <span className="text-white flex justify-center text-2xl lg:text-4xl py-10">
                    Please choose an option:
                  </span>
                  <Navbar
                    className={`transition-all duration-1000 ease-in-out sticky top-0`}
                    activePage={activePage}
                    setActivePage={setActivePage}
                  />
                </div>
              )}
              <Footer />
            </div>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
