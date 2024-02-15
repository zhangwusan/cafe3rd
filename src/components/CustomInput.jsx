// eslint-disable-next-line react/prop-types
export default function CustomInput({id, type, placeholder, name, value, onChange, className, required}) {
  return (
    <div className={className}>
        <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor={id}
          >
            {placeholder}
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id={id}
            type={type}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
          />
    </div>
  )
}
