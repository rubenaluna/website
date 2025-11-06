import { cn } from "@/lib/utils";
import { type FC } from "react";

interface SectionHeaderProps {
  text: string;
  className?: string;
}

export const SectionHeader: FC<SectionHeaderProps> = ({
  text,
  className = "",
}) => {
  return (
    <div className={cn("flex items-center gap-2 mb-6", className)}>
      <div className="w-3 h-3 bg-white"></div>
      <span className="mono text-xs font-light uppercase">{text}</span>
    </div>
  );
};
