import { Background } from "@/components/Background";
import { Logo } from "@/components/Logo";
import { Navigation } from "@/components/Navigation";
import { About } from "@/components/about/About";
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
        {/* <Contact /> */}

        {/* 
        <section id="education" className="py-24 px-6 bg-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-16">
              <div className="space-y-4">
                <h2 className="text-5xl font-normal">Education</h2>
                <div className="w-16 h-1 bg-white mx-auto"></div>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-normal">
                      Bachelor of Science in Computer Science
                    </h3>
                    <h4 className="text-xl text-gray-300">
                      The University of Texas at Dallas
                    </h4>
                    <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-8 space-y-2 sm:space-y-0 text-gray-400 mono">
                      <span>Aug. 2015 - May 2019</span>
                      <span>Bachelor of Science in Computer Science</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-16">
              <div className="space-y-4">
                <h2 className="text-5xl font-normal">Let's Connect</h2>
                <div className="w-16 h-1 bg-white mx-auto"></div>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto text-minimal">
                  I'm always interested in new opportunities and exciting
                  projects. Let's discuss how we can work together.
                </p>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                  <div className="text-center space-y-8">
                    <div>
                      <h3 className="text-2xl font-normal mb-4">
                        Get In Touch
                      </h3>
                      <p className="text-gray-300 text-minimal">
                        I was born, raised and currently reside in the Dallas -
                        Fort Worth Metroplex. I live with my incredible wife,
                        Amy, and our two cats, Pewter and Nico! My hobbies
                        include strength-training, discovering and creating
                        music, and playing story-rich video games.
                      </p>
                      <div className="mt-4 text-sm text-gray-400 mono">
                        <p>Phone: (214) 382-7504</p>
                        <p>Email: rubenaluna@outlook.com</p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                      <button className="px-8 py-3 bg-white text-black font-medium hover:bg-gray-200 transition-colors">
                        Send Message
                      </button>
                      <button className="px-8 py-3 border border-white/30 hover:border-white/60 transition-colors">
                        Download CV
                      </button>
                    </div>

                    <div className="pt-8 border-t border-white/10">
                      <p className="text-gray-400">
                        Thanks for taking the time to read through my website!
                      </p>
                      <p className="text-white font-medium mt-2">
                        Cheers,
                        <br />
                        Ruben
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        */}
      </div>
    </div>
  );
};
