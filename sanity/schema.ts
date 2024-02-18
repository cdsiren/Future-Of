import { type SchemaTypeDefinition } from 'sanity'
import links from './schemas/links'
import blockContent from './schemas/blockContent'
import publication from './schemas/publication'
import post from './schemas/post'
import author from './schemas/author'
import about from './schemas/about'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, publication, links, about, blockContent],
}
