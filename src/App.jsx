import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import BaseLayout from "./layouts/BaseLayout";
import NewsIndex from "./NewsIndex";
import NewsDetail from "./NewsDetail";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route path="/" element={<NewsIndex />} />
          <Route path="/post/:id" element={<NewsDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
