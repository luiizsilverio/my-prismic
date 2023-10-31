import * as prismic from '@prismicio/client'

export function getPrismicClient(req?: unknown) {
  const clientPrismic = prismic.createClient('my-sujeito');
  return clientPrismic;
}

// const home = await client.getByUID('page', 'home')
// const response = await prismic.getByUID("publications", String(slug), {});
