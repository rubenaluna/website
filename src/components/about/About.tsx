import { getGreeting } from "@/lib/utils";
import { type FC } from "react";
import { useAboutMeTimeline } from "./use-about-me-timeline";

export const About: FC = () => {
  useAboutMeTimeline();

  return (
    <div className="about w-screen h-screen">
      <div className="about-header top-0 left-0 w-full h-12 flex items-center px-6 py-4 space-x-2">
        <div className="w-3 h-3 bg-white"></div>
        <h2 className="text-lg uppercase mono text-gray-400">ABOUT</h2>
      </div>
      <div className="about-body max-w-7xl h-full mx-auto flex flex-col justify-center px-6">
        <section
          id="about"
          className="about-content min-h-128 flex flex-col bg-white/5 rounded-2xl p-8 border border-white/10"
        >
          <div className="w-full h-full flex justify-center items-center space-x-4">
            <img
              className="w-[250px] h-[250px] rounded-full object-cover bg-white/5 border border-white/10"
              src="/headshot.png"
              alt="Ruben Luna"
            />
            <div className="space-y-4">
              <h4 className="about-title mono text-4xl lg:text-5xl leading-tight uppercase font-light text-gray-200">
                {getGreeting()}
              </h4>
              <p className="text-md text-gray-300">
                I'm Ruben Luna, a software developer based out of the
                Dallas-Fort Worth area of Texas. I have specialized in building
                frictionless and intricate web applications for over six years.
                My full-stack experience enables me to bring ideas to life from
                back-end to front-end and concept to delivery.
              </p>

              <div className="w-1/2 h-1 bg-white mx-auto"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
