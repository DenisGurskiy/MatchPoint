"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

type Props = {
  isOpen: boolean;
  setIsOpen: (flag: boolean) => void;
  setIsActive: (flag: boolean) => void;
};

export const Navigation: React.FC<Props> = ({
  isOpen,
  setIsOpen,
  setIsActive,
}) => {
  const pathname = usePathname();

  return (
    <nav className="ownContainer md:ownGrid flex justify-between">
      <div className="flex items-center md:col-span-3">
        <div className="mr-[16px] md:hidden">
          <Image
            className="cursor-pointer"
            src={isOpen ? "/images/close.png" : "/images/menu.png"}
            alt="logo"
            width={24}
            height={24}
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
        <Link href="/" className="relative w-[180px] h-[20px]">
          <Image
            src="/images/logo.png"
            alt="logo"
            fill
            style={{ objectFit: "contain" }}
            onClick={() => setIsOpen(false)}
          />
        </Link>
      </div>
      <div className="flex md:hidden">
        <Image
          className="cursor-pointer"
          src="/images/Search.png"
          alt="logo"
          width={24}
          height={24}
          onClick={() => setIsOpen(false)}
        />
      </div>
      <div className="col-end-13 col-span-3 md:flex justify-between hidden">
        <Link href="/about" className="w-[82px] flex items-center">
          <Button variant="search" isActive={pathname === "/about"}>
            About
          </Button>
        </Link>
        <div className="w-[100px]" onClick={() => setIsActive(true)}>
          <Button variant="secondary" isActive={pathname === "/login"}>
            Log in
          </Button>
        </div>
        {/* <Link href="/login" className="w-[100px]">
          <Button variant="secondary" isActive={pathname === "/login"}>
            Log in
          </Button>
        </Link> */}
      </div>
    </nav>
  );
};
