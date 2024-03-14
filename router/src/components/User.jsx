import { useParams } from "react-router-dom"

export default function User() {
    const {userid} = useParams() 
  return (
    <div className="text-black bg-black-500 m-4 p-4">
      {userid}
    </div>
  )
}
