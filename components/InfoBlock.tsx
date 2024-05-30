import Image from "next/image";

export const InfoBlock = () => {
  return (
    <div className="h-[72px] w-full bg-gray100Primary flex items-center mb-[60px]">
      <div className="ownContainer flex justify-between text-white items-center">
        <div className="flex justify-between gap-[8px]">
          <Image
            src="/images/Search_light.png"
            alt="Find your sports ground"
            width={24}
            height={24}
          />
          <p>Find your sports ground</p>
        </div>
        <div className="flex justify-between gap-[8px]">
          <Image
            src="/images/calendar_light.png"
            alt="Book online"
            width={24}
            height={24}
          />
          <p>Book online</p>
        </div>
        <div className="flex justify-between gap-[8px]">
          <Image
            src="/images/tennis_ball_light.png"
            alt="Enjoy your game"
            width={24}
            height={24}
          />
          <p>Enjoy your game</p>
        </div>
      </div>
    </div>
  );
};
