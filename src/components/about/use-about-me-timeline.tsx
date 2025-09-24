import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const useAboutMeTimeline = () => {
  useGSAP(() => {
    const timeline = gsap.timeline({ paused: false });

    // Pin about-header to bottom of navbar when it reaches that position

    // Add subtle fade-in effect for about content when scrolling up
    gsap.set(".about-header", { opacity: 0 });
    gsap.set(".about-body", { opacity: 0 });

    ScrollTrigger.create({
      trigger: ".about-header",
      start: "top top+=48px", // When header reaches bottom of navbar (48px = 3rem)
      end: "bottom top+=48px", // End when section ends
      scrub: true,
      pinSpacing: false,
      animation: gsap.to(".about-header", {
        opacity: 1,
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
      }),
      toggleActions: "play none none reverse",
    });

    ScrollTrigger.create({
      trigger: ".about",
      start: "top top+=48px",
      end: "bottom top+=48px",
      pin: true,
      scrub: true,
      toggleActions: "play none none reverse",
    });

    ScrollTrigger.create({
      trigger: ".about-body",
      start: "top top+=96px",
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
        start: "top top+=48px",
        end: "top top",
        pin: ".about",
        scrub: true,
        pinSpacing: false,
        toggleActions: "play none none reverse",
      },
    });
  });

  return null;
};
