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
    <div className=" w-full h-[1600px] md:h-[2000px] lg:h-[3000px] xl:h-[3500px] 2xl:h-[4000px] flex flex-col p-2 py-10 ">
      <div className="  w-full h-full flex  flex-col justify-center items-center ">
        <div className=" flex flex-col items-between gap-20 space-y-10 w-full  h-full ">
          <div className=" text-center h-1/3 gap-2 lg:gap-5 flex flex-col justify-center items-center ">
            <div className=" px-2 whitespace-nowrap flex justify-center items-center rounded-xl text-2xl lg:text-5xl bg-opacity-20 bg-black">
              <img
                src={LalalandLogo}
                alt="Lalaland logo"
                className="w-16 lg:w-20 m-2  rounded-full"
              />
              <a href="http://lalalandyoga.com/" className="flex">
                <h2 className="font-bold text-white p-2 underlin">
                  Lalaland Yoga
                </h2>{" "}
                <sup className="text-sm py-2 text-white">(→)</sup>
              </a>
            </div>
            <br />
            <Carousel className="lg:w-10/12">
              <img
                alt="..."
                src={Lalaland1}
                className="object-contain h-fit w-9/12 sm:w-8/12 md:w-7/12 lg:w-10/12 overflow-y-hidden rounded-xl shadow-md  "
              />
              <img
                alt="..."
                src={Lalaland2}
                className="object-contain h-fit w-9/12 sm:w-8/12 md:w-7/12 lg:w-10/12 overflow-y-hidden rounded-xl shadow-md"
              />
              <img
                alt="..."
                src={Lalaland3}
                className="object-contain h-fit w-9/12 sm:w-8/12 md:w-7/12 lg:w-10/12 overflow-y-hidden rounded-xl shadow-md "
              />
              <img
                alt="..."
                src={Lalaland4}
                className="object-contain h-fit w-9/12 sm:w-8/12 md:w-7/12 lg:w-10/12 overflow-y-hidden rounded-xl shadow-md "
              />
            </Carousel>
            <br />
            <ul className="w-full text-center flex justify-center gap-5 text-white lg:text-xl">
              <li className="rounded-xl  bg-[#EFD82E]  shadow-md px-2 py-2 flex justify-center items-center">
                Javascript
              </li>
              <li className="rounded-xl  bg-[#05B0CE]  shadow-md px-2 py-2 flex justify-center items-center">
                Tailwind CSS
              </li>
              <li className="rounded-xl  bg-[#E44F26]  shadow-md px-2 py-2 flex justify-center items-center">
                HTML5
              </li>
            </ul>
          </div>
          <div className=" text-center h-1/3 gap-2 lg:gap-5 flex flex-col justify-center items-center ">
            <div className=" px-2 whitespace-nowrap flex justify-center items-center rounded-xl text-2xl lg:text-5xl bg-opacity-20 bg-black">
              <img
                src={TaskproLogo}
                alt="TaskPro logo"
                className="w-16 lg:w-20 m-2  rounded-full"
              />
              <a href="https://taskpro-2ac88.web.app/" className="flex">
                <h2 className="font-bold text-white p-2 ">Task Pro</h2>
                <sup className="text-sm py-2 text-white">(→)</sup>
              </a>
            </div>
            <Carousel className="lg:w-10/12">
              <img
                alt="..."
                src={Taskpro1}
                className="object-contain h-fit w-9/12 sm:w-8/12 md:w-7/12 lg:w-10/12 overflow-y-hidden rounded-xl shadow-md  "
              />
              <img
                alt="..."
                src={Taskpro2}
                className="object-contain h-fit w-9/12 sm:w-8/12 md:w-7/12 lg:w-10/12 overflow-y-hidden rounded-xl shadow-md  "
              />
              <img
                alt="..."
                src={Taskpro3}
                className="object-contain h-fit w-9/12 sm:w-8/12 md:w-7/12 lg:w-10/12 overflow-y-hidden rounded-xl shadow-md  "
              />
              <img
                alt="..."
                src={Taskpro4}
                className="object-contain h-fit w-9/12 sm:w-8/12 md:w-7/12 lg:w-10/12 overflow-y-hidden rounded-xl shadow-md  "
              />
            </Carousel>
            <ul className="w-full text-center flex justify-center gap-2 lg:gap-5 text-white lg:text-xl">
              <li className="rounded-xl  bg-[#EFD82E]  shadow-md px-2 py-2 flex justify-center items-center">
                Js
              </li>
              <li className="rounded-xl  bg-[#5DD3F3]  shadow-md px-2 py-2 flex justify-center items-center">
                React.js
              </li>
              <li className="rounded-xl  bg-[#FFA626]  shadow-md px-2 py-2 flex justify-center items-center">
                Firebase
              </li>
              <li className="rounded-xl  bg-[#05B0CE]  shadow-md px-2 whitespace-nowrap py-2 flex justify-center items-center">
                Tailwind CSS
              </li>
              <li className="rounded-xl  bg-[#E44F26]  shadow-md px-2 py-2 flex justify-center items-center">
                HTML5
              </li>
            </ul>
          </div>
          <div className=" text-center h-1/3 gap-2 lg:gap-5 flex flex-col justify-center items-center ">
            <div className=" px-2 whitespace-nowrap flex justify-center items-center rounded-xl text-2xl lg:text-5xl bg-opacity-20 bg-black">
              <img
                src={GpuLogo}
                alt="Gpu Canada logo"
                className="w-20 lg:w-28 xl:w-36 m-2"
              />
              <h2 className="font-bold text-white m-2 py-6">GPU Canada</h2>
            </div>
            <Carousel className="lg:w-10/12">
              <img
                alt="..."
                src={Gpu1}
                className="object- h-fit w-9/12 sm:w-8/12 md:w-7/12 lg:w-10/12 rounded-xl shadow-md  "
              />
              <img
                alt="..."
                src={Gpu2}
                className="object-contain h-fit w-9/12 sm:w-8/12 md:w-7/12 lg:w-10/12 overflow-y-hidden rounded-xl shadow-md  "
              />
              <img
                alt="..."
                src={Gpu3}
                className="object-contain h-fit w-9/12 sm:w-8/12 md:w-7/12 lg:w-10/12 overflow-y-hidden rounded-xl shadow-md  "
              />
              <img
                alt="..."
                src={Gpu4}
                className="object-contain h-fit w-9/12 sm:w-8/12 md:w-7/12 lg:w-10/12 overflow-y-hidden rounded-xl shadow-md  "
              />
            </Carousel>
            <ul className="w-full text-center flex justify-center gap-2 lg:gap-5 text-white lg:text-xl">
              <li className="rounded-xl  bg-[#EFD82E]  shadow-md px-2 py-2 flex justify-center items-center">
                Javascript
              </li>
              <li className="rounded-xl  bg-[#E44F26]  shadow-md px-2 py-2 flex justify-center items-center">
                HTML5
              </li>
              <li className="rounded-xl  bg-[#2762E9]  shadow-md px-2 py-2 flex justify-center items-center">
                CSS3
              </li>
              <li className="rounded-xl  bg-[#2B72BF]  shadow-md px-2 py-2 flex justify-center items-center">
                TypeScript
              </li>
              <li className="rounded-xl  bg-[#3E6E93]  shadow-md px-2 py-2 flex justify-center items-center">
                MySQL
              </li>
            </ul>
          </div>
        </div>
      </div>

      <a
        href="https://github.com/SamiBegah"
        className="flex group gap-2  justify-center items-center mb-10 mt-20 text-center bottom-5 text-xl lg:text-2xl text-white right-1/2 cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out"
      >
        <img
          src={Github}
          alt="github logo"
          className="w-12 transition-all duration-500 ease-in-out"
        />
        <span>More on GitHub →</span>
      </a>
    </div>
  );
}

export default Projects;
