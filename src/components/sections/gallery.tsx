"use client";

import { galleryImages } from "@/lib/site-data";
import { motion } from "framer-motion";
import Image from "next/image";

export function Gallery() {
  const images = galleryImages.filter((src) => !src.includes("_69837"));

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-stone-900 sm:text-4xl">
            Gallery
          </h2>
          <p className="mt-3 text-lg text-stone-600">
            Explore our vibrant microgreens
          </p>
        </div>

        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {images.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="mb-4 break-inside-avoid overflow-hidden rounded-2xl"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={src}
                  alt={`Ghaas Paat farm gallery image ${i + 1}`}
                  fill
                  className="object-cover transition hover:scale-105 duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
