import { GroundCardBlock } from "@/components/GroundCardBlock";

export const PopularClubsBlock = () => {
  return (
    <section className="ownContainer ownGrid mb-[60px]">
      <h2 className="text-[32px] leading-[38.4px] font-semibold mb-[24px] text-gray100Primary col-span-full">
        Popular clubs in the city
      </h2>
      <GroundCardBlock image="new_3" />
      <GroundCardBlock image="new_2" />
      <GroundCardBlock image="new_1" />
      <GroundCardBlock image="home_bg" />
      <GroundCardBlock image="new_3" />
      <GroundCardBlock image="new_2" />
    </section>
  );
};
