import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, HandHeart, Mountain } from "lucide-react";

const highlights = [
  {
    icon: Mountain,
    title: "Rooted in East Tennessee",
    description:
      "Family-run and proud of Oak Ridge, Knoxville, and every holler nearby. We show up like neighbors, not strangers.",
  },
  {
    icon: CheckCircle2,
    title: "Startup hustle, pro standards",
    description:
      "We’re building this business the right way—transparent pricing, insured teams, and a promise to make things right.",
  },
  {
    icon: HandHeart,
    title: "People-first service",
    description:
      "We protect pets, kids, and heirlooms, communicate clearly, and keep scrubbing until you’re happy with the shine.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-accent/10 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">Our story</p>
            <h2 className="font-headline text-3xl sm:text-4xl font-bold leading-tight text-foreground">
              A neighborly crew building a company we’re proud of
            </h2>
            <p className="text-lg text-foreground/80">
              Southern Shine started with a handful of East Tennessee friends who wanted a cleaning
              company that treats homes with the same care we give our own. We’re small and scrappy,
              obsessed with reliable service—because our name and our reputation are on every job.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="shadow-md">
                <Link href="#quote">Start a quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="shadow-sm">
                <Link href="tel:+18652654105">Call (865) 265-4105</Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <Card key={item.title} className="shadow-sm border-primary/20">
                <CardContent className="p-5 space-y-3">
                  <item.icon className="h-6 w-6 text-primary" aria-hidden />
                  <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="text-foreground/80 text-sm leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
