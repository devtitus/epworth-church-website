import { defineType, defineField } from 'sanity'

export const contactPageType = defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  fields: [
    defineField({
      name: 'header',
      title: 'Header Section',
      type: 'object',
      fields: [
        defineField({ name: 'tagline', title: 'Tagline (e.g., Reach Out)', type: 'string' }),
        defineField({ name: 'title', title: 'Title', type: 'string' }),
      ],
    }),
    defineField({
      name: 'details',
      title: 'Contact Details',
      type: 'object',
      fields: [
        defineField({ name: 'address', title: 'Physical Address', type: 'text' }),
        defineField({ name: 'phone', title: 'Phone Number', type: 'string' }),
        defineField({ name: 'email', title: 'Email Address', type: 'string' }),
        defineField({ name: 'timings', title: 'Service Timings', type: 'string' }),
      ],
    }),
    defineField({
      name: 'mapIframeUrl',
      title: 'Google Maps Embed URL',
      type: 'url',
      description: 'The src value of a Google Maps iframe',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Contact Page Configuration' }
    }
  }
})
