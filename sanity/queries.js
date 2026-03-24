import { client } from './lib/client'

export async function getWorks() {
  return await client.fetch(`
    *[_type == "work"] {
      _id,
      title,
      category,
      link,
      "image": image.asset->url
    }
  `)
}
