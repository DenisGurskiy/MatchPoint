import { HeaderBlock } from "@/components/HeaderBlock";
import { InfoBlock } from "@/components/InfoBlock";
import { InfoBlockActivities } from "@/components/InfoBlockActivities";
import { InfoBlockCities } from "@/components/InfoBlockCities";
import { NewsBlock } from "@/components/News/NewsBlock";
import { PopularClubsBlock } from "@/components/PopularClubsBlock";

export default function Home() {
  return (
    <>
      <HeaderBlock />
      <InfoBlock />
      <InfoBlockActivities />
      <InfoBlockCities />
      <PopularClubsBlock />
      <NewsBlock />
    </>
  );
}
