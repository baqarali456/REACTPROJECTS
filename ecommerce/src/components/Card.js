import React from 'react'

export default function Card({handleclick,image,title,category,list,handleonRemove}) { 
   
  return (
    <>
      <div className="card mx-3 my-3" style={{width: "18rem"}}>
  <img src={image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">Category-{category}</p>
    <button onClick={list?handleclick:handleonRemove} className="btn btn-primary">{!list?"Remove item":"AddtoCart"}</button>
  </div>
</div>
  
    </>
  )
}
