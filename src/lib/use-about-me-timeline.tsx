import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const useAboutMeTimeline = (setSkills: (skills: string[]) => void) => {
  useGSAP(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

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
      trigger: ".about-title",
      start: "top top+=96px",
      end: "top top",
      scrub: true,
      toggleActions: "play none none reverse",
      animation: gsap.to(".about-body", {
        opacity: 1,
      }),
    });

    ScrollTrigger.create({
      trigger: ".about-skill-be",
      start: "top top+=96px",
      end: "bottom top",
      scrub: true,
      toggleActions: "play none none reverse",
      onToggle: (self) => {
        if (self.isActive) {
          setSkills(["Back-End Development"]);
        }
      },

      onLeaveBack: () => {
        setSkills([]);
      },
    });

    ScrollTrigger.create({
      trigger: ".about-skill-fe",
      start: "top top+=96px",
      end: "bottom top",
      scrub: true,
      toggleActions: "play none none reverse",
      onToggle: (self) => {
        if (self.isActive) {
          setSkills(["Back-End Development", "Front-End Development"]);
        }
      },

      onLeaveBack: () => {
        setSkills(["Back-End Development"]);
      },
    });

    // Hero content fade out animation while pinned
    timeline.to(".about", {
      opacity: 0,
      scrollTrigger: {
        trigger: ".experience",
        start: "top top+=48px",
        end: "top top",
        pin: ".about",
        scrub: true,
        markers: true,
        pinSpacing: false,
        toggleActions: "play none none reverse",
      },
    });
  });

  return null;
};
