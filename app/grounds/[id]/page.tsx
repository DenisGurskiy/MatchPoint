"use client";

import { BackButton } from "@/components/ui/backButton";
import { format } from "date-fns";
import { useState, useEffect } from "react";
import { LoginForm } from "@/components/LoginForm";
import { Modal } from "@/components/ui/modal";
import { BlockBooking } from "@/components/BlockBooking";
import { BlockBookingConfirmed } from "@/components/BlockBookingConfirmed";
import { BlockError } from "@/components/BlockError";
import { ModalError } from "@/components/ui/modalError";
import { useAuth } from "@/components/AuthContext";
import { GroundType } from "@/app/types/ground";
import { Loader } from "@/components/ui/loader";
import { GroundPicture } from "@/components/ui/groundPicture";
import { BlockBookingDetails } from "@/components/BlockBookingDetails";
import { GroundInfoBlock } from "@/components/GroundInfoBlock";
import { Field } from "@/app/types/field";
import { GroundChoseActivityBlock } from "@/components/GroundChoseActivityBlock";
import { GroundSlotsBlock } from "@/components/GroundSlotsBlock";

type Props = {
  params: {
    id: string;
  };
};

export default function Ground({ params: { id } }: Props) {
  const { user } = useAuth();
  const [pickSlots, setPickSlots] = useState<Set<string>>(new Set());
  const [ground, setGround] = useState<GroundType | null>(null);
  const [field, setField] = useState<Field | null>(null);
  const [loading, setLoading] = useState(false);

  const [isOpenBook, setIsOpenBook] = useState(false);

  const [isLoginFormActive, setIsLoginFormActive] = useState(false);
  const [isBookingFormActive, setIsBookingFormActive] = useState(false);
  const [isConfirmFormActive, setIsConfirmFormActive] = useState(false);
  const [isErrorFormActive, setIsErrorFormActive] = useState(false);
  const [modal, setModal] = useState<"login" | "signup">("login");

  useEffect(() => {
    if (
      isOpenBook ||
      isLoginFormActive ||
      isBookingFormActive ||
      isConfirmFormActive ||
      isErrorFormActive
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
    isErrorFormActive,
  ]);

  const url = `https://sportspace.onrender.com/api/service/sports-complexes/${id}`;

  useEffect(() => {
    setPickSlots(new Set());
  }, [field]);

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

        console.log("Response data:", data);
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
      const slot = JSON.stringify({
        day: format(day, "yyyy-MM-dd"),
        time: hour,
      });
      const newSlots = new Set(prevSlots);
      if (newSlots.has(slot)) {
        newSlots.delete(slot);
      } else {
        newSlots.add(slot);
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

  const handleClearSlots = () => {
    setPickSlots(new Set());
  };

  const amount = (field?.price || 0) * pickSlots.size;

  console.log("pickSlots...", pickSlots);

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
                    pickSlots={pickSlots}
                    choseSlot={choseSlot}
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
            setIsActive={setIsBookingFormActive}
            setPayIsOk={handleConfirm}
            pickSlots={pickSlots}
            field={field}
            amount={amount}
            ground={ground}
          />
        </Modal>
      )}
      <ModalError
        isActive={isErrorFormActive}
        setIsActive={setIsErrorFormActive}
      >
        <BlockError setIsActive={setIsErrorFormActive} />
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
