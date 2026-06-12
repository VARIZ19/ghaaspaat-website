import { PageHeader } from "@/components/sections/page-header";
import { PartnerForm } from "@/components/sections/partner-form";
import { Handshake, Leaf, Users } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Become a Partner",
  description:
    "Join Ghaas Paat as a nutritionist, dietitian, or doctor partner. Collaborate to bring nutrient-rich microgreens to more communities across Bihar.",
};

const benefits = [
  {
    icon: Handshake,
    title: "Collaborate With Us",
    text: "Work alongside Bihar's leading microgreens farm to promote healthier lifestyles.",
  },
  {
    icon: Leaf,
    title: "Fresh & Pesticide-Free",
    text: "Offer your clients access to AI-monitored, nutrient-dense microgreens.",
  },
  {
    icon: Users,
    title: "Grow Your Network",
    text: "Connect with a community-driven agritech brand empowering wellness professionals.",
  },
];

export default function BecomeAPartnerPage() {
  return (
    <>
      <PageHeader
        label="Partnership"
        title="Become a Partner"
        description="Nutritionists, dietitians, and doctors — partner with Ghaas Paat to bring fresh, nutrient-rich microgreens to your patients and clients."
      />

      <section className="pb-20 lg:pb-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-2">
              <h2 className="font-display text-2xl font-bold text-stone-900">
                Why partner with Ghaas Paat?
              </h2>
              <p className="mt-4 leading-relaxed text-stone-600">
                Fill out the form and our team will reach out to discuss collaboration
                opportunities, bulk supply, referrals, and wellness programs tailored to
                your practice.
              </p>

              <ul className="mt-8 space-y-6">
                {benefits.map((item) => (
                  <li key={item.title} className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                      <item.icon className="h-5 w-5" aria-hidden />
                    </div>
                    <div>
                      <h3 className="font-semibold text-stone-900">{item.title}</h3>
                      <p className="mt-1 text-sm text-stone-600">{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3">
              <PartnerForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
