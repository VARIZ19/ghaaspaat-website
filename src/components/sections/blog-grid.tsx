"use client";

import { blogPosts } from "@/lib/site-data";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import Image from "next/image";

export function BlogGrid() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group overflow-hidden rounded-3xl border border-stone-200/80 bg-white shadow-sm transition hover:shadow-xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-700 backdrop-blur">
                  {post.category}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-stone-500">
                  <time>{post.date}</time>
                  <span aria-hidden>·</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {post.readTime}
                  </span>
                </div>
                <h2 className="mt-3 font-display text-xl font-semibold text-stone-900 group-hover:text-brand-700 transition-colors">
                  {post.title}
                </h2>
                <p className="mt-2 text-stone-600 line-clamp-3">{post.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-600">
                  Read more
                  <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
