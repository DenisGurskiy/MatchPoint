"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { GroundType } from "@/app/types/ground";
import { Field } from "@/app/types/field";
import { DropDownActivity } from "../ui/dropDownActivity";

type Props = {
  ground: GroundType;
  field: Field | null;
  setField: React.Dispatch<React.SetStateAction<Field | null>>;
};

export const GroundChoseActivityBlock: React.FC<Props> = ({
  ground,
  field,
  setField,
}) => {
  return (
    <div className="flex items-end gap-[16px] md:gap-[24px]">
      <div className="w-[210px] md:col-span-4 relative">
        <label htmlFor="activity">
          <DropDownActivity
            question="Choose the type of field"
            title={field?.activity || "Outdoor field"}
            value={field}
            setValue={setField}
            fields={ground?.fields}
          />
        </label>
      </div>
      <div className="hidden md:block text-[16px] font-semibold text-gray100Primary leading-[48px] pr-[20px]">{`${+(
        field?.price ?? 0
      )} uah/hour`}</div>
      <div className=" md:hidden text-[16px] font-semibold text-gray100Primary leading-[48px] pr-[20px]">{`${+(
        field?.price ?? 0
      )} uah/hr`}</div>
    </div>
  );
};
