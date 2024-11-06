"use client";

import React from "react";

export default function serviceCards() {
  const cards = [
    {
      number: "120",
      years: "years with you",
      description:
        "Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.",
    },
    {
      number: "400",
      years: "Awards",
      description:
        "Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.",
    },
    {
      number: "250",
      years: "doctors",
      description:
        "Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.",
    },
    {
      number: "800",
      years: "Satisfied Client",
      description:
        "Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.",
    },
  ];
  return (
    <div className="grid grid-1 pb-10 pt-12  lg:grid-cols-4 md:grid-cols-3 gap-3 lg:gap-6 Mycontainer">
      {cards.map((card, ind) => {
        return (
          <div
            key={ind}
            className="  transition hover:scale-105 bg-white shadow-2xl rounded-xl px-8 py-12"
          >
            <h1 className="text-3xl lg:text-5xl  text-[#4CB6B6] font-bold">
              {card.number}
            </h1>
            <h2 className="text-[#0069AB] text-xl lg:text-2xl font-semibold pt-3">
              {card.years}
            </h2>
            <p className="text-[#000000] pt-3 max-w-[182px] pt-4">
              {card.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}
