import { type FC, useState } from "react";
import { Clock } from "./Clock";

export const Navigation: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

    // Close mobile menu after navigation
    setIsMenuOpen(false);
  };

  return (
    <nav
      className="navbar fixed top-0 left-0 right-0 backdrop-blur-sm z-98"
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
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 text-xs font-light tracking-widest uppercase mono">
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

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-6 h-6 space-y-1.5 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span
              className={`block w-5 h-px bg-current transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-1.75" : ""
              }`}
            />
            <span
              className={`block w-5 h-px bg-current transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-px bg-current transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-1.75" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-12 left-0 right-0 bg-black/90 border-b border-white/10 transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-64" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center px-6 text-xs font-light tracking-widest uppercase mono">
          <a
            href="#about"
            onClick={handleScrollToSection}
            className="hover:text-gray-300 transition-colors py-2"
          >
            About
          </a>
          <a
            href="#skills"
            onClick={handleScrollToSection}
            className="hover:text-gray-300 transition-colors py-2"
          >
            Skills
          </a>
          <a
            href="#experience"
            onClick={handleScrollToSection}
            className="hover:text-gray-300 transition-colors py-2"
          >
            Experience
          </a>
          <a
            href="#contact"
            onClick={handleScrollToSection}
            className="hover:text-gray-300 transition-colors py-2"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};
