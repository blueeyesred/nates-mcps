"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-sm text-foreground/70">
            (c) {new Date().getFullYear()} Southern Shine Cleaning Co. All rights reserved.
          </p>
          <p className="text-xs text-foreground/60 mt-1">
            Our promise: if you’re not thrilled, we come back and fix it. No questions asked.
          </p>
        </div>
        <nav className="flex items-center gap-4 text-sm">
          <Link href="#services" className="text-foreground/80 hover:text-primary">
            Services
          </Link>
          <Link href="#reviews" className="text-foreground/80 hover:text-primary">
            Reviews
          </Link>
          <Link href="#contact" className="text-foreground/80 hover:text-primary">
            Contact
          </Link>
          <Link
            href="#quote"
            onClick={() => trackEvent("click_get_quote", { location: "footer" })}
            className="inline-flex items-center rounded-md border px-3 py-1.5 hover:bg-accent"
          >
            Get a Quote
          </Link>
        </nav>
      </div>
    </footer>
  );
}
