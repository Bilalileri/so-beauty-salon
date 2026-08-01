import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "S&O Beauty Salon Mannheim",
    short_name: "S&O Beauty",
    description: "Kosmetikstudio in den Mannheimer Quadraten",
    start_url: "/",
    display: "standalone",
    background_color: "#f8f5ef",
    theme_color: "#905e57",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
