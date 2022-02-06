import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";


function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  console.log("add to basket", basket);

  const AddToBasket = () => {
    //MENGIRIM ITEM KE DATA LAYER
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <img src={image} alt="" />
      <div className="product__info">
        <p>{title}</p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐️</p>
            ))}
        </div>
        <p className="product__price">
          <small>Rp.</small>
          <strong>{price}</strong>
        </p>
      </div>

      <button onClick={AddToBasket}>Masukan Keranjang</button>
    </div>
  );
}

export default Product;
