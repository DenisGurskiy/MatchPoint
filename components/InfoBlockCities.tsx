import { Button } from "@/components/ui/button";
import Link from "next/link";

export const InfoBlockCities = () => {
  return (
    <section className="mb-[60px] h-[495px] bg-[url('/photos/block_cities.jpg')] bg-cover bg-center py-[60px]">
      <div className="ownContainer ownGrid h-full">
        <div className="col-span-5 grid grid-cols-5 gap-[24px]">
          <div className="col-span-5 text-white">
            <h2 className="text-[32px] leading-[38.4px] font-semibold mb-[24px]">
              SportSpace in your city
            </h2>
            <p className="text-[16px] leading-[20.8px] font-normal mb-[32px]">
              SportSpace is live in 3 major Ukrainian cities
            </p>
          </div>
          <div className="col-span-2 self-end">
            <Button variant="primary">Get started</Button>
          </div>
        </div>
        <div className="col-start-7 col-end-13 flex items-center">
          <ul className="text-white text-[40px] font-semibold flex flex-col gap-[16px]">
            <li className="leading-[46px]">
              <Link href="#">Kyiv</Link>
            </li>
            <li className="leading-[46px]">
              <Link href="#">Lviv</Link>
            </li>
            <li className="leading-[46px]">
              <Link href="#">Odesa</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
