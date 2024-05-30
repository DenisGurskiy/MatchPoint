import { SearchForm } from "@/components/SearchForm";
import { InfoBlock } from "@/components/InfoBlock";
import { InfoBlockActivities } from "@/components/InfoBlockActivities";
import { InfoBlockCities } from "@/components/InfoBlockCities";
import { PopularClubsBlock } from "@/components/PopularClubsBlock";
import { NewsBlock } from "@/components/NewsBlock";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="pt-[74px] w-full h-[600px] relative flex justify-center ">
        <Image
          src="/images/home_bg.jpg"
          alt="Main picture"
          fill
          style={{ objectFit: "cover" }}
        />
        <SearchForm />
      </div>
      <InfoBlock />
      <InfoBlockActivities />
      <InfoBlockCities />
      <PopularClubsBlock />
      <NewsBlock />
    </>
  );
}
