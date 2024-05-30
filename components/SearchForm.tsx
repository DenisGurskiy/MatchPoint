"use client";

import React, { FC } from "react";
import { Button } from "./ui/button";
import { DropDown } from "./ui/dropDown";
import { DropDownDatePicker } from "./ui/dropDownDatePicker";

export const SearchForm: FC = () => {
  return (
    <div className="ownContainer absolute ownGrid">
      <h1 className="text-[40px] font-semibold text-white leading-[48px] col-span-7 mb-[82px] row-span-1">
        Convenient online booking for your favorite sports grounds
      </h1>
      <form className="w-full col-span-full row-span-2 bg-white rounded-[100px] h-[80px] flex justify-between p-[16px] gap-[8px]">
        <label htmlFor="city" className="px-[16px] flex-1">
          <DropDown
            question="Where?"
            title="Choose city"
            options={["Kyiv", "Lviv", "Odessa"]}
          />
        </label>
        <label htmlFor="activity" className="flex-1">
          <DropDown
            question="What are you planning?"
            title="Choose an activity"
            options={["Football", "Tennis", "Volleyball"]}
          />
        </label>
        <label htmlFor="date" className="px-[16px] flex-1">
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
        {/* <label htmlFor="time" className="px-[16px] flex-1">
          <DropDown
            question="At what time?"
            title="Choose time"
            options={["AM (Before Noon)", "PM (After Noon)"]}
          />
        </label> */}
        <div className="w-[100px]">
          <Button variant="primary">Search</Button>
        </div>
      </form>
    </div>
  );
};
