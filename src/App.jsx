import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout";
import NewsIndex from "./pages/NewsIndex";
import NewsDetail from "./pages/NewsDetail";
import Contact from "./pages/contact";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route path="/" element={<NewsIndex />} />
          <Route path="/post/:id" element={<NewsDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
