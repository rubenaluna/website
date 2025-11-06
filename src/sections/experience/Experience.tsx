import { SectionHeader } from "@/components/ui";
import { GlassCard } from "@/components/ui/GlassCard";
import { Pill } from "@/components/ui/Pill";
import { Code, GraduationCap, Rocket, Users } from "lucide-react";
import { type FC } from "react";
import { useExperienceTimeline } from "./use-experience-timeline";

export const Experience: FC = () => {
  useExperienceTimeline();

  return (
    <section
      id="experience"
      className="experience w-screen pt-24"
      aria-label="Work experience section"
    >
      <div className="experience-body max-w-7xl h-full mx-auto flex flex-col px-6">
        <div className="absolute translate-x-8 h-full w-px bg-white/10" />
        <div className="experience-company z-10">
          <GlassCard>
            <div className="flex lg:flex-row flex-col items-center justify-between gap-4">
              <SectionHeader text="Experience" className="mb-0" />

              <img
                src="/worlds-logo.png"
                alt="Worlds"
                className="w-32 sm:w-48"
              />

              <Pill>Feb. 2019 — Present</Pill>
            </div>
          </GlassCard>
        </div>

        {/* Timeline Container - Responsive */}
        <div className="flex flex-row mt-[50%]">
          <div className="flex flex-col items-start gap-8">
            <div className="flex lg:flex-row flex-col gap-6 w-full">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center border border-white/10 backdrop-blur-sm">
                <GraduationCap className="w-8 h-8 text-white/50 z-10" />
              </div>

              {/* Content Card */}
              <GlassCard className="flex-1 w-full">
                <div className="flex lg:flex-row flex-col sm:justify-between sm:items-center gap-2 sm:gap-0 mb-4">
                  <h4 className="text-2xl font-semibold text-white">Intern</h4>
                  <Pill>Feb. 2019 — May. 2019</Pill>
                </div>

                <div className="space-y-4">
                  {/* Key Responsibilites */}
                  <div>
                    <h5 className="text-sm uppercase tracking-wider text-gray-400 mono mb-3 flex items-center gap-2">
                      <Rocket className="w-4 h-4 text-white/50" />
                      Key Responsibilites
                    </h5>
                    <div className="space-y-3">
                      <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                        <h6 className="font-medium text-white mb-1">
                          Digital Twin Visualization
                        </h6>
                        <p className="text-sm text-gray-300">
                          Created a prototype for digital twin visualization in
                          Unity. Used for internal demos and presentations.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="pt-2">
                    <h5 className="text-sm uppercase tracking-wider text-gray-400 mono mb-2">
                      Technologies
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      <Pill>Unity</Pill>
                      <Pill>C#</Pill>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>

            {/* Software Engineer Position */}
            <div className="flex lg:flex-row flex-col gap-6 w-full">
              {/* Timeline Dot */}
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center border border-white/10 backdrop-blur-sm">
                <Code className="w-8 h-8 text-white/50 z-10" />
              </div>

              {/* Content Card */}
              <GlassCard className="flex-1 w-full">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0 mb-4">
                  <h4 className="text-2xl font-semibold text-white">
                    Software Engineer
                  </h4>
                  <Pill>May. 2019 — Apr. 2025</Pill>
                </div>

                <div className="space-y-4">
                  {/* Key Responsibilites */}
                  <div>
                    <h5 className="text-sm uppercase tracking-wider text-gray-400 mono mb-3 flex items-center gap-2">
                      <Rocket className="w-4 h-4 text-white/50" />
                      Key Responsibilites
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                        <h6 className="font-medium text-white mb-1">
                          Worlds API
                        </h6>
                        <p className="text-sm text-gray-300">
                          Designed and developed a GraphQL API exposing platform
                          data, enabling self-service integrations and reducing
                          bespoke solutions by ~90%.
                        </p>
                      </div>
                      <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                        <h6 className="font-medium text-white mb-1">
                          Worlds Navigator
                        </h6>
                        <p className="text-sm text-gray-300">
                          Real-time site activity simulator for digital twin
                          visualization and event tracking.
                        </p>
                      </div>
                      <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                        <h6 className="font-medium text-white mb-1">
                          Worlds Builder
                        </h6>
                        <p className="text-sm text-gray-300">
                          Full-stack digital twin creation and maintenance tool.
                          Reduced onboarding time by 50%.
                        </p>
                      </div>
                      <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                        <h6 className="font-medium text-white mb-1">
                          Worlds Calibration
                        </h6>
                        <p className="text-sm text-gray-300">
                          Microservice for real-time GPS data attachment to
                          computer vision objects. Core to multiple awarded
                          patents.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="pt-2">
                    <h5 className="text-sm uppercase tracking-wider text-gray-400 mono mb-2">
                      Technologies
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      <Pill>Java</Pill>
                      <Pill>Spring Boot</Pill>
                      <Pill>TypeScript</Pill>
                      <Pill>React</Pill>
                      <Pill>Babylon.js</Pill>
                      <Pill>Python</Pill>
                      <Pill>GraphQL</Pill>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>

            {/* UI Team Lead Position */}
            <div className="flex lg:flex-row flex-col gap-6 w-full">
              {/* Timeline Dot */}
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center border border-white/10 backdrop-blur-sm">
                <Users className="w-8 h-8 text-white/50 z-10" />
              </div>

              {/* Content Card */}
              <GlassCard className="flex-1 w-full">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0 mb-4">
                  <h4 className="text-2xl font-semibold text-white">
                    UI Team Lead
                  </h4>
                  <Pill>Apr. 2025 — Present</Pill>
                </div>

                <div className="space-y-4">
                  {/* Key Responsibilites */}
                  <div>
                    <h5 className="text-sm uppercase tracking-wider text-gray-400 mono mb-3 flex items-center gap-2">
                      <Rocket className="w-4 h-4 text-white/50" />
                      Key Responsibilites
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                        <h6 className="font-medium text-white mb-1">
                          AI Chat Interface
                        </h6>
                        <p className="text-sm text-gray-300">
                          Integrated LLM capabilities for object detection and
                          description from computer vision models.
                        </p>
                      </div>
                      <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                        <h6 className="font-medium text-white mb-1">
                          AIMS Monitoring Interface
                        </h6>
                        <p className="text-sm text-gray-300">
                          Real-time security compliance monitoring system.
                        </p>
                      </div>
                      <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                        <h6 className="font-medium text-white mb-1">
                          Worlds NQ
                        </h6>
                        <p className="text-sm text-gray-300">
                          Data tagging interface that decreased model deployment
                          time by ~75% for data scientists.
                        </p>
                      </div>
                      <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                        <h6 className="font-medium text-white mb-1">
                          Team Leadership
                        </h6>
                        <p className="text-sm text-gray-300">
                          Led 2 engineers, translating goals into features,
                          mentoring team members, and conducting code reviews.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="pt-2">
                    <h5 className="text-sm uppercase tracking-wider text-gray-400 mono mb-2">
                      Technologies
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      <Pill>TypeScript</Pill>
                      <Pill>React</Pill>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
