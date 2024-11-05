"use client";

import React from "react";

export default function DetailsCard() {
  const Patients = [
    {
      number: "71K+",
      pati: "Patients",
      served: "Served",
    },
    {
      number: "71K+",
      pati: "Patients",
      served: "Served",
    },
    {
      number: "71K+",
      pati: "Patients",
      served: "Served",
    },
    {
      number: "71K+",
      pati: "Patients",
      served: "Served",
    },
  ];
  return (
    <div className="Mycontainer">
      <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-6 mt-12 pb-12  lg:mt-24 ">
        {Patients.map((pati, ind) => {
          return (
            <div
              key={ind}
              className="flex items-center flex-wrap gap-2 justify-center overflow-hidden "
            >
              <div className="">
                <h1 className="lg:text-5xl md:text-5xl text-3xl text-[#0179B4]">
                  {pati.number}
                </h1>
              </div>
              <div className="px-0 lg:px-4 md:px-4 text-gray-700">
                <h3 className="text-sm font-semibold tracking-wider">
                  {pati.pati}
                </h3>
                <p className="text-xl">{pati.served}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
