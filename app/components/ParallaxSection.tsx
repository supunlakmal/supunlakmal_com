"use client";

import { useEffect, useRef, type ReactNode } from "react";

type ParallaxSectionProps = {
  id: string;
  backgroundColor: string;
  speed?: number;
  className?: string;
  children: ReactNode;
};

export default function ParallaxSection({
  id,
  backgroundColor,
  speed = 0.25,
  className = "",
  children,
}: ParallaxSectionProps) {
  const backgroundRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const backgroundEl = backgroundRef.current;
    if (!backgroundEl) {
      return;
    }

    let frameId: number | null = null;

    const updateParallax = () => {
      const parent = backgroundEl.parentElement;
      if (!parent) {
        return;
      }

      const rect = parent.getBoundingClientRect();
      const offset = -rect.top * speed;
      backgroundEl.style.transform = `translate3d(0, ${offset}px, 0)`;
    };

    const handleScroll = () => {
      if (frameId !== null) {
        return;
      }

      frameId = window.requestAnimationFrame(() => {
        updateParallax();
        frameId = null;
      });
    };

    updateParallax();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [speed]);

  const composedClassName = `relative overflow-hidden ${className}`.trim();

  return (
    <section id={id} className={composedClassName}>
      <div
        ref={backgroundRef}
        className="pointer-events-none absolute left-0 right-0 -z-10"
        style={{
          backgroundColor,
          top: "-20%",
          height: "140%",
          transform: "translate3d(0, 0, 0)",
          willChange: "transform",
        }}
      />
      <div className="relative z-10">{children}</div>
    </section>
  );
}
