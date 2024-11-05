"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import hospitalImage from "../../../../public/hospital.webp";
import Contactus from "@/Components/Home/Contactus";
import Navbar from "@/Components/Home/Navbar";
import CardsTab from "@/Components/Services/CardsTab";
import ServicesTabs from "@/Components/Services/ServiceTabs";
import OurSpecialties from "@/Components/Home/OurSpecialties";
import TeamSlider from "@/Components/Services/TeamMembers";

const hospitals = [
  {
    id: 1,
    name: "Quironsalud Hospital Group",
    location: "C/ Zurbarán 28, Madrid, Madrid, Comunidad de, 28010, Spain",
    img: hospitalImage,
    description:
      "At Quironsalud, you benefit from the expertise of Spain and Europe's leading private hospital group. With over 60 years of experience and a merger with Fresenius-Helios, we stand as the largest hospital group in Europe. Thousands of patients from over 50 different countries trust us each year",
  },
  {
    id: 2,
    name: "KIMS Hospital",
    location: "C/ Zurbarán 28, Madrid, Madrid, Comunidad de, 28010, Spain",
    img: hospitalImage,
    description:
      "At Quironsalud, you benefit from the expertise of Spain and Europe's leading private hospital group. With over 60 years of experience and a merger with Fresenius-Helios, we stand as the largest hospital group in Europe. Thousands of patients from over 50 different countries trust us each year",
  },
  {
    id: 3,
    name: "Amrita Hospital",
    location: "C/ Zurbarán 28, Madrid, Madrid, Comunidad de, 28010, Spain",
    img: hospitalImage,
    description:
      "At Quironsalud, you benefit from the expertise of Spain and Europe's leading private hospital group. With over 60 years of experience and a merger with Fresenius-Helios, we stand as the largest hospital group in Europe. Thousands of patients from over 50 different countries trust us each year",
  },
  {
    id: 4,
    name: "Ayu Health Hospitals",
    location: "C/ Zurbarán 28, Madrid, Madrid, Comunidad de, 28010, Spain",
    img: hospitalImage,
    description:
      "At Quironsalud, you benefit from the expertise of Spain and Europe's leading private hospital group. With over 60 years of experience and a merger with Fresenius-Helios, we stand as the largest hospital group in Europe. Thousands of patients from over 50 different countries trust us each year",
  },
  {
    id: 5,
    name: "Singapore General Hospital",
    location: "C/ Zurbarán 28, Madrid, Madrid, Comunidad de, 28010, Spain",
    img: hospitalImage,
    description:
      "At Quironsalud, you benefit from the expertise of Spain and Europe's leading private hospital group. With over 60 years of experience and a merger with Fresenius-Helios, we stand as the largest hospital group in Europe. Thousands of patients from over 50 different countries trust us each year",
  },
  {
    id: 6,
    name: "Medanta - The Medicity",
    location: "C/ Zurbarán 28, Madrid, Madrid, Comunidad de, 28010, Spain",
    img: hospitalImage,
    description:
      "At Quironsalud, you benefit from the expertise of Spain and Europe's leading private hospital group. With over 60 years of experience and a merger with Fresenius-Helios, we stand as the largest hospital group in Europe. Thousands of patients from over 50 different countries trust us each year",
  },
  {
    id: 7,
    name: "Helios Klinikum Erfurt",
    location: "C/ Zurbarán 28, Madrid, Madrid, Comunidad de, 28010, Spain",
    img: hospitalImage,
    description:
      "At Quironsalud, you benefit from the expertise of Spain and Europe's leading private hospital group. With over 60 years of experience and a merger with Fresenius-Helios, we stand as the largest hospital group in Europe. Thousands of patients from over 50 different countries trust us each year",
  },
  {
    id: 8,
    name: "Helios Klinikum Schwerin",
    location: "C/ Zurbarán 28, Madrid, Madrid, Comunidad de, 28010, Spain",
    img: hospitalImage,
    description:
      "At Quironsalud, you benefit from the expertise of Spain and Europe's leading private hospital group. With over 60 years of experience and a merger with Fresenius-Helios, we stand as the largest hospital group in Europe. Thousands of patients from over 50 different countries trust us each year",
  },
];

export default function HospitalDetailPage({ params }) {
  const [hospital, setHospital] = useState(null);
  const [id, setId] = useState(null);

  useEffect(() => {
    async function fetchParams() {
      const { id } = await params; 
      setId(id);
    }

    fetchParams();
  }, [params]);

  useEffect(() => {
    if (id) {
      const selectedHospital = hospitals.find((h) => h.id === parseInt(id));
      setHospital(selectedHospital);
    }
  }, [id]);

  if (!hospital) {
    return <p className="text-center text-3xl pt-12">Loading</p>;
  }

    return (
      <div className="">
        <Navbar />
        <div className="bg-[#4CB6B60D] pb-8 mt-4 lg:mt-12 md:mt-12">
          <div className="Mycontainer flex gap-8 flex-wrap pt-6">
            <div>
              <Image
                className="w-[330px] rounded-lg"
                src={hospital.img}
                alt={hospital.name}
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-4 text-[#4CB6B6]">
                {hospital.name}
              </h1>
              <u className="text-gray-600 mb-2">{hospital.location}</u>
              <p className="text-lg max-w-[480px] pt-6">
                {hospital.description}.
              </p>
            </div>
          </div>
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
