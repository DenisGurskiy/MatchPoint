"use client";

import { FC, useEffect, useRef, useState } from "react";
import classNames from "classnames";

type Props = {
  title: string;
  options: string[];
  value: string;
  setValue: (value: string) => void;
};

export const DropDownCity: FC<Props> = ({
  title,
  options,
  value,
  setValue,
}) => {
  // const [value, setValue] = useState<string>(title);

  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const dropdownRef = useRef<HTMLUListElement>(null);

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
    handleDropDownTrigger();
  };

  return (
    <>
      <div className="inline-block relative ml-[8px]">
        <button
          type="button"
          className="text-left"
          onClick={handleDropDownTrigger}
        >
          <div className="flex justify-center item-center gap-[4px] md:text-[32px] text-[22px] font-semibold leading-[1.3em] text-primaryGreen100 hover:text-primaryGreen30">
            <p className="self-center">{value}</p>
            <svg
              className="self-center"
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="24pt"
              height="24pt"
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0,24) scale(0.1,-0.1)"
                fill="currentColor"
                stroke="none"
              >
                <path d="M40 154 c0 -5 18 -28 40 -49 l40 -39 40 39 c22 21 40 44 40 49 0 6 -18 -8 -40 -29 l-40 -39 -40 39 c-22 21 -40 35 -40 29z" />
              </g>
            </svg>
          </div>
        </button>
        <ul
          className={classNames(
            "absolute list-none w-[140px] bg-white top-[50px] left-0 rounded-[4px] max-h-[162px] overflow-auto border-[1px] border-gray20divider z-10",
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
                "px-[8px] py-[8px] text-[16px] h-[40px] cursor-pointer font-normal text-gray100Primary flex items-center",
                {
                  "text-primaryGreen100": option === value,
                }
              )}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
