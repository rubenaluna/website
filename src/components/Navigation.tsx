import { Clock } from "@/components/Clock";
import { type FC } from "react";

export const Navigation: FC = () => {
  return (
    <nav className="navbar fixed top-0 left-0 right-0 bg-black/40 backdrop-blur-sm border-b border-white/10 z-98">
      <div className="w-full h-12 px-6 flex items-center justify-between relative">
        {/* Left - Clock */}
        <div className="flex items-center final">
          <Clock />
        </div>

        {/* Right - Navigation */}
        <div className="flex items-center final">
          <div className="hidden md:flex items-center space-x-8 text-sm font-normal tracking-widest uppercase mono">
            <a href="#about" className="hover:text-gray-300 transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-gray-300 transition-colors">
              Skills
            </a>
            <a
              href="#experience"
              className="hover:text-gray-300 transition-colors"
            >
              Experience
            </a>
            <a
              href="#education"
              className="hover:text-gray-300 transition-colors"
            >
              Education
            </a>
            <a
              href="#contact"
              className="hover:text-gray-300 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
