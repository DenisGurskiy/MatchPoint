import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const InfoBlockActivities = () => {
  return (
    <section className="ownContainer ownGrid mb-[60px]">
      <div className="lg:col-span-5 md:col-span-7 col-span-full grid md:grid-cols-5 grid-cols-2 md:gap-[24px] gap-[16px] gap-y-[32px]">
        <div className="col-span-full text-gray100Primary">
          <h2 className="md:text-[32px] text-[22px] leading-[1.2em] font-semibold mb-[24px]">
            Playgrounds for your game
          </h2>
          <p className="text-[16px] leading-[20.8px] font-normal mb-[32px]">
            Choose your activity and easily book your visit time
          </p>
          <ul className="flex flex-wrap gap-[16px] text-gray50">
            <li>
              <Button variant="text">Acrobatics</Button>
            </li>
            <li>
              <Button variant="text">Aikido</Button>
            </li>
            <li>
              <Button variant="text">Badminton</Button>
            </li>
            <li>
              <Button variant="text">Basketball</Button>
            </li>
            <li>
              <Button variant="text">Billiard</Button>
            </li>
            <li>
              <Button variant="text">Bowling</Button>
            </li>
            <li>
              <Button variant="text">Box</Button>
            </li>
            <li>
              <Button variant="text">Football</Button>
            </li>
            <li>
              <Button variant="text">Golf</Button>
            </li>
            <li>
              <Button variant="text">Hockey</Button>
            </li>
            <li>
              <Button variant="text">Indoor Rock Climbing</Button>
            </li>
            <li>
              <Button variant="text">Swimming</Button>
            </li>
            <li>
              <Button variant="text">Table Tennis</Button>
            </li>
            <li>
              <Button variant="text">Tennis</Button>
            </li>
            <li>
              <Button variant="text">Volleyball</Button>
            </li>
          </ul>
        </div>
        <Link href="/about" className="md:col-span-2 col-spa-1 self-end">
          <Button variant="secondary">Tell me more</Button>
        </Link>
      </div>
      <div className="lg:col-start-7 md:col-start-8 col-end-13 h-[375px] relative rounded-[24px] overflow-hidden hidden md:block">
        <Image
          src="/photos/block_activity.jpg"
          alt="Play golf photo"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
    </section>
  );
};
