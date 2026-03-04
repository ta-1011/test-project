import React from "react";
import NewsItem from "./NewsItem";
import { API_BASE_URL } from "../constants";

const NewsIndex = () => {
  return (
    <div className="mt-8">
      <ul>
        {posts.map((post) => (
          <NewsItem post={post} key={post.id} />
        ))}
      </ul>
    </div>
  );
};

export default NewsIndex;
