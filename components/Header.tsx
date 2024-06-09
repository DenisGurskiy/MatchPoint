"use client";

import Link from "next/link";
import { Button } from "./ui/button";

import { Navigation } from "./Navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { LoginForm } from "@/components/LoginForm";
import { Modal } from "./ui/modal";

export const Header = () => {
  const [isLoginFormActive, setIsLoginFormActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState<"login" | "signup">("login");

  useEffect(() => {
    if (isOpen || isLoginFormActive) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen, isLoginFormActive]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const setLoginForm = () => {
    setModal("login");
    setIsLoginFormActive(true);
  };

  return (
    <header className="fixed top-0 z-40 bg-white w-full flex justify-center items-center md:h-[80px] h-[56px] border-b-[1px] border-gray20divider">
      <Navigation
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setIsActive={setLoginForm}
      />
      <nav
        className={cn(
          isOpen ? "translate-x-0" : "-translate-x-full",
          "md:hidden overflow-hidden w-full fixed top-[56px] full_height z-10 bg-white transition-transf orm transform px-[20px] py-[24px] flex flex-col gap-y-[4px]"
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
            <div
              className="flex items-center h-[53px] border-b-[1px] border-gray20divider w-full cursor-pointer"
              onClick={() => {
                setModal((prev) => "login");
                setIsLoginFormActive(true);
                toggleMenu();
              }}
            >
              <Button variant="mobileTinyText" className="text-left">
                Log in
              </Button>
            </div>
            <div
              className="w-full flex items-center h-[53px] border-b-[1px] border-gray20divider"
              onClick={() => {
                setModal((prev) => "signup");
                setIsLoginFormActive(true);
                toggleMenu();
              }}
            >
              <Button variant="mobileTinyText" className="text-left">
                Sign Up
              </Button>
            </div>
          </>
        ) : (
          <div className="mt-[40px] flex flex-col gap-y-[4px]">
            <h3 className="text-[16px] leading-[1.3em] font-semibold">
              Account
            </h3>
            <Link
              href="/account/personalInfo"
              className="w-full flex items-center h-[53px] border-b-[1px] border-gray20divider"
              onClick={toggleMenu}
            >
              <Button variant="mobileTinyText" className="text-left">
                Personal info
              </Button>
            </Link>
            <Link
              href="/account/history"
              className="w-full flex items-center h-[53px] border-b-[1px] border-gray20divider"
              onClick={toggleMenu}
            >
              <Button variant="mobileTinyText" className="text-left">
                Booking History
              </Button>
            </Link>
            <Link
              href="/account/password"
              className="w-full flex items-center h-[53px] border-b-[1px] border-gray20divider"
              onClick={toggleMenu}
            >
              <Button variant="mobileTinyText" className="text-left">
                Password
              </Button>
            </Link>
            <Link
              href="/account/delete"
              className="w-full flex items-center h-[53px] border-b-[1px] border-gray20divider"
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
              className="w-full flex items-center h-[53px] border-b-[1px] border-gray20divider"
              onClick={toggleMenu}
            >
              <Button variant="mobileTinyText" className="text-left">
                Log Out
              </Button>
            </Link>
          </div>
        )}
      </nav>
      <Modal isActive={isLoginFormActive} setIsActive={setIsLoginFormActive}>
        <LoginForm
          setIsActive={setIsLoginFormActive}
          custom={modal}
          setCustom={setModal}
        />
      </Modal>
    </header>
  );
};
