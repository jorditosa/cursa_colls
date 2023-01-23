
function Title( {children, id }) {
  return (
    <h2 
    className="text-center font-semibold text-dark py-5 text-2xl lg:text-4xl bg-gradient-to-l from-light to-secondary"
    id={id && id }
    >
    {children}
  </h2>
  )
}

export default Title