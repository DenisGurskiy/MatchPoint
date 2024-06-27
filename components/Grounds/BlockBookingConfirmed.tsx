"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GroundType } from "@/app/types/ground";
import { format } from "date-fns";
import { GroupedSlots } from "@/app/types/groupedSlots";

type Props = {
  setIsActive: (flag: boolean) => void;
  setConfirm: (flag: boolean) => void;
  pickSlots: GroupedSlots;
  ground: GroundType;
};

export const BlockBookingConfirmed: React.FC<Props> = ({
  setIsActive,
  setConfirm,
  pickSlots,
  ground,
}) => {
  // const slotsArray = Array.from(pickSlots).map((slot) => {
  //   const slotData = JSON.parse(slot);
  //   return {
  //     day: slotData.day,
  //     time: `${slotData.time}:00`,
  //   };
  // });

  const slotsArray = Object.entries(pickSlots).flatMap(([day, times]) =>
    Object.keys(times).map((time) => ({ day, time }))
  );

  const groupedSlots = slotsArray.reduce((acc: Record<string, any[]>, slot) => {
    const day = slot.day;
    if (!acc[day]) {
      acc[day] = [];
    }
    acc[day].push(slot);
    return acc;
  }, {});

  const sortedGroupedSlots = Object.keys(groupedSlots)
    .sort((a, b) => new Date(a).getTime() - new Date(b).getTime())
    .reduce((acc: Record<string, any[]>, key) => {
      acc[key] = groupedSlots[key].sort((a, b) => a.time - b.time);
      return acc;
    }, {});

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
      </div>
      <Button
        variant="primary"
        onClick={() => {
          setConfirm(true);
          setIsActive(false);
        }}
      >
        Done
      </Button>
    </div>
  );
};
