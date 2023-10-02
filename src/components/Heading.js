import Linkedin from "../img/linkedin.png";
import Github from "../img/github.png";
import Email from "../img/email.png";
import Profile1 from "../img/profile-1.png";
import Profile2 from "../img/profile-2.png";
import Profile3 from "../img/profile-3.png";
import Profile4 from "../img/profile-4.png";
import { useLocation } from "react-router-dom";

function Heading() {
  const location = useLocation();
  let profileImage;
  switch (location.pathname) {
    case "/about":
      profileImage = Profile2;
      break;
    case "/projects":
      profileImage = Profile3;
      break;
    case "/contact":
      profileImage = Profile1;
      break;
    default:
      profileImage = Profile1;
  }

  return (
    <div
      className="
          bg-[#fafafa]  text-black h-48 w-full flex flex-col sm:flex-row justify-between "
    >
      <div className="p-2 gap-2 sm:p-5 sm:gap-5 flex items-center  ">
        <div
          className="bg-center bg-[#f2f2f2] w-24 md:w-28 h-24 md:h-28  shadow-md rounded-xl bg-cover"
          style={{
            backgroundImage: `url(${profileImage})`,
          }}
        ></div>
        <div className="flex flex-col justify-between py-2">
          <div className="flex flex-col">
            <span className="font-bold text-lg"> Sami Begah </span>
            <span className="whitespace-nowrap">Junior Web Developer</span>
            <span>Montreal, Canada</span>
          </div>
          <div className="flex items-center gap-2 ">
            <span className="w-5 h-5  rounded-full animate-pulse bg-[#20C997] shadow-xl"></span>
            <p className="font-bold text-sm">Currently available</p>
          </div>
        </div>
      </div>
      <div className="pb-4 sm:gap-5 sm:p-5 flex">
        <div className="flex sm:flex-col items-center  justify-center gap-2 w-full">
          <a
            href="mailto:begah.sami@outlook.com"
            className="flex gap-1 cursor-pointer  items-center justify-center sm:justify-end w-full group"
          >
            <p className="text-sm text-black opacity-50 group-hover:opacity-100 transition-all duration-500 ease-in-out">
              Email
            </p>
            <img
              src={Email}
              alt="Link to Github"
              className="w-9 group-hover:w-10 transition-all duration-400 ease-in-out"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/sami-begah-08606a280/"
            className="flex gap-1 cursor-pointer  items-center justify-center sm:justify-end w-full group"
          >
            <p className="text-sm text-black opacity-50  group-hover:opacity-100 transition-all duration-500 ease-in-out">
              Linkedin
            </p>
            <img
              src={Linkedin}
              alt="Link to Linkedin"
              className="w-9 group-hover:w-10 transition-all duration-400 ease-in-out"
            />
          </a>
          <a
            href="https://github.com/SamiBegah"
            className="flex gap-1 cursor-pointer  items-center justify-center sm:justify-end w-full group"
          >
            <p className="text-sm text-black opacity-50  group-hover:opacity-100 transition-all duration-500 ease-in-out">
              GitHub
            </p>
            <img
              src={Github}
              alt="Link to Github"
              className="w-9 group-hover:w-10 transition-all duration-400 ease-in-out"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Heading;
