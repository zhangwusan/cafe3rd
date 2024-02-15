// eslint-disable-next-line react/prop-types
export default function CoffeeRender({items, renderItem}) {
  return (
    <ul>
      {/* eslint-disable-next-line react/prop-types */}
      {items.map((item, index) => (
        <li key={index}>{renderItem(item)}</li>
      ))}
    </ul>
  )
}
