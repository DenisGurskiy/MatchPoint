"use client";

import React, { FC } from "react";
import { Button } from "./ui/button";
import { DropDown } from "./ui/dropDown";
import { DropDownDatePicker } from "./ui/dropDownDatePicker";
import Link from "next/link";
import Image from "next/image";

type Props = {
  setIsActive: (flag: boolean) => void;
};

export const SearchFormHeader: FC<Props> = ({ setIsActive }) => {
  return (
    <form className="md:relative absolute md:top-[96px] w-full md:max-w-[1152px] h-dvh col-span-full row-span-2 bg-white rounded-[4px] md:rounded-[100px] md:h-[80px] flex md:flex-row flex-col md:justify-between md:p-[16px] px-[20px] py-[24px] md:gap-0 gap-[8px] border-[0px] md:border-[1px] border-gray20divider">
      <div
        className="md:hidden flex justify-end"
        onClick={() => setIsActive(false)}
      >
        <Image
          className="cursor-pointer"
          src="/images/close.svg"
          alt="logo"
          width={24}
          height={24}
        />
      </div>
      <div className="px-[16px] py-[8px] md:py-0 md:flex-1 md:border-none border-b-[1px] border-gray20divider relative">
        <label htmlFor="city" className="w-full">
          <DropDown
            question="Where?"
            title="Choose city"
            options={["Kyiv", "Lviv", "Odessa"]}
          />
        </label>
      </div>
      <div className="px-[16px] py-[8px] md:py-0 md:flex-1 md:border-none border-b-[1px] border-gray20divider relative">
        <label htmlFor="activity" className="w-full">
          <DropDown
            question="What are you planning?"
            title="Choose an activity"
            options={["Football", "Tennis", "Volleyball"]}
          />
        </label>
      </div>
      <div className="px-[16px] py-[8px] md:py-0 md:flex-1 md:border-none">
        <label htmlFor="date" className="w-full">
          <DropDownDatePicker question="On what date?" title="Choose date" />
        </label>
      </div>
      <Link
        href="/grounds"
        onClick={() => setIsActive(false)}
        className="md:w-[100px] w-full mt-[8px] md:mt-0"
      >
        <Button variant="primary">Search</Button>
      </Link>
    </form>
  );
};
