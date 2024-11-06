"use client";

import Contactus from "@/Components/Home/Contactus";
import HealNets from "@/Components/Home/HealNets";
import Navbar from "@/Components/Home/Navbar";
import DetailsCard from "@/Components/HospitalityCompo/DetailsCard";
import ExploreCard from "@/Components/HospitalityCompo/ExploreCard";
import Form from "@/Components/HospitalityCompo/Form";
import HospitallityHome from "@/Components/HospitalityCompo/HospitallityHome";
import StatsCards from "@/Components/HospitalityCompo/StatsCards";
import Visa from "@/Components/HospitalityCompo/Visa";
import WhyUseCards from "@/Components/HospitalityCompo/WhyUseCards";
import React from "react";

export default function Hospitality() {
  return (
    <div>
      <div className="bg-[#F6FBFF] pb-12 lg:pb-36">
        <Navbar />
        <h1 className="text-center font-bold pt-6 lg:pt-24 md:pt-12 text-2xl lg:text-5xl text-[#4CB6B6]">
          Hospitality
        </h1>
      </div>
      <HospitallityHome />
      <StatsCards />
      <ExploreCard />
      <WhyUseCards />
      <div className="mt-24 pb-12">
        <HealNets />
      </div>
      <DetailsCard />
      <Contactus />
    </div>
  );
}
