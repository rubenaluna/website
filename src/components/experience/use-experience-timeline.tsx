import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const useExperienceTimeline = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Initial states
    gsap.set(".experience-header", { opacity: 0 });
    gsap.set(".experience-title", { opacity: 0, y: -30 });
    gsap.set(".timeline-container", { opacity: 0, x: -30 });
    gsap.set(".timeline-line", { scaleY: 0, transformOrigin: "top" });

    ScrollTrigger.create({
      trigger: ".experience-header",
      start: "top top+=48px",
      end: "bottom top+=48px",
      scrub: true,
      pinSpacing: false,
      animation: gsap.to(".experience-header", {
        opacity: 1,
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
      }),
      toggleActions: "play none none reverse",
    });

    ScrollTrigger.create({
      trigger: ".experience",
      start: "top top+=48px",
      end: "bottom top+=48px",
      pin: ".experience-header",
      scrub: true,
      pinSpacing: false,
      toggleActions: "play none none reverse",
    });

    ScrollTrigger.create({
      trigger: ".experience",
      start: "top top+=48px",
      end: "bottom top+=48px",
      pin: ".experience-title",
      scrub: true,
      pinSpacing: false,
      toggleActions: "play none none reverse",
    });

    const timeline = gsap.timeline({
      paused: false,
      scrollTrigger: {
        trigger: ".experience-body",
        start: "top top+=96px",
        end: "top top+=48px",
        scrub: true,
        toggleActions: "play none none reverse",
      },
    });

    timeline.to(".experience-title", {
      opacity: 1,
      x: 0,
    });

    timeline.to(".timeline-container", {
      opacity: 1,
      y: 0,
    });
  });

  return null;
};
