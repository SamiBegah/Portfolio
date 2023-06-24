import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

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
    <div className=" w-full h-full flex flex-col p-2 relative ">
      <div className=" w-full h-full p-2 lg:p-10 flex lg:flex-row flex-col justify-center ">
        <div className="d3- flex flex-col items-between gap-20 lg:w-1/2 h-full lg:h-full ">
          {/* About me */}
          <div className=" w-full  flex flex-col ">
            <div className="flex justify-center text-4xl lg:text-5xl my-10">
              <h2 className="font-bold bg-black  text-white  bg-opacity-20 rounded-xl p-2">
                ABOUT ME
              </h2>
            </div>
            <div className="text-white flex justify-center items-center p-10 lg:p-16 2xl:p-20 rounded-xl  lg:h-full bg-black bg-opacity-30  ">
              <p className="text-justify text-lg sm:text-xl  xl:text-2xl">
                Hi, my name is{" "}
                <span className=" text-[#6dd6ff] font-bold ">Sami Begah</span>{" "}
                and I am a{" "}
                <span className="  text-[#6dd6ff] font-bold ">
                  front-end web developer{" "}
                </span>{" "}
                from <span className=" text-[#6dd6ff] ">Montreal, Canada.</span>
                <br /> <br />
                In 2021, I started my web development journey and have been
                dedicated to{" "}
                <span className=" text-[#6dd6ff] ">
                  continuous learning
                </span>{" "}
                and <span className=" text-[#6dd6ff] ">self-improvement</span>{" "}
                since then. By 2023, I had successfully graduated from{" "}
                <a
                  className=" font-bold text-[#6dd6ff] hover:scale-105 transition-all ease-in-out duration-500"
                  href="https://www.collegeahuntsic.qc.ca/formation-continue/aec-intensives/developpement-de-sites-web-transactionnels"
                >
                  Ahunstic College
                </a>
                <sup className="text-xs">(→)</sup> as a web developer. With a{" "}
                <span className="text-[#6dd6ff]">design-focused</span> eye and
                passion for user experience, I love to create{" "}
                <span className="text-[#6dd6ff]">modern</span> and{" "}
                <span className="text-[#6dd6ff]">intuitive</span> digital
                experiences.
                <br />
                <br />
                If you're looking for a{" "}
                <span className=" text-[#6dd6ff] font-bold ">
                  passionate
                </span>,{" "}
                <span className=" text-[#6dd6ff] font-bold ">
                  detail-oriented front-end developer
                </span>{" "}
                eager to further develop skills, learn, and contribute to a
                dynamic team, I would be thrilled to discuss potential
                <span className=" text-[#6dd6ff]"> opportunities. </span>
              </p>
            </div>
          </div>

          {/* What I love */}
          <div className=" flex flex-col   ">
            <div className="flex justify-center text-4xl">
              <h2 className="font-bold bg-black  text-white  bg-opacity-20 rounded-xl p-2">
                What I love
              </h2>
            </div>

            <div className="flex mt-5 flex-col justify-center gap-2 w-full  rounded-3xl rounded-b-xl ">
              <ul className="flex flex-col lg:flex-row w-full h-full justify-around items-center lg:gap-5">
                <li className="w-3/4 sm:w-1/2  2xl:w-1/4 flex flex-col p-5 lg:p-2 items-center ">
                  <h3 className="text-2xl p-2 whitespace-nowrap text-white text-center font-extrabold leading-none tracking-tight">
                    Front-end
                  </h3>

                  <Popover
                    placement="bottom"
                    open={openPopoverFrontend}
                    handler={setOpenPopoverFrontend}
                  >
                    <PopoverHandler {...triggers(setOpenPopoverFrontend)}>
                      <div className="cursor-pointer relative flex flex-col  bg-white justify-center items-center     rounded-xl shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]">
                        <img src={Frontend} alt="Frontend" />
                        <span className="text-sm whitespace-nowrap absolute bottom-0 bg-blue-500 bg-opacity-50 text-white rounded-t-md p-0.5">
                          Hover for more info!
                        </span>
                      </div>
                    </PopoverHandler>
                    {popoverContentFrontend}
                  </Popover>
                </li>
                <li className="w-3/4 sm:w-1/2  2xl:w-1/4  flex flex-col p-5 lg:p-2 items-center ">
                  <h3 className="text-2xl p-2 whitespace-nowrap text-white text-center font-extrabold leading-none tracking-tight">
                    Coding
                  </h3>
                  <Popover
                    placement="bottom"
                    open={openPopoverJs}
                    handler={setOpenPopoverJs}
                  >
                    <PopoverHandler {...triggers(setOpenPopoverJs)}>
                      <div className="cursor-pointer relative flex flex-col  bg-white justify-center items-center     rounded-xl shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]">
                        <img src={Coding} alt="Coding" />
                        <span className="text-sm whitespace-nowrap absolute bottom-0 bg-blue-500 bg-opacity-50 text-white rounded-t-md p-0.5">
                          Hover for more info!
                        </span>
                      </div>
                    </PopoverHandler>
                    {popoverContentJs}
                  </Popover>
                </li>
                <li className="w-3/4 sm:w-1/2  2xl:w-1/4  flex flex-col p-5 lg:p-2 items-center ">
                  <h3 className="text-2xl p-2 whitespace-nowrap text-white text-center font-extrabold leading-none tracking-tight">
                    Design
                  </h3>

                  <Popover
                    placement="bottom"
                    open={openPopoverDesign}
                    handler={setOpenPopoverDesign}
                  >
                    <PopoverHandler {...triggers(setOpenPopoverDesign)}>
                      <div className="cursor-pointer relative flex flex-col  bg-white justify-center items-center     rounded-xl shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]">
                        <img src={Design} alt="Design" />
                        <span className="text-sm whitespace-nowrap absolute bottom-0 bg-blue-500 bg-opacity-50 text-white rounded-t-md p-0.5">
                          Hover for more info!
                        </span>
                      </div>
                    </PopoverHandler>
                    {popoverContentDesign}
                  </Popover>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* My skills */}
        <div className="flex flex-col h-full w-full lg:w-1/2 p-5 d3">
          <div className="flex justify-center text-4xl lg:text-5xl">
            <h2 className="font-bold bg-black  text-white  bg-opacity-20 rounded-xl mb-10 mt-12 lg:mb-0 lg:mt-5 p-2">
              MY SKILLS
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 h-4/6  lg:p-10 rounded-lg ">
            {skillsBar.map((skill) => {
              if (skill.type === "main") {
                return (
                  <div className="w-full">
                    <div className="flex justify-between items-center space-y-5">
                      <div className=" flex items-center text-xl gap-2 font-medium text-white dark:text-white">
                        <img
                          src={skill.logo}
                          alt="logo skill"
                          className="w-8"
                        />
                        <span>{skill.name}</span>
                      </div>
                      <span className="text-lg font-medium text-white dark:text-white">
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
          <div className="pt-10">
            <div className="flex justify-center text-2xl lg:text-3xl">
              <h2 className="font-bold bg-black  text-white  bg-opacity-20 rounded-xl p-2">
                Secondary skills
              </h2>
            </div>
            <div className=" mt-10 flex flex-col items-center justify-center h-full w-full">
              <ul className=" grid grid-flow-col grid-rows-3 text-center   justify-around gap-3 lg:gap-5 ">
                {skillsBar.map((skill) => {
                  if (skill.type === "secondary") {
                    return (
                      <li
                        className="rounded-xl lg:text-xl text-white shadow-md px-3 py-2  flex items-center justify-center"
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
