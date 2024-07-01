"use client";

import classNames from "classnames";
import { SetStateAction, useEffect, useState } from "react";
import { toast } from "sonner";
import { useAuth } from "@/components/AuthContext";
import { Loader } from "@/components/ui/loader";
import { GroundType } from "@/app/types/ground";
import { GroupedBooking } from "@/app/types/booking";
import { BlockBookingHistory } from "@/components/Grounds/BlockBookingHistory";

export default function History() {
  const { user } = useAuth();
  const [activePage, setActivePage] = useState<"upcoming" | "history">(
    "upcoming"
  );

  const [grounds, setGrounds] = useState<GroundType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const changePage = (page: SetStateAction<"upcoming" | "history">) => {
    setActivePage(page);
  };

  useEffect(() => {
    setIsLoading(true);
    const token = localStorage.getItem("access_token");
    if (user) {
      fetch(`https://sportspace.onrender.com/api/client/me/schedule/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setGrounds(data);
        })
        .catch((error) => {
          console.error("Save error:", error);
          toast.error("Failed to save data. Please try again.");
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [user]);

  const groupAndSortBookings = (complexes: GroundType[]) => {
    const groupedBookings: Record<string, GroupedBooking> = {};

    complexes.forEach((complex) => {
      complex.fields.forEach((field) => {
        field.bookings.forEach((booking) => {
          const { day } = booking;

          if (!groupedBookings[complex.name]) {
            groupedBookings[complex.name] = {
              id: complex.id,
              address: complex.address,
              fields: {},
            };
          }

          if (!groupedBookings[complex.name].fields[field.activity]) {
            groupedBookings[complex.name].fields[field.activity] = {};
          }

          if (!groupedBookings[complex.name].fields[field.activity][day]) {
            groupedBookings[complex.name].fields[field.activity][day] = [];
          }

          groupedBookings[complex.name].fields[field.activity][day].push(
            booking
          );
        });
      });
    });

    Object.keys(groupedBookings).forEach((complexName) => {
      Object.keys(groupedBookings[complexName].fields).forEach((fieldName) => {
        Object.keys(groupedBookings[complexName].fields[fieldName]).forEach(
          (day) => {
            groupedBookings[complexName].fields[fieldName][day].sort((a, b) => {
              return a.time.localeCompare(b.time);
            });
          }
        );
      });
    });

    return groupedBookings;
  };

  const separateUpcomingAndHistoryBookings = (
    groupedBookings: Record<string, GroupedBooking>,
    currentDate: string
  ) => {
    const upcomingBookings: Record<string, GroupedBooking> = {};
    const historyBookings: Record<string, GroupedBooking> = {};

    Object.keys(groupedBookings).forEach((complexName) => {
      const complex = groupedBookings[complexName];

      Object.keys(complex.fields).forEach((fieldName) => {
        Object.keys(complex.fields[fieldName]).forEach((day) => {
          if (day >= currentDate) {
            if (!upcomingBookings[complexName]) {
              upcomingBookings[complexName] = {
                id: complex.id,
                address: complex.address,
                fields: {},
              };
            }
            if (!upcomingBookings[complexName].fields[fieldName]) {
              upcomingBookings[complexName].fields[fieldName] = {};
            }
            upcomingBookings[complexName].fields[fieldName][day] =
              complex.fields[fieldName][day];
          } else {
            if (!historyBookings[complexName]) {
              historyBookings[complexName] = {
                id: complex.id,
                address: complex.address,
                fields: {},
              };
            }
            if (!historyBookings[complexName].fields[fieldName]) {
              historyBookings[complexName].fields[fieldName] = {};
            }
            historyBookings[complexName].fields[fieldName][day] =
              complex.fields[fieldName][day];
          }
        });
      });
    });

    return { upcomingBookings, historyBookings };
  };

  const groupedAndSortedBookings = groupAndSortBookings(grounds);

  const currentDate = new Date().toISOString().split("T")[0];
  const { upcomingBookings, historyBookings } =
    separateUpcomingAndHistoryBookings(groupedAndSortedBookings, currentDate);

  console.log("upcomingBookings...", upcomingBookings);
  console.log("historyBookings...", historyBookings);
  console.log("groupedAndSortedBookings...", groupedAndSortedBookings);

  return (
    <section className="col-span-full md:col-span-6 md:grid md:grid-cols-6 flex flex-col gap-[24px]">
      <div className="col-span-full flex flex-col gap-[24px]">
        <h3 className="text-[16px] md:text-[32px] md:leading-[1.2em] font-semibold leading-[1.3em] text-gray100Primary] md:col-span-full">
          Booking History
        </h3>
        <div className="flex gap-[24px] text-[16px] leading-[1.3em] font font-normal text-gray50 h-[37px]">
          <button
            className={classNames("cursor-pointer hover:text-gray100Primary", {
              "text-gray100Primary border-b-[2px] border-primaryGreen100":
                activePage === "upcoming",
            })}
            onClick={() => changePage("upcoming")}
          >
            Upcoming
          </button>
          <button
            className={classNames("cursor-pointer hover:text-gray100Primary", {
              "text-gray100Primary border-b-[2px] border-primaryGreen100":
                activePage === "history",
            })}
            onClick={() => changePage("history")}
          >
            History
          </button>
        </div>
      </div>
      {isLoading ? (
        <div className="col-span-full">
          <Loader />
        </div>
      ) : (
        <>
          {activePage === "history" && (
            <BlockBookingHistory bookings={historyBookings} />
          )}
          {activePage === "upcoming" && (
            <BlockBookingHistory bookings={upcomingBookings} />
          )}
        </>
      )}
    </section>
  );
}
