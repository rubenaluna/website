import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const useExperienceTimeline = () => {
  useGSAP(() => {
    gsap.set(".experience-header", { opacity: 0 });
    gsap.set(".experience-body", { opacity: 0 });

    ScrollTrigger.create({
      trigger: ".experience-header",
      start: "top top+=48px",
      end: "bottom top+=48px",
      scrub: true,
      toggleActions: "play none none reverse",
      animation: gsap.to(".experience-header", {
        opacity: 1,
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
      }),
    });

    ScrollTrigger.create({
      trigger: ".experience",
      start: "top top+=48px",
      end: "bottom top+=48px",
      pin: true,
      scrub: true,
      toggleActions: "play none none reverse",
    });

    ScrollTrigger.create({
      trigger: ".experience-title",
      start: "top top+=96px",
      end: "top top",
      scrub: true,
      toggleActions: "play none none reverse",
      animation: gsap.to(".experience-body", {
        opacity: 1,
      }),
    });
  });

  return null;
};
