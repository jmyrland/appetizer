
const height = 240;
const skewDeg = 10;
const skewPxOffset = 44;

export default ({ shoppingList, images = [], bgColor = "bg-black", className = "" }) => (
  <div
    style={{ height }}
    className={`relative block no-underline h-64 font-sans text-white ${className}`}>
    {/* Background strip:  */}
    <div
      style={{
        width: 'auto',
        margin: `0 -${skewPxOffset}px`,
      }}
      className="flex absolute pin"
      >
      {images.map((imageUrl, index) => (
        <div
          key={`${shoppingList._id}-bg-${index}`}
          style={{
            backgroundImage: `url(${imageUrl}?h=${240})`,
            transform: `skewX(-${skewDeg}deg)`,
          }}
          className={[
            'h-full',
            images.length > 1 ? `w-1/${images.length}` : 'w-full',
            `bg-grey${index % 2 ? '' : '-light'}`,
            'overflow-hidden',
            'bg-cover',
            'bg-center',
          ].join(' ')}
        >
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