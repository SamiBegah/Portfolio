import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function NavBar({ firstClick, setFirstClick, activePage, setActivePage }) {
  return (
    <div
      className={`w-full flex justify-around shadow-xl opacity-100 text-white bg-black lg:text-xl 
    transition-all duration-1000 ease-in-out 
    
    ${firstClick ? " transition-all transform top-24" : "rounded-b-3xl"}`}
      onClick={() => setFirstClick(true)}
    >
      <Link
        to="/about"
        className={`py-3 w-1/3 text-center flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out  hover:bg-white ${
          !firstClick ? "rounded-bl-3xl" : ""
        } hover:text-black`}
      >
        <button>ABOUT ME</button>
      </Link>
      <Link
        to="/contact"
        className={`py-3 w-1/3 text-center flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out  hover:bg-white hover:text-black`}
      >
        <button>CV - CONTACT</button>
      </Link>
      <Link
        to="/projects"
        className={`py-3 w-1/3 text-center flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out  hover:bg-white ${
          !firstClick ? "rounded-br-3xl" : ""
        } hover:text-black`}
      >
        <button>PROJECTS</button>
      </Link>
    </div>
  );
}

export default NavBar;
