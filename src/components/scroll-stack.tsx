"use client";

import { Children, useEffect, useRef, type ReactNode } from "react";

// How far (px) into/out of the viewport a section travels while it
// fades, scales and shifts — independent of how tall its content is,
// so long sections never get clipped mid-transition.
const MIN_ZONE = 140;
const MAX_ZONE = 320;
const ZONE_RATIO = 0.35;

const ENTER_OFFSET = 26;
const EXIT_OFFSET = -22;
const ENTER_SCALE_FROM = 0.965;
const EXIT_SCALE_TO = 0.965;

function clamp(value: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

export function ScrollStack({ children }: { children: ReactNode }) {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const items = itemRefs.current.filter(
      (node): node is HTMLDivElement => node !== null
    );
    if (items.length === 0) return;

    let ticking = false;

    function update() {
      const viewportHeight = window.innerHeight;
      const zone = clamp(viewportHeight * ZONE_RATIO, MIN_ZONE, MAX_ZONE);

      for (const node of items) {
        const rect = node.getBoundingClientRect();

        const enterProgress = clamp((viewportHeight - rect.top) / zone);
        const exitProgress = clamp(1 - rect.bottom / zone);

        const translateY =
          ENTER_OFFSET * (1 - enterProgress) + EXIT_OFFSET * exitProgress;
        const scale =
          1 -
          (1 - ENTER_SCALE_FROM) * (1 - enterProgress) -
          (1 - EXIT_SCALE_TO) * exitProgress;
        const opacity = enterProgress * (1 - exitProgress);

        node.style.transform = `translate3d(0, ${translateY.toFixed(2)}px, 0) scale(${scale.toFixed(4)})`;
        node.style.opacity = opacity.toFixed(3);
      }

      ticking = false;
    }

    function onScrollOrResize() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    }

    update();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, []);

  const sections = Children.toArray(children);

  return (
    <>
      {sections.map((section, i) => (
        <div
          key={i}
          ref={(el) => {
            itemRefs.current[i] = el;
          }}
          className="scroll-stack-item"
        >
          {section}
        </div>
      ))}
    </>
  );
}
