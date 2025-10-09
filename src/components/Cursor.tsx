import gsap from "gsap";
import { useEffect, useRef, type FC } from "react";

export const Cursor: FC = () => {
  const cursorDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursorDot = cursorDotRef.current;

    if (!cursorDot) return;

    const handleMouseMove = (e: MouseEvent) => {
      gsap.to(cursorDot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: "power2.out",
      });
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Scale up on interactive elements
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        gsap.to(cursorDot, {
          scale: 1.5,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    const handleMouseLeave = () => {
      gsap.to(cursorDot, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseDown = () => {
      gsap.to(cursorDot, {
        scale: 0.7,
        duration: 0.1,
      });
    };

    const handleMouseUp = () => {
      gsap.to(cursorDot, {
        scale: 1,
        duration: 0.1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter, true);
    document.addEventListener("mouseleave", handleMouseLeave, true);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter, true);
      document.removeEventListener("mouseleave", handleMouseLeave, true);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div
      ref={cursorDotRef}
      className="cursor-dot pointer-events-none fixed top-0 left-0 w-2 h-2 bg-white rounded-full z-[9999] mix-blend-difference"
      style={{ transform: "translate(-50%, -50%)" }}
    />
  );
};
