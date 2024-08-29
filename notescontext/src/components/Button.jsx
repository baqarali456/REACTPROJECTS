



const Button = ({onhandleNotes,children}) => {
  return (
    <button onClick={onhandleNotes}  className=" ml-16 mt-2 py-2 px-1 w-36 text-black text-lg    bg-red-500  text-xl rounded-md  text-center  ">{children}</button>
  )
}

export default Button
