import { useContext } from "react";
import { CartContext } from "./Question-11";

const Cart = () => {
  const { cart, setcart } = useContext(CartContext);

  const itemsList = [
    {
      itemName: "Apple",
      price: 100,
    },
    {
      itemName: "Orange",
      price: 80,
    },
    {
      itemName: "Banana",
      price: 70,
    },
    {
      itemName: "Dragon Fuit",
      price: 120,
    },
    {
      itemName: "Cherry",
      price: 200,
    },
  ];

  return (
    <div
      style={{
        display: "flex",
      }}
    >
      {itemsList.map((ele) => {
        return (
          <div
            style={{
              backgroundColor: "aliceblue",
              margin: "20px",
              alignItems: "center",
              marginLeft: "auto",
              marginRight: "auto",
              padding: "20px",
              border: "2px solid black",
            }}
          >
            <h4>ItemName: {ele.itemName}</h4>
            <p>Price: {ele.price}</p>
            <button
              style={{
                backgroundColor: "white",
                margin: "0px",
              }}
              onClick={() => {
                let newObj = cart.find(
                  (cartItems) => ele.itemName === cartItems.itemName
                );

                if (newObj === undefined) {
                  setcart([
                    ...cart,
                    {
                      ...ele,
                      quantity: 1,
                      key: new Date().toLocaleString(),
                    },
                  ]);
                } else if (newObj !== undefined) {
                  let prevQuantity = newObj.quantity;

                  const newCart = cart.filter((element) => {
                    return element.itemName !== newObj.itemName;
                  });
                  setcart([
                    ...newCart,
                    {
                      ...ele,
                      quantity: prevQuantity + 1,
                      key: new Date().toLocaleString(),
                    },
                  ]);
                }
              }}
            >
              Add Item
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
