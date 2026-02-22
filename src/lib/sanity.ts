import { createClient } from '@sanity/client';
import createImageUrlBuilder from '@sanity/image-url'; // Updated import

export const client = createClient({
  projectId: '14d2d7oe',
  dataset: 'production',
  useCdn: true, 
  apiVersion: '2024-03-01',
});

// Updated to use the named export
const builder = createImageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}