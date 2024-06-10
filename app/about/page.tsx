"use client";

import { HeaderBlock } from "@/components/HeaderBlock";
import { BlockAbout } from "@/components/BlockAbout";
import { BlockFAQs } from "@/components/BlockFAQs";
import { BlockGetInTouch } from "@/components/BlockGetInTouch";
import { useEffect, useState } from "react";

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
      <HeaderBlock image={coverImage}>
        <div className="absolute md:ownGrid w-full max-w-[1200px] px-[20px]">
          <h1 className="col-span-full md:col-span-7 md:text-[40px] text-[22px] font-semibold text-white leading-[1.2em] text-left">
            About our sports ground booking platform
          </h1>
        </div>
      </HeaderBlock>
      <BlockAbout />
      <BlockFAQs />
      <BlockGetInTouch />
    </>
  );
}
