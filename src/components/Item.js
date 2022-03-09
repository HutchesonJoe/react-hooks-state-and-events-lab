import React, { useState } from "react";



function Item({ name, category }) {
  const [inCart, setInCart] = useState(false)
  

  const appClass = inCart ? "in-cart" : ""
  const cartStatus = inCart ? "Remove from Cart" : "Add to Cart"

  function handleClick(e){
    setInCart(!inCart)
  }

  return (
    <li className={appClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{cartStatus}</button>
    </li>
  );
}

export default Item;
