"use client";

import { Button } from "@/components/ui/button";
import { HeroSlideshow } from "@/components/sections/hero-slideshow";
import { site } from "@/lib/site-data";
import { motion } from "framer-motion";
import { ArrowRight, Leaf } from "lucide-react";
import Link from "next/link";

interface HeroProps {
  title?: string;
  subtitle?: string;
  showImage?: boolean;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
}

export function Hero({
  title = "Nutrient-Rich Microgreens from Bihar",
  subtitle = site.description,
  showImage = true,
  ctaPrimary = { label: "Shop Now", href: "/shop" },
  ctaSecondary = { label: "Our Mission", href: "/about" },
}: HeroProps) {
  return (
    <section className="relative overflow-hidden gradient-mesh">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,transparent,rgba(250,250,249,1))]" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700">
            <Leaf className="h-4 w-4" aria-hidden />
            {site.legalName}
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-stone-900 text-balance sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone-600">
            {subtitle}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href={ctaPrimary.href}>
              <Button size="lg">
                {ctaPrimary.label}
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link href={ctaSecondary.href}>
              <Button variant="outline" size="lg">
                {ctaSecondary.label}
              </Button>
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-stone-500">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-brand-500" />
              Pesticide-free
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-brand-500" />
              AI-monitored farming
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-brand-500" />
              Weekly delivery
            </span>
          </div>
        </motion.div>

        {showImage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-3xl bg-brand-400/20 blur-3xl" />
            <HeroSlideshow />
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-4 -left-4 rounded-2xl glass px-5 py-4 shadow-lg sm:-left-8"
            >
              <p className="text-2xl font-bold text-brand-600">40x</p>
              <p className="text-sm text-stone-600">More nutrients than mature veggies</p>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
