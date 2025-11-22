import { Bath, Car, Home, Sparkles } from "lucide-react";

export type Service = {
  name: string;
  description: string;
  basePrice: number | null;
  pricePerSqFt?: number | null;
  icon: any;
};

export const services: Service[] = [
  {
    name: "Weekly Shine",
    description: "Keep your place guest-ready with a consistent tidy-up from the same local techs.",
    basePrice: 115,
    pricePerSqFt: 0.07,
    icon: Sparkles,
  },
  {
    name: "Deep Reset",
    description: "A scrub-every-corner reset for busy families and move-back-in days.",
    basePrice: 220,
    pricePerSqFt: 0.12,
    icon: Home,
  },
  {
    name: "Move-In/Out Clean",
    description: "White-glove handoff for landlords, renters, and new starts.",
    basePrice: 260,
    pricePerSqFt: 0.13,
    icon: Bath,
  },
  {
    name: "Car & Truck Detailing",
    description: "Seats wiped down, consoles dust-free, and kid messes tamed.",
    basePrice: 95,
    pricePerSqFt: null,
    icon: Car,
  },
];

export const addons = [
  { id: "fridge", name: "Inside Fridge", price: 30 },
  { id: "oven", name: "Inside Oven", price: 30 },
  { id: "windows", name: "Interior Windows", price: 50 },
  { id: "laundry", name: "Laundry (per load)", price: 25 },
];

export const carDetailingAddons = [
  { id: "vacuum", name: "Full Vacuum & Wipe-down", price: 30 },
  { id: "shampoo", name: "Carpet/Upholstery Shampoo", price: 60 },
  { id: "leather", name: "Leather Clean & Condition", price: 40 },
];

export const carDetailingBundles = [
  { id: "basic", name: "Basic", services: ["Full Vacuum & Wipe-down"], price: 30 },
  {
    id: "deluxe",
    name: "Deluxe",
    services: ["Full Vacuum & Wipe-down", "Carpet/Upholstery Shampoo"],
    price: 80,
  },
  {
    id: "premium",
    name: "Premium",
    services: ["Full Vacuum & Wipe-down", "Carpet/Upholstery Shampoo", "Leather Clean & Condition"],
    price: 110,
  },
];

export const reviews = [
  {
    name: "Lydia from Oak Ridge",
    rating: 5,
    review:
      "They treated us like neighbors, not a job. Floors, baseboards—everything felt brand new.",
  },
  {
    name: "Marcus in Powell",
    rating: 5,
    review: "Showed up early, worked late, and checked every detail without me asking.",
  },
  {
    name: "Hannah & Caleb",
    rating: 5,
    review:
      "We’re starting a family business too and appreciate their hustle. Trustworthy folks from East Tennessee.",
  },
];
