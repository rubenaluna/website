import { Brain, Globe, Layout, Server } from "lucide-react";
import { type FC } from "react";
import { useAboutMeTimeline } from "./use-about-me-timeline";

export const About: FC = () => {
  useAboutMeTimeline();

  return (
    <section id="about" className="about w-screen h-screen">
      <div className="about-header top-0 left-0 w-full h-12 flex items-center px-6 py-4 space-x-2">
        <div className="w-3 h-3 bg-white"></div>
        <h2 className="text-lg uppercase mono text-gray-400">ABOUT</h2>
      </div>
      <div className="about-body max-w-7xl h-full mx-auto flex flex-col justify-center px-6">
        <div className="about-content h-full flex flex-col justify-center">
          <div className="flex justify-center items-center gap-6">
            <div className="h-full flex flex-col space-y-4 flex-1 flex flex-col bg-white/5 rounded-2xl p-8 border border-white/10">
              <h3 className="text-start mono uppercase font-light text-gray-200 mb-6">
                This is me.
              </h3>
              <div className="h-full flex flex-col space-y-4 justify-center items-center">
                <div className="flex justify-center items-center gap-6">
                  <img
                    className="w-[250px] h-[250px] rounded-full object-cover bg-white/5 border border-white/10"
                    src="/headshot.png"
                    alt="Ruben Luna"
                  />
                  <div className="space-y-4">
                    <p className="font-bold text-md text-gray-300">
                      I'm a software developer based out of the Dallas-Fort
                      Worth area of Texas. I've specialized in building
                      frictionless and intricate web applications in the
                      artificial intelligence space for over six years.
                    </p>
                  </div>
                </div>
                <span className="font-light text-2xl text-gray-300">
                  My full-stack experience enables me to bring ideas to life
                  from back-end to front-end and concept to delivery.
                </span>
                <div className="final w-1/2 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 mt-6 rounded-full"></div>
              </div>
            </div>

            <div className="flex-1">
              <div className="flex-1 bg-white/5 rounded-2xl p-8 border border-white/10">
                <h3 className="mono text-2xl uppercase font-light text-gray-200 mb-6">
                  Education
                </h3>
                <div>
                  <div className="flex items-center gap-1">
                    <img
                      className="w-[100px]] h-[100px]"
                      src="/utd-logo.png"
                      alt="The University of Texas at Dallas"
                    />

                    <div>
                      <h4 className="text-lg font-medium text-white">
                        Bachelor of Science in Computer Science
                      </h4>

                      <p className="text-gray-300">
                        The University of Texas at Dallas
                      </p>

                      <span className="text-xs text-gray-400 mono bg-white/10 px-3 py-1 rounded-full">
                        Aug. 2015 - May. 2019
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 bg-white/5 rounded-2xl p-8 border border-white/10">
                <h3 className="mono text-2xl uppercase font-light text-gray-200 mb-6">
                  Interests
                </h3>
                <div className="grid grid-cols-2 grid-rows-2 gap-4">
                  <div className="bg-white/5 rounded-xl p-6 border border-emerald-700/30 hover:border-emerald-600/50 hover:bg-gradient-to-br hover:from-emerald-900/10 hover:to-emerald-800/5 transition-all duration-300 flex items-center gap-4">
                    <Globe className="w-8 h-8 text-emerald-300 flex-shrink-0" />
                    <div className="flex flex-col gap-1">
                      <h4 className="text-lg font-medium text-white">
                        Web Development
                      </h4>
                      <p className="text-sm text-gray-400">
                        Building scalable web applications
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-6 border border-teal-700/30 hover:border-teal-600/50 hover:bg-gradient-to-br hover:from-teal-900/10 hover:to-teal-800/5 transition-all duration-300 flex items-center gap-4">
                    <Layout className="w-8 h-8 text-teal-300 flex-shrink-0" />
                    <div className="flex flex-col gap-1">
                      <h4 className="text-lg font-medium text-white">
                        Front-End Development
                      </h4>
                      <p className="text-sm text-gray-400">
                        Implementing intuitive user experiences
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-6 border border-cyan-700/30 hover:border-cyan-600/50 hover:bg-gradient-to-br hover:from-cyan-900/10 hover:to-cyan-800/5 transition-all duration-300 flex items-center gap-4">
                    <Server className="w-8 h-8 text-cyan-300 flex-shrink-0" />
                    <div className="flex flex-col gap-1">
                      <h4 className="text-lg font-medium text-white">
                        Back-End Development
                      </h4>
                      <p className="text-sm text-gray-400">
                        Designing robust APIs and databases
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-6 border border-teal-700/30 hover:border-teal-600/50 hover:bg-gradient-to-br hover:from-teal-900/10 hover:to-teal-800/5 transition-all duration-300 flex items-center gap-4">
                    <Brain className="w-8 h-8 text-teal-300 flex-shrink-0" />
                    <div className="flex flex-col gap-1">
                      <h4 className="text-lg font-medium text-white">
                        Artificial Intelligence
                      </h4>
                      <p className="text-sm text-gray-400">
                        Productionalizing artificial intelligence systems
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
