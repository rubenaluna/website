import { type FC } from "react";

interface TechTagProps {
  children: React.ReactNode;
  color?: "emerald" | "teal" | "cyan";
  className?: string;
}

export const TechTag: FC<TechTagProps> = ({
  children,
  color = "teal",
  className = "",
}) => {
  const colorClasses = {
    emerald: `bg-gradient-to-r from-emerald-700/20 to-emerald-900/20 text-emerald-200 border-emerald-700/30`,
    teal: `bg-gradient-to-r from-teal-700/20 to-teal-900/20 text-teal-200 border-teal-700/30`,
    cyan: `bg-gradient-to-r from-cyan-700/20 to-cyan-900/20 text-cyan-200 border-cyan-700/30`,
  };

  return (
    <span
      className={`text-xs mono px-3 py-1 rounded-full border ${colorClasses[color]} ${className}`}
    >
      {children}
    </span>
  );
};
