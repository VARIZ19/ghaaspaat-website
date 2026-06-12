"use client";

import { Button } from "@/components/ui/button";
import { products } from "@/lib/site-data";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProductGridProps {
  title?: string;
  subtitle?: string;
  limit?: number;
}

export function ProductGrid({
  title = "Fresh From Our Farm",
  subtitle = "Pesticide-free microgreens, kits, and subscriptions delivered to your door.",
  limit,
}: ProductGridProps) {
  const items = limit ? products.slice(0, limit) : products;

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="font-display text-3xl font-bold text-stone-900 sm:text-4xl">
              {title}
            </h2>
            <p className="mt-3 max-w-xl text-lg text-stone-600">{subtitle}</p>
          </div>
          <Link href="/shop" className="hidden sm:block">
            <Button variant="outline">View All Products</Button>
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((product, i) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className="group overflow-hidden rounded-3xl border border-stone-200/80 bg-stone-50 shadow-sm"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <span className="absolute left-3 top-3 rounded-full bg-brand-500 px-3 py-1 text-xs font-semibold text-white">
                  {product.badge}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold text-stone-900">
                    {product.name}
                  </h3>
                  <span className="shrink-0 font-bold text-brand-600">{product.price}</span>
                </div>
                <p className="mt-2 text-sm text-stone-600 line-clamp-2">
                  {product.description}
                </p>
                <a
                  href={`tel:6299818407`}
                  className="mt-4 flex w-full"
                >
                  <Button variant="secondary" size="sm" className="w-full">
                    <ShoppingBag className="h-4 w-4" />
                    Order Now
                  </Button>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
