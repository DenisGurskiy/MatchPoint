import { GroundCardBlock } from "@/components/GroundCardBlock";
import { SearchForm } from "@/components/SearchForm";
import { SearchFormMobile } from "@/components/SearchFormMobile";

export default function Grounds() {
  return (
    <div className="ownContainer flex flex-col gap-y-[24px] mt-[16px]">
      <div className="hidden md:block">
        <SearchForm />
      </div>
      <section className="ownGrid mb-[60px] -z-10">
        <GroundCardBlock image="new_3" />
        <GroundCardBlock image="new_2" />
        <GroundCardBlock image="new_1" />
        <GroundCardBlock image="home_bg" />
        <GroundCardBlock image="new_3" />
        <GroundCardBlock image="new_2" />
      </section>
    </div>
  );
}
