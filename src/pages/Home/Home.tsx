import { useCallback, type FC } from "react";

export const Home: FC = () => {
  const getGreeting = useCallback(() => {
    const hour = new Date().getHours();

    if (6 <= hour && hour < 12) {
      return "Good morning,";
    }
    if (12 <= hour && hour < 18) {
      return "Good afternoon,";
    }

    return "Good evening,";
  }, []);

  return (
    <div className="h-full">
      <header
        id="header"
        className="h-full p-10 flex flex-col justify-center items-center animate-fade-in"
      >
        <h2>{getGreeting()}</h2>
        <h1>I'm Ruben Luna!</h1>
      </header>

      <section id="aboutme" className="h-full p-10 flex items-center">
        <div>
          <h2>About Me</h2>
          <div>
            I'm a full-stack software enginner with over five years of
            experience in both front-end and back-end web development. I have a
            proven track record of managing teams and leading projects.
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
        <ul>
          <li>
            <h4>UI Team Lead</h4>
            <div>
              Led the development of various user interfaces, including a
              website used by data scientists to train object detection models
              and an application used by operations analysts to monitor activity
              in their physical environments. Managed a team of two front-end
              engineers and facilitated agile processes. Worked closely with
              UI/UX designers and product teams to translate ideas into
              frictionless web applications.
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
              the Worlds platform to implement custom solutions and automations
              for their operations. Developed various custom solutions for
              clients that performed their business logic, automated their
              procedures and interacted with their physical and technical
              infrastructure. Developed internal services
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
              Led the development of an application that simulated live digital
              twins of clients' physical environments.
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
    </div>
  );
};
