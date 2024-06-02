import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export const Footer = () => {
  return (
    <footer className="w-full flex flex-col justify-center items-center h-[141px] bg-gray100Primary">
      <div className="ownContainer flex-1 flex items-center">
        <div className="w-full flex justify-between items-center">
          <Link href="/" className="relative w-[180px] h-[20px]">
            <Image
              src="/images/logo_darkmode.png"
              alt="logo"
              fill
              style={{ objectFit: "contain" }}
            />
          </Link>
          <div className="social flex justify-between gap-[24px]">
            <a href="https://instagram.com" target="_blank">
              <Image
                className="cursor-pointer"
                src="/images/instagram_logo.png"
                alt="logo"
                width={24}
                height={24}
              />
            </a>
            <a href="https://facebook.com" target="_blank">
              <Image
                className="cursor-pointer"
                src="/images/facebook_logo.png"
                alt="logo"
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="divider w-full h-[1px] bg-divider"></div>
      <div className="ownContainer flex-1 flex items-center justify-between">
        <nav className="flex gap-[32px]">
          <Link href="/contact">
            <Button variant="darkText">Contact</Button>
          </Link>
          <Link href="/about">
            <Button variant="darkText">About</Button>
          </Link>
          <Link href="/about#FAQs">
            <Button variant="darkText">FAQs</Button>
          </Link>
          <Link href="/privacy">
            <Button variant="darkText">Privacy Policy</Button>
          </Link>
          <Link href="/terms">
            <Button variant="darkText">Terms</Button>
          </Link>
        </nav>
        <p className="text-gray30Disabled">
          Created by SportSpace Team in 2024
        </p>
      </div>
    </footer>
  );
};
