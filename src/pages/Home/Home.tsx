import { Background, Logo, Navigation } from "@/components/layout";
import { About, Contact, Experience, Hero, Skills } from "@/sections";
import { type FC } from "react";

export const Home: FC = () => {
  return (
    <div className="text-white">
      <Background
        className="background fixed"
        scanlineIntensity={1.0}
        scanlineFrequency={0.5}
        noiseIntensity={0.1}
        warpAmount={0.5}
        speed={1}
        resolutionScale={1}
      />

      <Logo />
      <Navigation />

      <div className="w-full">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </div>
    </div>
  );
};
