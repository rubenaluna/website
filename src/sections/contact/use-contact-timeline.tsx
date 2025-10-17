import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useContactTimeline = () => {
  useGSAP(() => {
    gsap.set(".contact-content", { opacity: 0 });

    // Update shared header when contact section comes into view
    ScrollTrigger.create({
      trigger: ".contact",
      start: "top top+=1px",
      end: "bottom top",
      onEnter: () => {
        gsap.to(".shared-section-header-text", {
          opacity: 0,
          duration: 0.2,
          onComplete: () => {
            document.querySelector(".shared-section-header-text")!.textContent =
              "CONTACT";
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
              "CONTACT";
            gsap.to(".shared-section-header-text", {
              opacity: 1,
              duration: 0.2,
            });
          },
        });
      },
    });

    ScrollTrigger.create({
      trigger: ".contact",
      start: "top top+=24px",
      end: "top top",
      scrub: true,
      toggleActions: "play none none reverse",
      animation: gsap.to(".contact-content", { opacity: 1 }),
    });
  });
};
