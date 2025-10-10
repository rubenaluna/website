import { type FC } from "react";

interface SectionHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionHeader: FC<SectionHeaderProps> = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`top-0 left-0 w-full h-12 flex items-center px-6 py-4 space-x-2 ${className}`}
    >
      <div className="w-3 h-3 bg-white"></div>
      <h2 className="text-lg uppercase mono text-gray-400">{children}</h2>
    </div>
  );
};
