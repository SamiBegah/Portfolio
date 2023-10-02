import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

import Frontend from "../img/frontend.gif";
import Coding from "../img/coding.gif";
import Design from "../img/design.gif";
import Js from "../img/skills/js.png";
import Reactjs from "../img/skills/react.png";
import Nodejs from "../img/skills/nodejs.png";
import Ts from "../img/skills/ts.png";
import Tailwindcss from "../img/skills/tailwindcss.png";
import Html5 from "../img/skills/html5.png";
import Css3 from "../img/skills/css3.png";
import Avatar from "../img/profile-5.png";

import {
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";

function About() {
  const [openPopoverFrontend, setOpenPopoverFrontend] = useState(false);
  const [openPopoverJs, setOpenPopoverJs] = useState(false);
  const [openPopoverDesign, setOpenPopoverDesign] = useState(false);

  const triggers = (popoverStateFunction) => ({
    onMouseEnter: () => popoverStateFunction(true),
    onMouseLeave: () => popoverStateFunction(false),
  });

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 1;
        if (newProgress >= 100) {
          clearInterval(interval);
        }
        return newProgress;
      });
    }, 5);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const [skillsBar, setSkillsBar] = useState([
    {
      name: "Javascript",
      pourcentage: 85,
      color: "#EFD82E",
      type: "main",
      logo: Js,
    },
    {
      name: "React.js",
      pourcentage: 80,
      color: "#5DD3F3",
      type: "main",
      logo: Reactjs,
    },

    {
      name: "Tailwind CSS",
      pourcentage: 90,
      color: "#05B0CE",
      type: "main",
      logo: Tailwindcss,
    },
    {
      name: "Node.js",
      pourcentage: 75,
      color: "#609555",
      type: "main",
      logo: Nodejs,
    },
    {
      name: "TypeScript",
      pourcentage: 70,
      color: "#2B72BF",
      type: "main",
      logo: Ts,
    },
    {
      name: "HTML5",
      pourcentage: 95,
      color: "#E44F26",
      type: "main",
      logo: Html5,
    },
    {
      name: "CSS3",
      pourcentage: 95,
      color: "#2762E9",
      type: "main",
      logo: Css3,
    },

    {
      name: "MySQL",
      color: "#3E6E93",
      type: "secondary",
    },
    {
      name: "MangoDb",
      color: "#52A74A",
      type: "secondary",
    },
    {
      name: "FireBase",
      color: "#FFA626",
      type: "secondary",
    },
    {
      name: "C#",
      color: "#1E9924",
      type: "secondary",
    },
    {
      name: "Java",
      color: "#5482A1",
      type: "secondary",
    },

    {
      name: "ASP .NET",
      color: "#9911BD",
      type: "secondary",
    },
    {
      name: "PHP",
      color: "#4C588E",
      type: "secondary",
    },
    {
      name: "BootStrap",
      color: "#8513F3",
      type: "secondary",
    },
    {
      name: "SEO",
      color: "#20B1D3",
      type: "secondary",
    },
    {
      name: "Spring",
      color: "#6CB52D",
      type: "secondary",
    },
    {
      name: "SQL",
      color: "#0F152E",
      type: "secondary",
    },
    {
      name: "Angular",
      color: "#DD0031",
      type: "secondary",
    },
  ]);

  const popoverContentFrontend = (
    <PopoverContent
      {...triggers(setOpenPopoverFrontend)}
      className="max-w-[24rem]  "
    >
      <div className="flex items-center justify-between">
        <img src={Avatar} className="w-12" alt="Avatar" />

        <p className="w-5/6">
          I love the visual side of the front-end development and I mainly use
          Tailwind CSS to style my pages. But when needed, I have no trouble
          setting up back-end services either!
        </p>
      </div>
    </PopoverContent>
  );

  const popoverContentJs = (
    <PopoverContent {...triggers(setOpenPopoverJs)} className="max-w-[24rem]">
      <div className="flex items-center justify-between">
        <img src={Avatar} className="w-12" alt="Avatar" />

        <p className="w-5/6 text-justify">
          Javascript is my language of choice when developing web applications.
          Combined with React.js, anything is possible!
        </p>
      </div>
    </PopoverContent>
  );

  const popoverContentDesign = (
    <PopoverContent
      {...triggers(setOpenPopoverDesign)}
      className="max-w-[24rem]"
    >
      <div className="flex items-center justify-between">
        <img src={Avatar} className="w-12" alt="Avatar" />

        <p className="w-5/6 text-justify">
          Creating engaging and user-friendly modern designs is a passion of
          mine. I strongly focus on making minimalist but highly reactive and
          responsive web applications!
        </p>
      </div>
    </PopoverContent>
  );

  return (
    <div className=" w-full h-full flex flex-col relative pb-20">
      <div className=" w-full h-full lg:p-2 lg:pb-10 flex flex-col justify-center">
        <div className=" flex flex-col lg:flex-row items-between h-full lg:h-full p-4 gap-40 my-20 lg:my-40">
          {/* About me */}
          <div className="flex flex-col items-center h-full w-full lg:w-1/2 d3-">
            <div className="h-full flex flex-col items-center justify-center gap-5  p-5 lg:p-16 rounded-xl w-full lg:w-11/12 bg-black bg-opacity-30 shadow-2xl">
              <div className="h-full flex flex-col justify-center items-center text-4xl lg:text-5xl ">
                <h2 className="font-bold  text-white mb-5  rounded-xl p-5 pb-10">
                  BIO
                </h2>
                <div>
                  <p className="text-justify text-lg sm:text-xl  lg:text-2xl text-white">
                    Hi! My name is{" "}
                    <span className="  font-bold ">Sami Begah</span> and I am a{" "}
                    <span className="   font-bold ">junior web developer </span>{" "}
                    from <span className="  ">Montreal, Canada.</span>
                    <br /> <br />
                    In 2021, I started my web development journey and have been
                    dedicated to <span className="  ">
                      continuous learning
                    </span>{" "}
                    and <span className="  ">self-improvement</span> since then.{" "}
                    <br /> <br />
                    By 2023, I had successfully graduated from{" "}
                    <a
                      className=" font-bold  hover:scale-105 transition-all ease-in-out duration-500"
                      href="https://www.collegeahuntsic.qc.ca/formation-continue/aec-intensives/developpement-de-sites-web-transactionnels"
                    >
                      Ahunstic College
                    </a>
                    <sup className="text-xs">(→)</sup> as a web developer. With
                    a <span className="">design-focused</span> eye and passion
                    for user experience, I love to create{" "}
                    <span className="">modern</span> and{" "}
                    <span className="">intuitive</span> digital experiences.
                    <br />
                    <br />
                    If you're looking for a{" "}
                    <span className="  font-bold ">passionate</span>,{" "}
                    <span className="  font-bold ">
                      detail-oriented web developer
                    </span>{" "}
                    eager to further develop skills, learn, and contribute to a
                    dynamic team, I would be thrilled to discuss potential
                    <span className=" "> opportunities. </span>
                  </p>
                  <div className="w-full flex justify-center text-xl sm:text-xl  lg:text-2xl pt-12 ">
                    <Link
                      to={"contact"}
                      className="relative inline-flex items-center justify-center p-4 overflow-hidden font-medium transition duration-300 ease-out rounded-xl group  bg-[#f2f2f2] shadow-inner"
                    >
                      <span class="absolute inset-0 flex items-center justify-center w-full h-full text-black duration-300 -translate-x-full group-hover:translate-x-0 ease">
                        <svg
                          class="w-8 h-8"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          ></path>
                        </svg>
                      </span>
                      <span class="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease font-bold">
                        Contact me now!
                      </span>
                      <span class="relative invisible"> Contact me now!</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* My skills */}
          <div className="flex flex-col items-center h-full w-full lg:w-1/2 d3">
            <div className="h-full flex flex-col items-center justify-center gap-5  p-5 lg:p-16 rounded-xl w-full lg:w-11/12 bg-black bg-opacity-30 shadow-2xl">
              <div className="h-full flex justify-center text-4xl lg:text-5xl ">
                <h2 className="font-bold  text-white mb-5  rounded-xl p-5">
                  MY SKILLS
                </h2>
              </div>
              {skillsBar.map((skill) => {
                if (skill.type === "main") {
                  return (
                    <div className="w-full">
                      <div className="flex justify-between items-center space-y-5">
                        <div className=" flex items-center text-xl lg:text-2xl gap-2 font-medium text-white dark:text-black">
                          <img
                            src={skill.logo}
                            alt="logo skill"
                            className="w-8"
                          />
                          <span>{skill.name}</span>
                        </div>
                        <span className="text-lg font-medium text-white dark:text-black">
                          {skill.pourcentage} %
                        </span>
                      </div>
                      <div className="w-full bg-white shadow-md rounded-full h-6 dark:bg-gray-700">
                        <div
                          className=" h-6 rounded-full shadow-md"
                          style={{
                            width: `${
                              progress >= skill.pourcentage
                                ? skill.pourcentage
                                : progress
                            }%`,
                            backgroundColor: skill.color,
                          }}
                        ></div>
                      </div>
                    </div>
                  );
                } else {
                  return null;
                }
              })}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-20 ">
          {/* What I love */}
          <div className=" flex flex-col  py-20 bg-black bg-opacity-30  lg:m-20 rounded-2xl m-5 lg:p-16 ">
            <div className="flex justify-center ">
              <h2 className="font-bold text-white pb-10  rounded-xl text-4xl md:text-5xl">
                What I love
              </h2>
            </div>

            <div className="flex flex-col justify-center gap-2 w-full  rounded-3xl rounded-b-xl  px-2 mt-5">
              <ul className="flex flex-col sm:flex-row w-full h-full justify-around items-center gap-10">
                <li className="w-3/4 lg:w-1/5  flex relative flex-col p-5 lg:p-2 items-center rounded-xl bg-white ">
                  <h3 className="text-2xl p-2 whitespace-nowrap text-black text-center font-extrabold leading-none tracking-tight">
                    Front-end
                  </h3>

                  <Popover
                    placement="bottom"
                    open={openPopoverFrontend}
                    handler={setOpenPopoverFrontend}
                  >
                    <PopoverHandler {...triggers(setOpenPopoverFrontend)}>
                      <div className="cursor-pointer relative flex flex-col  bg-white justify-center items-center rounded-b-xl shadow-blue-500/20">
                        <img src={Frontend} alt="Frontend" />
                      </div>
                    </PopoverHandler>
                    {popoverContentFrontend}
                  </Popover>
                  <span className="text-sm whitespace-nowrap absolute bottom-0 bg-black text-white rounded-t-md p-0.5 ">
                    Hover for more info!
                  </span>
                </li>
                <li className="w-3/4 lg:w-1/5 flex relative flex-col p-5 lg:p-2 items-center rounded-xl bg-white ">
                  <h3 className="text-2xl p-2 whitespace-nowrap text-black text-center font-extrabold leading-none tracking-tight">
                    Coding
                  </h3>
                  <Popover
                    placement="bottom"
                    open={openPopoverJs}
                    handler={setOpenPopoverJs}
                  >
                    <PopoverHandler {...triggers(setOpenPopoverJs)}>
                      <div className="cursor-pointer relative flex flex-col  bg-white justify-center items-center     rounded-xl shadow-blue-500/20">
                        <img src={Coding} alt="Coding" />
                      </div>
                    </PopoverHandler>
                    {popoverContentJs}
                  </Popover>
                  <span className="text-sm whitespace-nowrap absolute bottom-0 bg-black text-white rounded-t-md p-0.5">
                    Hover for more info!
                  </span>
                </li>
                <li className="w-3/4 lg:w-1/5 flex relative flex-col p-5 lg:p-2 items-center rounded-xl bg-white ">
                  <h3 className="text-2xl p-2 whitespace-nowrap text-black text-center font-extrabold leading-none tracking-tight">
                    Design
                  </h3>

                  <Popover
                    placement="bottom"
                    open={openPopoverDesign}
                    handler={setOpenPopoverDesign}
                  >
                    <PopoverHandler {...triggers(setOpenPopoverDesign)}>
                      <div className="cursor-pointer relative flex flex-col  bg-white justify-center items-center rounded-xl shadow-blue-500/20">
                        <img src={Design} alt="Design" />
                      </div>
                    </PopoverHandler>
                    {popoverContentDesign}
                  </Popover>
                  <span className="text-sm whitespace-nowrap absolute bottom-0 bg-black text-white rounded-t-md p-0.5">
                    Hover for more info!
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className=" flex flex-col items-center py-20 bg-black bg-opacity-30 m-5 lg:m-20 rounded-2xl">
            <div className="flex justify-center text-3xl lg:text-4xl">
              <h2 className="font-bold  text-white  rounded-xl p-5 mb-5 ">
                Secondary skills
              </h2>
            </div>
            <div className="flex flex-col items-center justify-center h-full w-full m-2  rounded-lg  ">
              <ul className=" grid grid-flow-col grid-rows-6  md:grid-rows-2 text-center px-6 py-6 justify-around gap-6 lg:gap-6 ">
                {skillsBar.map((skill) => {
                  if (skill.type === "secondary") {
                    return (
                      <li
                        className="rounded-xl lg:text-2xl  text-white px-4 py-3 flex items-center justify-center shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]"
                        style={{
                          backgroundColor: skill.color,
                        }}
                      >
                        {skill.name}
                      </li>
                    );
                  } else {
                    return null;
                  }
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
