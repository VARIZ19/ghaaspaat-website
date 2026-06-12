"use client";

import { site } from "@/lib/site-data";
import { motion } from "framer-motion";
import { Target } from "lucide-react";

export function MissionSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 text-brand-600 font-medium">
              <Target className="h-5 w-5" />
              About GhaasPaat
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-stone-900 sm:text-4xl">
              Our Mission
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-stone-600">
              {site.legalName} is a Bihar-based agritech startup redefining daily nutrition
              through fresh, pesticide-free, nutrient-rich microgreens. By combining modern
              soil-less farming, AI-assisted cultivation, and sustainable agricultural
              practices, we deliver functional nutrition that supports healthier lifestyles,
              stronger immunity, and better everyday wellness.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-stone-600">
              We are building a future where nutrition is accessible, farming is smarter,
              and health becomes a daily habit.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-brand-200 bg-brand-50 p-8 lg:p-10"
          >
            <h3 className="font-display text-xl font-semibold text-brand-800">
              GHAASPAAT FARM
            </h3>
            <p className="mt-4 leading-relaxed text-stone-700">
              Our mission at Ghaaspaat Farms is to make nutrition accessible to all by
              promoting healthy living through fresh, nutrient-rich microgreens. We combine
              sustainable, soil-less farming with modern technology to deliver fresh,
              pesticide-free microgreens straight to homes and communities.
            </p>
            <p className="mt-4 leading-relaxed text-stone-700">
              We are dedicated to empowering rural youth, women entrepreneurs, and farmers
              through training and microgreen cultivation programs — building a self-reliant
              India, one microgreen at a time.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
