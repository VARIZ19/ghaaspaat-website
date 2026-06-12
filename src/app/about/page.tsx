import { CtaBanner } from "@/components/sections/cta-banner";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { Gallery } from "@/components/sections/gallery";
import { MissionSection } from "@/components/sections/mission-section";
import { PageHeader } from "@/components/sections/page-header";
import { ValuesStrip } from "@/components/sections/values-strip";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sustainable Microgreens for Health & Wellness",
  description:
    "Discover the benefits of microgreens with Ghaas Paat. Nutritious options that enhance your diet and support local employment initiatives.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="About"
        title="Sustainable Microgreens for Health & Wellness"
        description="Ghaas Paat is redefining daily nutrition through fresh, pesticide-free microgreens grown with AI-monitored, soil-less farming in Bihar."
      />
      <MissionSection />
      <ValuesStrip />
      <FeatureGrid />
      <Gallery />
      <CtaBanner />
    </>
  );
}
