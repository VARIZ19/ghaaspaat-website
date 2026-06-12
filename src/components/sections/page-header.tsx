"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  description: string;
  label?: string;
}

export function PageHeader({ title, description, label }: PageHeaderProps) {
  return (
    <section className="gradient-mesh border-b border-stone-200/60">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-3xl text-center"
        >
          {label && (
            <span className="inline-block rounded-full bg-brand-100 px-4 py-1 text-sm font-medium text-brand-700">
              {label}
            </span>
          )}
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl text-balance">
            {title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-stone-600">{description}</p>
        </motion.div>
      </div>
    </section>
  );
}
