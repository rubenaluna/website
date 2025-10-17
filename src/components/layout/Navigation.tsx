import { type FC } from "react";
import { Clock } from "./Clock";

export const Navigation: FC = () => {
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (!href) return;

    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const { top, height } = targetElement.getBoundingClientRect();

      const { scrollY } = window;

      const offset = top <= 1 ? top - (height * 3) / 4 : top + height / 4;

      const position = scrollY + offset;

      window.scrollTo({
        top: position,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className="navbar fixed top-0 left-0 right-0 bg-black/40 backdrop-blur-sm z-98"
      aria-label="Main navigation"
    >
      {/* Main Navigation Row */}
      <div className="w-full h-12 px-6 flex items-center justify-between relative border-b border-white/10">
        {/* Left - Clock */}
        <div className="flex items-center final">
          <Clock />
        </div>

        {/* Right - Navigation */}
        <div className="flex items-center final">
          <div className="hidden md:flex items-center space-x-8 text-sm font-normal tracking-widest uppercase mono">
            <a
              href="#about"
              onClick={handleScrollToSection}
              className="hover:text-gray-300 transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              onClick={handleScrollToSection}
              className="hover:text-gray-300 transition-colors"
            >
              Skills
            </a>
            <a
              href="#experience"
              onClick={handleScrollToSection}
              className="hover:text-gray-300 transition-colors"
            >
              Experience
            </a>
            <a
              href="#contact"
              onClick={handleScrollToSection}
              className="hover:text-gray-300 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* Section Header Row */}
      <div
        className="shared-section-header w-full h-0 px-6 flex items-center space-x-2 overflow-hidden transition-all duration-300"
        style={{
          opacity: 0,
          borderBottom: "1px solid transparent",
        }}
      >
        <div className="w-3 h-3 bg-white"></div>
        <h2 className="shared-section-header-text text-lg uppercase mono text-gray-400">
          ABOUT
        </h2>
      </div>
    </nav>
  );
};
