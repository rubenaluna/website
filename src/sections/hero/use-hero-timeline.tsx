import { useGSAP } from "@gsap/react";
import gsap, { Expo, Power1 } from "gsap";

export const useHeroTimeline = () => {
  useGSAP(() => {
    const timeline = gsap.timeline({ paused: false });

    // Initially hide all elements except logo
    timeline
      .set(".logo", {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        opacity: 0,
        filter: "blur(10px)",
      })
      .set(".name", {
        opacity: 0,
        filter: "blur(10px)",
      })
      .set(".final", {
        opacity: 0,
      })
      .set(".navbar", {
        opacity: 0,
      })
      .set(".background", {
        opacity: 0,
      });

    // Logo fades in first
    timeline.to(".logo", {
      opacity: 1,
      duration: 1,
      filter: "blur(0px)",
      ease: Expo.easeOut,
    });

    // Logo transitions to center of navbar and DarkVeilBackground fades in
    timeline
      .to(
        ".logo",
        {
          top: "1.5rem",
          left: "50%",
          transform: "translate(-50%, -50%)",
          duration: 3,
          ease: Power1.easeOut,
        },
        "background"
      )
      .to(
        ".background",
        {
          opacity: 1,
          duration: 3,
          ease: Power1.easeInOut,
        },
        "background"
      );

    // Fix logo position as soon as it reaches navbar center
    timeline.set(".logo", {
      position: "fixed",
      top: "1.5rem",
      left: "50%",
      transform: "translate(-50%, -50%)",
    });

    // Once logo reaches navbar center, fade in name first
    timeline.to(
      ".name",
      {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
        filter: "blur(0px)",
      },
      "name"
    );

    // Then fade in everything else including navbar
    timeline
      .to(
        ".final",
        {
          opacity: 1,
          duration: 0.8,
          ease: Power1.easeOut,
        },
        "final"
      )
      .to(
        ".navbar",
        {
          opacity: 1,
          duration: 0.8,
          ease: Power1.easeOut,
        },
        "final"
      );

    // Hero content fade out animation while pinned
    timeline.to(".hero", {
      opacity: 0,
      filter: "blur(10px)",
      scale: 0.9,
      scrollTrigger: {
        trigger: ".about",
        start: "top bottom",
        end: "top top",
        pin: ".hero",
        pinSpacing: false,
        scrub: true,
        toggleActions: "play none none reverse",
      },
    });
  });

  return null;
};
