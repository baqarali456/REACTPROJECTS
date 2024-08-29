

const Input = ({change,value,placeholder,height="h-20"}) => {
  return (
    <input onChange={(e)=>change(e.target.value)} value={value} className={` my-1  ${height} min-h-20 px-2 ` }type="text" placeholder={placeholder}  />
  )
}

export default Input
