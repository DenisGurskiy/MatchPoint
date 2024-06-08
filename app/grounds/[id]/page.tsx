"use client";

import { Button } from "@/components/ui/button";
import { DropDownActivity } from "@/components/ui/dropDownActivity";
import Image from "next/image";
import { addDays, format, isSameDay, startOfDay } from "date-fns";
import { useState } from "react";
import classNames from "classnames";

type Props = {
  params: {
    id: string;
  };
};

type Slot = {
  date: Date;
  hour: number;
};

export default function Ground({ params: { id } }: Props) {
  const location = "https://www.google.com/maps?q=50.4501,30.5234&z=15&hl=en";
  const today = startOfDay(new Date());
  const tomorrow = addDays(today, 1);
  const [date, setDate] = useState<Date>(tomorrow);
  const startHour = 7;
  const endHour = 22;
  const countHours = Math.ceil((endHour - startHour) / 2);
  const [pickSlots, setPickSlots] = useState<Set<string>>(new Set());

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

  const choseSlot = (day: Date, hour: number) => {
    const slot = JSON.stringify({ date: day, hour });
    setPickSlots((prevSlots) => {
      const newSlots = new Set(prevSlots);
      if (prevSlots.has(slot)) {
        newSlots.delete(slot);
      } else {
        newSlots.add(slot);
      }
      return newSlots;
    });
  };

  console.log("pickSlots", pickSlots);

  return (
    <section className="ownContainer ownGrid md:mb-[60px] mb-[32px] mt-[24px] gap-y-[24px]">
      <div className="col-span-full row-span-1 md:hidden flex justify-start gap-[4px] hover:text-gray50 transition duration-300 ease-in-out cursor-pointer">
        <svg
          className="w-[24px] h-[24px]"
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="24pt"
          height="24pt"
          viewBox="0 0 24 24"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0,24) scale(0.1,-0.1)"
            fill="currentColor"
            stroke="none"
          >
            <path d="M105 160 l-39 -40 39 -40 c21 -22 44 -40 49 -40 6 0 -8 18 -29 40 l-39 40 39 40 c21 22 35 40 29 40 -5 0 -28 -18 -49 -40z" />
          </g>
        </svg>
        <Button className="" variant="mobileTinyText">
          Back
        </Button>
      </div>
      <div className="col-span-full grid grid-cols-2 md:grid-cols-12 grid-rows-2 gap-[4px] h-[210px] md:h-[419px] rounded-[24px] overflow-hidden">
        <div className="col-span-1 md:col-span-8 row-span-2 relative w-full h-auto">
          <Image
            src={`/photos/ground_1.jpg`}
            alt="Main picture"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="col-span-1 md:col-span-4 row-span-1 relative w-full h-auto">
          <Image
            src={`/photos/ground_2.jpg`}
            alt="Main picture"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="col-span-1 md:col-span-4 row-span-1 relative w-full h-auto">
          <Image
            src={`/photos/ground_3.jpg`}
            alt="Main picture"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <div className="col-span-full md:col-span-8 flex flex-col gap-[16px]">
        <div className="w-full flex flex-col gap-[16px] mb-[16px]">
          <h3 className="text-[22px] md:text-[32px] font-semibold col-span-full">
            Tennis court in Kyiv
          </h3>
          <div className="col-span-full">
            <Button variant="badge">Tennis</Button>
          </div>
          <a
            href={location}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-[5px] col-span-full"
          >
            <Image
              className="cursor-pointer"
              src="/images/location.png"
              alt="logo"
              width={24}
              height={24}
            />
            <p className="text-gray100Primary text-[16px] font-normal">
              12 Khreshchatyk Street, Kyiv, Ukraine
            </p>
          </a>
          <a href="tel: +380888888888" className="flex gap-[5px] col-span-full">
            <Image
              className="cursor-pointer"
              src="/images/phone.png"
              alt="logo"
              width={24}
              height={24}
            />
            <p className="text-gray100Primary text-[16px] font-normal">
              +380888888888
            </p>
          </a>
        </div>
        <div className="w-[210px] md:col-span-4 relative">
          <label htmlFor="activity">
            <DropDownActivity
              question="Choose the type of field"
              title="Outdoor field"
              options={["Football", "Tennis", "Volleyball"]}
            />
          </label>
        </div>
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
                    src="/images/left_arrow.png"
                    alt="logo"
                    width={24}
                    height={24}
                    onClick={prevDay}
                  />
                ) : (
                  <Image
                    src="/images/left_arrow_disabled.png"
                    alt="logo"
                    width={24}
                    height={24}
                  />
                )}

                <Image
                  src="/images/calendar.png"
                  alt="logo"
                  width={24}
                  height={24}
                />
                <p className="text-gray100Primary text-[16px] font-normal block">
                  {format(date, "d-MMMM-yyyy")}
                </p>
                <Image
                  className="cursor-pointer hover:scale-[1.1]"
                  src="/images/right_arrow.png"
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

          <table className="w-full text-center">
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
                  <tr
                    key={index}
                    className="grid grid-cols-[120px_repeat(7,_1fr)]"
                  >
                    <td className="col-span-1 h-[50px] bg-gray10Background border-[1px] border-gray20divider flex items-center justify-center">
                      {`${hour}:00 - ${nextHour}:00`}
                    </td>
                    {Array.from({ length: 7 }, (_, index) => {
                      const day = addDays(date, index);
                      const slot = JSON.stringify({ date: day, hour });
                      const isPicked = pickSlots.has(slot);
                      return (
                        <td
                          key={index}
                          className={classNames(
                            "h-[50px] col-span-1 border-[1px] border-gray20divider w-full flex items-center justify-center cursor-pointer",
                            {
                              "bg-primaryGreen10 border-primaryGreen100":
                                isPicked,
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
          <table className="md:hidden w-full text-center">
            <caption className="bg-gray10Background py-[4px]">
              <p className="text-[16px] text-gray50">{format(date, "EEE")}</p>
              <p className="text-[16px] font-semibold text-gray100Primary">
                {format(date, "dd")}
              </p>
            </caption>
            <tbody>
              {Array.from({ length: countHours }, (_, index) => {
                const hour = index + startHour;
                const nextHour = hour + 1;
                return (
                  <tr key={index}>
                    <td
                      className={classNames(
                        "h-[50px] border-[1px] border-gray20divider cursor-pointer",
                        {
                          "border-gray20divider bg-gray10Background":
                            endHour === hour,
                        }
                      )}
                    >{`${hour}:00 -${nextHour}:00`}</td>
                    <td
                      className={classNames(
                        "h-[50px] border-[1px] border-gray20divider cursor-pointer",
                        {
                          "border-gray20divider bg-gray10Background":
                            endHour === hour + countHours,
                        }
                      )}
                    >
                      {endHour !== hour + countHours &&
                        `${hour + countHours}:00 -${nextHour + countHours}:00`}
                    </td>
                  </tr>
                );
              })}
            </tbody>
            {/* <tr>
            <td className="h-[50px] border-[1px] border-gray20divider cursor-pointer">
              Комірка 1
            </td>
            <td className="h-[50px] border-[1px] marker:border-primaryGreen100 bg-primaryGreen10">
              Комірка 2
            </td>
          </tr>
          <tr>
            <td className="h-[50px] border-[1px] border-gray20divider bg-gray10Background"></td>
            <td>Комірка 5</td>
          </tr> */}
          </table>
        </div>
      </div>
      <div className="hidden md:flex flex-col justify-between md:col-span-4 h-min p-[24px] gap-[24px] text-gray100Primary border-[1px] rounded-[24px]">
        <h3 className="text-[22px] leading-[1.2em] font-semibold">
          Booking Details
        </h3>
        {!!pickSlots.size && (
          <div className="flex flex-col justify-between items-center text-center gap-[16px] bg-gray10Background rounded-[8px] py-[16px]">
            <div className="flex flex-col gap-[8px]">
              <p className="text-[22px] font-semibold">600₴</p>
              <p className="text-[16px] text-gray50">
                {pickSlots.size} timeslot selected
              </p>
            </div>
            {Array.from(pickSlots).map((slot, index) => {
              const { date, hour } = JSON.parse(slot);
              return (
                <div key={index} className="flex gap-[16px]">
                  <p className="text-[16px] text-gray50">
                    {format(date, "dd-MMMM-yyyy")}
                  </p>
                  <div className="cursor-pointer flex gap-[4px] items-center">
                    <p className="text-[16px] font-semibold">
                      {`${hour}:00 - ${hour + 1}:00`}
                    </p>
                    <Image
                      className="cursor-pointer hover:scale-[1.1]"
                      src="/images/close.png"
                      alt="logo"
                      width={24}
                      height={24}
                      onClick={() => choseSlot(date, hour)}
                    />
                  </div>
                </div>
              );
            })}
            {/* <div className="flex gap-[16px]">
              <p className="text-[16px] text-gray50">03-June-2024</p>
              <div
                className="cursor-pointer flex gap-[4px] items-center"
                // onClick={() => choseSlot()}
              >
                <p className="text-[16px] font-semibold">7:00 - 8:00</p>
                <Image
                  className="cursor-pointer hover:scale-[1.1]"
                  src="/images/close.png"
                  alt="logo"
                  width={24}
                  height={24}
                />
              </div>
            </div> */}
          </div>
        )}
        <Button variant="smallPrimary">Book</Button>
      </div>
    </section>
  );
}
