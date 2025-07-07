import type { FC, ReactNode } from "react";

interface LayoutProps {
  children?: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return <div className="h-full">{children}</div>;
};
