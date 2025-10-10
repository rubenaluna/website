import { type FC } from "react";

export const Logo: FC = () => {
  return (
    <div className="logo h-1 flex justify-center items-center fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-normal tracking-widest mono text-white z-99">
      <img src="/logo.svg" alt="Logo" className="w-12 h-12" />
    </div>
  );
};
