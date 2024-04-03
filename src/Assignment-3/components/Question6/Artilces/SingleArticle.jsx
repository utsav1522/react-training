import React from "react";
import { article } from "./Mock";
import { useParams } from "react-router-dom";

const SingleArticle = () => {
  const { id } = useParams();
  return (
    <div>
      <ul>
        <li>
          {" "}
          Article Index: {article[id].id} <br />
          Article Content: {article[id].content} <br /> Article Modified:{" "}
          {article[id].modified}
        </li>
      </ul>
    </div>
  );
};

export default SingleArticle;
