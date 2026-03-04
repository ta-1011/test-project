import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { API_BASE_URL } from "../constants";

const NewsDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPost = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/posts/${id}`);
      const { post } = await res.json(); //詳細ページは
      setPost(post);
    } catch (error) {
      setError("記事の取得に失敗しました。");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  if (loading) {
    return <p>記事を読み込み中です。</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

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
