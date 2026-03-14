import React from "react";
import { Link } from "react-router-dom";

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
        <h2 className="text-left text-2xl">{post.title}</h2>
        <p
          className="pt-4 text-left"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </Link>
    </li>
  );
};

export default NewsItem;
