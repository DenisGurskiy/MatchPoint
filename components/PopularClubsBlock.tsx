"use client";

import { GroundCardBlock } from "@/components/GroundCardBlock";
import { DropDownCity } from "./ui/dropDownCity";
import { useEffect, useState } from "react";
import { GroundType } from "@/app/types/ground";
import { Loader } from "./ui/loader";
import { City } from "@/app/types/city";

export const PopularClubsBlock = () => {
  const [location, setLocation] = useState<City>(City.Kyiv);
  const [windowWidth, setWindowWidth] = useState(0);

  const [grounds, setGrounds] = useState<GroundType[]>([]);
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState(
    "https://sportspace.onrender.com/api/service/sports-complexes/?location=Kyiv"
  );

  const cities: City[] = Object.values(City);

  useEffect(() => {
    setUrl(
      `https://sportspace.onrender.com/api/service/sports-complexes/?location=${location}`
    );
  }, [location]);

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

        console.log("Response data:", data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setGrounds((currentGrounds) => {
      return windowWidth < 640 ? currentGrounds.slice(0, 3) : currentGrounds;
    });
  }, [windowWidth]);

  return (
    <section className="ownContainer ownGrid mb-[60px]">
      <h2 className="md:text-[32px] text-[22px] leading-[1.2em] font-semibold text-gray100Primary col-span-full relative">
        Popular clubs in the city
        <DropDownCity
          options={cities}
          value={location}
          setValue={setLocation}
        />
      </h2>
      <div className="col-span-full">
        {loading ? (
          <Loader />
        ) : (
          <>
            {!!grounds.length ? (
              <div className="col-span-full ownGrid">
                {grounds.map((ground) => (
                  <GroundCardBlock key={ground.id} ground={ground} />
                ))}
              </div>
            ) : (
              <p className="m-auto text-gray50 text-center">
                There are no fields matching your criteria
              </p>
            )}
          </>
        )}
      </div>
    </section>
  );
};
