import { HeaderBlock } from "@/components/HeaderBlock";
import { InfoBlock } from "@/components/InfoBlock";
import { InfoBlockActivities } from "@/components/InfoBlockActivities";
import { InfoBlockCities } from "@/components/InfoBlockCities";
import { NewsBlock } from "@/components/News/NewsBlock";
import { PopularClubsBlock } from "@/components/PopularClubsBlock";
import { SearchForm } from "@/components/SearchForm";

export default function Home() {
  return (
    <>
      <HeaderBlock image="home_shadow">
        <div className="ownContainer absolute md:ownGrid pt-[82px] landscape:pt-[42px] md:landscape:pt-[74px] md:pt-[74px]">
          <h1 className="text-[22px] md:text-[40px] font-semibold text-white leading-[1.2em] col-span-7 mb-[82px] landscape:mb-[32px] row-span-1">
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
