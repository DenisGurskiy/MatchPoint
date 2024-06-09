"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type Props = {
  setIsActive: (flag: boolean) => void;
};

export const BlockBookingConfirmed: React.FC<Props> = ({ setIsActive }) => {
  return (
    <div className="flex flex-col gap-[24px]">      
      <h2 className="text-[22px] md:text-[32px] text-center font-semibold leading-[1.2em] text-gray100Primary">
        Booking confirmed successfully!
      </h2>
      <p className="text-center text-[16px] font-normal leading-[1.3em] text-gray50">
        You will receive a confirmation at your email address.<br></br>Thank you
        for choosing our service.
      </p>
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
      <Button variant="primary">Done</Button>
    </div>
  );
};
