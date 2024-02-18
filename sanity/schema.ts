import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import publication from './schemas/publication'
import post from './schemas/post'
import author from './schemas/author'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, publication, blockContent],
}
