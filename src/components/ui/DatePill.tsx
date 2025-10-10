import { type FC } from "react";

interface DatePillProps {
  children: React.ReactNode;
  size?: "sm" | "md";
  className?: string;
}

export const DatePill: FC<DatePillProps> = ({
  children,
  size = "sm",
  className = "",
}) => {
  const sizeClasses = {
    sm: "text-xs px-3 py-1",
    md: "text-sm px-4 py-2",
  };

  return (
    <span
      className={`text-gray-400 mono bg-white/10 rounded-full whitespace-nowrap ${sizeClasses[size]} ${className}`}
    >
      {children}
    </span>
  );
};
