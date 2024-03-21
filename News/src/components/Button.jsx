import React, { useState } from 'react'
import { useNewsContext } from '../context/NewsContext'

export default function Button({handleNext,handlePrev}) {
  

  return (
    <div className=' d-flex flex-row flex-wrap  justify-content-around '>
    <button onClick={handlePrev}  className=' bg-danger  text-white-50  fs-4  '>Prev</button>
    <button onClick={handleNext} className=' bg-danger  text-white-50  fs-4 '>Next</button>

    </div>
  )
}
