import React, { FC, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  isActive?: boolean;
  variant?: "primary" | "secondary" | "search";
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
  const baseStyles = `w-[100px] h-[48px] rounded-[100px] text-[16px] text-gray100Primary border-primaryGreen100 border-2 disabled:bg-disabled font-semibold disabled:text-gray30Disabled transition duration-300 ease-in-out ${className}`;

  const variantStyles = {
    primary: `bg-primaryGreen100 text-white hover:border-primaryGreen10  active:text-gray100Primary disabled:border-none`,
    secondary: `disabled:bg-gray10Background disabled:border-gray10Border hover:bg-primaryGreen100`,
    search: `w-[82px] border-none hover:text-gray50 active:text-primaryGreen100`,
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
