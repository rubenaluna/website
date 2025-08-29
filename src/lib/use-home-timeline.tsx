import { useGSAP } from "@gsap/react";
import gsap, { Power1 } from "gsap";

export const useHomeTimeline = () => {
  useGSAP(() => {
    const timeline = gsap.timeline({ paused: false });

    timeline
      .set(".logo", {
        position: "absolute",
        top: "50vh",
        left: "50vw",
        transform: "translate(-50%, -50%)",
        opacity: 0,
      })
      .to(".logo", {
        position: "absolute",
        top: "50vh",
        left: "50vw",
        transform: "translate(-50%, -50%)",
        opacity: 1,
        duration: 1,
      })
      .to(
        ".logo",
        {
          top: "auto",
          ease: Power1.easeInOut,
          transform: "translate(-50%, 0%)",
          duration: 3,
        },
        "post-splash"
      )
      .set(".logo", {
        position: "relative",
        left: "auto",
        transform: "translate(0%, 0%)",
      });

    timeline.to(
      ".background",
      {
        opacity: 1,
        ease: Power1.easeInOut,
        duration: 3,
      },
      "post-splash"
    );

    timeline
      .set(
        ".name",
        {
          opacity: 0,
        },
        0
      )
      .to(".name", {
        opacity: 1,
        ease: Power1.easeInOut,
        duration: 1,
      });

    timeline
      .set(
        ".final",
        {
          opacity: 0,
        },
        0
      )
      .to(".final", {
        opacity: 1,
      });
  });

  return null;
};
