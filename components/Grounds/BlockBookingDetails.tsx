"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import classNames from "classnames";
import { format } from "date-fns";
import { GroupedSlots } from "@/app/types/groupedSlots";

type Props = {
  pickSlots: GroupedSlots;
  isOpenBook: boolean;
  setIsOpenBook: React.Dispatch<React.SetStateAction<boolean>>;
  choseSlot: (day: Date, hour: number) => void;
  handleBook: () => void;
  amount: number;
};

export const BlockBookingDetails: React.FC<Props> = ({
  pickSlots,
  isOpenBook,
  setIsOpenBook,
  choseSlot,
  handleBook,
  amount,
}) => {
  const slotsArray = Object.entries(pickSlots).flatMap(([day, times]) =>
    Object.keys(times).map((time) => ({ day, time }))
  );

  return (
    <div
      className={classNames(
        "ml-[-20px] md:ml-[-24px] w-full md:w-[376px] lg:w-full px-[20px] py-[24px] rounded-t-[24px] fixed bottom-0 right-0 z-20 lg:relative flex lg:flex flex-col justify-between max-h-[calc(100dvh-56px)] lg:max-h-none lg:col-span-4 h-min lg:ml-0 lg:p-[24px] gap-[24px] text-gray100Primary border-[1px] border-gray20divider lg:rounded-[24px] bg-white overflow-y-auto",
        {
          hidden: !Object.keys(pickSlots).length,
        }
      )}
    >
      <div>
        <h3 className="hidden lg:block text-[22px] leading-[1.2em] font-semibold">
          Booking Details
        </h3>
        <div
          className="lg:hidden flex justify-between cursor-pointer"
          onClick={() => setIsOpenBook((flag) => !flag)}
        >
          <h3 className="text-[22px] leading-[1.2em] font-semibold">
            Booking Details
          </h3>
          {isOpenBook ? (
            <div className="w-[24px] h-[24px] text-gray100Primary bg-[url('/images/down.svg')]"></div>
          ) : (
            <div className="w-[24px] h-[24px] text-gray100Primary bg-[url('/images/up.svg')]"></div>
          )}
        </div>
      </div>

      {Object.keys(pickSlots).length > 0 ? (
        <div
          className={classNames(
            "w-full flex lg:flex flex-col justify-between items-center text-center gap-[16px] bg-gray10Background rounded-[8px] p-[16px]",
            {
              hidden: !isOpenBook,
            }
          )}
        >
          <div className="flex flex-col gap-[8px]">
            <p className="text-[22px] font-semibold">{`${amount}₴`}</p>
            <p className="text-[16px] text-gray50">
              {slotsArray.length} timeslot{slotsArray.length !== 1 && "s"}{" "}
              selected
            </p>
          </div>

          {slotsArray.map((slot, index) => {
            const { day, time } = slot;
            return (
              <div key={index} className="flex gap-[16px]">
                <p className="text-[16px] text-gray50">
                  {format(new Date(day), "dd-MMMM-yyyy")}
                </p>
                <div className="cursor-pointer flex gap-[4px] items-center">
                  <p className="text-[16px] font-semibold">
                    {`${time}:00 - ${parseInt(time) + 1}:00`}
                  </p>
                  <Image
                    className="cursor-pointer hover:scale-[1.1]"
                    src="/images/close.svg"
                    alt="logo"
                    width={24}
                    height={24}
                    onClick={() => choseSlot(new Date(day), parseInt(time))}
                  />
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="w-full lg:h-[140px] rounded-[8px] overflow-hidden relative">
          <Image
            src="/images/No_timeslots_selected.png"
            alt="logo"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      )}

      {/* {!!pickSlots.size ? (
        <div
          className={classNames(
            "w-full flex lg:flex flex-col justify-between items-center text-center gap-[16px] bg-gray10Background rounded-[8px] p-[16px]",
            {
              hidden: !isOpenBook,
            }
          )}
        >
          <div className="flex flex-col gap-[8px]">
            <p className="text-[22px] font-semibold">{`${amount}₴`}</p>
            <p className="text-[16px] text-gray50">
              {slotsArray.length} timeslot{slotsArray.length > 1 ? "s" : ""}{" "}
              selected
            </p>
          </div>

          {slotsArray.map((slot, index) => {
            const { day, time } = slot;
            return (
              <div key={index} className="flex gap-[16px]">
                <p className="text-[16px] text-gray50">
                  {format(new Date(day), "dd-MMMM-yyyy")}
                </p>
                <div className="cursor-pointer flex gap-[4px] items-center">
                  <p className="text-[16px] font-semibold">
                    {`${time}:00 - ${parseInt(time) + 1}:00`}
                  </p>
                  <Image
                    className="cursor-pointer hover:scale-[1.1]"
                    src="/images/close.svg"
                    alt="logo"
                    width={24}
                    height={24}
                    onClick={() => choseSlot(new Date(day), parseInt(time))}
                  />
                </div>
              </div>
            );
          })}

          {/* {Array.from(pickSlots).map((slot, index) => {
            const { day, time } = JSON.parse(slot);
            return (
              <div key={index} className="flex gap-[16px]">
                <p className="text-[16px] text-gray50">
                  {format(day, "dd-MMMM-yyyy")}
                </p>
                <div className="cursor-pointer flex gap-[4px] items-center">
                  <p className="text-[16px] font-semibold">
                    {`${time}:00 - ${time + 1}:00`}
                  </p>
                  <Image
                    className="cursor-pointer hover:scale-[1.1]"
                    src="/images/close.svg"
                    alt="logo"
                    width={24}
                    height={24}
                    onClick={() => choseSlot(day, time)}
                  />
                </div>
              </div>
            );
          })} */}
      {/* </div>
      ) : (
        <div className="w-full lg:h-[140px] rounded-[8px] overflow-hidden relative">
          <Image
            src="/images/No_timeslots_selected.png"
            alt="logo"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      )} */}
      <Button
        onClick={handleBook}
        variant="primary"
        disabled={!Object.keys(pickSlots).length}
      >
        Book
      </Button>
    </div>
  );
};
