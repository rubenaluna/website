import { Mail } from "lucide-react";
import { type FC } from "react";
import { useContactTimeline } from "./use-contact-timeline";

export const Contact: FC = () => {
  useContactTimeline();

  return (
    <div className="contact w-screen h-screen">
      <div className="contact-header top-0 left-0 w-full h-12 flex items-center px-6 py-4 space-x-2">
        <div className="w-3 h-3 bg-white"></div>
        <h2 className="text-lg uppercase mono text-gray-400">CONTACT</h2>
      </div>
      <div className="contact-body max-w-7xl h-full mx-auto flex flex-col justify-center px-6">
        <section
          id="contact"
          className="contact-content h-full flex flex-col justify-center"
        >
          <div className="max-w-3xl mx-auto w-full space-y-8">
            <div className="bg-white/5 rounded-2xl p-12 border border-white/10">
              <div className="text-center space-y-8">
                <div className="space-y-4">
                  <h3 className="text-4xl font-normal text-white">
                    Let's Connect
                  </h3>
                  <div className="w-16 h-1 bg-white mx-auto"></div>
                  <p className="text-lg text-gray-300 max-w-xl mx-auto">
                    I'm always interested in new opportunities and exciting
                    projects. Let's discuss how we can work together.
                  </p>
                </div>

                <a
                  href="mailto:rubenaluna@outlook.com"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-medium hover:bg-gray-200 transition-colors rounded-lg"
                >
                  <Mail className="w-5 h-5" />
                  Send Email
                </a>

                <div className="pt-6 text-gray-400">
                  <p className="mono text-sm">rubenaluna@outlook.com</p>
                </div>
              </div>
            </div>

            <div className="text-center py-8">
              <p className="text-sm text-gray-500 mono">© 2026 Ruben Luna</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
