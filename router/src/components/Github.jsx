import { useLoaderData } from "react-router-dom"

const Github = () => {

 const data = useLoaderData();

  return (
    <div className="text-center m-4 bg-gray-600 text-white ">
      <img src={data.
        avatar_url
      } alt="" />
      <p>followers {data.followers}</p>
    </div>
  )
}


export default Github;

export const githubapi = async() =>{
  let response = await fetch('https:/api.github.com/users/baqarali456');
      return response.json();
      
}