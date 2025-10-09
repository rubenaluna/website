import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const useExperienceTimeline = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Initial states
    gsap.set(".experience-header", { opacity: 0 });
    gsap.set(".experience-body", { opacity: 0 });
    gsap.set(".experience-header-card", { opacity: 0, y: 20 });
    gsap.set(".experience-role-1", { opacity: 0, y: 30 });
    gsap.set(".experience-role-2", { opacity: 0, y: 30 });
    gsap.set(".experience-role-3", { opacity: 0, y: 30 });

    // Header fade in and pin
    ScrollTrigger.create({
      trigger: ".experience-header",
      start: "top top+=48px",
      end: "bottom top+=48px",
      animation: gsap.to(".experience-header", {
        opacity: 1,
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
      }),
      toggleActions: "play none none reverse",
    });

    ScrollTrigger.create({
      trigger: ".experience-body",
      start: "top top+=96px",
      end: "top top",
      scrub: true,
      toggleActions: "play none none reverse",
      animation: gsap.to(".experience-body", {
        opacity: 1,
      }),
    });

    // Company header card animation - triggers after body is visible
    ScrollTrigger.create({
      trigger: ".experience",
      start: "top top+=48px",
      onEnter: () => {
        gsap.to(".experience-header-card", {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.3,
        });

        // Animate role cards in sequence after header card
        gsap.to(".experience-role-1", {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.9,
          ease: "power2.out",
        });

        gsap.to(".experience-role-2", {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 1.1,
          ease: "power2.out",
        });

        gsap.to(".experience-role-3", {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 1.3,
          ease: "power2.out",
        });
      },
      onLeaveBack: () => {
        gsap.to(".experience-header-card", {
          opacity: 0,
          y: 20,
          duration: 0.3,
        });

        gsap.to(
          [".experience-role-1", ".experience-role-2", ".experience-role-3"],
          {
            opacity: 0,
            y: 30,
            duration: 0.3,
          }
        );
      },
    });

    // Get the timeline container
    const timelineContainer = document.querySelector(
      ".experience-timeline-container"
    );

    if (timelineContainer) {
      const viewportWidth = window.innerWidth;
      const cardWidth = 600; // Width of each role card
      const gap = 128; // gap-32 in pixels (8rem)
      const padding = 32; // container padding

      // Calculate center position for each card
      const centerScreen = viewportWidth / 2;
      const cardCenter = cardWidth / 2;

      // Position to center each card (how far left the container needs to move)
      const positions = [
        centerScreen - cardCenter - padding, // Card 1 (Internship) centered
        -(cardWidth + gap) + centerScreen - cardCenter - padding, // Card 2 (Software Engineer) centered
        -2 * (cardWidth + gap) + centerScreen - cardCenter - padding, // Card 3 (UI Team Lead) centered
      ];

      // Set initial position to center the first card
      gsap.set(timelineContainer, { x: positions[0] });

      let currentCard = 0;

      // Pin the experience section with snap points
      ScrollTrigger.create({
        trigger: ".experience",
        start: "top top+=48px",
        end: "bottom top+=48px",
        pin: true,
        scrub: true,
        pinSpacing: false,
        toggleActions: "play none none reverse",
        onUpdate: (self) => {
          const progress = self.progress;
          let targetCard = 0;

          // Determine which card should be centered based on scroll progress
          // Quick snaps with thresholds at 25% and 60%
          if (progress < 1 / 3) {
            targetCard = 0; // Internship
          } else if (progress < 2 / 3) {
            targetCard = 1; // Software Engineer
          } else {
            targetCard = 2; // UI Team Lead
          }

          // Only snap if we've moved to a different card
          if (targetCard !== currentCard) {
            currentCard = targetCard;
            gsap.to(timelineContainer, {
              x: positions[currentCard],
              duration: 0.8,
              ease: "power3.out",
            });
          }
        },
      });

      const timeline = gsap.timeline({ paused: false });
      timeline.to(".experience", {
        opacity: 0,
        scrollTrigger: {
          trigger: ".contact",
          start: "top top+=48px",
          end: "top top",
          pin: ".experience",
          scrub: true,
          pinSpacing: false,
          toggleActions: "play none none reverse",
        },
      });
    }
  });

  return null;
};
