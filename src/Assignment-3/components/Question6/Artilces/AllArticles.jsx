import React from "react";
import { article } from "./Mock";
const AllArticles = () => {
  return (
    <div>
      <h1>Items List is :</h1>
      <ul>
        {article.map((ele) => {
          return (
            <>
              <li>
                Article Index: {ele.id} <br />
                Article Name: {ele.content} <br /> Item Price: {ele.modified}
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default AllArticles;
