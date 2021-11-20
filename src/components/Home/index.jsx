import React from "react";
import { useGetPostsQuery } from "./../../services/postsApi";
import Post from "./Post";

export default function Home() {
  const { data = [], isLoading, isSuccess } = useGetPostsQuery();

  return (
    <div className="container my-3">
      {isLoading && <div>Loading...</div>}
      {isSuccess &&
        data &&
        data.map((post) => <Post key={post.id} post={post} />)}
    </div>
  );
}
