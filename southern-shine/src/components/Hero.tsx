import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-image");

  return (
    <section className="w-full bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold tracking-wide text-primary">
              Built by East Tennessee neighbors
            </p>
            <h1 className="mt-3 font-headline text-4xl sm:text-5xl font-extrabold leading-tight text-foreground">
              The startup cleaning crew that treats your home like family
            </h1>
            <p className="mt-6 text-base sm:text-lg text-foreground/80">
              We’re Oak Ridge and Knoxville locals with boots on the ground, building a company on
              grit, respect, and clear communication. Every visit gets hometown care, from muddy
              boots on porches to post-game crumbs in the living room.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
              <Button asChild size="lg" className="shadow-lg hover:shadow-xl active:shadow-md">
                <Link href="#quote">Book a Cleaning</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="shadow-lg hover:shadow-xl active:shadow-md"
              >
                <Link href="#services">See What We Do</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="shadow hover:shadow-md active:shadow-sm"
              >
                <Link href="tel:+18652654105">Talk with a Neighbor</Link>
              </Button>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-xl">
            {heroImage && (
              <div className="relative overflow-hidden rounded-xl border bg-card shadow-xl">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={heroImage.imageUrl}
                    alt={heroImage.description}
                    fill
                    className="object-cover"
                    data-ai-hint={heroImage.imageHint}
                    priority
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
