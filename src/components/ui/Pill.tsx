import { type FC } from "react";

interface PillProps {
  children: React.ReactNode;
  className?: string;
}

export const Pill: FC<PillProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`border border-white/10 bg-white/5 w-fit text-gray-300 mono backdrop-blur-sm rounded-full whitespace-nowrap lg:text-xs text-[10px] lg:px-4 px-2 lg:py-2 py-1 ${className}`}
    >
      {children}
    </div>
  );
};
