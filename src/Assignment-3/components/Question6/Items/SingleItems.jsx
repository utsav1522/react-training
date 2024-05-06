import React from "react";
import { useParams } from "react-router-dom";
import { items } from "./Mock";
const SingleItems = () => {
  const { id } = useParams();
  return (
    <div>
      <ul>
        <li>
          {" "}
          Item Index: {id} <br />
          Item Name: {items[id].itemName} <br /> Item Price: {items[id].price}
        </li>
      </ul>
    </div>
  );
};
export default SingleItems;
