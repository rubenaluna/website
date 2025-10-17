import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const useSkillsTimeline = () => {
  useGSAP(() => {
    const timeline = gsap.timeline({ paused: false });

    gsap.set(".skills-body", { opacity: 0 });

    // Set initial state for skill cards
    gsap.set(".skills-content > div:nth-child(1)", {
      opacity: 0,
      y: -50,
      scale: 0.95,
    });

    gsap.set(".skills-be", {
      opacity: 0,
      x: -100,
      scale: 0.95,
    });

    gsap.set(".skills-fe", {
      opacity: 0,
      y: 50,
      scale: 0.95,
    });

    gsap.set(".skills-ops", {
      opacity: 0,
      x: 100,
      scale: 0.95,
    });

    // Set initial state for skill items within cards
    gsap.set(".skills-be > div > div", {
      opacity: 0,
      y: 20,
    });

    gsap.set(".skills-fe > div > div", {
      opacity: 0,
      y: 20,
    });

    gsap.set(".skills-ops > div > div", {
      opacity: 0,
      y: 20,
    });

    // Update shared header when skills section comes into view
    ScrollTrigger.create({
      trigger: ".skills",
      start: "top top+=48px",
      end: "bottom top",
      onEnter: () => {
        gsap.to(".shared-section-header-text", {
          opacity: 0,
          duration: 0.2,
          onComplete: () => {
            document.querySelector(".shared-section-header-text")!.textContent =
              "SKILLS";
            gsap.to(".shared-section-header-text", {
              opacity: 1,
              duration: 0.2,
            });
          },
        });
      },
      onEnterBack: () => {
        gsap.to(".shared-section-header-text", {
          opacity: 0,
          duration: 0.2,
          onComplete: () => {
            document.querySelector(".shared-section-header-text")!.textContent =
              "SKILLS";
            gsap.to(".shared-section-header-text", {
              opacity: 1,
              duration: 0.2,
            });
          },
        });
      },
    });

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
      start: "top top",
      end: "top top",
      scrub: true,
      toggleActions: "play none none reverse",
      animation: gsap.to(".skills-body", {
        opacity: 1,
      }),
      onEnter: () => {
        // Create a timeline for card animations that plays once
        const cardsTimeline = gsap.timeline();

        // Animate the title/description card
        cardsTimeline.to(
          ".skills-content > div:nth-child(1)",
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
          },
          0
        );

        // Animate the Back-End card
        cardsTimeline.to(
          ".skills-be",
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
          },
          0.2
        );

        // Animate the Front-End card
        cardsTimeline.to(
          ".skills-fe",
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
          },
          0.3
        );

        // Animate the Operations card
        cardsTimeline.to(
          ".skills-ops",
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
          },
          0.4
        );

        // Stagger animate skill items in Back-End card
        cardsTimeline.to(
          ".skills-be > div > div",
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out",
          },
          0.5
        );

        // Stagger animate skill items in Front-End card
        cardsTimeline.to(
          ".skills-fe > div > div",
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out",
          },
          0.6
        );

        // Stagger animate skill items in Operations card
        cardsTimeline.to(
          ".skills-ops > div > div",
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out",
          },
          0.7
        );
      },
      onLeaveBack: () => {
        // Reset animations when scrolling back up
        gsap.set(".skills-content > div:nth-child(1)", {
          opacity: 0,
          y: -50,
          scale: 0.95,
        });
        gsap.set(".skills-be", {
          opacity: 0,
          x: -100,
          scale: 0.95,
        });
        gsap.set(".skills-fe", {
          opacity: 0,
          y: 50,
          scale: 0.95,
        });
        gsap.set(".skills-ops", {
          opacity: 0,
          x: 100,
          scale: 0.95,
        });
        gsap.set(".skills-be > div > div", {
          opacity: 0,
          y: 20,
        });
        gsap.set(".skills-fe > div > div", {
          opacity: 0,
          y: 20,
        });
        gsap.set(".skills-ops > div > div", {
          opacity: 0,
          y: 20,
        });
      },
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
