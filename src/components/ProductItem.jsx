import React from "react";
import Review from "./Review";

function ProductItem({
  product,
  cartItems,
  setCartItems,
  cartProducts,
  setCartProducts,
}) {
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
  const isProductInCart = (id) => {
    return cartItems.includes(id);
  };
  const addCart = () => {
    if (!isProductInCart(product.productId)) {
      setCartItems([...cartItems, product.productId]);
      setCartProducts([...cartProducts, product]);
    }
  };


  const getbtn = (startPrice, endPrice, productId) => {
    if (startPrice && endPrice) {
      return (
        <div className="text-center">
          <button className="btn btn-outline-dark mt-auto" hidden={false}>
            View options
          </button>
        </div>
      );
    } else {
      return (
        <div className="text-center ">
          <button
            className="btn btn-outline-dark mt-auto"
            onClick={addCart}
            value={productId}
            disabled={isProductInCart(productId)}
          > 
            Add to cart
          </button>
        </div>
      );
    }
  };


  return (
    <div className="col mb-5">
      <div className="card h-100">
        {product.productStatus == "sale" ? (
          <div
            className="badge bg-dark text-white position-absolute"
            style={{ top: "0.5rem", right: "0.5rem" }}
          >
            Sale
          </div>
        ) : (
          ""
        )}
        <img
          className="card-img-top"
          src={product.productImg}
          alt={product.productName}
        />
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{product.productName}</h5>
            {<Review product={product} />}
            {(() => {
              return getProductPrice(
                product.productPrice.startPrice,
                product.productPrice.endPrice,
                product.productPrice.oldPrice,
                product.productPrice.currentPrice
              );
            })()}
          </div>
        </div>

        <div className=" d-flex flex-column align-items-center justify-content-evenly card-footer p-4 pt-0 border-top-0 bg-transparent">
          {getbtn(
            product.productPrice.startPrice,
            product.productPrice.endPrice,
            product.productId
          )}
        </div>
      </div>
    </div>
  );
}
export default ProductItem;
