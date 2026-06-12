"use client";

import { services } from "@/lib/site-data";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function ServicesCards() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {services.map((service, i) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group flex flex-col overflow-hidden rounded-3xl border border-stone-200/80 bg-white shadow-sm sm:flex-row"
            >
              <div className="relative aspect-[4/3] sm:aspect-auto sm:w-2/5">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 40vw"
                />
              </div>
              <div className="flex flex-1 flex-col justify-center p-8">
                <h3 className="font-display text-2xl font-bold text-stone-900">
                  {service.title}
                </h3>
                <p className="mt-3 text-stone-600 leading-relaxed">
                  {service.description}
                </p>
                <Link
                  href="/shop"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
