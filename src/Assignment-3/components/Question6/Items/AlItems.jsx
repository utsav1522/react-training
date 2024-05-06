import React from "react";
import { items } from "./Mock";

const AllItems = () => {
  return (
    <div>
      <h1>Items List is :</h1>
      <ul>
        {items.map((ele, index) => {
          return (
            <>
              <li>
                Item Index: {index} <br />
                Item Name: {ele.itemName} <br /> Item Price: {ele.price}
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default AllItems;
