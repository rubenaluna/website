import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const useSkillsTimeline = () => {
  useGSAP(() => {
    const timeline = gsap.timeline({ paused: false });

    gsap.set(".skills-header", { opacity: 0 });
    gsap.set(".skills-body", { opacity: 0 });

    // Set initial state for skills cards
    gsap.set(".skills-content > div:nth-child(1)", {
      opacity: 0,
      y: 50,
      scale: 0.95,
    });

    gsap.set(".skills-be", {
      opacity: 0,
      y: 80,
      scale: 0.9,
    });

    gsap.set(".skills-fe", {
      opacity: 0,
      y: 80,
      scale: 0.9,
    });

    gsap.set(".skills-ops", {
      opacity: 0,
      y: 80,
      scale: 0.9,
    });

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

    // Animate the title/description card
    ScrollTrigger.create({
      trigger: ".skills-body",
      start: "top top+=96px",
      end: "top top+=48px",
      scrub: 1,
      toggleActions: "play none none reverse",
      animation: gsap.to(".skills-content > div:nth-child(1)", {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power2.out",
      }),
    });

    // Animate the Back-End card
    ScrollTrigger.create({
      trigger: ".skills-body",
      start: "top top+=96px",
      end: "top top+=48px",
      scrub: 1,
      toggleActions: "play none none reverse",
      animation: gsap.to(".skills-be", {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        delay: 0.2,
        ease: "back.out(1.2)",
      }),
    });

    // Animate the Front-End card
    ScrollTrigger.create({
      trigger: ".skills-body",
      start: "top top+=96px",
      end: "top top+=48px",
      scrub: 1,
      toggleActions: "play none none reverse",
      animation: gsap.to(".skills-fe", {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        delay: 0.4,
        ease: "back.out(1.2)",
      }),
    });

    // Animate the Operations card
    ScrollTrigger.create({
      trigger: ".skills-body",
      start: "top top+=96px",
      end: "top top+=48px",
      scrub: 1,
      toggleActions: "play none none reverse",
      animation: gsap.to(".skills-ops", {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        delay: 0.6,
        ease: "back.out(1.2)",
      }),
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
