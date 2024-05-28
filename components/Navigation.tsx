"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className="ownContainer ownGrid">
      <div className="flex items-center col-span-3">
        <Link href="/" className="relative w-[180px] h-[20px]">
          <Image
            src="/images/logo.png"
            alt="logo"
            layout="fill"
            objectFit="contain"
          />
        </Link>
      </div>
      <div className="col-end-13 col-span-3 flex justify-between">
        <Link href="/about">
          <Button variant="search" isActive={pathname === "/about"}>
            About
          </Button>
        </Link>
        <Link href="/login">
          <Button variant="secondary" isActive={pathname === "/login"}>
            Log in
          </Button>
        </Link>
      </div>
    </nav>
  );
};
