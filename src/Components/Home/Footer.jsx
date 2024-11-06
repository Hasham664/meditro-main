"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.png"; // replace with the path to your logo
import facebookIcon from "../../../public/facebook.png";
import instagramIcon from "../../../public/instagram.png";
import linkedinIcon from "../../../public/linkedin.png";
import youtubeIcon from "../../../public/youtube.png";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-10 mt-24">
      <div className="Mycontainer ">
        <div className="flex flex-wrap justify-between items-start">
          {/* Logo and Description */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0 text-left md:text-left">
            <Image src={logo} className="w-[35%]" alt="Logo" />
            <p className="text-gray-600 mt-4 lg:mt-10 md:mt-10 max-w-64	">
              Experience personalized medical care from the comfort of your
              home.
            </p>
          </div>

          {/* Support Column */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <ul className="space-y-4 text-gray-600">
              {[
                "Support",
                "Getting Started",
                "FAQs",
                "Help Articles",
                "Report an issue",
                "Contact Help Desk",
              ].map((item, index) => (
                <li key={index} className="hover:text-teal-600 transition">
                  <Link href="#">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <ul className="space-y-4 text-gray-600">
              {[
                "Services",
                "Booking appointments",
                "Online consultations",
                "Prescriptions",
                "Medicine Refills",
                "Medical Notes",
              ].map((item, index) => (
                <li key={index} className="hover:text-teal-600 transition">
                  <Link href="#">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div className="w-full md:w-1/4">
            <ul className="space-y-4 text-gray-600">
              {[
                "Legal",
                "Terms & Conditions",
                "Privacy Policy",
                "Cookie Notice",
                "Cookie Preferences",
                "Trust Center",
              ].map((item, index) => (
                <li key={index} className="hover:text-teal-600 transition">
                  <Link href="#">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex flex-wrap justify-between items-center border-t border-[#B6E6FF] mt-8 pt-4 mt-12 gap-4">
          <div className="flex justify-center md:justify-start space-x-4 ">
            <Link href="#">
              <Image
                src={facebookIcon}
                alt="Facebook"
                width={35}
                className="hover:opacity-75 transition"
              />
            </Link>
            <Link href="#">
              <Image
                src={instagramIcon}
                alt="Instagram"
                width={35}
                className="hover:opacity-75 transition"
              />
            </Link>
            <Link href="#">
              <Image
                src={linkedinIcon}
                alt="LinkedIn"
                width={35}
                className="hover:opacity-75 transition"
              />
            </Link>
            <Link href="#">
              <Image
                src={youtubeIcon}
                alt="YouTube"
                width={35}
                className="hover:opacity-75 transition"
              />
            </Link>
          </div>

          {/* Bottom Text */}
          <div className="text-center md:text-left text-gray-500 ">
            <p>2024 © All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
