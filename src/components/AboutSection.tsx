import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useAboutMeTimeline } from "@/lib/use-about-me-timeline";
import { getGreeting } from "@/lib/utils";
import { useState, type FC } from "react";

export const AboutSection: FC = () => {
  const [skills, setSkills] = useState<string[]>([]);

  useAboutMeTimeline(setSkills);

  return (
    <section id="about" className="about w-screen h-screen">
      <div className="about-header fixed top-0 left-0 w-full h-12 flex items-center px-6 py-4 space-x-2">
        <div className="w-3 h-3 bg-white"></div>
        <h2 className="text-lg uppercase mono text-gray-400">ABOUT</h2>
      </div>
      <div className="about-body max-w-7xl h-full mx-auto flex flex-col justify-center px-6">
        <h3 className="about-title mono text-4xl lg:text-5xl leading-tight uppercase py-6 font-light text-gray-200">
          Full-Stack Web Development
        </h3>
        <div className="about-content flex bg-white/5 rounded-2xl p-8 border border-white/10">
          <div className="w-full h-full flex-1 flex flex-col justify-center items-center space-y-4">
            <img
              className="w-[250px] h-[250px] rounded-full object-cover"
              src="/headshot.jpeg"
              alt="Ruben Luna"
            />

            <p className="text-md text-gray-300">
              {getGreeting()}, I'm Ruben Luna. I'm a software developer based
              out of the Dallas-Fort Worth area of Texas. I have specialized in
              building frictionless and intricate web applications for over six
              years. My experience in both front-end and back-end development
              enables me to bring ideas to life from concept to delivery.
            </p>
          </div>
          <div className="h-full flex flex-1 justify-center items-center mx-12">
            <Accordion
              id="about-skill"
              className="w-full h-full flex flex-col justify-center"
              type="multiple"
              value={skills}
            >
              <AccordionItem
                className="border-none about-skill-be"
                value="Back-End Development"
              >
                <AccordionTrigger className="mono uppercase text-lg font-light text-gray-400">
                  Back-End Development
                </AccordionTrigger>
                <AccordionContent className="text-minimal-light">
                  <div className="border-bottom-gray-600 border-b py-2">
                    Java, Python, C#
                  </div>
                  <div className="border-bottom-gray-600 border-b py-2">
                    Spring Boot
                  </div>
                  <div className="border-bottom-gray-600 border-b py-2">
                    REST, GraphQL, gRPC
                  </div>
                  <div className="border-bottom-gray-600 border-b py-2">
                    PostgreSQL
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                className="border-none about-skill-fe"
                value="Front-End Development"
              >
                <AccordionTrigger className="mono uppercase text-lg font-light text-gray-400">
                  Front-End Development
                </AccordionTrigger>
                <AccordionContent className="text-minimal-light">
                  <div className="border-bottom-gray-600 border-b py-2">
                    JavaScript, TypeScript, HTML, CSS
                  </div>
                  <div className="border-bottom-gray-600 border-b py-2">
                    React, Tailwind CSS, GSAP
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};
