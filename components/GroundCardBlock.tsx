import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { GroundType } from "@/app/types/ground";

type Props = {
  ground: GroundType;
};

export const GroundCardBlock: React.FC<Props> = ({ ground }) => {
  const { id, name, location, phone } = ground;

  const minPrice = ground.fields?.reduce((min, field) => {
    return min > field.price ? field.price : min;
  }, 0);

  return (
    <div className="md:col-span-4 sm:col-span-1 col-span-full grid grid-cols-4 gap-x-[24px] gap-y-[8px] text-gray100Primary">
      <Link
        href={`/grounds/${id}`}
        className="w-full h-[220px] relative rounded-[24px] overflow-hidden col-span-full"
      >
        <Image
          className="hover:scale-[1.1] transition duration-300 ease-in-out cursor-pointer"
          src={`/photo/grounds/${id}/1.jpg`}
          alt="Main picture"
          fill
          objectFit="cover"
        />
        <div className="w-[130px] h-[33px] bg-gray100Primary rounded-[28px] text-white absolute bottom-[8px] right-[8px] flex items-center justify-center">
          {`From ${minPrice}₴/hr`}
        </div>
      </Link>
      <h3 className="font-semibold col-span-full">{name}</h3>
      <div className="col-span-full">
        {ground.fields?.map((filed) => (
          <Button key={filed.id} variant="badge">
            {filed.activity}
          </Button>
        ))}
      </div>
      <p className="text-gray50 text-[14px] font-normal col-span-full">
        12 Khreshchatyk Street, Kyiv, Ukraine
      </p>
      <Link href={`/grounds/${id}`} className="col-span-full">
        <Button variant="smallPrimary">Book</Button>
      </Link>
    </div>
  );
};
