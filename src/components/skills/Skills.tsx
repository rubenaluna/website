import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import { useSkillsTimeline } from "./use-skills-timeline";

export const Skills = () => {
  const [skills, setSkills] = useState<string[]>([]);

  useSkillsTimeline(setSkills);

  return (
    <div className="skills w-screen h-screen">
      <div className="skills-header top-0 left-0 w-full h-12 flex items-center px-6 py-4 space-x-2">
        <div className="w-3 h-3 bg-white"></div>
        <h2 className="text-lg uppercase mono text-gray-400">SKILLS</h2>
      </div>
      <div className="skills-body max-w-7xl h-full mx-auto flex flex-col justify-center px-6">
        <section
          id="skills"
          className="skills-content min-h-128 flex flex-col justify-center items-center bg-white/5 rounded-2xl p-8 border border-white/10"
        >
          <h4 className="skills-title mono text-4xl lg:text-5xl leading-tight uppercase font-light text-gray-200">
            Full Stack Development
          </h4>
          <Accordion
            id="about-skills"
            className="w-full h-full flex justify-center items-center"
            type="multiple"
            value={skills}
          >
            <AccordionItem
              className="border-none w-full skills-be mx-12"
              value="Back-End Development"
            >
              <AccordionTrigger className="mono uppercase text-lg font-light text-gray-400 justify-center">
                Back-End Development
              </AccordionTrigger>
              <AccordionContent className="text-minimal-light">
                <div className="flex justify-center space-x-2 border-b border-gray-400 py-2">
                  <div>Java</div> <div>-</div> <div>Python</div> <div>-</div>
                  <div>C#</div>
                </div>
                <div className="flex justify-center space-x-2 border-b border-gray-400 py-2">
                  <div>Spring Boot</div>
                </div>
                <div className="flex justify-center space-x-2 border-b border-gray-400 py-2">
                  <div>REST</div> <div>-</div> <div>GraphQL</div> <div>- </div>
                  <div>gRPC</div>
                </div>
                <div className="flex justify-center space-x-2 border-b border-gray-400 py-2">
                  <div>PostgreSQL</div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className="border-none w-full skills-fe mx-12"
              value="Front-End Development"
            >
              <AccordionTrigger className="mono uppercase text-lg font-light text-gray-400 justify-center">
                Front-End Development
              </AccordionTrigger>
              <AccordionContent className="text-minimal-light">
                <div className="flex justify-center space-x-2 border-b border-gray-400 py-2">
                  <div>JavaScript</div>
                  <div>-</div> <div>TypeScript</div> <div>-</div>
                  <div>HTML</div> <div>CSS</div>
                </div>
                <div className="flex justify-center space-x-2 border-b border-gray-400 py-2">
                  <div>React</div> <div>-</div> <div>Tailwind CSS</div>
                  <div>-</div> <div>GSAP</div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className="border-none w-full skills-ops mx-12"
              value="Operations"
            >
              <AccordionTrigger className="mono uppercase text-lg font-light text-gray-400 justify-center">
                Operations
              </AccordionTrigger>
              <AccordionContent className="text-minimal-light">
                <div className="flex justify-center space-x-2 border-b border-gray-400 py-2">
                  <div>Kubernetes</div> <div>-</div> <div>Docker</div>
                  <div>-</div> <div>Git</div>
                </div>
                <div className="flex justify-center space-x-2 border-b border-gray-400 py-2">
                  <div>Redis</div> <div>-</div> <div>RabbitMQ</div>
                </div>
                <div className="flex justify-center space-x-2 border-b border-gray-400 py-2">
                  <div>AWS</div> <div>-</div> <div>Azure</div>
                </div>
                <div className="flex justify-center space-x-2 border-b border-gray-400 py-2">
                  <div>GitHub</div> <div>-</div> <div>Jira</div> <div>-</div>
                  <div>Cursor</div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </div>
    </div>
  );
};
