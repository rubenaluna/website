import { useGSAP } from "@gsap/react";
import gsap, { Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const useAboutMeTimeline = (setSkills: (skills: string[]) => void) => {
  useGSAP(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Pin about-header to bottom of navbar when it reaches that position
    ScrollTrigger.create({
      trigger: ".about-header",
      start: "top top+=48px", // When header reaches bottom of navbar (48px = 3rem)
      end: "bottom+=1000px top+=48px", // End when section ends
      pin: true,
      scrub: true,
      pinSpacing: false,
      toggleActions: "play none none reverse",
      onToggle: (self) => {
        // Add/remove pinned class for styling
        if (self.isActive) {
          document.querySelector(".about-header")?.classList.add("is-pinned");
        } else {
          document
            .querySelector(".about-header")
            ?.classList.remove("is-pinned");
        }
      },
    });

    // Add subtle fade-in effect for about content when scrolling up
    gsap.set(".about-title", { opacity: 0 });
    gsap.set(".about-content", { opacity: 0 });

    ScrollTrigger.create({
      trigger: ".about-title",
      start: "top bottom",
      end: "bottom bottom",
      scrub: true, // Smooth scrubbing
      animation: gsap.to(".about-title", {
        opacity: 1,
        ease: Power2.easeInOut,
      }),
      toggleActions: "play none none reverse",
    });

    ScrollTrigger.create({
      trigger: ".about-content",
      start: "top center",
      end: "bottom bottom",
      scrub: true,
      animation: gsap.to(".about-content", {
        opacity: 1,
        ease: Power2.easeInOut,
      }),
      toggleActions: "play none none reverse",
    });

    ScrollTrigger.create({
      trigger: ".about-body",
      start: "top top+=96px",
      end: "bottom bottom",
      pin: true,
      scrub: true,
      pinSpacing: true,
      toggleActions: "play none none reverse",
    });

    ScrollTrigger.create({
      trigger: ".about-skill-be",
      start: "top center",
      end: "bottom center",
      scrub: true,
      pinSpacing: false,
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
      start: "top center",
      end: "bottom center",
      scrub: true,
      pinSpacing: false,
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
  });

  return null;
};
