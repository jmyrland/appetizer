import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import dish from './dish'
import product from './product'
import ingredient from './ingredient'
import shoppingList from './shopping-list'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    dish,
    product,
    ingredient,
    shoppingList,
  ])
})
