"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

import { GroundCardBlock } from "@/components/Grounds/GroundCardBlock";
import { SearchForm } from "@/components/SearchForm";
import { SearchFormHeader } from "@/components/SearchFormHeader";
import { ModalSearch } from "@/components/ui/modalSearch";
import { GroundType } from "../types/ground";
import { Loader } from "@/components/ui/loader";

export default function Grounds() {
  const [isSearchFormActive, setIsSearchFormActive] = useState(false);
  const [grounds, setGrounds] = useState<GroundType[]>([]);
  const [loading, setLoading] = useState(false);

  const searchParams = useSearchParams();
  const location = searchParams.get("location") || "";
  const activity = searchParams.get("activity") || "";
  const date = searchParams.get("date");

  const baseUrl =
    "https://sportspace.onrender.com/api/service/sports-complexes/";
  const params = new URLSearchParams();
  params.append("location", location);
  params.append("activity", activity);
  if (date) {
    params.append("date", date);
  }

  const url = `${baseUrl}?${params.toString()}`;

  useEffect(() => {
    setLoading(true);
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setGrounds(data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

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
          <Image src="/images/Search.svg" alt="logo" width={24} height={24} />
          <ul className="list-horizontal list-none text-[16px] font-normal">
            {location && <li>{location}</li>}
            {activity && <li>{activity}</li>}
            {date && <li>{date}</li>}
          </ul>
        </div>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <>
          {!!grounds.length ? (
            <section className="ownGrid mb-[60px]">
              {grounds.map((ground) => (
                <GroundCardBlock key={ground.id} ground={ground} />
              ))}
            </section>
          ) : (
            <p className="m-auto text-gray50">
              There are no fields matching your criteria
            </p>
          )}
        </>
      )}
      <ModalSearch
        isActive={isSearchFormActive}
        setIsActive={setIsSearchFormActive}
      >
        <SearchFormHeader setIsActive={setIsSearchFormActive} />
      </ModalSearch>
    </div>
  );
}
