import React from "react";
import { Link, useParams } from "react-router-dom";
import { posts } from "./data/posts";

const NewsDetail = () => {
  const { id } = useParams();

  const post = posts.find((p) => {
    return p.id === Number(id); //data内のidは、文字列でなくナンバーなので、ただの「id」だけでは×
  });

  if (!post) {
    return (
      <>
        <p className="mt-8">記事が見つかりませんでした。</p>
        <div>
          <Link to="/" className="topButton">
            トップへ戻る
          </Link>
        </div>
      </>
    );
  }

  return (
    <div>
      <div className="mt-8">
        <img src={post.thumbnailUrl} alt="" />
      </div>
      <div className="flex justify-between pt-4">
        <time>
          <time> {new Date(post.createdAt).toLocaleDateString("ja-JP")}</time>
        </time>
        <div className="flex gap-2">
          {post.categories?.map((category) => {
            return <span>{category}</span>;
          })}
        </div>
      </div>
      <h1 className="text-4xl">{post.title}</h1>
      <p
        className="pt-4"
        dangerouslySetInnerHTML={{ __html: post.content }}
      ></p>
    </div>
  );
};

export default NewsDetail;
