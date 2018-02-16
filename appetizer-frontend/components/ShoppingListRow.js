
const skewDeg = '20deg';
const skewPxOffset = '48px';

export default ({ shoppingList, images = [], bgColor = "bg-black", className = "" }) => (
  <div className={`relative block no-underline h-64 font-sans text-white ${className}`}>
    {/* Background strip:  */}
    <div
      style={{
        width: 'auto',
        margin: `0 -${skewPxOffset}`,
      }}
      className="flex absolute pin"
      >
      {images.map((imageUrl, index) => (
        <div
          key={`${shoppingList._id}-bg-${index}`}
          style={{
            transform: `skewX(-${skewDeg})`,
          }}
          className={[
            'h-full',
            images.length > 1 ? `w-1/${images.length}` : 'w-full',
            `bg-grey${index % 2 ? '' : '-light'}`,
            'overflow-hidden',
          ].join(' ')}
        >
          <div
            style={{
              backgroundImage: `url(${imageUrl}?h=240)`,
              transform: `skewX(${skewDeg})`,
              marginLeft: `-${skewPxOffset}`,
              padding: `0 ${skewPxOffset}`,
              boxSizing: 'content-box',
            }}
            className={[
              'w-full',
              'h-full',
              '-m-l-6',
              'bg-cover',
              'bg-center',
            ].join(' ')}
          >
          </div>
        </div>
      ))}
    </div>
    {/* Overlay */}
    <div className={
      [
        bgColor,
        'opacity-50',
        'z-40',
        'absolute',
        'pin',
      ].join(' ')
    }></div>
    {/* Text */}
    <h2 className={
      [
        'absolute',
        'z-50',
        'text-4xl',
        'sm:text-6xl',
      ].join(' ')
    }
    style={{
      top: `50%`,
      left: `50%`,
      transform: `translateY(-50%) translateX(-50%)`,
    }}>{shoppingList.title}</h2>
  </div>
)