"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { FormEvent, useState } from "react";

const OCCUPATIONS = [
  { value: "nutritionist", label: "Nutritionist" },
  { value: "dietitian", label: "Dietitian" },
  { value: "doctor", label: "Doctor" },
] as const;

type Occupation = (typeof OCCUPATIONS)[number]["value"];

interface FormState {
  name: string;
  email: string;
  contact: string;
  occupation: Occupation | "";
  description: string;
}

const initialState: FormState = {
  name: "",
  email: "",
  contact: "",
  occupation: "",
  description: "",
};

function countWords(text: string): number {
  return text.trim() ? text.trim().split(/\s+/).length : 0;
}

export function PartnerForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const wordCount = countWords(form.description);
  const overLimit = wordCount > 100;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (!form.name.trim() || !form.email.trim() || !form.contact.trim() || !form.occupation) {
      setError("Please fill in all required fields.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!/^[+\d\s()-]{7,15}$/.test(form.contact.trim())) {
      setError("Please enter a valid contact number.");
      return;
    }

    if (overLimit) {
      setError("Description must be 100 words or fewer.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/partner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          contact: form.contact.trim(),
          occupation: form.occupation,
          description: form.description.trim(),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Submission failed. Please try again.");
      }

      setSubmitted(true);
      setForm(initialState);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-3xl border border-brand-200 bg-brand-50 p-10 text-center"
      >
        <CheckCircle2 className="mx-auto h-14 w-14 text-brand-600" />
        <h2 className="mt-4 font-display text-2xl font-bold text-stone-900">
          Application Submitted!
        </h2>
        <p className="mt-2 text-stone-600">
          Thank you for your interest in partnering with Ghaas Paat. Our team will
          review your details and get in touch soon.
        </p>
        <Button className="mt-6" onClick={() => setSubmitted(false)}>
          Submit Another Application
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className="rounded-3xl border border-stone-200/80 bg-white p-8 shadow-lg shadow-brand-900/5 lg:p-10"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="sm:col-span-2 sm:grid sm:grid-cols-2 sm:gap-6">
          <Field label="Name" htmlFor="partner-name" required>
            <input
              id="partner-name"
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your full name"
              className={inputClass}
            />
          </Field>

          <Field label="Email ID" htmlFor="partner-email" required>
            <input
              id="partner-email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@example.com"
              className={inputClass}
            />
          </Field>
        </div>

        <Field label="Contact No." htmlFor="partner-contact" required>
          <input
            id="partner-contact"
            type="tel"
            required
            value={form.contact}
            onChange={(e) => setForm({ ...form, contact: e.target.value })}
            placeholder="+91 62998 18407"
            className={inputClass}
          />
        </Field>

        <Field label="Occupation Type" htmlFor="partner-occupation" required>
          <select
            id="partner-occupation"
            required
            value={form.occupation}
            onChange={(e) =>
              setForm({ ...form, occupation: e.target.value as Occupation | "" })
            }
            className={cn(inputClass, "cursor-pointer")}
          >
            <option value="" disabled>
              Select your profession
            </option>
            {OCCUPATIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </Field>

        <div className="sm:col-span-2">
          <div className="flex items-center justify-between">
            <label htmlFor="partner-description" className="text-sm font-medium text-stone-700">
              Description <span className="text-brand-600">*</span>
            </label>
            <span
              className={cn(
                "text-xs font-medium",
                overLimit ? "text-red-600" : wordCount > 80 ? "text-amber-600" : "text-stone-400",
              )}
            >
              {wordCount}/100 words
            </span>
          </div>
          <textarea
            id="partner-description"
            rows={5}
            required
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            placeholder="Tell us why you'd like to partner with Ghaas Paat and how you plan to collaborate..."
            className={cn(inputClass, "mt-2 resize-none")}
          />
        </div>
      </div>

      {error && (
        <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
          {error}
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        className="mt-8 w-full sm:w-auto"
        disabled={loading || overLimit}
      >
        {loading ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            <Send className="h-5 w-5" />
            Submit Application
          </>
        )}
      </Button>
    </motion.form>
  );
}

function Field({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="text-sm font-medium text-stone-700">
        {label} {required && <span className="text-brand-600">*</span>}
      </label>
      <div className="mt-2">{children}</div>
    </div>
  );
}

const inputClass =
  "w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-stone-900 placeholder:text-stone-400 transition focus:border-brand-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20";
