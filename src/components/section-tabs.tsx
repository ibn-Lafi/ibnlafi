"use client";

import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface TabDef {
  id: string;
  label: string;
  icon: ReactNode;
  content: ReactNode;
}

export function SectionTabs({ tabs }: { tabs: TabDef[] }) {
  const [activeId, setActiveId] = useState(tabs[0]?.id);
  const activeIndex = Math.max(
    0,
    tabs.findIndex((tab) => tab.id === activeId)
  );
  const activeTab = tabs[activeIndex];

  function focusTab(index: number) {
    const el = document.getElementById(`tab-${tabs[index].id}`);
    el?.focus();
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      const next = (activeIndex + 1) % tabs.length;
      setActiveId(tabs[next].id);
      focusTab(next);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      const prev = (activeIndex - 1 + tabs.length) % tabs.length;
      setActiveId(tabs[prev].id);
      focusTab(prev);
    }
  }

  return (
    <section className="scroll-mt-16 border-b border-border">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
        <div
          role="tablist"
          onKeyDown={handleKeyDown}
          className="flex flex-wrap gap-2"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              id={`tab-${tab.id}`}
              type="button"
              role="tab"
              aria-selected={tab.id === activeTab.id}
              aria-controls={`panel-${tab.id}`}
              tabIndex={tab.id === activeTab.id ? 0 : -1}
              onClick={() => setActiveId(tab.id)}
              className={cn(
                "inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition-all active:scale-95",
                tab.id === activeTab.id
                  ? "border-foreground bg-foreground text-background shadow-sm"
                  : "border-border text-muted-foreground hover:-translate-y-0.5 hover:bg-muted hover:text-foreground"
              )}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        <div
          key={activeTab.id}
          id={`panel-${activeTab.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeTab.id}`}
          tabIndex={0}
          className="reveal mt-10 is-visible"
        >
          {activeTab.content}
        </div>
      </div>
    </section>
  );
}
