"use client";

import { values } from "@/lib/site-data";
import { motion } from "framer-motion";

export function ValuesStrip() {
  return (
    <section className="border-y border-stone-200 bg-stone-900 py-6">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium text-stone-300"
        >
          {values.map((value, i) => (
            <li key={value} className="flex items-center gap-8">
              <span className="text-white">{value}</span>
              {i < values.length - 1 && (
                <span className="hidden h-1 w-1 rounded-full bg-brand-400 sm:block" aria-hidden />
              )}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
