import sanity from '../lib/sanity'
import Layout from '../components/Layout'
import Link from 'next/link'

import ShoppingListRow from '../components/ShoppingListRow'

const query = `*[_type == "shopping-list"] | order(_createdAt desc) {
    _id,
    _createdAt,
    title,
    slug,
    "dishImageUrls": dishes[]->image.asset->url
  }[0...53]
`

const overlayColors = [
  'bg-black',
  'bg-blue-darkest',
  'bg-green-darkest',
  'bg-yellow-darkest',
  'bg-orange-darkest',
  'bg-red-darkest',
  'bg-indigo-darkest',
  'bg-green-darkest',
  'bg-blue-darkest',
];

export default class ShoppingLists extends React.Component {

  static async getInitialProps() {
    return {
      shoppingLists: await sanity.fetch(query)
    }
  }

  render() {
    const {shoppingLists} = this.props
    return (
      <Layout>
        <ul className="list-reset overflow-hidden">
          {shoppingLists.map((shoppingList, index) => (
            <li key={shoppingList._id}>
              <Link href={{pathname: '/shopping-list', query: {id: shoppingList._id}}}>
                <a>
                  <ShoppingListRow
                    shoppingList={shoppingList}
                    images={shoppingList.dishImageUrls}
                    bgColor={overlayColors[index % overlayColors.length]}
                    className="hover:text-orange-light" />
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </Layout>
    )
  }

}