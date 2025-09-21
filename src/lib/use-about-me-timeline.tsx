import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const useAboutMeTimeline = () => {
  useGSAP(() => {
    gsap.set(".navbar", {
      color: "black",
    });
    gsap.to(".navbar", {
      color: "white",
      scrollTrigger: {
        trigger: ".about-me",
        start: "top bottom",
        end: "top top",
        scrub: true,
      },
    });
  });

  return null;
};
