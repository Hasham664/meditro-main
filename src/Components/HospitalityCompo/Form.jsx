"use client";

import React, { useState } from "react";

const DropdownMenu = () => {
  const [country, setCountry] = useState("");
  const [treatment, setTreatment] = useState("");
  const [hotel, setHotel] = useState("");
    const [hospital, setHospital] = useState("");


  const handleButtonClick = () => {
    console.log("Selected Country:", country);
    console.log("Selected Treatment or Hospital:", treatment);
    console.log("Selected Hotel:", hotel);
  };

    return (
      <div>
        <div className=" Mycontainer mt-4 lg:mt-12">
          <h1 className="text-3xl text-[#4CB6B6]">Selects Form</h1>
          <div className="   flex flex-wrap  py-4 gap-8 ">
            <div className="w-full gap-6  flex flex-col  lg:flex-row md:flex-row items-center">
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full 	 px-4 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Country</option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
                <option value="UK">UK</option>
              </select>

              <select
                value={treatment}
                onChange={(e) => setTreatment(e.target.value)}
                className=" w-full 	 px-4 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Treatment or Hospital</option>
                <option value="Heart Surgery">Heart Surgery</option>
                <option value="Cancer Treatment">Cancer Treatment</option>
                <option value="General Hospital">General Hospital</option>
              </select>
            </div>
            <div className="w-full gap-6  flex flex-col  lg:flex-row md:flex-row items-center ">
              <select
                value={hotel}
                onChange={(e) => setHotel(e.target.value)}
                className=" w-full truncate 	 px-4 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Hotel</option>
                <option className="" value="Hotel California">
                  Hotel California
                </option>
                <option value="Grand Hyatt">Grand Hyatt</option>
                <option value="Holiday Inn">Holiday Inn</option>
              </select>
              <select
                value={hospital}
                onChange={(e) => setHospital(e.target.value)}
                className=" w-full  	 px-4 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select hospital</option>
                <option value="Hotel California">Hotel California</option>
                <option value="Grand Hyatt">Grand Hyatt</option>
                <option value="Holiday Inn">Holiday Inn</option>
              </select>
            </div>
          </div>
          <div className="mt-6 flex justify-center">
            <button
              onClick={handleButtonClick}
              className=" px-4 py-4 bg-gradient-to-r from-custom-blue to-custom-teal text-white font-semibold rounded-md hover:bg-blue-600 transition duration-200"
            >
              Submit Button
            </button>
          </div>
        </div>
        <div className=" bg-gradient-to-r from-custom-blue to-custom-teal text-white   py-4 mt-12">
          <div className="Mycontainer flex flex-wrap gap-4 justify-between  items-center">
            <p className="lg:text-4xl md:text-3xl text-xl">
              visa consultation service provided by Meditro
            </p>
            <button className="bg-black text-white py-3 lg:py-4 md:py-4 px-4 rounded-lg lg:text-2xl md:text-2xl text-xl ">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    );
};

export default DropdownMenu;
