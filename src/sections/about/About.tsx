import { Divider } from "@/components/ui/Divider";
import { GlassCard } from "@/components/ui/GlassCard";
import { Pill } from "@/components/ui/Pill";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Brain, Globe, Layout, Server } from "lucide-react";
import { type FC } from "react";
import { useAboutMeTimeline } from "./use-about-me-timeline";

export const About: FC = () => {
  useAboutMeTimeline();

  return (
    <section
      id="about"
      className="about w-screen h-screen pt-12"
      aria-label="About me section"
    >
      <div className="about-body max-w-7xl h-full mx-auto flex flex-col justify-center px-6">
        <div className="about-content h-full flex flex-col justify-center">
          <div className="flex lg:flex-row flex-col justify-center items-center lg:gap-6 gap-2">
            <GlassCard className="h-full flex-1 flex flex-col">
              <SectionHeader text="About" />
              <div className="h-full flex flex-col space-y-4 justify-center items-center">
                <div className="flex flex-row justify-center items-center gap-6">
                  <img
                    className="w-[50px] h-[50px] lg:w-[250px] lg:h-[250px] rounded-full object-cover bg-white/5 border border-white/10"
                    src="/headshot.png"
                    alt="Ruben Luna"
                  />
                  <div className="space-y-4">
                    <p className="font-bold lg:text-lg text-sm text-gray-300">
                      I'm a software developer based out of the Dallas-Fort
                      Worth area of Texas. I've specialized in building
                      frictionless and intricate web applications in the
                      artificial intelligence space for over six years.
                    </p>
                  </div>
                </div>
                <span className="lg:block hidden font-light lg:text-2xl text-base text-gray-300">
                  My full-stack experience enables me to bring ideas to life
                  from back-end to front-end and concept to delivery.
                </span>
                <Divider width="lg" className="final lg:mt-6 mt-2" />
              </div>
            </GlassCard>

            <div className="w-full h-full flex-1">
              <GlassCard className="flex-1">
                <SectionHeader text="Education" />
                <div className="h-full flex flex-col justify-center items-center">
                  <div className="flex items-center gap-1">
                    <img
                      className="w-[50px] lg:w-[100px] h-[50px] lg:h-[100px]"
                      src="/utd-logo.png"
                      alt="The University of Texas at Dallas"
                    />

                    <div>
                      <h4 className="lg:text-lg text-sm font-medium text-white">
                        Bachelor of Science in Computer Science
                      </h4>

                      <p className="lg:text-base text-sm text-gray-300">
                        The University of Texas at Dallas
                      </p>

                      <Pill>Aug. 2015 - May. 2019</Pill>
                    </div>
                  </div>
                </div>
              </GlassCard>
              <GlassCard className="lg:mt-8 mt-2">
                <SectionHeader text="Interests" />
                <div className="grid lg:grid-cols-2 grid-cols-1 grid-rows-2 gap-4">
                  <div className="bg-white/5 rounded-xl lg:p-6 p-2 border border-white/10 flex items-center gap-4">
                    <Globe className="w-8 h-8 text-white/50 flex-shrink-0" />
                    <div className="flex flex-col gap-1">
                      <h4 className="lg:text-lg text-sm font-medium text-white">
                        Web Development
                      </h4>
                      <p className="lg:text-sm text-xs text-gray-400">
                        Building scalable web applications
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl lg:p-6 p-2 border border-white/10 flex items-center gap-4">
                    <Layout className="w-8 h-8 text-white/50 flex-shrink-0" />
                    <div className="flex flex-col gap-1">
                      <h4 className="lg:text-lg text-sm font-medium text-white">
                        Front-End Development
                      </h4>
                      <p className="lg:text-sm text-xs text-gray-400">
                        Implementing intuitive user experiences
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl lg:p-6 p-2 border border-white/10 flex items-center gap-4">
                    <Server className="w-8 h-8 text-white/50 flex-shrink-0" />
                    <div className="flex flex-col gap-1">
                      <h4 className="lg:text-lg text-sm font-medium text-white">
                        Back-End Development
                      </h4>
                      <p className="lg:text-sm text-xs text-gray-400">
                        Designing robust APIs and databases
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl lg:p-6 p-2 border border-white/10 flex items-center gap-4">
                    <Brain className="w-8 h-8 text-white/50 flex-shrink-0" />
                    <div className="flex flex-col gap-1">
                      <h4 className="lg:text-lg text-sm font-medium text-white">
                        Artificial Intelligence
                      </h4>
                      <p className="lg:text-sm text-xs text-gray-400">
                        Productionalizing AI
                      </p>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
