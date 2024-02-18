import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'links',
  title: 'Links',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'Url',
      type: 'string',
    }),
  ],
})