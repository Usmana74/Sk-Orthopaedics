import { createClient } from '@sanity/client';
import createImageUrlBuilder from '@sanity/image-url'; // Use the named import

export const client = createClient({
  // DOUBLE CHECK THIS ID IN STEP 2 BELOW
  projectId: 'xev39sbi', 
  dataset: 'production',
  useCdn: true, 
  apiVersion: '2024-03-01',
});

// Update to use the correct builder function
const builder = createImageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}