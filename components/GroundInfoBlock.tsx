"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { GroundType } from "@/app/types/ground";

type Props = {
  ground: GroundType;
};

export const GroundInfoBlock: React.FC<Props> = ({ ground }) => {
  const { name, phone, fields } = ground;

  return (
    <div className="w-full flex flex-col gap-[16px] mb-[16px]">
      <h3 className="text-[22px] md:text-[32px] font-semibold col-span-full">
        {name}
      </h3>
      <div className="col-span-full">
        {fields?.map((field) => (
          <Button key={field.id} variant="badge" className="mr-[10px]">
            {field.activity}
          </Button>
        ))}
      </div>
      <a
        href={`https://www.google.com/maps/search/?api=1&query=${ground.address}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex gap-[5px] col-span-full"
      >
        <Image
          className="cursor-pointer"
          src="/images/location.svg"
          alt="logo"
          width={24}
          height={24}
        />
        <p className="text-gray100Primary text-[16px] font-normal">
          {ground.address}
        </p>
      </a>
      <a href="tel: +380888888888" className="flex gap-[5px] col-span-full">
        <Image
          className="cursor-pointer"
          src="/images/phone.svg"
          alt="logo"
          width={24}
          height={24}
        />
        <p className="text-gray100Primary text-[16px] font-normal">{phone}</p>
      </a>
    </div>
  );
};
