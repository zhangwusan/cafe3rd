// eslint-disable-next-line react/prop-types
export default function ButtonSubmit({type, className, children}) {
  return (
    <div className={className}>
        <button
            type={type}
            className=" px-5 py-2 bg-blue-600 text-center  text-white rounded-2xl hover:bg-blue-400 hover:text-black hover:px-6 hover:py-3"
          >
            {children}
          </button>
    </div>
  )
}
