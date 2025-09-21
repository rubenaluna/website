import { Clock } from "@/components/Clock";
import { DarkVeilBackground } from "@/components/DarkVeilBackground";
import { useAboutMeTimeline } from "@/lib/use-about-me-timeline";
import { useHeroTimeline } from "@/lib/use-hero-timeline";
import { type FC } from "react";

export const Home: FC = () => {
  useHeroTimeline();
  useAboutMeTimeline();

  return (
    <div className="min-h-screen bg-black text-white">
      <DarkVeilBackground
        className="background-dark fixed"
        hueShift={0}
        scanlineIntensity={0.2}
        scanlineFrequency={0.3}
        noiseIntensity={0.03}
      />

      <div className="w-full relative text-white">
        {/* Logo - positioned independently */}
        <div className="logo fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-normal tracking-widest mono text-white z-50">
          RL
        </div>

        {/* Navigation */}
        <nav className="navbar fixed top-0 left-0 right-0 z-40 bg-black/40 backdrop-blur-sm border-b border-white/10">
          <div className="w-full px-6 py-4 flex items-center justify-between relative">
            {/* Left - Clock */}
            <div className="flex items-center final text-white">
              <Clock />
            </div>

            {/* Right - Navigation */}
            <div className="flex items-center final">
              <div className="hidden md:flex items-center space-x-8 text-sm font-normal tracking-widest uppercase mono text-white">
                <a
                  href="#about"
                  className="hover:text-gray-300 transition-colors"
                >
                  About
                </a>
                <a
                  href="#experience"
                  className="hover:text-gray-300 transition-colors"
                >
                  Experience
                </a>
                <a
                  href="#education"
                  className="hover:text-gray-300 transition-colors"
                >
                  Education
                </a>
                <a
                  href="#contact"
                  className="hover:text-gray-300 transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section
          id="hero"
          className="hero h-screen flex items-center justify-center px-6 pt-20"
        >
          <div className="hero__content max-w-7xl mx-auto w-full">
            <div className="max-w-4xl mx-auto text-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="final text-sm font-normal tracking-widest uppercase text-gray-400 mono">
                    Full-Stack Software Engineer
                  </div>
                  <h1 className="name text-6xl lg:text-8xl font-normal leading-none tracking-tight">
                    RUBEN
                    <br />
                    <span className="text-gray-400 font-light">LUNA</span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about-me py-24 px-6 bg-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-5xl font-normal">About Me</h2>
                  <div className="w-16 h-1 bg-white"></div>
                </div>
                <p className="text-xl text-gray-300 leading-relaxed text-minimal-light">
                  Full-stack Software Engineer with 6+ years of experience in
                  building complex, frictionless web applications. Known for
                  tackling technical challenges with ease and rapidly mastering
                  unfamiliar technologies in dynamic Agile environments.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed text-minimal">
                  Proven leader with experience in managing teams and driving
                  projects from concept to delivery in early- to mid-stage
                  startup environments. Expert in building complex, frictionless
                  web applications that solve real-world problems.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed text-minimal">
                  Specialized in full-stack development with TypeScript, React,
                  Java Spring Boot, and modern cloud infrastructure. Known for
                  rapidly mastering unfamiliar technologies and delivering
                  innovative solutions that drive business impact.
                </p>
              </div>
              <div className="space-y-8">
                <div className="flex justify-center">
                  <div className="w-80 h-80 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center">
                    <img
                      src="/headshot.jpeg"
                      alt="Ruben Luna"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-white/5 rounded-lg">
                    <div className="text-3xl font-normal mb-2 mono">6+</div>
                    <div className="text-sm text-gray-400 uppercase tracking-widest mono">
                      Years Experience
                    </div>
                  </div>
                  <div className="text-center p-6 bg-white/5 rounded-lg">
                    <div className="text-3xl font-normal mb-2 mono">4</div>
                    <div className="text-sm text-gray-400 uppercase tracking-widest mono">
                      Patents Awarded
                    </div>
                  </div>
                  <div className="text-center p-6 bg-white/5 rounded-lg">
                    <div className="text-3xl font-normal mb-2 mono">90%</div>
                    <div className="text-sm text-gray-400 uppercase tracking-widest mono">
                      Workload Reduction
                    </div>
                  </div>
                  <div className="text-center p-6 bg-white/5 rounded-lg">
                    <div className="text-3xl font-normal mb-2 mono">2</div>
                    <div className="text-sm text-gray-400 uppercase tracking-widest mono">
                      Engineers Led
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-16">
              <div className="text-center space-y-4">
                <h2 className="text-5xl font-normal">Work Experience</h2>
                <div className="w-16 h-1 bg-white mx-auto"></div>
              </div>

              <div className="space-y-12">
                {/* Worlds Experience */}
                <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
                    <div>
                      <h3 className="text-2xl font-normal mb-2">
                        Worlds Enterprises Inc.
                      </h3>
                      <p className="text-gray-400 mono">Feb. 2019 - Present</p>
                    </div>
                    <div className="mt-4 lg:mt-0">
                      <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium">
                        Full-time
                      </span>
                    </div>
                  </div>

                  <div className="space-y-8">
                    {/* UI Team Lead */}
                    <div className="border-l-2 border-white/20 pl-6">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <h4 className="text-xl font-normal">UI Team Lead</h4>
                        <span className="text-sm text-gray-400 mono">
                          Apr. 2025 - Present
                        </span>
                      </div>
                      <div className="space-y-4">
                        <p className="text-gray-300 leading-relaxed">
                          Led the development of an AI chat interface written in
                          TypeScript and React, which communicates with an LLM
                          (Gemma) to find and describe objects that have been
                          previously detected by Worlds' computer vision models.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                          Led the development of AIMS, a monitoring interface
                          for the US Air Force using React and TypeScript,
                          ensuring real-time security compliance on military
                          bases.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                          Developed Worlds NQ using React and TypeScript,
                          enabling data scientists to efficiently tag training
                          data for object detection models. Decreased model
                          deployment time by about 75%.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                          Led a team of two engineers, translating product goals
                          into requirements, features, and tasks. Prioritized
                          and assigned work while mentoring team members and
                          conducting code reviews to ensure delivery.
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {[
                          "TypeScript",
                          "React",
                          "LLM Integration",
                          "Team Leadership",
                          "Agile",
                        ].map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-white/10 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Software Engineer */}
                    <div className="border-l-2 border-white/20 pl-6">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <h4 className="text-xl font-normal">
                          Software Engineer
                        </h4>
                        <span className="text-sm text-gray-400 mono">
                          Feb. 2019 - Apr. 2025
                        </span>
                      </div>
                      <div className="space-y-4">
                        <p className="text-gray-300 leading-relaxed">
                          Led the design and development of the Worlds API and
                          its documentation: A GraphQL API written in Java
                          Spring Boot that exposes data generated by the Worlds
                          platform to the public. Enables forward-deployed and
                          client engineering teams to self-serve integrations,
                          reducing the internal engineering team's bespoke
                          solution workload by about 90%.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                          Designed and developed Worlds Navigator in TypeScript,
                          React, and Babylon.js, which simulates clients' site
                          activity and events in real-time within their digital
                          twins.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                          Proposed, designed, and developed Worlds Builder using
                          TypeScript, React and Babylon.js on the front-end and
                          Java and Spring Boot on the back-end. Allows internal
                          support teams and clients to create and maintain
                          digital twins. Resulted in a 50% decrease in client
                          onboarding time.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                          Developed Worlds Calibration, a Python microservice
                          that enables the real-time simulation of clients'
                          digital twins by attaching global positioning data to
                          objects detected by computer vision models. The
                          underlying logic has been incorporated into multiple
                          awarded patents.
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {[
                          "Java",
                          "Spring Boot",
                          "GraphQL",
                          "TypeScript",
                          "React",
                          "Babylon.js",
                          "Python",
                          "PostgreSQL",
                        ].map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-white/10 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
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

        {/* Contact Section */}
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
      </div>
    </div>
  );
};
