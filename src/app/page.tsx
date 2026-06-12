import { CtaBanner } from "@/components/sections/cta-banner";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { Hero } from "@/components/sections/hero";
import { ProductGrid } from "@/components/sections/product-grid";
import { Testimonial } from "@/components/sections/testimonial";
import { ValuesStrip } from "@/components/sections/values-strip";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValuesStrip />
      <FeatureGrid />
      <ProductGrid limit={4} />
      <Testimonial />
      <CtaBanner />
    </>
  );
}
