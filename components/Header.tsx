"use client";

import { Navigation } from "./Navigation";

export const Header = () => {
  return (
    <header className="w-full flex justify-center items-center h-[80px] border-b-[1px] border-gray20divider">
      <Navigation />
    </header>
  );
};
