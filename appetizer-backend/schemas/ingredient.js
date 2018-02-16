export default {
    name: 'ingredient',
    title: 'Ingredient',
    type: 'object',
    fields: [
      {
        name: 'product',
        title: 'Ingredient',
        type: 'reference',
        to: [{type: 'product'}]
      },
      {
        name: 'quantity',
        title: 'Quantity',
        type: 'number'
      },
      {
        name: 'unit',
        title: 'Unit',
        type: 'string',
        options: {
          list: [
            { title: 'Default', value: 'x' },
            { title: 'Grams', value: 'g' },
            { title: 'Kilograms', value: 'kg' },
          ],
          layout: 'radio'
        }
      }
    ],
    preview: {
      select: {
        title: 'product.title',
        imageUrl: 'product.image.asset.url',
        quantity: 'quantity',
        unit: 'unit',
      },
      prepare(selection) {
        const unit = selection.unit || 'x';
        const quantity = selection.quantity;
        return {
          title: `${!!quantity ? `${quantity}${unit} ` : ''}${selection.title}`,
          imageUrl: selection.imageUrl
        }
      }
    }

  }
