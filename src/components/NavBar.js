import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function NavBar({ firstClick, setFirstClick, activePage, setActivePage }) {
  let introductionText =
    "I  AM SAMI BEGAH, A JUNIOR WEB DEVELOPER. \n WELCOME TO MY PORFOLIO!";

  const [printedText, setPrintedText] = useState("");
  const countChar = useRef(0);

  useEffect(() => {
    function print() {
      setPrintedText(
        (prevChar) => prevChar + introductionText[countChar.current]
      );
      countChar.current++;
    }
    if (countChar.current < introductionText.length - 1) {
      let addChar = setInterval(print, 50);
      return () => clearInterval(addChar);
    }
  });

  return (
    <div className="w-full h-full flex flex-col justify-center items-center sticky top-0 z-10  bg-black ">
      <div
        className="w-full flex justify-around  text-white bg-black lg:text-xl 
    transition-all duration-1000 ease-in-out  "
      >
        <Link
          to="/about"
          onClick={() => setActivePage("/about")}
          className={`${
            activePage === "about"
              ? "bg-opacity-100 text-black lg:text-2xl font-bold "
              : "bg-opacity-10 text-white hover:text-white hover:bg-opacity-40"
          } w-1/3 text-center flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out rounded shadow-md bg-[white]  m-2
         py-2 lg:py-5 `}
        >
          <button>ABOUT ME</button>
        </Link>
        <Link
          to="/contact"
          onClick={() => setActivePage("/contact")}
          className={`${
            activePage === "contact"
              ? "bg-opacity-100 text-black lg:text-2xl font-bold  "
              : "bg-opacity-10 text-white hover:text-white hover:bg-opacity-40"
          } w-1/3 text-center flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out rounded shadow-md bg-[white]  m-2
       py-2 lg:py-5 `}
        >
          <button>CV - CONTACT</button>
        </Link>
        <Link
          to="/projects"
          onClick={() => setActivePage("/projects")}
          className={`${
            activePage === "projects"
              ? "bg-opacity-100 text-black lg:text-2xl  font-bold  "
              : "bg-opacity-10 text-white hover:text-white hover:bg-opacity-40"
          } w-1/3 text-center flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out rounded shadow-md bg-[white]  m-2
       py-2 lg:py-5 `}
        >
          <button>PROJECTS</button>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
