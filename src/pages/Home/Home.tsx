import { Background } from "@/components/Background";
import { Logo } from "@/components/Logo";
import { Navigation } from "@/components/Navigation";
import { About } from "@/components/about/About";
import { Contact } from "@/components/contact/Contact";
import { Experience } from "@/components/experience/Experience";
import { Hero } from "@/components/hero/Hero";
import { Skills } from "@/components/skills/Skills";

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

      <div className="w-full">
        <Logo />
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </div>
    </div>
  );
};
