import classNames from "classnames";
import React, { ReactNode } from "react";

type Props = {
  isActive: boolean;
  setIsActive: (flag: boolean) => void;
  children: ReactNode;
};

export const ModalSearch: React.FC<Props> = ({
  isActive,
  setIsActive,
  children,
}) => {
  return (
    <div
      className={classNames(
        "fixed inset-0 z-50 flex items-start justify-center md:px-[24px]",
        {
          hidden: !isActive,
          block: isActive,
        }
      )}
    >
      <div className="fixed inset-0" onClick={() => setIsActive(false)}></div>
      {children}
    </div>
  );
};
