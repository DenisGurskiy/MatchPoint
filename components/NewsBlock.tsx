import { NewCardBlock } from "@/components/NewCardBlock";

export const NewsBlock = () => {
  return (
    <section className="ownContainer ownGrid mb-[60px]">
      <h2 className="text-[32px] leading-[38.4px] font-semibold mb-[24px] text-gray100Primary col-span-full">
        News
      </h2>
      <p className="text-[16px] leading-[20.8px] font-normal mb-[3 2px]  col-span-full">
        Stay updated with the latest news and activities
      </p>
      <NewCardBlock
        title="Expanded Service to Lviv and Odesa"
        description="We are excited to announce that SportSpace is now available in Lviv and
        Odesa. Find your perfect spot today!"
        image="new_1.jpg"
      />
      <NewCardBlock 
        title="New Sports Ground Openings in Kyiv"
        description="Stay tuned for updates on the latest sports grounds opening in Kyiv. More options for your favorite activities!"
        image="new_2.jpg"
      />
      <NewCardBlock
        title="Discounts on Bookings This Summer"
        description="Enjoy special summer discounts on bookings for sports grounds. Book now and save!"
        image="new_3.jpg"
      />
    </section>
  );
};
