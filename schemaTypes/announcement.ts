import { defineType, defineField } from 'sanity'

export const announcementType = defineType({
  name: 'announcement',
  title: 'Announcement',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Announcement Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'E.g., Service Updates, Events, Community'
    }),
    defineField({
      name: 'priority',
      title: 'Priority',
      type: 'string',
      options: {
        list: [
          { title: 'Normal', value: 'normal' },
          { title: 'Important', value: 'important' },
          { title: 'New', value: 'new' }
        ],
        layout: 'radio'
      },
      validation: (Rule) => Rule.required(),
      initialValue: 'normal'
    }),
    defineField({
      name: 'author',
      title: 'Author / Department',
      type: 'reference',
      to: [{ type: 'author' }],
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Rich text content for the announcement details.'
    }),
  ],
})
