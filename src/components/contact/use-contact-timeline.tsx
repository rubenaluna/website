import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export const useContactTimeline = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".contact",
          start: "top bottom",
          end: "center center",
          scrub: 1,
        },
      });

      // Fade in header
      timeline.fromTo(
        ".contact-header",
        {
          opacity: 0,
          y: -20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        }
      );

      // Animate content
      timeline.fromTo(
        ".contact-content",
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.2"
      );
    });

    return () => ctx.revert();
  }, []);
};
