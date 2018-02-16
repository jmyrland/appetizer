

export default ({dish, className=''}) => (
  <div className={`${className} w-full lg:flex`}>
    <div
      className="h-48 lg:h-auto lg:w-48 flex-none bg-cover bg-center rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden shadow-lg"
      style={{
        backgroundImage: `url(${dish.imageUrl})`,
      }}
      >
    </div>
    <div className="w-full border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal shadow-lg">
      <div className="text-black font-bold text-xl mb-2">{dish.title}</div>
      <div>
        {dish.ingredients.map(i => (
          <span key={i.product._id} className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2 mb-2">
            {`${i.quantity}${i.unit || 'x'} ${i.product.title}`}
          </span>
        ))}
      </div>
    </div>
  </div>
)