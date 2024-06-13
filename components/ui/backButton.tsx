"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export const BackButton = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div
      className="col-span-full row-span-1 flex justify-start gap-[4px] hover:text-gray50 transition duration-300 ease-in-out cursor-pointer"
      onClick={handleBack}
    >
      <svg
        className="w-[24px] h-[24px]"
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="24pt"
        height="24pt"
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0,24) scale(0.1,-0.1)"
          fill="currentColor"
          stroke="none"
        >
          <path d="M105 160 l-39 -40 39 -40 c21 -22 44 -40 49 -40 6 0 -8 18 -29 40 l-39 40 39 40 c21 22 35 40 29 40 -5 0 -28 -18 -49 -40z" />
        </g>
      </svg>
      <Button className="" variant="mobileTinyText">
        Back
      </Button>
    </div>
  );
};
