import Image from "next/image";
import { SearchForm } from "@/components/SearchForm";

export const HeaderBlock: React.FC = () => {
  return (
    <div className="w-full full_height bg-[url('/photos/home_shadow.jpg')]">
      <div className="ownContainer md:ownGrid pt-[82px] landscape:pt-[42px] md:landscape:pt-[74px] md:pt-[74px]">
        <h1 className="text-[22px] md:text-[40px] font-semibold text-white leading-[1.2em] col-span-7 md:mb-[82px] mb-[32px] row-span-1">
          Convenient online booking for your favorite sports grounds
        </h1>
        <SearchForm />
      </div>
    </div>
  );
};
