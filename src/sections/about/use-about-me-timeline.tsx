import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const useAboutMeTimeline = () => {
  useGSAP(() => {
    const timeline = gsap.timeline({ paused: false });

    // Add subtle fade-in effect for about content when scrolling up

    // Set initial state for about cards
    gsap.set(".about-body > div > div > div:nth-child(1)", {
      opacity: 0,
      x: -100,
      scale: 0.95,
    });

    gsap.set(".about-body > div > div > div:nth-child(2) > div:nth-child(1)", {
      opacity: 0,
      y: -50,
      scale: 0.95,
    });

    gsap.set(".about-body > div > div > div:nth-child(2) > div:nth-child(2)", {
      opacity: 0,
      y: 50,
      scale: 0.95,
    });

    gsap.set(
      ".about-body > div > div > div:nth-child(2) > div:nth-child(2) .grid > div",
      {
        opacity: 0,
        scale: 0.8,
        y: 30,
      }
    );

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
      start: "top top",
      end: "top top",
      scrub: true,
      toggleActions: "play none none reverse",
      onEnter: () => {
        // Create a timeline for card animations that plays once
        const cardsTimeline = gsap.timeline();

        // Animate the main "This is me" card
        cardsTimeline.to(
          ".about-body > div > div > div:nth-child(1)",
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
          },
          0
        );

        // Animate the Education card
        cardsTimeline.to(
          ".about-body > div > div > div:nth-child(2) > div:nth-child(1)",
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
          },
          0.2
        );

        // Animate the Interests card container
        cardsTimeline.to(
          ".about-body > div > div > div:nth-child(2) > div:nth-child(2)",
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
          },
          0.4
        );

        // Stagger animate the individual interest cards
        cardsTimeline.to(
          ".about-body > div > div > div:nth-child(2) > div:nth-child(2) .grid > div",
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(1.2)",
          },
          0.6
        );
      },
      onLeaveBack: () => {
        // Reset animations when scrolling back up
        gsap.set(".about-body > div > div > div:nth-child(1)", {
          opacity: 0,
          x: -100,
          scale: 0.95,
        });
        gsap.set(
          ".about-body > div > div > div:nth-child(2) > div:nth-child(1)",
          {
            opacity: 0,
            y: -50,
            scale: 0.95,
          }
        );
        gsap.set(
          ".about-body > div > div > div:nth-child(2) > div:nth-child(2)",
          {
            opacity: 0,
            y: 50,
            scale: 0.95,
          }
        );
        gsap.set(
          ".about-body > div > div > div:nth-child(2) > div:nth-child(2) .grid > div",
          {
            opacity: 0,
            scale: 0.8,
            y: 30,
          }
        );
      },
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
