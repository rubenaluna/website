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
    gsap.set(".about-body > section > div > div:nth-child(1)", {
      opacity: 0,
      x: -100,
      scale: 0.95,
    });

    gsap.set(
      ".about-body > section > div > div:nth-child(2) > div:nth-child(1)",
      {
        opacity: 0,
        y: -50,
        scale: 0.95,
      }
    );

    gsap.set(
      ".about-body > section > div > div:nth-child(2) > div:nth-child(2)",
      {
        opacity: 0,
        y: 50,
        scale: 0.95,
      }
    );

    gsap.set(
      ".about-body > section > div > div:nth-child(2) > div:nth-child(2) .grid > div",
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
    });

    // Animate the main "This is me" card
    ScrollTrigger.create({
      trigger: ".about-body",
      start: "top top+=96px",
      end: "top top+=48px",
      scrub: 1,
      toggleActions: "play none none reverse",
      animation: gsap.to(".about-body > section > div > div:nth-child(1)", {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 1,
        ease: "power2.out",
      }),
    });

    // Animate the Education card
    ScrollTrigger.create({
      trigger: ".about-body",
      start: "top top+=96px",
      end: "top top+=48px",
      scrub: 1,
      toggleActions: "play none none reverse",
      animation: gsap.to(
        ".about-body > section > div > div:nth-child(2) > div:nth-child(1)",
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          delay: 0.2,
          ease: "power2.out",
        }
      ),
    });

    // Animate the Interests card container
    ScrollTrigger.create({
      trigger: ".about-body",
      start: "top top+=96px",
      end: "top top+=48px",
      scrub: 1,
      toggleActions: "play none none reverse",
      animation: gsap.to(
        ".about-body > section > div > div:nth-child(2) > div:nth-child(2)",
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          delay: 0.4,
          ease: "power2.out",
        }
      ),
    });

    // Stagger animate the individual interest cards
    ScrollTrigger.create({
      trigger: ".about-body",
      start: "top top+=96px",
      end: "top top+=48px",
      scrub: 1,
      toggleActions: "play none none reverse",
      animation: gsap.to(
        ".about-body > section > div > div:nth-child(2) > div:nth-child(2) .grid > div",
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          delay: 0.6,
          ease: "back.out(1.2)",
        }
      ),
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
