import React from "react";

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div className="productdiv">
      <img className="small" src={product.image} alt={product.name}></img>
      <h3>{product.name}</h3>
      <div className="productprice">${product.price}</div>
      <div>
        <button onClick={() => onAdd(product)} className="additembutton">
          Add To Basket
        </button>
      </div>
    </div>
  );
}
