"use client";

import React from "react";
import Image from "next/image";
import { addDays, format, isSameDay, startOfDay } from "date-fns";
import { useState } from "react";
import { Booking } from "@/app/types/booking";
import { User } from "@/app/types/user";
import { GroundSlotsTableMin } from "./GroundSlotsTableMin";
import { GroundSlotsTableMax } from "./GroundSlotsTableMax";

type Props = {
  bookings: Booking[] | [];
  pickSlots: Set<string>;
  choseSlot: (day: Date, hour: number) => void;
  user: User | null;
};

export const GroundSlotsBlock: React.FC<Props> = ({
  bookings,
  pickSlots,
  choseSlot,
  user,
}) => {
  const today = startOfDay(new Date());
  const tomorrow = addDays(today, 1);
  const [date, setDate] = useState<Date>(tomorrow);
  const startHour = 8;
  const endHour = 22;
  const countHours = Math.ceil((endHour - startHour) / 2);

  const prevDay = () => {
    setDate((prevDate: Date) => {
      const newDate = startOfDay(addDays(prevDate, -1));
      if (newDate >= today) {
        return newDate;
      }
      return prevDate;
    });
  };

  const nextDay = () => {
    setDate((prevDate) => startOfDay(addDays(prevDate, 1)));
  };

  const isSlotBusy = (day: Date, hour: number, bookings: Booking[]) => {
    const formattedDay = format(day, "yyyy-MM-dd");
    const formattedTime = `${hour}:00:00`;

    return bookings.some(
      (booking) =>
        booking.day === formattedDay && booking.time === formattedTime
    );
  };

  const isSlotYours = (day: Date, hour: number, bookings: Booking[]) => {
    const formattedDay = format(day, "yyyy-MM-dd");
    const formattedTime = `${hour}:00:00`;

    return bookings.some(
      (booking) =>
        booking.day === formattedDay &&
        booking.time === formattedTime &&
        booking.personal_data === user?.id
    );
  };

  return (
    <div className="rounded-t-[24px] border-[1px] border-gray20divider flex flex-col items-center pt-[24px] gap-y-[24px]">
      <div className="w-full flex justify-center items-center md:justify-between md:px-[24px]">
        <div className="flex flex-col gap-[24px]">
          <h3 className="text-[22px] font-semibold leading-[1.2em]">
            Choose timeslot(s)
          </h3>
          <div className="w-[210px] rounded-[100px] p-[8px] bg-gray10Background flex justify-between items-center">
            {!isSameDay(today, date) ? (
              <Image
                className="cursor-pointer hover:scale-[1.1]"
                src="/images/left_arrow.svg"
                alt="logo"
                width={24}
                height={24}
                onClick={prevDay}
              />
            ) : (
              <Image
                src="/images/left_arrow_disabled.svg"
                alt="logo"
                width={24}
                height={24}
              />
            )}

            <Image
              src="/images/calendar.svg"
              alt="logo"
              width={24}
              height={24}
            />
            <p className="text-gray100Primary text-[16px] font-normal block">
              {format(date, "d-MMMM-yyyy")}
            </p>
            <Image
              className="cursor-pointer hover:scale-[1.1]"
              src="/images/right_arrow.svg"
              alt="logo"
              width={24}
              height={24}
              onClick={nextDay}
            />
          </div>
        </div>
        <div className="hidden md:flex flex-col text-left gap-[4px]">
          <div className="flex gap-[4px]">
            <div className="w-[40px] h-[20px] border-[1px] border-gray20divider bg-gray10Background"></div>
            <p>Unavailable</p>
          </div>
          <div className="flex gap-[4px]">
            <div className="w-[40px] h-[20px] border-[1px] border-gray20divider bg-white flex items-center justify-center">
              +
            </div>
            <p>Available</p>
          </div>
          <div className="flex gap-[4px]">
            <div className="w-[40px] h-[20px] border-[1px] border-primaryGreen100 bg-primaryGreen10 flex items-center justify-center">
              +
            </div>
            <p>Selected</p>
          </div>
          <div className="flex gap-[4px]">
            <div className="w-[40px] h-[20px] border-[1px]  bg-systemYellow flex items-center justify-center"></div>
            <p>Yours</p>
          </div>
        </div>
      </div>

      <GroundSlotsTableMax
        date={date}
        startHour={startHour}
        endHour={endHour}
        isSlotBusy={isSlotBusy}
        isSlotYours={isSlotYours}
        bookings={bookings}
        pickSlots={pickSlots}
        choseSlot={choseSlot}
      />
      <GroundSlotsTableMin
        date={date}
        startHour={startHour}
        endHour={endHour}
        countHours={countHours}
        isSlotBusy={isSlotBusy}
        isSlotYours={isSlotYours}
        bookings={bookings}
        pickSlots={pickSlots}
        choseSlot={choseSlot}
      />
    </div>
  );
};
