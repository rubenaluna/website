import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const useExperienceTimeline = () => {
  useGSAP(() => {
    const timeline = gsap.timeline({ paused: false });

    gsap.registerPlugin(ScrollTrigger);

    // Initial states
    gsap.set(".experience-body", { opacity: 0 });

    ScrollTrigger.create({
      trigger: ".experience",
      start: "top top",
      end: "bottom top",
      pin: ".experience-company",
      scrub: true,
      pinSpacing: false,
      toggleActions: "play none none reverse",
    });

    ScrollTrigger.create({
      trigger: ".experience-body",
      start: "top top+=48px",
      end: "top top",
      scrub: true,
      toggleActions: "play none none reverse",
      animation: gsap.to(".experience-body", {
        opacity: 1,
      }),
    });

    timeline.to(".experience", {
      opacity: 0,
      scrollTrigger: {
        trigger: ".contact",
        start: "top center",
        end: "top top",
        scrub: true,
        toggleActions: "play none none reverse",
      },
    });
  });
  return null;
};
