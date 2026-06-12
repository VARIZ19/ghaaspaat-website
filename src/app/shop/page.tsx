import { CtaBanner } from "@/components/sections/cta-banner";
import { PageHeader } from "@/components/sections/page-header";
import { ProductGrid } from "@/components/sections/product-grid";
import { Testimonial } from "@/components/sections/testimonial";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Innovative Microgreen Offerings for a Healthy Lifestyle",
  description:
    "Explore ready-to-eat boxes, DIY kits, and bulk supplies. Embrace a healthier lifestyle with fresh, nutritious microgreens.",
};

export default function ShopPage() {
  return (
    <>
      <PageHeader
        label="Shop"
        title="Healthy Lifestyle, One Harvest at a Time"
        description="Explore Ghaas Paat's innovative microgreen offerings — ready-to-eat boxes, DIY kits, bulk supplies, and weekly subscriptions."
      />
      <ProductGrid
        title="Our Products"
        subtitle="Fresh, pesticide-free microgreens delivered across Bihar. Call to order or subscribe for weekly delivery."
      />
      <Testimonial />
      <CtaBanner />
    </>
  );
}
