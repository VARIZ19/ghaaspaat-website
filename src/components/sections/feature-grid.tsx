"use client";

import { focusAreas } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { BookOpen, Leaf, Sprout, Users } from "lucide-react";

const iconMap = {
  leaf: Leaf,
  book: BookOpen,
  sprout: Sprout,
  users: Users,
};

export function FeatureGrid() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-display text-3xl font-bold text-stone-900 sm:text-4xl">
            Why Ghaas Paat?
          </h2>
          <p className="mt-4 text-lg text-stone-600">
            Innovation-driven agritech making daily nutrition accessible across Bihar and beyond.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {focusAreas.map((area, i) => {
            const Icon = iconMap[area.icon as keyof typeof iconMap] ?? Leaf;
            return (
              <motion.article
                key={area.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={cn(
                  "group relative overflow-hidden rounded-3xl border border-stone-200/80 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-500/5",
                  i === 0 && "sm:col-span-2 lg:col-span-1",
                )}
              >
                <div className="mb-4 inline-flex rounded-2xl bg-brand-50 p-3 text-brand-600 transition group-hover:bg-brand-100">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="font-display text-xl font-semibold text-stone-900">
                  {area.title}
                </h3>
                <p className="mt-2 text-stone-600 leading-relaxed">{area.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
