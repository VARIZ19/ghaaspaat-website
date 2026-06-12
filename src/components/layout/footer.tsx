"use client";

import { Button } from "@/components/ui/button";
import { site, navLinks } from "@/lib/site-data";
import { Facebook, Instagram, Linkedin, Mail, Phone, Twitter } from "lucide-react";
import Link from "next/link";
import { FormEvent, useState } from "react";

const socialIcons = [
  { href: site.social.facebook, icon: Facebook, label: "Facebook" },
  { href: site.social.instagram, icon: Instagram, label: "Instagram" },
  { href: site.social.twitter, icon: Twitter, label: "Twitter" },
  { href: site.social.linkedin, icon: Linkedin, label: "LinkedIn" },
];

export function Footer() {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (name.trim()) setSubmitted(true);
  };

  return (
    <footer id="subscribe" className="border-t border-stone-200 bg-stone-900 text-stone-300">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          <div>
            <h3 className="font-display text-2xl font-semibold text-white">
              Subscribe Now
            </h3>
            <p className="mt-2 text-stone-400">{site.subscribeTagline}</p>
            {submitted ? (
              <p className="mt-6 rounded-2xl bg-brand-500/20 px-4 py-3 text-brand-200">
                Thanks, {name}! We&apos;ll be in touch with weekly delivery details.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row">
                <label htmlFor="subscribe-name" className="sr-only">
                  Name
                </label>
                <input
                  id="subscribe-name"
                  type="text"
                  required
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="flex-1 rounded-full border border-stone-700 bg-stone-800 px-5 py-3 text-white placeholder:text-stone-500 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30"
                />
                <Button type="submit" size="md">
                  Submit
                </Button>
              </form>
            )}
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold text-white">Contact</h3>
            <p className="mt-2 text-stone-400">Get in touch</p>
            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-3 hover:text-white transition-colors"
                >
                  <Mail className="h-5 w-5 text-brand-400" aria-hidden />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phoneRaw}`}
                  className="inline-flex items-center gap-3 hover:text-white transition-colors"
                >
                  <Phone className="h-5 w-5 text-brand-400" aria-hidden />
                  {site.phone}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold text-white">Explore</h3>
            <ul className="mt-6 grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-stone-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex gap-3">
              {socialIcons.map(({ href, icon: Icon, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-700 text-stone-400 transition hover:border-brand-500 hover:bg-brand-500/10 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-stone-800 pt-8 text-center text-sm text-stone-500">
          {site.copyright}
        </div>
      </div>
    </footer>
  );
}
