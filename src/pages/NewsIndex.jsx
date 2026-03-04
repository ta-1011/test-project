import React from "react";
import NewsItem from "./NewsItem";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_BASE_URL } from "../constants";

const NewsIndex = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/posts`);
        const { posts } = await res.json();
        setPosts(posts);
      } catch (error) {
        setError("記事の取得に失敗しました。");
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading) {
    return <p>記事を読み込み中です。</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (posts.length === 0) {
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
    <div className="mt-8">
      <h1 className="text-left text-4xl">記事一覧</h1>
      <ul className="mt-4">
        {posts.map((post) => (
          <NewsItem post={post} key={post.id} />
        ))}
      </ul>
    </div>
  );
};

export default NewsIndex;
