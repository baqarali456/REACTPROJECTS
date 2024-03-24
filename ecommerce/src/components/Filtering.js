import React from 'react'

export default function Filtering({pricerange,handlePriceChange}) {
 
    return (
    <div className='d-flex flex-column align-items-center my-3'>
      <input 
      className='w-25 h-50 cursor-pointer'
      onChange={(e)=>handlePriceChange(Number(e.target.value))} 
      min={500} max={150000}
       value={pricerange}
        type="range"  
        name=""
         id="" />
         <label className='text-capitalize fs-3' >Filtering By Price Range {pricerange}</label>
    </div>
  )
}
