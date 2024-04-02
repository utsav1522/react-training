/**
 * 
 * a shopping cart application using the useContext hook.
Set up a context to manage the state of the shopping cart.
Create components to display products and a shopping cart.
Use the useContext hook to access the cart state and update it.
Allow users to add and remove items from the cart.
Display the total price of items in the cart.

 */

import React, { useState } from "react";
import Cart from "./Question-11-helper";

export const CartContext = React.createContext();

const ShoppingCart = () => {
  const [cart, setCart] = useState([
    {
      itemName: "Item1",
      price: 100,
      quantity: 1,
      key: new Date().toLocaleString(),
    },
  ]);
  return (
    <>
      <CartContext.Provider value={{ cart: cart, setcart: setCart }}>
        <Cart />
      </CartContext.Provider>
      <h4>Cart Items</h4>
      <ul>
        {cart.length > 0 ? (
          cart.map((ele) => {
            return (
              <li>
                <h4>ItemName: {ele.itemName}</h4>
                <p>Price: {ele.price}</p>
                <p>Quantity: {ele.quantity}</p>
                <button
                  onClick={() => {
                    if (ele.quantity > 0) {
                      let prevQuantity = ele.quantity;
                      const newCart = cart.filter((element) => {
                        return element.itemName !== ele.itemName;
                      });
                      setCart([
                        ...newCart,
                        {
                          ...ele,
                          quantity: prevQuantity - 1,
                          key: new Date().toLocaleString(),
                        },
                      ]);
                    }
                    if (Number(ele.quantity) === 1) {
                      const newCart = cart.filter((element) => {
                        return element.itemName !== ele.itemName;
                      });
                      setCart(newCart);
                    }
                  }}
                >
                  Remove Item
                </button>
              </li>
            );
          })
        ) : (
          <h4>No Items Added to Cart</h4>
        )}
      </ul>

      <p
        style={{
          fontWeight: "bold",
          fontSize: "20px",
        }}
      >
        =================================
      </p>
      <p>
        Total is{" "}
        {cart.reduce((acc, ele) => {
          return acc + Number(ele.price) * Number(ele.quantity);
        }, 0)}
      </p>
      <p
        style={{
          fontWeight: "bold",
          fontSize: "20px",
        }}
      >
        =================================
      </p>
    </>
  );
};

export default ShoppingCart;
