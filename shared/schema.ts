import { z } from "zod";

export const businessDataSchema = z.object({
  basic_info: z.object({
    name: z.string(),
    phone: z.string(),
    city: z.string().optional(),
    rating: z.number().optional(),
    latitude: z.number().optional(),
    longitude: z.number().optional(),
    working_hours: z.record(z.string(), z.string()).optional(),
  }),
  five_star_reviews: z.array(z.object({
    text: z.string(),
    reviewer_name: z.string(),
    date: z.string(),
  })).optional(),
  // Add image fields for customization
  images: z.object({
    hero_slides: z.array(z.object({
      url: z.string(),
      title: z.string(),
      description: z.string(),
    })),
    residential_services: z.array(z.object({
      url: z.string(),
      service_name: z.string(),
    })),
    commercial_services: z.array(z.object({
      url: z.string(),
      service_name: z.string(),
    })),
    industrial_services: z.array(z.object({
      url: z.string(),
      service_name: z.string(),
    })),
    about_section: z.string(),
  }).optional(),
  social_media: z.object({
    facebook: z.string().optional(),
    instagram: z.string().optional(),
    reviews_link: z.string().optional(),
  }).optional(),
});

export type BusinessData = z.infer<typeof businessDataSchema>;