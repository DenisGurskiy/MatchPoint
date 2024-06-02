import { HeaderBlock } from "@/components/HeaderBlock";
import { InfoBlock } from "@/components/InfoBlock";
import { InfoBlockActivities } from "@/components/InfoBlockActivities";
import { InfoBlockCities } from "@/components/InfoBlockCities";
import { PopularClubsBlock } from "@/components/PopularClubsBlock";
import { NewsBlock } from "@/components/NewsBlock";
import { SearchForm } from "@/components/SearchForm";

export default function Home() {
  return (
    <>
      <HeaderBlock image="home_bg">
        <div className="ownContainer absolute ownGrid pt-[74px]">
          <h1 className="text-[40px] font-semibold text-white leading-[48px] col-span-7 mb-[82px] row-span-1">
            Convenient online booking for your favorite sports grounds
          </h1>
          <SearchForm />
        </div>
      </HeaderBlock>
      <InfoBlock />
      <InfoBlockActivities />
      <InfoBlockCities />
      <PopularClubsBlock />
      <NewsBlock />
    </>
  );
}
