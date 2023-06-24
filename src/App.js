import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import Heading from "./components/Heading";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [firstClick, setFirstClick] = useState(
    localStorage.getItem("firstClick") === "true"
  );
  const [activePage, setActivePage] = useState("");

  useEffect(() => {
    localStorage.setItem("firstClick", firstClick);
  }, [firstClick]);

  let bgColor;
  switch (activePage) {
    case "about":
      bgColor = "bg-blue-600";
      break;
    case "projects":
      bgColor = "bg-[#0EA5E9]";
      break;
    case "contact":
      bgColor = "bg-indigo-500";
      break;
    default:
      bgColor = "";
  }

  function LocationHandler() {
    const location = useLocation();

    useEffect(() => {
      const currentPage = location.pathname.slice(1);
      setActivePage(currentPage);

      if (location.pathname === "/") {
        setFirstClick(false);
      }
    }, [location, setActivePage, setFirstClick]);

    return null;
  }

  return (
    <Router>
      <LocationHandler
        setActivePage={setActivePage}
        setFirstClick={setFirstClick}
      />
      <div
        className={` font-custom ${
          firstClick ? "h-fit" : "h-full p-2"
        } w-full flex flex-col items-center justify-center`}
      >
        <div className="w-full h-full flex flex-col justify-center items-center ">
          <Heading firstClick={firstClick} />
          {!firstClick && <Home firstClick={firstClick} className="w-full" />}
          <Navbar
            className={`transition-all duration-1000 ease-in-out`}
            firstClick={firstClick}
            setFirstClick={setFirstClick}
            activePage={activePage}
            setActivePage={setActivePage}
          />
        </div>
        <div
          className={`transition-all duration-1000 ease-in-out flex flex-col ${bgColor} justify-center w-full border-opacity-60 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] ${
            firstClick ? " bg-opacity-40 rounded-0    " : ""
          }  bg-opacity-20 border-white `}
        >
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
