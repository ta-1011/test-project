import React from "react";

const NewsItem = ({ post }) => {
  return (
    <li className="p-6 mb-8 border">
      <div className="flex justify-between">
        <time>{post.createdAt}</time>
        <div className="flex gap-2">
          {post.categories?.map((category) => {
            return <span>{category}</span>;
          })}
        </div>
      </div>
      <h1 className="text-left text-4xl">{post.title}</h1>
      <p
        className="pt-2 text-left"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </li>
  );
};

export default NewsItem;
