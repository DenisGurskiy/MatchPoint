"use client";

import { GroundCardBlock } from "@/components/GroundCardBlock";
import { SearchForm } from "@/components/SearchForm";
import { SearchFormHeader } from "@/components/SearchFormHeader";
import { ModalSearch } from "@/components/ui/modalSearch";
import Image from "next/image";
import { useState } from "react";

export default function Grounds() {
  const [isSearchFormActive, setIsSearchFormActive] = useState(false);

  return (
    <div className="ownContainer flex flex-col gap-y-[24px] mt-[16px]">
      <div className="hidden md:block">
        <SearchForm />
      </div>
      <div className="md:hidden">
        <div
          id="searchFormMini"
          className="w-full border-[1px] border-gray20divider h-[40px] rounded-[100px] px-[16px] flex items-center gap-[8px] cursor-pointer"
          onClick={() => setIsSearchFormActive(true)}
        >
          <Image src="/images/Search.png" alt="logo" width={24} height={24} />
          <p>Kyiv · Tennis</p>
        </div>
      </div>
      <section className="ownGrid mb-[60px]">
        <GroundCardBlock image="new_3" />
        <GroundCardBlock image="new_2" />
        <GroundCardBlock image="new_1" />
        <GroundCardBlock image="home_bg" />
        <GroundCardBlock image="new_3" />
        <GroundCardBlock image="new_2" />
      </section>
      <ModalSearch
        isActive={isSearchFormActive}
        setIsActive={setIsSearchFormActive}
      >
        <SearchFormHeader setIsActive={setIsSearchFormActive} />
      </ModalSearch>
    </div>
  );
}
