import { type FC } from "react";

interface GradientDividerProps {
  width?: "sm" | "md" | "lg" | "full";
  className?: string;
}

export const GradientDivider: FC<GradientDividerProps> = ({
  width = "md",
  className = "",
}) => {
  const widthClasses = {
    sm: "w-16",
    md: "w-32",
    lg: "w-1/2",
    full: "w-full",
  };

  return (
    <div
      className={`h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-full ${widthClasses[width]} ${className}`}
    ></div>
  );
};
