import React from "react";
import logo from "./shoppingcart.png";

export default function Header() {
  return (
    <header className="row block center">
      <div className="logoandsitenamediv">
        <img src={logo} alt="Logo" className="logo" />
        <a href="#/">
          <h1 className="sitename">My Shopping Cart</h1>
        </a>
      </div>
    </header>
  );
}
