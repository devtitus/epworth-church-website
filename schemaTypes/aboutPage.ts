import { defineType, defineField } from 'sanity'

export const aboutPageType = defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Title', type: 'string' }),
        defineField({ name: 'backgroundImage', title: 'Background Image', type: 'image', options: { hotspot: true } }),
      ],
    }),
    defineField({
      name: 'history',
      title: 'Our History',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Section Title', type: 'string' }),
        defineField({ name: 'content', title: 'Content', type: 'array', of: [{ type: 'block' }] }),
      ],
    }),
    defineField({
      name: 'preachingCenters',
      title: 'Preaching Centers',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'name', title: 'Center Name', type: 'string' }),
            defineField({ name: 'address', title: 'Address / Location', type: 'text' }),
            defineField({ name: 'image', title: 'Image', type: 'image' }),
          ],
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'About Page Configuration' }
    }
  }
})
