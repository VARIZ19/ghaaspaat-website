"use client";

import { Button } from "@/components/ui/button";
import { site } from "@/lib/site-data";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import Link from "next/link";

export function CtaBanner() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-brand-200 bg-brand-50 px-8 py-10 text-center sm:flex-row sm:text-left"
        >
          <div>
            <h2 className="font-display text-2xl font-bold text-stone-900 sm:text-3xl">
              Ready for fresher, healthier meals?
            </h2>
            <p className="mt-2 text-stone-600">
              {site.cta} — call us at {site.phone}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/shop">
              <Button size="lg">Shop Microgreens</Button>
            </Link>
            <a href={`tel:${site.phoneRaw}`}>
              <Button variant="outline" size="lg">
                <Phone className="h-5 w-5" />
                Call Now
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
