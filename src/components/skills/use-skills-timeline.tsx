import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const useSkillsTimeline = (setSkills: (skills: string[]) => void) => {
  useGSAP(() => {
    const timeline = gsap.timeline({ paused: false });

    gsap.set(".skills-header", { opacity: 0 });
    gsap.set(".skills-body", { opacity: 0 });

    ScrollTrigger.create({
      trigger: ".skills-header",
      start: "top top+=48px", // When header reaches bottom of navbar (48px = 3rem)
      end: "bottom top+=48px", // End when section ends
      scrub: true,
      pinSpacing: false,
      animation: gsap.to(".skills-header", {
        opacity: 1,
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
      }),
      toggleActions: "play none none reverse",
    });

    ScrollTrigger.create({
      trigger: ".skills",
      start: "top top+=48px",
      end: "bottom top+=48px",
      pin: true,
      scrub: true,
      pinSpacing: false,
      toggleActions: "play none none reverse",
    });

    ScrollTrigger.create({
      trigger: ".skills-body",
      start: "top top+=96px",
      end: "top top",
      scrub: true,
      toggleActions: "play none none reverse",
      animation: gsap.to(".skills-body", {
        opacity: 1,
      }),
    });

    ScrollTrigger.create({
      trigger: ".skills-be",
      start: "-300% top+=96px",
      end: "-100% top",
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
      trigger: ".skills-fe",
      start: "-100% top+=96px",
      end: "200% top",
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

    ScrollTrigger.create({
      trigger: ".skills-ops",
      start: "200% top+=96px",
      end: "400% top",
      scrub: true,
      toggleActions: "play none none reverse",
      onToggle: (self) => {
        if (self.isActive) {
          setSkills([
            "Back-End Development",
            "Front-End Development",
            "Operations",
          ]);
        }
      },
      onLeaveBack: () => {
        setSkills(["Back-End Development", "Front-End Development"]);
      },
    });

    timeline.to(".skills", {
      opacity: 0,
      scrollTrigger: {
        trigger: ".experience",
        start: "top top+=48px",
        end: "top top",
        pin: ".skills",
        scrub: true,
        pinSpacing: false,
        toggleActions: "play none none reverse",
      },
    });
  });

  return null;
};
