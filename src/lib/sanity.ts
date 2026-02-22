import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: '14d2d7oe', // Your Sanity Project ID
  dataset: 'production',
  useCdn: true, 
  apiVersion: '2024-03-01',
});

const builder = imageUrlBuilder(client);

// Helper function to handle Sanity images
export function urlFor(source: any) {
  return builder.image(source);
}