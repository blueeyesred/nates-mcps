import { Metadata } from "next";
import { notFound } from "next/navigation";

const AREAS = [
  { slug: "oak-ridge", name: "Oak Ridge" },
  { slug: "knoxville", name: "Knoxville" },
  { slug: "sevierville", name: "Sevierville" },
  { slug: "farragut", name: "Farragut" },
  { slug: "maryville", name: "Maryville" },
  { slug: "alcoa", name: "Alcoa" },
  { slug: "powell", name: "Powell" },
  { slug: "lenoir-city", name: "Lenoir City" },
  { slug: "clinton", name: "Clinton" },
];

export function generateStaticParams() {
  return AREAS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = AREAS.find((a) => a.slug === slug);
  if (!area) return {};
  return {
    title: `${area.name} Cleaning Services | Southern Shine`,
    description: `Local, hard-working cleaners serving ${area.name}. Call (865) 265-4105 for a fast, transparent quote.`,
  };
}

export default function AreaPage({ params }: any) {
  const area = AREAS.find((a) => a.slug === params.slug);
  if (!area) return notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${area.name} Cleaning Services`,
    areaServed: area.name,
    provider: {
      "@type": "LocalBusiness",
      name: "Southern Shine Cleaning Co.",
      telephone: "+1-865-265-4105",
    },
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-3xl">
      <h1 className="font-headline text-4xl font-bold">{area.name} Cleaning Services</h1>
      <p className="mt-3 text-lg text-muted-foreground">
        Respectful cleaners who live nearby and aren’t afraid to get their hands dirty—weekly
        shines, deep resets, move-in/out, and interior car detailing in {area.name}.
      </p>
      <ul className="mt-8 list-disc pl-6">
        <li>Upfront pricing with instant estimates</li>
        <li>Friendly, background-checked locals</li>
        <li>Flexible scheduling to fit your life</li>
      </ul>
      <a
        href="/#quote"
        className="mt-8 inline-flex items-center rounded-md bg-primary px-4 py-2 text-white"
      >
        Get a Free Estimate
      </a>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
