"use client";

import React, { FC } from "react";
import { Button } from "./ui/button";
import { DropDown } from "./ui/dropDown";
import { DropDownDatePicker } from "./ui/dropDownDatePicker";
import Link from "next/link";

export const SearchFormMobile: FC = () => {
  return (
    <form className="w-full max-w-[480px] md:max-w-[1152px] m-auto col-span-full row-span-2 bg-white rounded-[4px] md:rounded-[100px] md:h-[80px] flex md:flex-row flex-col justify-between p-[16px] border-[1px] border-gray20divider">
      <div className="px-[16px] py-[8px] md:py-0 flex-1 md:border-none border-b-[1px] border-gray20divider relative">
        <label htmlFor="city">
          <DropDown
            question="Where?"
            title="Choose city"
            options={["Kyiv", "Lviv", "Odessa"]}
          />
        </label>
      </div>
      <div className="px-[16px] py-[8px] md:py-0 flex-1 md:border-none border-b-[1px] border-gray20divider relative">
        <label htmlFor="activity">
          <DropDown
            question="What are you planning?"
            title="Choose an activity"
            options={["Football", "Tennis", "Volleyball"]}
          />
        </label>
      </div>
      <div className="px-[16px] py-[8px] md:py-0 flex-1 md:border-none">
        <label htmlFor="date">
          <DropDownDatePicker question="On what date?" title="Choose date" />
          {/* <DropDown
            question="On what date?"
            title="Choose date"
            options={[
              "01.06.24",
              "02.06.24",
              "03.06.24",
              "04.06.24",
              "03.06.24",
              "04.06.24",
            ]}
          /> */}
        </label>
      </div>
      {/* <label htmlFor="time" className="px-[16px] flex-1">
          <DropDown
            question="At what time?"
            title="Choose time"
            options={["AM (Before Noon)", "PM (After Noon)"]}
          />
        </label> */}
      <Link href="/grounds" className="md:w-[100px] w-full">
        <Button variant="primary">Search</Button>
      </Link>
    </form>
  );
};
