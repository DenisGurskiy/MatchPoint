"use client";

import React from "react";
import { format } from "date-fns";
import classNames from "classnames";
import { Booking } from "@/app/types/booking";
import { GroupedSlots } from "@/app/types/groupedSlots";

type Props = {
  date: Date;
  startHour: number;
  endHour: number;
  countHours: number;
  isSlotBusy: (day: Date, hour: number, bookings: Booking[]) => boolean;
  isSlotYours: (day: Date, hour: number, bookings: Booking[]) => boolean;
  bookings: Booking[] | [];
  pickSlots: GroupedSlots;
  choseSlot: (day: Date, hour: number) => void;
};

export const GroundSlotsTableMin: React.FC<Props> = ({
  date,
  startHour,
  endHour,
  countHours,
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

          const isPickedFirstColumn = isSlotPicked(date, firstColumnHour);
          const isPickedSecondColumn = isSlotPicked(date, secondColumnHour);

          let isBusyFirstColumn = false;
          let isYoursFirstColumn = false;
          let isBusySecondColumn = false;
          let isYoursSecondColumn = false;

          if (bookings) {
            isBusyFirstColumn = isSlotBusy(date, firstColumnHour, bookings);
            isYoursFirstColumn = isSlotYours(date, firstColumnHour, bookings);
            isBusySecondColumn = isSlotBusy(date, secondColumnHour, bookings);
            isYoursSecondColumn = isSlotYours(date, secondColumnHour, bookings);
          }

          return (
            <tr key={index} className="grid grid-cols-2">
              <td
                className={classNames(
                  "h-[50px] border-[1px] col-span-1 w-full flex items-center justify-center",
                  {
                    "cursor-pointer": !isBusyFirstColumn,
                    "bg-primaryGreen10 border-primaryGreen100":
                      isPickedFirstColumn,
                    "bg-white": !isPickedFirstColumn && !isBusyFirstColumn,
                    "bg-gray10Background":
                      isBusyFirstColumn && !isYoursFirstColumn,
                    "bg-systemYellow": isYoursFirstColumn,
                  }
                )}
                onClick={
                  !isBusyFirstColumn
                    ? () => choseSlot(date, firstColumnHour)
                    : undefined
                }
              >
                {!isBusyFirstColumn &&
                  `${firstColumnHour}:00 -${firstColumnHour + 1}:00`}
              </td>
              <td
                className={classNames(
                  "h-[50px] border-[1px] col-span-1 w-full flex items-center justify-center",
                  {
                    "cursor-pointer": !isBusySecondColumn,
                    "bg-primaryGreen10 border-primaryGreen100":
                      isPickedSecondColumn,
                    "bg-white": !isPickedSecondColumn && !isBusySecondColumn,
                    "bg-gray10Background":
                      isBusySecondColumn && !isYoursSecondColumn,
                    "bg-systemYellow": isYoursSecondColumn,
                  }
                )}
                onClick={
                  !isBusySecondColumn
                    ? () => choseSlot(date, secondColumnHour)
                    : undefined
                }
              >
                {!isBusySecondColumn &&
                  endHour !== secondColumnHour &&
                  `${secondColumnHour}:00 -${secondColumnHour + 1}:00`}
              </td>
            </tr>
          );
        })}

        {/* {Array.from({ length: countHours }, (_, index) => {
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

          let isBusyFirstColumn = false;
          let isYoursFirstColumn = false;
          let isBusySecondColumn = false;
          let isYoursSecondColumn = false;

          if (bookings) {
            isBusyFirstColumn = isSlotBusy(date, firstColumnHour, bookings);
            isYoursFirstColumn = isSlotYours(date, firstColumnHour, bookings);
            isBusySecondColumn = isSlotBusy(date, secondColumnHour, bookings);
            isYoursSecondColumn = isSlotYours(date, secondColumnHour, bookings);
          }

          return (
            <tr key={index} className="grid grid-cols-2">
              <td
                className={classNames(
                  "h-[50px] border-[1px] col-span-1 w-full flex items-center justify-center",
                  {
                    "cursor-pointer": !isBusyFirstColumn,
                    "bg-primaryGreen10 border-primaryGreen100":
                      isPickedFirstColumn,
                    "bg-white": !isPickedFirstColumn && !isBusyFirstColumn,
                    "bg-gray10Background":
                      isBusyFirstColumn && !isYoursFirstColumn,
                    "bg-systemYellow": isYoursFirstColumn,
                  }
                )}
                onClick={
                  !isBusyFirstColumn
                    ? () => choseSlot(date, firstColumnHour)
                    : undefined
                }
              >
                {!isBusyFirstColumn &&
                  `${firstColumnHour}:00 -${firstColumnHour + 1}:00`}
              </td>
              <td
                className={classNames(
                  "h-[50px] border-[1px] col-span-1 w-full flex items-center justify-center",
                  {
                    "cursor-pointer": !isBusySecondColumn,
                    "bg-primaryGreen10 border-primaryGreen100":
                      isPickedSecondColumn,
                    "bg-white": !isPickedSecondColumn && !isBusySecondColumn,
                    "bg-gray10Background":
                      isBusySecondColumn && !isYoursSecondColumn,
                    "bg-systemYellow": isYoursSecondColumn,
                  }
                )}
                onClick={
                  !isBusySecondColumn
                    ? () => choseSlot(date, secondColumnHour)
                    : undefined
                }
              >
                {!isBusySecondColumn &&
                  endHour !== secondColumnHour &&
                  `${secondColumnHour}:00 -${secondColumnHour + 1}:00`}
              </td>
            </tr>
          );
        })} */}
      </tbody>
    </table>
  );
};
