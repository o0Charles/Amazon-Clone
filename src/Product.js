import React from "react";
import CurrencyFormat from "react-currency-format";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({id, title, image, price, rating }) {
  const [{basket}, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item to the data layer
    dispatch({
      type: 'ADD_TO_BASKET',
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
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <strong>
            <CurrencyFormat
            decimalScale={2} // Number of decimals
            fixedDecimalScale={true}
            value={price} // The subtotal amount
            displayType={"text"} //Variable Type?
            thousandSeparator={true} //The commas in every thousand: 1,000,000.00
            prefix={"$"} //Prefix
            />
          </strong>
        </p>

        <div className="product__rating">
          {Array(rating).fill().map((_, i) => (<p>⭐</p>))}
        </div>
      </div>

      <img
        src={image}
        alt=""
      />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
