import React from "react";
import { Loading } from "..";

type ButtonProps = {
  children: React.ReactNode;
  type?: "submit" | "button" | "reset" | undefined;
  className?: string;
  primary?: boolean;
  danger?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
};

const Button = ({
  type = "submit",
  className,
  primary = false,
  danger = false,
  isLoading = false,
  onClick,
  children,
}: ButtonProps) => {
  className = primary
    ? className +
      " " +
      "ml-2 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg"
    : className;

  className = danger
    ? className +
      " " +
      "px-2 py-1 bg-red-500 text-white font-semibold rounded-lg"
    : className;

  return (
    <button className={className} onClick={onClick} type={type}>
      {isLoading ? <Loading /> : children}
    </button>
  );
};

export default Button;
