import { Divider } from "@/components/ui/Divider";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Skill } from "@/components/ui/Skill";
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
      className="skills w-screen h-screen pt-12"
      aria-label="Technical skills section"
    >
      <div className="skills-body max-w-7xl h-full mx-auto flex flex-col justify-center lg:px-6 px-4 lg:py-8 py-4">
        <div className="skills-content flex flex-col space-y-6">
          <GlassCard
            padding="lg"
            backdropBlur={true}
            className="flex flex-col lg:space-y-4 space-y-2"
          >
            <SectionHeader text="Skills" />
            <span className="font-bold text-md text-gray-300 lg:text-base text-sm">
              I have experience in a wide range of technologies and am always
              looking to learn new ones. I am known for my ability to quickly
              learn new skills and apply them to projects.
            </span>
            <div className="flex justify-center items-center">
              <Divider width="md" className="final lg:mt-6 mt-2" />
            </div>

            <div className="flex lg:flex-row flex-col w-full lg:gap-6 gap-2">
              {/* Back-End Development Card */}
              <div className="skills-be flex-1 flex flex-col bg-white/5 rounded-xl lg:p-6 p-2 border border-white/10 items-center justify-center lg:gap-4 gap-2">
                <h3 className="mono uppercase lg:text-lg text-xs font-light">
                  Back-End Development
                </h3>
                <div className="flex flex-col h-full w-full justify-center items-center text-minimal-light overflow-hidden">
                  <div className="flex w-full justify-center items-center space-x-4 border-b border-gray-400/30 lg:py-4 py-2">
                    <Skill icon={<FaJava className="text-2xl" />} name="Java" />
                    <div className="text-gray-500 self-center">•</div>
                    <Skill
                      icon={<SiPython className="text-2xl text-white/50" />}
                      name="Python"
                    />
                    <div className="text-gray-500 self-center">•</div>
                    <Skill
                      icon={
                        <TbBrandCSharp className="text-2xl text-white/50" />
                      }
                      name="C#"
                    />
                  </div>
                  <div className="flex w-full justify-center items-center lg:space-x-4 space-x-2 border-b border-gray-400/30 lg:py-4 py-2">
                    <Skill
                      icon={<SiSpring className="text-2xl text-white/50" />}
                      name="Spring Boot"
                    />
                    <div className="text-gray-500 self-center">•</div>
                    <Skill
                      icon={<SiNodedotjs className="text-2xl text-white/50" />}
                      name="Node.js"
                    />
                  </div>
                  <div className="flex w-full justify-center items-center space-x-4 border-b border-gray-400/30 lg:py-4 py-2">
                    <Skill
                      icon={<TbApi className="text-2xl text-white/50" />}
                      name="REST"
                    />
                    <div className="text-gray-500 self-center">•</div>
                    <Skill
                      icon={
                        <img
                          src="/tech-icons/grpc.svg"
                          alt="gRPC"
                          className="w-6 h-6"
                        />
                      }
                      name="gRPC"
                    />
                    <div className="text-gray-500 self-center">•</div>
                    <Skill
                      icon={<SiGraphql className="text-2xl text-white/50" />}
                      name="GraphQL"
                    />
                  </div>
                  <div className="flex w-full justify-center items-center space-x-4 lg:py-4 py-2">
                    <Skill
                      icon={<SiPostgresql className="text-2xl text-white/50" />}
                      name="PostgreSQL"
                    />
                  </div>
                </div>
              </div>

              {/* Front-End Development Card */}
              <div className="skills-fe flex-1 flex flex-col bg-white/5 rounded-xl lg:p-6 p-2 border border-white/10 items-center justify-center lg:gap-4 gap-2">
                <h3 className="mono uppercase lg:text-lg text-xs font-light">
                  Front-End Development
                </h3>
                <div className="flex flex-col h-full w-full justify-center items-center text-minimal-light overflow-hidden">
                  <div className="flex w-full justify-center items-center lg:space-x-4 space-x-2 border-b border-gray-400/30 lg:py-4 py-2">
                    <Skill
                      icon={<SiJavascript className="text-2xl text-white/50" />}
                      name="JavaScript"
                    />
                    <div className="text-gray-500 self-center">•</div>
                    <Skill
                      icon={<SiTypescript className="text-2xl text-white/50" />}
                      name="TypeScript"
                    />
                    <div className="text-gray-500 self-center">•</div>
                    <Skill
                      icon={
                        <div className="flex gap-0.5">
                          <SiHtml5 className="text-2xl text-white/50" />
                          <SiCss3 className="text-2xl text-white/50" />
                        </div>
                      }
                      name="HTML/CSS"
                    />
                  </div>
                  <div className="flex w-full justify-center items-center lg:space-x-4 space-x-2 lg:py-4 py-2">
                    <Skill
                      icon={
                        <SiReact className="text-2xl text-white/50      " />
                      }
                      name="React"
                    />
                    <div className="text-gray-500 self-center">•</div>
                    <Skill
                      icon={<SiVuedotjs className="text-2xl text-white/50" />}
                      name="Vue.js"
                    />
                    <div className="text-gray-500 self-center">•</div>
                    <Skill
                      icon={
                        <SiTailwindcss className="text-2xl text-white/50" />
                      }
                      name="Tailwind CSS"
                    />
                    <div className="text-gray-500 self-center">•</div>
                    <Skill
                      icon={
                        <img
                          src="/tech-icons/gsap-white.svg"
                          alt="GSAP"
                          className="w-6 h-6"
                        />
                      }
                      name="GSAP"
                    />
                  </div>
                </div>
              </div>

              {/* Operations Card */}
              <div className="skills-ops flex-1 flex flex-col bg-white/5 rounded-xl lg:p-6 p-2 border border-white/10 items-center justify-center lg:gap-4 gap-2">
                <h3 className="mono uppercase lg:text-lg text-xs font-light">
                  Operations
                </h3>
                <div className="flex flex-col h-full w-full justify-center items-center text-minimal-light overflow-hidden">
                  <div className="flex w-full justify-center items-center lg:space-x-4 space-x-2 border-b border-gray-400/30 lg:py-4 py-2">
                    <Skill
                      icon={<SiKubernetes className="text-2xl text-white/50" />}
                      name="Kubernetes"
                    />
                    <div className="text-gray-500 self-center">•</div>
                    <Skill
                      icon={<SiDocker className="text-2xl text-white/50" />}
                      name="Docker"
                    />
                    <div className="text-gray-500 self-center">•</div>
                    <Skill
                      icon={<SiGit className="text-2xl text-white/50" />}
                      name="Git"
                    />
                  </div>
                  <div className="flex w-full justify-center items-center lg:space-x-4 space-x-2 border-b border-gray-400/30 lg:py-4 py-2">
                    <Skill
                      icon={<SiRedis className="text-2xl text-white/50" />}
                      name="Redis"
                    />
                    <div className="text-gray-500 self-center">•</div>
                    <Skill
                      icon={<SiRabbitmq className="text-2xl text-white/50" />}
                      name="RabbitMQ"
                    />
                  </div>
                  <div className="flex w-full justify-center items-center lg:space-x-4 space-x-2 border-b border-gray-400/30 lg:py-4 py-2">
                    <Skill
                      icon={
                        <SiAmazonwebservices className="text-2xl text-white/50" />
                      }
                      name="AWS"
                    />
                    <div className="text-gray-500 self-center">•</div>
                    <Skill
                      icon={<FaMicrosoft className="text-2xl text-white/50" />}
                      name="Azure"
                    />
                  </div>
                  <div className="flex w-full justify-center items-center lg:space-x-4 space-x-2 lg:py-4 py-2">
                    <Skill
                      icon={<SiGithub className="text-2xl text-white/50" />}
                      name="GitHub"
                    />
                    <div className="text-gray-500 self-center">•</div>
                    <Skill
                      icon={<SiJira className="text-2xl text-white/50" />}
                      name="Jira"
                    />
                    <div className="text-gray-500 self-center">•</div>
                    <Skill
                      icon={
                        <img
                          src="/tech-icons/cursor.svg"
                          alt="Cursor"
                          className="w-6 h-6 text-white/50"
                        />
                      }
                      name="Cursor"
                    />
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};
