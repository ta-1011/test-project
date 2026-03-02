import React from "react";
import NewsItem from "./NewsItem";
import { posts } from "./data/posts";

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
