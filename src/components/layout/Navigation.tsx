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
      // Get the element's current position relative to the viewport
      const elementPosition = targetElement.getBoundingClientRect().top;

      // Calculate scroll position (element's top position + current scroll position)
      // We want the section to start right at the top of the viewport
      const offsetPosition = elementPosition + window.scrollY;

      // Smooth scroll to the target
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className="navbar fixed top-0 left-0 right-0 bg-black/40 backdrop-blur-sm border-b border-white/10 z-98"
      aria-label="Main navigation"
    >
      <div className="w-full h-12 px-6 flex items-center justify-between relative">
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
    </nav>
  );
};
