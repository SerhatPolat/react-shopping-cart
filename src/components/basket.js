import React from "react";

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const shippingPrice = itemsPrice > 5000 ? 0 : itemsPrice * 0.05;
  const totalPrice = itemsPrice + shippingPrice;

  function purchase() {
    alert("Purchased.\n" + totalPrice + " dollars was taken from your wallet");

    setTimeout(function () {
      window.location.reload();
    }, 500);
  }

  return (
    <aside className="block col-1">
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <p>Cart is empty.</p>}

        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button onClick={() => onAdd(item)} className="add-button">
                +
              </button>
              <button onClick={() => onRemove(item)} className="remove-button">
                -
              </button>
            </div>
            <div className="col-2 price-text">
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        ))}
      </div>

      {cartItems.length !== 0 && (
        <>
          <hr></hr>
          <div className="row">
            <div className="col-2">Items Price</div>
            <div className="col-1 price-text">${itemsPrice.toFixed(2)}</div>
          </div>

          <div className="row">
            <div className="col-2">Shipping Price</div>
            <div className="col-1 price-text">${shippingPrice.toFixed(2)}</div>
          </div>

          <div className="row">
            <div className="col-2">
              <strong>Total Price</strong>
            </div>
            <div className="col-1 price-text">
              <strong>${totalPrice.toFixed(2)}</strong>
            </div>
          </div>

          <hr />
          <button onClick={purchase} className="buyButton">
            Buy
          </button>
        </>
      )}
    </aside>
  );
}
