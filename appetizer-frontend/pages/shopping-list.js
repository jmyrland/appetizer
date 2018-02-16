import sanity from '../lib/sanity'
import Layout from '../components/Layout'
import ShoppingListRow from '../components/ShoppingListRow'
import Dish from '../components/Dish'
import ShoppingListItems from '../components/ShoppingListItems'

const query = `*[_type == "shopping-list" && _id == $id] | order(_createdAt desc) {
    _id,
    _createdAt,
    title,
    slug,
    dishes[]->{
      _id,
      title,
      "imageUrl": image.asset->url,
      "ingredients": ingredients[] {
        product->{
          _id,
          title,
          "imageUrl": image.asset->url
        },
        quantity,
        unit
      }
    },
    extra[] {
      product->{
        _id,
        title,
        "imageUrl": image.asset->url
      },
      quantity,
      unit
    }
  }[0]
`

export default class ShoppingList extends React.Component {

  static async getInitialProps(req) {
    const shoppingList = await sanity.fetch(query, { id: req.query.id })
    shoppingList.dishes = shoppingList.dishes || [];
    shoppingList.extra = shoppingList.extra || [];

    const dishIngredients = shoppingList.dishes
      .map(d => d.ingredients)
      .reduce((result, ingredients) => result.concat(ingredients), [])
    return {
      shoppingList,
      shoppingListItems: this.tallyShoppingListItems(dishIngredients),
      extraItems: this.tallyShoppingListItems(shoppingList.extra)
    }
  }

  constructor() {
    super()
    this.state = {
      productsInCart: []
    }
  }

  componentDidMount() {
    // load state from local storage
    if (localStorage) {
      const stateKey = `${this.props.shoppingList._id}-productsInCart`;
      const productsInCartJson = localStorage.getItem(stateKey);
      if(productsInCartJson) {
        this.setState({
          productsInCart: JSON.parse(productsInCartJson)
        })
      }
    }
  }

  componentDidUpdate() {
    // persist state changes to local storage
    if (localStorage) {
      const stateKey = `${this.props.shoppingList._id}-productsInCart`;
      const productsInCartJson = JSON.stringify(this.state.productsInCart);
      localStorage.setItem(stateKey, productsInCartJson)
    }
  }

  static tallyShoppingListItems(ingredients) {
    return ingredients
      .reduce((result, ingredient) => {
        const product = ingredient.product
        const productEntry = result[product._id] || {
          _id: product._id,
          title: product.title,
          imageUrl: product.imageUrl,
          quantities: {}
        }

        const unit = ingredient.unit || 'x';
        let quantity = productEntry.quantities[unit] || 0;
        quantity = quantity + ingredient.quantity;
        productEntry.quantities[unit] = quantity;

        result[product._id] = productEntry;

        return result;
      }, {})
  }

  handleItemClick(product) {
    const productsInCart = this.state.productsInCart;
    const indexOfProduct = productsInCart.indexOf(product._id);
    if (indexOfProduct > -1) {
      this.setState({
        productsInCart: productsInCart.filter(id => id != product._id)
      });
    }
    else {
      this.setState({
        productsInCart: [...productsInCart, product._id]
      });
    }
  }

  render() {
    const {
      shoppingList,
      shoppingListItems,
      extraItems
    } = this.props;
    const dishImageUrls = shoppingList.dishes.map(d => d.imageUrl);
    return (
      <Layout>
        <ShoppingListRow shoppingList={shoppingList} images={dishImageUrls} />

        <div className="container flex flex-wrap mx-auto">
          <div className="w-full lg:w-1/3 p-4 pl-8">
            <h1 className="font-bold text-black mb-2 my-8">Handleliste</h1>
            { shoppingList.dishes.length === 0 ? 'Handlelisten er tom!' : (
              <ShoppingListItems
                items={shoppingListItems}
                itemsInCart={this.state.productsInCart}
                onItemClick={this.handleItemClick.bind(this)}
                />
            )}
            { shoppingList.extra.length < 1 ? '' : (
              <div>
                <h2 className="font-bold text-black mb-2 my-8">Ekstra</h2>
                <ShoppingListItems
                  items={extraItems}
                  itemsInCart={this.state.productsInCart}
                  onItemClick={this.handleItemClick.bind(this)}
                  />
              </div>
            )}
          </div>
          <div className="w-full max-w-md w-full mx-auto px-4 lg:w-2/3 p-4">
            <h1 className="font-bold text-black mb-2 my-8">Middager</h1>
            {shoppingList.dishes.map(dish => (
              <Dish key={dish._id} dish={dish} className="my-8" />
            ))}
          </div>
        </div>
      </Layout>
    )
  }

}