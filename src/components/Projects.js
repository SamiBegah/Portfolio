import LalalandLogo from "../img/lalaland/lalaland-logo.png";
import Lalaland1 from "../img/lalaland/lalaland-1.png";
import Lalaland2 from "../img/lalaland/lalaland-2.png";
import Lalaland3 from "../img/lalaland/lalaland-3.png";
import Lalaland4 from "../img/lalaland/lalaland-4.png";
import TaskproLogo from "../img/taskpro/taskpro-logo.png";
import Taskpro1 from "../img/taskpro/taskpro-1.png";
import Taskpro2 from "../img/taskpro/taskpro-2.png";
import Taskpro3 from "../img/taskpro/taskpro-3.png";
import Taskpro4 from "../img/taskpro/taskpro-4.png";
import GpuLogo from "../img/gpu/gpu-logo.png";
import Gpu1 from "../img/gpu/gpu-1.png";
import Gpu2 from "../img/gpu/gpu-2.png";
import Gpu3 from "../img/gpu/gpu-3.png";
import Gpu4 from "../img/gpu/gpu-4.png";
import Github from "../img/github.png";
import { Carousel } from "flowbite-react";

function Projects() {
  return (
    <div className=" w-full h-full flex flex-col p-2 py-10  ">
      <div className="  w-full h-full flex flex-col justify-center items-center ">
        <div className=" flex flex-col items-center gap-32 w-full  h-full  ">
          <div className=" text-center  h-1/3 flex flex-col justify-center items-center xl:w-9/12 ">
            <div className=" px-2 whitespace-nowrap flex justify-center items-center  text-3xl lg:text-6xl bg-black bg-opacity-30 text-white w-full rounded-t-xl ">
              <img
                src={LalalandLogo}
                alt="Lalaland logo"
                className="w-16 lg:w-20 p-1"
              />
              <a
                href="http://lalalandyoga.com/"
                className="flex py-2 rounded-xl"
              >
                <h2 className="font-bold  px-2 py-6">Lalaland Yoga</h2>
                <sup className="text-sm py-2 ">(→)</sup>
              </a>
            </div>
            <div className="flex justify-center items-start w-full h-fit ">
              <Carousel className=" w-full h-[300px] md:h-[350px] lg:h-[500px] xl:h-[700px] lg:p-20 bg-black bg-opacity-30 ">
                <img
                  alt="..."
                  src={Lalaland1}
                  className="object-contain h-fit overflow-y-hidden"
                />
                <img
                  alt="..."
                  src={Lalaland2}
                  className="object-contain h-fit overflow-y-hidden "
                />
                <img
                  alt="..."
                  src={Lalaland3}
                  className="object-contain h-fit overflow-y-hidden "
                />
                <img
                  alt="..."
                  src={Lalaland4}
                  className="object-contain h-fit overflow-y-hidden "
                />
              </Carousel>
            </div>
            <div className="bg-black bg-opacity-30 text-white p-2 rounded-b-xl w-full">
              <div className="text-lg sm:text-xl  xl:text-2xl  p-2">
                <p className="p-2">
                  Professional yoga retreats web site. Display information for
                  retreats and uses an automatic email API system. Technologies
                  used:
                </p>
              </div>
              <ul className="w-full p-2 text-center flex justify-center gap-5 text-white lg:text-xl">
                <li className="rounded-xl  bg-[#EFD82E] shadow-md p-2 flex justify-center items-center">
                  Javascript
                </li>
                <li className="rounded-xl  bg-[#05B0CE]  shadow-md p-2 flex justify-center items-center">
                  Tailwind CSS
                </li>
                <li className="rounded-xl  bg-[#E44F26]  shadow-md p-2 flex justify-center items-center">
                  HTML5
                </li>
              </ul>
            </div>
          </div>
          <div className=" text-center  h-1/3 flex flex-col justify-center items-center xl:w-9/12">
            <div className=" px-2 whitespace-nowrap flex justify-center items-center  text-3xl lg:text-6xl bg-black bg-opacity-30 text-white w-full rounded-t-xl">
              <img
                src={TaskproLogo}
                alt="TaskPro logo"
                className="w-16 lg:w-20 m-2 "
              />
              <a
                href="https://taskpro-2ac88.web.app/"
                className="flex py-2 rounded-xl"
              >
                <h2 className="font-bold  p-2 py-6 ">Task Pro</h2>
                <sup className="text-sm py-2 ">(→)</sup>
              </a>
            </div>
            <div className="flex justify-center items-start w-full h-fit ">
              <Carousel className=" w-full h-[300px] md:h-[350px] lg:h-[500px] xl:h-[700px] lg:p-20 bg-black bg-opacity-30 ">
                <img
                  alt="..."
                  src={Taskpro1}
                  className="object-contain h-fit overflow-y-hidden"
                />
                <img
                  alt="..."
                  src={Taskpro2}
                  className="object-contain h-fit overflow-y-hidden"
                />
                <img
                  alt="..."
                  src={Taskpro3}
                  className="object-contain h-fit overflow-y-hidden"
                />
                <img
                  alt="..."
                  src={Taskpro4}
                  className="object-contain h-fit overflow-y-hidden"
                />
              </Carousel>
            </div>
            <div className="bg-black bg-opacity-30 text-white p-2 rounded-b-xl w-full">
              <div className="text-lg sm:text-xl  xl:text-2xl  p-2">
                <p className="p-2">
                  Task manager application. User can register and login to
                  create, manage and accomplish tasks. Incorporates a timer
                  system to manage productive sessions. User can also view tasks
                  in statistics and calendar page. A weather API is used to
                  display local user weather. Technologies used:
                </p>
              </div>
              <ul className="w-full p-2 text-center flex justify-center gap-2 lg:gap-5 text-white lg:text-xl">
                <li className="rounded-xl  bg-[#5DD3F3]  shadow-md p-2 flex justify-center items-center">
                  React.js
                </li>
                <li className="rounded-xl  bg-[#FFA626]  shadow-md p-2 flex justify-center items-center">
                  Firebase
                </li>
                <li className="rounded-xl  bg-[#05B0CE]  shadow-md p-2 whitespace-nowrap py-2 flex justify-center items-center">
                  Tailwind CSS
                </li>
                <li className="rounded-xl  bg-[#E44F26]  shadow-md p-2 flex justify-center items-center">
                  HTML5
                </li>
              </ul>
            </div>
          </div>
          <div className=" text-center h-1/3   flex flex-col justify-center items-center xl:w-9/12">
            <div className=" px-2 whitespace-nowrap  flex justify-center items-center rounded-t-xl text-3xl lg:text-6xl bg-black bg-opacity-30 text-white w-full ">
              <img
                src={GpuLogo}
                alt="Gpu Canada logo"
                className="w-20 lg:w-28 xl:w-36 m-2"
              />
              <h2 className="font-bold  m-2 py-6 px-2">GPU Canada</h2>
            </div>
            <div className="flex justify-center items-start w-full h-fit ">
              <Carousel className=" w-full h-[300px] md:h-[350px] lg:h-[500px] xl:h-[700px] lg:p-20 bg-black bg-opacity-30">
                <img
                  alt="..."
                  src={Gpu1}
                  className="object-contain h-fit overflow-y-hidden"
                />
                <img
                  alt="..."
                  src={Gpu2}
                  className="object-contain h-fit overflow-y-hidden"
                />
                <img
                  alt="..."
                  src={Gpu3}
                  className="object-contain h-fit overflow-y-hidden"
                />
                <img
                  alt="..."
                  src={Gpu4}
                  className="object-contain h-fit overflow-y-hidden"
                />
              </Carousel>
            </div>
            <div className="bg-black bg-opacity-30 text-white p-2 rounded-b-xl w-full">
              <div className="text-lg sm:text-xl  xl:text-2xl  p-2">
                <p className="p-2">
                  Prototype of a graphic cards online store. Users can register
                  and login to purchase desired items. Admin can manage stocks
                  and deactivate a member's account. Technologies used:
                </p>
              </div>
              <ul className="w-full p-2 text-center flex justify-center gap-2 lg:gap-5 text-white lg:text-xl">
                <li className="rounded-xl  bg-[#2B72BF]  shadow-md p-2 flex justify-center items-center">
                  TypeScript
                </li>
                <li className="rounded-xl  bg-[#E44F26]  shadow-md p-2 flex justify-center items-center">
                  HTML5
                </li>
                <li className="rounded-xl  bg-[#2762E9]  shadow-md p-2 flex justify-center items-center">
                  CSS3
                </li>
                <li className="rounded-xl  bg-[#3E6E93]  shadow-md p-2 flex justify-center items-center">
                  MySQL
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-20">
        <a
          href="https://github.com/SamiBegah"
          className="flex group gap-2  justify-center items-center mb-10 mt-20 text-center bottom-5 text-xl lg:text-2xl text-white right-1/2 cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out"
        >
          <img
            src={Github}
            alt="github logo"
            className="w-12 transition-all duration-500 ease-in-out"
          />
          <span className="text-white">More on GitHub →</span>
        </a>
      </div>
    </div>
  );
}

export default Projects;
