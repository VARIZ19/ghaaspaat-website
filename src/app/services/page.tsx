import { Accordion } from "@/components/ui/accordion";
import { CtaBanner } from "@/components/sections/cta-banner";
import { PageHeader } from "@/components/sections/page-header";
import { ServicesCards } from "@/components/sections/services-cards";
import { faqs } from "@/lib/site-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sustainable Microgreens for Healthy Eating",
  description:
    "Ghaas Paat specializes in sustainable microgreen products and services that promote healthy eating and support local employment.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        label="Services"
        title="GHAASPAAT SERVICES"
        description="Innovative solutions for healthy living — from DIY grow kits to bulk supply for restaurants and wellness centers."
      />
      <ServicesCards />
      <section className="py-20 lg:py-28 bg-stone-100/50">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold text-stone-900">FAQs</h2>
            <p className="mt-3 text-stone-600">
              Everything you need to know about microgreens and our services.
            </p>
          </div>
          <Accordion items={faqs} className="mt-12" />
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
