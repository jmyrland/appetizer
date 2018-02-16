import icon from 'react-icons/lib/md/local-pizza'

export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }
  ],

  preview: {
    select: {
      title: 'title',
      imageUrl: 'image.asset.url'
    }
  }
}
