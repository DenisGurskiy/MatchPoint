import classNames from "classnames";
import React, { ReactNode } from "react";

type Props = {
  isActive: boolean;
  setIsActive: (flag: boolean) => void;
  children: ReactNode;
};

export const ModalError: React.FC<Props> = ({
  isActive,
  setIsActive,
  children,
}) => {
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
        className="max-w-[564px] w-full h-auto bg-white z-50 rounded-[4px] sm:p-[48px] px-[20px] p-[24px] mx-[20px]"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
