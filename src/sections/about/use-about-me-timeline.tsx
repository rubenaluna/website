import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const useAboutMeTimeline = () => {
  useGSAP(() => {
    const timeline = gsap.timeline({ paused: false });

    gsap.set(".about-body", { opacity: 0 });

    ScrollTrigger.create({
      trigger: ".about",
      start: "top top",
      end: "bottom top",
      pin: true,
      scrub: true,
      toggleActions: "play none none reverse",
    });

    ScrollTrigger.create({
      trigger: ".about-body",
      start: "top top+=48px",
      end: "top top",
      scrub: true,
      toggleActions: "play none none reverse",
      animation: gsap.to(".about-body", {
        opacity: 1,
      }),
    });

    timeline.to(".about", {
      opacity: 0,
      scrollTrigger: {
        trigger: ".skills",
        start: "top top",
        end: "top top-=48px",
        pin: ".about",
        scrub: true,
        pinSpacing: false,
        toggleActions: "play none none reverse",
      },
    });
  });

  return null;
};
