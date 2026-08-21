"use client";

import { Children, useEffect, useRef, type ReactNode } from "react";

// Extra scroll distance (px) each section holds/pins for before the next
// one is allowed to fully take over — independent of content length.
const HOLD_RATIO = 0.4;
const MIN_HOLD = 100;
const MAX_HOLD = 280;

const ENTER_OFFSET = 28;
const RECEDE_OFFSET = -20;
const ENTER_SCALE_FROM = 0.94;
const RECEDE_SCALE_TO = 0.94;

function clamp(value: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

interface Metrics {
  overflow: number;
  extra: number;
  winHeight: number;
  revealFraction: number;
}

export function ScrollStack({ children }: { children: ReactNode }) {
  const wrapperRefs = useRef<(HTMLDivElement | null)[]>([]);
  const windowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const wrappers = wrapperRefs.current;
    const wins = windowRefs.current;
    const contents = contentRefs.current;
    const count = wrappers.length;
    if (count === 0) return;

    const metrics: Metrics[] = new Array(count)
      .fill(null)
      .map(() => ({ overflow: 0, extra: 0, winHeight: 0, revealFraction: 0 }));

    let ticking = false;

    function layout() {
      const viewportHeight = window.innerHeight;
      const hold = clamp(viewportHeight * HOLD_RATIO, MIN_HOLD, MAX_HOLD);

      for (let i = 0; i < count; i++) {
        const content = contents[i];
        const win = wins[i];
        const wrapper = wrappers[i];
        if (!content || !win || !wrapper) continue;

        const contentHeight = content.offsetHeight;
        const winHeight = Math.min(contentHeight, viewportHeight);
        const overflow = Math.max(0, contentHeight - viewportHeight);
        const isLast = i === count - 1;
        const extra = overflow + (isLast ? 0 : hold);

        metrics[i] = {
          overflow,
          extra,
          winHeight,
          revealFraction: extra > 0 ? overflow / extra : 0,
        };

        win.style.height = `${winHeight}px`;
        wrapper.style.height = `${winHeight + extra}px`;
      }
    }

    function progressFor(index: number): number {
      const wrapper = wrappers[index];
      const m = metrics[index];
      if (!wrapper) return 1;
      const rect = wrapper.getBoundingClientRect();
      const total = rect.height - m.winHeight;
      if (total <= 0) return 1;
      return clamp(-rect.top / total);
    }

    function update() {
      for (let i = 0; i < count; i++) {
        const win = wins[i];
        const content = contents[i];
        const m = metrics[i];
        if (!win || !content) continue;

        const progress = progressFor(i);
        const revealProgress =
          m.revealFraction > 0
            ? clamp(progress / m.revealFraction)
            : m.overflow > 0
              ? 1
              : 0;
        const recedeProgress =
          m.revealFraction < 1
            ? clamp((progress - m.revealFraction) / (1 - m.revealFraction))
            : 0;

        content.style.transform = `translate3d(0, ${(-m.overflow * revealProgress).toFixed(2)}px, 0)`;

        const enterProgress = i > 0 ? progressFor(i - 1) : 1;
        const prevReveal = i > 0 ? metrics[i - 1].revealFraction : 0;
        const settledEnter =
          i === 0
            ? 1
            : prevReveal < 1
              ? clamp((enterProgress - prevReveal) / (1 - prevReveal))
              : 1;

        const translateY =
          ENTER_OFFSET * (1 - settledEnter) + RECEDE_OFFSET * recedeProgress;
        const scale =
          1 -
          (1 - ENTER_SCALE_FROM) * (1 - settledEnter) -
          (1 - RECEDE_SCALE_TO) * recedeProgress;

        win.style.transform = `translate3d(0, ${translateY.toFixed(2)}px, 0) scale(${scale.toFixed(4)})`;
        win.style.opacity = settledEnter.toFixed(3);
      }

      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    }

    function onResize() {
      layout();
      update();
    }

    layout();
    update();

    const ro = new ResizeObserver(onResize);
    contents.forEach((el) => el && ro.observe(el));

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      ro.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const sections = Children.toArray(children);

  return (
    <>
      {sections.map((section, i) => (
        <div
          key={i}
          ref={(el) => {
            wrapperRefs.current[i] = el;
          }}
          className="relative"
          style={{ zIndex: i + 1 }}
        >
          <div
            ref={(el) => {
              windowRefs.current[i] = el;
            }}
            className="scroll-stack-window"
          >
            <div
              ref={(el) => {
                contentRefs.current[i] = el;
              }}
              className="scroll-stack-content"
            >
              {section}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
