import icon from 'react-icons/lib/md/local-restaurant'

export default {
  name: 'dish',
  title: 'Dish',
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
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'ingredients',
      title: 'Ingredients',
      type: 'array',
      of: [{type: 'ingredient'}]
    },
  ],

  preview: {
    select: {
      title: 'title',
      imageUrl: 'image.asset.url',
    }
  }
}
