"use client";

import Link from "next/link";
import hospital from "../../../public/hospital.webp";
import Image from "next/image";
import { useState } from "react";
const services = [
  {
    id: 1,
    name: "Quironsalud Hospital ",
    location: "Madrid, Spain",
    img: hospital,
    // link: "/hospital",
  },
  {
    id: 2,
    name: "KIMS Hospital",
    location: "Hyderabad, India",
    img: hospital,
    // link: "/hospital",
  },
  {
    id: 3,
    name: "Amrita Hospital Faridabad",
    location: "Faridabad, India",
    img: hospital,
    // link: "/hospital",
  },
  {
    id: 4,
    name: "Ayu Health Hospitals",
    location: "Bengaluru, India",
    img: hospital,
    // link: "/hospital",
  },
];

export default function Hospitals({ activeTab, checkbox, setCheckbox }) {
  // const [selected, setSelected] = useState(null);

  const handleCheckbox = (index) => {
    setCheckbox(index);
  };
  return (
    <div className="">
      {activeTab === "Hospitals" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 lg:mt-24 md:mt-24">
          {services.map((service, ind) => (
            <div
              key={ind}
              // href="/hospital"
              className="border rounded-lg bg-white  hover:shadow-lg transition"
            >
              <div className="relative">
                <input
                  type="checkbox"
                  checked={checkbox === ind}
                  onChange={() => handleCheckbox(ind)}
                  className="w-6 h-6 absolute right-8 top-4"
                />
              </div>
              <Image
                src={service.img}
                alt={service.name}
                className="w-full  object-cover rounded-md "
              />
              <div className="px-4 py-4">
                <h2 className="text-lg font-bold text-[#4CB6B6]">
                  {service.name}
                </h2>
                <p className="text-[#000000] font-sans p-2">
                  {service.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
