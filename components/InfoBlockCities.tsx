"use client";

import Link from "next/link";
import { City } from "@/app/types/city";

export const InfoBlockCities = () => {
  const cities: City[] = Object.values(City);

  return (
    <section className="mb-[60px] md:h-[411px] bg-[url('/photos/block_cities.jpg')] bg-cover bg-center py-[60px]">
      <div className="ownContainer ownGrid h-full">
        <div className="col-span-full grid md:grid-cols-5 grid-cols-2 gap-[24px]">
          <div className="col-span-5 text-white">
            <h2 className="md:text-[32px] text-[22px] leading-[1.2em] font-semibold mb-[24px]">
              SportSpace in your city
            </h2>
            <p className="text-[16px] leading-[1.3em] font-normal">
              SportSpace is live in 3 major Ukrainian cities
            </p>
          </div>
        </div>
        <div className="col-span-full flex items-center">
          <ul className="text-white md:text-[40px] text-[22px] font-semibold flex flex-col md:gap-[16px] gap-[8px]">
            {cities.slice(0, 3).map((city) => (
              <li
                key={city}
                className="leading-[46px]  hover:text-gray100Primary cursor-pointer active:text-primaryGreen100"
              >
                <Link href={`/grounds?location=${city}`}>{city}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
