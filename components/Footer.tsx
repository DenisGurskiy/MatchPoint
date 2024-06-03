import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export const Footer = () => {
  return (
    <footer className="w-full flex flex-col justify-center items-center md:h-[141px] bg-gray100Primary py-[16px] md:py-0">
      <div className="ownContainer flex-1 flex items-center py-[18px]">
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
      <div className="ownContainer flex-1 md:flex ownGridSmall items-center justify-between">
        <nav className="flex flex-col md:flex-row md:gap-[32px]">
          <Link href="/contact">
            <Button variant="darkText" className="text-left h-[45px]">
              Contact
            </Button>
          </Link>
          <Link href="/about" className="text-left">
            <Button variant="darkText" className="text-left h-[45px]">
              About
            </Button>
          </Link>
          <Link href="/about#FAQs" className="text-left">
            <Button variant="darkText" className="text-left h-[45px]">
              FAQs
            </Button>
          </Link>
          <Link href="/privacy" className="text-left">
            <Button variant="darkText" className="text-left h-[45px]">
              Privacy Policy
            </Button>
          </Link>
          <Link href="/terms" className="text-left">
            <Button variant="darkText" className="text-left h-[45px]">
              Terms of Use
            </Button>
          </Link>
        </nav>
        <p className="text-gray30Disabled text-[16px] font-normal leading-[20.8px] self-end md:self-center">
          Created by SportSpace Team in 2024
        </p>
      </div>
    </footer>
  );
};
