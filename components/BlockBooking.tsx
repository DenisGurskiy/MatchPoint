"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GroundType } from "@/app/types/ground";
import { Field } from "@/app/types/field";
import { format } from "date-fns";
import { Loader } from "./ui/loader";
import { Booking } from "@/app/types/booking";

type Props = {
  setIsActive: (flag: boolean) => void;
  setPayIsOk: (flag: boolean) => void;
  pickSlots: Set<string>;
  field: Field;
  amount: number;
  ground: GroundType;
  setBookings: React.Dispatch<React.SetStateAction<Booking[]>>;
};

export const BlockBooking: React.FC<Props> = ({
  setIsActive,
  setPayIsOk,
  pickSlots,
  field,
  amount,
  ground,
  setBookings,
}) => {
  const [loading, setLoading] = useState(false);

  const slotsArray = Array.from(pickSlots).map((slot) => {
    const slotData = JSON.parse(slot);
    return {
      day: slotData.day,
      time: `${slotData.time}:00`,
    };
  });

  const groupedSlots = slotsArray.reduce((acc: Record<string, any[]>, slot) => {
    const day = slot.day;
    if (!acc[day]) {
      acc[day] = [];
    }
    acc[day].push(slot);
    return acc;
  }, {});

  const bookingSlots = async () => {
    setLoading(true);

    try {
      const token = localStorage.getItem("access_token");
      const response = await fetch(
        `https://sportspace.onrender.com/api/service/sports-fields/${field.id}/booking/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          // body: JSON.stringify({ slots: slotsArray }),
          body: JSON.stringify(slotsArray[0]),
        }
      );

      if (response.ok) {
        const result = await response.json();
        setBookings((currentBookings) => [...currentBookings, result]);
      } else {
        console.error("Error creating slots:", response.statusText);
      }
    } catch (error) {
      console.error("Error creating slots:", error);
    } finally {
      setLoading(false);
      setPayIsOk(true);
      setIsActive(false);
    }
  };

  const sortedGroupedSlots = Object.keys(groupedSlots)
    .sort((a, b) => new Date(a).getTime() - new Date(b).getTime())
    .reduce((acc: Record<string, any[]>, key) => {
      acc[key] = groupedSlots[key].sort((a, b) => a.time - b.time);
      return acc;
    }, {});

  return (
    <div className="flex flex-col gap-[24px]">
      <div className="flex justify-end" onClick={() => setIsActive(false)}>
        <Image
          className="cursor-pointer"
          src="/images/close.svg"
          alt="logo"
          width={24}
          height={24}
        />
      </div>
      <h2 className="text-[22px] md:text-[32px] md:text-center font-semibold leading-[1.2em] text-gray100Primary">
        Confirm and pay
      </h2>
      <div className="col-span-full lg:col-span-4 rounded-[24px] border-[1px] border-gray20divider p-[24px] flex flex-col gap-[24px]">
        <div className="flex gap-[8px]">
          <Link
            href={`/grounds/${ground.id}`}
            className="overflow-hidden flex gap-[8px] cursor-pointer "
          >
            <Image
              className="hover:scale-[1.1] transition duration-300 ease-in-out rounded-[8px]"
              src={`/photo/grounds/${ground.id}/1.jpg`}
              alt="Main picture"
              width={98}
              height={67}
            />
            <div className="flex flex-col gap-[8px]">
              <h3 className="text-[16px] leading-[1.3em] text-gray100Primary font-semibold">
                {ground.name}
              </h3>
              <p className="text-[14px] leading-[1.35em] text-gray50 font-normal">
                {ground.address}
              </p>
            </div>
          </Link>
        </div>

        {Object.keys(sortedGroupedSlots).map((date, index) => (
          <div key={index}>
            <p className="text-[14px] leading-[1.35em] text-gray50 font-normal">
              {format(new Date(date), "EEE, dd MMMM, yyyy")}
            </p>
            {sortedGroupedSlots[date].map((slot, idx) => {
              const startTime = new Date();
              const [hour] = slot.time.split(":").map(Number);
              startTime.setHours(hour, 0, 0);

              const endTime = new Date(startTime);
              endTime.setHours(startTime.getHours() + 1);

              return (
                <p
                  key={idx}
                  className="text-[14px] leading-[1.35em] text-gray50 font-normal"
                >
                  {`${format(startTime, "HH:mm")} - ${format(
                    endTime,
                    "HH:mm"
                  )}`}
                </p>
              );
            })}
          </div>
        ))}
        <div className="flex flex-col gap-[8px]">
          <h4 className="text-[16px] leading-[1.3em] text-gray100Primary font-semibold">
            Sports ground rental
          </h4>
          <div className="flex justify-between">
            <p className="text-[14px] leading-[1.35em] text-gray50 font-normal">
              {`${+field?.price} x ${pickSlots.size} `}{" "}
              {pickSlots.size === 1 ? "hour" : "hours"}
            </p>
            <p className="text-[14px] leading-[1.35em] text-gray50 font-normal">
              {`${amount}₴`}
            </p>
          </div>
        </div>
        <div className="flex justify-between">
          <h4 className="text-[16px] leading-[1.3em] text-gray100Primary font-semibold">
            Total
          </h4>
          <h4 className="text-[16px] leading-[1.3em] text-gray100Primary font-semibold">
            {`${amount}₴`}
          </h4>
        </div>
      </div>
      <Button variant="primary" onClick={bookingSlots}>
        {loading ? <Loader /> : `Go To Payment`}
      </Button>
    </div>
  );
};
