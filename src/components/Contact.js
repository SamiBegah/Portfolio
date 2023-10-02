import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import CV from "../img/cv.png";

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
    <div className="w-full h-full flex p-5 lg:p-14 mb-20 ">
      <div className=" w-full h-full  flex flex-col items-center justify-center lg:flex-row gap-40 lg:gap-4">
        <div className=" flex flex-col items-center justify-center w-full lg:w-1/2 h-full ">
          <div className=" rounded-3xl flex w-full h-full items-center justify-center ">
            <div className="flex flex-col items-center h-full d3- gap-2 justify-center text-4xl lg:text-6xl hover:scale-105 ">
              <h2 className="font-bold  text-white mb-5  rounded-xl p-5">CV</h2>
              <img
                src={CV}
                alt="CV Sami Begah"
                className=" transition-all duration-1000 xl:w-5/6 ease-in-out  shadow-lg rounded-xl"
              />
              <div className="flex gap-2">
                <a
                  href="https://drive.google.com/u/0/uc?id=1MSe1pny-4VEZwwnmdfG9VlDCQjWa5Nir&export=download"
                  className="mt-2"
                >
                  <button class="relative bg-black bg-opacity-20 inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-xl group">
                    <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                    <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                    <span class="relative text-xl  w-full  text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900 text-center">
                      Download (EN)
                    </span>
                    <span class="absolute inset-0 border-2 border-white rounded-xl"></span>
                  </button>
                </a>
                <a
                  href="https://drive.google.com/u/0/uc?id=1bk-BgXXfMgb5WNgyuojq_oghIHoxWSsP&export=download"
                  className="mt-2"
                >
                  <button class="relative bg-black bg-opacity-20 inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-xl group">
                    <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                    <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                    <span class="relative text-xl  w-full text-center text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900 ">
                      Download (FR)
                    </span>
                    <span class="absolute inset-0 border-2 border-white rounded-xl"></span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col h-full items-center w-full lg:w-1/2 ">
          <div className=" rounded-3xl d3 flex flex-col w-full h-full items-center space-y-20 ">
            <div className="text-2xl text-white text-center lg:px-10 p-4 rounded-2xl leading-10 bg-black bg-opacity-30 py-10 gap-10 flex flex-col">
              <span className="font-bold lg:text-3xl ">
                Interested by my work? <br />
              </span>
              <p className="text-xl lg:text-2xl">
                Feel free to contact me! <br /> I am currently looking for a new
                position as a junior web developer.
              </p>
            </div>
            <div className=" w-full flex flex-col items-center justify-center hover:scale-105 transition-all ease-in-out duration-1000">
              <h2 className="font-bold text-white pb-10  rounded-xl text-4xl md:text-5xl py-10">
                Email me
              </h2>
              <form
                ref={form}
                onSubmit={sendEmail}
                className=" bg-white  w-full lg:w-4/5 xl:w-3/5 rounded-xl shadow-blue-500/20 flex flex-col  p-10 gap-5"
              >
                <div className="flex flex-col gap-1 text-black text-lg">
                  <label>Name</label>
                  <input
                    type="text"
                    name="user_name"
                    className="rounded-lg bg-white bg-opacity-20 "
                  />
                </div>
                <div className="flex flex-col text-black text-lg ">
                  <label>Email</label>
                  <input
                    type="email"
                    name="user_email"
                    className="rounded-lg bg-white bg-opacity-20 "
                  />
                </div>
                <div className="flex flex-col text-black text-lg">
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
