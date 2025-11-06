import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useContactTimeline = () => {
  useGSAP(() => {
    gsap.set(".contact-content", { opacity: 0 });

    ScrollTrigger.create({
      trigger: ".contact",
      start: "top top",
      end: "top top",
      scrub: true,
      toggleActions: "play none none reverse",
      animation: gsap.to(".contact-content", { opacity: 1 }),
    });
  });
};
