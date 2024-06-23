"use client";

import { BlockAbout } from "@/components/StaticBlocks/BlockAbout";
import { BlockFAQs } from "@/components/StaticBlocks/BlockFAQs";
import { BlockContactUs } from "@/components/StaticBlocks/BlockContactUs";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function About() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const coverImage = windowWidth < 768 ? "block_about_mobile" : "block_about";
  return (
    <>
      <div className="w-full h-[400px] relative flex items-center justify-center">
        <Image
          src={`/photos/${coverImage}.jpg`}
          alt="Main picture"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute md:ownGrid w-full max-w-[1200px] px-[20px]">
          <h1 className="col-span-full md:col-span-7 md:text-[40px] text-[22px] font-semibold text-white leading-[1.2em] text-left">
            About our sports ground booking platform
          </h1>
        </div>
      </div>
      <BlockAbout />
      <BlockFAQs />
      <BlockContactUs />
    </>
  );
}
