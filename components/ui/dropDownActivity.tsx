"use client";

import { FC, useEffect, useRef, useState } from "react";
import classNames from "classnames";

type Props = {
  question: string;
  title: string;
  options: string[];
};

export const DropDownActivity: FC<Props> = ({ question, title, options }) => {
  const [value, setValue] = useState<string>(title);
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const dropdownRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);

  const handleDropDownTrigger = () => setIsDropdownActive((prev) => !prev);

  const handleSelectOption = (currentValue: string) => {
    setValue(currentValue);
    setIsDropdownActive((prev) => !prev);
  };

  return (
    <>
      <div className="w-full inline-block">
        <button
          type="button"
          className="text-left w-full"
          onClick={handleDropDownTrigger}
        >
          <span className="text-gray100Primary font-normal text-[14px] leading-[1.35em] block mb-[8px]">
            {question}
          </span>
          <div
            className={classNames(
              "flex w-full justify-between items-center font-normal text-[16px] leading-[1.3em] text-gray100Primary border-[1px] px-[16px] h-[48px] rounded-[4px]",
              {
                "text-gray50": value === title,
              }
            )}
          >
            <p>{value}</p>
            <div className="w-[24px] h-[24px] text-gray100Primary bg-[url('/images/down.svg')]"></div>
          </div>
        </button>
      </div>

      <ul
        className={classNames(
          "absolute list-none w-full bg-white top-[90px] left-0 rounded-[4px] max-h-[160px] overflow-auto border-[1px] border-gray20divider color-test z-10",
          {
            "hidden ": !isDropdownActive,
          }
        )}
        ref={dropdownRef}
      >
        {options.map((option) => (
          <li
            key={option}
            onClick={() => handleSelectOption(option)}
            className={classNames(
              "px-[8px] py-[8px] text-[16px] h-[40px] cursor-pointer text-gray100Primary",
              {
                "text-primaryGreen100": option === value,
              }
            )}
          >
            {option}
          </li>
        ))}
      </ul>
    </>
  );
};
