"use client";
import React from "react";

export default function HealNets() {
  return (
    <div className="Mycontainer">
      <div className="lg:mt-8 md:mt-8 mt-4 border-2 border-[#C5ECFF]  shadow-lg bg-gradient-to-r from-sky-blue to-dark-blue px-4 py-12 rounded-xl ">
        <h1 className="text-center font-bold text-[#3D3D3D] text-xl lg:text-4xl md:text-2xl ">
          <span className="text-[#4CB6B6]">HealNet’s Story:</span>
          Get to know us
        </h1>
        <div className="flex justify-center flex-wrap items-center gap-4 lg:gap-10 md:gap-10 mt-12">
          <div className="">
            <img className="w-full" src="/girl-doc.png" alt="" />
          </div>
          <div className=" ">
            <p className="text-lg text-[#6D6D6D] max-w-[620px]">
              Lorum is more than just an online medical service; it’s a movement
              towards accessible, efficient, and compassionate healthcare for
              all. Founded by a team of visionary doctors, healthcare
              professionals, and technology experts, we are driven by the
              mission to deliver exceptional medical care directly to you, no
              matter where you are. Our platform is built on the pillars of
              trust, innovation, and patient-centricity, ensuring that every
              interaction is personalized and every treatment plan is tailored
              to your unique needs. With a network of licensed practitioners
              from diverse medical fields, we guarantee comprehensive care
              that’s just a click away.
            </p>
            <button className=" mt-6  gap-1 text-xl lg:text-2xl md:text-2xl  cursor-pointer px-7 py-3 bg-gradient-to-r from-custom-blue to-custom-teal text-white rounded-md ">
              Learn more about us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
