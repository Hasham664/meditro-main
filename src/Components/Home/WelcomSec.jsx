"use client";

import React from "react";
import "./Custom.css";
//
export default function WelcomSec() {
  return (
    <>
      <div className=" Mycontainer   flex flex-col items-center justify-center bg-white">
        <div>
          <div className="text-center mt-24 lg:mt-48  ">
            <h2 className="text-lg text-[#0179B4] font-bold tracking-widest mb-2">
              WELCOME TO MEDDICAL
            </h2>
            <h1 className="text-4xl font-bold text-teal-500 mb-4">
              A Great Place to Receive Care
            </h1>
            <p className="text-[#4F4F4F] text-lg max-w-2xl mx-auto mb-6 font-sans">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              placerat scelerisque tortor ornare ornare. Convallis felis vitae
              tortor augue. Velit nascetur proin massa in. Consequat faucibus
              porttitor enim et.
            </p>
          </div>

          <div className="absolute left-[5%] mt-[-70px] hidden  lg:block">
            <img className="" src="/dots-blue.png" alt="" />
          </div>
        </div>

        <div className="">
          <img
            className="w-full lg:h-full md:h-full h-[120px] mt-4"
            src="/All-docs.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
