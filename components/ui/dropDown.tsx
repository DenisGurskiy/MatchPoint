"use client";

import { FC, useState } from "react";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

type Props = {
  question: string;
  title: string;
  options: string[];
};

export const DropDown: FC<Props> = ({ question, title, options }) => {
  const [value, setValue] = useState<string>(title);

  return (
    <Menu as="div" className="relative w-full inline-block">
      <div>
        <MenuButton className="text-left w-full">
          <span className="text-gray100Primary font-normal text-[14px] leading-[18.9px]">
            {question}
          </span>
          <div
            className={classNames(
              value === title ? "text-gray50" : "text-gray100Primary",
              "inline-flex w-full justify-between font-normal text-[16px] leading-[20.8px]"
            )}
          >
            {value}
            <ChevronDownIcon
              className="w-[24px] text-gray100Primary"
              aria-hidden="true"
            />
          </div>
        </MenuButton>
      </div>

      <Transition
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg focus:outline-none">
          <ul className="py-1">
            {options.map((option) => (
              <MenuItem key={option}>
                {({ focus }) => (
                  <li
                    onClick={() => setValue(option)}
                    className={classNames(
                      focus ? "text-gray50" : "text-gray50",
                      "px-4 py-2 text-[16px] cursor-pointer hover:text-gray100Primary"
                    )}
                  >
                    {option}
                  </li>
                )}
              </MenuItem>
            ))}
          </ul>
        </MenuItems>
      </Transition>
    </Menu>
  );
};
