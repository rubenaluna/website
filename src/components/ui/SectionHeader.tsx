import { type FC } from "react";

interface SectionHeaderProps {
  text: string;
}

export const SectionHeader: FC<SectionHeaderProps> = ({ text }) => {
  return (
    <div className="flex items-center gap-2 mb-6">
      <div className="w-3 h-3 bg-white"></div>
      <span className="mono text-xs font-light uppercase">{text}</span>
    </div>
  );
};
