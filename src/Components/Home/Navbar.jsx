// components/Navbar.js
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
// function
export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => {
    setNavOpen(!navOpen);
  };
    const pathname = usePathname();


  return (
    <nav className="text-black  ">
      <div className="Mycontainer ">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <Link href="/">
              <img
                className="w-[60%] lg:w-full md:w-full"
                src="/logo.png"
                alt=""
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden tablet:flex lg:space-x-8 md:space-x-4">
            <Link
              href="/"
              className={`lg:text-xl md:text-lg text-[#3D3D3D]  hover:text-[#4CB6B6] ${
                pathname === "/" ? " text-[#4CB6B6]" : ""
              }`}
            >
              Home
            </Link>
            <Link
              href="/service"
              className={`lg:text-xl md:text-lg text-[#3D3D3D]  hover:text-[#4CB6B6] ${
                pathname === "/service" ? " text-[#4CB6B6]" : ""
              }`}
            >
              Service
            </Link>
            <Link
              href="/Hospitality "
              className={`lg:text-xl md:text-lg text-[#3D3D3D]  hover:text-[#4CB6B6] ${
                pathname === "/Hospitality" ? " text-[#4CB6B6]" : ""
              }`}
            >
              Hospitality
            </Link>
            <Link
              href="/Travel"
              className={`lg:text-xl md:text-lg text-[#3D3D3D]  hover:text-[#4CB6B6] ${
                pathname === "/Travel" ? " text-[#4CB6B6]" : ""
              }`}
            >
              Travel 
            </Link>
            <Link
              href="/hospital"
              className={`lg:text-xl md:text-lg text-[#3D3D3D]  hover:text-[#4CB6B6] ${
                pathname === "/hospital" ? " text-[#4CB6B6]" : ""
              }`}
            >
              Hospitals
            </Link>
          </div>

          {/* Button */}
          <div className="hidden tablet:block">
            <button className="bg-gradient-to-r from-custom-blue to-custom-teal text-white lg:px-6 lg:py-3 md:px-4 md:py-2  rounded-lg :text-2xl md:text-xl">
              Join us{" "}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="tablet:hidden">
            <button onClick={toggleNav}>
              {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <div className="tablet:hidden  bg-gradient-to-r from-custom-blue to-custom-teal text-white pb-12  transition-transform duration-300 ease-in-out">
          <div className="flex flex-col items-center space-y-8  pt-12">
            <Link
              className=" lg:text-xl md:text-lg text-white   hover:text-[#4CB6B6]"
              href="/"
              onClick={toggleNav}
            >
              Home
            </Link>
            <Link
              className=" lg:text-xl md:text-lg text-white  hover:text-[#4CB6B6]"
              href="/service"
              onClick={toggleNav}
            >
              Service
            </Link>
            <Link
              className=" lg:text-xl md:text-lg text-white   hover:text-[#4CB6B6]"
              href="/Hospitality "
              onClick={toggleNav}
            >
              Hospitality
            </Link>
            <Link
              className=" lg:text-xl md:text-lg text-white   hover:text-[#4CB6B6]"
              href="/Travel"
              onClick={toggleNav}
            >
              Travel 
            </Link>
            <Link
              className=" lg:text-xl md:text-lg text-white   hover:text-[#4CB6B6]"
              href="/hospital"
              onClick={toggleNav}
            >
              Hospitals
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

