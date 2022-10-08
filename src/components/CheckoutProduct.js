import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  //console.log('hhhhhhhhhhhhhhhhh',id, title, image, price, rating);

  const RemoveFromBasket = () => {
    // reove item from basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <>
      <div key={basket.id} className="checkoutProduct">
        <img className="checkoutProduct_image" src={image} alt="image_basket" />

        <div className="checkoutProduct_info">
          <p className="checkoutProduct_title">{title}</p>
          <p className="checkoutProduct_price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="checkoutProduct_rating">
            {Array(rating)
              .fill()
              .map((_, index) => (
                <p key={index}>⭐</p>
              ))}
          </div>
          <button onClick={RemoveFromBasket}>Remove from basket</button>
        </div>
      </div>
    </>
  );
}

export default CheckoutProduct;
