import React from "react";
import NewsItem from "./NewsItem";
import { posts } from "./data/posts";

const NewsIndex = () => {
  return (
    <ul>
      {posts.map((post) => (
        <NewsItem post={post} key={post.id} />
      ))}
    </ul>
  );
};

export default NewsIndex;
