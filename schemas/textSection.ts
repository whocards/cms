import {defineField, defineType, defineArrayMember} from '@sanity-typed/types'
import {BiParagraph as icon} from 'react-icons/bi'

export default defineType({
  name: 'textSection',
  title: 'Text Section',
  type: 'object',
  icon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'paragraphs',
      title: 'Paragraphs',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'accessibleImage',
    }),
    defineField({
      name: 'imageLayout',
      title: 'Image Layout',
      type: 'string',
      initialValue: 'left',
      options: {
        list: [
          {title: 'Left', value: 'left'},
          {title: 'Right', value: 'right'},
          {title: 'Top', value: 'top'},
          {title: 'Bottom', value: 'bottom'},
        ],
      },
    }),
    defineField({
      name: 'imageLayoutSmall',
      title: 'Image Layout for small screens',
      type: 'string',
      initialValue: 'top',
      options: {
        list: [
          {title: 'Top', value: 'top'},
          {title: 'Bottom', value: 'bottom'},
        ],
        layout: 'radio',
      },
    }),
  ],
})
