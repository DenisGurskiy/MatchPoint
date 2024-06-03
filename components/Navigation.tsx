"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className="ownContainer md:ownGrid flex justify-between">
      <div className="flex items-center md:col-span-3">
        <div className="mr-[16px] md:hidden">
          <Image
            className="cursor-pointer"
            src="/images/menu.png"
            alt="logo"
            width={24}
            height={24}
          />
        </div>
        <Link href="/" className="relative w-[180px] h-[20px]">
          <Image
            src="/images/logo.png"
            alt="logo"
            fill
            style={{ objectFit: "contain" }}
          />
        </Link>
      </div>
      <div className="flex md:hidden">
        <Image
          className="cursor-pointer"
          src="/images/search.png"
          alt="logo"
          width={24}
          height={24}
        />
      </div>
      <div className="col-end-13 col-span-3 md:flex justify-between hidden">
        <Link href="/about" className="w-[82px] flex items-center">
          <Button variant="search" isActive={pathname === "/about"}>
            About
          </Button>
        </Link>
        <Link href="/login" className="w-[100px]">
          <Button variant="secondary" isActive={pathname === "/login"}>
            Log in
          </Button>
        </Link>
      </div>
    </nav>
  );
};
