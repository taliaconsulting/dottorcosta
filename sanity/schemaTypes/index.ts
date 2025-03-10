import { type SchemaTypeDefinition } from 'sanity'
import homepage from './homepage'
import blogPage from './blog'
import blogPost from './blogPost'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [homepage, blogPage, blogPost],
}
