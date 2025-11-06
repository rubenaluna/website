import { type FC, type ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export const GlassCard: FC<GlassCardProps> = ({
  children,

  className = "",
}) => {
  return (
    <div
      className={`backdrop-blur-sm rounded-2xl border border-white/10 lg:p-8 p-4  ${className}`}
    >
      {children}
    </div>
  );
};
