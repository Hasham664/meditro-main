"use client";

import { useState } from "react";
import plus from "../../../public/plus.png";
import Image from "next/image";
const services = [
  {
    id: 1,
    icon: plus,
    title: "Orthodontic Treatments",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur adipiscing elit.",
  },
  {
    id: 2,
    icon: plus,
    title: "Restorative Treatments",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur adipiscing elit.",
  },
  {
    id: 3,
    icon: plus,
    title: "Root Canal Treatments",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur adipiscing elit.",
  },
  {
    id: 4,
    icon: plus,
    title: "Root Canal Treatments",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur adipiscing elit.",
  },
  {
    id: 5,
    icon: plus,
    title: "Root Canal Treatments",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur adipiscing elit.",
  },
  {
    id: 6,
    icon: plus,
    title: "Root Canal Treatments",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur adipiscing elit.",
  },
];

export default function DentistryServices({ activeTab, checkbox, setCheckbox }) {

  const handleCheckbox = (index) => {
    setCheckbox(index);
  };
  return (
    <div className="">
      {activeTab === "Procedure" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 lg:mt-24 md:mt-24">
          {services.map((service, ind) => (
            <div className="bg-white" key={ind}>
              <div className="relative">
                <input
                  type="checkbox"
                  checked={checkbox === ind}
                  onChange={() => handleCheckbox(ind)}
                  className="w-6 h-6 absolute right-8 top-4"
                />
              </div>
              <div className="bg-[#4CB6B6] p-6 max-w-fit m-auto mt-12	">
                <Image
                  className="m-auto"
                  src={service.icon}
                  alt="service"
                  width={60}
                />
              </div>
              <div key={service.title} className="card">
                <h3 className="text-[#4CB6B6] font-bold	 text-center text-2xl  m-auto max-w-48	pt-6">
                  {service.title}
                </h3>
                <p className="text-[#000000] font-sans font-normal	 px-4 text-center text-base	 m-auto pt-4 max-w-[344px]	">
                  {service.para}
                </p>

                <button className="flex m-auto mt-10 mb-10 items-center gap-4 px-5 py-3 text-xl lg:text-2xl bg-gradient-to-r from-custom-blue to-custom-teal text-white rounded-lg">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
