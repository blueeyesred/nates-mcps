export type PlaceholderImage = {
  id: string;
  imageUrl: string;
  description: string;
  imageHint?: string;
};

export const PlaceHolderImages: PlaceholderImage[] = [
  {
    id: "hero-image",
    imageUrl:
      "https://images.unsplash.com/photo-1616594039964-87d2f7c4b91f?q=80&w=1600&auto=format&fit=crop",
    description: "East Tennessee cleaners carrying supplies into a bright family home at sunrise",
    imageHint:
      "east tennessee cleaning crew, sunrise light through windows, warm colors, startup team, modern cozy home interior, welcoming and hardworking",
  },
];
