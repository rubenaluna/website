import { type FC, type ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  padding?: "sm" | "md" | "lg";
  hover?: boolean;
  backdropBlur?: boolean;
  className?: string;
}

export const GlassCard: FC<GlassCardProps> = ({
  children,
  padding = "md",
  hover = false,
  backdropBlur = false,
  className = "",
}) => {
  const paddingClasses = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  const hoverClasses = hover
    ? "hover:bg-white/10 transition-all duration-300"
    : "";
  const blurClasses = backdropBlur ? "backdrop-blur-sm" : "";

  return (
    <div
      className={`bg-white/5 rounded-2xl border border-white/10 ${paddingClasses[padding]} ${hoverClasses} ${blurClasses} ${className}`}
    >
      {children}
    </div>
  );
};
