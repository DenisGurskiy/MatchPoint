"use client";

import { GroundCardBlock } from "@/components/GroundCardBlock";
import { DropDownCity } from "./ui/dropDownCity";
import { useEffect, useState } from "react";

export const PopularClubsBlock = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const groundCards = [
    { image: "new_3.png" },
    { image: "new_2.png" },
    { image: "new_1.png" },
    { image: "new_4.png" },
    { image: "new_5.png" },
    { image: "new_4.png" },
  ];

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const displayCards =
    windowWidth < 640 ? groundCards.slice(0, 3) : groundCards;

  return (
    <section className="ownContainer ownGrid mb-[60px]">
      <h2 className="md:text-[32px] text-[22px] leading-[1.2em] font-semibold text-gray100Primary col-span-full relative">
        Popular clubs in the city
        <DropDownCity title="Kyiv" options={["Kyiv", "Lviv", "Odessa"]} />
      </h2>
      {displayCards.map((card) => (
        <GroundCardBlock key={card.image} image={card.image} />
      ))}
    </section>
  );
};
