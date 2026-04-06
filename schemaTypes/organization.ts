import { defineType, defineField } from 'sanity'

export const organizationType = defineType({
  name: 'organization',
  title: 'Organization / Ministry',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
      description: 'Determines the URL (e.g. /organizations/sunday-school)'
    }),
    defineField({
      name: 'mainImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'description',
      title: 'Detailed Description',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'leaders',
      title: 'Leaders / In-Charge',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'author' }] }],
    }),
  ],
})
