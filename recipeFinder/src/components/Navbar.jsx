import { useState } from "react";
import { useRecipeContext } from "../context/RecipeContext"


function Navbar() {
    const [input,setInput] = useState("")
    const {data,handleSearch,categories,handlefilter,handleshowHome} = useRecipeContext();

    const handleSearchonClick = (e) =>{
        e.preventDefault();
        if(!input) return;
        categories.forEach(category=>{
          if(category === input){
            handleSearch(input) 
          }
        })
        
    }

    const handlefilterbyCategory = (category) =>{
    handlefilter(category)
    }

  return (
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a onClick={handleshowHome} className="nav-link active" aria-current="page" >Home</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </a>
          <ul className="dropdown-menu">
            {categories.map(ele=>(
                <li key={ele}  onClick={()=>handlefilterbyCategory(ele)} ><a className="dropdown-item">{ele}</a></li>
            ))}
          </ul>
        </li>
      </ul>
      <form onSubmit={handleSearchonClick}  className="d-flex" role="search">
        <input onChange={(e)=>setInput(e.target.value)} value={input} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button  className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Navbar
