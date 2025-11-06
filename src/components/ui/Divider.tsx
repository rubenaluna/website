import { type FC } from "react";

interface DividerProps {
  width?: "sm" | "md" | "lg" | "full";
  className?: string;
}

export const Divider: FC<DividerProps> = ({ width = "md", className = "" }) => {
  const widthClasses = {
    sm: "w-16",
    md: "w-32",
    lg: "w-1/2",
    full: "w-full",
  };

  return (
    <div
      className={`h-1 bg-white/50 rounded-full ${widthClasses[width]} ${className}`}
    ></div>
  );
};
