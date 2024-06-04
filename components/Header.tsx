"use client";

import Link from "next/link";
import { Button } from "./ui/button";

import { Navigation } from "./Navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="relative w-full flex justify-center items-center md:h-[80px] h-[56px] border-b-[1px] border-gray20divider">
      <Navigation isOpen={isOpen} setIsOpen={setIsOpen} />
      <nav
        className={cn(
          isOpen ? "translate-x-0" : "-translate-x-full",
          "md:hidden overflow-hidden w-full fixed top-[56px] full_height z-10 bg-white transition-transform transform px-[20px] py-[24px] flex flex-col gap-y-[4px]"
        )}
      >
        <Link
          href="/about"
          className="flex items-center h-[53px] border-b-[1px] border-gray20divider"
          onClick={toggleMenu}
        >
          <Button variant="mobileTinyText" className="text-left">
            About
          </Button>
        </Link>
        {false ? (
          <>
            <Link
              href="/login"
              className="flex items-center h-[53px] border-b-[1px] border-gray20divider"
              onClick={toggleMenu}
            >
              <Button variant="mobileTinyText" className="text-left">
                Log in
              </Button>
            </Link>
            <Link
              href="/signup"
              className="flex items-center h-[53px] border-b-[1px] border-gray20divider"
              onClick={toggleMenu}
            >
              <Button variant="mobileTinyText" className="text-left">
                Sign Up
              </Button>
            </Link>
          </>
        ) : (
          <div className="mt-[40px] flex flex-col gap-y-[4px]">
            <h3 className="text-[16px] leading-[1.3em] font-semibold">
              Account
            </h3>
            <Link
              href="/personal"
              className="flex items-center h-[53px] border-b-[1px] border-gray20divider"
              onClick={toggleMenu}
            >
              <Button variant="mobileTinyText" className="text-left">
                Personal info
              </Button>
            </Link>
            <Link
              href="/history"
              className="flex items-center h-[53px] border-b-[1px] border-gray20divider"
              onClick={toggleMenu}
            >
              <Button variant="mobileTinyText" className="text-left">
                Booking History
              </Button>
            </Link>
            <Link
              href="/changepassword"
              className="flex items-center h-[53px] border-b-[1px] border-gray20divider"
              onClick={toggleMenu}
            >
              <Button variant="mobileTinyText" className="text-left">
                Password
              </Button>
            </Link>
            <Link
              href="/deleteaccount"
              className="flex items-center h-[53px] border-b-[1px] border-gray20divider"
              onClick={toggleMenu}
            >
              <Button
                variant="mobileTinyText"
                className="text-left text-systemRedError"
              >
                Delete Account
              </Button>
            </Link>
            <Link
              href="/logout"
              className="flex items-center h-[53px] border-b-[1px] border-gray20divider"
              onClick={toggleMenu}
            >
              <Button variant="mobileTinyText" className="text-left">
                Log Out
              </Button>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};
