import {defineField, defineType} from '@sanity-typed/types'

export default defineType({
  name: 'accessibleImage',
  type: 'image',
  options: {
    hotspot: true,
  },
  fields: [
    defineField({
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      description: 'Alternative text is required.',
      hidden: ({parent}) => !parent?.asset,
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: 'caption',
      type: 'string',
      title: 'Caption',
      hidden: ({parent}) => !parent?.asset,
    }),
  ],
})
