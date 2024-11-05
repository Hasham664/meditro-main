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
      <Navbar />
      <HospitallityHome />
      <Form />
      <OurSpecialties />
      <HealNets />
      <Contactus />
    </div>
  );
}
