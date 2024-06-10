"use client";

import { NewCardBlock } from "@/components/NewCardBlock";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export const NewsBlock = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const newsCards = [
    {
      title: "Expanded Service to Lviv and Odesa",
      description:
        "We are excited to announce that SportSpace is now available in Lviv and Odesa. Find your perfect spot today!",
      image: "new_1.png",
    },
    {
      title: "New Sports Ground Openings in Kyiv",
      description:
        "Stay tuned for updates on the latest sports grounds opening in Kyiv. More options for your favorite activities!",
      image: "new_2.png",
    },
    {
      title: "Discounts on Bookings This Summer",
      description:
        "Enjoy special summer discounts on bookings for sports grounds. Book now and save!",
      image: "new_3.png",
    },
  ];

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const displayCards =
    windowWidth > 639 && windowWidth < 768 ? newsCards.slice(0, 2) : newsCards;

  return (
    <section className="ownContainer ownGrid md:mb-[60px] mb-[32px]">
      <div className="col-span-full ownGrid items-end">
        <div className="col-span-full md:col-span-4 flex flex-col gap-[24px]">
          <h2 className="md:text-[32px] text-[22px] leading-[1.2em] font-semibold text-gray100Primary col-span-full">
            News
          </h2>
          <p className="text-[16px] leading-[1.3em] font-normal col-span-full">
            Stay updated with the latest news and activities
          </p>
        </div>
        <Link
          href="/news"
          className="col-span-full md:col-start-9 md:col-span-4 lg:col-start-11 lg:col-span-2 grid grid-cols-2"
        >
          <Button variant="secondary" className="col-span-1 md:col-span-full">
            View all news
          </Button>
        </Link>
      </div>
      {displayCards.map((card) => (
        <NewCardBlock
          key={card.title}
          title={card.title}
          description={card.description}
          image={card.image}
        />
      ))}
    </section>
  );
};
