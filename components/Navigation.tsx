"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { useEffect, useRef, useState } from "react";
import { SearchFormHeader } from "@/components/SearchFormHeader";
import { ModalSearch } from "./ui/modalSearch";

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
  const [searchIconVisible, setSearchIconVisible] = useState(false);
  const searchRef = useRef<HTMLElement | null>(null);
  const [isSearchFormActive, setIsSearchFormActive] = useState(false);

  useEffect(() => {
    const searchElement = document.getElementById("searchForm");
    const searchFormMini = document.getElementById("searchFormMini");
    searchRef.current = searchElement;

    if (!searchElement && !searchFormMini) {
      setSearchIconVisible(true);
      return;
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      const [searchEntry, miniSearchEntry] = entries;
      const searchVisible = searchEntry && searchEntry.isIntersecting;
      const miniSearchVisible =
        miniSearchEntry && miniSearchEntry.isIntersecting;

      setSearchIconVisible(!(searchVisible || miniSearchVisible));
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      threshold: 0,
    });

    if (searchElement) {
      observer.observe(searchElement);
    }

    if (searchFormMini) {
      observer.observe(searchFormMini);
    }

    return () => {
      if (searchElement) {
        observer.unobserve(searchElement);
      }
      if (searchFormMini) {
        observer.unobserve(searchFormMini);
      }
    };
  }, [pathname]);

  const openSearch = () => {
    if (searchRef.current) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      setIsSearchFormActive(true);
    }
  };

  return (
    <>
      <nav className="ownContainer md:ownGrid flex justify-between">
        <div className="flex items-center md:col-span-6">
          <div className="mr-[16px] md:hidden">
            <Image
              className="cursor-pointer"
              src={isOpen ? "/images/close.svg" : "/images/menu.svg"}
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
          {searchIconVisible && (
            <div
              className="md:flex hidden md:ml-[32px] cursor-pointer text-gray100Primary font-semibold"
              onClick={openSearch}
            >
              <Image
                className="mr-[1.5px]"
                src="/images/Search.svg"
                alt="logo"
                width={24}
                height={24}
                onClick={() => setIsOpen(false)}
              />
              Search
            </div>
          )}
        </div>
        {searchIconVisible && (
          <div className="flex md:hidden" onClick={openSearch}>
            <Image
              className="cursor-pointer"
              src="/images/Search.svg"
              alt="logo"
              width={24}
              height={24}
              onClick={() => setIsOpen(false)}
            />
          </div>
        )}
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
      <ModalSearch
        isActive={isSearchFormActive}
        setIsActive={setIsSearchFormActive}
      >
        <SearchFormHeader setIsActive={setIsSearchFormActive} />
      </ModalSearch>
    </>
  );
};
