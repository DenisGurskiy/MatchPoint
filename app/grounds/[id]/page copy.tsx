"use client";

import React, { useState } from "react";
import Image from "next/image";
import { addDays, format, isSameDay, startOfDay } from "date-fns";
import classNames from "classnames";
import { Booking } from "@/app/types/booking";

type Props = {
  bookings: Booking[];
  pickSlots: Set<string>;
  choseSlot: (day: Date, hour: number) => void;
};

export const GroundSlotsBlock: React.FC<Props> = ({
  bookings,
  pickSlots,
  choseSlot,
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

  console.log("bookings...", bookings);
  console.log("pickSlots...", pickSlots);
  console.log("date...", date);

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
        </div>
      </div>

      <table className="hidden sm:table w-full text-center">
        <thead>
          <tr className="grid grid-cols-[120px_repeat(7,_1fr)]">
            <th className="col-span-1"></th>
            {Array.from({ length: 7 }, (_, index) => {
              const day = addDays(date, index);
              return (
                <th
                  key={index}
                  className="bg-gray10Background border-[1px] border-gray20divider col-span-1 text-[16px] font-normal text-gray100Primary"
                >
                  <p className="text-[16px] text-gray50 font-normal">
                    {format(day, "EEE")}
                  </p>
                  <p className="text-[16px] font-semibold text-gray100Primary">
                    {format(day, "dd")}
                  </p>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: endHour - startHour }, (_, index) => {
            const hour = index + startHour;
            const nextHour = hour + 1;
            return (
              <tr key={index} className="grid grid-cols-[120px_repeat(7,_1fr)]">
                <td className="col-span-1 h-[50px] bg-gray10Background border-[1px] border-gray20divider flex items-center justify-center">
                  {`${hour}:00 - ${nextHour}:00`}
                </td>
                {Array.from({ length: 7 }, (_, index) => {
                  const day = addDays(date, index);
                  const slot = JSON.stringify({
                    day: format(day, "yyyy-MM-dd"),
                    time: hour,
                  });
                  const isPicked = pickSlots.has(slot);
                  return (
                    <td
                      key={index}
                      className={classNames(
                        "h-[50px] col-span-1 border-[1px] border-gray20divider w-full flex items-center justify-center cursor-pointer",
                        {
                          "bg-primaryGreen10 border-primaryGreen100": isPicked,
                          "bg-white": !isPicked,
                        }
                      )}
                      onClick={() => choseSlot(day, hour)}
                    >
                      +
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <table className="sm:hidden w-full text-center">
        <caption className="bg-gray10Background py-[4px]">
          <p className="text-[16px] text-gray50">{format(date, "EEE")}</p>
          <p className="text-[16px] font-semibold text-gray100Primary">
            {format(date, "dd")}
          </p>
        </caption>
        <tbody>
          {Array.from({ length: countHours }, (_, index) => {
            const firstColumnHour = index + startHour;
            const secondColumnHour = firstColumnHour + countHours;
            const firstColumnSlot = JSON.stringify({
              day: format(date, "yyyy-MM-dd"),
              time: firstColumnHour,
            });
            const secondColumnSlot = JSON.stringify({
              day: format(date, "yyyy-MM-dd"),
              time: secondColumnHour,
            });

            const isPickedFirstColumn = pickSlots.has(firstColumnSlot);
            const isPickedSecondColumn = pickSlots.has(secondColumnSlot);
            return (
              <tr key={index}>
                <td
                  className={classNames(
                    "h-[50px] border-[1px] cursor-pointer",
                    {
                      "bg-primaryGreen10 border-primaryGreen100":
                        isPickedFirstColumn,
                      "bg-white border-gray20divider": !isPickedFirstColumn,
                    }
                  )}
                  onClick={() => choseSlot(date, firstColumnHour)}
                >{`${firstColumnHour}:00 -${firstColumnHour + 1}:00`}</td>
                <td
                  className={classNames(
                    "h-[50px] border-[1px] cursor-pointer",
                    {
                      "bg-primaryGreen10 border-primaryGreen100":
                        isPickedSecondColumn,
                      "bg-white border-gray20divider": !isPickedSecondColumn,
                    }
                  )}
                  onClick={() => choseSlot(date, secondColumnHour)}
                >
                  {endHour !== secondColumnHour &&
                    `${secondColumnHour}:00 -${secondColumnHour + 1}:00`}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
