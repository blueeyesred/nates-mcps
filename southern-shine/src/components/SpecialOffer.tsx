"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

export default function SpecialOffer() {
  useEffect(() => {
    trackEvent("view_promotion", { promotion_name: "Neighbor Welcome Offer" });
  }, []);
  return (
    <section id="specials" className="bg-accent/30 py-10 md:py-12">
      <div className="container text-center">
        <h3 className="font-headline text-2xl md:text-3xl">Neighbor Welcome Offer</h3>
        <p className="max-w-2xl mx-auto mt-2 text-muted-foreground">
          First-time clients in East Tennessee get <span className="font-semibold">$35 off</span> a
          Deep Reset. Perfect for move-ins, post-renovation dust, or a fresh start before company
          arrives.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Button asChild>
            <Link
              href="#quote"
              onClick={() =>
                trackEvent("select_promotion", { promotion_name: "Neighbor Welcome Offer" })
              }
            >
              Claim Offer
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link
              href="#services"
              onClick={() =>
                trackEvent("click_services_from_promo", {
                  promotion_name: "Neighbor Welcome Offer",
                })
              }
            >
              See Services
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
