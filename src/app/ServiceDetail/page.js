"use client"
import Contactus from '@/Components/Home/Contactus';
import Navbar from '@/Components/Home/Navbar';
import OurSpecialties from '@/Components/Home/OurSpecialties';
import CardsTab from '@/Components/Services/CardsTab';
import ServicesTabs from '@/Components/Services/ServiceTabs';
import TeamSlider from '@/Components/Services/TeamMembers';
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div>
      <div className="bg-[#F6FBFF] pb-12 lg:pb-36 md:pb-36">
        <Navbar />
        <h1 className="text-center font-bold pt-6 lg:pt-24 md:pt-24  text-2xl lg:text-5xl text-[#4CB6B6]">
          Service-Detail
        </h1>
      </div>
      <ServicesTabs />
      <CardsTab />
      <OurSpecialties />
      <div className="mt-12 w-[97%] lg:w-[100%] md:w-[100%]">
        <TeamSlider />
      </div>
      <Contactus />
    </div>
  );
}
