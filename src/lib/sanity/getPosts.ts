import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { sanityClient } from './sanity';

const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  type Items = {
    [key: string]: string
  }

  const items: Items = {}

  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }
    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })
  return items
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}

export async function getBlogBySlug(slug: string) {
  const query = `*[ _type == "post" && slug.current == $slug ][0]{
    title,
    body,
    author->{name, image},
    publication,
    mainImage,
    publishedAt,
    slug,
    topic,
    _createdAt,
    _id,
    _rev,
    _type,
    _updatedAt
  }`;

  
  const post = await sanityClient.fetch(query, { slug });
  const pubId = post.publication[0]._ref;
  const pubRes = await sanityClient.fetch(`*[_type == "publication" && _id == $id]`, { id: pubId });
  return {
    ...post,
    publication: {
      name: pubRes[0].name,
      url: pubRes[0].url
    },
  };
}
