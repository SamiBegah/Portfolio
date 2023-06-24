import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import CV from "../img/cv.jpg";

function Contact({ firstClick, setFirstClick }) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xrehgea",
        "template_n3qhpiv",
        form.current,
        "qBQpGVaZakC_8-FKe"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="w-full h-full flex p-14  shadow-xl ">
      <div className=" w-full h-full  flex flex-col items-center justify-center lg:flex-row gap-4">
        <div className=" flex flex-col items-center justify-center w-full lg:w-1/2 h-full">
          <div className=" rounded-3xl flex w-full h-full items-center justify-center ">
            <div className="flex flex-col items-center h-full d3- gap-2 justify-center text-4xl hover:scale-105">
              <h2 className="font-bold bg-black  text-white  bg-opacity-20 rounded-xl p-2 mb-6">
                My CV
              </h2>
              <img
                src={CV}
                alt="CV Sami Begah"
                className=" transition-all duration-1000 xl:w-5/6 ease-in-out  shadow-lg rounded-xl"
              />
              <a
                href="https://onedrive.live.com/download?resid=CBB0DE0E2142EC3B%21155&authkey=!AEBeY6F"
                className="mt-2"
              >
                <button class="relative bg-black bg-opacity-20 inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-xl group">
                  <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                  <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                  <span class="relative text-xl  w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900 ">
                    Download
                  </span>
                  <span class="absolute inset-0 border-2 border-white rounded-xl"></span>
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col h-full items-center w-full lg:w-1/2">
          <div className=" rounded-3xl d3 flex flex-col w-full h-full items-center justify-center ">
            <div className="text-2xl text-white text-center p-4 rounded-xl leading-10">
              <span className="font-bold">
                Interested by my work? <br />
              </span>
              Feel free to contact me! I am currently looking for a front-end
              position as a junior web developer.
            </div>
            <div className=" w-full flex flex-col items-center justify-center hover:scale-105 transition-all ease-in-out duration-1000">
              <h2 class="text-4xl p-2 my-8 border-b-8 border-black border-opacity-50 text-white  font-extrabold leading-none tracking-tight">
                Email me
              </h2>
              <form
                ref={form}
                onSubmit={sendEmail}
                className=" bg-black bg-opacity-30 w-full lg:w-4/5 xl:w-3/5 rounded-xl shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] flex flex-col  p-10 gap-5"
              >
                <div className="flex flex-col gap-1 text-white text-lg">
                  <label>Name</label>
                  <input
                    type="text"
                    name="user_name"
                    className="rounded-lg bg-white bg-opacity-20 "
                  />
                </div>
                <div className="flex flex-col text-white text-lg ">
                  <label>Email</label>
                  <input
                    type="email"
                    name="user_email"
                    className="rounded-lg bg-white bg-opacity-20 "
                  />
                </div>
                <div className="flex flex-col text-white text-lg">
                  <label>Message</label>
                  <textarea
                    name="message"
                    className="h-40 rounded-lg  bg-white bg-opacity-20  "
                  />
                </div>
                <button
                  type="submit"
                  value="Send"
                  className="relative self-center inline-flex w-3/4 items-center justify-center px-10 py-4 overflow-hidden  tracking-tighter text-white bg-gray-800 rounded-lg group"
                >
                  <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-white  rounded-xl group-hover:w-full group-hover:h-56 "></span>
                  <span class="absolute  w-full h-full -mt-1 rounded-lg opacity-30 from-transparent via-transparent to-gray-700"></span>
                  <span class="relative text-lg group-hover:text-black font-bold">
                    {" "}
                    Send
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
