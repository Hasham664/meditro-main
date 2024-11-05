"use client";

import Doctors from "@/Components/Details/Doctors";
import ServiceSection from "@/Components/Details/ServiceSection";
import ServiceCards from "@/Components/Details/serviceCards";
import Contactus from "@/Components/Home/Contactus";
import Navbar from "@/Components/Home/Navbar";
import TeamSlider from "@/Components/Services/TeamMembers";

import React from "react";

export default function Service() {
  return (
    <div>
      <div className="bg-[#F6FBFF] pb-12 lg:pb-36">
        <Navbar />
        <h1 className="text-center font-bold pt-6 lg:pt-24 md:pt-24 text-2xl lg:text-5xl text-[#4CB6B6]">
          Service
        </h1>
      </div>
      <ServiceSection />
      <ServiceCards />
      <div className="mt-12 w-[97%] lg:w-[100%] md:w-[100%]">
        <TeamSlider />
      </div>
      <Contactus />
    </div>
  );
}
