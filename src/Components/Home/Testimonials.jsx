"use client";

import React from "react";
import TestiTwo from "./TestiTwo";
import "./Custom.css";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      image: "/testimonial-1.png",
      text: "“After my knee surgery, the convenience of online consultations made my recovery smoother than I could have imagined.”",
      name: "- Linda A.",
      stats: [
        { value: "10,000+", description: "Successful Consultations" },
        { value: "2,500+", description: "Healthcare Professionals" },
      ],
      alignment: "center",
    },
    {
      id: 2,
      image: "/testimonial-2.png",
      text: "“After my knee surgery, the convenience of online consultations made my recovery smoother than I could have imagined.”",
      name: "- Linda A.",
      stats: [
        { value: "98%", description: "Patient Satisfaction Rate" },
        { value: "200+", description: "Top Specialists" },
      ],
      alignment: "start",
    },
  ];

  return (
    <div className="Mycontainer">
      <div className="text-center mt-10 lg:mt-24 md:mt-24 relative">
        <h1 className="text-3xl lg:text-4xl md:text-4xl mt-8 text-[#3D3D3D] font-semibold">
          <span className="text-[#4CB6B6]">Patient Testimonials:</span>
          <br /> Hear from Those We’ve Cared For
        </h1>
        <p className="pt-4 text-[#B0B0B0]">
          Discover the difference we make through the voices of those we’ve
          served:
        </p>
        <div className="absolute left-[20%] top-[15%]">
          <img src="/dots-2.png" alt="" />
        </div>
      </div>

      <div className="relative">
        <div className="grid lg:grid-cols-2 gap-8 mt-24 relative z-10">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full lg:max-w-2xl ">
              <div className="flex flex-wrap items-center border-4 border-blue-400 gap-4 bg-gradient-to-r from-testimonial-1 to-testimonial-2 p-4 lg:p-8 md:p-8 rounded-xl">
                <img src={testimonial.image} alt="" />
                <p className="max-w-[400px]">
                  {testimonial.text}
                  <br />
                  <span className="text-[#5D5D5D] font-bold">
                    {testimonial.name}
                  </span>
                </p>
              </div>
              <div
                className={`mt-12 lg:mt-24 md:mt-12 flex text-center justify-center lg:justify-${testimonial.alignment} gap-10 lg:gap-24`}
              >
                {testimonial.stats.map((stat, statIndex) => (
                  <div key={statIndex}>
                    <h1 className="text-3xl lg:text-5xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0179B4] to-[#4CB6B6]">
                      {stat.value}
                    </h1>
                    <p className="text-[#6D6D6D] pt-3">{stat.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="absolute left-[-5%] top-[-10%] lg:top-[-20%] md:top-[-17%]">
          <img src="/dots-3.png" alt="" />
        </div>
      </div>
      <TestiTwo/>
    </div>
  );
}
