"use client";

import React, { FC, useEffect, useState } from "react";
import { format, parse } from "date-fns";
import { Button } from "./ui/button";
import { DropDown } from "./ui/dropDown";
import { DropDownDatePicker } from "./ui/dropDownDatePicker";
import Link from "next/link";
import { City } from "@/app/types/city";
import { Activity } from "@/app/types/activity";

export const SearchForm: FC = () => {
  const [location, setLocation] = useState<string>("");
  const [activity, setActivity] = useState<string>("");
  const [date, setDate] = useState<Date | null>(null);
  const [path, setPath] = useState<string>("/grounds");

  const cities = Object.values(City);
  const activities = Object.values(Activity);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const initialLocation = params.get("location");
    const initialActivity = params.get("activity");
    const initialDate = params.get("date");

    if (initialLocation) setLocation(initialLocation);
    if (initialActivity) setActivity(initialActivity);
    if (initialDate) setDate(parse(initialDate, "dd/MM/yyyy", new Date()));
  }, []);

  useEffect(() => {
    const params = new URLSearchParams();

    if (location) params.append("location", location);
    if (activity) params.append("activity", activity);
    if (date) params.append("date", format(date, "dd/MM/yyyy"));

    const queryString = params.toString();
    setPath(`/grounds${queryString ? `?${queryString}` : ""}`);
  }, [location, activity, date]);

  return (
    <form
      id="searchForm"
      className="w-full max-w-[480px] md:max-w-[1152px] m-auto col-span-full row-span-2 bg-white rounded-[4px] md:rounded-[100px] md:h-[80px] flex md:flex-row flex-col justify-between md:gap-[0px] gap-[8px] p-[16px] border-[1px] border-gray20divider"
    >
      <div className="px-[16px] py-[8px] md:py-0 flex-1 md:border-none border-b-[1px] border-gray20divider relative">
        <label htmlFor="city">
          <DropDown
            question="Where?"
            title="Choose city"
            options={cities}
            value={location}
            setValue={setLocation}
          />
        </label>
      </div>
      <div className="px-[16px] py-[8px] md:py-0 flex-1 md:border-none border-b-[1px] border-gray20divider relative">
        <label htmlFor="activity">
          <DropDown
            question="What are you planning?"
            title="Choose an activity"
            options={activities}
            value={activity}
            setValue={setActivity}
          />
        </label>
      </div>
      <div className="px-[16px] py-[8px] md:py-0 flex-1 md:border-none">
        <label htmlFor="date">
          <DropDownDatePicker
            question="On what date?"
            title="Choose date"
            value={date}
            setValue={setDate}
          />
        </label>
      </div>

      <Link href={path} className="md:w-[100px] w-full mt-[8px] md:mt-0">
        <Button variant="primary">Search</Button>
      </Link>
    </form>
  );
};
