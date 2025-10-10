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
