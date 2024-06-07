import classNames from "classnames";
import React, { ReactNode } from "react";

type Props = {
  isActive: boolean;
  setIsActive: (flag: boolean) => void;
  children: ReactNode;
};

export const Modal: React.FC<Props> = ({ isActive, setIsActive, children }) => {
  return (
    <div
      className={classNames(
        "fixed inset-0 z-50 flex items-center justify-center",
        {
          hidden: !isActive,
          block: isActive,
        }
      )}
    >
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={() => setIsActive(false)}
      ></div>
      <div
        className="md:max-w-[564px] w-full md:h-auto h-dvh absolute bg-white z-50 md:rounded-[4px] md:p-[48px] px-[20px] pt-[24px]"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
