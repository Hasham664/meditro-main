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
      <Navbar />
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
