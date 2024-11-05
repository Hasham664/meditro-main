"use client";
import Image from "next/image";
import { useState } from "react";
import heartIcon from "../../../public/blue-heart.png"; 
import hoverHeartIcon from "../../../public/blue-heart.svg"; 

const specialties = [
  "Neurology",
  "Bones",
  "Oncology",
  "Otorhinolaryngology",
  "Ophthalmology",
  "Cardiovascular",
  "Pulmonology",
  "Renal Medicine",
  "Gastroenterology",
  "Urology",
  "Dermatology",
  "Gynecology",
];

const OurSpecialties = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="text-center py-10 Mycontainer">
      <h2 className="text-blue-600 font-semibold uppercase pt-8">
        Always Caring
      </h2>
      <h3 className="text-4xl font-bold text-teal-600 mt-2">Our Specialties</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  mt-8 mb-24 p-4">
        {specialties.map((specialty, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-10 border transition duration-200 hover:bg-[#0069AB] hover:text-white group"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Image
              src={hoveredIndex === index ? hoverHeartIcon : heartIcon}
             alt="hearticon"
              width={60}
              className="mb-4   transition duration-200 fill-current text-teal-500 group-hover:text-white hover:fill-white"
            />
            <span>{specialty}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurSpecialties;
