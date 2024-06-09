"use client";

import classNames from "classnames";
import { SetStateAction, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function History() {
  const [activePage, setActivePage] = useState<"upcoming" | "history">(
    "upcoming"
  );

  const changePage = (page: SetStateAction<"upcoming" | "history">) => {
    setActivePage(page);
  };

  return (
    <section className="col-span-full md:col-span-6 md:grid md:grid-cols-6 flex flex-col gap-[24px]">
      <div className="col-span-full flex flex-col gap-[24px]">
        <h3 className="text-[16px] md:text-[32px] md:leading-[1.2em] font-semibold leading-[1.3em] text-gray100Primary] md:col-span-full">
          Booking History
        </h3>
        <div className="flex gap-[24px] text-[16px] leading-[1.3em] font font-normal text-gray50 h-[37px]">
          <button
            className={classNames("cursor-pointer hover:text-gray100Primary", {
              "text-gray100Primary border-b-[2px] border-primaryGreen100":
                activePage === "upcoming",
            })}
            onClick={() => changePage("upcoming")}
          >
            Upcoming
          </button>
          <button
            className={classNames("cursor-pointer hover:text-gray100Primary", {
              "text-gray100Primary border-b-[2px] border-primaryGreen100":
                activePage === "history",
            })}
            onClick={() => changePage("history")}
          >
            History
          </button>
        </div>
        {activePage === "history" && (
          <div className="col-span-full grow">
            <p className="text-center md:text-left text-[16px] leading-[1.3em] text-gray100Primary font-normal">
              There is no information at this time.
            </p>
          </div>
        )}
      </div>
      {activePage === "upcoming" && (
        <div className="col-span-full lg:col-span-4 rounded-[24px] border-[1px] border-gray20divider p-[24px] flex flex-col gap-[24px]">
          <div className="flex gap-[8px]">
            <Link
              href="/grounds/1"
              className="overflow-hidden flex gap-[8px] cursor-pointer "
            >
              <Image
                className="hover:scale-[1.1] transition duration-300 ease-in-out rounded-[8px]"
                src={`/photos/ground_1.jpg`}
                alt="Main picture"
                width={98}
                height={67}
              />
              <div className="flex flex-col gap-[8px]">
                <h3 className="text-[16px] leading-[1.3em] text-gray100Primary font-semibold">
                  Tennis court in Kyiv
                </h3>
                <p className="text-[14px] leading-[1.35em] text-gray50 font-normal">
                  12 Khreshchatyk Street, Kyiv, Ukraine
                </p>
              </div>
            </Link>
          </div>

          <div className="flex flex-col gap-[8px]">
            <h4 className="text-[16px] leading-[1.3em] text-gray100Primary font-semibold">
              Date & Time
            </h4>
            <div>
              <p className="text-[14px] leading-[1.35em] text-gray50 font-normal">
                Mon, 03 June, 2024
              </p>
              <p className="text-[14px] leading-[1.35em] text-gray50 font-normal">
                7:00 - 8:00
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
