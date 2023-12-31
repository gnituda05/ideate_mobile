import React, { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import logo from "./icons/iconT.png";
import aik from "./icons/AIK.png";
import eli from "./icons/Eli.png";
import honey from "./icons/Honey.png";
import charles from "./icons/Charles.png";
import glenn from "./icons/Glenn.png";
import nathan from "./icons/Nathan.png";

const ITeam = () => {
  const [hover, setHover] = useState(false);
  return (
    <div className="py-3 bg-gray-950 " id="iteam">
      <div className="flex flex-col mx-auto max-w-screen-lg gap-6 mt-20 mb-32">
        <div className="flex flex-col items-center">
          <img src={logo} alt="Logo" className="w-10"/>
          <h2 className="text-4xl text-center font-extrabold text-white">
            WE ARE IDEATE
          </h2>
        </div>

        <div className="flex flex-col gap-1 ">
          <p className="p-5 text-sm text-center text-white">
            Get to know the talented inidviduals who make up our dynamic team.
            Each team member <br></br> brings a unique set of skills and
            expertise to the table, contributing to our collective success.
          </p>
        </div>
        {/* <!-- 3-column grid with gap --> */}
        <div className="justify-items-end items-center grid grid-cols-2 gap-3 gap-x-4 mt-5 me-auto ms-auto ">
          {/* <!-- Individual box --> */}
          <div className="bg-blue-600 w-40 h-40 overflow-hidden">
            <div
              className=" relative group h-screen overflow-hidden "
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              {/* <!-- Content for box 1 --> */}
              <img
                src={aik}
                alt="Logo"
                className=" group-hover:opacity-50 opacity-100 group-hover:scale-150 transition-transform duration-600"
              />
              <div
                className={` absolute p-3 mt-11 border-none inset-0 duration-100  group-hover:opacity-100 opacity-0 transition-opacity ${
                  hover ? "translate-x-0" : "-translate-x-full"
                }`}
              >
                <h2 className="text-3xl text-center font-bold text-white">
                  AIK
                </h2>
                <p className="text-sm text-center text-white">
                  Operations Manager
                </p>
              </div>
            </div>
          </div>
          <div className="bg-blue-600 w-40 h-40  overflow-hidden ">
            {/* <!-- Content for box 2 --> */}
            <div
              className=" relative group h-screen overflow-hidden "
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <img
                src={eli}
                alt="Logo"
                className="mt-5 group-hover:opacity-50 opacity-100 group-hover:scale-150 transition-transform duration-600 "
              />
              <div
                className={` absolute p-3 mt-11 border-none inset-0  duration-100  group-hover:opacity-100 opacity-0 transition-opacity ${
                  hover ? "translate-x-0" : "-translate-x-full"
                }`}
              >
                <h2 className="text-3xl text-center font-bold text-white">
                  ELI
                </h2>
                <p className="text-sm text-center text-white">
                  Marketing Manager
                </p>
              </div>
            </div>
          </div>
          <div className=" bg-blue-600 w-40 h-40  overflow-hidden">
            {/* <!-- Content for box 3 with text and possibly a button --> */}
            <div
              className=" relative group h-screen overflow-hidden "
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <img
                src={honey}
                alt="Logo"
                className=" w-28 ms-auto me-auto mt-1 group-hover:opacity-50 opacity-100 group-hover:scale-150 transition-transform duration-600 "
              />
              <div
                className={` absolute p-3 mt-11 border-none inset-0  duration-100  group-hover:opacity-100 opacity-0 transition-opacity ${
                  hover ? "translate-x-0" : "-translate-x-full"
                }`}
              >
                <h2 className="text-3xl text-center font-bold text-white">
                  HONEY
                </h2>
                <p className="text-sm text-center text-white">
                  Digital Marketing Assistant
                </p>
              </div>
            </div>
          </div>
          <div className="bg-blue-600 w-40 h-40  overflow-hidden">
            {/* <!-- Content for box 4 --> */}
            <div
              className=" relative group h-screen overflow-hidden "
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <img
                src={charles}
                alt="Logo"
                className="w-28 ms-auto me-auto mt-1  group-hover:opacity-50 opacity-100 group-hover:scale-150 transition-transform duration-600 "
              />
              <div
                className={` absolute p-3 mt-11 border-none inset-0 duration-100  group-hover:opacity-100 opacity-0 transition-opacity ${
                  hover ? "translate-x-0" : "-translate-x-full"
                }`}
              >
                <h2 className="text-3xl text-center font-bold text-white">
                  CHARLES
                </h2>
                <p className="text-sm text-center text-white">
                  Front-end Developer
                </p>
              </div>
            </div>
          </div>
          <div className="bg-blue-600 w-40 h-40 overflow-hidden">
            {/* <!-- Content for box 5 --> */}
            <div
              className=" relative group h-screen overflow-hidden "
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <img
                src={glenn}
                alt="Logo"
                className="w-28 ms-auto me-auto mt-1 group-hover:opacity-50 opacity-100 group-hover:scale-150 transition-transform duration-600 "
              />
              <div
                className={` absolute p-3 mt-11 border-none inset-0 duration-100 group-hover:opacity-100 opacity-0 transition-opacity ${
                  hover ? "translate-x-0" : "-translate-x-full"
                }`}
              >
                <h2 className="text-3xl text-center font-bold text-white">
                  GLENN
                </h2>
                <p className="text-sm text-center text-white">
                  Back-End Developer
                </p>
              </div>
              
            </div>
          </div>
         
          <div className="bg-blue-600 w-40 h-40 overflow-hidden">
            {/* <!-- Content for box 5 --> */}
            <div
              className=" relative group h-screen overflow-hidden "
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <img
                src={nathan}
                alt="Logo"
                className="w-28 ms-auto me-auto group-hover:opacity-50 opacity-100 group-hover:scale-150 transition-transform duration-600 "
              />
              <div
                className={` absolute p-3 mt-11 border-none inset-0 duration-100 group-hover:opacity-100 opacity-0 transition-opacity ${
                  hover ? "translate-x-0" : "-translate-x-full"
                }`}
              >
                <h2 className="text-3xl text-center font-bold text-white">
                  NATHAN
                </h2>
                <p className="text-sm text-center text-white">
                  Front-End Developer
                </p>
              </div>
              
            </div>
          </div>
        
          
        </div>
        <div className="flex justify-center items-center w-full">
        <div className="bg-blue-600 w-40 h-40 flex flex-col justify-center items-center overflow-hidden">
          {/* <!-- Content for box 6 (YOUR SPOT) --> */}
          <h2 className="text-xl text-center w-28 ms-auto me-auto mt-5 font-bold text-white">
            YOUR SPOT
          </h2>
          <p className="text-sm text-center text-white">Join our team!</p>
        </div>
      </div>

      </div>
    </div>
  );
};

export default ITeam;
