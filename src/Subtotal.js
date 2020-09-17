import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2} // Number of decimals
        value={getBasketTotal(basket)} // The subtotal amount
        displayType={"text"} //Variable Type?
        thousandSeparator={true} //The commas in every thousand: 1,000,000.00
        prefix={"$"} //Prefix
      />

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
