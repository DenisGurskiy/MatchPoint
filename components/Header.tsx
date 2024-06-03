"use client";

import { Navigation } from "./Navigation";

export const Header = () => {
  return (
    <header className="w-full flex justify-center items-center md:h-[80px] h-[56px] border-b-[1px] border-gray20divider">
      <Navigation />
    </header>
  );
};
