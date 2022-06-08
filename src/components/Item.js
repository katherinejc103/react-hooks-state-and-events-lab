import React from "react";
import {useState} from "react";

function Item({ name, category }) {
  const [inCart, cartSetter] = useState(false)
  function cartContents() {
    cartSetter((inCart) => !inCart)
  }
  const itemClass = inCart ? "in-cart" : ""
  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={inCart ? "remove" : "add"} 
      onClick={cartContents}>{inCart ? "Remove From" : "Add to"} Cart</button>
    </li>
  );
}

export default Item;
