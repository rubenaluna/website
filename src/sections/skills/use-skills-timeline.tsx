import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const useSkillsTimeline = () => {
  useGSAP(() => {
    const timeline = gsap.timeline({ paused: false });

    gsap.set(".skills-body", { opacity: 0 });

    ScrollTrigger.create({
      trigger: ".skills",
      start: "top top",
      end: "bottom top",
      pin: true,
      scrub: true,
      pinSpacing: false,
      toggleActions: "play none none reverse",
    });

    ScrollTrigger.create({
      trigger: ".skills-body",
      start: "top top+=48px",
      end: "top top",
      scrub: true,
      toggleActions: "play none none reverse",
      animation: gsap.to(".skills-body", {
        opacity: 1,
      }),
    });

    timeline.to(".skills", {
      opacity: 0,
      scrollTrigger: {
        trigger: ".experience",
        start: "top top",
        end: "top top-=48px",
        pin: ".skills",
        scrub: true,
        pinSpacing: false,
        toggleActions: "play none none reverse",
      },
    });
  });

  return null;
};
