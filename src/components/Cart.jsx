import React, { Component } from "react";

function Cart(props){

    const { cartItem } = props;

    return (
      <div>
        <form className="d-flex">
          <button
            className="btn btn-outline-dark"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasWithBothOptions"
            aria-controls="offcanvasWithBothOptions"
          >
            <i className="bi-cart-fill me-1"></i>
            Cart
            <span className="badge bg-dark text-white ms-1 rounded-pill">
              {cartItem.length}
            </span>
          </button>
        </form>
      </div>
    );
  }

export default Cart;
