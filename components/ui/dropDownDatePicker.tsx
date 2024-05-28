"use client";

import { FC, forwardRef, useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import classNames from "classnames";

type Props = {
  question: string;
  title: string;
};

type CustomInputProps = {
  value?: string;
  onClick?: () => void;
};

export const DropDownDatePicker: FC<Props> = ({ question, title }) => {
  const [value, setValue] = useState<Date>(new Date());

  const handleSelectOption = (currentValue: Date) => {
    setValue(currentValue);
  };

  const ExampleCustomInput = forwardRef<HTMLDivElement, CustomInputProps>(
    ({ value, onClick }, ref) => (
      <div className="relative w-full inline-block px-[16px]" ref={ref}>
        <button type="button" className="text-left w-full" onClick={onClick}>
          <span className="text-gray100Primary font-normal text-[14px] leading-[18.9px]">
            {question}
          </span>
          <div
            className={classNames(
              "inline-flex w-full justify-between item-center font-normal text-[16px] text-gray100Primary",
              {
                "text-gray50": value?.toString() === title,
              }
            )}
          >
            {value}
            <div className="w-[24px] h-[24px] text-gray100Primary bg-[url('/images/down.png')]"></div>
          </div>
        </button>
      </div>
    )
  );

  ExampleCustomInput.displayName = "ExampleCustomInput";

  return (
    <DatePicker
      dateFormat="dd/MM/yyyy"
      minDate={new Date()}
      selected={value}
      onChange={(date: Date) => handleSelectOption(date)}
      customInput={<ExampleCustomInput />}
    />
  );
};
