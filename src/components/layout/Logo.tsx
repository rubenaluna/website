import { type FC } from "react";

export const Logo: FC = () => {
  return (
    <div className="logo h-1 flex justify-center items-center fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs font-normal tracking-widest mono text-white z-99">
      RL
    </div>
  );
};
