"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const SLIDES = [
  {
    src: "/images/hero-slideshow/01-product-bowl.jpg",
    alt: "Ghaas Paat microgreen salad bowl with fresh greens",
  },
  {
    src: "/images/hero-slideshow/02-wooden-bowl.jpg",
    alt: "Fresh microgreens in a wooden bowl with Ghaas Paat branding",
  },
  {
    src: "/images/hero-slideshow/03-comparison.jpg",
    alt: "Why microgreens are better than regular salad — nutrient comparison",
  },
  {
    src: "/images/hero-slideshow/04-benefits.jpg",
    alt: "Small greens, big benefits — Ghaas Paat health benefits",
  },
  {
    src: "/images/hero-slideshow/05-fresh-pure.jpg",
    alt: "Fresh, pure, powerful microgreens from Ghaas Paat",
  },
  {
    src: "/images/hero-slideshow/06-brand-end.jpg",
    alt: "Small greens, big benefits — eat green, live clean",
  },
  {
    src: "/images/hero-slideshow/07-recipe-steps.jpg",
    alt: "How to make microgreen salad — simple healthy recipe",
  },
  {
    src: "/images/hero-slideshow/08-salad-plates.jpg",
    alt: "Colorful microgreen salad with fresh vegetables",
  },
] as const;

const INTERVAL_MS = 4000;

export function HeroSlideshow() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback((next: number) => {
    setDirection(next > index ? 1 : -1);
    setIndex(next);
  }, [index]);

  const next = useCallback(() => {
    setDirection(1);
    setIndex((i) => (i + 1) % SLIDES.length);
  }, []);

  useEffect(() => {
    const prefersReduced =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const timer = setInterval(next, INTERVAL_MS);
    return () => clearInterval(timer);
  }, [next]);

  const slide = SLIDES[index];

  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/60 shadow-2xl shadow-brand-900/10 bg-stone-100">
      <AnimatePresence mode="popLayout" custom={direction}>
        <motion.div
          key={slide.src}
          custom={direction}
          initial={{ opacity: 0, scale: 1.06, x: direction * 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.96, x: direction * -40 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={index === 0}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* subtle gradient overlay for depth */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />

      {/* progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
        <motion.div
          key={index}
          className="h-full bg-brand-400"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: INTERVAL_MS / 1000, ease: "linear" }}
        />
      </div>

      {/* dot indicators */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {SLIDES.map((s, i) => (
          <button
            key={s.src}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={cn(
              "h-2 rounded-full transition-all duration-300 cursor-pointer",
              i === index
                ? "w-6 bg-white shadow-md"
                : "w-2 bg-white/50 hover:bg-white/80",
            )}
          />
        ))}
      </div>
    </div>
  );
}
