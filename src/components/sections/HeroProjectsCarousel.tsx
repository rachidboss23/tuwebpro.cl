"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { projects } from "@/lib/projects";

export default function HeroProjectsCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    const carousel = carouselRef.current;
    const firstCard = carousel?.firstElementChild;
    if (carousel && firstCard instanceof HTMLElement) {
      const gap = Number.parseFloat(getComputedStyle(carousel).columnGap) || 0;
      const index = Math.round(
        carousel.scrollLeft / (firstCard.offsetWidth + gap),
      );
      setActiveIndex(Math.min(index, projects.length - 1));
    }
  };

  return (
    <div className="mt-2 md:hidden">
      <div className="mb-3 flex items-center justify-between gap-3">
        <p className="text-sm font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
          Proyectos reales
        </p>
        <a
          href="#proyectos"
          className="inline-flex min-h-11 items-center rounded-md text-sm font-medium text-cyan-200 underline underline-offset-4 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
        >
          Ver todos
        </a>
      </div>

      <div
        role="region"
        aria-label="Proyectos reales"
        tabIndex={0}
        ref={carouselRef}
        onScroll={handleScroll}
        className="-mx-4 flex snap-x snap-mandatory scroll-pl-4 gap-3 overflow-x-auto px-4 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
      >
        {projects.map((project) => (
          <a
            key={project.slug}
            href={`#proyecto-${project.slug}`}
            className="glass block w-[78%] shrink-0 snap-start overflow-hidden rounded-2xl border border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
          >
            <div className="relative h-[104px] w-full overflow-hidden border-b border-white/10 bg-black/40">
              <Image
                src={project.image}
                alt=""
                fill
                sizes="78vw"
                className="object-cover object-top"
              />
            </div>
            <div className="p-3">
              <span className="block text-[11px] font-semibold text-cyan-200">{project.heroLabel}</span>
              <strong
                className="mt-0.5 block text-base font-bold text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {project.title}
              </strong>
              <span className="mt-1 block text-[13px] leading-snug text-white/75">{project.heroLine}</span>
              <span className="mt-2 block text-[11px] text-white/70">{project.heroTags.join(" · ")}</span>
            </div>
          </a>
        ))}
      </div>
      <div className="mt-3 flex justify-center gap-1.5" aria-hidden="true">
        {projects.map((project, index) => (
          <span
            key={project.slug}
            className={`h-1.5 rounded-full transition-[width,background-color] motion-reduce:transition-none ${
              index === activeIndex ? "w-4 bg-cyan-300" : "w-1.5 bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
