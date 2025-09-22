import { type FC } from "react";

export const Logo: FC = () => {
  return (
    <div className="logo h-12 flex justify-center items-center fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-normal tracking-widest mono text-white z-1">
      <div>RL</div>
    </div>
  );
};
