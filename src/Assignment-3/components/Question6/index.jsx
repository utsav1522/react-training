import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import SingleItems from "./Items/SingleItems";
import AllItems from "./Items/AlItems";
import Error from "./Error";
import SingleArticle from "./Artilces/SingleArticle";
import ShowItems from "./Items/ShowItems";
import ShowArticles from "./Artilces/ShowArticles";
import Home from "./Home";
import AllArticles from "./Artilces/AllArticles";
const ListParent = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/show-items" element={<ShowItems />}>
            <Route path="" element={<AllItems />} />
            <Route path=":id" element={<SingleItems />} />
          </Route>
          <Route path="/show-articles" element={<ShowArticles />}>
            <Route path="" element={<AllArticles />} />
            <Route path=":id" element={<SingleArticle />} />
          </Route>

          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
      {}
    </>
  );
};
export default ListParent;
