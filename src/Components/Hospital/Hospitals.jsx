"use client";
import Link from "next/link";
import hospital from '../../../public/hospital.webp'
import { useState } from 'react';
import Image from "next/image";
const hospitalsData = [
  {
    id: 1,
    name: "Quironsalud Hospital Group",
    location: "Madrid, Spain",
    img: hospital,
  },
  { id: 2, name: "KIMS Hospital", location: "Hyderabad, India", img: hospital },
  {
    id: 3,
    name: "Amrita Hospital Faridabad",
    location: "Faridabad, India",
    img: hospital,
  },
  {
    id: 4,
    name: "Ayu Health Hospitals",
    location: "Bengaluru, India",
    img: hospital,
  },
  {
    id: 5,
    name: "Singapore General Hospital",
    location: "Singapore, Singapore",
    img: hospital,
  },
  {
    id: 6,
    name: "Medanta - The Medicity",
    location: "Gurgaon, India",
    img: hospital,
  },
  {
    id: 7,
    name: "Helios Klinik Erfurt",
    location: "Erfurt, Germany",
    img: hospital,
  },
  {
    id: 8,
    name: "Helios Klinikum Schwerin",
    location: "Schwerin, Germany",
    img: hospital,
  },
  {
    id: 9,
    name: "Singapore General Hospital",
    location: "Singapore, Singapore",
    img: hospital,
  },
  {
    id: 10,
    name: "Medanta - The Medicity",
    location: "Gurgaon, India",
    img: hospital,
  },
  {
    id: 11,
    name: "Helios Klinik Erfurt",
    location: "Erfurt, Germany",
    img: hospital,
  },
  {
    id: 12,
    name: "Helios Klinikum Schwerin",
    location: "Schwerin, Germany",
    img: hospital,
  },
];

export default function HospitalList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredHospitals, setFilteredHospitals] = useState(hospitalsData);

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    setFilteredHospitals(
      hospitalsData.filter((hospital) =>
        hospital.name.toLowerCase().includes(value)
      )
    );
  };

 

  return (
    <div className="Mycontainer ">
      <h1 className="text-3xl font-semibold text-gray-800 mb-4  lg:mt-24 md::mt-24 mt-12">
        Find Your <span className="text-[#4CB6B6] font-bold">Meditro</span>
      </h1>

      <div className="flex flex-col md:flex-row gap-4 mb-6 mt-12">
        <div className="flex items-center border rounded-lg px-3 py-2 shadow-sm">
          <input
            type="text"
            placeholder="Search hospitals"
            value={searchTerm}
            onChange={handleSearch}
            className="outline-none border-none focus:ring-0 flex-grow"
          />
          <span className="text-gray-500 material-icons">search</span>
        </div>
        <select className="border w-full md:w-[22%] lg:w-[22%] rounded-lg px-4 py-4 shadow-sm">
          <option className="w-[15%]">All Treatments</option>
          <option>New Treatments</option>
        </select>

        <select className="border rounded-lg w-full md:w-[22%] lg:w-[22%] px-4 py-2 shadow-sm">
          <option>All Countries</option>
          <option>All Countries</option>
        </select>

        <select className="border rounded-lg w-full md:w-[22%] lg:w-[22%] px-4 py-2 shadow-sm">
          <option>All Cities</option>
          <option>All Cities</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {filteredHospitals.map((hospital) => (
          <Link
            key={hospital.id}
            href={`/hospital/${hospital.id}`}
            className="border rounded-lg  hover:shadow-lg transition"
          >
            <Image
              src={hospital.img}
              alt={hospital.name}
              className="w-full  object-cover rounded-md "
            />
            <div className="px-4 py-4">
              <h2 className="text-lg font-bold text-[#4CB6B6]">
                {hospital.name}
              </h2>
              <p className="font-sans py-1 pt-2">{hospital.location}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
