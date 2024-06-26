import { Metadata } from "next";
import Image from "next/image";

import { BlockAbout } from "@/components/StaticBlocks/BlockAbout";
import { BlockFAQs } from "@/components/StaticBlocks/BlockFAQs";
import { BlockContactUs } from "@/components/StaticBlocks/BlockContactUs";

export const metadata: Metadata = {
  title: "About | SportSpace",
  description: "About our sports ground booking platform",
};

export default function About() {
  return (
    <>
      <div className="w-full h-[400px] relative flex items-center justify-center">
        <Image
          src={`/photos/block_about_mobile.jpg`}
          alt="Main picture"
          fill
          style={{ objectFit: "cover" }}
          className="block md:hidden"
        />
        <Image
          src={`/photos/block_about.jpg`}
          alt="Main picture"
          fill
          style={{ objectFit: "cover" }}
          className="md:block hidden"
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
