"use client";

import React from "react";
import { Button } from "@/components/ui/button";

type Props = {
  setError: (message: string) => void;
  error?: string;
};

export const BlockError: React.FC<Props> = ({ setError, error }) => {
  return (
    <div className="flex flex-col gap-[24px] items-center">
      <h2 className="text-[22px] sm:text-[32px] text-center font-semibold leading-[1.2em] text-gray100Primary">
        {error ? error : `Oops, something went wrong`}
      </h2>
      <p className="text-center text-[16px] font-normal leading-[1.3em] text-gray50">
        Please try again
      </p>
      <Button
        className="max-w-[364px]"
        variant="primary"
        onClick={() => setError("")}
      >
        Ok
      </Button>
    </div>
  );
};
