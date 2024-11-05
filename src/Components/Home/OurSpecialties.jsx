// components/OurSpecialties.js
"use client";
import Image from "next/image";
import { useState } from "react";
import heartIcon from "../../../public/blue-heart.png"; 
import hoverHeartIcon from "../../../public/blue-heart.svg"; 

const specialties = [
  "Neurology",
  "Bones",
  "Oncology",
  "Otorhino laryngology",
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
      {/* Title */}
      <h2 className="text-blue-600 font-semibold uppercase pt-8">
        Always Caring
      </h2>
      <h3 className="text-4xl font-bold text-teal-600 mt-2">Our Specialties</h3>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-4 md:gap-0 lg:gap-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  mt-8 mb-2 lg:mb-24  md:mb-24 p-0 lg:p-4 md:p-4">
        {specialties.map((specialty, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-10 border transition duration-200 hover:bg-[#0069AB] hover:text-white group"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {hoveredIndex === index ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="59"
                height="52"
                viewBox="0 0 59 52"
                preserveAspectRatio="xMidYMid meet"
                className="mb-4 transition duration-200 fill-current text-teal-500 group-hover:text-white hover:fill-white"
              >
                <g
                  transform="translate(0.000000,52.000000) scale(0.100000,-0.100000)"
                  fill="white"
                  stroke="none"
                >
                  <path d="M119 510 c-43 -13 -76 -39 -93 -75 -21 -43 -21 -95 -1 -95 10 0 15 10 15 32 0 65 76 124 144 111 14 -3 45 -23 70 -44 l43 -38 24 25 c34 37 72 54 120 54 33 0 47 -6 75 -34 27 -27 34 -42 34 -74 0 -66 -5 -72 -68 -72 -42 0 -61 5 -77 20 l-21 20 -44 -45 -44 -45 -63 62 -63 62 -37 -36 c-29 -28 -48 -38 -78 -40 l-40 -3 140 -143 139 -142 103 102 c74 73 99 104 87 106 -10 3 -49 -28 -100 -79 l-84 -84 -102 102 -102 103 34 35 34 35 61 -60 c33 -33 65 -60 70 -60 5 0 29 19 52 42 33 33 46 39 55 30 7 -7 41 -12 83 -12 67 0 73 2 83 25 7 14 12 47 12 73 0 79 -43 128 -127 146 -35 8 -108 -18 -132 -47 -19 -23 -34 -21 -61 8 -13 14 -40 29 -59 35 -41 11 -46 11 -82 0z" />
                </g>
              </svg>
            ) : (
              <Image
                src={heartIcon}
                alt="heart"
                width={60}
                className="mb-4 transition duration-200 fill-current text-teal-500 group-hover:text-white hover:fill-white"
              />
            )}
            <span>{specialty}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurSpecialties;
