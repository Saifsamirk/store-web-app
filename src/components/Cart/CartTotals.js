// get the total amount of money to be paid depending on the cart items' prices
import React from "react";
import { Link } from "react-router-dom";
import PaypalButton from "./PaypalButton";

// when we are going to clear the cart we going to go back to the home page
export default function CartTotals({ value, history }) {
  // we are going to use these values initialized in context.js file
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          {/*we are going to create the buttons on the rightmost column in the cart */}
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            {/*we are heading back to home page once we click on clear cart */}
            <Link to="/">
              <button
                className="btn btn-outline-danger text-uppercase mb-3 px-5"
                type="button"
                onClick={() => clearCart()}
              >
                clear cart
              </button>
            </Link>
            {/*Display the cart subtotal on the rightmost column*/}
            <h5>
              <span className="text-title"> subtotal : </span>
              <strong>${cartSubTotal}</strong>
            </h5>
            {/* Displaying the tax */}
            <h5>
              <span className="text-title"> tax : </span>
              <strong>${cartTax}</strong>
            </h5>
            {/* Displaying the total amount to be paid */}
            <h5>
              <span className="text-title"> total : </span>
              <strong>${cartTotal}</strong>
            </h5>
            <PaypalButton
              total={cartTotal}
              clearCart={clearCart}
              history={history}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
