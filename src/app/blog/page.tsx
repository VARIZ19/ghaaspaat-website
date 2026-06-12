import { BlogGrid } from "@/components/sections/blog-grid";
import { CtaBanner } from "@/components/sections/cta-banner";
import { PageHeader } from "@/components/sections/page-header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fresh Microgreens Delivery from Bihar's Leading Farm",
  description:
    "Order pesticide-free microgreens, healthy grow kits, and subscription boxes. Discover nutritious superfoods and sustainable urban farming.",
};

export default function BlogPage() {
  return (
    <>
      <PageHeader
        label="Blog"
        title="Stories from the Farm"
        description="Tips on nutrition, sustainable farming, and the journey of bringing fresh microgreens from Bihar to your plate."
      />
      <BlogGrid />
      <CtaBanner />
    </>
  );
}
