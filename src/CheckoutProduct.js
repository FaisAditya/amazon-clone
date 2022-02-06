import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  console.log("remove from basket", basket);
  const removeFromBasket = () => {
    //Hapus item dari keranjang
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐️</p>
            ))}
        </div>
        <p className="checkoutProduct__price">
          <small>Rp.</small>
          <strong>{price}</strong>
        </p>
        <button onClick={removeFromBasket}>Hapus Dari Keranjang</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
