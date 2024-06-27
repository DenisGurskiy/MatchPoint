"use client";

import { BackButton } from "@/components/ui/backButton";
import { format } from "date-fns";
import { useState, useEffect } from "react";
import { LoginForm } from "@/components/LoginForm";
import { Modal } from "@/components/ui/modal";
import { BlockBooking } from "@/components/Grounds/BlockBooking";
import { BlockBookingConfirmed } from "@/components/Grounds/BlockBookingConfirmed";
import { BlockError } from "@/components/Grounds/BlockError";
import { ModalError } from "@/components/ui/modalError";
import { useAuth } from "@/components/AuthContext";
import { GroundType } from "@/app/types/ground";
import { Loader } from "@/components/ui/loader";
import { GroundPicture } from "@/components/ui/groundPicture";
import { BlockBookingDetails } from "@/components/Grounds/BlockBookingDetails";
import { GroundInfoBlock } from "@/components/Grounds/GroundInfoBlock";
import { Field } from "@/app/types/field";
import { GroundChoseActivityBlock } from "@/components/Grounds/GroundChoseActivityBlock";
import { GroundSlotsBlock } from "@/components/Grounds/GroundSlotsBlock";
import { Booking } from "@/app/types/booking";
import { GroupedSlots } from "@/app/types/groupedSlots";

type Props = {
  params: {
    id: string;
  };
};

export default function Ground({ params: { id } }: Props) {
  const { user } = useAuth();
  const [pickSlots, setPickSlots] = useState<GroupedSlots>({});

  const [ground, setGround] = useState<GroundType | null>(null);
  const [field, setField] = useState<Field | null>(null);
  const [bookings, setBookings] = useState<Booking[] | []>([]);
  const [loading, setLoading] = useState(false);

  const [isOpenBook, setIsOpenBook] = useState(false);

  const [isLoginFormActive, setIsLoginFormActive] = useState(false);
  const [isBookingFormActive, setIsBookingFormActive] = useState(false);
  const [isConfirmFormActive, setIsConfirmFormActive] = useState(false);
  const [error, setError] = useState("");
  const [modal, setModal] = useState<"login" | "signup">("login");

  useEffect(() => {
    if (
      isOpenBook ||
      isLoginFormActive ||
      isBookingFormActive ||
      isConfirmFormActive ||
      error
    ) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [
    isOpenBook,
    isLoginFormActive,
    isBookingFormActive,
    isConfirmFormActive,
    error,
  ]);

  const url = `https://sportspace.onrender.com/api/service/sports-complexes/${id}`;

  useEffect(() => {
    if (ground && field) {
      const selectedField = ground.fields?.find(
        (eachField) => eachField.id === field.id
      );
      if (selectedField) {
        setBookings(selectedField.bookings);
      } else {
        setBookings([]);
      }
    } else {
      setBookings([]);
    }
    setPickSlots({});
  }, [field, ground]);

  useEffect(() => {
    setLoading(true);
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setGround(data);
        setField(data.fields[0]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  const choseSlot = (day: Date, hour: number) => {
    setPickSlots((prevSlots) => {
      const formattedDay = format(day, "yyyy-MM-dd");
      const newSlots = { ...prevSlots };

      if (!newSlots[formattedDay]) {
        newSlots[formattedDay] = {};
      }

      const newDaySlots = { ...newSlots[formattedDay] };

      if (newDaySlots[hour]) {
        delete newDaySlots[hour];
        if (Object.keys(newDaySlots).length === 0) {
          delete newSlots[formattedDay];
        } else {
          newSlots[formattedDay] = newDaySlots;
        }
      } else {
        newDaySlots[hour] = true;
        newSlots[formattedDay] = newDaySlots;
      }

      return newSlots;
    });
  };

  const handleBook = () => {
    if (user) {
      setIsBookingFormActive(true);
    } else {
      setIsLoginFormActive(true);
    }
  };

  const handleConfirm = () => {
    setIsConfirmFormActive(true);
  };

  const handleError = (message: string) => {
    setError(message);
  };

  const handleClearSlots = () => {
    setPickSlots({});
  };

  const calculateTotalAmount = (pricePerSlot: number) => {
    let totalSlots = 0;

    Object.values(pickSlots).forEach((times) => {
      totalSlots += Object.keys(times).length;
    });

    return totalSlots * pricePerSlot;
  };

  const pricePerSlot = field?.price || 0;
  const amount = calculateTotalAmount(pricePerSlot);

  return (
    <>
      <section className="ownContainer ownGrid md:mb-[60px] mb-[32px] pt-[24px] gap-y-[24px]">
        <BackButton />
        <GroundPicture id={id} />
        {loading ? (
          <div className="col-span-full">
            <Loader />
          </div>
        ) : (
          <>
            {ground && (
              <>
                <div className="col-span-full lg:col-span-8 flex flex-col gap-[16px]">
                  <GroundInfoBlock ground={ground} />
                  <GroundChoseActivityBlock
                    ground={ground}
                    field={field}
                    setField={setField}
                  />
                  <GroundSlotsBlock
                    bookings={bookings}
                    pickSlots={pickSlots}
                    choseSlot={choseSlot}
                    user={user || null}
                  />
                  <div className="hidden md:flex flex-col gap-[8px] mt-[16px] text-[16px] leading-[1.3em]">
                    <h3 className="mb-[8px] font-semibold text-gray100Primary">
                      Opening Times
                    </h3>
                    <p className="font-normal text-gray50">
                      Monday 08:00–22:00
                    </p>
                    <p className="font-normal text-gray50">
                      Tuesday 08:00–22:00
                    </p>
                    <p className="font-normal text-gray50">
                      Wednesday 08:00–22:00
                    </p>
                    <p className="font-normal text-gray50">
                      Thursday 08:00–22:00
                    </p>
                    <p className="font-normal text-gray50">
                      Friday 08:00–22:00
                    </p>
                    <p className="font-normal text-gray50">
                      Saturday 08:00–22:00
                    </p>
                    <p className="font-normal text-gray50">
                      Sunday 08:00–22:00
                    </p>
                  </div>
                </div>
                <BlockBookingDetails
                  pickSlots={pickSlots}
                  isOpenBook={isOpenBook}
                  setIsOpenBook={setIsOpenBook}
                  choseSlot={choseSlot}
                  handleBook={handleBook}
                  amount={amount}
                />
              </>
            )}
          </>
        )}
      </section>
      <Modal isActive={isLoginFormActive} setIsActive={setIsLoginFormActive}>
        <LoginForm
          setIsActive={setIsLoginFormActive}
          custom={modal}
          setCustom={setModal}
        />
      </Modal>
      {ground && field && (
        <Modal
          isActive={isBookingFormActive}
          setIsActive={setIsBookingFormActive}
        >
          <BlockBooking
            user={user}
            setIsActive={setIsBookingFormActive}
            setPayIsOk={handleConfirm}
            setError={handleError}
            pickSlots={pickSlots}
            field={field}
            amount={amount}
            ground={ground}
            setBookings={setBookings}
          />
        </Modal>
      )}
      <ModalError isActive={!!error.length} setError={setError}>
        <BlockError setError={setError} error={error} />
      </ModalError>
      {ground && (
        <Modal
          isActive={isConfirmFormActive}
          setIsActive={setIsConfirmFormActive}
        >
          <BlockBookingConfirmed
            setIsActive={setIsConfirmFormActive}
            setConfirm={handleClearSlots}
            pickSlots={pickSlots}
            ground={ground}
          />
        </Modal>
      )}
    </>
  );
}
