import { DarkVeilBackground } from "@/components/ui/shadcn-io/dark-veil-background";
import { useHomeTimeline } from "@/lib/use-home-timeline";
import { type FC } from "react";

export const Home: FC = () => {
  useHomeTimeline();

  return (
    <div className="h-full text-black">
      <DarkVeilBackground
        className="background fixed opacity-0"
        hueShift={0}
        scanlineIntensity={0.5}
        scanlineFrequency={1}
        noiseIntensity={0.1}
      />
      <div className="w-full h-full absolute">
        <div className="fixed w-full flex justify-center p-5">
          <div className="logo">RL</div>
        </div>

        <section id="hero" className="h-full p-5 flex flex-col justify-center">
          <div className="final h-full text-[1vw] flex items-end">
            <span>Full Stack Web Developer</span>
          </div>
          <div className="flex h-full justify-center items-end">
            <div className="name text-[16vw]">RUBEN LUNA</div>
          </div>
        </section>

        <section id="aboutme" className="h-full p-10 flex items-center">
          <div>
            <h2>About Me</h2>
            <div>
              I'm a full-stack software enginner with over five years of
              experience in both front-end and back-end web development. I have
              a proven track record of managing teams and leading projects.
            </div>
          </div>

          <img className="mt-auto -mb-10 -mr-10" src="headshot.png" />
        </section>

        <section
          id="workexperience"
          className="h-full p-10 flex flex-col items-center"
        >
          <h2>Work Experience</h2>
          <h3>Worlds</h3>
          <div>Feb. 2019 - Present</div>
          <ul>
            <li>
              <h4>UI Team Lead</h4>
              <div>
                Led the development of various user interfaces, including a
                website used by data scientists to train object detection models
                and an application used by operations analysts to monitor
                activity in their physical environments. Managed a team of two
                front-end engineers and facilitated agile processes. Worked
                closely with UI/UX designers and product teams to translate
                ideas into frictionless web applications.
              </div>
              <div>
                <h5>Relevant Skills</h5>
                <ul>
                  <li>Typescript</li>
                  <li>React</li>
                  <li>TailwindCSS</li>
                </ul>
              </div>
            </li>
            <li>
              <h4>Software Engineer</h4>
              <div>
                Led the development of a GraphQL API used by clients to leverage
                the Worlds platform to implement custom solutions and
                automations for their operations. Developed various custom
                solutions for clients that performed their business logic,
                automated their procedures and interacted with their physical
                and technical infrastructure. Developed internal services
              </div>
              <div>
                <h5>Relevant Skills</h5>
                <ul>
                  <li>Java</li>
                  <li>Spring Boot</li>
                  <li>GraphQL</li>
                  <li>PostgreSQL</li>
                  <li>Docker</li>
                  <li>Python</li>
                </ul>
              </div>
            </li>
            <li>
              <h4>Software Engineer Intern</h4>
              <div>
                Led the development of an application that simulated live
                digital twins of clients' physical environments.
              </div>
              <div>
                <h5>Relevant Skills</h5>
                <ul>
                  <li>Typescript</li>
                  <li>React</li>
                  <li>Babylon.js</li>
                  <li>Unity</li>
                </ul>
              </div>
            </li>
          </ul>
        </section>
        <section id="education" className="h-full p-10 items-center">
          <h2>Education</h2>
          <h3>Bachelor of Science in Computer Science</h3>
          <h4>The Univeristy of Texas At Dallas</h4>
          <div>Aug. 2016 - May 2019</div>
          <div>GPA: 3.725 - Cum Laude</div>
        </section>
        <section id="biography" className="h-full p-10 items-center">
          <h2>Biography</h2>
          <div>
            I was born, raised and currently reside in the Dallas - Fort Worth
            Metroplex. I live with my incredible wife, Amy, and our two cats,
            Pewter and Nico! My hobbies include strength-training, discovering
            and creating music, and playing story-rich video games. Thanks for
            taking the time to read through my website!
          </div>
          <div>Cheers,</div>
          <div>Ruben</div>
        </section>
      </div>
    </div>
  );
};
