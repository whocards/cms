import {defineArrayMember, defineField, defineType} from '@sanity-typed/types'
import {CgWebsite as icon} from 'react-icons/cg'

export default defineType({
  title: 'Page',
  name: 'page',
  icon,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Main title',
      type: 'string',
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: 'url',
      title: 'Url',
      type: 'slug',
      validation: (Rule) => [Rule.required()],
      options: {
        source: 'title',
        maxLength: 100,
      },
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'accessibleImage',
    }),
    defineField({
      name: 'textSections',
      title: 'Text Sections',
      type: 'array',
      of: [defineArrayMember({type: 'textSection'})],
    }),
    defineField({
      name: 'includeInMenu',
      title: 'Include item in menu',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {title: 'title', media: 'image'},
  },
})
