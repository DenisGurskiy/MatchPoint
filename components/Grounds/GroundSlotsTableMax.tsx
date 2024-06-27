"use client";

import React from "react";
import { addDays, format } from "date-fns";
import classNames from "classnames";
import { Booking } from "@/app/types/booking";
import { GroupedSlots } from "@/app/types/groupedSlots";

type Props = {
  date: Date;
  startHour: number;
  endHour: number;
  isSlotBusy: (day: Date, hour: number, bookings: Booking[]) => boolean;
  isSlotYours: (day: Date, hour: number, bookings: Booking[]) => boolean;
  bookings: Booking[] | [];
  pickSlots: GroupedSlots;
  choseSlot: (day: Date, hour: number) => void;
};

export const GroundSlotsTableMax: React.FC<Props> = ({
  date,
  startHour,
  endHour,
  isSlotBusy,
  isSlotYours,
  bookings,
  pickSlots,
  choseSlot,
}) => {
  const isSlotPicked = (day: Date, hour: number) => {
    const formattedDay = format(day, "yyyy-MM-dd");
    return !!pickSlots[formattedDay]?.[hour];
  };

  return (
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
        {Array.from({ length: endHour - startHour }, (_, hourIndex) => {
          const hour = hourIndex + startHour;
          const nextHour = hour + 1;
          return (
            <tr
              key={hourIndex}
              className="grid grid-cols-[120px_repeat(7,_1fr)]"
            >
              <td className="col-span-1 h-[50px] bg-gray10Background border-[1px] border-gray20divider flex items-center justify-center">
                {`${hour}:00 - ${nextHour}:00`}
              </td>
              {Array.from({ length: 7 }, (_, dayIndex) => {
                const day = addDays(date, dayIndex);
                const isPicked = isSlotPicked(day, hour);
                let isBusy = false;
                let isYours = false;

                if (bookings) {
                  isBusy = isSlotBusy(day, hour, bookings);
                  isYours = isSlotYours(day, hour, bookings);
                }
                return (
                  <td
                    key={dayIndex}
                    className={classNames(
                      "h-[50px] col-span-1 border-[1px] border-gray20divider w-full flex items-center justify-center",
                      {
                        "cursor-pointer": !isBusy,
                        "bg-primaryGreen10 border-primaryGreen100": isPicked,
                        "bg-white": !isPicked && !isBusy,
                        "bg-gray10Background": isBusy && !isYours,
                        "bg-systemYellow": isYours,
                      }
                    )}
                    onClick={!isBusy ? () => choseSlot(day, hour) : undefined}
                  >
                    {!isBusy && "+"}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
