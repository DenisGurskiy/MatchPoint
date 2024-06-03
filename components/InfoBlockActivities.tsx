import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const InfoBlockActivities = () => {
  return (
    <section className="ownContainer ownGrid mb-[60px]">
      <div className="col-span-5 grid grid-cols-5 gap-[24px]">
        <div className="col-span-5 text-gray100Primary">
          <h2 className="text-[32px] leading-[38.4px] font-semibold mb-[24px]">
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
        <Link href="/about" className="col-span-2 self-end">
          <Button variant="secondary">Tell me more</Button>
        </Link>
      </div>
      <div className="col-start-7 col-end-13 h-[375px] relative rounded-[24px] overflow-hidden">
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
