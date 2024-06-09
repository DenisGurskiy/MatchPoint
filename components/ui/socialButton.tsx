import Image from "next/image";
import React, { FC, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  isActive?: boolean;
  variant?: "google" | "facebook";
}

export const SocialButton: FC<ButtonProps> = ({
  children,
  onClick,
  className = "",
  type = "button",
  disabled = false,
  variant = "google",
}) => {
  const baseStyles = `flex justify-center items-center gap-[8px] text-[16px] transition duration-300 ease-in-out w-full h-[48px] border-[1px] border-gray20divider text-gray100Primary font-semibold rounded-[4px] hover:text-gray50 active:border-primaryGreen100  disabled:text-gray30Disabled hover:shadow-custom ${className}`;

  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={`${baseStyles}`}
    >
      {variant === "google" ? (
        <Image
          className="cursor-pointer"
          src="/images/logos_google-icon.svg"
          alt="logo"
          width={24}
          height={24}
        />
      ) : (
        <Image
          className="cursor-pointer"
          src="/images/facebook_logo.svg"
          alt="logo"
          width={24}
          height={24}
        />
      )}
      <p className="hidden md:block">{children}</p>
    </button>
  );
};
