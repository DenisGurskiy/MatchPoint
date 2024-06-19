"use client";

import Image from "next/image";
import { FC } from "react";

type Props = {
  id: string;
};

export const GroundPicture: FC<Props> = ({ id }) => {
  return (
    <div className="col-span-full grid grid-cols-2 md:grid-cols-12 grid-rows-2 gap-[4px] h-[210px] md:h-[419px] rounded-[24px] overflow-hidden">
      <div className="col-span-1 md:col-span-8 row-span-2 relative w-full h-auto">
        <Image
          src={`/photo/grounds/${id}/1.jpg`}
          alt="Main picture"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="col-span-1 md:col-span-4 row-span-1 relative w-full h-auto">
        <Image
          src={`/photo/grounds/${id}/2.jpg`}
          alt="Main picture"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="col-span-1 md:col-span-4 row-span-1 relative w-full h-auto">
        <Image
          src={`/photo/grounds/${id}/3.jpg`}
          alt="Main picture"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
};
