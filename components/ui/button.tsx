import React, { FC, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  isActive?: boolean;
  variant?:
    | "primary"
    | "secondary"
    | "search"
    | "darkText"
    | "text"
    | "greenText"
    | "badge"
    | "smallPrimary"
    | "mobileTinyText";
}

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  className = "",
  type = "button",
  disabled = false,
  isActive = false,
  variant = "primary",
}) => {
  const baseStyles = `rounded-[100px] text-[16px] text-gray100Primary border-primaryGreen100 border-2 disabled:bg-disabled  disabled:text-gray30Disabled transition duration-300 ease-in-out ${className}`;

  const variantStyles = {
    primary: `w-full h-[48px] bg-primaryGreen100 text-white hover:border-primaryGreen10 active:text-gray100Primary disabled:border-none font-semibold`,
    secondary: `w-full h-[48px] disabled:bg-gray10Background disabled:border-gray10Background hover:bg-primaryGreen10 font-semibold`,
    search: `w-auto h-[48px] border-none hover:text-gray50 active:text-primaryGreen100 font-semibold`,
    darkText: `w-auto h-[48px] bg-transparent text-white border-none font-normal hover:text-gray50 active:text-primaryGreen100 disabled:text-gray30Disabled disabled:bg-transparent`,
    text: `w-auto h-[21px] border-none text-gray50 hover:text-gray100Primary active:text-primaryGreen100 font-semibold`,
    greenText: `w-auto h-[21px] border-none hover:text-gray50 active:text-gray100Primary text-primaryGreen100 font-semibold`,
    badge: `w-auto px-[12px] h-[29px] bg-primaryGreen10 border-transparent text-secondaryGreen hover:border-primaryGreen100 active:border-secondaryGreen`,
    smallPrimary: `w-full h-[40px] bg-primaryGreen100 text-white hover:border-primaryGreen10 active:text-gray100Primary disabled:border-none font-semibold`,
    mobileTinyText: `w-auto h-[24px] border-none text-gray100Primary hover:text-gray50 active:text-primaryGreen100  disabled:text-gray30Disabled`,
  };

  let activeStyles: string;

  switch (variant) {
    case "primary":
      activeStyles = ``;
      break;
    case "secondary":
      activeStyles = `text-primaryGreen100`;
      break;
    case "search":
      activeStyles = `text-primaryGreen100`;
      break;
    default:
      activeStyles = "";
  }

  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${
        isActive ? activeStyles : ""
      }`}
    >
      {children}
    </button>
  );
};
