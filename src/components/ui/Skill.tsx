import type { FC } from "react";

export interface SkillProps {
  icon: React.ReactNode;
  name: string;
}
export const Skill: FC<SkillProps> = ({ icon, name }) => {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="lg:block hidden">{icon}</div>
      <span className="text-sm whitespace-nowrap">{name}</span>
    </div>
  );
};
