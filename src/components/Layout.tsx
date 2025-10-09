import type { FC, ReactNode } from "react";
import { Cursor } from "./Cursor";

interface LayoutProps {
  children?: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-full">
      <Cursor />
      {children}
    </div>
  );
};
