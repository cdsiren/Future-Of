import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'navbar',
  title: 'Navbar',
  type: 'document',
  fields: [
    defineField({
      name: 'link-one',
      title: 'Link 1',
      type: 'string',
    }),
    defineField({
      name: 'link-two',
      title: 'Link 2',
      type: 'string',
    }),
    defineField({
      name: 'link-three',
      title: 'Link 3',
      type: 'string',
    }),
  ],
})
