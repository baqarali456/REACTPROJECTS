import React from 'react'

function Card(
  {
    title,
    image,
    description,
    products,
    addFirstText,
    addSecondText,
    firstHandler,
    secondHandler,
    id,
  }
) {
  return (
    <>
      <div className="card mx-2 my-2" style={{ "width": "18rem" }}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          {addFirstText && <button onClick={()=>firstHandler(id)} className="btn btn-primary">{addFirstText}</button>}
          <button onClick={()=>secondHandler(id)} className="btn btn-primary">{addSecondText}</button>
        </div>
      </div>
    </>
  )
}

export default Card
