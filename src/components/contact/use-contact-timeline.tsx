import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useContactTimeline = () => {
  useGSAP(() => {
    gsap.set(".contact-header", { opacity: 0 });
    gsap.set(".contact-content", { opacity: 0 });

    ScrollTrigger.create({
      trigger: ".contact-header",
      start: "top top+=48px",
      end: "bottom top+=48px",
      scrub: true,
      animation: gsap.to(".contact-header", {
        opacity: 1,
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
      }),
      toggleActions: "play none none reverse",
    });

    ScrollTrigger.create({
      trigger: ".contact",
      start: "top top+=48px",
      end: "bottom top+=48px",
      scrub: true,
      pin: ".contact-header",
      pinSpacing: false,
      toggleActions: "play none none reverse",
    });

    ScrollTrigger.create({
      trigger: ".contact-content",
      start: "top top+=96px",
      end: "top top+=48px",
      scrub: true,
      toggleActions: "play none none reverse",
      animation: gsap.to(".contact-content", { opacity: 1 }),
    });
  });
};
