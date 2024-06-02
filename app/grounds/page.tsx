import { GroundCardBlock } from "@/components/GroundCardBlock";
import { SearchForm } from "@/components/SearchForm";

export default function Grounds() {
  return (
    <div className="ownContainer flex  flex-col  gap-y-[24px] mt-[16px]">
      <SearchForm />
      <section className="ownGrid mb-[60px] -z-10">
        <GroundCardBlock />
        <GroundCardBlock />
        <GroundCardBlock />
        <GroundCardBlock />
        <GroundCardBlock />
        <GroundCardBlock />
      </section>
    </div>
  );
}
