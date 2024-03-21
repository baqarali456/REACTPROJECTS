import  { useState } from 'react'
import { useNewsContext } from '../context/NewsContext';


export default function Navbar({onCategory}) {
    const [input,setInput] = useState('');

    const allcategories = ['business','entertainment','general','health','science','sports','technology'];
    const {search} = useNewsContext()

    const searchByCategory = (e) =>{
        e.preventDefault()
        if(!input) return;
        allcategories.forEach(category=>{
            if(category === input){
                search(input);  
            }
        })
        setInput('');
    }
  return (
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" to="/">NewsAPI</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" to="/">Home</a>
        </li>
        {allcategories.map(category=>{
            return <li onClick={()=>onCategory(category)} key={category} className="nav-item">
          <a className="nav-link active" aria-current="page" to="/">{category}</a>
        </li>
        })}
        
        
      </ul>
      <form  className="d-flex" role="search">
        <input onChange={(e)=>setInput(e.target.value)} value={input} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button onClick={searchByCategory} className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}
