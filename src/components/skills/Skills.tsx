import { FaJava, FaMicrosoft } from "react-icons/fa";
import {
  SiAmazonwebservices,
  SiCss3,
  SiDocker,
  SiGit,
  SiGithub,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiJira,
  SiKubernetes,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiRabbitmq,
  SiReact,
  SiRedis,
  SiSpring,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbApi, TbBrandCSharp } from "react-icons/tb";
import { useSkillsTimeline } from "./use-skills-timeline";

export const Skills = () => {
  useSkillsTimeline();

  return (
    <div className="skills w-screen h-screen">
      <div className="skills-header top-0 left-0 w-full h-12 flex items-center px-6 py-4 space-x-2">
        <div className="w-3 h-3 bg-white"></div>
        <h2 className="text-lg uppercase mono text-gray-400">SKILLS</h2>
      </div>
      <div className="skills-body max-w-7xl h-full mx-auto flex flex-col justify-center px-6 py-8">
        <section id="skills" className="skills-content flex flex-col space-y-6">
          <div className="flex flex-col space-y-4 bg-white/5 rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
            <h3 className="skills-title mono leading-tight uppercase font-light text-gray-200">
              Full Stack Development
            </h3>
            <span className="font-bold text-md text-gray-300">
              I have experience in a wide range of technologies and am always
              looking to learn new ones. I am known for my ability to quickly
              learn new skills and apply them to projects.
            </span>
            <div className="flex justify-center items-center">
              <div className="final w-32 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 mt-6 rounded-full"></div>
            </div>
          </div>

          <div className="flex w-full gap-6">
            {/* Back-End Development Card */}
            <div className="skills-be flex-1 flex flex-col bg-white/5 rounded-2xl p-6 border border-emerald-700/30 hover:border-emerald-600/50 backdrop-blur-sm transition-all duration-300">
              <h3 className="mono uppercase text-lg font-light text-emerald-300 text-center hover:text-emerald-200 transition-colors">
                Back-End Development
              </h3>
              <div className="flex flex-col h-full w-full justify-center items-center text-minimal-light overflow-hidden">
                <div className="flex w-full justify-center items-center space-x-4 border-b border-gray-400/30 py-4">
                  <div className="flex flex-col items-center gap-1">
                    <FaJava className="text-2xl" />
                    <span className="text-sm">Java</span>
                  </div>
                  <div className="text-gray-500 self-center">•</div>
                  <div className="flex flex-col items-center gap-1">
                    <SiPython className="text-2xl" />
                    <span className="text-sm">Python</span>
                  </div>
                  <div className="text-gray-500 self-center">•</div>
                  <div className="flex flex-col items-center gap-1">
                    <TbBrandCSharp className="text-2xl" />
                    <span className="text-sm">C#</span>
                  </div>
                </div>
                <div className="flex w-full justify-center items-center space-x-4 border-b border-gray-400/30 py-4">
                  <div className="flex flex-col items-center gap-1">
                    <SiSpring className="text-2xl" />
                    <span className="text-sm whitespace-nowrap">
                      Spring Boot
                    </span>
                  </div>
                  <div className="text-gray-500 self-center">•</div>
                  <div className="flex flex-col items-center gap-1">
                    <SiNodedotjs className="text-2xl" />
                    <span className="text-sm">Node.js</span>
                  </div>
                </div>
                <div className="flex w-full justify-center items-center space-x-4 border-b border-gray-400/30 py-4">
                  <div className="flex flex-col items-center gap-1">
                    <TbApi className="text-2xl" />
                    <span className="text-sm">REST</span>
                  </div>
                  <div className="text-gray-500 self-center">•</div>
                  <div className="flex flex-col items-center gap-1">
                    <img
                      src="/tech-icons/grpc.svg"
                      alt="gRPC"
                      className="w-6 h-6"
                    />
                    <span className="text-sm">gRPC</span>
                  </div>
                  <div className="text-gray-500 self-center">•</div>
                  <div className="flex flex-col items-center gap-1">
                    <SiGraphql className="text-2xl" />
                    <span className="text-sm">GraphQL</span>
                  </div>
                </div>
                <div className="flex w-full justify-center items-center space-x-4 py-4">
                  <div className="flex flex-col items-center gap-1">
                    <SiPostgresql className="text-2xl" />
                    <span className="text-sm">PostgreSQL</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Front-End Development Card */}
            <div className="skills-fe flex-1 flex flex-col bg-white/5 rounded-2xl p-6 border border-teal-700/30 hover:border-teal-600/50 backdrop-blur-sm transition-all duration-300">
              <h3 className="mono uppercase text-lg font-light text-teal-300 text-center hover:text-teal-200 transition-colors">
                Front-End Development
              </h3>
              <div className="flex flex-col h-full w-full justify-center items-center text-minimal-light overflow-hidden">
                <div className="flex w-full justify-center items-center space-x-4 border-b border-gray-400/30 py-4">
                  <div className="flex flex-col items-center gap-1">
                    <SiJavascript className="text-2xl" />
                    <span className="text-sm">JavaScript</span>
                  </div>
                  <div className="text-gray-500 self-center">•</div>
                  <div className="flex flex-col items-center gap-1">
                    <SiTypescript className="text-2xl" />
                    <span className="text-sm">TypeScript</span>
                  </div>
                  <div className="text-gray-500 self-center">•</div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="flex gap-0.5">
                      <SiHtml5 className="text-2xl" />
                      <SiCss3 className="text-2xl" />
                    </div>
                    <span className="text-sm">HTML/CSS</span>
                  </div>
                </div>
                <div className="flex w-full justify-center items-center space-x-4 py-4">
                  <div className="flex flex-col items-center gap-1">
                    <SiReact className="text-2xl" />
                    <span className="text-sm">React</span>
                  </div>
                  <div className="text-gray-500 self-center">•</div>
                  <div className="flex flex-col items-center gap-1">
                    <SiVuedotjs className="text-2xl" />
                    <span className="text-sm">Vue.js</span>
                  </div>
                  <div className="text-gray-500 self-center">•</div>
                  <div className="flex flex-col items-center gap-1">
                    <SiTailwindcss className="text-2xl" />
                    <span className="text-sm whitespace-nowrap">
                      Tailwind CSS
                    </span>
                  </div>
                  <div className="text-gray-500 self-center">•</div>
                  <div className="flex flex-col items-center gap-1">
                    <img
                      src="/tech-icons/gsap-white.svg"
                      alt="GSAP"
                      className="w-6 h-6"
                    />
                    <span className="text-sm">GSAP</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Operations Card */}
            <div className="skills-ops flex-1 bg-white/5 rounded-2xl p-6 border border-cyan-700/30 hover:border-cyan-600/50 backdrop-blur-sm flex flex-col transition-all duration-300">
              <h3 className="mono uppercase text-lg font-light text-cyan-300 text-center hover:text-cyan-200 transition-colors">
                Operations
              </h3>
              <div className="flex flex-col h-full w-full justify-center items-center text-minimal-light overflow-hidden">
                <div className="flex w-full justify-center items-center space-x-4 border-b border-gray-400/30 py-4">
                  <div className="flex flex-col items-center gap-1">
                    <SiKubernetes className="text-2xl" />
                    <span className="text-sm">Kubernetes</span>
                  </div>
                  <div className="text-gray-500 self-center">•</div>
                  <div className="flex flex-col items-center gap-1">
                    <SiDocker className="text-2xl" />
                    <span className="text-sm">Docker</span>
                  </div>
                  <div className="text-gray-500 self-center">•</div>
                  <div className="flex flex-col items-center gap-1">
                    <SiGit className="text-2xl" />
                    <span className="text-sm">Git</span>
                  </div>
                </div>
                <div className="flex w-full justify-center items-center space-x-4 border-b border-gray-400/30 py-4">
                  <div className="flex flex-col items-center gap-1">
                    <SiRedis className="text-2xl" />
                    <span className="text-sm">Redis</span>
                  </div>
                  <div className="text-gray-500 self-center">•</div>
                  <div className="flex flex-col items-center gap-1">
                    <SiRabbitmq className="text-2xl" />
                    <span className="text-sm">RabbitMQ</span>
                  </div>
                </div>
                <div className="flex w-full justify-center items-center space-x-4 border-b border-gray-400/30 py-4">
                  <div className="flex flex-col items-center gap-1">
                    <SiAmazonwebservices className="text-2xl" />
                    <span className="text-sm">AWS</span>
                  </div>
                  <div className="text-gray-500 self-center">•</div>
                  <div className="flex flex-col items-center gap-1">
                    <FaMicrosoft className="text-2xl" />
                    <span className="text-sm">Azure</span>
                  </div>
                </div>
                <div className="flex w-full justify-center items-center space-x-4 py-4">
                  <div className="flex flex-col items-center gap-1">
                    <SiGithub className="text-2xl" />
                    <span className="text-sm">GitHub</span>
                  </div>
                  <div className="text-gray-500 self-center">•</div>
                  <div className="flex flex-col items-center gap-1">
                    <SiJira className="text-2xl" />
                    <span className="text-sm">Jira</span>
                  </div>
                  <div className="text-gray-500 self-center">•</div>
                  <div className="flex flex-col items-center gap-1">
                    <img
                      src="/tech-icons/cursor.svg"
                      alt="Cursor"
                      className="w-6 h-6"
                    />
                    <span className="text-sm">Cursor</span>
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
