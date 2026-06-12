"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

export function Testimonial() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-brand-600 px-8 py-14 text-center text-white lg:px-16"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-white blur-3xl" />
          </div>

          <Quote className="mx-auto h-10 w-10 text-brand-200" aria-hidden />
          <blockquote className="relative mt-6 font-display text-2xl font-medium leading-relaxed sm:text-3xl">
            &ldquo;Ghaas Paat&apos;s microgreens transformed our meals into nutritious delights!&rdquo;
          </blockquote>
          <div className="relative mt-8 flex flex-col items-center gap-2">
            <div className="flex gap-1 text-amber-300" aria-label="5 star rating">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <cite className="not-italic font-semibold">Robin Choudhary</cite>
            <span className="text-brand-200 text-sm">Happy Customer</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
