"use client";

import Navbar from "@/Components/Home/Navbar";
import HospitallityHome from "@/Components/HospitalityCompo/HospitallityHome";
import Form from "../../Components/HospitalityCompo/Form";
import React from "react";
import Contactus from "@/Components/Home/Contactus";
import TeamSlider from "@/Components/Services/TeamMembers";
import OurSpecialties from "@/Components/Home/OurSpecialties";
import HealNets from "@/Components/Home/HealNets";

export default function page() {
  return (
    <div>
      <div className="bg-[#F6FBFF] pb-12 lg:pb-36">
        <Navbar />
        <h1 className="text-center font-bold pt-6 lg:pt-24 md:pt-12 text-2xl lg:text-5xl text-[#4CB6B6]">
          Travel
        </h1>
      </div>
      <HospitallityHome />
      <Form />
      <OurSpecialties />
      <HealNets />
      <Contactus />
    </div>
  );
}
