import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientDivider } from "@/components/ui/GradientDivider";
import { Mail } from "lucide-react";
import { type FC } from "react";
import { useContactTimeline } from "./use-contact-timeline";

export const Contact: FC = () => {
  useContactTimeline();

  return (
    <section
      id="contact"
      className="contact w-screen h-screen pt-24"
      aria-label="Contact information section"
    >
      <div className="contact-body max-w-7xl h-full mx-auto flex flex-col justify-center px-6">
        <div className="contact-content h-full flex flex-col justify-center">
          <div className="max-w-3xl mx-auto w-full space-y-8">
            <GlassCard padding="lg" className="p-12">
              <div className="text-center space-y-8">
                <div className="space-y-4">
                  <h3 className="skills-title mono leading-tight uppercase font-light text-gray-200">
                    Let's Connect
                  </h3>
                  <GradientDivider width="sm" className="mx-auto" />
                  <p className="text-lg text-gray-300 max-w-xl mx-auto">
                    I'm always interested in new opportunities and exciting
                    projects. Let's discuss how we can work together.
                  </p>
                </div>

                <Button
                  href="mailto:rubenaluna@outlook.com"
                  variant="secondary"
                  icon={<Mail className="w-5 h-5" />}
                  ariaLabel="Send email to Ruben Luna"
                  className="gap-3"
                />
              </div>
            </GlassCard>

            <div className="text-center py-8">
              <p className="text-sm text-gray-500 mono">© 2026 Ruben Luna</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
