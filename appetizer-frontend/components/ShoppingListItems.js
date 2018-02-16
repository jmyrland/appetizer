
const ShoppingListItem = ({ product, onClick, inCart=false }) => {
  const quantities = Object.keys(product.quantities).map(unit => `${product.quantities[unit]}${unit} `)
  return (
    <li className="mb-1 cursor-pointer" onClick={() => onClick(product)}>
      <div className={`w-full flex`}>
        <div
          className="w-24 flex-none bg-contain bg-center overflow-hidden"
          style={{
            backgroundImage: `url(${product.imageUrl})`,
            backgroundRepeat: 'no-repeat',
          }}>
        </div>
        <div className="w-full bg-white p-4 flex flex-col justify-between leading-normal">
          <div className="text-black font-bold text-md mt-1 mb-1">
            {quantities.map((quantity, idx) => (
              <span key={idx} className={`${inCart ? 'bg-green text-white' : 'bg-red-lightest'} inline-block rounded-full px-3 font-semibold mr-2`}>
                {quantity}
              </span>
            ))}
            <span>{product.title}</span>
          </div>
        </div>
      </div>


    </li>
  )
}

const ShoppingListItems = ({ items, onItemClick, itemsInCart=[] }) => (
  <ul className="list-reset">
    {Object.keys(items).map(productId => items[productId]).map(product => (
      <ShoppingListItem
        key={product._id}
        product={product}
        onClick={onItemClick}
        inCart={itemsInCart.indexOf(product._id) > -1}
        />
    ))}
  </ul>
)

export default ShoppingListItems