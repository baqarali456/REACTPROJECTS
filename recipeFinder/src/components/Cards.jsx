import { useRecipeContext } from "../context/RecipeContext"


function Cards() {
    const {data} = useRecipeContext()
  return (
    <>
      {data.map(ele=>(
        <div key={ele.idCategory} className="card mx-2  my-2 s" style={{width: "18rem"}}>
  <img src={ele.strCategoryThumb} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{ele.strCategory}</h5>
    <p className="card-text">{ele.strCategoryDescription.slice(0,100)}</p>
    <button  className="btn btn-primary">AddTo Cart</button>
  </div>
</div>
    ))}
    </>
    
  )
}

export default Cards
