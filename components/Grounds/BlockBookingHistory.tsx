import React from "react";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { GroupedBooking } from "@/app/types/booking";

type Props = {
  bookings: Record<string, GroupedBooking>;
};

export const BlockBookingHistory: React.FC<Props> = ({ bookings }) => {
  return (
    <>
      {Object.keys(bookings).length === 0 ? (
        <div className="col-span-full grow">
          <p className="text-center md:text-left text-[16px] leading-[1.3em] text-gray100Primary font-normal">
            There is no information at this time.
          </p>
        </div>
      ) : (
        <>
          {Object.keys(bookings).length === 0 ? (
            <div className="col-span-full grow">
              <p className="text-center md:text-left text-[16px] leading-[1.3em] text-gray100Primary font-normal">
                There is no information at this time.
              </p>
            </div>
          ) : (
            <>
              {Object.keys(bookings).map((complexName) => {
                const complex = bookings[complexName];

                return (
                  <div
                    key={complex.id}
                    className="col-span-full lg:col-span-4 rounded-[24px] border-[1px] border-gray20divider p-[24px] flex flex-col gap-[24px]"
                  >
                    <div className="flex flex-col gap-[24px]">
                      <div className="flex gap-[8px]">
                        <Link
                          href={`/grounds/${complex.id}`}
                          className="overflow-hidden flex gap-[8px] cursor-pointer"
                        >
                          <Image
                            className="hover:scale-[1.1] transition duration-300 ease-in-out rounded-[8px]"
                            src={`/photo/grounds/${complex.id}/1.jpg`}
                            alt="Main picture"
                            width={98}
                            height={67}
                          />
                          <div className="flex flex-col gap-[8px]">
                            <h3 className="text-[16px] leading-[1.3em] text-gray100Primary font-semibold">
                              {complexName}
                            </h3>
                            <p className="text-[14px] leading-[1.35em] text-gray50 font-normal">
                              {complex.address}
                            </p>
                          </div>
                        </Link>
                      </div>

                      {Object.keys(complex.fields).map((fieldName) => (
                        <div
                          key={fieldName}
                          className="flex flex-col gap-[8px]"
                        >
                          <h4 className="text-[16px] leading-[1.3em] text-gray100Primary font-semibold">
                            {fieldName}
                          </h4>
                          {Object.keys(complex.fields[fieldName]).map(
                            (date) => (
                              <div key={date}>
                                <p className="text-[14px] leading-[1.35em] text-gray50 font-normal">
                                  {format(new Date(date), "EEE, dd MMMM, yyyy")}
                                </p>
                                {complex.fields[fieldName][date].map(
                                  (booking, idx) => {
                                    const startTime = new Date();
                                    const [hour] = booking.time
                                      .split(":")
                                      .map(Number);
                                    startTime.setHours(hour, 0, 0);

                                    const endTime = new Date(startTime);
                                    endTime.setHours(startTime.getHours() + 1);

                                    return (
                                      <p
                                        key={idx}
                                        className="text-[14px] leading-[1.35em] text-gray50 font-normal"
                                      >
                                        {`${format(
                                          startTime,
                                          "HH:mm"
                                        )} - ${format(endTime, "HH:mm")}`}
                                      </p>
                                    );
                                  }
                                )}
                              </div>
                            )
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </>
      )}
    </>
  );
};
