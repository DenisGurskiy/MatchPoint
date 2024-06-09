"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Account({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <div className="ownContainer ownGrid pt-[24px] pb-[60px]">
      <div className="col-span-full md:col-span-3">
        <h2 className="text-left md:hidden text-[22px] font-semibold leading-[1.2em] text-gray100Primary">
          Account
        </h2>
        <nav className="hidden md:flex w-full">
          <ul className="flex flex-col gap-y-[32px] w-full">
            <li>
              <Link href="/account/personalInfo" className="flex items-center">
                <Button
                  variant="text"
                  isActive={pathname === "/account/personalInfo"}
                >
                  Personal info
                </Button>
              </Link>
            </li>
            <li>
              <Link href="/account/history" className="flex items-center">
                <Button
                  variant="text"
                  isActive={pathname === "/account/history"}
                >
                  Booking History
                </Button>
              </Link>
            </li>
            <li>
              <Link href="/account/password" className="flex items-center">
                <Button
                  variant="text"
                  isActive={pathname === "/account/password"}
                >
                  Password
                </Button>
              </Link>
            </li>
            <li>
              <Link href="/account/delete" className="flex items-center">
                <Button
                  variant="text"
                  isActive={pathname === "/account/delete"}
                  className="text-left text-systemRedError"
                >
                  Delete Account
                </Button>
              </Link>
            </li>
            <li>
              <Link href="/logout" className="flex items-center">
                <Button variant="text" isActive={pathname === "/logout"}>
                  Log Out
                </Button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {children}
    </div>
  );
}
