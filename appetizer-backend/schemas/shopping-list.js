import icon from 'react-icons/lib/md/local-grocery-store'

export default {
  name: 'shopping-list',
  title: 'Shopping list',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        auto: true
      }
    },
    {
      name: 'dishes',
      title: 'Dishes',
      type: 'array',
      of: [{type: 'reference', to: {type: 'dish'}}]
    },
    {
      name: 'extra',
      title: 'extra',
      type: 'array',
      of: [{type: 'ingredient'}]
    },
  ],

  preview: {
    select: {
      title: 'title',
    }
  }
}
