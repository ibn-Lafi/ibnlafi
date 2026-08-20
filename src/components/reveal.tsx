"use client";

import { useEffect, useRef, type ElementType, type ReactNode, type Ref } from "react";

export function Reveal({
  children,
  stagger = false,
  className = "",
  as,
}: {
  children: ReactNode;
  stagger?: boolean;
  className?: string;
  as?: ElementType;
}) {
  const ref = useRef<HTMLElement>(null);
  const Tag = as ?? "div";

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as unknown as Ref<HTMLDivElement>}
      className={`${stagger ? "reveal-stagger" : "reveal"} ${className}`}
    >
      {children}
    </Tag>
  );
}
