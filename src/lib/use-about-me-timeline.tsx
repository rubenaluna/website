import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const useAboutMeTimeline = () => {
  useGSAP(() => {
    gsap.set(".background-dark", {
      opacity: 0,
    });
    gsap.to(".background-light", {
      opacity: 0,
      scrollTrigger: {
        trigger: ".about-me",
        start: "top bottom",
        end: "top top",
        scrub: true,
      },
    });

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

    gsap.to(".background-dark", {
      opacity: 1,
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
