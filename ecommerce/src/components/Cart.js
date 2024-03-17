import React from 'react';
import Card from './Card';

export default function Cart({price,image,title,category,showcart,handleonRemove}) {
  return (
    <>
    <Card  handleonRemove={handleonRemove} showcart={showcart} image={image} title={title} category={category}/>
    </>
  )
}
