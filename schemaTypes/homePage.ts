import { defineType, defineField } from 'sanity'

export const homePageType = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Title', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Subtitle (Badge)', type: 'string' }),
        defineField({ name: 'description', title: 'Description', type: 'text' }),
        defineField({ name: 'backgroundImage', title: 'Background Image', type: 'image', options: { hotspot: true } }),
      ],
    }),
    defineField({
      name: 'stats',
      title: 'Church Statistics',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'value', title: 'Value (e.g., 150+)', type: 'string' }),
            defineField({ name: 'label', title: 'Label (e.g., Years)', type: 'string' }),
          ],
        },
      ],
      description: 'The 3 statistics shown on the hero banner card.'
    }),
    defineField({
      name: 'greetings',
      title: 'Greetings Section',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Section Title', type: 'string' }),
        defineField({ name: 'message', title: 'Message Body', type: 'array', of: [{ type: 'block' }] }),
        defineField({ name: 'pastor', title: 'Pastor Reference', type: 'reference', to: [{ type: 'author' }] }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Home Page Configuration' }
    }
  }
})
