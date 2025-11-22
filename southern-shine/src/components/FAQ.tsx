"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

const FAQS = [
  {
    q: "Do you background check your team?",
    a: "Yes. We’re a small crew of locals with verified backgrounds, training, and insurance.",
  },
  {
    q: "Can you stay late if I’m on a deadline?",
    a: "Absolutely. We’re known for working until the job is done, even if it runs past the original block.",
  },
  {
    q: "Where do you work?",
    a: "Oak Ridge, Knoxville, Powell, Clinton, and the surrounding East Tennessee communities.",
  },
  {
    q: "What should I do before you arrive?",
    a: "Nothing special. Leave us access notes, your priority areas, and we’ll handle the rest—supplies included.",
  },
];

export default function FAQ() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h2 className="font-headline text-3xl sm:text-4xl font-bold text-center">
          Frequently Asked Questions
        </h2>
        <div className="mt-8">
          <Accordion type="single" collapsible>
            {FAQS.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-lg">{f.q}</AccordionTrigger>
                <AccordionContent>{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
