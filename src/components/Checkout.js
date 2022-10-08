import React from "react";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import Header from "./Header";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <>
      <Header />
      <div className="checkout">
        <div className="checkout_left">
          <img
            className="checkout_ad"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423592668_.jpg"
            alt=""
          />
          {basket?.length === 0 ? (
            <div>
              <h2> Your shopping basket is empty</h2>
              <p>
                The price and availability of items at Amazon.in are subject to
                change. The shopping cart is a temporary place to store a list
                of your items and reflects each item's most recent price.
              </p>
            </div>
          ) : (
            <div className="checkout_title">
              <h2>Your Shopping basket</h2>
              <hr></hr>
              {/* list out all the checkout product */}
              {basket?.map((item) => (
                <CheckoutProduct
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </div>
          )}
        </div>
        {basket.length > 0 && (
          <div className="checkout_right">
            <Subtotal />
          </div>
        )}
      </div>
    </>
  );
}

export default Checkout;
