import { GlassCard } from "@/components/ui/GlassCard";
import { GradientDivider } from "@/components/ui/GradientDivider";
import { SectionHeader } from "@/components/ui/SectionHeader";
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
    <section
      id="skills"
      className="skills w-screen h-screen"
      aria-label="Technical skills section"
    >
      <SectionHeader className="skills-header">SKILLS</SectionHeader>
      <div className="skills-body max-w-7xl h-full mx-auto flex flex-col justify-center px-6 py-8">
        <div className="skills-content flex flex-col space-y-6">
          <GlassCard
            padding="lg"
            backdropBlur={true}
            className="flex flex-col space-y-4"
          >
            <h3 className="skills-title mono leading-tight uppercase font-light text-gray-200">
              Full Stack Development
            </h3>
            <span className="font-bold text-md text-gray-300">
              I have experience in a wide range of technologies and am always
              looking to learn new ones. I am known for my ability to quickly
              learn new skills and apply them to projects.
            </span>
            <div className="flex justify-center items-center">
              <GradientDivider width="md" className="final mt-6" />
            </div>
          </GlassCard>

          <div className="flex w-full gap-6">
            {/* Back-End Development Card */}
            <GlassCard
              padding="md"
              backdropBlur={true}
              className="skills-be flex-1 flex flex-col border-emerald-700/30 hover:border-emerald-600/50 transition-all duration-300"
            >
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
            </GlassCard>

            {/* Front-End Development Card */}
            <GlassCard
              padding="md"
              backdropBlur={true}
              className="skills-fe flex-1 flex flex-col border-teal-700/30 hover:border-teal-600/50 transition-all duration-300"
            >
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
            </GlassCard>

            {/* Operations Card */}
            <GlassCard
              padding="md"
              backdropBlur={true}
              className="skills-ops flex-1 flex flex-col border-cyan-700/30 hover:border-cyan-600/50 transition-all duration-300"
            >
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
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};
