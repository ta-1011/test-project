import React from "react";
import { Link } from "react-router";

const NewsItem = ({ post }) => {
  return (
    <li className="p-6 mb-8 border">
      <Link to={`/post/${post.id}`}>
        <div className="flex justify-between">
          <time> {new Date(post.createdAt).toLocaleDateString("ja-JP")}</time>
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
      </Link>
    </li>
  );
};

export default NewsItem;
