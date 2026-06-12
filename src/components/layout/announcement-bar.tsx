"use client";

import { site } from "@/lib/site-data";
import { motion } from "framer-motion";
import { Phone, Sparkles } from "lucide-react";
import Link from "next/link";

export function AnnouncementBar() {
  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="relative z-50 bg-brand-600 text-white"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-1 px-4 py-2.5 text-center text-sm sm:flex-row sm:gap-4">
        <span className="inline-flex items-center gap-1.5 font-medium">
          <Sparkles className="h-3.5 w-3.5" aria-hidden />
          {site.banner}
        </span>
        <span className="hidden h-4 w-px bg-white/30 sm:block" aria-hidden />
        <Link
          href={`tel:${site.phoneRaw}`}
          className="inline-flex items-center gap-1.5 font-semibold underline-offset-2 hover:underline"
        >
          <Phone className="h-3.5 w-3.5" aria-hidden />
          {site.cta} | {site.phone}
        </Link>
      </div>
    </motion.div>
  );
}
