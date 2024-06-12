"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BackButton } from "@/components/ui/backButton";

type Props = {
  params: {
    id: string;
  };
};

export default function New({ params: { id } }: Props) {
  const card = {
    title: "Expanded Service to Lviv and Odesa",
    description:
      "We are excited to announce that SportSpace is now available in Lviv and Odesa. Find your perfect spot today!",
    image: "new_1.png",
    date: "10/06/2024",
    text: `We are thrilled to announce the expansion of our services to include the vibrant cities of Lviv and Odesa! This exciting development means that more sports enthusiasts in Ukraine can now easily access and book their favorite sports facilities through our platform.\nOur goal has always been to provide convenient and efficient booking solutions, and this expansion is a significant step towards achieving that vision. Whether you’re in Lviv, with its rich cultural heritage, or Odesa, known for its beautiful Black Sea coast, you can now enjoy seamless access to a wide range of sports facilities.\nFrom tennis courts and soccer fields to swimming pools and fitness centers, our platform offers a diverse selection of venues to cater to all your sporting needs. With our user-friendly interface and real-time booking capabilities, securing a spot has never been easier.\nWe invite all sports lovers in Lviv and Odesa to explore our services and take advantage of the ease and convenience we provide. Stay active, stay healthy, and enjoy your favorite sports with our expanded service.\nThank you for your continued support as we strive to bring you the best booking experience possible. We look forward to serving the communities of Lviv and Odesa and helping you stay fit and active!`,
  };

  return (
    <>
      <div className="w-full h-[400px] relative flex items-center justify-center">
        <Image
          src={`/photos/${card.image}`}
          alt="Main picture"
          fill
          style={{ objectFit: "cover" }}
        />
        <BackButton className="absolute top-[24px] left-[20px] z-10" />
        <div className="absolute md:ownGrid w-full max-w-[1200px] px-[20px]">
          <h1 className="col-span-full md:col-span-7 md:text-[40px] text-[22px] font-semibold text-white leading-[1.2em] text-left">
            {card.title}
          </h1>
        </div>
      </div>
      <section className="ownContainer ownGrid my-[32px] md:my-[60px]">
        <div className="md:col-span-7 col-span-full text-gray50 text-[16px] font-normal flex flex-col gap-y-[16px] leading-[1.3em]">
          <p className="text-[14px] italic ">{card.date}</p>
          {card.text.split("\n").map((part) => (
            <p key={part} className="text-gray100Primary">
              {part}
            </p>
          ))}
        </div>
      </section>
    </>
  );
}
