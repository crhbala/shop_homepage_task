// Import React and Component from the React library
import React from "react";

function CartPanel({ cartItems, setCartItems, cartProducts, setCartProducts }) {


  const getProductPrice = (startPrice, endPrice, oldPrice, currentPrice) => {
    if (startPrice && endPrice) {
      return `${startPrice} - ${endPrice}`;

    } else if (oldPrice) {
      return (
        <div>
          <span className="text-muted text-decoration-line-through">
            {oldPrice}
          </span>
          {" " + currentPrice}
        </div>
      );
    } else {
      return currentPrice;
    }
  };

  function handleRemoveFromCart(event) {
  
    cartProducts.map((cartItem, index) => {

      if (cartItem.productId == event.target.value) {
        cartProducts.splice(index, 1);
        cartItem.addToCart = false;
        cartItems.splice(index, 1);

        setCartItems([...cartItems]);
        setCartProducts([...cartProducts]);
      }
    });
  }

    return (
      <div>
        <div
          className="offcanvas offcanvas-start"
          data-bs-scroll="true"
          tabIndex="-1"
          id="offcanvasWithBothOptions"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title">Cart Items</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <div className="col mb-5">
              {/* if cartItems length 0 shows Your Cart is empty */}
              {cartItems.length === 0 ? (
                <div className="text-center text-secondary fs-3">
                  Your Cart is empty
                </div>
              ) : (
                /* else get all products from the cart and return the product details into the panel */
                cartProducts.map((item) => {
                  return (
                    <div className="card h-100 border-0" key={item.productId}>
                      <div className="card-body p-0 mb-3 border  border-2">
                        {/* <!-- Sale badge--> */}
                        {item.productStatus == "sale" ? (
                          <div
                            className="badge bg-dark text-white position-absolute"
                            style={{ top: "0.5rem", right: "0.5rem" }}
                          >
                            Sale
                          </div>
                        ) : (
                          ""
                        )}
                        {/* <!-- Product image--> */}
                        <img
                          className="card-img-top"
                          src={item.productImg}
                          alt={item.productName}
                        />
                        {/*  <!-- Product details--> */}
                        <div className="card-body p-2">
                          <div className="text-center">
                            {/* <!-- Product name--> */}
                            <h5 className="fw-bolder">{item.productName}</h5>
                            {getProductPrice(
                              item.productPrice.startPrice,
                              item.productPrice.endPrice,
                              item.productPrice.oldPrice,
                              item.productPrice.currentPrice
                            )}
                          </div>
                          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div className="text-center">
                              <button
                                className="btn btn-outline-dark mt-auto"
                                value={item.productId}
                                onClick={handleRemoveFromCart}
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
  
export default CartPanel
