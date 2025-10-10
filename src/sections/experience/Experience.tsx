import { DatePill } from "@/components/ui/DatePill";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TechTag } from "@/components/ui/TechTag";
import { Code, GraduationCap, Rocket, Users } from "lucide-react";
import { type FC } from "react";
import { useExperienceTimeline } from "./use-experience-timeline";

export const Experience: FC = () => {
  useExperienceTimeline();

  return (
    <section
      id="experience"
      className="experience w-screen h-screen"
      aria-label="Work experience section"
    >
      <SectionHeader className="experience-header">EXPERIENCE</SectionHeader>

      <div className="experience-body flex flex-col h-full w-full">
        {/* Company Header */}
        <div className="experience-header-card bg-white/5 border-b border-white/10 backdrop-blur-sm px-8 py-6">
          <div className="flex flex-row items-center justify-between w-full mx-auto">
            <div className="flex items-center gap-4">
              <img src="/worlds-logo.png" alt="Worlds" className="w-48" />
              <div className="h-12 w-px bg-white/20"></div>

              <h3 className="text-xl font-medium text-white">
                Worlds Enterprises Inc.
              </h3>
            </div>
            <DatePill size="md">Feb. 2019 — Present</DatePill>
          </div>
        </div>

        {/* Timeline Container - Horizontal */}
        <div className="flex-1 overflow-hidden px-8 py-12 relative">
          {/* Timeline Line - Horizontal - Full Width */}
          <div className="absolute top-[80px] left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-900/50 via-teal-800/50 to-cyan-900/50"></div>

          <div className="experience-timeline-container relative flex gap-32 min-w-max h-full items-start">
            {/* Internship Position */}
            <div className="experience-role-1 relative flex flex-col items-center gap-6 w-[600px]">
              {/* Timeline Dot */}
              <div className="relative flex-shrink-0 z-10">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-700 to-emerald-900 flex items-center justify-center border-4 border-gray-900">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Content Card */}
              <GlassCard
                padding="md"
                hover={true}
                backdropBlur={true}
                className="flex-1 w-full"
              >
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-2xl font-semibold text-white">Intern</h4>
                  <DatePill>Feb. 2019 — May. 2019</DatePill>
                </div>

                <div className="space-y-4">
                  {/* Key Responsibilites */}
                  <div>
                    <h5 className="text-sm uppercase tracking-wider text-gray-400 mono mb-3 flex items-center gap-2">
                      <Rocket className="w-4 h-4" />
                      Key Responsibilites
                    </h5>
                    <div className="space-y-3">
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <h6 className="font-medium text-white mb-1">
                          Digital Twin Visualization
                        </h6>
                        <p className="text-sm text-gray-400">
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
                      <TechTag color="emerald">Unity</TechTag>
                      <TechTag color="emerald">C#</TechTag>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>

            {/* Software Engineer Position */}
            <div className="experience-role-2 relative flex flex-col items-center gap-6 w-[600px]">
              {/* Timeline Dot */}
              <div className="relative flex-shrink-0 z-10">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-700 to-teal-900 flex items-center justify-center border-4 border-gray-900">
                  <Code className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Content Card */}
              <GlassCard
                padding="md"
                hover={true}
                backdropBlur={true}
                className="flex-1 w-full"
              >
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-2xl font-semibold text-white">
                    Software Engineer
                  </h4>
                  <DatePill>May. 2019 — Apr. 2025</DatePill>
                </div>

                <div className="space-y-4">
                  {/* Key Responsibilites */}
                  <div>
                    <h5 className="text-sm uppercase tracking-wider text-gray-400 mono mb-3 flex items-center gap-2">
                      <Rocket className="w-4 h-4" />
                      Key Responsibilites
                    </h5>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <h6 className="font-medium text-white mb-1">
                          Worlds API
                        </h6>
                        <p className="text-sm text-gray-400">
                          Designed and developed a GraphQL API exposing platform
                          data, enabling self-service integrations and reducing
                          bespoke solutions by ~90%.
                        </p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <h6 className="font-medium text-white mb-1">
                          Worlds Navigator
                        </h6>
                        <p className="text-sm text-gray-400">
                          Real-time site activity simulator for digital twin
                          visualization and event tracking.
                        </p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <h6 className="font-medium text-white mb-1">
                          Worlds Builder
                        </h6>
                        <p className="text-sm text-gray-400">
                          Full-stack digital twin creation and maintenance tool.
                          Reduced onboarding time by 50%.
                        </p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <h6 className="font-medium text-white mb-1">
                          Worlds Calibration
                        </h6>
                        <p className="text-sm text-gray-400">
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
                      <TechTag color="teal">Java</TechTag>
                      <TechTag color="teal">Spring Boot</TechTag>
                      <TechTag color="teal">TypeScript</TechTag>
                      <TechTag color="teal">React</TechTag>
                      <TechTag color="teal">Babylon.js</TechTag>
                      <TechTag color="teal">Python</TechTag>
                      <TechTag color="teal">GraphQL</TechTag>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>

            {/* UI Team Lead Position */}
            <div className="experience-role-3 relative flex flex-col items-center gap-6 w-[600px]">
              {/* Timeline Dot */}
              <div className="relative flex-shrink-0 z-10">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-700 to-cyan-900 flex items-center justify-center border-4 border-gray-900">
                  <Users className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Content Card */}
              <GlassCard
                padding="md"
                hover={true}
                backdropBlur={true}
                className="flex-1 w-full"
              >
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-2xl font-semibold text-white">
                    UI Team Lead
                  </h4>
                  <DatePill>Apr. 2025 — Present</DatePill>
                </div>

                <div className="space-y-4">
                  {/* Key Responsibilites */}
                  <div>
                    <h5 className="text-sm uppercase tracking-wider text-gray-400 mono mb-3 flex items-center gap-2">
                      <Rocket className="w-4 h-4" />
                      Key Responsibilites
                    </h5>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <h6 className="font-medium text-white mb-1">
                          AI Chat Interface
                        </h6>
                        <p className="text-sm text-gray-400">
                          Integrated LLM capabilities for object detection and
                          description from computer vision models.
                        </p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <h6 className="font-medium text-white mb-1">
                          AIMS Monitoring Interface
                        </h6>
                        <p className="text-sm text-gray-400">
                          Real-time security compliance monitoring system.
                        </p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <h6 className="font-medium text-white mb-1">
                          Worlds NQ
                        </h6>
                        <p className="text-sm text-gray-400">
                          Data tagging interface that decreased model deployment
                          time by ~75% for data scientists.
                        </p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <h6 className="font-medium text-white mb-1">
                          Team Leadership
                        </h6>
                        <p className="text-sm text-gray-400">
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
                      <TechTag color="cyan">TypeScript</TechTag>
                      <TechTag color="cyan">React</TechTag>
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
