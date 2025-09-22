import { useHeroTimeline } from "@/lib/use-hero-timeline";
import { type FC } from "react";

export const HeroSection: FC = () => {
  useHeroTimeline();
  return (
    <section
      id="hero"
      className="hero w-screen h-screen flex flex-col items-center justify-center"
    >
      <div className="final text-sm font-normal uppercase text-gray-400 mono">
        Software Engineer
      </div>
      <h1 className="name text-center text-6xl lg:text-8xl font-normal leading-none tracking-tight">
        RUBEN
        <br />
        <span className="text-center text-gray-400 font-light">LUNA</span>
      </h1>
    </section>
  );
};
