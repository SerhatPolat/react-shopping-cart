import React from "react";
import Magnifier from "react-magnifier";

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div className="productdiv">
      <Magnifier src={product.image} width={180} />
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
